import React from "react";
import { ShieldCheck, Heart, ArrowUp } from "lucide-react";
import OnBingoLogo from "./OnBingoLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-white/15 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Top Multi-column Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <a href="#" className="inline-block cursor-pointer">
              <OnBingoLogo />
            </a>
            <p className="text-white/80 text-xs font-mono leading-relaxed">
              The world's first 100% free enterprise business operating system. Replacing software subscriptions forever.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-[10px] text-[#10B981] font-bold border border-white/15">
              <ShieldCheck size={12} /> 100% Free Forever Promise
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#chaos" className="hover:text-[#10B981] transition-colors">Software Chaos</a></li>
              <li><a href="#calculator" className="hover:text-[#10B981] transition-colors">Savings Matrix</a></li>
              <li><a href="#features" className="hover:text-[#10B981] transition-colors">Bento Features</a></li>
              <li><a href="#why-free" className="hover:text-[#10B981] transition-colors">Radical Transparency</a></li>
            </ul>
          </div>

          {/* Platform Capabilities */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider">OS Modules</h4>
            <ul className="space-y-2 text-white/80">
              <li><span className="text-[#10B981] font-bold">✓</span> AI CRM &amp; Pipelines</li>
              <li><span className="text-[#10B981] font-bold">✓</span> Drip Demos &amp; Funnels</li>
              <li><span className="text-[#10B981] font-bold">✓</span> Email &amp; SMS Broadcasts</li>
              <li><span className="text-[#10B981] font-bold">✓</span> Business Intelligence</li>
            </ul>
          </div>

          {/* Trust & Status */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider">Global Status</h4>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-[10px] text-[#10B981]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-bold">System Status: 99.99% Operational</span>
              </div>
              <p className="text-[10px] text-white/70">
                500,000+ Active Workspaces globally. Over $1.4B in deal pipelines managed.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/80 text-[11px]">
          <div className="flex items-center gap-1.5 font-bold">
            <span>Built with</span>
            <Heart size={13} className="text-[#DC2626] fill-[#DC2626]" />
            <span>for global entrepreneurs by On.Bingo. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-[#10B981] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-bold"
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
