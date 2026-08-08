import React, { useState } from "react";
import { Zap, DollarSign, Calculator } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { COST_COMPARISON_MATRIX } from "../data/onBingoData";
import { sectionReveal, buttonTap, GPU_ACCELERATION, TRANSITION_PRESETS } from "../animations";

export default function Fold3SavingsCalculator() {
  const shouldReduceMotion = useReducedMotion();
  const [teamSize, setTeamSize] = useState(5);

  const baseMonthlyTotal = COST_COMPARISON_MATRIX.reduce((sum, item) => sum + item.standardCost, 0);
  const totalMonthlyCost = baseMonthlyTotal * Math.max(1, Math.floor(teamSize / 2));
  const yearlySavings = totalMonthlyCost * 12;

  return (
    <section id="calculator" className="py-24 bg-[#0535e6] text-white relative overflow-hidden">
      {/* Top Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div {...sectionReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/15 text-[#74db24] border border-white/20 px-4 py-1.5 rounded-full mb-3 font-bold">
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
          <motion.div
            {...sectionReveal}
            style={GPU_ACCELERATION}
            className="lg:col-span-7 bg-white text-[#111827] rounded-3xl p-6 md:p-8 border-[3px] border-[#e5e7eb] shadow-premium-xl"
          >
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4 mb-4 font-mono text-xs text-[#6b7280] uppercase font-bold">
              <span>Software Module</span>
              <div className="flex gap-8">
                <span>Traditional SaaS</span>
                <span className="text-[#0535e6]">On.Bingo</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {COST_COMPARISON_MATRIX.map((row) => (
                <motion.div
                  key={row.tool}
                  whileHover={shouldReduceMotion ? {} : { x: 4, borderColor: "#74db24" }}
                  transition={TRANSITION_PRESETS.springSmooth}
                  style={GPU_ACCELERATION}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fafafc] border-l-4 border-l-[#74db24] border border-[#e5e7eb] transition-colors shadow-xs"
                >
                  <span className="text-[#111827] font-bold">{row.tool}</span>
                  <div className="flex items-center gap-12 font-bold">
                    <span className="text-[#e61713]">${row.standardCost}/mo</span>
                    <span className="text-[#74db24] font-extrabold">$0 FREE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calculator Box */}
          <motion.div
            {...sectionReveal}
            style={GPU_ACCELERATION}
            className="lg:col-span-5 bg-white text-[#111827] p-8 rounded-3xl border-[3px] border-[#e5e7eb] shadow-premium-xl space-y-6"
          >
            <h3 className="font-display font-bold text-xl text-[#111827] flex items-center gap-2">
              <DollarSign className="text-[#74db24]" /> Interactive Savings Calculator
            </h3>

            {/* Slider */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between text-[#6b7280]">
                <span>Team Size:</span>
                <span className="text-[#111827] font-bold text-sm">{teamSize} Users</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#0535e6] bg-[#fafafc] h-2.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Calculated Results */}
            <div className="bg-[#fafafc] p-5 rounded-2xl border-l-4 border-l-[#74db24] border border-[#e5e7eb] space-y-3 text-center">
              <div className="font-mono text-xs text-[#6b7280] uppercase font-semibold">Your Annual Cash Saved</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={yearlySavings}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-display font-black text-4xl sm:text-5xl text-[#0535e6]"
                >
                  ${yearlySavings.toLocaleString()}/yr
                </motion.div>
              </AnimatePresence>

              <p className="text-[11px] font-mono text-[#74db24] font-bold">
                Reinvest this cash directly into marketing, hiring, and business growth.
              </p>
            </div>

            <motion.a
              {...buttonTap}
              style={GPU_ACCELERATION}
              href="#join"
              className="w-full bg-[#74db24] text-[#111827] font-display font-extrabold py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-[#0535e6] hover:text-white transition-colors text-center flex items-center justify-center gap-2 shadow-lime-glow cursor-pointer border border-[#74db24]"
            >
              Claim Your $0 Business OS <Zap size={14} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
