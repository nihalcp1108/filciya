import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('.gallery-item')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', checkHoverable);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', checkHoverable);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#d4af37',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          transition: 'transform 0.05s ease-out'
        }}
      />
      {/* Smooth trailing ring */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#f3e5ab' : 'rgba(212, 175, 55, 0.4)',
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.08)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 34,
          height: 34,
          borderRadius: '50%',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate3d(${position.x - 17}px, ${position.y - 17}px, 0)`,
          transition: 'transform 0.14s ease-out'
        }}
      />
    </>
  );
}
