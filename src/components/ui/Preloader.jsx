import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOutText, setFadeOutText] = useState(false);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Show empty black screen first
    const showTextTimer = setTimeout(() => setShowText(true), 500);
    
    // Fade out just the text before the background
    const fadeOutTextTimer = setTimeout(() => setFadeOutText(true), 2400);

    // Trigger columns to fall down right after text starts fading out
    const startExitTimer = setTimeout(() => setStartExit(true), 2600);

    // Completely unmount preloader container after columns finish falling
    const completeTimer = setTimeout(() => onComplete(), 4200);

    return () => {
      clearTimeout(showTextTimer);
      clearTimeout(fadeOutTextTimer);
      clearTimeout(startExitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
    exit: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    }
  };

  const letterVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      y: '100%',
      transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const text = 'Loading...';
  const NUM_COLUMNS = 10;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Background Columns Layer */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: NUM_COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-[#000000]"
            initial={{ y: 0 }}
            animate={startExit ? { y: '100%' } : { y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.77, 0, 0.175, 1], // Custom cubic-bezier
              delay: i * 0.05, // Faster stagger for 10 columns
            }}
          />
        ))}
      </div>

      {/* Text Layer (Centered above columns) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <AnimatePresence>
          {showText && !fadeOutText && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white font-outfit tracking-wider"
            >
              {text.split('').map((char, index) => (
                <span key={index} className="overflow-hidden inline-flex">
                  <motion.span variants={letterVariants}>
                     {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Preloader;
