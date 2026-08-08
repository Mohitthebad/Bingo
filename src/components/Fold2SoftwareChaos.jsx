import React from "react";
import { X, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SOFTWARE_CHAOS_APPS } from "../data/onBingoData";
import { sectionReveal, GPU_ACCELERATION, TRANSITION_PRESETS } from "../animations";

export default function Fold2SoftwareChaos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="chaos" className="py-24 bg-white text-[#111827] relative border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#e61713]/10 text-[#e61713] border border-[#e61713]/30 px-3.5 py-1.5 rounded-full mb-3 font-bold">
            <AlertTriangle size={14} /> The Software Tax Chaos
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#111827]">
            Your Business Doesn't Need More Software. <br />
            <span className="text-[#0535e6]">It Needs One Platform.</span>
          </h2>
          <p className="font-body text-[#6b7280] text-lg mt-4 leading-relaxed">
            Modern businesses waste thousands of dollars every month juggling dozens of disconnected apps, broken integrations, and user paywalls.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left: Disconnected App Chaos */}
          <motion.div
            {...sectionReveal}
            style={GPU_ACCELERATION}
            className="bg-[#fafafc] p-8 rounded-3xl border border-[#e61713]/30 space-y-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4 mb-6">
                <div className="font-display font-bold text-xl text-[#e61713] flex items-center gap-2">
                  <X size={22} className="text-[#e61713]" /> Disconnected Software Chaos
                </div>
                <span className="font-mono text-xs text-[#e61713] font-bold bg-[#e61713]/10 px-3 py-1 rounded-full border border-[#e61713]/20">
                  $400+/mo Waste
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {SOFTWARE_CHAOS_APPS.map((app) => (
                  <motion.div
                    key={app.name}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2, borderColor: "#e61713" }}
                    transition={TRANSITION_PRESETS.springSmooth}
                    style={GPU_ACCELERATION}
                    className="bg-white p-3.5 rounded-2xl border border-[#e5e7eb] flex items-center justify-between text-xs font-mono transition-colors shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span>{app.icon}</span>
                      <span className="text-[#6b7280] font-medium">{app.category}</span>
                    </div>
                    <span className="text-[#e61713] font-bold">{app.avgPrice}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#e61713]/10 border border-[#e61713]/20 rounded-2xl text-xs text-[#6b7280] font-mono">
              ❌ Separate logins, broken Zapier webhooks, duplicate contacts, high monthly credit card charges, and feature paywalls.
            </div>
          </motion.div>

          {/* Right: On.Bingo Solution */}
          <motion.div
            {...sectionReveal}
            style={GPU_ACCELERATION}
            whileHover={shouldReduceMotion ? {} : { scale: 1.01, boxShadow: "0 25px 50px -10px rgba(5, 53, 230, 0.15)" }}
            transition={TRANSITION_PRESETS.springSmooth}
            className="bg-white p-8 rounded-3xl border-l-[6px] border-l-[#74db24] border border-[#e5e7eb] shadow-premium-xl space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4 mb-6">
                <div className="font-display font-bold text-xl text-[#0535e6] flex items-center gap-2">
                  <Check size={22} className="text-[#74db24]" /> On.Bingo Business OS
                </div>
                <span className="font-mono text-xs text-[#111827] font-extrabold bg-[#74db24] px-3.5 py-1 rounded-full shadow-lime-glow">
                  $0 Forever
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {["1 Unified Workspace", "Unlimited Users & Contacts", "Native AI Automation"].map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    className="bg-[#fafafc] p-4 rounded-2xl border-l-4 border-l-[#74db24] border border-[#e5e7eb] flex items-center justify-between shadow-xs transition-colors"
                  >
                    <span className="text-[#111827] font-bold">{feature}</span>
                    <span className="text-[#74db24] font-bold flex items-center gap-1">
                      <ShieldCheck size={14} /> Included
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#74db24]/15 border border-[#74db24]/40 rounded-2xl text-xs text-[#111827] font-mono font-bold flex items-center gap-2">
              <span>🚀</span>
              <span>100% Free Forever. No trial. No expiry. No credit card required.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
