import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { expect, it } from 'vitest'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { createTheme } from '../../../src/foundations/theme/createTheme'

it('keeps common page content semantic and passes native attributes and ref', () => {
  const ref = createRef<HTMLDivElement>()
  render(
    <SlidePage
      ref={ref}
      data-testid="slide"
      title="Listening Practice"
      lead={<h1>Introduce yourself</h1>}
      eyebrow="Listening"
      instruction="Ouça e responda."
      tools={<button>Dica</button>}
    >
      <p>Conteúdo do exercício</p>
    </SlidePage>,
  )
  expect(
    screen.getByRole('heading', { name: 'Listening Practice' }),
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Dica' })).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { level: 1, name: 'Introduce yourself' }),
  ).toBeInTheDocument()
  expect(screen.getByText('Ouça e responda.')).toBeInTheDocument()
  expect(ref.current).toBe(screen.getByTestId('slide'))
})

it('renders standalone, inverse and custom theme variants on the server', () => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(
      sheet.collectStyles(
        <ThemeProvider theme={createTheme({ slides: { canvas: '#123456' } })}>
          <SlidePage title="Aula" width="focused">
            Conteúdo
          </SlidePage>
          <SlidePage title="Introdução" tone="inverse">
            Goal
          </SlidePage>
        </ThemeProvider>,
      ),
    )
    expect(html).toContain('lsui-sc-slide-page')
    expect(sheet.getStyleTags()).toContain('#123456')
    expect(sheet.getStyleTags()).toContain('37.5rem')
  } finally {
    sheet.seal()
  }
})
