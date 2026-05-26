// ============================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
//  Edit this file to update the entire website. No content lives in components.
// ============================================================================

import logo from '../assets/logo.jpeg';
import innovaCrysta from '../assets/innova-crysta-exterior-right-front-three-quarter-2.webp';
import swiftDzire from '../assets/swift-dzire-kashmir-car-rental-1-1-768x508.webp';
import cretaImage from '../assets/creta.jpeg';
import ootyCard from '../assets/ooty-card.png';
import mahabalipuramCard from '../assets/mahabalipuram-card.png';
import heroTopRight from '../assets/hero-top-right.jpg';
import yercaudCard from '../assets/yercaud-card.png';
import heroBottomLeft from '../assets/hero-bottom-left.avif';
import kodaikanalCard from '../assets/kodaikanal-card.avif';
import rameswaramCard from '../assets/rameswaram-card.avif';
import kanyakumariCard from '../assets/kanyakumari-card.avif';
import maduraiCard from '../assets/madurai-card.avif';

export const brand = {
  name: 'Vitm Shanmuga Travels',
  shortName: 'Vitm Travels',
  tagline: 'Reliable Travel Services Across Tamil Nadu & South India',
  logo,
  year: 2026,
};

export const contact = {
  phones: ['+91 99946 83433', '+91 99948 53433'],
  // Digits only, for tel: / wa.me links
  phoneRaw: ['919994683433', '919994853433'],
  whatsapp: '919994683433',
  email: 'vitmtravels@gmail.com',
  address: 'No. 33, Ettery Street, Lakshmi Nagar, Chinnavedapatti, Coimbatore – 641049',
  city: 'Coimbatore, Tamil Nadu',
  mapsQuery: 'Chinnavedapatti, Coimbatore 641049',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  badge: 'Trusted Travel Partner Since Day One',
  heading: 'Explore Tamil Nadu & Beyond With Comfort, Safety & Reliability',
  subheading:
    'Experience memorable journeys with professional drivers, comfortable vehicles, affordable packages, and customized travel solutions across Tamil Nadu and South India.',
  primaryCta: 'Book Your Trip',
  secondaryCta: 'Call Now',
  stats: [
    { value: '15+', label: 'Years on the Road' },
    { value: '50K+', label: 'Happy Travelers' },
    { value: '500+', label: 'Routes Covered' },
    { value: '24/7', label: 'Support' },
  ],
  // Lazy-loaded Unsplash imagery (replace with your own commercial photos)
  collage: [
    {
      src: heroTopRight,
      alt: 'South Indian temple street view at dusk',
    },
    {
      src: heroBottomLeft,
      alt: 'Scenic hill station lake with boats',
    },
    {
      src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=70',
      alt: 'South Indian temple architecture',
    },
  ],
};

export const about = {
  title: 'Your Trusted Travel Partner in Tamil Nadu',
  paragraphs: [
    'Vitm Shanmuga Travels is a trusted travel service provider based in Coimbatore offering reliable taxi services, family tours, pilgrimage packages, airport transfers, corporate travel solutions, and outstation trips across Tamil Nadu and South India.',
    'Our mission is to provide safe, comfortable, affordable, and memorable travel experiences with well-maintained vehicles and experienced drivers.',
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1100&q=70',
    alt: 'Open scenic highway winding through hills',
  },
  pillars: [
    { title: 'Safety First', text: 'Sanitized, well-maintained vehicles and licensed, verified drivers on every trip.' },
    { title: 'Fair Pricing', text: 'Transparent, affordable rates with no hidden charges and flexible packages.' },
    { title: 'Local Expertise', text: 'Deep knowledge of every route, temple, hill station and hidden gem in South India.' },
  ],
};

