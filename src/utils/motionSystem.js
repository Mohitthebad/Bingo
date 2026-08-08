import { useReducedMotion } from "framer-motion";

/* ---------------------------------------------------------------------- */
/*  Framer Motion Physics & Transition Tokens                             */
/* ---------------------------------------------------------------------- */

export const TRANSITIONS = {
  springBouncy: { type: "spring", stiffness: 380, damping: 20 },
  springSmooth: { type: "spring", stiffness: 260, damping: 25 },
  springSnappy: { type: "spring", stiffness: 400, damping: 30 },
  easeSmooth: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  easeFast: { duration: 0.18, ease: "easeOut" }
};

/* ---------------------------------------------------------------------- */
/*  Reduced Motion Helper Hook                                            */
/* ---------------------------------------------------------------------- */

export function useAccessibleMotion() {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    shouldReduceMotion,
    getVariant: (standardVariant, fallbackFade = { opacity: 0 }, fallbackActive = { opacity: 1 }) => {
      if (shouldReduceMotion) {
        return {
          initial: fallbackFade,
          animate: fallbackActive,
          exit: fallbackFade,
          transition: { duration: 0.15 }
        };
      }
      return standardVariant;
    }
  };
}

/* ---------------------------------------------------------------------- */
/*  1. Page Transition Variants                                           */
/* ---------------------------------------------------------------------- */

export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: TRANSITIONS.easeSmooth },
  exit: { opacity: 0, y: -12, transition: TRANSITIONS.easeFast }
};

/* ---------------------------------------------------------------------- */
/*  2. Scroll Reveal Variants                                             */
/* ---------------------------------------------------------------------- */

export const scrollRevealVariants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: TRANSITIONS.easeSmooth
};

/* ---------------------------------------------------------------------- */
/*  3. Staggered Container & Card Item Variants                            */
/* ---------------------------------------------------------------------- */

export const staggerContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04
    }
  }
};

export const staggerItemVariants = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: TRANSITIONS.springSmooth
  }
};

/* ---------------------------------------------------------------------- */
/*  4. Hover Effects & Button Micro-Interactions                           */
/* ---------------------------------------------------------------------- */

export const buttonMicroInteractions = {
  whileHover: { scale: 1.03, y: -1.5 },
  whileTap: { scale: 0.97, y: 0 },
  transition: TRANSITIONS.springSnappy
};

export const cardHoverInteractions = {
  whileHover: { 
    scale: 1.02, 
    y: -3,
    transition: TRANSITIONS.springSmooth 
  },
  whileTap: { scale: 0.99 }
};

/* ---------------------------------------------------------------------- */
/*  5. Modal & Backdrop Variants                                          */
/* ---------------------------------------------------------------------- */

export const modalBackdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

export const modalContentVariants = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0, transition: TRANSITIONS.springBouncy },
  exit: { opacity: 0, scale: 0.94, y: 10, transition: TRANSITIONS.easeFast }
};

/* ---------------------------------------------------------------------- */
/*  6. Skeleton & Loading Variants                                        */
/* ---------------------------------------------------------------------- */

export const skeletonPulseVariants = {
  animate: {
    opacity: [0.35, 0.75, 0.35],
    transition: {
      repeat: Infinity,
      duration: 1.4,
      ease: "easeInOut"
    }
  }
};

/* ---------------------------------------------------------------------- */
/*  7. Toast Notification Variants                                        */
/* ---------------------------------------------------------------------- */

export const toastVariants = {
  initial: { opacity: 0, y: -24, scale: 0.92 },
  animate: { opacity: 1, y: 0, scale: 1, transition: TRANSITIONS.springSnappy },
  exit: { opacity: 0, y: -16, scale: 0.95, transition: TRANSITIONS.easeFast }
};

/* ---------------------------------------------------------------------- */
/*  60fps Hardware Acceleration Utility Style                            */
/* ---------------------------------------------------------------------- */

export const gpuAccelerationStyle = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden"
};
