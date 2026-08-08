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
import Card3DTilt from "./Card3DTilt";

export default function Fold5WhyFree() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-free" className="py-24 bg-white text-[#0F172A] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Lock size={14} className="text-[#2563EB]" /> Radical Transparency
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
            Why Is It Free?
          </h2>
          <p className="font-body text-[#64748B] text-lg mt-4 leading-relaxed">
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
          {REASON_WHY_FREE_POINTS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Card3DTilt key={idx} tiltMax={10}>
                <motion.div
                  variants={staggerItem}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, borderColor: "#2563EB" }}
                  transition={TRANSITION_PRESETS.springSmooth}
                  style={GPU_ACCELERATION}
                  className="h-full bg-[#F8FAFC] p-8 rounded-3xl border-l-4 border-l-[#10B981] border border-[#E2E8F0] shadow-lg space-y-4 transition-colors cursor-pointer preserve-3d text-[#0F172A]"
                >
                  <div className="p-3.5 bg-white rounded-2xl w-fit border border-[#E2E8F0] shadow-xs text-[#2563EB]">
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </motion.div>
              </Card3DTilt>
            );
          })}
        </motion.div>

        {/* Founder Commitment Box */}
        <Card3DTilt className="mt-14 max-w-4xl mx-auto" tiltMax={6}>
          <motion.div
            {...sectionReveal}
            style={GPU_ACCELERATION}
            className="bg-gradient-to-r from-white via-[#F8FAFC] to-white p-8 md:p-10 rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] shadow-xl text-center space-y-4 preserve-3d text-[#0F172A]"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2563EB] uppercase font-bold">
              <ShieldCheck size={16} className="text-[#10B981]" /> 100% Transparency Commitment
            </div>
            <h3 className="font-display font-bold text-2xl text-[#0F172A]">
              No Trial. No Expiry. No Credit Card. No Tricks.
            </h3>
            <p className="text-sm text-[#64748B] max-w-2xl mx-auto leading-relaxed font-body">
              You get unlimited leads, unlimited pipelines, unlimited users, and complete marketing automation. No hidden fee will ever be charged for the core operating system.
            </p>
          </motion.div>
        </Card3DTilt>

      </div>
    </section>
  );
}
