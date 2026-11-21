import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { expect, it } from 'vitest'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { createTheme } from '../../../src/foundations/theme/createTheme'

it('preserves native controls, accessible content and ref inside the frame', () => {
  const ref = createRef<HTMLElement>()
  render(
    <MobileFrame ref={ref} title="Practice" aria-label="Phone preview">
      <a href="/practice">Open practice</a>
    </MobileFrame>,
  )
  expect(ref.current).toBe(
    screen.getByRole('region', { name: 'Phone preview' }),
  )
  expect(screen.getByRole('link', { name: 'Open practice' })).toHaveAttribute(
    'href',
    '/practice',
  )
  expect(screen.getByRole('heading', { name: 'Practice' })).toBeInTheDocument()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('grows with content, uses the presentation theme and does not create a nested scroller', () => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(
      sheet.collectStyles(
        <ThemeProvider
          theme={createTheme({
            slides: { canvas: '#123456', foreground: '#F7F7F7' },
          })}
        >
          <MobileFrame>
            {Array.from({ length: 5 }, (_, i) => (
              <p key={i}>Long task {i}</p>
            ))}
          </MobileFrame>
        </ThemeProvider>,
      ),
    )
    expect(
      new DOMParser().parseFromString(html, 'text/html').body.textContent,
    ).toContain('Long task 4')
    expect(html).toContain('lsui-sc-mobile-frame')
    expect(sheet.getStyleTags()).toContain('#123456')
    expect(sheet.getStyleTags()).not.toMatch(
      /overflow(?:-y)?:\s*(?:auto|scroll|hidden)/,
    )
    expect(html).not.toContain('title=')
  } finally {
    sheet.seal()
  }
})
