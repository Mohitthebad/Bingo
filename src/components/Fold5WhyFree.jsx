import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { REASON_WHY_FREE_POINTS } from "../data/onBingoData";
import { 
  sectionReveal, 
  staggerContainer, 
  staggerItem, 
  GPU_ACCELERATION, 
  TRANSITION_PRESETS 
} from "../animations";

export default function Fold5WhyFree() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-free" className="py-24 bg-white text-[#111827] relative border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#74db24]/20 text-[#111827] border border-[#74db24]/40 px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Lock size={14} className="text-[#0535e6]" /> Radical Transparency
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#111827]">
            Why Is It Free?
          </h2>
          <p className="font-body text-[#6b7280] text-lg mt-4 leading-relaxed">
            Removing every objection. We believe business software should never stop anyone from building a world-changing company.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {REASON_WHY_FREE_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -3, borderColor: "#0535e6" }}
              transition={TRANSITION_PRESETS.springSmooth}
              style={GPU_ACCELERATION}
              className="bg-[#fafafc] p-8 rounded-3xl border-l-4 border-l-[#74db24] border border-[#e5e7eb] shadow-lg space-y-4 transition-colors cursor-pointer"
            >
              <div className="text-4xl p-3 bg-white rounded-2xl w-fit border border-[#e5e7eb] shadow-xs">{item.icon}</div>
              <h3 className="font-display font-bold text-xl text-[#111827]">{item.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder Commitment Box */}
        <motion.div
          {...sectionReveal}
          style={GPU_ACCELERATION}
          className="mt-14 bg-gradient-to-r from-white via-[#fafafc] to-white p-8 md:p-10 rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] shadow-premium-xl text-center max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0535e6] uppercase font-bold">
            <ShieldCheck size={16} className="text-[#74db24]" /> 100% Transparency Commitment
          </div>
          <h3 className="font-display font-bold text-2xl text-[#111827]">
            No Trial. No Expiry. No Credit Card. No Tricks.
          </h3>
          <p className="text-sm text-[#6b7280] max-w-2xl mx-auto leading-relaxed font-body">
            You get unlimited leads, unlimited pipelines, unlimited users, and complete marketing automation. No hidden fee will ever be charged for the core operating system.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
