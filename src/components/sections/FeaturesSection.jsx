import { Eye, Palette, StickyNote, Timer, Zap, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const features = [
  {
    icon: Eye,
    title: "Pure Transparency",
    desc: "Keep your work visible while notes stay subtly present.",
  },
  {
    icon: Palette,
    title: "Clean Themes",
    desc: "Switch between polished dark and light workspaces instantly.",
  },
  {
    icon: Zap,
    title: "Featherweight",
    desc: "Fast startup and smooth performance with no unnecessary bloat.",
  },
  {
    icon: Timer,
    title: "Focus Timer",
    desc: "Built-in Pomodoro rhythm to keep your sessions intentional.",
  },
  {
    icon: StickyNote,
    title: "Smart Pinning",
    desc: "Keep notes above your apps when context matters most.",
  },
  {
    icon: Star,
    title: "Free Core",
    desc: "The essential MindPin experience stays free for everyone.",
  },
];

export default function FeaturesSection({ isDark }) {
  return (
    <section id="features" className="px-50 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Simple by design.
          </h2>
          <p className={`mt-3 max-w-2xl ${isDark ? "text-white/70" : "text-black/70"}`}>
            Every feature is built to reduce friction so you can stay in flow.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`border ${
                  isDark
                    ? "border-white/15 bg-white/[0.02]"
                    : "border-black/15 bg-black/[0.02]"
                }`}
              >
                <CardContent className="p-6">
                  <FeatureIcon className="mb-4 h-6 w-6" />
                  <CardTitle className="mb-2 text-lg">{feature.title}</CardTitle>
                  <CardDescription className={isDark ? "text-white/70" : "text-black/70"}>
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
