import { TRANSITION_PRESETS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Stagger Container & Card Item Animation Variants                      */
/* ---------------------------------------------------------------------- */

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: { opacity: 0 }
};

export const staggerFast = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02
    }
  },
  exit: { opacity: 0 }
};

export const staggerSlow = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08
    }
  },
  exit: { opacity: 0 }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { opacity: 0, y: 10, scale: 0.98 }
};
