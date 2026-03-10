import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Main cursor spring
  const springConfig = { stiffness: 400, damping: 30 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Trailing ring spring (slower)
  const ringSpringConfig = { stiffness: 150, damping: 20 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
          {/* Outer Ring (Trailing) */}
          <motion.div
            className="absolute w-12 h-12 border border-primary/30 rounded-full"
            style={{
              x: ringX,
              y: ringY,
              translateX: '-50%',
              translateY: '-50%',
              scale: isHovering ? 1.5 : 1,
            }}
            animate={{
              opacity: isClicking ? 0.5 : 1,
              borderWidth: isHovering ? '1px' : '2px',
            }}
          />

          {/* Inner Circle (Main) */}
          <motion.div
            className="absolute w-4 h-4 bg-primary rounded-full mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              scale: isHovering ? 0.5 : 1,
            }}
            animate={{
              backgroundColor: isHovering ? 'var(--color-primary)' : 'var(--color-primary)',
              width: isClicking ? 12 : 16,
              height: isClicking ? 12 : 16,
            }}
          />

          {/* Hover Glow */}
          <motion.div
            className="absolute w-24 h-24 bg-primary/10 rounded-full blur-2xl"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              scale: isHovering ? 1.5 : 0,
            }}
            animate={{
              opacity: isHovering ? 1 : 0,
            }}
          />

          {/* Click Ripple (Visual only) */}
          <motion.div
            className="absolute w-4 h-4 border-2 border-primary rounded-full"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={isClicking ? {
              scale: [1, 4],
              opacity: [0.5, 0],
            } : { scale: 1, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
