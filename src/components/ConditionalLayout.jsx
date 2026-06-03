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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 md:ml-[260px]">
        {children}
        <StaticSection />
        <SmartJobSections />
        <JobFeatureHighlight />
        <PricingSection />
        <CTASection />
      </main>
      <Footer className="md:ml-[260px]" />
    </div>
  );
}