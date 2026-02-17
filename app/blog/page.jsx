const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build fast and SEO-friendly apps using Next.js.",
    date: "Jan 12, 2026",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer",
    excerpt: "Utility-first CSS is changing how we build UI.",
    date: "Jan 5, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Blog</h1>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 rounded-xl border border-muted bg-surface hover:shadow transition"
          >
            <h2 className="text-xl font-medium">{blog.title}</h2>
            <p className="text-muted text-sm mt-2">{blog.excerpt}</p>
            <p className="text-xs text-muted mt-4">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
