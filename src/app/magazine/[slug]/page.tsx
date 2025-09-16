import MagazineDetail from '@/components/MagazineDetail';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MagazineDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Header />
      <MagazineDetail slug={params.slug} />
      <Footer />
    </div>
  );
}