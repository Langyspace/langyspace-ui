import { Button } from '../../../src/components/Button/Button'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { theme } from '../../../src/foundations/theme/theme'
import { MaterialRoot } from './MaterialTheme.styles'
export function MaterialTheme({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <ThemeProvider theme={light ? theme : materialDarkTheme}>
      <MaterialRoot
        $light={light}
        data-material-theme={light ? 'light' : 'dark'}
      >
        {children}
      </MaterialRoot>
    </ThemeProvider>
  )
}

export function MaterialThemeSwitch({
  light,
  onToggle,
}: {
  light: boolean
  onToggle: () => void
}) {
  return (
    <Button
      variant="secondary"
      size="sm"
      aria-label={light ? 'Ativar tema escuro' : 'Ativar tema claro'}
      onClick={onToggle}
    >
      {light ? 'Escuro' : 'Claro'}
    </Button>
  )
}
