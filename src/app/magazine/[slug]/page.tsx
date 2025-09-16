import MagazineDetail from "@/components/MagazineDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [
    { slug: "ministry-of-joyer-mcdonalds-sculptures" },
    { slug: "andal-holland-on-stories-of-community" },
    { slug: "rfk-jr-brings-more-chaos-to-cover-policy-and-the-cdc" },
  ];
}

export default function MagazineDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Header />
      <MagazineDetail slug={params.slug} />
      <Footer />
    </div>
  );
}
