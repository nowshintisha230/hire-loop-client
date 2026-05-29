"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import NextLink from "next/link";

const navLinks = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "For Recruiters", href: "/recruiters" },
  { label: "Career Advice", href: "/career-advice" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ── Logo (left) ── */}
        <NextLink href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-extrabold text-white">H</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Hire<span className="text-primary">Hub</span>
          </span>
        </NextLink>

        {/* ── Desktop nav (right) ── */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  as={NextLink}
                  href={link.href}
                  color="foreground"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Vertical divider */}
          <div className="h-6 w-px bg-divider" aria-hidden="true" />

          {/* Auth actions */}
          <div className="flex items-center gap-3">
            <Link
              as={NextLink}
              href="/signin"
              color="foreground"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sign In
            </Link>
            <Button as={NextLink} href="/signup" color="primary" size="sm" radius="md">
              Get Started
            </Button>
          </div>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="rounded-md p-2 transition-colors hover:bg-default-100 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* ── Mobile menu ── */}
      {isMenuOpen && (
        <div className="border-t border-divider bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  as={NextLink}
                  href={link.href}
                  color="foreground"
                  className="block w-full py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Divider */}
            <li className="my-2">
              <div className="h-px w-full bg-divider" />
            </li>

            <li>
              <Link
                as={NextLink}
                href="/signin"
                color="foreground"
                className="block w-full py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
            <li className="mt-2">
              <Button
                as={NextLink}
                href="/signup"
                color="primary"
                size="sm"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}