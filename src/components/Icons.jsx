// Lightweight inline SVG icons — no external icon library needed.
// All inherit currentColor and accept className.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
};

const make = (paths) =>
  function Icon({ className = 'h-6 w-6', ...props }) {
    return (
      <svg className={className} aria-hidden="true" {...base} {...props}>
        {paths}
      </svg>
    );
  };

export const Phone = make(
  <path d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .97.757l1 4a1 1 0 0 1-.29.96l-1.6 1.5a14 14 0 0 0 6 6l1.5-1.6a1 1 0 0 1 .96-.29l4 1a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" />
);

export const Whatsapp = ({ className = 'h-6 w-6', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M.06 24l1.68-6.13A11.86 11.86 0 0 1 .14 11.9C.14 5.34 5.48 0 12.04 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.49 8.41c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24zM6.6 20.13c1.68.99 3.28 1.59 5.43 1.59 5.45 0 9.89-4.43 9.89-9.88 0-5.46-4.42-9.89-9.88-9.89C6.58 1.95 2.15 6.38 2.15 11.83c0 2.27.66 3.97 1.77 5.74l-.99 3.63 3.67-1.07zm11.39-5.55c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42z" />
  </svg>
);

export const Mail = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>
);

export const MapPin = make(
  <>
    <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </>
);

export const Star = ({ className = 'h-5 w-5', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="m12 2 2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.98 6.1 20.17l1.13-6.57L2.45 8.94l6.6-.96L12 2Z" />
  </svg>
);

export const ChevronDown = make(<path d="m6 9 6 6 6-6" />);

export const ArrowRight = make(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>
);

export const Menu = make(
  <>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </>
);

export const Close = make(
  <>
    <path d="M6 6l12 12" />
    <path d="M6 18 18 6" />
  </>
);

export const Users = make(
  <>
    <path d="M16 19a4 4 0 0 0-8 0" />
    <circle cx="12" cy="9" r="3.2" />
    <path d="M20 18a3 3 0 0 0-4-2.8M4 18a3 3 0 0 1 4-2.8" />
  </>
);

export const Spinner = ({ className = 'h-5 w-5' }) => (
  <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const CheckCircle = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </>
);

export const AlertCircle = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>
);

// ---- Why-Us feature icons (keyed by string in siteContent) ----------------
export const featureIcons = {
  driver: make(
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  shield: make(<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-2 8.5 1.5 1.5 3-3.5" />),
  rupee: make(
    <>
      <path d="M7 5h10M7 9h10M7 13h4c2.5 0 4-1.5 4-4" />
      <path d="m9 13 7 6" />
    </>
  ),
  package: make(
    <>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  plane: make(<path d="M10.5 13.5 3 11l1-2 6 .5L15 4l2 1-2.5 6L21 13l-1 2-6-1-3 5-1.5-.5 1.5-5Z" />),
  family: make(
    <>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M3.5 20a4.5 4.5 0 0 1 9 0M13 20a3.5 3.5 0 0 1 7 0" />
    </>
  ),
  briefcase: make(
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </>
  ),
  clock: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  map: make(
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  timer: make(
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13V9M9 2h6" />
    </>
  ),
  sparkle: make(<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />),
};
