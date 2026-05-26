import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import About from './sections/About';
import Services from './sections/Services';
import Fleet from './sections/Fleet';
import WhyUs from './sections/WhyUs';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ToastProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal-900"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </ToastProvider>
  );
}
