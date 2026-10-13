import { tokens } from '../../foundations/tokens'

// Geometry mirrors the existing quiz recipe; keep legacy radii/focus local when foundations differ.
export const quizRecipe = {
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: {
    xl: tokens.radius.rounded,
    md: '0.375rem',
    lg: tokens.radius.lg,
    circle: '50%',
  },
  colors: {
    surface: { canvas: tokens.color.neutral[0] },
    text: { inverse: tokens.color.neutral[0] },
    feedback: { success: '#16a34a', danger: tokens.color.feedback.danger },
  },
  shadows: { focus: '0 0 0 3px #00F2EA52' },
  breakpoints: { sm: '640px' },
} as const
