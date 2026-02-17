"use client";

export default function SavingsGoal() {
  const progress = 32;
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="p-6 rounded-3xl bg-surface border border-border shadow-sm 
    hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <h3 className="text-sm font-semibold text-textColor">
        Savings Goal
      </h3>

      <div className="flex items-center justify-center mt-6">

        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="rgba(0,0,0,0.1)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <circle
            stroke="url(#grad)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#155DFC" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute text-center">
          <p className="text-lg font-semibold text-textColor">
            {progress}%
          </p>
        </div>

      </div>

      <p className="text-xs text-muted text-center mt-4">
        $3,200 / $10,000
      </p>
    </div>
  );
}
