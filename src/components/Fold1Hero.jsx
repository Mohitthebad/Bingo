import React from "react";
import { ArrowRight, Play, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  buttonTap, 
  GPU_ACCELERATION, 
  EASINGS 
} from "../animations";
import Card3DTilt from "./Card3DTilt";

export default function Fold1Hero({ onNotify }) {
  const shouldReduceMotion = useReducedMotion();

  const headlineVariant = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.3 } } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASINGS.easeSmooth } } };

  const subheadlineVariant = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.3, delay: 0.15 } } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25, ease: EASINGS.easeSmooth } } };

  const ctaContainerVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0.2 : 0.45
      }
    }
  };

  const ctaItemVariant = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  const mockupScaleVariant = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } } }
    : { initial: { opacity: 0, scale: 0.95, y: 15 }, animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: EASINGS.easeSmooth } } };

  const continuousFloatAnimation = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [0, -10, 0],
          transition: {
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity
          }
        }
      };

  return (
    <section className="bg-gradient-to-b from-[#1E3A8A] via-[#1E293B] to-[#1E3A8A] text-white pt-16 pb-28 px-6 relative overflow-hidden">
      {/* Dynamic Background Radial Pattern & Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3B82F6]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#1E293B] z-20" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-[1.5px] bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#F59E0B] animate-border-glow rounded-full mb-6 inline-block"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-[#1E3A8A] text-[#10B981] px-4.5 py-2 rounded-full backdrop-blur-md">
              <Sparkles size={15} className="text-[#F59E0B] animate-pulse" /> Changing how you do Marketing &amp; Sales forever!
            </div>
          </motion.div>

          <motion.h1
            {...headlineVariant}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.06] text-white mb-6"
          >
            Stop Paying For <br />
            <span className="relative inline-block text-[#10B981]">
              Business Software.
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#10B981] rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            {...subheadlineVariant}
            className="font-body text-white/95 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Everything your business needs—CRM, Pipelines, Funnels, Email, SMS, WhatsApp, Calendars &amp; AI Automation—inside one unified operating system. <strong className="text-[#10B981] font-extrabold underline decoration-wavy">100% Free Forever.</strong>
          </motion.p>

          <motion.div
            variants={ctaContainerVariant}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              variants={ctaItemVariant}
              {...buttonTap}
              href="#join"
              className="bg-[#10B981] text-white font-display font-extrabold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center gap-2 shadow-lg cursor-pointer border border-[#10B981]"
            >
              Get Started Free <ArrowRight size={18} />
            </motion.a>

            <motion.button
              variants={ctaItemVariant}
              {...buttonTap}
              onClick={() => onNotify("🎥 Live Product Demo Video Loaded!")}
              className="bg-white/10 text-white font-display font-bold px-7 py-4 rounded-2xl text-sm uppercase tracking-wider border border-white/25 hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Play size={16} className="text-[#F59E0B] fill-[#F59E0B]" /> Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="flex items-center gap-6 pt-6 border-t border-white/20 text-xs text-white/90 font-mono flex-wrap"
          >
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#10B981]" /> No Credit Card
            </span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#10B981]" /> Forever Free
            </span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#10B981]" /> 2 Minute Setup
            </span>
          </motion.div>
        </div>

        {/* Right Column: Floating 3D Tilt Mockup Card */}
        <motion.div
          {...mockupScaleVariant}
          style={GPU_ACCELERATION}
          className="relative"
        >
          <Card3DTilt tiltMax={16}>
            <motion.div
              {...continuousFloatAnimation}
              className="bg-white rounded-3xl p-6 border-[4px] border-[#E2E8F0] shadow-2xl text-[#0F172A] space-y-4 preserve-3d"
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-mono text-[11px] text-[#64748B]">app.on.bingo / dashboard</span>
                </div>
                <span className="font-mono text-[10px] bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] px-3 py-1 rounded-full font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" /> System Live
                </span>
              </div>

              {/* Metrics Row inside Card */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] text-center shadow-xs">
                  <div className="text-[10px] text-[#64748B] uppercase font-mono font-medium">Monthly Savings</div>
                  <div className="font-display font-black text-xl text-[#10B981] mt-0.5">$480.00</div>
                </div>

                <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] text-center shadow-xs">
                  <div className="text-[10px] text-[#64748B] uppercase font-mono font-medium">Active Leads</div>
                  <div className="font-display font-black text-xl text-[#2563EB] mt-0.5">14,290</div>
                </div>

                <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] text-center shadow-xs">
                  <div className="text-[10px] text-[#64748B] uppercase font-mono font-medium">Conversion</div>
                  <div className="font-display font-black text-xl text-[#D97706] mt-0.5">24.8%</div>
                </div>
              </div>

              {/* Mini Pipeline Kanban Preview */}
              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0] space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#0F172A]">
                  <span className="flex items-center gap-1.5"><TrendingUp size={14} className="text-[#2563EB]" /> Deal Pipeline Automation</span>
                  <span className="text-[#10B981]">100% Free</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] text-[10px] font-mono shadow-xs">
                    <div className="text-[#2563EB] font-bold">New Prospect</div>
                    <div className="text-[#0F172A] mt-1 font-semibold">Acme Corp</div>
                    <div className="text-[#10B981] font-bold">$120,000</div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] text-[10px] font-mono shadow-xs">
                    <div className="text-[#D97706] font-bold">Proposal Sent</div>
                    <div className="text-[#0F172A] mt-1 font-semibold">OpenAI Lab</div>
                    <div className="text-[#10B981] font-bold">$450,000</div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] text-[10px] font-mono shadow-xs">
                    <div className="text-[#10B981] font-bold">Closed Won</div>
                    <div className="text-[#0F172A] mt-1 font-semibold">Acme Cloud</div>
                    <div className="text-[#10B981] font-bold">$280,000</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </Card3DTilt>
        </motion.div>

      </div>
    </section>
  );
}
