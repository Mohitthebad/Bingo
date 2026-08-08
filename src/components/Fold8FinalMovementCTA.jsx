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
    <section id="join" className="py-28 bg-[#0535e6] text-white relative">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white z-20" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
        
        <motion.div {...sectionReveal}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#74db24] border border-white/20 px-4 py-1.5 rounded-full font-bold mb-4">
            Join The Software Revolution
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-tight text-white">
            Ready To Stop Paying For <br />
            <span className="relative inline-block text-[#74db24]">
              Software Forever?
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#74db24] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-white/95 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
            Everything included. Forever free. Unlimited features. Unlimited users. No credit card required. No hidden fees.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-white text-[#111827] rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] font-display font-bold text-xl max-w-xl mx-auto shadow-premium-xl"
          >
            🎉 Welcome to On.Bingo! Your account is active. Check your inbox to launch your workspace!
          </motion.div>
        ) : (
          <motion.form
            {...sectionReveal}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-[#111827] border border-[#e5e7eb] rounded-2xl px-6 py-4 text-sm placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#74db24] flex-1 shadow-inner"
            />
            <motion.button
              {...buttonTap}
              style={GPU_ACCELERATION}
              type="submit"
              disabled={isSubmitting}
              className="bg-[#74db24] text-[#111827] font-display font-extrabold px-9 py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-white hover:text-[#0535e6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lime-glow whitespace-nowrap border border-[#74db24] disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin text-[#111827]" />
                  <span>Activating...</span>
                </>
              ) : (
                <>
                  <span>Get My Free Business Platform</span>
                  <Rocket size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
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
              <Check size={14} className="text-[#74db24]" /> {item}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
