import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './styles.css';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  className?: string;
  scale?: number;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from: from,
  to: from + 360,
  ease: 'linear',
  duration: duration,
  type: 'tween',
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  className = '',
  scale = 1,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: scale,
      transition: getTransition(spinDuration, currentRotation),
    });
  }, [spinDuration, controls, text]);

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`circular-text ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
