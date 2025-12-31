import React, { useEffect, useRef } from "react";
import {
  Download,
  StickyNote,
  Timer,
  Palette,
  Eye,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react";

// --- Sub-components for Cleanliness ---

const Navbar = () => (
  <div class="flex items-center justify-center mt-10">
    <nav className="fixed top-0 w-[full] z-50 flex justify-between items-center mt-10 px-8 py-2 rounded-md  bg-white/20">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-bold text-xl tracking-tighter">MindPin</span>
      </div>
      <div className="hidden md:flex gap-8 mx-50 text-sm font-medium text-gray-400">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Support
        </a>
      </div>
      <button
        onClick={() =>
          window.open(
            "https://github.com/tanishtirpathi/First-desktop-app-/releases/download/mindpin/win-unpacked.zip"
          )
        }
        className="px-5 py-2 text-sm bg-white text-white font-semibold rounded-full hover:bg-gray-200 transition-all active:scale-95"
      >
        Get App
      </button>
    </nav>
  </div>
);

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Subtle Glows instead of harsh blobs */}
    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-violet-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-pink-500/5 to-transparent" />
  </div>
);

const HeroSection = ({ onDownload }) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
    <BackgroundEffects />

    <div className="relative z-10 text-center max-w-5xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink-300 mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
        </span>
        Now available for Desktop
      </div>

      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
        Design your thoughts <br />
        <span className="text-gray-500">with absolute clarity.</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
        A minimal, transparent canvas for your ideas. MindPin stays out of your
        way while keeping your most important notes always in sight.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button
          onClick={onDownload}
          className="group px-8 py-4 bg-white text-white font-bold rounded-2xl flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95"
        >
          <Download className="w-5 h-5" />
          Download MindPin
        </button>
        <button className="group px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
          Watch Demo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Image / Mockup Area */}
      <div className="mt-24 relative max-w-4xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
          <img
            src="./video.png"
            alt="App Preview"
            className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: Eye,
      title: "Pure Transparency",
      desc: "Adjustable opacity so your work remains the hero of the screen.",
    },
    {
      icon: Palette,
      title: "Modern Themes",
      desc: "Beautifully curated palettes and typography for the aesthetic enthusiast.",
    },
    {
      icon: Zap,
      title: "Lightweight",
      desc: "Optimized for speed. No bloat, no lag, just instant productivity.",
    },
    {
      icon: Timer,
      title: "Focus Engine",
      desc: "Built-in Pomodoro tools to help you stay in the flow state longer.",
    },
    {
      icon: StickyNote,
      title: "Smart Pinning",
      desc: "Keep notes on top of any app, browser, or meeting window.",
    },
    {
      icon: Star,
      title: "Always Free",
      desc: "The core experience of MindPin will always remain free for everyone.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        });
      },
      { threshold: 0.1 }
    );
    containerRef.current
      ?.querySelectorAll(".feat-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Focus on what matters.
            </h2>
            <p className="text-gray-500">
              We stripped away the complexity to give you the perfect writing
              environment.
            </p>
          </div>
          <div className="text-pink-500 font-semibold cursor-pointer flex items-center gap-2 hover:gap-3 transition-all">
            Explore all features <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <div
              key={i}
              className="feat-card group p-10 bg-black hover:bg-neutral-900 transition-colors duration-500 opacity-0"
            >
              <f.icon className="w-8 h-8 text-white mb-6 group-hover:text-pink-500 transition-colors" />
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const handleDownload = () => {
    window.open(
      "https://github.com/tanishtirpathi/First-desktop-app-/releases/download/mindpin/win-unpacked.zip",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/30 font-sans tracking-tight">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap");

        body {
          font-family: "Inter", sans-serif;
          background-color: #000;
        }

        .reveal {
          animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Navbar />
      <HeroSection onDownload={handleDownload} />
      <FeaturesSection />

      <footer className="border-t border-white/5 py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity">
          <span className="font-bold tracking-tighter text-xl">MindPin.</span>
          <div className="flex gap-10 text-sm my-8 md:my-0">
            <a
              href="https://github.com/tanishtirpathi/Mindpin"
              className="hover:text-pink-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tanishtirpathi/Mindpin"
              className="hover:text-pink-500 transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://x.com/tanishtirpathi"
              className="hover:text-pink-500 transition-colors"
            >
              Twitter
            </a>
          </div>
          <p className="text-xs">© 2025 MindPin Studio.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
