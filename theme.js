// ============================================================
// CENTRAL COLOR CONFIGURATION — Minimal Violet Theme
// Change these values to re-theme the entire site.
// ============================================================

const colors = {
  primary:      '#7033ff',
  primaryMid:   '#fdfdfd',
  primaryDark:  '#fdfdfd',
  primaryLight: '#f5f8fb',
  accent:       '#e2ebff',
  accentLight:  '#edf0f4',
  accentDark:   '#e54b4f',
  accentBg:     '#f5f5f5',
  white:        '#ffffff',
  bgLight:      '#fdfdfd',
  bgDark:       '#1a1b1e',
  text:         '#000000',
  textMuted:    '#525252',
  textSubtle:   '#a0a0a0',
  border:       '#e7e7ee',
  success:      '#4ac885',
  successDark:  '#3276e4',
  error:        '#e54b4f',
  errorBg:      '#fdfdfd',
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
  // ── :root (light theme) ──────────────────────────────────
  const rootVars = `
  --card: #fdfdfd;
  --ring: #000000;
  --input: #ebebeb;
  --muted: #f5f5f5;
  --accent: #e2ebff;
  --border: #e7e7ee;
  --radius: 1.4rem;
  --chart-1: #4ac885;
  --chart-2: #7033ff;
  --chart-3: #fd822b;
  --chart-4: #3276e4;
  --chart-5: #747474;
  --popover: #fcfcfc;
  --primary: #7033ff;
  --sidebar: #f5f8fb;
  --spacing: 0.27rem;
  --font-mono: IBM Plex Mono, monospace;
  --font-sans: Plus Jakarta Sans, sans-serif;
  --secondary: #edf0f4;
  --background: #fdfdfd;
  --font-serif: Lora, serif;
  --foreground: #000000;
  --destructive: #e54b4f;
  --shadow-blur: 3px;
  --shadow-color: hsl(0 0% 0%);
  --sidebar-ring: #000000;
  --shadow-spread: 0px;
  --letter-spacing: -0.025em;
  --shadow-opacity: 0.16;
  --sidebar-accent: #ebebeb;
  --sidebar-border: #ebebeb;
  --card-foreground: #000000;
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #000000;
  --muted-foreground: #525252;
  --accent-foreground: #1e69dc;
  --popover-foreground: #000000;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #000000;
  --secondary-foreground: #080808;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #000000;
  --sidebar-primary-foreground: #ffffff;
`;

  // ── .dark theme ──────────────────────────────────────────
  const darkVars = `
  --card: #222327;
  --ring: #8c5cff;
  --input: #33353a;
  --muted: #2a2c33;
  --accent: #1e293b;
  --border: #33353a;
  --radius: 1.4rem;
  --chart-1: #4ade80;
  --chart-2: #8c5cff;
  --chart-3: #fca5a5;
  --chart-4: #5993f4;
  --chart-5: #a0a0a0;
  --popover: #222327;
  --primary: #8c5cff;
  --sidebar: #161618;
  --spacing: 0.27rem;
  --font-mono: IBM Plex Mono, monospace;
  --font-sans: Plus Jakarta Sans, sans-serif;
  --secondary: #2a2c33;
  --background: #1a1b1e;
  --font-serif: Lora, serif;
  --foreground: #f0f0f0;
  --destructive: #f87171;
  --shadow-blur: 3px;
  --shadow-color: hsl(0 0% 0%);
  --sidebar-ring: #8c5cff;
  --shadow-spread: 0px;
  --letter-spacing: -0.025em;
  --shadow-opacity: 0.16;
  --sidebar-accent: #2a2c33;
  --sidebar-border: #33353a;
  --card-foreground: #f0f0f0;
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #8c5cff;
  --muted-foreground: #a0a0a0;
  --accent-foreground: #79c0ff;
  --popover-foreground: #f0f0f0;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #f0f0f0;
  --secondary-foreground: #f0f0f0;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #8c5cff;
  --sidebar-primary-foreground: #ffffff;
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
