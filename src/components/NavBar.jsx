"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, toastQueue } from "@heroui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    toastQueue.add({
      title: "Welcome to HireHub!",
      description: "Redirecting you to sign up...",
      color: "success",
      timeout: 2000,
    });

    setTimeout(() => {
      router.push("/auth/signup");
      setIsOpen(false);
    }, 500);
  };

  return (
    <nav className="w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl">
          HireHub
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/auth/signin">Sign In</Link>
          <Button color="primary" onPress={handleGetStarted}>
            Get Started
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden p-4 border-t flex flex-col gap-4">
          <Link href="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link>
          <Link href="/companies" onClick={() => setIsOpen(false)}>Companies</Link>
          <Link href="/auth/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Button color="primary" onPress={handleGetStarted}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}