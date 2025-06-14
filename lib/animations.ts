export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.6, 
    ease: 'easeOut' 
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.6, 
    ease: 'easeOut' 
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.6, 
    ease: 'easeOut' 
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.5, 
    ease: 'easeOut' 
  }
};

export const slideInUp = {
  initial: { 
    y: '100%' 
  },
  animate: { 
    y: 0 
  },
  exit: { 
    y: '100%' 
  },
  transition: { 
    duration: 0.3, 
    ease: 'easeInOut' 
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05 
  },
  whileTap: { 
    scale: 0.95 
  },
  transition: { 
    duration: 0.2 
  }
};

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const rotateIn = {
  initial: { 
    opacity: 0, 
    rotate: -180 
  },
  animate: { 
    opacity: 1, 
    rotate: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: 'easeOut' 
  }
};

export const bounceIn = {
  initial: { 
    opacity: 0, 
    scale: 0.3 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.6, 
    ease: 'easeOut',
    type: 'spring',
    damping: 10,
    stiffness: 100
  }
};