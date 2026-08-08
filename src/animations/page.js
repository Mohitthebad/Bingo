import { TRANSITION_PRESETS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Page, Toast & Viewport Scroll Reveal Variants                         */
/* ---------------------------------------------------------------------- */

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.easeSmooth 
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: TRANSITION_PRESETS.easeSmooth
};

export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.springBouncy 
  },
  exit: { 
    opacity: 0, 
    scale: 0.94, 
    y: 10, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const toastVariants = {
  initial: { opacity: 0, y: -24, scale: 0.92 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: TRANSITION_PRESETS.springSnappy 
  },
  exit: { 
    opacity: 0, 
    y: -16, 
    scale: 0.95, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};
