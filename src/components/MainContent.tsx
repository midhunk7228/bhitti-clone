export default function MainContent() {
  const articles = [
    {
      title: "The Fight to Free Julian Assange",
      author: "John Cassidy",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "The Rise of the New-Old Left",
      author: "E. J. Dionne, Jr.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "What Is Happening in the Red Sea?",
      author: "Jon Lee Anderson",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "The Woman Who Remade the Met",
      author: "Calvin Tomkins",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "The End of the Two-State Solution",
      author: "Bernard Avishai",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "The American Exception in Abortion",
      author: "Margaret Talbot",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="border border-gray-200 p-4">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-serif mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">By {article.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}