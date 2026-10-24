import { theme } from './theme'
import type { DeepMerge, ThemeOverrides } from './theme.types'
import type { LangyTheme } from './theme'

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

function merge(
  base: Record<string, unknown>,
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base }

  for (const [key, value] of Object.entries(overrides)) {
    const current = result[key]

    result[key] =
      isPlainObject(current) && isPlainObject(value)
        ? merge(current, value)
        : value
  }

  return result
}

// Products extend or override the shared theme; values they do not set stay in sync.
export function createTheme<const Overrides extends ThemeOverrides>(
  overrides: Overrides,
): DeepMerge<LangyTheme, Overrides> {
  return merge(theme, overrides) as DeepMerge<LangyTheme, Overrides>
}
