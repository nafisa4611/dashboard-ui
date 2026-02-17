export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Analytics</h1>

      <div className="flex gap-4">
        <input type="date" className="px-3 py-2 border rounded-lg bg-transparent" />
        <input type="date" className="px-3 py-2 border rounded-lg bg-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-72 bg-surface rounded-xl flex items-center justify-center text-muted">
          Pie Chart (Categories)
        </div>
        <div className="h-72 bg-surface rounded-xl flex items-center justify-center text-muted">
          Monthly Bar Chart
        </div>
      </div>
    </div>
  );
}
