"use client";
import { featureDataType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

function FeatureStory() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const [featureStory, setFeatureStory] = useState<featureDataType>({
    id: null,
    documentId: "",
    title: "",
    description: "",
    link: false,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    article: null,
  });
  useEffect(() => {
    const fetchFeatureStory = async () => {
      const response = await fetch(
        `${STRAPI_URL}/api/feature-story?populate=*`
      );
      const apiResponse = await response.json();
      if (apiResponse?.data) {
        setFeatureStory(apiResponse?.data);
      }
    };
    fetchFeatureStory();
  }, []);
  console.log(featureStory, "featureStory");

  return (
    <div className="bg-white flex items-center justify-center my-8 font-serif">
      <div className=" w-full rounded-lg overflow-hidden">
        {/* Desktop Layout: Side by side */}
        <div className="lg:flex lg:h-[600px]">
          {/* Content Section - Left half on desktop, top on mobile */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-center items-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h1 className="text-xs font-medium font-serif text-[#db3435] mb-4 leading-tight hover:underline">
                {featureStory.title.toUpperCase()}
              </h1>
              <h1 className="text-2xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                {featureStory.title}
              </h1>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-8">
                {featureStory.description}
              </p>
            </div>
          </div>

          {/* Image Section - Right half on desktop, bottom on mobile */}
          <div className="lg:w-1/2 relative  flex items-center justify-center p-8">
            <div className="relative w-full aspect-square">
              {/* Geometric Art Pattern */}
              <Image
                src="/r47424.png"
                alt="Decorative art"
                width={512}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureStory;
