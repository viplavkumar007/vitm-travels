import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp } from '../utils';
import { ChevronDown } from './Icons';

function FAQItem({ faq, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-card backdrop-blur-xl"
    >
      <h3>
        <button
          id={btnId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/60"
        >
          <span className="text-base font-semibold text-charcoal-900">{faq.q}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
              isOpen ? 'bg-gold-gradient text-charcoal-900' : 'bg-charcoal-50 text-charcoal-500'
            }`}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal-500">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <FAQItem
          key={faq.q}
          faq={faq}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
