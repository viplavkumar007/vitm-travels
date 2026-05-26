import { brand, contact, nav } from '../data/siteContent';
import { telLink, mailtoLink } from '../utils';
import { MapPin, Phone, Mail } from './Icons';

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-charcoal-900/10 bg-charcoal-900 text-white/80">
      <div className="section-pad grid gap-10 py-14 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-400/60"
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-white">Vitm Shanmuga Travels</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Travels</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">{brand.tagline}</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-display text-base font-bold text-white">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-underline text-white/70 transition hover:text-gold-400">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-display text-base font-bold text-white">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span className="text-white/70">{contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold-400" />
              <span className="flex flex-wrap gap-x-3 text-white/70">
                {contact.phones.map((p, i) => (
                  <a key={p} href={telLink(contact.phoneRaw[i])} className="transition hover:text-gold-400">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold-400" />
              <a href={mailtoLink()} className="text-white/70 transition hover:text-gold-400">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {brand.year} Vitm Shanmuga Travels. All Rights Reserved.</p>
          <p>📍 Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
