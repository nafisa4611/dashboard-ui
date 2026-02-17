export default function GlassCard({ children }) {
  return (
    <div
      className="
        backdrop-blur-xl
        bg-white/60
        dark:bg-white/5
        border border-white/20
        shadow-xl
        rounded-2xl
        p-6
      "
    >
      {children}
    </div>
  );
}
