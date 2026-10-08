import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2.5px',
        background: 'linear-gradient(90deg, #aa8420 0%, #d4af37 50%, #f5e098 100%)',
        transformOrigin: '0%',
        zIndex: 1001,
        boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
      }}
    />
  );
}
