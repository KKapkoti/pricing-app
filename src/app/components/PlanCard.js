//src/app/components/PlanCard.js

"use client";
import Link from "next/link";

export default function PlanCard({ name, price, features, highlight }) {
  return (
    <div
      className={`glass-card p-8 text-center hover:scale-105 transition ${
        highlight ? "border-2 border-pink-400" : ""
      }`}
    >
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="mb-6 space-y-2 text-sm opacity-90">
        {features.map((f, i) => (
          <li key={i}>✨ {f}</li>
        ))}
      </ul>
      <Link
        href={`/signup?plan=${name}`}
        className="btn-primary block text-center"
      >
        Choose {name}
      </Link>
    </div>
  );
}
