import { motion } from 'framer-motion';
import { contact } from '../data/siteContent';
import {
  telLink,
  whatsappLink,
  mailtoLink,
  ENQUIRY_SUBJECT,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils';
import { SectionHeading } from '../components/Shared';
import ContactForm from '../components/ContactForm';
import { Phone, Whatsapp, Mail, MapPin } from '../components/Icons';

export default function Contact() {
  const waMsg = "Hello Vitm Shanmuga Travels, I'd like to make a booking enquiry.";

  return (
    <section id="contact" className="section-pad py-20 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch & Book Your Journey"
        subtitle="Reach us by phone, WhatsApp, or email — or send an enquiry and we'll craft the perfect trip for you."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Info + actions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          <motion.a
            variants={fadeUp}
            href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-card backdrop-blur transition hover:shadow-card-hover"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-charcoal-900 shadow-glossy">
              <MapPin className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-bold text-charcoal-900">Visit Us</span>
              <span className="mt-0.5 block text-sm text-charcoal-500">{contact.address}</span>
            </span>
          </motion.a>

          <motion.div variants={fadeUp} className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-card backdrop-blur">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-gradient text-white shadow-glossy">
              <Phone className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-bold text-charcoal-900">Call Us</span>
              <span className="mt-0.5 flex flex-col text-sm text-charcoal-500">
                {contact.phones.map((p, i) => (
                  <a key={p} href={telLink(contact.phoneRaw[i])} className="transition hover:text-ocean-600">
                    {p}
                  </a>
                ))}
              </span>
            </span>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={mailtoLink(ENQUIRY_SUBJECT)}
            className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-card backdrop-blur transition hover:shadow-card-hover"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sunset-gradient text-white shadow-glossy">
              <Mail className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-bold text-charcoal-900">Email Us</span>
              <span className="mt-0.5 block text-sm text-charcoal-500">{contact.email}</span>
            </span>
          </motion.a>

          {/* Quick action buttons */}
          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
            <a href={telLink()} className="btn-ocean">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-glossy bg-[#25D366]">
              <Whatsapp className="h-5 w-5" />
              WhatsApp Booking
            </a>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-card-hover backdrop-blur-xl sm:p-8"
        >
          <h3 className="mb-1 font-display text-xl font-bold text-charcoal-900">Get a Free Quote</h3>
          <p className="mb-6 text-sm text-charcoal-500">
            Fill in your trip details and we&apos;ll reach out with the best package.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
