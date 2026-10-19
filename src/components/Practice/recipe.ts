export const playbackRecipe = {
  spacing: {
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
  },
  radius: {
    pill: '999px',
    circle: '50%',
  },
  colors: {
    text: {
      primary: '#0A0A0A',
      inverse: '#FFFFFF',
      muted: '#6B6B6B',
    },
    surface: {
      canvas: '#FFFFFF',
      subtle: '#F1F1EF',
    },
    border: {
      default: '#D9D9D6',
    },
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    focus: '0 0 0 3px #00F2EA52',
  },
  breakpoints: {
    sm: '640px',
    mobileShell: '900px',
  },
  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
    },
    fontWeight: {
      semibold: 600,
    },
  },
} as const
