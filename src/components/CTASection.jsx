// components/CTASection.jsx

import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-violet-700/20 blur-3xl" />
      </div>

      {/* Grid Dome */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div className="h-[500px] w-[900px] rounded-t-full border border-violet-500/20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center border border-violet-500/30 bg-black/40 px-8 py-14 text-center backdrop-blur-xl">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-white/60">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-white px-8 font-semibold text-black">
            Create a free account
          </Button>

          <Button
            variant="bordered"
            className="border-white/20 px-8 text-white"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}