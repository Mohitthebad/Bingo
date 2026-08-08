import { TRANSITION_PRESETS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Scale Animation Variants                                              */
/* ---------------------------------------------------------------------- */

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: TRANSITION_PRESETS.springBouncy 
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const popIn = {
  initial: { opacity: 0, scale: 0.8, y: 15 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.springSnappy 
  },
  exit: { 
    opacity: 0, 
    scale: 0.85, 
    y: 10, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};
