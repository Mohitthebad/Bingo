import React, { useState, useEffect } from "react";
import { Zap, ShieldCheck, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { buttonTap, GPU_ACCELERATION } from "../animations";
import OnBingoLogo from "./OnBingoLogo";

const NAV_LINKS = [
  { href: "#chaos", label: "Problem" },
  { href: "#calculator", label: "Savings" },
  { href: "#features", label: "Capabilities" },
  { href: "#why-free", label: "Why Free" },
  { href: "#proof", label: "Proof" },
  { href: "#onboarding", label: "Setup" },
];

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Active Section Detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full overflow-x-clip ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-md py-2.5" 
        : "bg-white border-b border-[#E2E8F0] py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <motion.a
          href="#"
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          style={GPU_ACCELERATION}
          className="shrink-0 cursor-pointer"
        >
          <OnBingoLogo lightTheme={true} />
        </motion.a>

        {/* Desktop Navigation Links (xl breakpoint for comfortable fit) */}
        <nav className="hidden xl:flex items-center gap-1.5 xl:gap-3 font-mono text-[11px] xl:text-xs uppercase tracking-wider text-[#0F172A]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                transition={{ duration: 0.15 }}
                className={`transition-colors py-1.5 px-2.5 xl:px-3 rounded-full relative font-semibold whitespace-nowrap ${
                  isActive 
                    ? "text-[#2563EB] bg-[#EFF6FF] font-bold border border-[#BFDBFE]" 
                    : "hover:text-[#2563EB]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBadge"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-sm"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Desktop CTAs & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="hidden 2xl:flex items-center gap-1.5 text-[11px] font-mono text-[#0F172A] font-semibold bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#E2E8F0] whitespace-nowrap">
            <ShieldCheck size={13} className="text-[#10B981]" /> No Credit Card
          </span>
          
          <motion.a
            {...buttonTap}
            style={GPU_ACCELERATION}
            href="#join"
            className="hidden sm:inline-flex font-mono text-[11px] xl:text-xs uppercase tracking-wider bg-[#10B981] text-white px-4 xl:px-6 py-2.5 rounded-full font-extrabold hover:bg-[#2563EB] transition-all shadow-md items-center gap-1.5 cursor-pointer border border-[#10B981] whitespace-nowrap"
          >
            <Zap size={14} className="fill-white" /> Get Started Free
          </motion.a>

          {/* Mobile & Laptop Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 text-[#0F172A] bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-wider text-[#0F172A]"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:text-[#2563EB] transition-all font-semibold flex items-center justify-between ${
                    activeSection === link.href ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE] font-bold" : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[#2563EB]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#join"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-mono text-xs uppercase tracking-wider bg-[#10B981] text-white px-6 py-3.5 rounded-xl font-extrabold hover:bg-[#2563EB] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#10B981]"
              >
                <Zap size={14} className="fill-white" /> Get Started Free
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] font-mono">
                <Sparkles size={12} className="text-[#D97706]" /> 100% Free Enterprise Business OS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
