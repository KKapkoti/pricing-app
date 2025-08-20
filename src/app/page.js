//src/app/page.js
// import Link from "next/link";
import PlanCard from "./components/PlanCard";
import StickyCTA from "./components/StickyCTA";

export default function HomePage() {
  const plans = [
    { name: "Basic", price: "$9/mo", features: ["Feature A", "Feature B"] },
    { name: "Standard", price: "$19/mo", features: ["Feature A", "Feature B", "Feature C"], highlight: true },
    { name: "Premium", price: "$49/mo", features: ["All Pro features", "Custom Support"] },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Choose Your Plan
        </h1>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </main>
      <StickyCTA />
    </>
  );
}
