import Link from "next/link";

export default function SubNav() {
  const links = [
    { href: "#", label: "The Latest" },
    { href: "#", label: "News" },
    { href: "#", label: "Books & Culture" },
    { href: "#", label: "Fiction & Poetry" },
    { href: "#", label: "Humor & Cartoons" },
    { href: "/magazine", label: "Magazine" },
    { href: "#", label: "Puzzles & Games" },
    { href: "#", label: "Video" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "#", label: "Goings On" },
    { href: "#", label: "Shop" },
    { href: "#", label: "100th Anniversary" },
  ];

  return (
    <nav className="border-y border-gray-200 py-2 font-serif font-normal">
      <ul className="flex justify-center space-x-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
