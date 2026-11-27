import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { useTheme } from 'styled-components'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import { MaterialSlideDeck } from '../../../stories/materials/shared/MaterialSlideDeck'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { theme } from '../../../src/foundations/theme/theme'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { useMaterialThemeToggle } from '../../../stories/materials/shared/MaterialAppearanceContext'

const scrollToDescriptor = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollTo',
)
beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  )
  Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  if (scrollToDescriptor)
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', scrollToDescriptor)
  else Reflect.deleteProperty(HTMLElement.prototype, 'scrollTo')
})
function Probe() {
  const current = resolveSlideTheme({ theme: useTheme() })
  return (
    <output data-testid="colors">
      {current.canvas}|{current.foreground}
    </output>
  )
}
const pages = [
  {
    id: 'one',
    label: 'First',
    content: (
      <>
        <Probe />
        <input aria-label="Your answer" defaultValue="Ana" />
      </>
    ),
  },
  { id: 'two', label: 'Second', content: <p>Next page</p> },
]
it('starts dark and toggles all nested wrappers without remounting exercise state', () => {
  const { container, rerender } = render(
    <MaterialTheme>
      <MaterialTheme>
        <MaterialSlideDeck
          label="Lesson"
          pages={pages}
          actions={<button>Notes</button>}
        />
      </MaterialTheme>
    </MaterialTheme>,
  )
  const answer = screen.getByRole('textbox', { name: 'Your answer' })
  fireEvent.change(answer, { target: { value: 'Brazil' } })
  const control = screen.getByRole('button', { name: 'Tema claro' })
  const sound = screen.getByRole('button', { name: 'Answer sounds' })
  const soundState = sound.getAttribute('aria-pressed')
  expect(control).toHaveAttribute('aria-pressed', 'false')
  expect(screen.getByTestId('colors')).toHaveTextContent(
    `${materialDarkTheme.slides.canvas}|${materialDarkTheme.slides.foreground}`,
  )
  expect(
    control.compareDocumentPosition(sound) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy()
  fireEvent.click(control)
  expect(control).toHaveAttribute('aria-pressed', 'true')
  expect(control).toHaveAttribute('title', 'Voltar ao tema escuro')
  expect(screen.getByTestId('colors')).toHaveTextContent(
    `${theme.slides.canvas}|${theme.slides.foreground}`,
  )
  expect(screen.getByRole('textbox', { name: 'Your answer' })).toBe(answer)
  expect(answer).toHaveValue('Brazil')
  expect(sound).toHaveAttribute('aria-pressed', soundState)
  expect(
    container.querySelectorAll('[data-material-theme="dark"]'),
  ).toHaveLength(0)
  rerender(
    <MaterialTheme>
      <MaterialTheme>
        <MaterialSlideDeck
          label="Lesson"
          pages={pages}
          pageId="two"
          actions={<button>Notes</button>}
        />
      </MaterialTheme>
    </MaterialTheme>,
  )
  expect(control).toHaveAttribute('aria-pressed', 'true')
  expect(answer).toHaveValue('Brazil')
  fireEvent.click(control)
  expect(control).toHaveAttribute('aria-pressed', 'false')
  expect(screen.getByTestId('colors')).toHaveTextContent(
    materialDarkTheme.slides.canvas,
  )
})
function LegacyHeader() {
  return (
    <SlideDeck
      label="Experimental"
      pages={pages}
      themeToggle={useMaterialThemeToggle()}
    />
  )
}
it('also exposes the switch to the experimental shell and defaults new presentations to dark', () => {
  const { unmount } = render(
    <MaterialTheme>
      <LegacyHeader />
    </MaterialTheme>,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Tema claro' }))
  expect(screen.getByTestId('colors')).toHaveTextContent(theme.slides.canvas)
  unmount()
  render(<MaterialSlideDeck label="Another lesson" pages={pages} />)
  expect(screen.getByRole('button', { name: 'Tema claro' })).toHaveAttribute(
    'aria-pressed',
    'false',
  )
})
it('keeps the generic library opt-in and renders the material dark on the server', () => {
  render(
    <SlideDeck
      label="Generic"
      pages={[{ id: 'generic', label: 'Generic', content: 'Hello' }]}
    />,
  )
  expect(
    screen.queryByRole('button', { name: 'Tema claro' }),
  ).not.toBeInTheDocument()
  const html = renderToString(<MaterialSlideDeck label="SSR" pages={pages} />)
  expect(html).toContain('data-material-theme="dark"')
  expect(html).toContain('aria-label="Tema claro" aria-pressed="false"')
})
