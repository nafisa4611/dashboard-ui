"use client";

export default function CreditCardWidget() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-6 text-white 
    bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600
    shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />

      <p className="text-xs opacity-80">Credit Card</p>

      <h3 className="text-3xl font-semibold mt-4 tracking-wide">
        $3,450
      </h3>

      <p className="text-xs opacity-80 mt-1">Limit: $5,000</p>

      {/* Card Bottom */}
      <div className="flex justify-between items-end mt-10">
        <div>
          <p className="text-[10px] opacity-70">Card Holder</p>
          <p className="text-sm font-medium">John Doe</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] opacity-70">Expires</p>
          <p className="text-sm font-medium">12/28</p>
        </div>
      </div>
    </div>
  );
}
