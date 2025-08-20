module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep forest authority, professional growing expertise
        primary: {
          DEFAULT: "#2D5016", // deep-forest-green
          50: "#F0F4ED", // light-forest-tint
          100: "#D9E5CC", // forest-green-100
          200: "#B8D199", // forest-green-200
          300: "#97BD66", // forest-green-300
          400: "#76A933", // forest-green-400
          500: "#559500", // forest-green-500
          600: "#447A00", // forest-green-600
          700: "#336000", // forest-green-700
          800: "#224500", // forest-green-800
          900: "#2D5016", // deep-forest-green
        },
        // Secondary Colors - Natural credibility, organic solution focus
        secondary: {
          DEFAULT: "#4A7C59", // natural-green
          50: "#F2F7F4", // light-natural-tint
          100: "#E0EDE4", // natural-green-100
          200: "#C1DBC9", // natural-green-200
          300: "#A2C9AE", // natural-green-300
          400: "#83B793", // natural-green-400
          500: "#64A578", // natural-green-500
          600: "#4A7C59", // natural-green-600
          700: "#3A6147", // natural-green-700
          800: "#2A4635", // natural-green-800
          900: "#1A2B23", // natural-green-900
        },
        // Accent Colors - Safety warnings, critical action moments
        accent: {
          DEFAULT: "#FF6B35", // safety-orange
          50: "#FFF4F0", // light-orange-tint
          100: "#FFE4D6", // safety-orange-100
          200: "#FFC9AD", // safety-orange-200
          300: "#FFAE84", // safety-orange-300
          400: "#FF935B", // safety-orange-400
          500: "#FF6B35", // safety-orange-500
          600: "#E55A2B", // safety-orange-600
          700: "#CC4921", // safety-orange-700
          800: "#B23817", // safety-orange-800
          900: "#99270D", // safety-orange-900
        },
        // Background Colors
        background: "#FAFAFA", // clean-scientific-canvas
        surface: "#F5F7F5", // subtle-natural-depth
        // Text Colors
        text: {
          primary: "#1A1A1A", // extended-reading-comfort
          secondary: "#666666", // clear-information-hierarchy
        },
        // Status Colors
        success: "#22C55E", // positive-results-green
        warning: "#F59E0B", // caution-amber
        error: "#EF4444", // helpful-problem-red
      },
      fontFamily: {
        // Headlines: Inter - Modern sans-serif for scientific precision
        inter: ['Inter', 'sans-serif'],
        // Body: Source Sans Pro - Exceptional readability for educational content
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Accents: Source Serif Pro - Editorial credibility for expert content
        'source-serif': ['Source Serif Pro', 'serif'],
        // Default sans fallback
        sans: ['Source Sans Pro', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'natural': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'floating': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'natural': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 250ms ease-out',
        'scale-in': 'scaleIn 250ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}