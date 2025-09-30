"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PdfFlipbook from "./PdfFlipbook";

export default function Magazine() {
  const [pdfFile, setPdfFile] = useState<Blob | null>(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/magazines?filters[slug]=sep-brick&populate=*`
      );
      const apiResponse = await response.json();
      const pdfUrl = apiResponse.data[0].magaine[0].url;
      const fullPdfUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${pdfUrl}`;
      const pdfResponse = await fetch(fullPdfUrl);
      const blob = await pdfResponse.blob();
      setPdfFile(blob);
    };
    fetchPdf();
  }, []);

  const sections = [
    {
      title: "GOINGS ON",
      articles: [
        {
          title: "The Ministry of Joyer McDonald’s Sculptures",
          slug: "ministry-of-joyer-mcdonalds-sculptures",
          description:
            "Also: New York City Ballet and New York Philharmonic kick off their fall seasons; Non-binary performers take the stage in ‘I Am Loving, Plaza,’ and more.",
          author: "By Hilton Als, Sheldon Pearce, and more",
          image: "/joyer.webp",
        },
        {
          title: "Andal Holland on Stories of Community",
          slug: "andal-holland-on-stories-of-community",
          description:
            "The ‘Luce,’ ‘Brooklyn,’ and ‘Moonlight’ actor recommends some of his favorites.",
          author: "",
          image: "/holland.webp",
        },
      ],
    },
    {
      title: "THE TALK OF THE TOWN",
      articles: [
        {
          title:
            "R.F.K., Jr., Brings More Chaos to Cover Policy and the C.D.C.",
          slug: "the-internet-s-own-boy",
          description:
            "When winter is at its worst, Donald Trump stated that Kennedy would ‘go wild on health.’ Previous trials, previous trials.",
          author: "By Steve Coll",
          image: "/walk.webp",
        },
      ],
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif">THE MAGAZINE</h1>
        <p className="text-sm text-gray-500">September 15, 2025</p>
      </div>
      <div className="flex justify-center ">
        {pdfFile ? <PdfFlipbook file={pdfFile} /> : <p>Loading PDF...</p>}
      </div>
      <div className="text-center text-sm text-gray-500 mb-20">
        <p>
          Subscribe to our newsletter to get the latest on our new issue and
          more.{" "}
          <a href="#" className="underline">
            Browse our books
          </a>
          .
        </p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-serif text-center mb-4">
            {section.title}
          </h2>
          <div className="space-y-8">
            {section.articles.map((article, articleIndex) => (
              <div key={articleIndex}>
                <Link href={`/magazine/${article.slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-serif mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {article.description}
                      </p>
                      {article.author && (
                        <p className="text-sm text-gray-500">
                          {article.author}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-1">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="h-60 w-auto "
                        width={320}
                        height={480}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
