"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StaticSection from "@/components/StaticSection";
import SmartJobSections from "@/components/SmartJobSections";
import JobFeatureHighlight from "@/components/JobFeatureHighlight";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  if (isAuthPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <>
      <NavBar />
      <StaticSection />
      <SmartJobSections />
      <JobFeatureHighlight />
      <PricingSection />
      <CTASection />
      <main>{children}</main>
      <Footer />
    </>
  );
}