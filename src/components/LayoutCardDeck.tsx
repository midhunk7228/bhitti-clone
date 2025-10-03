"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import ArticleCard from "@/components/ArticleCard"; // adjust path if needed
import CardDeck from "./CardDeck";
import { CardDeckProps, StrapiResponse } from "@/types";

export default function LayoutCardDeck() {
  const [criticArticle, setCriticArticle] = useState<CardDeckProps[]>([]);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  useEffect(() => {
    const fetchCriticCagegory = async () => {
      const response = await fetch(
        `${STRAPI_URL}/api/articles?filters[category][slug][$eq]=magazine&populate=*&sort=createdAt:desc&pagination[limit]=6`
      );
      const apiResponse = await response.json();
      const mappedData = (apiResponse as StrapiResponse).data.map((item) => {
        const { title, description, cover, category, author, slug, subgenre } =
          item;

        return {
          image: cover ? STRAPI_URL + cover.url : "/fallback.png",
          alt: cover?.alternativeText || title,
          category: category?.name || "",
          title,
          description,
          author: author?.name || "Unknown",
          slug,
          subgenre,
        };
      });
      setCriticArticle(mappedData);
    };
    fetchCriticCagegory();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>The Critic</title>
        <meta name="description" content="The Critic Magazine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold font-serif tracking-wider text-gray-800 mb-4">
            THE CRITIC
          </h1>
          <div className="flex justify-center">
            <Image
              src="/category_border.gif"
              alt="Section border"
              width={300}
              height={250}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto pb-10">
          {criticArticle.map((article, idx) => (
            <CardDeck key={idx} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
