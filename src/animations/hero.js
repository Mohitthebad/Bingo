import { TRANSITION_PRESETS, DURATIONS, EASINGS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Hero Section Specific Animation Variants                               */
/* ---------------------------------------------------------------------- */

export const heroFloatingLevitate = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: DURATIONS.levitate,
      ease: EASINGS.easeInOutCubic,
      repeat: Infinity
    }
  }
};

export const heroTitleStagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06
    }
  }
};

export const heroBadgePulse = {
  animate: {
    scale: [1, 1.04, 1],
    opacity: [0.9, 1, 0.9],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};
