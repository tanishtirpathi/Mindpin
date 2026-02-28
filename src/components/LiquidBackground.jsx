export default function LiquidBackground({ isDark }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`liquid-shape absolute -top-28 -left-20 h-80 w-80 rounded-[45%_55%_65%_35%/55%_45%_55%_45%] blur-3xl ${
          isDark ? "bg-white/15" : "bg-black/10"
        }`}
      />
      <div
        className={`liquid-shape liquid-delay absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-[55%_45%_38%_62%/40%_60%_40%_60%] blur-3xl ${
          isDark ? "bg-white/10" : "bg-black/10"
        }`}
      />
      <div
        className={`liquid-shape absolute -bottom-24 left-1/3 h-72 w-72 rounded-[60%_40%_50%_50%/44%_56%_44%_56%] blur-3xl ${
          isDark ? "bg-white/10" : "bg-black/10"
        }`}
      />
    </div>
  );
}
