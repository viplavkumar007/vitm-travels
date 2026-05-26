import { motion } from 'framer-motion';
import { services } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../utils';
import { SectionHeading } from '../components/Shared';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="section-pad py-20 sm:py-24">
      <SectionHeading
        eyebrow="Our Packages"
        title="Curated Tour Packages for Every Traveler"
        subtitle="Handpicked destinations across Tamil Nadu and South India — each trip planned for comfort, value, and unforgettable memories."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
