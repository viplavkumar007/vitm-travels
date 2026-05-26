import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/siteContent';
import {
  whatsappLink,
  mailtoLink,
  buildEnquiryMessage,
  ENQUIRY_SUBJECT,
} from '../utils';
import { useToast } from './Toast';
import { Spinner, Whatsapp, Mail } from './Icons';

const initial = {
  name: '',
  phone: '',
  destination: '',
  travelDate: '',
  people: '',
  message: '',
};

// Floating-label field
function Field({ id, label, type = 'text', value, onChange, error, required, ...rest }) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`peer w-full rounded-xl border bg-white/80 px-4 pb-2.5 pt-5 text-sm text-charcoal-900 shadow-sm outline-none transition-all placeholder-shown:pt-3.5 focus:border-gold-400 focus:ring-2 focus:ring-gold-300/50 ${
          error ? 'border-red-400' : 'border-charcoal-200'
        }`}
        {...rest}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-charcoal-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-600"
      >
        {label}
        {required && <span className="text-sunset-500"> *</span>}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1 pl-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (phoneDigits.length < 10) e.phone = 'Enter a valid 10-digit number.';
    if (!form.destination.trim()) e.destination = 'Let us know where you want to go.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the highlighted fields and try again.');
      return;
    }
    setLoading(true);

    // Simulate brief processing, then open WhatsApp + mail with pre-typed message
    const body = buildEnquiryMessage(form);
    setTimeout(() => {
      // WhatsApp (primary) opens in a new tab
      window.open(whatsappLink(body), '_blank', 'noopener,noreferrer');
      // Email draft (secondary) — slight delay so popup blockers don't merge them
      setTimeout(() => {
        window.location.href = mailtoLink(ENQUIRY_SUBJECT, body);
      }, 400);

      setLoading(false);
      setSubmitted(true);
      toast.success('Enquiry ready! Opening WhatsApp and your email app.');
      setForm(initial);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50/80 p-8 text-center shadow-card backdrop-blur-xl"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-charcoal-900">Enquiry Sent!</h3>
        <p className="max-w-sm text-sm text-charcoal-500">
          We&apos;ve opened WhatsApp and your email with the details pre-filled. Our team will get
          back to you shortly. You can also call us directly anytime.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-ghost mt-2">
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4" aria-label="Travel enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full Name" value={form.name} onChange={handleChange} error={errors.name} required autoComplete="name" />
        <Field id="phone" label="Phone Number" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} required autoComplete="tel" />
      </div>

      <div className="relative">
        <select
          id="destination"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          aria-invalid={!!errors.destination}
          className={`w-full appearance-none rounded-xl border bg-white/80 px-4 py-3.5 text-sm text-charcoal-900 shadow-sm outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-300/50 ${
            errors.destination ? 'border-red-400' : 'border-charcoal-200'
          } ${form.destination ? 'text-charcoal-900' : 'text-charcoal-400'}`}
        >
          <option value="">Select destination / package *</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Other / Custom Trip">Other / Custom Trip</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400">▾</span>
        {errors.destination && (
          <p className="mt-1 pl-1 text-xs font-medium text-red-600">{errors.destination}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="travelDate" label="Travel Date" type="date" value={form.travelDate} onChange={handleChange} />
        <Field id="people" label="No. of People" type="number" min="1" value={form.people} onChange={handleChange} />
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder=" "
          className="peer w-full resize-none rounded-xl border border-charcoal-200 bg-white/80 px-4 pb-2.5 pt-5 text-sm text-charcoal-900 shadow-sm outline-none transition-all placeholder-shown:pt-3.5 focus:border-gold-400 focus:ring-2 focus:ring-gold-300/50"
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-charcoal-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-600"
        >
          Message / Special Requests
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-sunset mt-1 w-full disabled:cursor-not-allowed disabled:opacity-80">
        {loading ? (
          <>
            <Spinner className="h-5 w-5" />
            Preparing your enquiry…
          </>
        ) : (
          <>
            <Whatsapp className="h-5 w-5" />
            Send Enquiry via WhatsApp &amp; Email
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-charcoal-400">
        <Mail className="h-3.5 w-3.5" />
        Submitting opens WhatsApp and your email app with details pre-filled.
      </p>
    </form>
  );
}
