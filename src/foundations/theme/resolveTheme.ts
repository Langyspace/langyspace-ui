import type { ExecutionContext } from 'styled-components'
import { theme as defaultTheme } from './theme'
import type { LangyTheme } from './theme'

// Callers fall back at the token leaf so unused default branches remain tree-shakeable.
export function resolveTheme({
  theme,
}: {
  theme?: ExecutionContext['theme']
}): Partial<LangyTheme> {
  return theme ?? {}
}

const defaultButtons = {
  base: {
    disabledOpacity: defaultTheme.buttons.base.disabledOpacity,
    fontWeight: defaultTheme.buttons.base.fontWeight,
    lineHeight: defaultTheme.buttons.base.lineHeight,
    hoverTransform: defaultTheme.buttons.base.hoverTransform,
    activeTransform: defaultTheme.buttons.base.activeTransform,
  },
  sizes: defaultTheme.buttons.sizes,
  primary: defaultTheme.buttons.primary,
  secondary: defaultTheme.buttons.secondary,
  brand: defaultTheme.buttons.brand,
  tertiary: defaultTheme.buttons.tertiary,
}

export function resolveButtonsTheme({
  theme,
}: ExecutionContext): typeof defaultButtons {
  return resolveTheme({ theme }).buttons ?? defaultButtons
}
