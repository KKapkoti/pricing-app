
//src/app/confirmation/page.js
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
  const params = useSearchParams();
  const router = useRouter();
  const plan = params.get("plan");
  const name = params.get("name");
  const email = params.get("email");

  return (
    
   <section className="min-h-screen flex items-center justify-center px-4">
  <div className="glass-card max-w-md w-full p-8 text-center">
    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
    
    <h1 className="text-3xl font-bold mb-6 text-green-400 animate-bounce">
    Signup Successful!
</h1>

    <p className="mb-2"><strong>Plan:</strong> {plan}</p>
    <p className="mb-2"><strong>Name:</strong> {name}</p>
    <p className="mb-4"><strong>Email:</strong> {email}</p>
    <button
      onClick={() => router.push("/")}
      className="btn-outline"
    >
      Go Back to Home
    </button>
  </div>
</section>

  );
}
