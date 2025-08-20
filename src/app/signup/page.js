"use client";
import { Suspense } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SignUpForm() {
  const router = useRouter();
  const params = useSearchParams();
  const selectedPlan = params.get("plan") || "Basic";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Full Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email address";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";
    if (!form.terms) newErrors.terms = "You must accept terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      router.push(
        `/confirmation?plan=${selectedPlan}&name=${form.name}&email=${form.email}`
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="glass-card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign Up for {selectedPlan}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
       
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

 
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

    
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

    
          <div>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.confirm && (
              <p className="text-red-500 text-sm">{errors.confirm}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <label>I accept the terms & conditions</label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

         
          <button
            type="submit"
             disabled={loading}
                className="w-full bg-blue-500 text-white py-2 rounded-[30px] hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 flex justify-center"
              >
            {loading ? <div className="loader"></div> : "Create Account"}
          </button>
        </form>
      </div>
     
    </div>
  );
}
export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading signup form...</div>}>
      <SignUpForm />
    </Suspense>
  );
}