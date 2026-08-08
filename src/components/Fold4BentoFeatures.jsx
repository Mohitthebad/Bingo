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
import Card3DTilt from "./Card3DTilt";

export default function Fold4BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();

  const bentoCardHoverProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { 
          scale: 1.02, 
          boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.15)",
          borderColor: "#2563EB"
        },
        whileTap: { scale: 0.99 },
        transition: TRANSITION_PRESETS.springSmooth
      };

  return (
    <section id="features" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <Layers size={14} /> Full Enterprise Operating System
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
            One Platform. <span className="text-[#2563EB]">Unlimited Possibilities.</span>
          </h2>
          <p className="font-body text-[#64748B] text-lg mt-4 leading-relaxed">
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
          {BENTO_FEATURES.map((item) => {
            const IconComp = item.icon;
            return (
              <Card3DTilt key={item.id} className={item.size} tiltMax={10}>
                <motion.div
                  variants={staggerItem}
                  {...bentoCardHoverProps}
                  style={GPU_ACCELERATION}
                  className="h-full bg-white p-8 rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] shadow-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 cursor-pointer preserve-3d text-[#0F172A]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { rotate: 12, scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-3.5 bg-[#EFF6FF] rounded-2xl border border-[#BFDBFE] inline-flex items-center justify-center cursor-pointer shadow-xs text-[#2563EB]"
                      >
                        <IconComp size={24} />
                      </motion.div>
                      <span className="font-mono text-[10px] bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] px-3 py-1 rounded-full font-bold uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-bold">{item.tagline}</span>
                      <h3 className="font-display font-bold text-2xl text-[#0F172A] mt-1">{item.title}</h3>
                      <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-mono text-[#2563EB] font-bold">
                    <span>Included 100% Free</span> <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#10B981]" />
                  </div>
                </motion.div>
              </Card3DTilt>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
