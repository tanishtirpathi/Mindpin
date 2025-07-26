import React, { useEffect, useRef } from "react";
import {
  Download,
  StickyNote,
  Timer,
  Palette,
  Eye,
  Star,
  Zap,
} from "lucide-react";

const MeteorsBackground = () => {
  const meteors = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-meteor"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    >
      <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-70" />
    </div>
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteors}
    </div>
  );
};

const HeroSection = ({ onDownload }) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <MeteorsBackground />
    <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <div className="mb-8 animate-float">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <img src="./icon.jpg" alt="" />
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient">
        MindPin
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
        Your thoughts, always within reach. The ultimate sticky notes app that
        stays transparent on your screen, ready whenever inspiration strikes.
      </p>
      <button
        onClick={onDownload}
        className="group relative px-12 py-4 text-xl font-semibold text-white rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="relative flex items-center space-x-3">
          <Download className="w-6 h-6 group-hover:animate-bounce" />
          <span>Download MindPin</span>
        </div>
      </button>
      <div className="mt-16">
        <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full float-right scale-90 animate-zoom-in"
            src="./video.mp4"
            title="MindPin Demo Video"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const featuresRef = useRef(null);

  const features = [
    {
      icon: Eye,
      title: "Transparent Mode",
      desc: "Stays on screen but becomes transparent when you're not using it.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "Wide Font Options",
      desc: "Express yourself with a variety of beautiful fonts.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Sleek UI",
      desc: "Clean, minimal interface that gets out of your way.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Timer,
      title: "Built-in Timer",
      desc: "Perfect for pomodoro technique or time-blocking.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: StickyNote,
      title: "Multiple Note Types",
      desc: "Notes, ideas, todos - organize everything your way.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("animate-fade-in-up")
        );
      },
      { threshold: 0.1 }
    );
    featuresRef.current
      ?.querySelectorAll(".feature-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={featuresRef}
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
          Everything you need to capture, organize, and manage your thoughts
          seamlessly
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card group p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 opacity-0 cursor-pointer"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${f.gradient} mb-6 group-hover:animate-pulse`}
              >
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Star className="w-6 h-6 text-yellow-400 animate-spin" />
              <span className="text-2xl font-bold text-white">
                Ready to boost your productivity?
              </span>
              <Star className="w-6 h-6 text-yellow-400 animate-spin" />
            </div>
            <p className="text-gray-400 mb-6">
              Join thousands of users who've transformed their workflow
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const handleDownload = async () => {
    try {
      const link = document.createElement("a");
      link.href =
        "https://github.com/tanishtirpathi/First-desktop-app-/releases/download/mindpin/Mindpin.zip"; // Replace with actual download link
      link.download = "MindPin.exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-meteor {
          animation: meteor linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
      <HeroSection onDownload={handleDownload} />
      <FeaturesSection />
      <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Made with ❤️ for productivity enthusiasts
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2025 MindPin</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
