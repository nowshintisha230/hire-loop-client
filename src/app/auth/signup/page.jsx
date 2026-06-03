"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card } from "@heroui/react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp.email({
        name,
        email,
        password,
        role,
      });

      if (error) {
        setError(error.message || "Signup failed.");
        return;
      }

      router.push("/auth/signin");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
      <div className="w-full max-w-md">

        <Card className="p-6 shadow-xl">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-foreground">
              Create Account
            </h1>
            <p className="text-default-500 mt-2">
              Join HireHub today
            </p>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                className="mb-4 px-4 py-3 rounded-lg bg-danger-50 text-danger text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
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
              placeholder="Min 8 characters"
              variant="bordered"
              startContent={<Lock className="h-4 w-4 text-default-400" />}
              isRequired
            />

            {/* ROLE DROPDOWN - DARK MODE FIXED */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Role
              </label>

              <select
                name="role"
                defaultValue="seeker"
                style={{ colorScheme: "dark" }}
                className="
                  w-full
                  rounded-xl
                  border
                  border-default-200
                  bg-content1
                  text-foreground
                  px-3
                  py-3
                  outline-none
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              >
                <option value="seeker"    style={{ background: "#18181b", color: "#fff" }}>Seeker</option>
                <option value="recruiter" style={{ background: "#18181b", color: "#fff" }}>Recruiter</option>
                <option value="admin"     style={{ background: "#18181b", color: "#fff" }}>Admin</option>
              </select>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={loading}
              endContent={!loading && <ArrowRight size={18} />}
            >
              Create Account
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-foreground">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </div>

        </Card>
      </div>
    </div>
  );
}