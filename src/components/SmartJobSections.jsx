import React from "react";
import {
  Briefcase,
  Bulb,
  Star,
} from "@gravity-ui/icons";

const SmartJobSections = () => {
  const jobs = Array.from({ length: 6 });

  const features = [
    {
      title: "Smart Search",
      desc: "Find your ideal job with advanced filters.",
      icon: Bulb,
    },
    {
      title: "Salary Insights",
      desc: "Get real salary data to negotiate confidently.",
      icon: Bulb,
    },
    {
      title: "Top Companies",
      desc: "Apply to trusted companies that are hiring.",
      icon: Briefcase,
    },
    {
      title: "One Click Apply",
      desc: "Simplify your job application process.",
      icon: Briefcase,
    },
    {
      title: "Resume Builder",
      desc: "Create professional resumes easily.",
      icon: Bulb,
    },
    {
      title: "Saved Jobs",
      desc: "Manage your favorite jobs easily.",
      icon: Star,
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-16">

      {/* TOP */}
      <section className="mb-24">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-3">
            • Smart Job Discovery •
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            The roles you'd never <br /> find by searching
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {jobs.map((_, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                Frontend Developer
              </h3>

              <p className="text-sm text-zinc-400 mb-6">
                Showcase your commitment to diversity and inclusion.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center gap-2 text-xs border border-zinc-700 px-3 py-1 rounded-full">
                  <Bulb className="w-4 h-4" />
                  New York
                </span>

                <span className="flex items-center gap-2 text-xs border border-zinc-700 px-3 py-1 rounded-full">
                  <Briefcase className="w-4 h-4" />
                  Hybrid
                </span>
              </div>

              <button className="flex items-center gap-2 text-sm">
                Apply Now
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* BOTTOM */}
      <section>
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-3">
            • Features •
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need <br /> to succeed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center text-violet-400">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};

export default SmartJobSections;