import { motion } from 'framer-motion';
import { ctaStrip } from '../data/siteContent';
import { whatsappLink, fadeUp, staggerContainer, viewportOnce } from '../utils';
import { Whatsapp, ArrowRight } from './Icons';

export default function CTA() {
  const waMsg = "Hello Vitm Shanmuga Travels, I'd like a free quote for my trip.";

  return (
    <section className="section-pad py-16 sm:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-[2rem] bg-charcoal-900 px-6 py-14 text-center shadow-card-hover sm:px-12"
      >
        {/* Glowing pulse background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-10 top-0 h-64 w-64 animate-pulseGlow rounded-full bg-gold-500/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 animate-pulseGlow rounded-full bg-ocean-500/25 blur-3xl [animation-delay:1.5s]" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 animate-pulseGlow rounded-full bg-sunset-500/25 blur-3xl [animation-delay:3s]" />
        </div>

        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
          >
            {ctaStrip.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-base text-white/75">
            {ctaStrip.subheading}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-gold">
              {ctaStrip.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy bg-[#25D366]"
            >
              <Whatsapp className="h-5 w-5" />
              {ctaStrip.secondary}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
