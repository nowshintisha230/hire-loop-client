"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, toastQueue } from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";
import DashboardSideBar from "./dashboard/DashboardSideBar";
 

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleGetStarted = () => {
    toastQueue.add({
      title: "Welcome to HireLoop!",
      description: "Redirecting you to sign up...",
      color: "success",
      timeout: 2000,
    });
    setTimeout(() => router.push("/auth/signup"), 500);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    toastQueue.add({
      title: "Signed out",
      description: "You have been signed out successfully.",
      color: "success",
      timeout: 2000,
    });
  };

  return (
    <>
   
     <DashboardSideBar></DashboardSideBar>

    <nav className="w-full border-b bg-background md:ml-[260px] md:w-[calc(100%-260px)]">
        <div className="flex h-16 items-center justify-between px-6">

         
          <Link
            href="/"
            className="font-bold text-xl hover:opacity-80 transition-opacity md:ml-0 ml-12"
          >
            HireLoop
          </Link>

       
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/jobs" className="hover:text-primary transition-colors">
              Jobs
            </Link>
            <Link href="/companies" className="hover:text-primary transition-colors">
              Companies
            </Link>

            {isPending ? (
              <span className="text-sm text-gray-400">Loading...</span>
            ) : session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">
                  👋 {session.user?.name || session.user?.email}
                </span>
                <Button color="danger" variant="flat" size="sm" onPress={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/signin" className="hover:text-primary transition-colors">
                  Sign In
                </Link>
                <Button color="primary" onPress={handleGetStarted}>
                  Get Started
                </Button>
              </>
            )}
          </div>

        </div>
      </nav>
    </>
  );
}