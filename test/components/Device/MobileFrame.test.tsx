import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { expect, it, vi } from 'vitest'
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

it('maps native content into an illustrated screen without duplicating the device controls', () => {
  const ref = createRef<HTMLElement>()
  render(
    <MobileFrame
      ref={ref}
      aria-label="Photo preview"
      illustration={{
        src: '/phone.png',
        alt: 'One hand holding a phone',
        aspectRatio: 2 / 3,
        screen: { x: 20, y: 10, width: 50, height: 65 },
      }}
    >
      <button type="button">Native action</button>
    </MobileFrame>,
  )
  expect(
    screen.getByRole('img', { name: 'One hand holding a phone' }),
  ).toHaveAttribute('src', '/phone.png')
  expect(screen.getByRole('button', { name: 'Native action' })).toBeEnabled()
  expect(ref.current).toHaveAttribute('data-device-illustration', 'true')
  expect(screen.queryByRole('heading')).toBeNull()
})

it('keeps an application in its real frame dimensions and preserves native interactions', () => {
  const click = vi.fn()
  const { rerender } = render(
    <MobileFrame
      screenMode="application-responsive"
      aria-label="Practice phone"
    >
      <button onClick={click}>Answer the quiz</button>
    </MobileFrame>,
  )
  const iframe = screen.getByTitle('Practice phone') as HTMLIFrameElement
  fireEvent.load(iframe)
  const body = within(iframe.contentDocument!.body)
  fireEvent.click(body.getByRole('button', { name: 'Answer the quiz' }))
  expect(click).toHaveBeenCalledOnce()
  rerender(
    <MobileFrame
      screenMode="application-responsive"
      aria-label="Practice phone"
    >
      <p>Answer feedback</p>
    </MobileFrame>,
  )
  expect(body.getByText('Answer feedback')).toBeVisible()
  expect(body.queryByRole('button')).not.toBeInTheDocument()

  const sheet = new ServerStyleSheet()
  try {
    renderToString(
      sheet.collectStyles(
        <MobileFrame
          screenMode="application-responsive"
          aria-label="Practice phone"
        />,
      ),
    )
    const css = sheet.getStyleTags()
    expect(css).toMatch(/width:100%;height:100%/)
    expect(css).not.toMatch(/scale\(|360px|640px/)
  } finally {
    sheet.seal()
  }
})

it('preserves the scaled mobile document for existing application previews', () => {
  const sheet = new ServerStyleSheet()
  try {
    renderToString(
      sheet.collectStyles(<MobileFrame screenMode="application" />),
    )
    const css = sheet.getStyleTags()
    expect(css).toMatch(/width:360px;height:640px/)
    expect(css).toContain('scale(1)')
  } finally {
    sheet.seal()
  }
})
