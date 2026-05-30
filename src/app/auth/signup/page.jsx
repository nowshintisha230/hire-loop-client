"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Button, Card } from "@heroui/react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      const res = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result?.message || "Signup failed");

      alert("Account created successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-xl">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-default-500 mt-2">Join HireHub today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <Input
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            variant="bordered"
            startContent={<User className="h-4 w-4 text-default-400" />}
            isRequired
          />

          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            startContent={<Mail className="h-4 w-4 text-default-400" />}
            isRequired
          />

          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            variant="bordered"
            startContent={<Lock className="h-4 w-4 text-default-400" />}
            isRequired
          />

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={loading}
            endContent={<ArrowRight size={18} />}
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary font-medium hover:underline">
            Sign In
          </Link>
        </div>

      </Card>
    </div>
  );
}