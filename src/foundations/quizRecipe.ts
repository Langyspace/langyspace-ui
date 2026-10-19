import * as token from './tokenValues'

// Preserve the approved quiz geometry where it differs from general foundation values.
export const quizRecipe = {
  typography: token.typography,
  spacing: token.spacing,
  radius: {
    xl: token.radiusRounded,
    md: '0.375rem',
    lg: token.radiusLg,
    circle: '50%',
  },
  colors: {
    surface: { canvas: token.colorNeutral0 },
    text: { inverse: token.colorNeutral0 },
    feedback: { success: '#16a34a', danger: token.colorFeedbackDanger },
  },
  shadows: { focus: '0 0 0 3px #00F2EA52' },
  breakpoints: { sm: '640px' },
} as const
