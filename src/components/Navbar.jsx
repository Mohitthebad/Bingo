import React, { useState, useEffect } from "react";
import { Zap, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonTap, GPU_ACCELERATION } from "../animations";
import OnBingoLogo from "./OnBingoLogo";

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#03269c]/95 backdrop-blur-xl border-b border-white/20 shadow-brand-glow py-3" 
        : "bg-[#0535e6] border-b border-[#03269c] py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        
        {/* Exact New Brand Logo Component matching user image */}
        <motion.a
          href="#"
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          style={GPU_ACCELERATION}
          className="shrink-0 cursor-pointer"
        >
          <OnBingoLogo />
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-mono text-xs uppercase tracking-wider text-white/90">
          {[
            { href: "#chaos", label: "The Problem" },
            { href: "#calculator", label: "Savings Calculator" },
            { href: "#features", label: "OS Capabilities" },
            { href: "#why-free", label: "Why Is It Free?" },
            { href: "#proof", label: "Social Proof" },
            { href: "#onboarding", label: "3-Min Setup" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={shouldReduceMotion ? {} : { y: -1.5, color: "#74db24" }}
              transition={{ duration: 0.15 }}
              className="hover:text-[#74db24] transition-colors py-1 relative font-semibold whitespace-nowrap"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden md:flex items-center gap-1.5 text-xs font-mono text-white/90 font-semibold bg-white/10 px-3 py-1.5 rounded-full border border-white/15 whitespace-nowrap">
            <ShieldCheck size={14} className="text-[#74db24]" /> No Credit Card
          </span>
          <motion.a
            {...buttonTap}
            style={GPU_ACCELERATION}
            href="#join"
            className="font-mono text-xs uppercase tracking-wider bg-[#74db24] text-[#111827] px-6 py-2.5 rounded-full font-extrabold hover:bg-white hover:text-[#0535e6] transition-all shadow-lime-glow flex items-center gap-1.5 cursor-pointer border border-[#74db24] whitespace-nowrap"
          >
            <Zap size={14} className="fill-[#111827]" /> Get Started Free
          </motion.a>
        </div>

      </div>
    </header>
  );
}
