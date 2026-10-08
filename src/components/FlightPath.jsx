import React from 'react';
import { motion } from 'motion/react';

export default function FlightPath() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <defs>
          <linearGradient id="flightPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.05" />
            <stop offset="40%" stopColor="#d4af37" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#7099c2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary Flight Route Bezier Curve */}
        <motion.path
          d="M -100,580 C 280,680 420,380 720,320 C 1020,260 1180,180 1550,140"
          stroke="url(#flightPathGrad)"
          strokeWidth="1.75"
          strokeDasharray="6 8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />

        {/* Secondary subtle airway trajectory */}
        <motion.path
          d="M 50,750 C 400,680 700,540 1000,420 C 1250,320 1350,220 1520,200"
          stroke="rgba(212, 175, 55, 0.12)"
          strokeWidth="1"
          strokeDasharray="4 12"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: 'easeOut', delay: 1 }}
        />

        {/* Waypoint 1: Waypoint at (720, 320) */}
        <motion.circle
          cx="720"
          cy="320"
          r="4"
          fill="#d4af37"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            scale: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' },
            opacity: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' },
            delay: 1.8
          }}
          filter="url(#goldGlow)"
        />
        <motion.circle
          cx="720"
          cy="320"
          r="12"
          stroke="rgba(212, 175, 55, 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 1.8 }}
        />

        {/* Subtle navigation coordinate label */}
        <motion.text
          x="735"
          y="315"
          fill="rgba(212, 175, 55, 0.6)"
          fontSize="10"
          fontFamily="Space Grotesk, monospace"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          WP · 10°N 75°E
        </motion.text>
      </svg>
    </div>
  );
}
