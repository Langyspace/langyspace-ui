import { tokens } from './tokens'

// Established auth rhythm, shared across the two portals without a consumer ThemeProvider.
export const authRecipe = {
  spacing: {
    ...tokens.spacing,
    12: '3rem',
    responsive: {
      block: {
        '2xl': `clamp(${tokens.spacing[6]}, 4svh, 2.5rem)`,
        '4xl': `clamp(3rem, 8svh, 5rem)`,
        sm: `clamp(${tokens.spacing[4]}, 2.5svh, ${tokens.spacing[5]})`,
        lg: `clamp(${tokens.spacing[4]}, 3svh, ${tokens.spacing[6]})`,
        xl: `clamp(${tokens.spacing[6]}, 4svh, ${tokens.spacing[8]})`,
      },
      compactBlock: {
        sm: `clamp(${tokens.spacing[3]}, 2svh, ${tokens.spacing[4]})`,
        md: `clamp(${tokens.spacing[3]}, 2.5svh, ${tokens.spacing[5]})`,
        xl: `clamp(${tokens.spacing[4]}, 3.5svh, ${tokens.spacing[8]})`,
      },
    },
  },
  typography: {
    ...tokens.typography,
    fontSize: { ...tokens.typography.fontSize, '4xl': '2.5rem' },
    lineHeight: { ...tokens.typography.lineHeight, tight: 1.1 },
    letterSpacing: { normal: '0', wide: '0.01em' },
    fontWeight: { ...tokens.typography.fontWeight, regular: 400 },
  },
  colors: {
    surface: {
      raised: tokens.color.neutral[0],
      muted: tokens.color.neutral[50],
      subtle: tokens.color.neutral[100],
    },
    text: {
      primary: tokens.color.content.default,
      muted: tokens.color.content.muted,
      subtle: tokens.color.neutral[500],
      inverse: tokens.color.neutral[0],
    },
    brand: { accent: tokens.color.accent.default },
  },
  borders: { default: `1px solid ${tokens.color.neutral[300]}` },
  radius: { pill: tokens.radius.pill, circle: '50%' },
  breakpoints: {
    sm: '640px',
    xs: '360px',
    md: '768px',
    mobileShell: '900px',
    lg: '1024px',
  },
} as const
