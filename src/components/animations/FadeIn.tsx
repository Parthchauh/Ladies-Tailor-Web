import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants } from './variants';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up' }) => {
  return (
    <motion.div
      custom={direction}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{
        delay,
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;