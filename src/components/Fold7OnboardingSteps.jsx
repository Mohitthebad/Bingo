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
import Card3DTilt from "./Card3DTilt";

export default function Fold7OnboardingSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="onboarding" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Clock size={14} /> Zero Friction Onboarding
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
            Your Business Can Be Running Today.
          </h2>
          <p className="font-body text-[#64748B] text-lg mt-4 leading-relaxed">
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
          {ONBOARDING_STEPS.map((s) => {
            const IconComp = s.icon;
            return (
              <Card3DTilt key={s.step} tiltMax={10}>
                <motion.div
                  variants={staggerItem}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03, borderColor: "#2563EB" }}
                  transition={TRANSITION_PRESETS.springSmooth}
                  style={GPU_ACCELERATION}
                  className="h-full bg-white p-8 rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] shadow-xl relative space-y-4 transition-colors cursor-pointer preserve-3d text-[#0F172A]"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs text-[#2563EB]">
                      <IconComp size={24} />
                    </div>
                    <span className="font-display font-black text-3xl text-[#2563EB]">{s.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0F172A]">{s.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                </motion.div>
              </Card3DTilt>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            {...buttonTap}
            style={GPU_ACCELERATION}
            href="#join"
            className="inline-flex items-center gap-2 bg-[#10B981] text-white font-display font-extrabold px-9 py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all shadow-md cursor-pointer border border-[#10B981]"
          >
            Create Free Account Now <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
