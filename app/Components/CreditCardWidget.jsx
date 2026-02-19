"use client";

export default function CreditCardWidget() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] p-8 text-black bg-[#bfff00] shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-12">
        <div className="w-12 h-8 bg-black/10 rounded-md backdrop-blur-md border border-black/5" />
        <div className="flex gap-1">
          <div className="w-1 h-4 bg-black/40 rounded-full" />
          <div className="w-1 h-4 bg-black/60 rounded-full" />
          <div className="w-1 h-4 bg-black rounded-full" />
        </div>
      </div>

      <p className="text-xl tracking-[0.2em] font-medium mb-6">1234 1234 1234 1234</p>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-wider opacity-60">Card Holder</p>
          <p className="text-sm font-bold uppercase">Olivia Rhye</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] uppercase opacity-60">Exp</p>
            <p className="text-sm font-bold">06/24</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase opacity-60">CVV</p>
            <p className="text-sm font-bold">123</p>
          </div>
        </div>
      </div>
    </div>
  );
}