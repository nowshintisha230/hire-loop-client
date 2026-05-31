"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card } from "@heroui/react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

function CartoonBoy() {
  return (
    <div className="flex justify-center mb-2">
      <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes wave { 0%,100%{transform:rotate(0deg)} 30%{transform:rotate(-35deg)} 60%{transform:rotate(-35deg)} }
          @keyframes point { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(12deg)} }
          @keyframes blink { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.08)} }
          @keyframes nod { 0%,100%{transform:rotate(0deg)} 30%{transform:rotate(5deg)} 70%{transform:rotate(-4deg)} }
          @keyframes breathe { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.04)} }
          @keyframes bubble { 0%,15%{opacity:0;transform:scale(0.5)} 25%,75%{opacity:1;transform:scale(1)} 90%,100%{opacity:0;transform:scale(0.5)} }
          @keyframes fingerpoint { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
        `}</style>

        {/* Shadow */}
        <ellipse cx="100" cy="234" rx="40" ry="7" fill="#00000018"/>

        {/* Body */}
        <g style={{transformOrigin:"100px 172px", animation:"breathe 2.5s ease-in-out infinite 0.5s"}}>
          <rect x="72" y="138" width="56" height="60" rx="12" fill="#4A80F0"/>
          <path d="M88 138 L100 154 L112 138" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" opacity="0.6"/>
          <rect x="77" y="150" width="12" height="10" rx="3" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/>
        </g>

        {/* LEFT ARM — waving */}
        <g style={{transformOrigin:"72px 148px", animation:"wave 2s ease-in-out infinite 0.3s"}}>
          <rect x="46" y="140" width="28" height="13" rx="6.5" fill="#4A80F0"/>
          <rect x="28" y="126" width="22" height="12" rx="6" fill="#4A80F0" transform="rotate(-30 39 132)"/>
          {/* Open hand */}
          <ellipse cx="24" cy="118" rx="12" ry="10" fill="#F5A623"/>
          <ellipse cx="13" cy="114" rx="4.5" ry="6.5" fill="#F5A623" transform="rotate(-20 13 114)"/>
          <ellipse cx="17" cy="108" rx="3.5" ry="5" fill="#F5A623"/>
          <ellipse cx="23" cy="106" rx="3.5" ry="5" fill="#F5A623"/>
          <ellipse cx="29" cy="107" rx="3.5" ry="5" fill="#F5A623"/>
          <ellipse cx="34" cy="110" rx="3" ry="4.5" fill="#F5A623"/>
          <line x1="17" y1="112" x2="17" y2="118" stroke="#E8920A" strokeWidth="1" opacity="0.5"/>
          <line x1="23" y1="110" x2="23" y2="116" stroke="#E8920A" strokeWidth="1" opacity="0.5"/>
          <line x1="29" y1="111" x2="29" y2="117" stroke="#E8920A" strokeWidth="1" opacity="0.5"/>
        </g>

        {/* RIGHT ARM — pointing */}
        <g style={{transformOrigin:"128px 148px", animation:"point 1.8s ease-in-out infinite 0s"}}>
          <rect x="128" y="140" width="26" height="13" rx="6.5" fill="#4A80F0"/>
          <rect x="150" y="138" width="24" height="12" rx="6" fill="#4A80F0"/>
          {/* Fist */}
          <ellipse cx="182" cy="143" rx="11" ry="9" fill="#F5A623"/>
          <ellipse cx="174" cy="151" rx="3.5" ry="3" fill="#F5A623"/>
          <ellipse cx="181" cy="152" rx="3.5" ry="3" fill="#F5A623"/>
          <ellipse cx="188" cy="151" rx="3" ry="3" fill="#F5A623"/>
          {/* Pointing finger */}
          <g style={{transformOrigin:"185px 143px", animation:"fingerpoint 1.8s ease-in-out infinite"}}>
            <rect x="180" y="128" width="10" height="22" rx="5" fill="#F5A623"/>
            <ellipse cx="185" cy="128" rx="5" ry="4" fill="#F7B840"/>
            <ellipse cx="185" cy="128" rx="3" ry="2" fill="#E8920A" opacity="0.4"/>
          </g>
          <line x1="174" y1="145" x2="174" y2="150" stroke="#E8920A" strokeWidth="1" opacity="0.5"/>
          <line x1="181" y1="144" x2="181" y2="150" stroke="#E8920A" strokeWidth="1" opacity="0.5"/>
        </g>

        {/* Legs */}
        <rect x="78" y="194" width="19" height="36" rx="9" fill="#2C3E8C"/>
        <rect x="103" y="194" width="19" height="36" rx="9" fill="#2C3E8C"/>

        {/* Shoes */}
        <ellipse cx="87" cy="230" rx="15" ry="8" fill="#1a1a2e"/>
        <ellipse cx="112" cy="230" rx="15" ry="8" fill="#1a1a2e"/>
        <ellipse cx="83" cy="226" rx="5" ry="2.5" fill="#2a2a3e" opacity="0.6"/>
        <ellipse cx="108" cy="226" rx="5" ry="2.5" fill="#2a2a3e" opacity="0.6"/>

        {/* Neck */}
        <rect x="91" y="116" width="18" height="24" rx="7" fill="#F5A623"/>

        {/* HEAD */}
        <g style={{transformOrigin:"100px 88px", animation:"nod 3s ease-in-out infinite 0.2s"}}>
          <ellipse cx="100" cy="86" rx="34" ry="36" fill="#F5A623"/>

          {/* Hair */}
          <ellipse cx="100" cy="55" rx="34" ry="15" fill="#2C1810"/>
          <rect x="66" y="55" width="68" height="15" fill="#2C1810"/>
          <ellipse cx="68" cy="70" rx="7" ry="11" fill="#2C1810"/>
          <ellipse cx="132" cy="70" rx="7" ry="11" fill="#2C1810"/>
          <path d="M100 50 Q108 38 104 32" stroke="#2C1810" strokeWidth="4.5" strokeLinecap="round" fill="none"/>

          {/* Ears */}
          <ellipse cx="66" cy="86" rx="6" ry="8" fill="#F5A623"/>
          <ellipse cx="66" cy="86" rx="3.5" ry="5" fill="#E8920A" opacity="0.3"/>
          <ellipse cx="134" cy="86" rx="6" ry="8" fill="#F5A623"/>
          <ellipse cx="134" cy="86" rx="3.5" ry="5" fill="#E8920A" opacity="0.3"/>

          {/* Eyebrows */}
          <path d="M78 70 Q85 66 92 70" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M108 70 Q115 66 122 70" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

          {/* Eyes */}
          <g style={{transformOrigin:"100px 82px", animation:"blink 4s ease-in-out infinite 1s"}}>
            <ellipse cx="85" cy="82" rx="7.5" ry="8.5" fill="white"/>
            <ellipse cx="115" cy="82" rx="7.5" ry="8.5" fill="white"/>
            <circle cx="87" cy="83" r="4.5" fill="#1a1a1a"/>
            <circle cx="117" cy="83" r="4.5" fill="#1a1a1a"/>
            <circle cx="89" cy="80" r="2" fill="white"/>
            <circle cx="119" cy="80" r="2" fill="white"/>
          </g>

          {/* Nose */}
          <ellipse cx="100" cy="94" rx="3.5" ry="2.5" fill="#E8920A" opacity="0.35"/>

          {/* Smile */}
          <path d="M88 104 Q100 115 112 104" stroke="#C0641A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M91 106 Q100 113 109 106" fill="white" opacity="0.7"/>

          {/* Cheeks */}
          <ellipse cx="74" cy="98" rx="8" ry="5.5" fill="#F97060" opacity="0.35"/>
          <ellipse cx="126" cy="98" rx="8" ry="5.5" fill="#F97060" opacity="0.35"/>
        </g>

        {/* Speech bubble */}
        <g style={{transformOrigin:"160px 30px", animation:"bubble 3.5s ease-in-out infinite 0.8s"}}>
          <rect x="118" y="8" width="80" height="44" rx="10" fill="white" stroke="#4A80F0" strokeWidth="2"/>
          <path d="M130 52 L118 66 L144 52" fill="white" stroke="#4A80F0" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M130 52 L144 52 L118 66" fill="white"/>
          <text x="158" y="30" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4A80F0" fontFamily="sans-serif">Join Us! 🎉</text>
          <text x="158" y="44" textAnchor="middle" fontSize="10" fill="#666" fontFamily="sans-serif">Sign up now →</text>
        </g>

      </svg>
    </div>
  );
}

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signUp.email({ name, email, password });
      if (error) {
        setError(error.message || "Signup failed. Please try again.");
        return;
      }
      router.push("/auth/signin");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-default-50 px-4 overflow-hidden">

      {/* Background blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1.4, 1, 1.4], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Cartoon Boy */}
        <CartoonBoy />

        <Card className="w-full p-6 shadow-xl">

          {/* Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-default-500 mt-2">Join HireHub today</p>
          </motion.div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                className="mb-4 px-4 py-3 rounded-lg bg-danger-50 text-danger text-sm"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Input
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                variant="bordered"
                startContent={<User className="h-4 w-4 text-default-400" />}
                isRequired
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                startContent={<Mail className="h-4 w-4 text-default-400" />}
                isRequired
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Min. 8 characters"
                variant="bordered"
                startContent={<Lock className="h-4 w-4 text-default-400" />}
                isRequired
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="submit"
                color="primary"
                className="w-full"
                isLoading={loading}
                endContent={
                  !loading && (
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  )
                }
              >
                Create Account
              </Button>
            </motion.div>

          </form>

          <motion.div
            className="mt-6 text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </motion.div>

        </Card>
      </motion.div>
    </div>
  );
}