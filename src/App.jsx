import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import LiquidBackground from "./components/LiquidBackground";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import FooterSection from "./components/sections/FooterSection";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("mindpin-theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("mindpin-theme", isDark ? "dark" : "light");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const handleDownload = () => {
    window.open(
      "https://github.com/tanishtirpathi/First-desktop-app-/releases/download/mindpin/win-unpacked.zip",
      "_blank"
    );
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden font-sans tracking-tight ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <LiquidBackground isDark={isDark} />

      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          onToggleTheme={() => setIsDark((current) => !current)}
          onDownload={handleDownload}
        />
        <HeroSection isDark={isDark} onDownload={handleDownload} />
        <FeaturesSection isDark={isDark} />
        <FooterSection isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
