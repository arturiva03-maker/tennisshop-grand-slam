// ============================================================
// CENTRAL COLOR CONFIGURATION — Original Dark Luxury Gold Theme
// Change these values to re-theme the entire site.
// ============================================================

const colors = {
  primary:      '#0b0b12',
  primaryMid:   '#111118',
  primaryDark:  '#060609',
  primaryLight: '#151520',
  accent:       '#c9a96e',
  accentLight:  '#dbb978',
  accentDark:   '#9a1050',
  accentBg:     '#1c1915',
  white:        '#f0ede8',
  bgLight:      '#151520',
  bgDark:       '#060609',
  text:         '#f0ede8',
  textMuted:    '#7a7a8a',
  textSubtle:   '#5a5a6a',
  border:       '#1f1c17',
  success:      '#4ade80',
  successDark:  '#22c55e',
  error:        '#c4365a',
  errorBg:      '#1f1218',
};

// --- Helper: hex → "r, g, b" string ---
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

// --- Build and inject <style> block with CSS custom properties ---
function applyTheme(c) {
  // ── :root (dark luxury theme) ────────────────────────────
  const rootVars = `
  --card: #111118;
  --ring: #c9a96e;
  --input: #151520;
  --muted: #1f1c17;
  --accent: #c9a96e;
  --border: #1f1c17;
  --radius: 0.25rem;
  --chart-1: #c9a96e;
  --chart-2: #dbb978;
  --chart-3: #c4365a;
  --chart-4: #9a1050;
  --chart-5: #7a7a8a;
  --popover: #111118;
  --primary: #0b0b12;
  --sidebar: #060609;
  --font-mono: monospace;
  --font-sans: 'Sora', 'Helvetica Neue', sans-serif;
  --secondary: #151520;
  --background: #060609;
  --font-serif: 'Bodoni Moda', 'Didot', 'Georgia', serif;
  --foreground: #f0ede8;
  --destructive: #c4365a;
  --shadow-blur: 4px;
  --shadow-color: hsl(0 0% 0%);
  --sidebar-ring: #c9a96e;
  --shadow-spread: 0px;
  --letter-spacing: 0em;
  --shadow-opacity: 0.15;
  --sidebar-accent: #c9a96e;
  --sidebar-border: #1f1c17;
  --card-foreground: #f0ede8;
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #c9a96e;
  --muted-foreground: #7a7a8a;
  --accent-foreground: #060609;
  --popover-foreground: #f0ede8;
  --primary-foreground: #f0ede8;
  --sidebar-foreground: #f0ede8;
  --secondary-foreground: #f0ede8;
  --destructive-foreground: #f0ede8;
  --sidebar-accent-foreground: #060609;
  --sidebar-primary-foreground: #060609;
`;

  // ── .dark theme (same as default — site is dark by nature) ──
  const darkVars = `
  --card: #111118;
  --ring: #c9a96e;
  --input: #151520;
  --muted: #1f1c17;
  --accent: #c9a96e;
  --border: #1f1c17;
  --chart-1: #c9a96e;
  --chart-2: #dbb978;
  --chart-3: #c4365a;
  --chart-4: #9a1050;
  --chart-5: #7a7a8a;
  --popover: #111118;
  --primary: #0b0b12;
  --sidebar: #060609;
  --secondary: #151520;
  --background: #060609;
  --foreground: #f0ede8;
  --destructive: #c4365a;
  --sidebar-ring: #c9a96e;
  --sidebar-accent: #c9a96e;
  --sidebar-border: #1f1c17;
  --card-foreground: #f0ede8;
  --sidebar-primary: #c9a96e;
  --muted-foreground: #7a7a8a;
  --accent-foreground: #060609;
  --popover-foreground: #f0ede8;
  --primary-foreground: #f0ede8;
  --sidebar-foreground: #f0ede8;
  --secondary-foreground: #f0ede8;
  --destructive-foreground: #f0ede8;
  --sidebar-accent-foreground: #060609;
  --sidebar-primary-foreground: #060609;
`;

  // ── Legacy + RGB aliases (for existing CSS rgba() references) ──
  const legacyLight = `
  --dark: ${c.primaryDark};
  --dark-rgb: ${hexToRgb(c.primaryDark)};
  --light: ${c.text};
  --light-rgb: ${hexToRgb(c.text)};
  --gray: ${c.textMuted};
  --surface: ${c.primaryMid};
  --surface-rgb: ${hexToRgb(c.primaryMid)};
  --accent-bright: ${c.accentLight};
  --accent-rose: ${c.error};
  --accent-rose-rgb: ${hexToRgb(c.error)};
  --accent-dark: ${c.accentDark};

  --primary-rgb: ${hexToRgb(c.primary)};
  --primary-mid-rgb: ${hexToRgb(c.primaryMid)};
  --primary-dark-rgb: ${hexToRgb(c.primaryDark)};
  --primary-light-rgb: ${hexToRgb(c.primaryLight)};
  --accent-rgb: ${hexToRgb(c.accent)};
  --accent-light-rgb: ${hexToRgb(c.accentLight)};
  --accent-dark-rgb: ${hexToRgb(c.accentDark)};
  --accent-bg-rgb: ${hexToRgb(c.accentBg)};
  --white-rgb: ${hexToRgb(c.white)};
  --bg-light-rgb: ${hexToRgb(c.bgLight)};
  --bg-dark-rgb: ${hexToRgb(c.bgDark)};
  --text-rgb: ${hexToRgb(c.text)};
  --text-muted-rgb: ${hexToRgb(c.textMuted)};
  --text-subtle-rgb: ${hexToRgb(c.textSubtle)};
  --border-rgb: ${hexToRgb(c.border)};
  --success-rgb: ${hexToRgb(c.success)};
  --success-dark-rgb: ${hexToRgb(c.successDark)};
  --error-rgb: ${hexToRgb(c.error)};
  --error-bg-rgb: ${hexToRgb(c.errorBg)};
  --black-rgb: 0, 0, 0;
  --white-pure-rgb: 255, 255, 255;
`;

  const style = document.createElement('style');
  style.id = 'theme-vars';
  style.textContent = [
    `:root {\n${rootVars}\n${legacyLight}\n}`,
    `.dark {\n${darkVars}\n}`,
  ].join('\n\n');
  document.head.prepend(style);
}

applyTheme(colors);

export { colors, applyTheme };
