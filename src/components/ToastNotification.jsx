import React from "react";
import { motion } from "framer-motion";
import { toastVariants, GPU_ACCELERATION } from "../animations";

export default function ToastNotification({ message, onClose }) {
  if (!message) return null;

  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={GPU_ACCELERATION}
      className="fixed top-6 right-6 z-50 bg-[#0535e6] border-2 border-[#74db24] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-mono text-xs font-semibold backdrop-blur-md"
    >
      <span className="text-base">🚀</span>
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-white/80 hover:text-white cursor-pointer"
        aria-label="Close notification"
      >
        ✕
      </button>
    </motion.div>
  );
}
