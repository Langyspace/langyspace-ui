import type { ExecutionContext } from 'styled-components'
import { theme as defaultTheme } from './theme'
import type { LangyTheme } from './theme'

// Products provide a complete createTheme result; standalone components keep their defaults.
export function resolveTheme({ theme }: ExecutionContext): LangyTheme {
  return { ...defaultTheme, ...theme }
}
