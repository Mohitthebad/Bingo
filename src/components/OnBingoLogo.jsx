import React from "react";
import logoMarkImg from "../assets/logo-mark.png";

export default function OnBingoLogo({ className = "", lightTheme = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Infinity Ribbon Logo Mark Image */}
      <img
        src={logoMarkImg}
        alt="On.Bingo 3D Infinity Logo"
        className="h-10 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform duration-300"
      />

      {/* Brand Text + Sub-Badge Column */}
      <div className="flex flex-col items-start justify-center">
        <span className={`font-display font-black text-2xl tracking-tight leading-none ${
          lightTheme ? "text-[#0F172A]" : "text-white"
        }`}>
          on.bingo
        </span>
        <div className="mt-1 bg-white text-[#0F172A] px-2.5 py-0.5 font-mono text-[9px] tracking-[0.24em] font-extrabold uppercase shadow-xs rounded-[2px] border border-[#E2E8F0] leading-tight">
          THE AI CRM
        </div>
      </div>
    </div>
  );
}
