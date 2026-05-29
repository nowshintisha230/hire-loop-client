"use client";

import NextLink from "next/link";
import {
  LogoGithub,
  LogoLinkedin,
  LogoFacebook,
  LogoTelegram,
  LogoSlack,
} from "@gravity-ui/icons";

// X (Twitter) has no icon in @gravity-ui/icons — using inline SVG
function IconX({ width = 18, height = 18 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const footerSections = [
  {
    title: "Job Seekers",
    links: [
      { label: "Browse Jobs", href: "/jobs" },
      { label: "Create Profile", href: "/profile/create" },
      { label: "Job Alerts", href: "/alerts" },
      { label: "Career Advice", href: "/career-advice" },
      { label: "Resume Builder", href: "/resume-builder" },
      { label: "Salary Calculator", href: "/salary" },
    ],
  },
  {
    title: "Employers",
    links: [
      { label: "Post a Job", href: "/post-job" },
      { label: "Search Resumes", href: "/resumes" },
      { label: "Recruiter Dashboard", href: "/dashboard/recruiter" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Hiring Solutions", href: "/solutions" },
      { label: "Partner with Us", href: "/partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "API Docs", href: "/docs" },
      { label: "Status", href: "/status" },
    ],
  },
];

const socialLinks = [
  { label: "X (Twitter)", href: "https://twitter.com", Icon: IconX },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LogoLinkedin },
  { label: "Facebook", href: "https://facebook.com", Icon: LogoFacebook },
  { label: "Telegram", href: "https://t.me", Icon: LogoTelegram },
  { label: "GitHub", href: "https://github.com", Icon: LogoGithub },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-content1">
      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand column — spans 2 cols on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <NextLink href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-extrabold text-white">H</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Hire<span className="text-primary">Hub</span>
              </span>
            </NextLink>

            {/* Tagline */}
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-default-500">
              Connecting top talent with the world&apos;s leading companies.
              Find your next opportunity or your next great hire.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-divider text-default-500 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      className="text-sm text-default-500 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter bar ── */}
        <div className="my-12 rounded-2xl border border-divider bg-background px-6 py-6 sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="font-semibold text-foreground">
              Get job alerts in your inbox
            </p>
            <p className="text-sm text-default-500">
              Weekly digest of the best new opportunities.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="h-10 flex-1 rounded-lg border border-divider bg-content2 px-4 text-sm text-foreground placeholder-default-400 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="h-10 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-divider pt-8 sm:flex-row">
          <p className="text-xs text-default-400">
            © {currentYear} HireHub, Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className="text-xs text-default-400 transition-colors hover:text-primary"
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}