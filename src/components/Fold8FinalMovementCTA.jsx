import React, { useState } from "react";
import { Rocket, Check, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  sectionReveal, 
  staggerContainer, 
  staggerItem, 
  buttonTap, 
  GPU_ACCELERATION 
} from "../animations";
import Card3DTilt from "./Card3DTilt";

export default function Fold8FinalMovementCTA({ onNotify }) {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
      if (onNotify) onNotify("🚀 Welcome to the Movement! Your $0 Business OS is active.");
    }, 600);
  };

  return (
    <section id="join" className="py-28 bg-[#1E3A8A] text-white relative">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#F8FAFC] z-20" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
        
        <motion.div {...sectionReveal}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#10B981] border border-white/20 px-4 py-1.5 rounded-full font-bold mb-4">
            Join The Software Revolution
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-tight text-white">
            Ready To Stop Paying For <br />
            <span className="relative inline-block text-[#10B981]">
              Software Forever?
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#10B981] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-white/95 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
            Everything included. Forever free. Unlimited features. Unlimited users. No credit card required. No hidden fees.
          </p>
        </motion.div>

        {submitted ? (
          <Card3DTilt className="max-w-xl mx-auto" tiltMax={8}>
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-white text-[#0F172A] rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] font-display font-bold text-xl shadow-2xl preserve-3d"
            >
              🎉 Welcome to On.Bingo! Your account is active. Check your inbox to launch your workspace!
            </motion.div>
          </Card3DTilt>
        ) : (
          <Card3DTilt className="max-w-xl mx-auto" tiltMax={8}>
            <motion.form
              {...sectionReveal}
              onSubmit={handleSubmit}
              className="bg-white/15 p-4 rounded-3xl border border-white/25 backdrop-blur-md flex flex-col sm:flex-row gap-3 shadow-2xl preserve-3d"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-[#0F172A] border border-[#E2E8F0] rounded-2xl px-6 py-4 text-sm placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] flex-1 shadow-inner"
              />
              <motion.button
                {...buttonTap}
                style={GPU_ACCELERATION}
                type="submit"
                disabled={isSubmitting}
                className="bg-[#10B981] text-white font-display font-extrabold px-9 py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap border border-[#10B981] disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-white" />
                    <span>Activating...</span>
                  </>
                ) : (
                  <>
                    <span>Get Free Platform</span>
                    <Rocket size={16} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </Card3DTilt>
        )}

        {/* Checkmarks Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20px" }}
          className="flex items-center justify-center gap-6 pt-8 font-mono text-xs text-white/90 flex-wrap"
        >
          {[
            "Forever Free",
            "Unlimited Features",
            "AI Powered",
            "Enterprise Ready",
            "Mobile App",
            "2 Minute Setup",
            "No Credit Card"
          ].map((item) => (
            <motion.span key={item} variants={staggerItem} className="flex items-center gap-1.5 text-white font-semibold">
              <Check size={14} className="text-[#10B981]" /> {item}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
