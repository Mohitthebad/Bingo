import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ONBOARDING_STEPS } from "../data/onBingoData";
import { 
  sectionReveal, 
  staggerContainer, 
  staggerItem, 
  buttonTap, 
  GPU_ACCELERATION, 
  TRANSITION_PRESETS 
} from "../animations";

export default function Fold7OnboardingSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="onboarding" className="py-24 bg-[#fafafc] text-[#111827] relative border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#0535e6]/10 text-[#0535e6] border border-[#0535e6]/20 px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Clock size={14} /> Zero Friction Onboarding
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#111827]">
            Your Business Can Be Running Today.
          </h2>
          <p className="font-body text-[#6b7280] text-lg mt-4 leading-relaxed">
            No installation. No coding. No complex technical setups. Start managing leads and building funnels in under 3 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-8 mb-14"
        >
          {ONBOARDING_STEPS.map((s) => (
            <motion.div
              key={s.step}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -4, borderColor: "#0535e6" }}
              transition={TRANSITION_PRESETS.springSmooth}
              style={GPU_ACCELERATION}
              className="bg-white p-8 rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] shadow-lg relative space-y-4 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl p-3 bg-[#fafafc] rounded-2xl border border-[#e5e7eb] shadow-xs">{s.icon}</span>
                <span className="font-display font-black text-3xl text-[#0535e6]">{s.step}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#111827]">{s.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            {...buttonTap}
            style={GPU_ACCELERATION}
            href="#join"
            className="inline-flex items-center gap-2 bg-[#74db24] text-[#111827] font-display font-extrabold px-9 py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-[#0535e6] hover:text-white transition-colors shadow-lime-glow cursor-pointer border border-[#74db24]"
          >
            Create Free Account Now <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
