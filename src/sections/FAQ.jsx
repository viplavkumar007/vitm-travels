import { motion } from 'framer-motion';
import { faqs } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../utils';
import { SectionHeading } from '../components/Shared';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  return (
    <section id="faq" className="section-pad py-20 sm:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your journey with us."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-12 max-w-3xl"
      >
        <FAQAccordion faqs={faqs} />
      </motion.div>
    </section>
  );
}
