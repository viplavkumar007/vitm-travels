import { contact } from './data/siteContent';

// ---- Contact link builders -------------------------------------------------

export const telLink = (raw = contact.phoneRaw[0]) => `tel:+${raw}`;

export const whatsappLink = (message = '') =>
  `https://wa.me/${contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const mailtoLink = (subject = '', body = '') => {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${contact.email}${params.length ? `?${params.join('&')}` : ''}`;
};

// Pre-typed enquiry message used by the contact form for both WhatsApp + mail
export const buildEnquiryMessage = ({ name, phone, travelDate, people, destination, message }) => {
  const lines = [
    'New Travel Enquiry — Vitm Shanmuga Travels',
    '',
    `Name: ${name || '-'}`,
    `Phone: ${phone || '-'}`,
    `Destination / Package: ${destination || '-'}`,
    `Travel Date: ${travelDate || '-'}`,
    `No. of People: ${people || '-'}`,
    '',
    'Message:',
    message || '-',
  ];
  return lines.join('\n');
};

export const ENQUIRY_SUBJECT = 'Travel Enquiry — Vitm Shanmuga Travels';

// ---- Shared Framer Motion variants ----------------------------------------

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Trigger reveal once, at ~25% of viewport
export const viewportOnce = { once: true, amount: 0.25 };
