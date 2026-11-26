import { createContext, useContext } from 'react'
import type { MaterialAppearance } from './MaterialAppearanceContext.types'
export const MaterialAppearanceContext = createContext<
  MaterialAppearance | undefined
>(undefined)
export const useMaterialAppearance = () => useContext(MaterialAppearanceContext)
export function useMaterialThemeToggle() {
  const appearance = useMaterialAppearance()
  return appearance
    ? {
        mode: appearance.mode,
        onToggle: () =>
          appearance.setMode((current) =>
            current === 'dark' ? 'light' : 'dark',
          ),
      }
    : undefined
}
