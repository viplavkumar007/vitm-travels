import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../utils';

// Reusable animated section heading (eyebrow + title + optional subtitle)
export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/80' : 'text-charcoal-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// Lazy-loaded image with a soft skeleton shimmer until loaded
export function LazyImage({ src, alt, className = '', imgClassName = '' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,#ece4d2_8%,#f6f1e5_18%,#ece4d2_33%)] bg-[length:200%_100%]" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${imgClassName} transition-[opacity,transform] duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

// Scroll-spy: returns the id of the section currently in view
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);
  return active;
}
