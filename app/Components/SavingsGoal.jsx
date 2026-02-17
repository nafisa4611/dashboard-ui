

export default function SavingsGoal() {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-sm font-semibold text-textColor">Savings Goal</h3>
      <p className="text-xs text-muted mt-1">$3,200 / $10,000</p>

      <div className="w-full h-2 bg-border rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-primary w-[32%]" />
      </div>

      <p className="text-xs text-muted mt-2">32% completed</p>
    </div>
  );
}
