"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Magnifier,
  Star,
  Bulb,
} from "@gravity-ui/icons";

// Astronaut SVG Component
function Astronaut() {
  return (
    <motion.div
      className="absolute top-6 right-8 z-20 hidden md:block"
      animate={{
        y: [0, -18, 0],
        rotate: [0, 4, -4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5,
      }}
    >
      <svg width="110" height="130" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes visor-glow { 0%,100%{opacity:0.5} 50%{opacity:1} }
          @keyframes arm-left { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-20deg)} }
          @keyframes arm-right { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(20deg)} }
          @keyframes leg-left { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(10deg)} }
          @keyframes leg-right { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-10deg)} }
          @keyframes star-twinkle { 0%,100%{opacity:0.2} 50%{opacity:1} }
          @keyframes backpack-blink { 0%,100%{fill:#22d3ee} 50%{fill:#f472b6} }
        `}</style>

        {/* Twinkling stars around astronaut */}
        <circle cx="10" cy="20" r="1.5" fill="white" style={{animation:"star-twinkle 2s ease-in-out infinite"}}/>
        <circle cx="95" cy="15" r="1" fill="white" style={{animation:"star-twinkle 2.5s ease-in-out infinite 0.5s"}}/>
        <circle cx="100" cy="50" r="1.5" fill="white" style={{animation:"star-twinkle 1.8s ease-in-out infinite 1s"}}/>
        <circle cx="5" cy="70" r="1" fill="white" style={{animation:"star-twinkle 3s ease-in-out infinite 0.3s"}}/>
        <circle cx="20" cy="110" r="1.5" fill="white" style={{animation:"star-twinkle 2.2s ease-in-out infinite 0.7s"}}/>
        <circle cx="90" cy="100" r="1" fill="white" style={{animation:"star-twinkle 1.5s ease-in-out infinite 1.2s"}}/>

        {/* Backpack / jetpack */}
        <rect x="38" y="52" width="10" height="20" rx="4" fill="#334155"/>
        <circle cx="43" cy="57" r="3" style={{animation:"backpack-blink 2s ease-in-out infinite"}}/>
        <circle cx="43" cy="65" r="2" fill="#fbbf24"/>

        {/* Body (suit) */}
        <rect x="30" y="52" width="50" height="42" rx="16" fill="#e2e8f0"/>
        {/* Suit chest detail */}
        <rect x="42" y="62" width="26" height="18" rx="6" fill="#cbd5e1"/>
        {/* Chest button 1 */}
        <circle cx="50" cy="69" r="3" fill="#6366f1"/>
        {/* Chest button 2 */}
        <circle cx="60" cy="69" r="3" fill="#22d3ee"/>
        {/* Chest button 3 */}
        <circle cx="55" cy="76" r="3" fill="#f472b6"/>

        {/* LEFT ARM */}
        <g style={{transformOrigin:"30px 62px", animation:"arm-left 3s ease-in-out infinite"}}>
          <rect x="10" y="56" width="22" height="14" rx="7" fill="#e2e8f0"/>
          {/* Left glove */}
          <circle cx="10" cy="63" r="8" fill="#94a3b8"/>
          <circle cx="10" cy="63" r="5" fill="#cbd5e1"/>
          {/* thumb */}
          <ellipse cx="4" cy="59" rx="3.5" ry="5" fill="#94a3b8" transform="rotate(-20 4 59)"/>
        </g>

        {/* RIGHT ARM */}
        <g style={{transformOrigin:"80px 62px", animation:"arm-right 3s ease-in-out infinite 0.5s"}}>
          <rect x="78" y="56" width="22" height="14" rx="7" fill="#e2e8f0"/>
          {/* Right glove */}
          <circle cx="100" cy="63" r="8" fill="#94a3b8"/>
          <circle cx="100" cy="63" r="5" fill="#cbd5e1"/>
          {/* thumb */}
          <ellipse cx="106" cy="59" rx="3.5" ry="5" fill="#94a3b8" transform="rotate(20 106 59)"/>
        </g>

        {/* LEFT LEG */}
        <g style={{transformOrigin:"44px 94px", animation:"leg-left 3s ease-in-out infinite 0.3s"}}>
          <rect x="36" y="92" width="16" height="28" rx="8" fill="#e2e8f0"/>
          {/* left boot */}
          <ellipse cx="44" cy="120" rx="12" ry="8" fill="#64748b"/>
          <ellipse cx="40" cy="117" rx="5" ry="3" fill="#94a3b8" opacity="0.5"/>
        </g>

        {/* RIGHT LEG */}
        <g style={{transformOrigin:"66px 94px", animation:"leg-right 3s ease-in-out infinite 0.6s"}}>
          <rect x="58" y="92" width="16" height="28" rx="8" fill="#e2e8f0"/>
          {/* right boot */}
          <ellipse cx="66" cy="120" rx="12" ry="8" fill="#64748b"/>
          <ellipse cx="62" cy="117" rx="5" ry="3" fill="#94a3b8" opacity="0.5"/>
        </g>

        {/* Helmet */}
        <circle cx="55" cy="36" r="28" fill="#e2e8f0"/>
        {/* Helmet ring */}
        <ellipse cx="55" cy="52" rx="22" ry="7" fill="#cbd5e1"/>
        {/* Visor */}
        <ellipse cx="55" cy="34" rx="18" ry="18" fill="#0f172a"/>
        <ellipse cx="55" cy="34" rx="18" ry="18" fill="#6366f1" opacity="0.3" style={{animation:"visor-glow 3s ease-in-out infinite"}}/>
        {/* Visor reflection */}
        <ellipse cx="47" cy="26" rx="5" ry="7" fill="white" opacity="0.15" transform="rotate(-20 47 26)"/>
        <ellipse cx="62" cy="24" rx="2.5" ry="4" fill="white" opacity="0.1" transform="rotate(-10 62 24)"/>
        {/* Astronaut face inside visor */}
        <circle cx="50" cy="35" r="3" fill="white" opacity="0.8"/>
        <circle cx="60" cy="35" r="3" fill="white" opacity="0.8"/>
        <circle cx="51" cy="35" r="1.5" fill="#1e293b"/>
        <circle cx="61" cy="35" r="1.5" fill="#1e293b"/>
        <path d="M49 42 Q55 47 61 42" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8"/>
        {/* Helmet top light */}
        <circle cx="55" cy="10" r="4" fill="#fbbf24" opacity="0.9"/>
        <circle cx="55" cy="10" r="2" fill="white" opacity="0.6"/>

        {/* Tether rope floating */}
        <motion.path
          d="M43 72 Q30 85 20 80 Q10 75 8 90"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          animate={{ d: [
            "M43 72 Q30 85 20 80 Q10 75 8 90",
            "M43 72 Q28 80 18 85 Q8 90 6 105",
            "M43 72 Q30 85 20 80 Q10 75 8 90",
          ]}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}

const StaticSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      </div>

      {/* Twinkling background stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            repeatDelay: 0.5,
          }}
        />
      ))}

      {/* Planet Background */}
      <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-t from-black via-zinc-900 to-zinc-700 opacity-80 blur-sm" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Astronaut — floats above heading */}
        <div className="relative">
          <Astronaut />

          {/* Heading */}
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg text-white/90">
              Assisting over{" "}
              <span className="font-semibold text-white">15,000 job seekers</span>
            </p>
            <p className="text-lg text-white/90">find their dream positions.</p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              { icon: <Briefcase className="h-5 w-5 text-white" />, value: "50K", label: "Active Jobs", delay: 0.1 },
              { icon: <Bulb className="h-5 w-5 text-white" />, value: "12K", label: "Companies", delay: 0.2 },
              { icon: <Magnifier className="h-5 w-5 text-white" />, value: "2M", label: "Job Seekers", delay: 0.3 },
              { icon: <Star className="h-5 w-5 text-white" />, value: "97%", label: "Satisfaction Rate", delay: 0.4 },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:bg-white/10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.5)" }}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  {card.icon}
                </div>
                <motion.h2
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay + 0.2, duration: 0.5, type: "spring" }}
                >
                  {card.value}
                </motion.h2>
                <p className="mt-2 text-sm text-white/70">{card.label}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticSection;