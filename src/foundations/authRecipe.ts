import * as token from './tokenValues'

// Established auth rhythm, shared across the two portals without a consumer ThemeProvider.
export const authRecipe = {
  spacing: {
    ...token.spacing,
    12: '3rem',
    responsive: {
      block: {
        '2xl': `clamp(${token.spacing6}, 4svh, 2.5rem)`,
        '4xl': `clamp(3rem, 8svh, 5rem)`,
        sm: `clamp(${token.spacing4}, 2.5svh, ${token.spacing5})`,
        lg: `clamp(${token.spacing4}, 3svh, ${token.spacing6})`,
        xl: `clamp(${token.spacing6}, 4svh, ${token.spacing8})`,
      },
      compactBlock: {
        sm: `clamp(${token.spacing3}, 2svh, ${token.spacing4})`,
        md: `clamp(${token.spacing3}, 2.5svh, ${token.spacing5})`,
        xl: `clamp(${token.spacing4}, 3.5svh, ${token.spacing8})`,
      },
    },
  },
  typography: {
    ...token.typography,
    fontSize: { ...token.typographyFontSize, '4xl': '2.5rem' },
    lineHeight: { ...token.typographyLineHeight, tight: 1.1 },
    letterSpacing: { normal: '0', wide: '0.01em' },
    fontWeight: { ...token.typographyFontWeight, regular: 400 },
  },
  colors: {
    surface: {
      raised: token.colorNeutral0,
      muted: token.colorNeutral50,
      subtle: token.colorNeutral100,
    },
    text: {
      primary: token.colorContentDefault,
      muted: token.colorContentMuted,
      subtle: token.colorNeutral500,
      inverse: token.colorNeutral0,
    },
    brand: { accent: token.colorAccentDefault },
  },
  borders: { default: `1px solid ${token.colorNeutral300}` },
  radius: { pill: token.radiusPill, circle: '50%' },
  breakpoints: {
    sm: '640px',
    xs: '360px',
    md: '768px',
    mobileShell: '900px',
    lg: '1024px',
  },
} as const
