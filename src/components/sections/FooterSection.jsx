export default function FooterSection({ isDark }) {
  return (
    <footer
      className="px-50 py-10 "

    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <span className="text-lg font-bold tracking-tight">MindPin.</span>
        <div className={`flex gap-6 ${isDark ? "text-white/70" : "text-black/70"}`}>
          <a href="https://github.com/tanishtirpathi/Mindpin" className="hover:opacity-100">
            GitHub
          </a>
          <a href="https://github.com/tanishtirpathi/Mindpin" className="hover:opacity-100">
            Privacy
          </a>
          <a href="https://x.com/tanishtirpathi" className="hover:opacity-100">
            Twitter
          </a>
        </div>
        <span className={isDark ? "text-white/60" : "text-black/60"}>© 2026 MindPin Studio.</span>
      </div>
    </footer>
  );
}
