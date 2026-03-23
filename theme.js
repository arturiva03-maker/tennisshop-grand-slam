// ============================================================
// CENTRAL COLOR CONFIGURATION — Soft Lavender Theme
// Change these values to re-theme the entire site.
// ============================================================

const colors = {
  primary:      '#8a79ab',
  primaryMid:   '#ffffff',
  primaryDark:  '#f8f7fa',
  primaryLight: '#f1eff5',
  accent:       '#e6a5b8',
  accentLight:  '#dfd9ec',
  accentDark:   '#d95c5c',
  accentBg:     '#dcd9e3',
  white:        '#ffffff',
  bgLight:      '#f8f7fa',
  bgDark:       '#1a1823',
  text:         '#3d3c4f',
  textMuted:    '#6b6880',
  textSubtle:   '#a09aad',
  border:       '#cec9d9',
  success:      '#77b8a1',
  successDark:  '#a0bbe3',
  error:        '#d95c5c',
  errorBg:      '#ffffff',
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
  --card: #ffffff;
  --ring: #8a79ab;
  --input: #eae7f0;
  --muted: #dcd9e3;
  --accent: #e6a5b8;
  --border: #cec9d9;
  --radius: 0.5rem;
  --chart-1: #8a79ab;
  --chart-2: #e6a5b8;
  --chart-3: #77b8a1;
  --chart-4: #f0c88d;
  --chart-5: #a0bbe3;
  --popover: #ffffff;
  --primary: #8a79ab;
  --sidebar: #f1eff5;
  --spacing: 0.25rem;
  --font-mono: "Fira Code", "Courier New", monospace;
  --font-sans: Geist, sans-serif;
  --secondary: #dfd9ec;
  --background: #f8f7fa;
  --font-serif: "Lora", Georgia, serif;
  --foreground: #3d3c4f;
  --destructive: #d95c5c;
  --shadow-blur: 5px;
  --shadow-color: hsl(0 0% 0%);
  --sidebar-ring: #8a79ab;
  --shadow-spread: 1px;
  --letter-spacing: 0em;
  --shadow-opacity: 0.06;
  --sidebar-accent: #e6a5b8;
  --sidebar-border: #d7d2e0;
  --card-foreground: #3d3c4f;
  --shadow-offset-x: 1px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #8a79ab;
  --muted-foreground: #6b6880;
  --accent-foreground: #4b2e36;
  --popover-foreground: #3d3c4f;
  --primary-foreground: #f8f7fa;
  --sidebar-foreground: #3d3c4f;
  --secondary-foreground: #3d3c4f;
  --destructive-foreground: #f8f7fa;
  --sidebar-accent-foreground: #4b2e36;
  --sidebar-primary-foreground: #f8f7fa;
`;

  // ── .dark theme ──────────────────────────────────────────
  const darkVars = `
  --card: #232030;
  --ring: #a995c9;
  --input: #2a273a;
  --muted: #242031;
  --accent: #372e3f;
  --border: #302c40;
  --chart-1: #a995c9;
  --chart-2: #f2b8c6;
  --chart-3: #77b8a1;
  --chart-4: #f0c88d;
  --chart-5: #a0bbe3;
  --popover: #232030;
  --primary: #a995c9;
  --sidebar: #16141e;
  --secondary: #5a5370;
  --background: #1a1823;
  --foreground: #e0ddef;
  --destructive: #e57373;
  --sidebar-ring: #a995c9;
  --sidebar-accent: #372e3f;
  --sidebar-border: #2a273a;
  --card-foreground: #e0ddef;
  --sidebar-primary: #a995c9;
  --muted-foreground: #a09aad;
  --accent-foreground: #f2b8c6;
  --popover-foreground: #e0ddef;
  --primary-foreground: #1a1823;
  --sidebar-foreground: #e0ddef;
  --secondary-foreground: #e0ddef;
  --destructive-foreground: #1a1823;
  --sidebar-accent-foreground: #f2b8c6;
  --sidebar-primary-foreground: #1a1823;
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
