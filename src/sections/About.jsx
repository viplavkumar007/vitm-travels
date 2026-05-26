import { motion } from 'framer-motion';
import { about } from '../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../utils';
import { LazyImage } from '../components/Shared';
import { CheckCircle } from '../components/Icons';

export default function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <LazyImage
            src={about.image.src}
            alt={about.image.alt}
            className="h-80 rounded-[2rem] shadow-card-hover ring-1 ring-white/60 sm:h-[26rem]"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-gradient px-6 py-4 text-charcoal-900 shadow-glossy-lg sm:block">
            <p className="font-display text-3xl font-bold">15+</p>
            <p className="text-xs font-semibold uppercase tracking-wide">Years of Trust</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          <motion.span variants={fadeUp} className="eyebrow w-fit">
            About Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl"
          >
            {about.title}
          </motion.h2>
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="text-base leading-relaxed text-charcoal-500">
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-2 grid gap-4 sm:grid-cols-3">
            {about.pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-card backdrop-blur">
                <CheckCircle className="h-7 w-7 text-gold-500" />
                <h3 className="mt-2 text-sm font-bold text-charcoal-900">{pillar.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-charcoal-500">{pillar.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
