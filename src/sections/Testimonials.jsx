import { motion } from 'framer-motion';
import { testimonials } from '../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../utils';
import { SectionHeading } from '../components/Shared';
import { Star } from '../components/Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sunset-50/50 via-cream to-cream" />
      <div className="section-pad">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Travelers Across South India"
          subtitle="Real words from families, pilgrims, and corporate clients who trusted us with their journeys."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-7 shadow-card backdrop-blur-xl transition-shadow hover:shadow-card-hover"
            >
              <div className="flex gap-1 text-gold-500" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-charcoal-600">
                “{t.text}”
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-charcoal-100 pt-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ocean-gradient font-display text-base font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-charcoal-900">{t.name}</span>
                  <span className="block text-xs text-charcoal-400">{t.location}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
