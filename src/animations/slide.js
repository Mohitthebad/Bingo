import { TRANSITION_PRESETS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Slide Animation Variants                                              */
/* ---------------------------------------------------------------------- */

export const slideInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const slideInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: "-100%" },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    opacity: 0, 
    x: "-100%", 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const slideInRight = {
  initial: { opacity: 0, x: "100%" },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    opacity: 0, 
    x: "100%", 
    transition: TRANSITION_PRESETS.easeFast 
  }
};

export const drawerSlide = {
  initial: { x: "100%" },
  animate: { 
    x: 0, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  exit: { 
    x: "100%", 
    transition: TRANSITION_PRESETS.easeFast 
  }
};
