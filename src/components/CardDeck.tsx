import Image from "next/image";
import { CardDeckProps } from "@/types";
import Link from "next/link";

export default function CardDeck({
  image,
  alt,
  score,
  category,
  title,
  description,
  author,
  slug,
  subgenre,
}: CardDeckProps) {
  console.log("categoryllk", category);
  return (
    <Link href={`/${category}/${slug}`}>
      <article className="text-center">
        <div className="mb-6 relative">
          <Image
            src={image}
            alt={alt}
            width={200}
            height={260}
            className="w-52 h-64 rounded-lg mx-auto object-cover"
          />
        </div>
        <div className="text-red-600 text-sm font-medium tracking-wide mb-3 ">
          {subgenre?.replaceAll("-", " ").toUpperCase()}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-gray-800 font-medium text-sm">By {author}</div>
      </article>
    </Link>
  );
}
