import { motion } from 'framer-motion';
import { whyUs } from '../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../utils';
import { SectionHeading } from '../components/Shared';
import { featureIcons } from '../components/Icons';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad py-20 sm:py-24">
      <SectionHeading eyebrow="Why Choose Us" title={whyUs.heading} subtitle={whyUs.description} />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyUs.features.map((f) => {
          const Icon = featureIcons[f.icon] || featureIcons.check;
          return (
            <motion.li
              key={f.text}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-card backdrop-blur-xl transition-shadow hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-charcoal-900 shadow-glossy">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-charcoal-800">{f.text}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
