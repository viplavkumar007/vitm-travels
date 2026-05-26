import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brand, nav, contact } from '../data/siteContent';
import { telLink } from '../utils';
import { useScrollSpy } from './Shared';
import { Menu, Close, Phone } from './Icons';

const sectionIds = nav.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 78;
    const y = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    window.history.replaceState(null, '', href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/40 bg-cream/80 shadow-[0_4px_30px_-12px_rgba(14,14,16,0.25)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad flex h-[68px] items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label={`${brand.name} home`}>
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-400/60"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-charcoal-900">Vitm Shanmuga</span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Travels
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-active={active === id}
                  className="link-underline text-sm font-semibold text-charcoal-700 transition-colors hover:text-charcoal-900 data-[active=true]:text-gold-700"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a href={telLink()} className="btn-gold hidden text-xs lg:inline-flex">
          <Phone className="h-4 w-4" />
          Call Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl border border-charcoal-900/10 bg-white/70 p-2.5 text-charcoal-800 backdrop-blur transition hover:bg-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/40 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-pad flex flex-col gap-1 py-4">
              {nav.map((item) => {
                const id = item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        // Wait for menu close + body scroll unlock on mobile, then scroll.
                        window.setTimeout(() => scrollToSection(item.href), 40);
                      }}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                        active === id
                          ? 'bg-gold-50 text-gold-700'
                          : 'text-charcoal-700 hover:bg-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2">
                <a href={telLink()} className="btn-gold w-full" onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" />
                  {contact.phones[0]}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
