// ============================================================
// CENTRAL COLOR CONFIGURATION — Solarized Theme
// Change these values to re-theme the entire site.
// ============================================================

const colors = {
  primary:      '#d33682',
  primaryMid:   '#eee8d5',
  primaryDark:  '#fdf6e3',
  primaryLight: '#fdf6e3',
  accent:       '#cb4b16',
  accentLight:  '#2aa198',
  accentDark:   '#dc322f',
  accentBg:     '#eee8d5',
  white:        '#ffffff',
  bgLight:      '#fdf6e3',
  bgDark:       '#002b36',
  text:         '#073642',
  textMuted:    '#93a1a1',
  textSubtle:   '#839496',
  border:       '#839496',
  success:      '#2aa198',
  successDark:  '#268bd2',
  error:        '#dc322f',
  errorBg:      '#eee8d5',
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
  --card: #eee8d5;
  --ring: #d33682;
  --input: #839496;
  --muted: #93a1a1;
  --accent: #cb4b16;
  --border: #839496;
  --radius: 0.25rem;
  --chart-1: #268bd2;
  --chart-2: #2aa198;
  --chart-3: #d33682;
  --chart-4: #cb4b16;
  --chart-5: #dc322f;
  --popover: #eee8d5;
  --primary: #d33682;
  --sidebar: #fdf6e3;
  --font-mono: Space Mono, monospace;
  --font-sans: Outfit, sans-serif;
  --secondary: #2aa198;
  --background: #fdf6e3;
  --foreground: #073642;
  --destructive: #dc322f;
  --shadow-blur: 4px;
  --shadow-color: hsl(196 83% 10%);
  --sidebar-ring: #d33682;
  --shadow-spread: 0px;
  --shadow-opacity: 0.15;
  --sidebar-accent: #2aa198;
  --sidebar-border: #839496;
  --card-foreground: #073642;
  --shadow-offset-x: 2px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #d33682;
  --muted-foreground: #073642;
  --accent-foreground: #ffffff;
  --popover-foreground: #073642;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #073642;
  --secondary-foreground: #ffffff;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-primary-foreground: #ffffff;
`;

  // ── .dark theme ──────────────────────────────────────────
  const darkVars = `
  --card: #073642;
  --ring: #d33682;
  --input: #586e75;
  --muted: #586e75;
  --accent: #cb4b16;
  --border: #586e75;
  --radius: 0.25rem;
  --chart-1: #268bd2;
  --chart-2: #2aa198;
  --chart-3: #d33682;
  --chart-4: #cb4b16;
  --chart-5: #dc322f;
  --popover: #073642;
  --primary: #d33682;
  --sidebar: #002b36;
  --secondary: #2aa198;
  --background: #002b36;
  --foreground: #93a1a1;
  --destructive: #dc322f;
  --sidebar-ring: #d33682;
  --sidebar-accent: #2aa198;
  --sidebar-border: #586e75;
  --card-foreground: #93a1a1;
  --sidebar-primary: #d33682;
  --muted-foreground: #93a1a1;
  --accent-foreground: #ffffff;
  --popover-foreground: #93a1a1;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #93a1a1;
  --secondary-foreground: #ffffff;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #ffffff;
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
