"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 flex justify-between items-center md:hidden shadow-lg z-50">
      <span className="font-semibold"> Ready to Start?</span>
      <Link
        href="/signup"
        className="bg-white text-pink-600 px-4 py-2 rounded-full font-bold shadow hover:bg-gray-100 transition"
      >
        Get Started
      </Link>
    </div>
  );
}
