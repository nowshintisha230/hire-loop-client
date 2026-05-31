"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, toastQueue } from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    console.warn("🚨 SESSION:", session);
    console.warn("🚨 IS PENDING:", isPending);
  }, [session, isPending]);

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

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    setIsOpen(false);
    toastQueue.add({
      title: "Signed out",
      description: "You have been signed out successfully.",
      color: "success",
      timeout: 2000,
    });
  };

  const AuthButtons = ({ mobile = false }) => (
    <>
      {isPending ? (
        <span className="text-sm text-gray-400">Loading...</span>
      ) : session ? (
        <div className={`flex ${mobile ? "flex-col" : "flex-row"} gap-3 items-center`}>
          <span className="text-sm font-medium">
            👋 {session.user?.name || session.user?.email}
          </span>
          <Button
            color="danger"
            variant="flat"
            size="sm"
            onPress={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <>
          <Link
            href="/auth/signin"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Button color="primary" onPress={handleGetStarted}>
            Get Started
          </Button>
        </>
      )}
    </>
  );

  return (
    <nav className="w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl hover:opacity-80 transition-opacity">
          HireHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/jobs" className="hover:text-primary transition-colors">
            Jobs
          </Link>
          <Link href="/companies" className="hover:text-primary transition-colors">
            Companies
          </Link>
          <AuthButtons />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 border-t flex flex-col gap-4">
          <Link
            href="/jobs"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors"
          >
            Jobs
          </Link>
          <Link
            href="/companies"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors"
          >
            Companies
          </Link>
          <AuthButtons mobile={true} />
        </div>
      )}
    </nav>
  );
}