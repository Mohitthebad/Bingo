import React, { useState } from "react";
import { Zap, DollarSign, Calculator } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { COST_COMPARISON_MATRIX } from "../data/onBingoData";
import { sectionReveal, buttonTap, GPU_ACCELERATION, TRANSITION_PRESETS } from "../animations";
import Card3DTilt from "./Card3DTilt";

export default function Fold3SavingsCalculator() {
  const shouldReduceMotion = useReducedMotion();
  const [teamSize, setTeamSize] = useState(5);

  const baseMonthlyTotal = COST_COMPARISON_MATRIX.reduce((sum, item) => sum + item.standardCost, 0);
  const totalMonthlyCost = baseMonthlyTotal * Math.max(1, Math.floor(teamSize / 2));
  const yearlySavings = totalMonthlyCost * 12;

  return (
    <section id="calculator" className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#F8FAFC] z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#10B981] border border-white/20 px-4 py-1.5 rounded-full mb-3 font-bold">
            <Calculator size={14} /> Cost Justification Matrix
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
            How Much Are You Paying Every Month?
          </h2>
          <p className="font-body text-white/90 text-lg mt-4 leading-relaxed">
            Calculate how much capital your business will keep by switching from traditional SaaS software subscriptions to On.Bingo.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Table */}
          <Card3DTilt className="lg:col-span-7" tiltMax={8}>
            <motion.div
              {...sectionReveal}
              style={GPU_ACCELERATION}
              className="bg-white text-[#0F172A] rounded-3xl p-6 md:p-8 border-[3px] border-[#E2E8F0] shadow-2xl preserve-3d"
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-4 font-mono text-xs text-[#64748B] uppercase font-bold">
                <span>Software Module</span>
                <div className="flex gap-8">
                  <span>Traditional SaaS</span>
                  <span className="text-[#2563EB]">On.Bingo</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {COST_COMPARISON_MATRIX.map((row) => (
                  <motion.div
                    key={row.tool}
                    whileHover={shouldReduceMotion ? {} : { x: 4, borderColor: "#10B981" }}
                    transition={TRANSITION_PRESETS.springSmooth}
                    style={GPU_ACCELERATION}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border-l-4 border-l-[#10B981] border border-[#E2E8F0] transition-colors shadow-xs"
                  >
                    <span className="text-[#0F172A] font-bold">{row.tool}</span>
                    <div className="flex items-center gap-12 font-bold">
                      <span className="text-[#DC2626]">${row.standardCost}/mo</span>
                      <span className="text-[#10B981] font-extrabold">$0 FREE</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card3DTilt>

          {/* Calculator Box */}
          <Card3DTilt className="lg:col-span-5" tiltMax={8}>
            <motion.div
              {...sectionReveal}
              style={GPU_ACCELERATION}
              className="bg-white text-[#0F172A] p-8 rounded-3xl border-[3px] border-[#E2E8F0] shadow-2xl space-y-6 preserve-3d"
            >
              <h3 className="font-display font-bold text-xl text-[#0F172A] flex items-center gap-2">
                <DollarSign className="text-[#10B981]" /> Interactive Savings Calculator
              </h3>

              {/* Slider */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[#64748B]">
                  <span>Team Size:</span>
                  <span className="text-[#2563EB] font-bold text-sm">{teamSize} Users</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#2563EB] bg-[#F8FAFC] h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Calculated Results */}
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border-l-4 border-l-[#10B981] border border-[#E2E8F0] space-y-3 text-center">
                <div className="font-mono text-xs text-[#64748B] uppercase font-semibold">Your Annual Cash Saved</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearlySavings}
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="font-display font-black text-4xl sm:text-5xl text-[#10B981]"
                  >
                    ${yearlySavings.toLocaleString()}/yr
                  </motion.div>
                </AnimatePresence>
                <p className="text-[11px] font-mono text-[#047857] font-bold">
                  Reinvest this cash directly into marketing, hiring, and business growth.
                </p>
              </div>

              <motion.a
                {...buttonTap}
                style={GPU_ACCELERATION}
                href="#join"
                className="w-full bg-[#10B981] text-white font-display font-extrabold py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer border border-[#10B981]"
              >
                Claim Your $0 Business OS <Zap size={14} />
              </motion.a>
            </motion.div>
          </Card3DTilt>

        </div>
      </div>
    </section>
  );
}
