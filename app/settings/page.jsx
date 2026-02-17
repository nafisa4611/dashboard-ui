export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="space-y-4">
        <select className="w-full px-3 py-2 border rounded-lg bg-transparent">
          <option>Theme: Dark</option>
          <option>Theme: Light</option>
        </select>

        <select className="w-full px-3 py-2 border rounded-lg bg-transparent">
          <option>Currency: USD</option>
          <option>Currency: EUR</option>
        </select>

        <select className="w-full px-3 py-2 border rounded-lg bg-transparent">
          <option>Language: English</option>
          <option>Language: Bangla</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Email Notifications
        </label>
      </div>
    </div>
  );
}
