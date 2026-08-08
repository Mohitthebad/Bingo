import { TRANSITION_PRESETS } from "./tokens";

/* ---------------------------------------------------------------------- */
/*  Hover & Micro-Interaction Animation Presets                          */
/* ---------------------------------------------------------------------- */

export const hoverElevate = {
  whileHover: { 
    scale: 1.02, 
    y: -4, 
    transition: TRANSITION_PRESETS.springSmooth 
  },
  whileTap: { scale: 0.99 }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.04, 
    transition: TRANSITION_PRESETS.springSnappy 
  },
  whileTap: { scale: 0.96 }
};

export const buttonTap = {
  whileHover: { 
    scale: 1.03, 
    y: -1.5, 
    transition: TRANSITION_PRESETS.springSnappy 
  },
  whileTap: { scale: 0.97, y: 0 }
};

export const cardHover3D = {
  whileHover: { 
    scale: 1.025, 
    y: -5,
    rotateX: 1.5,
    rotateY: -1.5,
    transition: TRANSITION_PRESETS.springSmooth 
  },
  whileTap: { scale: 0.98 }
};
