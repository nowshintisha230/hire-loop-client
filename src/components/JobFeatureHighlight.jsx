import React from "react";
import { Briefcase, Bulb, Star } from "@gravity-ui/icons";

const JobFeatureHighlight = () => {
  const features = [
    {
      title: "AI-Powered Recommendations",
      desc: "Get personalized job suggestions based on your skills.",
      icon: Bulb,
    },
    {
      title: "Instant Application Tracking",
      desc: "Monitor every application in one simple dashboard.",
      icon: Bulb,
    },
    {
      title: "Trusted Global Companies",
      desc: "Apply directly to verified hiring companies.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-4">
            • Why Choose Us •
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your career growth <br /> starts here
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
            Discover smarter ways to find jobs, build your resume, and connect
            with top companies worldwide.
          </p>

          <div className="space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-violet-500 transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-violet-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-5">

          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
            <Bulb className="w-6 h-6 text-violet-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">10K+</h3>
            <p className="text-zinc-400">Active users finding jobs daily</p>
          </div>

          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl mt-10">
            <Briefcase className="w-6 h-6 text-violet-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">5K+</h3>
            <p className="text-zinc-400">New jobs posted weekly</p>
          </div>

          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl -mt-6">
            <Star className="w-6 h-6 text-violet-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">98%</h3>
            <p className="text-zinc-400">User satisfaction rate</p>
          </div>

          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
            <Bulb className="w-6 h-6 text-violet-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">800+</h3>
            <p className="text-zinc-400">Trusted companies</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JobFeatureHighlight;