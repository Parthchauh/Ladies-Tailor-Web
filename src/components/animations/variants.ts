import { Variants } from 'framer-motion';

export const fadeInVariants: Variants = {
  hidden: (direction: 'up' | 'down' | 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};