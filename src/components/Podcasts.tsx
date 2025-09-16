import Image from "next/image";

export default function Podcasts() {
  const podcasts = [
    {
      title: "The New Yorker Radio Hour",
      description:
        "The New Yorker’s editor, David Remnick, presents interviews, profiles, and humor, in a co-production with WNYC Studios.",
      image:
        "https://media.newyorker.com/photos/6459103d5f9f00a78b901deb/1:1/w_1600,c_limit/PODCAST_BUNDLE_RADIO_HOUR.png",
    },
    {
      title: "In the Dark",
      description:
        "Long-form investigative journalism, hosted by Madeleine Baran.",
      image:
        "https://media.newyorker.com/photos/68222e4267e2e33c4b0cf33b/1:1/w_1600,c_limit/itd-pulitzer.png",
    },
    {
      title: "Critics at Large",
      description: "A weekly culture roundtable from The New Yorker’s critics.",
      image:
        "https://media.newyorker.com/photos/6516930907084e4e24f0b0cf/1:1/w_1600,c_limit/CAL-TILE.png",
    },
    {
      title: "The Political Scene Podcast",
      description: "Discussions about politics and more.",
      image:
        "https://media.newyorker.com/photos/6459132e84b5528bf14b04fe/1:1/w_1600,c_limit/PODCAST_BUNDLE_POLITICAL_SCENE.png",
    },
    {
      title: "Fiction Podcast",
      description:
        "A monthly reading and conversation with The New Yorker’s fiction editor, Deborah Treisman.",
      image:
        "https://media.newyorker.com/photos/6459104248c55341d9f1056f/1:1/w_1600,c_limit/PODCAST_BUNDLE_FICTION.png",
    },
    {
      title: "The Writer’s Voice",
      description:
        "New Yorker fiction writers read their stories from the magazine.",
      image:
        "https://media.newyorker.com/photos/64591042464b9a5c36a79ece/1:1/w_1600,c_limit/PODCAST_BUNDLE_TWV.png",
    },
    {
      title: "Poetry Podcast",
      description:
        "Readings and conversations with The New Yorker’s poetry editor, Kevin Young.",
      image:
        "https://media.newyorker.com/photos/645910438675e7ac08ac4df2/1:1/w_1600,c_limit/PODCAST_BUNDLE_POETRY.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center my-8 font-serif">
        <h1 className="text-5xl">PODCASTS</h1>
        <p className="text-gray-500 mt-2">
          All of The New Yorker’s podcasts, featuring politics, culture, short
          stories, and more.
        </p>
      </div>
      <div className="space-y-8">
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-gray-200 pt-8"
          >
            <div className="md:col-span-2 font-serif">
              <h2 className="text-3xl mb-2">{podcast.title}</h2>
              <p className="text-gray-700 mb-4">{podcast.description}</p>
              <div className="flex flex-col gap-3">
                <button className="border bg-neutral-500 text-white px-6 py-2">
                  Start Listening
                </button>
                <button className="border border-gray-400 px-6 py-2">
                  All Episodes
                </button>
              </div>
            </div>
            <div className="md:col-span-1">
              <Image
                src={podcast.image}
                alt={podcast.title}
                className="w-64 h-auto"
                width={320}
                height={480}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
