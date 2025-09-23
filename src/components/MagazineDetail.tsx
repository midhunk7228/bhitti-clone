import Image from "next/image";

interface PageProps {
  slug: string;
}
export default function MagazineDetail({ slug }: PageProps) {
  const article = {
    title: "They’ll Take You to the Candy Shop",
    author: "By Hannah Goldfield",
    date: "September 8, 2025",
    illustration: "Illustration by João Fazenda",
    body: [
      "Earlier this year, the identical twins Adeev and Ezra Potash, who are from Omaha, Nebraska, were named that state’s first-ever Composer Laureates. As adolescents, Adeev (trumpet) and Ezra (trombone) caught the attention of Warren Buffett, who hired them to play at Berkshire Hathaway shareholder meetings; in high school, they were encouraged to apply to conservatories by Wynton Marsalis, with whom they have since performed. As adults, they’ve recorded and released three albums and written scores for “RuPaul’s Drag Race.” If there’s anything they’re more devoted to than music, it’s candy. On a recent Tuesday afternoon, the brothers, wearing matching cherry-red-and-lime-green eyeglasses, browsed the pick-and-mix bins at Kändi, a Swedish-style sweets shop in Los Angeles. They were joined by the actor Martin Starr, the co-founder of their new candy company, Sweet Stash, and by Ellen Van Dusen, of the cult housewares line Dusen Dusen, who’d designed the brightly colored packaging for their first product: a bag of multi-flavored gummies in the shape of music notes, called Jamz, which debuted this month.",
    ],
    image: "/group.webp",
  };

  const moreArticles = [
    {
      title: "A New Biography of Martin Luther King, Jr.",
      author: "By David Remnick",
      image: "/group.webp",
    },
    {
      title: "The Case for a Four-Day Workweek",
      author: "By James Surowiecki",
      image: "/watch.webp",
    },
    {
      title: "The Art of the Steal",
      author: "By Patrick Radden Keefe",
      image: "/disaster.webp",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center my-8">
        <p className="text-sm text-gray-500">Cavity Dept.{slug}</p>
        <h1 className="text-5xl font-serif my-2">{article.title}</h1>
        <p className="text-gray-500">
          The Composer Laureate twins Adeev and Ezra Potash team up with the
          actor Martin Starr to build the perfect gummy.
        </p>
        <p className="text-sm text-gray-500 mt-2">By {article.author}</p>
        <p className="text-sm text-gray-500">{article.date}</p>
      </div>
      <Image
        src={article.image}
        alt={article.title}
        className="w-2/3 h-auto my-8"
        width={320}
        height={480}
      />
      <p className="text-xs text-gray-500 text-center mb-8">
        {article.illustration}
      </p>
      <div className="prose lg:prose-xl mx-auto">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Subscription prompt */}
      <div className="text-center my-8 p-8 border-y border-gray-200">
        <h2 className="text-2xl font-serif mb-2">Your window is closing.</h2>
        <p className="text-gray-500 mb-4">
          Don’t lose these views. Get full access for $2.50 $1 a week for one
          year, plus a free tote. Cancel anytime.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2">See Offers</button>
      </div>

      {/* New Yorker Favorites */}
      <div className="my-8">
        <h3 className="text-2xl font-serif mb-4">New Yorker Favorites</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            A professor claimed to be Native American. Did she know she wasn’t?
          </li>
          <li>Ina Garten and the age of abundance.</li>
          <li>
            Kanye West bought an architectural treasure—then gave it a violent
            remix.
          </li>
          <li>Why so many people are going “no contact” with their parents.</li>
          <li>
            How a homegrown teen gang punctured the image of an upscale
            community.
          </li>
          <li>Fiction by James Thurber: “The Secret Life of Walter Mitty.”</li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="my-8 text-center">
        <h3 className="text-2xl font-serif mb-2">The New Yorker Newsletter</h3>
        <p className="text-gray-500 mb-4">
          Our daily dispatch, featuring reporting, essays, humor, fiction,
          criticism, and much.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="E-mail address"
            className="border border-gray-400 p-2"
          />
          <button type="submit" className="bg-black text-white px-6 py-2">
            Sign Up
          </button>
        </form>
      </div>

      {/* Read More */}
      <div className="my-8">
        <h3 className="text-2xl font-serif text-center mb-4">READ MORE</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moreArticles.map((article, index) => (
            <div key={index}>
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
                width={320}
                height={480}
              />
              <h3 className="text-xl font-serif mt-2">{article.title}</h3>
              <p className="text-gray-500">{article.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
