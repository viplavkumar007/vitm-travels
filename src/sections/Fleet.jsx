import { motion } from 'framer-motion';
import { fleet } from '../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce, whatsappLink } from '../utils';
import { SectionHeading, LazyImage } from '../components/Shared';
import { Users, CheckCircle } from '../components/Icons';

export default function Fleet() {
  return (
    <section id="fleet" className="relative py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ocean-50/60 via-cream to-cream" />
      <div className="section-pad">
        <SectionHeading eyebrow="Our Fleet" title={fleet.heading} subtitle={fleet.description} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {fleet.vehicles.map((v) => {
            const msg = `Hello Vitm Shanmuga Travels, I'd like to book the ${v.name}. Please share availability and pricing.`;
            return (
              <motion.article
                key={v.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-card backdrop-blur-xl hover:shadow-card-hover"
              >
                <div className="relative">
                  <LazyImage
                    src={v.image}
                    alt={v.alt}
                    className="h-44 w-full"
                    imgClassName={`h-44 w-full transition-transform duration-500 group-hover:scale-105 ${
                      v.imageFit === 'contain' ? 'object-contain bg-white p-2' : 'object-cover'
                    }`}
                  />
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-charcoal-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    <Users className="h-3.5 w-3.5" />
                    {v.seats}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-lg font-bold text-charcoal-900">{v.name}</h3>
                  {v.examples.length > 0 && (
                    <p className="text-xs font-medium text-ocean-600">{v.examples.join(' · ')}</p>
                  )}
                  <p className="text-sm leading-relaxed text-charcoal-500">{v.desc}</p>
                  <ul className="mt-1 grid grid-cols-2 gap-1.5">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-charcoal-600">
                        <CheckCircle className="h-4 w-4 shrink-0 text-gold-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ocean mt-2 w-full text-xs"
                  >
                    Book This Vehicle
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
