"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card } from "@heroui/react";
import { toastQueue } from "@heroui/react";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function SigninPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = {
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.message || "Sign in failed");

      toastQueue.add({
        title: "Welcome back!",
        description: "You have signed in successfully.",
        color: "success",
        timeout: 2000,
      });

      setTimeout(() => router.push("/"), 500);
    } catch (err) {
      toastQueue.add({
        title: "Sign in failed",
        description: err.message,
        color: "danger",
        timeout: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-xl">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-default-500 mt-2">Sign in to your HireHub account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Enter your password"
            variant="bordered"
            startContent={<Lock className="h-4 w-4 text-default-400" />}
            isRequired
          />

          <div className="text-right">
            <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={loading}
            endContent={!loading && <ArrowRight size={18} />}
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-primary font-medium hover:underline">
            Sign Up
          </Link>
        </div>

      </Card>
    </div>
  );
}