const notifications = [
  {
    id: 1,
    title: "New comment on your blog",
    description: "Someone commented on “Getting started with React”.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    title: "Profile updated",
    description: "Your profile information was updated successfully.",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: 3,
    title: "New follower",
    description: "John Doe started following you.",
    time: "Yesterday",
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-xl border ${
              n.unread
                ? "bg-primary/5 border-primary"
                : "bg-surface border-muted"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{n.title}</h3>
                <p className="text-sm text-muted mt-1">{n.description}</p>
              </div>
              <span className="text-xs text-muted">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
