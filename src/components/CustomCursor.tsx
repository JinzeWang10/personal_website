import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Dot follows immediately
  const dotX = useSpring(cursorX, { damping: 50, stiffness: 1000, mass: 0.1 });
  const dotY = useSpring(cursorY, { damping: 50, stiffness: 1000, mass: 0.1 });

  // Ring lags behind with softer spring
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 200, mass: 0.2 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 200, mass: 0.2 });

  useEffect(() => {
    // Detect touch device
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY, opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className={`cursor-ring ${isHovering ? 'is-hovering' : ''}`}
        style={{ left: ringX, top: ringY, opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
