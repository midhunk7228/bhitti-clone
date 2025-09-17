"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PdfFlipbook from "./PdfFlipbook";

export default function Magazine() {
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const response = await fetch(
        "http://localhost:1337/api/magazines?filters[slug]=hilite&populate=*"
      );
      const apiResponse = await response.json();
      const pdfUrl = apiResponse.data[0].magaine[0].url;
      const fullPdfUrl = `http://localhost:1337${pdfUrl}`;
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
          image:
            "https://media.newyorker.com/photos/68b8b7e2d7872a699ef751d2/4:3/w_640,c_limit/JM0040%20Reverend%20Joyce%20McDonald%20_Our%20Lives%20Mattered%20(Breonna)_%20%5BView%201%5D,%202020,%20Air-dry%20clay,%20magic%20marker,%20white%20out,%20Elmber_s%20glue,%2018%20x%2011%20in,%20Courtesy%20Gordon%20Robichaux,%20NY_Photo%20Paul%20Salveson%20(1)%20copy.jpg",
        },
        {
          title: "Andal Holland on Stories of Community",
          slug: "andal-holland-on-stories-of-community",
          description:
            "The ‘Luce,’ ‘Brooklyn,’ and ‘Moonlight’ actor recommends some of his favorites.",
          author: "",
          image:
            "https://media.newyorker.com/photos/6851c4bc2e50bf4f03899837/4:3/w_640,c_limit/BookCurrents_SocialSite.jpg",
        },
      ],
    },
    {
      title: "THE TALK OF THE TOWN",
      articles: [
        {
          title:
            "R.F.K., Jr., Brings More Chaos to Cover Policy and the C.D.C.",
          slug: "rfk-jr-brings-more-chaos-to-cover-policy-and-the-cdc",
          description:
            "When winter is at its worst, Donald Trump stated that Kennedy would ‘go wild on health.’ Previous trials, previous trials.",
          author: "By Steve Coll",
          image:
            "https://media.newyorker.com/photos/68bb4fb951522f6b23ad2e19/4:3/w_640,c_limit/r47448.png",
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
