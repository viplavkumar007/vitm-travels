import { motion } from 'framer-motion';
import { fadeUp, whatsappLink } from '../utils';
import { LazyImage } from './Shared';
import { ArrowRight } from './Icons';

const accentBtn = {
  ocean: 'btn-ocean',
  sunset: 'btn-sunset',
  gold: 'btn-gold',
};

const accentBadge = {
  ocean: 'bg-ocean-500/90 text-white',
  sunset: 'bg-sunset-500/90 text-white',
  gold: 'bg-gold-500/90 text-charcoal-900',
};

export default function ServiceCard({ service }) {
  const enquireMsg = `Hello Vitm Shanmuga Travels, I'm interested in the "${service.title}". Please share details and pricing.`;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, rotate: -0.4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-card backdrop-blur-xl transition-shadow duration-300 hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative">
        <LazyImage
          src={service.image}
          alt={service.alt}
          className="h-48 w-full"
          imgClassName="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider shadow ${accentBadge[service.accent]}`}
        >
          Tour Package
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-charcoal-900">{service.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-charcoal-500">{service.desc}</p>
        <a
          href={whatsappLink(enquireMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${accentBtn[service.accent]} mt-2 w-full text-xs`}
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
