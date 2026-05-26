# Vitm Shanmuga Travels — Website

A modern, responsive, single-page business website for **Vitm Shanmuga Travels**, Coimbatore.
Built with React (JavaScript), Vite, Tailwind CSS, and Framer Motion. Conversion-first design
with phone, WhatsApp, and email lead capture.

---

## ✨ Features

- **Single page**, no routing — smooth-scroll sections with active-link highlighting
- **Sticky navbar** with background blur on scroll + mobile menu
- **Hero** with staggered entrance animations and lazy-loaded image collage
- **Service cards** with hover lift, subtle tilt, and vibrant colored buttons
- **Fleet** showcase, **Why Us** grid, **Testimonials**, animated **FAQ accordion**
- **Contact form** with floating labels, inline validation, loading state, and success screen
- **Enquiry form redirects to both WhatsApp and Email** with a pre-typed message
- **Glossy, rounded buttons** with hover lift / active press / focus ring
- **Toast notifications** (success + error, auto-dismiss, ARIA live)
- **Floating WhatsApp button**
- Glassmorphism cards, light theme keyed to the gold logo + blue/orange travel palette
- **Accessible**: semantic HTML, keyboard nav, focus states, `prefers-reduced-motion` respected
- **Performance**: lazy images, modular components, optimized re-renders
- **SEO**: meta tags, Open Graph, descriptive alt text

---

## 🧠 Editing Content

**All website content lives in one file:**

```
src/data/siteContent.js
```

Update brand info, phone numbers, WhatsApp number, email, hero text, services, fleet,
testimonials, FAQs, and contact details there — no need to touch any component.

> The phone/WhatsApp numbers are stored twice: a display version (`phones`) and a
> digits-only version (`phoneRaw` / `whatsapp`) used for `tel:` and `wa.me` links.

To replace the **logo**, swap `src/assets/logo.jpeg` (keep the same filename, or update
the `logo` path in `siteContent.js`).

To use your **own photos**, replace the Unsplash URLs in `siteContent.js` with your
commercial travel images.

---

## 🚀 Local Development

> Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ☁️ Deployment

### Option A — Vercel (recommended)

1. Push this project to a GitHub/GitLab repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Done — you get a live URL.

(A `vercel.json` is already included.)

**CLI alternative:**
```bash
npm i -g vercel
vercel        # follow the prompts
vercel --prod # deploy to production
```

### Option B — Netlify

1. Push to a Git repo.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Settings (auto-filled from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.

**Drag-and-drop alternative:** run `npm run build`, then drag the `dist/` folder into the
Netlify dashboard.

---

## 📁 Folder Structure

```
vitm-travels/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── utils.js                 # link builders + Framer Motion variants
    ├── assets/
    │   └── logo.jpeg
    ├── data/
    │   └── siteContent.js       # ⭐ ALL content lives here
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── ServiceCard.jsx
    │   ├── FAQAccordion.jsx
    │   ├── ContactForm.jsx
    │   ├── CTA.jsx
    │   ├── Footer.jsx
    │   ├── FloatingWhatsApp.jsx
    │   ├── Toast.jsx
    │   ├── Shared.jsx           # SectionHeading, LazyImage, useScrollSpy
    │   └── Icons.jsx
    └── sections/
        ├── About.jsx
        ├── Services.jsx
        ├── Fleet.jsx
        ├── WhyUs.jsx
        ├── Testimonials.jsx
        ├── FAQ.jsx
        └── Contact.jsx
```

---

## 🛠 Tech Stack

| Tool          | Purpose            |
|---------------|--------------------|
| React 18 (JS) | UI library         |
| Vite 5        | Build tool / dev   |
| Tailwind CSS 3| Styling (only)     |
| Framer Motion | Animations         |

---

© 2026 Vitm Shanmuga Travels. All Rights Reserved.
