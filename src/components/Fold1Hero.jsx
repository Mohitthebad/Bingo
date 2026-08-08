import React from "react";
import { ArrowRight, Play, CheckCircle2, Sparkles, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  buttonTap, 
  GPU_ACCELERATION, 
  EASINGS 
} from "../animations";

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
    <section className="bg-gradient-to-b from-[#0535e6] via-[#03269c] to-[#0535e6] text-white pt-16 pb-28 px-6 relative overflow-hidden">
      {/* Dynamic Background Radial Pattern & Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00C4FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#74db24]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Triangular Indicator Notch */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#03269c] z-20" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-white/15 text-[#74db24] border border-white/20 px-4.5 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm"
          >
            <Sparkles size={15} className="text-[#fec40f]" /> Changing how you do Marketing &amp; Sales forever!
          </motion.div>

          <motion.h1
            {...headlineVariant}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.06] text-white mb-6"
          >
            Stop Paying For <br />
            <span className="relative inline-block text-[#74db24]">
              Business Software.
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#74db24] rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            {...subheadlineVariant}
            className="font-body text-white/95 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Everything your business needs—CRM, Pipelines, Funnels, Email, SMS, WhatsApp, Calendars &amp; AI Automation—inside one unified operating system. <strong className="text-[#74db24] font-extrabold underline decoration-wavy">100% Free Forever.</strong>
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
              className="bg-[#74db24] text-[#111827] font-display font-extrabold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider hover:bg-white hover:text-[#0535e6] transition-all flex items-center gap-2 shadow-lime-glow cursor-pointer border border-[#74db24]"
            >
              Get Started Free <ArrowRight size={18} />
            </motion.a>

            <motion.button
              variants={ctaItemVariant}
              {...buttonTap}
              onClick={() => onNotify("🎥 Live Product Demo Video Loaded!")}
              className="bg-white/10 text-white font-display font-bold px-7 py-4 rounded-2xl text-sm uppercase tracking-wider border border-white/25 hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Play size={16} className="text-[#fec40f] fill-[#fec40f]" /> Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="flex items-center gap-6 pt-6 border-t border-white/20 text-xs text-white/90 font-mono flex-wrap"
          >
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#74db24]" /> No Credit Card
            </span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#74db24]" /> Forever Free
            </span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 size={16} className="text-[#74db24]" /> 2 Minute Setup
            </span>
          </motion.div>
        </div>

        {/* Right Column: Floating Mockup Card */}
        <motion.div
          {...mockupScaleVariant}
          style={GPU_ACCELERATION}
          className="relative"
        >
          <motion.div
            {...continuousFloatAnimation}
            className="bg-white rounded-3xl p-6 border-[4px] border-[#e5e7eb] shadow-premium-xl text-[#111827] space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#e61713]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#fec40f]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#74db24]" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] bg-[#fafafc] px-3.5 py-1 rounded-full border border-[#e5e7eb]">
                <span className="w-2 h-2 rounded-full bg-[#74db24] animate-ping" />
                <span className="text-[#0535e6] font-bold">On.Bingo Business OS v4.0</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                className="bg-[#fafafc] p-4 rounded-2xl border-l-4 border-l-[#74db24] border border-[#e5e7eb] shadow-xs"
              >
                <div className="text-[10px] text-[#6b7280] uppercase font-bold flex items-center justify-between">
                  <span>Monthly ARR</span>
                  <TrendingUp size={12} className="text-[#74db24]" />
                </div>
                <div className="font-display font-extrabold text-2xl text-[#0535e6] mt-1">$142,850</div>
                <span className="text-[10px] text-[#74db24] font-bold">↑ +28.4% vs last mo</span>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                className="bg-[#fafafc] p-4 rounded-2xl border-l-4 border-l-[#0535e6] border border-[#e5e7eb] shadow-xs"
              >
                <div className="text-[10px] text-[#6b7280] uppercase font-bold flex items-center justify-between">
                  <span>Active Pipeline</span>
                  <Users size={12} className="text-[#0535e6]" />
                </div>
                <div className="font-display font-extrabold text-2xl text-[#111827] mt-1">1,240 Leads</div>
                <span className="text-[10px] text-[#0535e6] font-bold">⚡ 98.4% AI Match</span>
              </motion.div>
            </div>

            <div className="bg-[#fafafc] p-4 rounded-2xl border border-[#e5e7eb] space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#111827] font-bold">Live Lead Pipeline</span>
                <span className="text-[#74db24] font-bold">$0 Monthly Software Cost</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2.5 rounded-xl border border-[#e5e7eb] text-[10px] font-mono shadow-xs">
                  <div className="text-[#0535e6] font-bold">New Lead</div>
                  <div className="text-[#111827] mt-1 font-semibold">Stripe Partner</div>
                  <div className="text-[#74db24] font-bold">$120,000</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-[#e5e7eb] text-[10px] font-mono shadow-xs">
                  <div className="text-[#fec40f] font-bold">Proposal Sent</div>
                  <div className="text-[#111827] mt-1 font-semibold">OpenAI Lab</div>
                  <div className="text-[#74db24] font-bold">$450,000</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-[#e5e7eb] text-[10px] font-mono shadow-xs">
                  <div className="text-[#74db24] font-bold">Closed Won</div>
                  <div className="text-[#111827] mt-1 font-semibold">Acme Cloud</div>
                  <div className="text-[#74db24] font-bold">$280,000</div>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
