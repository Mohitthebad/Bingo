import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BENTO_FEATURES } from "../data/onBingoData";
import { 
  staggerContainer, 
  staggerItem, 
  GPU_ACCELERATION, 
  TRANSITION_PRESETS 
} from "../animations";

export default function Fold4BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();

  const bentoCardHoverProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { 
          scale: 1.03, 
          y: -4,
          boxShadow: "0 25px 50px -12px rgba(5, 53, 230, 0.18)",
          borderColor: "#0535e6"
        },
        whileTap: { scale: 0.99 },
        transition: TRANSITION_PRESETS.springSmooth
      };

  return (
    <section id="features" className="py-24 bg-[#fafafc] text-[#111827] relative border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#0535e6]/10 text-[#0535e6] border border-[#0535e6]/20 px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Layers size={14} /> Full Enterprise Operating System
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#111827]">
            One Platform. <span className="text-[#0535e6]">Unlimited Possibilities.</span>
          </h2>
          <p className="font-body text-[#6b7280] text-lg mt-4 leading-relaxed">
            Every feature is enterprise-grade, fully integrated, and completely unlocked from day one. No paywalls. No limited seats.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BENTO_FEATURES.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              {...bentoCardHoverProps}
              style={GPU_ACCELERATION}
              className={`${item.size} bg-white p-8 rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] shadow-lg flex flex-col justify-between relative overflow-hidden group transition-colors duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <motion.span
                    whileHover={shouldReduceMotion ? {} : { rotate: 12, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="text-4xl p-3 bg-[#fafafc] rounded-2xl border border-[#e5e7eb] inline-block cursor-pointer shadow-xs"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-mono text-[10px] bg-[#74db24]/20 text-[#111827] border border-[#74db24]/40 px-3 py-1 rounded-full font-bold uppercase">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#0535e6] uppercase tracking-wider font-bold">{item.tagline}</span>
                  <h3 className="font-display font-bold text-2xl text-[#111827] mt-1">{item.title}</h3>
                  <p className="text-sm text-[#6b7280] mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#e5e7eb] flex items-center gap-1.5 text-xs font-mono text-[#0535e6] font-bold">
                <span>Included 100% Free</span> <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#74db24]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
