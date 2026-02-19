"use client";

const categories = [
  { name: "Rent", percentage: 95, distribution: [20, 40, 60, 80, 95] },
  { name: "Groceries", percentage: 77, distribution: [10, 30, 50, 70, 77] },
  { name: "Transportation", percentage: 64, distribution: [15, 35, 45, 64] },
  { name: "Dining Out", percentage: 60, distribution: [10, 25, 40, 60] },
  { name: "Entertainment", percentage: 56, distribution: [5, 20, 35, 56] },
];

export default function ExpenseCategories() {
  return (
    <div className="space-y-5">
      {categories.map((cat) => (
        <div key={cat.name} className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400">{cat.name}</span>
            <span className="text-zinc-300 font-medium">{cat.percentage}%</span>
          </div>
          
          <div className="relative h-4 flex items-center">
            {/* The Horizontal Track */}
            <div className="absolute w-full h-[1px] bg-zinc-800" />
            
            {/* The "Bubbles" - representing transaction density */}
            {cat.distribution.map((dot, index) => (
              <div
                key={index}
                className="absolute rounded-full bg-[#bfff00] transition-all hover:scale-150 cursor-pointer"
                style={{
                  left: `${dot}%`,
                  width: `${index * 3 + 4}px`, // Dots get larger toward the end
                  height: `${index * 3 + 4}px`,
                  opacity: index === cat.distribution.length - 1 ? 1 : 0.4,
                  boxShadow: index === cat.distribution.length - 1 ? '0 0 8px #bfff00' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}