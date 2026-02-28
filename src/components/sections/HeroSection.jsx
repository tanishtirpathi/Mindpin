import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function HeroSection({ onDownload, isDark }) {
  const textMuted = isDark ? "text-white/70" : "text-black/70";

  return (
    <section className="relative min-h-screen px-6 pt-38 ">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
        <span
          className={`mb-8 inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium shadow-xl ${
            isDark ? "border-white/20 text-white/80" : "border-black/20 text-black/80"
          }`}
        >
          Desktop app for focused note-taking
        </span>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Think in a clean space.
          <br />
          <span className={textMuted}>Pin what matters.</span>
        </h1>

        <p className={`mx-auto mt-6 max-w-2xl text-base md:text-lg ${textMuted}`}>
          MindPin gives you a minimal canvas for your ideas with transparent,
          always-available notes on top of your workflow.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={onDownload}
            className={isDark ? "bg-white text-black hover:bg-white/90 cursor-pointer" : " cursor-pointer bg-black text-white hover:bg-black/90"}
          >
            <Download className="h-4 w-4" />
            Download MindPin
          </Button>
        </div>

        <Card
          className={`mt-16 w-[70%] max-w-5xl overflow-hidden border p-2 ${
            isDark ? "border-white/15 bg-black/60" : "border-black/15 bg-white/80"
          }`}
        >
          <img
            src="./video.png"
            alt="MindPin preview"
            className="h-auto w-full rounded-xl"
          />
        </Card>
      </div>
    </section>
  );
}
