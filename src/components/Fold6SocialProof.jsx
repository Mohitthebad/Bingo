import React from "react";
import { Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MOVEMENT_METRICS, MOVEMENT_TESTIMONIALS } from "../data/onBingoData";
import { 
  sectionReveal, 
  staggerContainer, 
  staggerItem, 
  GPU_ACCELERATION, 
  TRANSITION_PRESETS 
} from "../animations";

export default function Fold6SocialProof() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="proof" className="py-24 bg-[#0535e6] text-white relative overflow-hidden">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#74db24] border border-white/20 px-4 py-1.5 rounded-full mb-3 font-bold">
            <Globe size={14} /> Global Movement Scale
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
            Businesses Around The World Are Growing With On.Bingo
          </h2>
        </motion.div>

        {/* Metric Counters */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {MOVEMENT_METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -4 }}
              transition={TRANSITION_PRESETS.springSmooth}
              style={GPU_ACCELERATION}
              className="bg-white text-[#111827] p-6 rounded-3xl border-[3px] border-[#e5e7eb] text-center space-y-2 shadow-premium-xl cursor-pointer"
            >
              <span className="text-3xl">{m.icon}</span>
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0535e6]">{m.value}</div>
              <div className="font-mono text-xs text-[#6b7280] uppercase font-semibold">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {MOVEMENT_TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              {...sectionReveal}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -3 }}
              transition={TRANSITION_PRESETS.springSmooth}
              style={GPU_ACCELERATION}
              className="bg-white text-[#111827] p-8 rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] shadow-premium-xl space-y-6 flex flex-col justify-between cursor-pointer"
            >
              <p className="font-body text-base md:text-lg text-[#111827] italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e7eb]">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <div className="font-display font-bold text-[#111827] text-base">{t.name}</div>
                  <div className="text-xs text-[#0535e6] font-mono font-semibold">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
