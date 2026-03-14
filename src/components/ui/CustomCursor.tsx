'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Ne s'active que sur desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    // Détecter hover sur éléments interactifs
    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"]');
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', onHoverStart);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    // Animation fluide du follower
    const animateFollower = () => {
      followerRef.current.x += (position.x - followerRef.current.x) * 0.12;
      followerRef.current.y += (position.y - followerRef.current.y) * 0.12;
      setFollower({ ...followerRef.current });
      rafRef.current = requestAnimationFrame(animateFollower);
    };
    rafRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', onHoverStart);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Point central — suit exactement la souris */}
      <motion.div
        animate={{
          x:       position.x - 4,
          y:       position.y - 4,
          opacity: isVisible ? 1 : 0,
          scale:   isHovering ? 0 : 1,
        }}
        transition={{ duration: 0, ease: 'linear' }}
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          width:        '8px',
          height:       '8px',
          borderRadius: '50%',
          background:   'var(--accent-start)',
          pointerEvents: 'none',
          zIndex:       99999,
          mixBlendMode: 'difference',
        }}
      />

      {/* Cercle follower — suit avec délai */}
      <motion.div
        animate={{
          x:       follower.x - 20,
          y:       follower.y - 20,
          opacity: isVisible ? 1 : 0,
          scale:   isHovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.08, ease: 'linear' }}
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          width:        '40px',
          height:       '40px',
          borderRadius: '50%',
          border:       '1px solid var(--accent-start)',
          pointerEvents: 'none',
          zIndex:       99998,
          opacity:      0.5,
        }}
      />
    </>
  );
}
