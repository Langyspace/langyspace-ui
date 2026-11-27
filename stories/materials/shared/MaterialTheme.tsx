import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { theme } from '../../../src/foundations/theme/theme'
import {
  MaterialAppearanceContext,
  useMaterialAppearance,
} from './MaterialAppearanceContext'
import { MaterialRoot } from './MaterialTheme.styles'

function MaterialThemeRoot({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')
  const appearance = useMemo(() => ({ mode, setMode }), [mode])
  return (
    <MaterialAppearanceContext.Provider value={appearance}>
      <ThemeProvider theme={mode === 'dark' ? materialDarkTheme : theme}>
        <MaterialRoot $mode={mode} data-material-theme={mode}>
          {children}
        </MaterialRoot>
      </ThemeProvider>
    </MaterialAppearanceContext.Provider>
  )
}
/** Nested lesson wrappers share one presentation choice instead of forcing the dark theme again. */
export function MaterialTheme({ children }: { children: ReactNode }) {
  const parent = useMaterialAppearance()
  return parent ? (
    <MaterialRoot $mode={parent.mode}>{children}</MaterialRoot>
  ) : (
    <MaterialThemeRoot>{children}</MaterialThemeRoot>
  )
}
