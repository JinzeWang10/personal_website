import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', updateSize);
    };
  }, [x, y]);

  const normalizedX = useTransform(x, [0, windowSize.w], [0, 1]);
  const normalizedY = useTransform(y, [0, windowSize.h], [0, 1]);

  return { x, y, normalizedX, normalizedY, windowSize };
}
