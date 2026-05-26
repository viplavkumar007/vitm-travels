import { motion } from 'framer-motion';
import { whatsappLink } from '../utils';
import { Whatsapp } from './Icons';

export default function FloatingWhatsApp() {
  const msg = "Hello Vitm Shanmuga Travels, I'd like to enquire about a trip.";
  return (
    <motion.a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glossy-lg"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <Whatsapp className="relative h-7 w-7" />
    </motion.a>
  );
}
