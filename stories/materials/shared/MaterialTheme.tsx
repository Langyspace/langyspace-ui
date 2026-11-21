import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { MaterialRoot } from './MaterialTheme.styles'
export function MaterialTheme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={materialDarkTheme}>
      <MaterialRoot>{children}</MaterialRoot>
    </ThemeProvider>
  )
}
