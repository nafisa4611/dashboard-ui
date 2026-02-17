export default function Badge({ status }) {
  const styles = {
    Completed: "bg-green-500/15 text-green-400",
    Pending: "bg-yellow-500/15 text-yellow-400",
    Failed: "bg-red-500/15 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${
        styles[status] || "bg-muted text-muted"
      }`}
    >
      {status}
    </span>
  );
}
