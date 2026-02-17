export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-2xl">
          U
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <p className="text-muted">Frontend Developer</p>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-muted bg-surface">
          <h3 className="font-medium mb-2">About</h3>
          <p className="text-sm text-muted">
            Passionate frontend developer focused on building clean UI,
            scalable components, and modern web applications using React
            and Next.js.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-muted bg-surface">
          <h3 className="font-medium mb-2">Contact</h3>
          <p className="text-sm text-muted">Email: you@example.com</p>
          <p className="text-sm text-muted">Location: Remote</p>
        </div>
      </div>
    </div>
  );
}
