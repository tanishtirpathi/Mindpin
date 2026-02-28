import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar({ isDark, onToggleTheme, onDownload }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-14 py-10 md:px-16 mx-30">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl 
          border px-4 py-3 backdrop-blur md:px-6 shadow-lg ${
          isDark
            ? "border-white/10 bg-black/50 text-white"
            : "border-black/10 bg-white/50 text-black"
        }`}
      >
        <a href="#" className="text-lg font-bold tracking-tight">
          MindPin.
        </a>

        <div className={`hidden items-center gap-6 text-sm md:flex ${isDark ? "text-white/80" : "text-black/80"}`}>
          <a href="#features" className="hover:opacity-100">
            Features
          </a>
          <a href="https://x.com/tanishtirpathi" target="_blank" className="hover:opacity-100">
            Support
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={isDark ? "border-white/10 text-white" : "border-black/10 text-black"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            onClick={onDownload}
            className={isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}
          >
            Get App
          </Button>
        </div>
      </nav>
    </header>
  );
}