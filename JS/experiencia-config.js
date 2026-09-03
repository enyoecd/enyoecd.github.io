/* Tailwind config moved from experiencia.html (id="tailwind-config") */
window.tailwind = window.tailwind || {};
/* The CDN expects tailwind.config to be on the window object */
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#d7f6ff",
        "on-primary-container": "#eeefff",
        "secondary-container": "#00a6e0",
        surface: "#11131b",
        tertiary: "#4cd7f6",
        "surface-container-highest": "#32343d",
        "secondary-fixed": "#c4e7ff",
        "secondary-fixed-dim": "#7bd0ff",
        "on-secondary-fixed": "#001e2c",
        "surface-variant": "#32343d",
        "inverse-surface": "#e1e2ed",
        "tertiary-fixed": "#acedff",
        "surface-container-low": "#191b23",
        "on-tertiary-fixed": "#001f26",
        "surface-container-lowest": "#0c0e16",
        "surface-dim": "#11131b",
        outline: "#8d90a0",
        "outline-variant": "#434655",
        "surface-container-high": "#282a32",
        secondary: "#7bd0ff",
        "tertiary-fixed-dim": "#4cd7f6",
        "on-secondary-fixed-variant": "#004c69",
        "primary-container": "#2563eb",
        "error-container": "#93000a",
        "tertiary-container": "#00788c",
        background: "#11131b",
        "on-error": "#690005",
        "surface-bright": "#373942",
        "on-error-container": "#ffdad6",
        "on-surface": "#e1e2ed",
        "inverse-on-surface": "#2e3039",
        "on-primary-fixed": "#00174b",
        "surface-tint": "#b4c5ff",
        "on-surface-variant": "#c3c6d7",
        "on-primary": "#002a78",
        "on-secondary": "#00354a",
        "on-primary-fixed-variant": "#003ea8",
        error: "#ffb4ab",
        "on-background": "#e1e2ed",
        "on-tertiary-fixed-variant": "#004e5c",
        primary: "#b4c5ff",
        "on-tertiary": "#003640",
        "inverse-primary": "#0053db",
        "surface-container": "#1d1f27",
        "primary-fixed": "#dbe1ff"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "container-max-width": "1280px",
        "margin-mobile": "20px",
        base: "8px",
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px",
        gutter: "24px"
      },
      fontFamily: {
        "body-lg": ["Inter"],
        "label-sm": ["Inter"],
        "headline-md": ["Manrope"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "headline-lg-mobile": ["Manrope"],
        "headline-lg": ["Manrope"],
        "headline-xl": ["Manrope"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  }
};

// Also set window.tailwindConfig for compatibility with some CDN versions
window.tailwindConfig = window.tailwindConfig || window.tailwind.config;