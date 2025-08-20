
"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="glass-card flex justify-between items-center px-6 py-4 sticky top-0 z-50">
      <h1 className="font-extrabold text-xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        PricingApp
      </h1>
      <div className="flex items-center gap-6">
        <Link href="/">Pricing</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/confirmation">Confirm</Link>
        <button onClick={toggleTheme} className="btn-outline text-sm">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