// Each service has its own vibrant button color so cards feel colorful.
// accent: 'ocean' | 'sunset' | 'gold'
export const services = [
  {
    id: 'ooty',
    title: 'Ooty Tour Package',
    desc: 'Explore tea gardens, botanical gardens, scenic viewpoints, lakes, and the beautiful Nilgiri hills.',
    accent: 'ocean',
    image: ootyCard,
    alt: 'Tea gardens in the Nilgiri hills, Ooty',
  },
  {
    id: 'kodaikanal',
    title: 'Kodaikanal Tour Package',
    desc: 'Enjoy mist-covered mountains, Kodai Lake, pine forests, waterfalls, and peaceful hill-station vibes.',
    accent: 'sunset',
    image: kodaikanalCard,
    alt: 'Misty lake surrounded by pine forest in Kodaikanal',
  },
  {
    id: 'rameswaram',
    title: 'Rameswaram Pilgrimage Tour',
    desc: 'Visit Ramanathaswamy Temple, Dhanushkodi, the Pamban Bridge, and important spiritual landmarks.',
    accent: 'gold',
    image: rameswaramCard,
    alt: 'Pamban bridge over the sea near Rameswaram',
  },
  {
    id: 'kanyakumari',
    title: 'Kanyakumari Tour Package',
    desc: 'Experience breathtaking sunrise and sunset views, Vivekananda Rock Memorial, and coastal attractions.',
    accent: 'ocean',
    image: kanyakumariCard,
    alt: 'Coastal sunrise over the sea at Kanyakumari',
  },
  {
    id: 'madurai',
    title: 'Madurai Heritage Tour',
    desc: 'Discover the Meenakshi Amman Temple, cultural landmarks, and centuries of historical attractions.',
    accent: 'sunset',
    image: maduraiCard,
    alt: 'Colourful gopuram of a South Indian temple',
  },
  {
    id: 'yercaud',
    title: 'Yercaud Hill Station Tour',
    desc: 'A perfect weekend getaway with lakes, viewpoints, pleasant weather, and beautiful gardens.',
    accent: 'gold',
    image: yercaudCard,
    alt: 'Green rolling hills and viewpoint at a hill station',
  },
  {
    id: 'mahabalipuram',
    title: 'Mahabalipuram Beach Tour',
    desc: 'Explore UNESCO heritage monuments, the Shore Temple, beaches, and historic architecture.',
    accent: 'ocean',
    image: mahabalipuramCard,
    alt: 'Ancient shore temple by the sea',
  },
  {
    id: 'outstation',
    title: 'All Outstation Travel Services',
    desc: 'Travel comfortably to Bangalore, Mysore, Hyderabad, Tirupati, Chennai, Pondicherry, Munnar, Wayanad, Kochi, Alleppey, Coorg and any destination across South India.',
    accent: 'sunset',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    alt: 'Highway leading toward distant mountains',
  },
];

