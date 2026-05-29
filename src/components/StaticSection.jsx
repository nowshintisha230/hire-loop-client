import React from "react";

// Gravity UI Icons
import {
  Briefcase,
  Magnifier,
  Star,
  Bulb,
} from "@gravity-ui/icons";

const StaticSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/30 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      </div>

      {/* Planet Background */}
      <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-t from-black via-zinc-900 to-zinc-700 opacity-80 blur-sm" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-lg text-white/90">
            Assisting over{" "}
            <span className="font-semibold text-white">
              15,000 job seekers
            </span>
          </p>

          <p className="text-lg text-white/90">
            find their dream positions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:bg-white/10">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Briefcase className="h-5 w-5 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white">50K</h2>

            <p className="mt-2 text-sm text-white/70">
              Active Jobs
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:bg-white/10">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Bulb className="h-5 w-5 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white">12K</h2>

            <p className="mt-2 text-sm text-white/70">
              Companies
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:bg-white/10">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Magnifier className="h-5 w-5 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white">2M</h2>

            <p className="mt-2 text-sm text-white/70">
              Job Seekers
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:bg-white/10">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Star className="h-5 w-5 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white">97%</h2>

            <p className="mt-2 text-sm text-white/70">
              Satisfaction Rate
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StaticSection;