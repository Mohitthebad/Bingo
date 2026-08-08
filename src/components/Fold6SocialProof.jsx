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
import Card3DTilt from "./Card3DTilt";

export default function Fold6SocialProof() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="proof" className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#F8FAFC] z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#10B981] border border-white/20 px-4 py-1.5 rounded-full mb-3 font-bold">
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
          {MOVEMENT_METRICS.map((m) => {
            const IconComp = m.icon;
            return (
              <Card3DTilt key={m.label} tiltMax={10}>
                <motion.div
                  variants={staggerItem}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  transition={TRANSITION_PRESETS.springSmooth}
                  style={GPU_ACCELERATION}
                  className="h-full bg-white text-[#0F172A] p-6 rounded-3xl border-[2px] border-[#E2E8F0] text-center space-y-2 shadow-2xl cursor-pointer preserve-3d"
                >
                  <div className="p-3 bg-[#F8FAFC] rounded-2xl w-fit mx-auto border border-[#E2E8F0] text-[#2563EB]">
                    <IconComp size={24} />
                  </div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#2563EB]">{m.value}</div>
                  <div className="font-mono text-xs text-[#64748B] uppercase font-semibold">{m.label}</div>
                </motion.div>
              </Card3DTilt>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {MOVEMENT_TESTIMONIALS.map((t, idx) => (
            <Card3DTilt key={idx} tiltMax={8}>
              <motion.div
                {...sectionReveal}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={TRANSITION_PRESETS.springSmooth}
                style={GPU_ACCELERATION}
                className="h-full bg-white text-[#0F172A] p-8 rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] shadow-2xl space-y-6 flex flex-col justify-between cursor-pointer preserve-3d"
              >
                <p className="font-body text-base md:text-lg text-[#0F172A] italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A] text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm border border-[#1E3A8A]">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#0F172A] text-base">{t.name}</div>
                    <div className="text-xs text-[#2563EB] font-mono font-semibold">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
