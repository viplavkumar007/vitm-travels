import { motion } from 'framer-motion';
import { hero } from '../data/siteContent';
import { telLink } from '../utils';
import { LazyImage } from './Shared';
import { Phone, ArrowRight, Star } from './Icons';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-ocean-200/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sunset-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      </div>

      <div className="section-pad grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.span variants={item} className="eyebrow w-fit">
            <Star className="h-3.5 w-3.5 text-gold-500" />
            {hero.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] text-charcoal-900 sm:text-5xl lg:text-6xl"
          >
            Explore Tamil Nadu &amp; Beyond With{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gold-gradient bg-clip-text text-transparent">
                Comfort, Safety &amp; Reliability
              </span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-charcoal-500 sm:text-lg">
            {hero.subheading}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-sunset">
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={telLink()} className="btn-ghost">
              <Phone className="h-4 w-4 text-ocean-600" />
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl variants={item} className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3 text-center shadow-card">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-gold-600">{s.value}</dd>
                <p className="mt-0.5 text-xs font-medium text-charcoal-500">{s.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <LazyImage
              src={hero.collage[0].src}
              alt={hero.collage[0].alt}
              className="col-span-2 rounded-3xl shadow-card-hover ring-1 ring-white/60"
              imgClassName="block h-auto w-full bg-white"
            />
            <LazyImage
              src={hero.collage[1].src}
              alt={hero.collage[1].alt}
              className="h-44 rounded-3xl shadow-card ring-1 ring-white/60 sm:h-52"
              imgClassName="h-full w-full object-cover"
            />
            <LazyImage
              src={hero.collage[2].src}
              alt={hero.collage[2].alt}
              className="h-44 rounded-3xl shadow-card ring-1 ring-white/60 sm:h-52"
              imgClassName="h-full w-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-5 -left-4 hidden animate-float items-center gap-3 rounded-2xl bg-white/90 px-5 py-3 shadow-card-hover backdrop-blur sm:flex"
          >
            <div className="flex -space-x-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-charcoal-900">4.9 / 5 Rating</p>
              <p className="text-xs text-charcoal-500">From happy travelers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
