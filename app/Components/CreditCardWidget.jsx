
"use client";

export default function CreditCardWidget() {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <p className="text-xs text-muted">Credit Card</p>
      <h3 className="text-2xl font-semibold text-textColor mt-2">$3,450</h3>
      <p className="text-xs text-muted mt-1">Limit: $5,000</p>
      <p className="text-xs text-muted mt-2">Last Transaction: $120 - Groceries</p>
    </div>
  );
}
