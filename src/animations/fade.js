import { TRANSITION_PRESETS, DURATIONS, EASINGS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Fade Animation Variants                                               */
/* ---------------------------------------------------------------------- */

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: TRANSITION_PRESETS.easeSmooth 
  },
  exit: { 
    opacity: 0, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.easeSmooth 
  },
  exit: { 
    opacity: 0, 
    y: 12, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
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

export const fadeInLeft = {
  initial: { opacity: 0, x: -28 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: TRANSITION_PRESETS.easeSmooth 
  },
  exit: { 
    opacity: 0, 
    x: -14, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 28 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: TRANSITION_PRESETS.easeSmooth 
  },
  exit: { 
    opacity: 0, 
    x: 14, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};
