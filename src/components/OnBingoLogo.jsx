import React from "react";
import logoMarkImg from "../assets/logo-mark.png";

export default function OnBingoLogo({ className = "", lightTheme = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact User Uploaded Logo Mark Image */}
      <img
        src={logoMarkImg}
        alt="On.Bingo Logo Mark"
        className="h-9 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform duration-300"
      />

      {/* Brand Text + White Rectangular Sub-Badge Column */}
      <div className="flex flex-col items-start justify-center">
        <span className={`font-display font-extrabold text-2xl tracking-tight leading-none ${
          lightTheme ? "text-[#111827]" : "text-white"
        }`}>
          on.bingo
        </span>
        <div className="mt-1 bg-white text-[#111827] px-2.5 py-0.5 font-mono text-[9px] tracking-[0.24em] font-extrabold uppercase shadow-sm rounded-[2px] leading-tight">
          THE AI CRM
        </div>
      </div>
    </div>
  );
}
