// Inline SVG icon set — minimal, brand-tight.
const Ic = {
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...p}>
      <path d="M12 2.5l2.927 6.297 6.823.62-5.166 4.679 1.514 6.726L12 17.27 5.902 20.822l1.514-6.726L2.25 9.417l6.823-.62L12 2.5z"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}>
      <polyline points="4 12 10 18 20 6"/>
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" width="22" height="22" {...p}>
      <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/>
      <path d="M9 12l2.2 2.2L15 10"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
    </svg>
  ),
  House: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" width="22" height="22" {...p}>
      <path d="M3 10.5 12 3l9 7.5"/>
      <path d="M5 9.5V21h14V9.5"/>
      <path d="M10 21v-6h4v6"/>
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" width="22" height="22" {...p}>
      <rect x="3" y="5" width="18" height="16" rx="1"/>
      <path d="M3 9h18M8 3v4M16 3v4"/>
    </svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" width="18" height="18" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Minus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" width="18" height="18" {...p}>
      <path d="M5 12h14"/>
    </svg>
  ),
  Chat: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" {...p}>
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2z"/>
    </svg>
  ),
  X: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" width="18" height="18" {...p}>
      <path d="M6 6l12 12M18 6l-12 12"/>
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" width="18" height="18" {...p}>
      <path d="M12 22s-7-7.3-7-12a7 7 0 1 1 14 0c0 4.7-7 12-7 12z"/>
      <circle cx="12" cy="10" r="2.6"/>
    </svg>
  ),
  Termite: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" {...p}>
      <ellipse cx="16" cy="16" rx="6" ry="9"/>
      <circle cx="16" cy="7.5" r="3.2"/>
      <path d="M14 6L11 2M18 6l3-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M10 13l-4 2M10 16h-5M10 19l-4 2M22 13l4 2M22 16h5M22 19l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Bug: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" {...p}>
      <ellipse cx="16" cy="17" rx="7" ry="9"/>
      <circle cx="16" cy="9" r="3"/>
      <path d="M9 14l-4-2M9 17l-5 0M9 20l-4 2M23 14l4-2M23 17l5 0M23 20l4 2M14 7l-2-3M18 7l2-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Rat: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" {...p}>
      <ellipse cx="14" cy="20" rx="9" ry="6"/>
      <circle cx="22" cy="14" r="5"/>
      <circle cx="24.5" cy="11" r="1.8"/>
      <circle cx="19.5" cy="11" r="1.8"/>
      <circle cx="24" cy="14.5" r="0.7" fill="#000"/>
      <path d="M3 20q-4-2 0-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  Building: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" {...p}>
      <rect x="5" y="6" width="10" height="22"/>
      <rect x="17" y="12" width="10" height="16"/>
      <g fill="#000" opacity="0.3">
        <rect x="7" y="9" width="2" height="2"/><rect x="11" y="9" width="2" height="2"/>
        <rect x="7" y="13" width="2" height="2"/><rect x="11" y="13" width="2" height="2"/>
        <rect x="7" y="17" width="2" height="2"/><rect x="11" y="17" width="2" height="2"/>
        <rect x="7" y="21" width="2" height="2"/><rect x="11" y="21" width="2" height="2"/>
        <rect x="19" y="15" width="2" height="2"/><rect x="23" y="15" width="2" height="2"/>
        <rect x="19" y="19" width="2" height="2"/><rect x="23" y="19" width="2" height="2"/>
        <rect x="19" y="23" width="2" height="2"/><rect x="23" y="23" width="2" height="2"/>
      </g>
    </svg>
  ),
};

window.Ic = Ic;
