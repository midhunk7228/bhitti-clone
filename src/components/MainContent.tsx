import Image from "next/image";
import LayoutCardDeck from "./LayoutCardDeck";

export default function MainContent() {
  const moreStories = [
    {
      title: "A New Biography of Martin Luther King, Jr.",
      author: "By David Remnick",
      image: "/bhitti-home.webp",
    },
    {
      title: "The Case for a Four-Day Workweek",
      author: "By James Surowiecki",
      image: "/bhitti-home.webp",
    },
    {
      title: "The Art of the Steal",
      author: "By Patrick Radden Keefe",
      image: "/bhitti-home.webp",
    },
  ];

  const carouselArticles = [
    {
      title: "Intimate Daily Moments with Strangers",
      author: "By Pat Cassels and Siobhán Gallagher",
      image: "/bhitti-home.webp",
    },
    {
      title: "A Round of Gulf?",
      author: "By Ian Frazier",
      image: "/round-of-gulf.webp",
    },
    {
      title: "Ranking Things from Quiet Luxury to Loud Luxury",
      author: "By Madeline Goetz and Jack Sentell",
      image: "/bhitti-home.webp",
    },
    {
      title: "The Gardener’s Dilemma",
      author: "By Tara Booth",
      image: "/bhitti-home.webp",
    },
    {
      title: "A Round of Gulf?",
      author: "By Ian Frazier",
      image: "/round-of-gulf.webp",
    },
    {
      title: "The Gardener’s Dilemma",
      author: "By Tara Booth",
      image: "/bhitti-home.webp",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-4">
      {/* More Stories Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {moreStories.map((article, index) => (
          <article key={index}>
            <Image
              src={article.image}
              alt={article.title}
              className="w-full h-auto"
              width={320}
              height={480}
            />
            <h3 className="text-xl font-serif mt-2">{article.title}</h3>
            <p className="text-gray-500">{article.author}</p>
          </article>
        ))}
      </section>

      {/* Carousel Section */}
      <section className="mb-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4">
          {carouselArticles.map((article, index) => (
            <article key={index} className="snap-center flex-shrink-0 w-80">
              <Image
                src={article.image}
                alt={article.title}
                className="w-64 h-48"
                width={320}
                height={480}
              />
              <h3 className="text-lg font-serif mt-2">{article.title}</h3>
              <p className="text-gray-500">{article.author}</p>
            </article>
          ))}
        </div>
      </section>

      <LayoutCardDeck />

      {/* Subscription Banner */}
      <section className="bg-yellow-100 p-8 text-center mb-8">
        <h2 className="text-4xl font-serif mb-2">Unlimited Access</h2>
        <p className="mb-4">
          Subscribe for $2.50 <span className="line-through">$1</span> a week
          for one year, plus get a free tote.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold">
          Subscribe
        </button>
        <p className="text-xs text-gray-500 mt-2">Cancel or pause anytime.</p>
      </section>
    </main>
  );
}
