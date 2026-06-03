"use client";

import React, { useState } from "react";
import { Drawer, useOverlayState } from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    group: "Main",
    items: [
      { icon: "🏠", label: "Dashboard", href: "/dashboard", badge: null },
      { icon: "💼", label: "Jobs", href: "/jobs", badge: null },
      { icon: "🏢", label: "Companies", href: "/companies", badge: null },
      { icon: "📋", label: "Applications", href: "/applications", badge: null },
    ],
  },
  {
    group: "Account",
    items: [
      { icon: "⚙️", label: "Settings", href: "/settings", badge: null },
      { icon: "🔔", label: "Notifications", href: "/notifications", badge: "5" },
    ],
  },
];

// ── Shared sidebar content (both desktop & mobile use this) ──────────────────
function SidebarContent({ activeItem, setActiveItem, onClose, session, isPending, onSignOut }) {
  return (
    <div className="h-full flex flex-col bg-[#0f0f13] border-r border-white/[0.06]">

      {/* Brand */}
      <div className="px-5 pt-6 pb-4 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600
            flex items-center justify-center text-sm shadow-lg shadow-violet-500/30">
            ⚡
          </div>
          <div>
            <p className="text-white font-semibold text-sm tracking-tight">HireLoop</p>
            <p className="text-white/30 text-[10px] font-medium tracking-widest uppercase">
              Recruiting OS
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="px-3 py-2 overflow-y-auto flex-1">
        {navItems.map((section) => (
          <div key={section.group} className="mb-5">
            <p className="text-white/20 text-[10px] font-semibold uppercase
              tracking-[0.12em] px-2.5 mb-1.5">
              {section.group}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => { setActiveItem(item.label); onClose?.(); }}
                    className={`
                      w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl
                      text-sm transition-all duration-150 relative
                      ${isActive
                        ? "bg-gradient-to-r from-violet-600/20 to-indigo-600/10 text-white border border-violet-500/20"
                        : "text-white/45 hover:text-white/80 hover:bg-white/[0.04] border border-transparent"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2
                        w-0.5 h-5 bg-gradient-to-b from-violet-400 to-indigo-500 rounded-r-full" />
                    )}
                    <span className="text-base">{item.icon}</span>
                    <span className={`font-medium flex-1 text-[13px] ${isActive ? "text-white" : ""}`}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full
                        min-w-[18px] text-center
                        ${isActive ? "bg-violet-500/30 text-violet-300" : "bg-white/10 text-white/35"}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer — user */}
      <div className="px-4 py-4 border-t border-white/[0.05] shrink-0">
        {isPending ? (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 animate-pulse" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 bg-white/10 rounded animate-pulse w-24" />
              <div className="h-2 bg-white/5 rounded animate-pulse w-32" />
            </div>
          </div>
        ) : session ? (
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600
                flex items-center justify-center text-white font-bold text-sm">
                {(session.user?.name || session.user?.email || "?")[0].toUpperCase()}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400
                rounded-full border-2 border-[#0f0f13]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">
                {session.user?.name || "User"}
              </p>
              <p className="text-white/30 text-[10px] truncate">{session.user?.email}</p>
            </div>
            <button
              onClick={onSignOut}
              title="Sign out"
              className="w-7 h-7 flex items-center justify-center rounded-lg
                hover:bg-red-500/10 text-white/25 hover:text-red-400 transition-all text-xs"
            >
              🚪
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            <Link
              href="/auth/signin"
              onClick={() => onClose?.()}
              className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/8 text-white/60
                hover:text-white text-xs font-medium text-center transition-all border border-white/[0.06]"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => onClose?.()}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600
                text-white text-xs font-semibold text-center shadow-lg shadow-violet-500/20
                hover:from-violet-500 hover:to-indigo-500 transition-all"
            >
              Get Started ✨
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function DashboardSideBar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const state = useOverlayState({ defaultOpen: false });

  const handleSignOut = async () => {
    state.close();
    await signOut();
    router.push("/");
  };

  return (
    <>
      {/* ── DESKTOP: fixed persistent sidebar (md এবং উপরে) ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[260px]
        z-40 shadow-xl shadow-black/30">
        <SidebarContent
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          session={session}
          isPending={isPending}
          onSignOut={handleSignOut}
        />
      </aside>

      {/* ── MOBILE: Drawer (md এর নিচে) ── */}
      <div className="md:hidden">
        {/* Hamburger */}
        <button
          onClick={state.toggle}
          className="fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center
            rounded-xl bg-[#0f0f13] border border-white/10 text-white shadow-lg
            shadow-black/40 text-base"
          aria-label="Open menu"
        >
          ☰
        </button>

        <Drawer state={state}>
          <Drawer.Backdrop>
            <Drawer.Content placement="left" className="w-[260px] max-w-[85vw]">
              <Drawer.Dialog className="h-full">
                <Drawer.CloseTrigger className="absolute top-4 right-4 z-10 w-8 h-8 flex
                  items-center justify-center rounded-full bg-white/5 hover:bg-white/10
                  text-white/50 hover:text-white transition-all text-xs">
                  ✕
                </Drawer.CloseTrigger>
                <SidebarContent
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  onClose={() => state.close()}
                  session={session}
                  isPending={isPending}
                  onSignOut={handleSignOut}
                />
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}