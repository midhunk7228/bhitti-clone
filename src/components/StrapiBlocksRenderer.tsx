// components/StrapiBlocksRenderer.tsx
import React from "react";

interface StrapiBlock {
  type: string;
  children: {
    text: string;
    type: string;
  }[];
}

interface StrapiBlocksRendererProps {
  content: StrapiBlock[];
}

type ParsedMarkdown =
  | { type: "heading"; level: number; text: string }
  | { type: "quote"; text: string }
  | { type: "list-item"; text: string }
  | { type: "paragraph"; text: string }
  | null;

interface Match {
  start: number;
  end: number;
  fullMatch: string;
  content: string;
  url?: string;
  component: string;
}

type GroupedContentItem =
  | (StrapiBlock & { index: number })
  | { isList: true; items: (StrapiBlock & { index: number })[] };

function isListItem(item: GroupedContentItem): item is { isList: true; items: (StrapiBlock & { index: number })[] } {
    return 'isList' in item;
}

export default function StrapiBlocksRenderer({
  content,
}: StrapiBlocksRendererProps) {
  if (!content || !Array.isArray(content)) return null;

  const parseMarkdown = (text: string): ParsedMarkdown => {
    if (!text || text.trim() === "") return null;

    // Check if it's a heading
    const headingMatch = text.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      return { type: "heading", level, text: headingText };
    }

    // Check if it's a blockquote
    if (text.startsWith(">")) {
      const quoteText = text.replace(/^>\s*/, "");
      return { type: "quote", text: quoteText };
    }

    // Check if it's a list item
    if (text.match(/^[-*]\s+/)) {
      const listText = text.replace(/^[-*]\s+/, "");
      return { type: "list-item", text: listText };
    }

    // Regular paragraph
    return { type: "paragraph", text };
  };

  const renderFormattedText = (text: string): React.ReactNode => {
    if (!text) return null;

    // Parse markdown formatting within text
    const parts: React.ReactNode[] = [];
    let currentIndex = 0;
    let key = 0;

    // Regex patterns for different markdown styles
    const patterns = [
      { regex: /\*\*(.+?)\*\*/g, component: "strong" }, // Bold
      { regex: /\*(.+?)\*/g, component: "em" }, // Italic
      { regex: /__(.+?)__/g, component: "strong" }, // Bold alternative
      { regex: /_(.+?)_/g, component: "em" }, // Italic alternative
      { regex: /~~(.+?)~~/g, component: "s" }, // Strikethrough
      { regex: /`(.+?)`/g, component: "code" }, // Inline code
      { regex: /\[(.+?)\]\((.+?)\)/g, component: "link" }, // Links
    ];

    // Find all matches
    const allMatches: Match[] = [];
    patterns.forEach(({ regex, component }) => {
      const matches = [...text.matchAll(regex)];
      matches.forEach((match) => {
        allMatches.push({
          start: match.index!,
          end: match.index! + match[0].length,
          fullMatch: match[0],
          content: match[1],
          url: match[2], // For links
          component,
        });
      });
    });

    // Sort matches by position
    allMatches.sort((a, b) => a.start - b.start);

    // Remove overlapping matches (keep first one)
    const validMatches: Match[] = [];
    let lastEnd = -1;
    allMatches.forEach((match) => {
      if (match.start >= lastEnd) {
        validMatches.push(match);
        lastEnd = match.end;
      }
    });

    // Build the formatted text
    validMatches.forEach((match) => {
      // Add text before match
      if (currentIndex < match.start) {
        parts.push(
          <span key={`text-${key++}`}>
            {text.substring(currentIndex, match.start)}
          </span>
        );
      }

      // Add formatted content
      if (match.component === "link") {
        parts.push(
          <a
            key={`link-${key++}`}
            href={match.url}
            className="text-blue-600 hover:text-blue-800 underline"
            target={match.url && match.url.startsWith("http") ? "_blank" : undefined}
            rel={
              match.url && match.url.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
          >
            {match.content}
          </a>
        );
      } else if (match.component === "code") {
        parts.push(
          <code
            key={`code-${key++}`}
            className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {match.content}
          </code>
        );
      } else {
        parts.push(
          React.createElement(
            match.component,
            { key: `${match.component}-${key++}` },
            match.content
          )
        );
      }

      currentIndex = match.end;
    });

    // Add remaining text
    if (currentIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`}>{text.substring(currentIndex)}</span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  const renderBlock = (
    block: StrapiBlock & { index?: number },
    index: number
  ): React.ReactNode => {
    if (!block.children || block.children.length === 0) return null;

    const text = block.children[0]?.text || "";
    if (text.trim() === "") return null;

    const parsed = parseMarkdown(text);

    if (!parsed) {
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {renderFormattedText(text)}
        </p>
      );
    }

    switch (parsed.type) {
      case "heading":
        const HeadingTag = `h${parsed.level}`;
        const headingClasses: { [key: number]: string } = {
          1: "text-4xl font-bold mb-6 mt-8 text-gray-900",
          2: "text-3xl font-bold mb-5 mt-7 text-gray-900",
          3: "text-2xl font-semibold mb-4 mt-6 text-gray-900",
          4: "text-xl font-semibold mb-3 mt-5 text-gray-900",
          5: "text-lg font-semibold mb-2 mt-4 text-gray-900",
          6: "text-base font-semibold mb-2 mt-3 text-gray-900",
        };
        return React.createElement(
          HeadingTag,
          { key: `heading-${index}`, className: headingClasses[parsed.level] },
          renderFormattedText(parsed.text)
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-6 py-2 my-4 italic text-gray-600 bg-gray-50 rounded-r"
          >
            {renderFormattedText(parsed.text)}
          </blockquote>
        );

      case "list-item":
        return (
          <li key={index} className="text-gray-700 ml-6 mb-2">
            {renderFormattedText(parsed.text)}
          </li>
        );

      case "paragraph":
      default:
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {renderFormattedText(parsed.text)}
          </p>
        );
    }
  };

  // Group consecutive list items
  const groupedContent: GroupedContentItem[] = [];
  let currentList: (StrapiBlock & { index: number })[] = [];

  content.forEach((block, index) => {
    const text = block.children?.[0]?.text || "";
    const parsed = parseMarkdown(text);

    if (parsed?.type === "list-item") {
      currentList.push({ ...block, index });
    } else {
      if (currentList.length > 0) {
        groupedContent.push({ isList: true, items: currentList });
        currentList = [];
      }
      groupedContent.push({ ...block, index });
    }
  });

  // Add remaining list items
  if (currentList.length > 0) {
    groupedContent.push({ isList: true, items: currentList });
  }

  return (
    <div className="prose prose-lg max-w-none">
      {groupedContent.map((item, idx) => {
        if (isListItem(item)) {
          return (
            <ul key={`list-${idx}`} className="list-disc mb-4 space-y-1">
              {item.items.map((listItem) =>
                renderBlock(listItem, listItem.index!)
              )}
            </ul>
          );
        }
        return renderBlock(item, item.index);
      })}
    </div>
  );
}
