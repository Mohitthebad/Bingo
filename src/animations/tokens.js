/* ---------------------------------------------------------------------- */
/*  Shared Duration Tokens, Easing Curves & Transition Presets           */
/* ---------------------------------------------------------------------- */

/**
 * Standardized animation duration tokens (in seconds)
 */
export const DURATIONS = {
  instant: 0.1,
  fast: 0.18,
  normal: 0.35,
  slow: 0.55,
  deliberate: 0.8,
  levitate: 4.5
};

/**
 * Standardized cubic-bezier easing curves
 */
export const EASINGS = {
  easeSmooth: [0.22, 1, 0.36, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  sharp: [0.4, 0, 0.2, 1]
};

/**
 * Spring physics transition presets for Framer Motion
 */
export const TRANSITION_PRESETS = {
  springBouncy: {
    type: "spring",
    stiffness: 380,
    damping: 20
  },
  springSmooth: {
    type: "spring",
    stiffness: 260,
    damping: 25
  },
  springSnappy: {
    type: "spring",
    stiffness: 400,
    damping: 30
  },
  springGentle: {
    type: "spring",
    stiffness: 180,
    damping: 22
  },
  easeSmooth: {
    duration: DURATIONS.normal,
    ease: EASINGS.easeSmooth
  },
  easeFast: {
    duration: DURATIONS.fast,
    ease: "easeOut"
  }
};

/**
 * GPU Hardware acceleration utility styles
 */
export const GPU_ACCELERATION = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden"
};
