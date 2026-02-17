const notes = [
  {
    id: 1,
    title: "React Hooks",
    content: "useState, useEffect, useContext, custom hooks...",
  },
  {
    id: 2,
    title: "Next.js Routing",
    content: "App Router, layouts, dynamic routes, metadata.",
  },
  {
    id: 3,
    title: "Tailwind Tips",
    content: "Use container queries, custom themes, and plugins.",
  },
];

export default function NotesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-5 rounded-xl border border-muted bg-surface hover:shadow"
          >
            <h3 className="font-medium mb-2">{note.title}</h3>
            <p className="text-sm text-muted">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
