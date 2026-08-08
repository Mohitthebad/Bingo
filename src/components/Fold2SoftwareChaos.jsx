import React from "react";
import { X, Check, AlertTriangle, ShieldCheck, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SOFTWARE_CHAOS_APPS } from "../data/onBingoData";
import { sectionReveal, GPU_ACCELERATION, TRANSITION_PRESETS } from "../animations";
import Card3DTilt from "./Card3DTilt";

export default function Fold2SoftwareChaos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="chaos" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5] px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <AlertTriangle size={14} /> The Software Tax Chaos
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
            Your Business Doesn't Need More Software. <br />
            <span className="text-[#2563EB]">It Needs One Platform.</span>
          </h2>
          <p className="font-body text-[#64748B] text-lg mt-4 leading-relaxed">
            Modern businesses waste thousands of dollars every month juggling dozens of disconnected apps, broken integrations, and user paywalls.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left: Disconnected App Chaos */}
          <Card3DTilt tiltMax={8}>
            <motion.div
              {...sectionReveal}
              style={GPU_ACCELERATION}
              className="h-full bg-white p-8 rounded-3xl border border-[#EF4444]/30 space-y-6 flex flex-col justify-between shadow-xl preserve-3d text-[#0F172A]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <div className="font-display font-bold text-xl text-[#DC2626] flex items-center gap-2">
                    <X size={22} className="text-[#DC2626]" /> Disconnected Software Chaos
                  </div>
                  <span className="font-mono text-xs text-[#DC2626] font-bold bg-[#FEF2F2] px-3 py-1 rounded-full border border-[#FCA5A5]">
                    $400+/mo Waste
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {SOFTWARE_CHAOS_APPS.map((app) => {
                    const IconComp = app.icon;
                    return (
                      <motion.div
                        key={app.name}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2, borderColor: "#DC2626" }}
                        transition={TRANSITION_PRESETS.springSmooth}
                        style={GPU_ACCELERATION}
                        className="bg-[#FEF2F2]/60 p-3.5 rounded-2xl border border-[#FCA5A5]/60 flex items-center justify-between text-xs font-mono transition-colors shadow-xs"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp size={16} className="text-[#DC2626]" />
                          <span className="text-[#64748B] font-medium">{app.category}</span>
                        </div>
                        <span className="text-[#DC2626] font-bold">{app.avgPrice}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 bg-[#FEF2F2] border border-[#FCA5A5] rounded-2xl text-xs text-[#991B1B] font-mono flex items-center gap-2">
                <AlertTriangle size={16} className="text-[#DC2626] shrink-0" />
                <span>Separate logins, broken Zapier webhooks, duplicate contacts, high monthly credit card charges, and feature paywalls.</span>
              </div>
            </motion.div>
          </Card3DTilt>

          {/* Right: On.Bingo Solution */}
          <Card3DTilt tiltMax={8}>
            <motion.div
              {...sectionReveal}
              style={GPU_ACCELERATION}
              whileHover={shouldReduceMotion ? {} : { scale: 1.01, boxShadow: "0 25px 50px -10px rgba(37, 99, 235, 0.15)" }}
              transition={TRANSITION_PRESETS.springSmooth}
              className="h-full bg-white p-8 rounded-3xl border-l-[6px] border-l-[#10B981] border border-[#E2E8F0] shadow-2xl space-y-6 flex flex-col justify-between preserve-3d text-[#0F172A]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <div className="font-display font-bold text-xl text-[#2563EB] flex items-center gap-2">
                    <Check size={22} className="text-[#10B981]" /> On.Bingo Business OS
                  </div>
                  <span className="font-mono text-xs text-white font-extrabold bg-[#10B981] px-3.5 py-1 rounded-full shadow-md">
                    $0 Forever
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {["1 Unified Workspace", "Unlimited Users & Contacts", "Native AI Automation"].map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      className="bg-[#F0FDF4] p-4 rounded-2xl border-l-4 border-l-[#10B981] border border-[#A7F3D0] flex items-center justify-between shadow-xs transition-colors"
                    >
                      <span className="text-[#0F172A] font-bold">{feature}</span>
                      <span className="text-[#10B981] font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Included
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl text-xs text-[#065F46] font-mono font-bold flex items-center gap-2">
                <Rocket size={16} className="text-[#2563EB] shrink-0" />
                <span>100% Free Forever. No trial. No expiry. No credit card required.</span>
              </div>
            </motion.div>
          </Card3DTilt>

        </div>
      </div>
    </section>
  );
}
