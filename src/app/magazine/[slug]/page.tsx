export const revalidate = 60; // re-build every 60s

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MagazineDetail from "@/components/MagazineDetail";
import { articleProps, MagazineDetailPageProps } from "@/types";

interface MagazineDetailPageProps {
  params: { slug: string };
}
export default function MagazineDetailPage({
  params,
}: MagazineDetailPageProps) {
  return (
    <div>
      <Header />
      <MagazineDetail slug={params.slug} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`
    );
    if (!res.ok) {
      console.error("Failed to fetch magazines:", res.status, res.statusText);
      return [];
    }
    const posts = await res.json();
    if (!posts || !Array.isArray(posts.data)) {
      console.error("Invalid data format from API:", posts);
      return [];
    }
    console.log(
      "posts.data",
      posts.data.map((post: articleProps) => ({
        slug: post.slug,
      }))
    );
    return posts.data.map((post: articleProps) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export const dynamic = "force-dynamic"; // always fetch fresh
