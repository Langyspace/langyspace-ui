import { IconButton } from '../../../src/components/IconButton/IconButton'
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
  const label = light ? 'Ativar tema escuro' : 'Ativar tema claro'
  return (
    <IconButton size="sm" aria-label={label} title={label} onClick={onToggle}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-theme-icon={light ? 'moon' : 'sun'}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {light ? (
          <path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </>
        )}
      </svg>
    </IconButton>
  )
}
