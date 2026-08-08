import React from "react";
import OnBingoLogo from "./OnBingoLogo";

export default function Footer() {
  return (
    <footer className="bg-[#03269c] text-white py-12 border-t border-white/20 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <a href="#">
            <OnBingoLogo />
          </a>
          <span className="text-white/80 block text-[10px] uppercase mt-2 font-mono">The World's Free Business Operating System</span>
        </div>

        <div className="text-white/80 font-mono">
          © {new Date().getFullYear()} On.Bingo Operating System. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-white/80 font-mono">
          <a href="#chaos" className="hover:text-white">Problem</a>
          <a href="#calculator" className="hover:text-white">Calculator</a>
          <a href="#features" className="hover:text-white">OS Capabilities</a>
          <a href="#why-free" className="hover:text-[#74db24] font-bold">Why Is It Free?</a>
        </div>
      </div>
    </footer>
  );
}