export const fleet = {
  heading: 'Travel in Comfort With Our Diverse Fleet',
  description:
    'From compact city cars to luxury tourist buses, we offer the perfect vehicle for every journey, group size, and travel requirement.',
  vehicles: [
    {
      id: 'hatchback',
      name: '4 Seater – Hatchback',
      examples: ['Maruti Suzuki Swift', 'Hyundai Grand i10 Nios', 'Tata Tiago'],
      desc: 'Affordable and fuel-efficient vehicles ideal for local travel, city rides, airport transfers, and short-distance journeys.',
      features: ['Air Conditioned', 'Budget Friendly', 'Comfortable Seating', 'City Travel Specialist'],
      image: cretaImage,
      alt: 'Compact hatchback car',
      seats: '4',
      imageFit: 'contain',
    },
    {
      id: 'sedan',
      name: '5 Seater – Sedan',
      examples: ['Maruti Suzuki Dzire', 'Hyundai Aura', 'Honda Amaze'],
      desc: 'Perfect for business travel, family trips, airport transfers, and comfortable long-distance journeys.',
      features: ['Spacious Interior', 'Premium Comfort', 'Large Luggage Space', 'Smooth Highway Travel'],
      image: swiftDzire,
      alt: 'Sedan car on the road',
      seats: '5',
      imageFit: 'contain',
    },
    {
      id: 'suv',
      name: '7 Seater – SUV',
      examples: ['Toyota Innova Crysta', 'Mahindra Scorpio N', 'Kia Carens', 'Toyota Fortuner'],
      desc: 'Ideal for family vacations, pilgrimage tours, hill station trips, and premium outstation travel.',
      features: ['Premium Comfort', 'Spacious Cabin', 'Extra Luggage Capacity', 'Long Distance Travel'],
      image: innovaCrysta,
      alt: 'Premium SUV vehicle',
      seats: '7',
      imageFit: 'contain',
    },
    {
      id: 'traveller',
      name: '14 Seater – Force Traveller',
      examples: [],
      desc: 'Perfect for family gatherings, pilgrimage groups, corporate outings, and educational trips.',
      features: ['Pushback Seats', 'Air Conditioned', 'Spacious Interiors', 'Group Travel Friendly'],
      image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mini van for group travel',
      seats: '14',
    },
    {
      id: 'coach',
      name: '20 Seater – Luxury Coach',
      examples: [],
      desc: 'Best choice for wedding transportation, corporate events, educational tours, and large family groups.',
      features: ['Premium Seating', 'Comfortable Long-Distance Travel', 'Large Luggage Storage', 'Professional Driver Service'],
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Luxury coach bus',
      seats: '20',
    },
    {
      id: 'bus',
      name: '35+ Seater – Tourist Bus',
      examples: [],
      desc: 'Suitable for school excursions, pilgrimage tours, corporate travel, wedding transportation, and large group tours.',
      features: ['Spacious Seating', 'Large Storage Capacity', 'Comfortable Travel', 'Safe Group Transportation'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      alt: 'Large tourist bus',
      seats: '35+',
    },
  ],
};

export const whyUs = {
  heading: 'Why Travelers Choose Vitm Shanmuga Travels',
  description:
    'Every detail is handled so you can sit back, relax, and enjoy the journey with total peace of mind.',
  features: [
    { icon: 'driver', text: 'Professional Drivers' },
    { icon: 'shield', text: 'Well Maintained Vehicles' },
    { icon: 'rupee', text: 'Affordable Pricing' },
    { icon: 'package', text: 'Customized Travel Packages' },
    { icon: 'plane', text: 'Airport Pickup & Drop' },
    { icon: 'family', text: 'Family-Friendly Travel' },
    { icon: 'briefcase', text: 'Corporate Travel Solutions' },
    { icon: 'clock', text: '24/7 Customer Support' },
    { icon: 'check', text: 'Safe & Reliable Service' },
    { icon: 'map', text: 'Tamil Nadu & South India Coverage' },
    { icon: 'timer', text: 'On-Time Pickup & Drop' },
    { icon: 'sparkle', text: 'Clean & Sanitized Vehicles' },
  ],
};

export const testimonials = [
  {
    name: 'Priya R.',
    location: 'Coimbatore',
    rating: 5,
    text: 'Excellent service and friendly driver. Our Ooty family trip was smooth and enjoyable from start to finish.',
  },
  {
    name: 'Karthik S.',
    location: 'Salem',
    rating: 5,
    text: 'Very professional travel company. Clean vehicle, punctual service, and reasonable pricing.',
  },
  {
    name: 'Anand M.',
    location: 'Madurai',
    rating: 5,
    text: 'Highly recommended for pilgrimage tours and outstation travel. Great customer support and a comfortable journey.',
  },
];

export const faqs = [
  {
    q: 'Which destinations do you cover?',
    a: 'We provide travel services throughout Tamil Nadu and major destinations across South India.',
  },
  {
    q: 'Do you provide one-way and round-trip services?',
    a: 'Yes, both one-way and round-trip bookings are available.',
  },
  {
    q: 'Can I customize my travel package?',
    a: 'Yes, all packages can be customized according to your destination, duration, and budget.',
  },
  {
    q: 'What vehicles are available?',
    a: 'We offer Hatchbacks, Sedans, SUVs, Force Travellers, Luxury Coaches, and Tourist Buses.',
  },
  {
    q: 'Do you provide airport transfers?',
    a: 'Yes, airport pickup and drop services are available.',
  },
  {
    q: 'Are your drivers experienced?',
    a: 'Yes, all drivers are professional, licensed, and experienced.',
  },
  {
    q: 'Is your service available 24/7?',
    a: 'Yes, booking assistance and customer support are available 24/7.',
  },
  {
    q: 'How can I make a booking?',
    a: 'You can contact us through phone, WhatsApp, email, or the website enquiry form.',
  },
  {
    q: 'Do you provide vehicles for group tours?',
    a: 'Yes, we provide vehicles ranging from 4-seater cars to 50-seater buses.',
  },
  {
    q: 'Are vehicles sanitized and maintained regularly?',
    a: 'Yes, all vehicles are cleaned, sanitized, and regularly maintained.',
  },
];

export const ctaStrip = {
  heading: 'Ready to Plan Your Next Journey?',
  subheading:
    'Get a free quote in minutes. Tell us where you want to go and our team will craft the perfect package for you.',
  primary: 'Get Free Quote',
  secondary: 'WhatsApp Us',
};












