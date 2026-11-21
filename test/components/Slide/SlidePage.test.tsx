import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { expect, it } from 'vitest'
import { presentationMedia } from '../../../src/foundations/layout/presentationMedia'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { createTheme } from '../../../src/foundations/theme/createTheme'

it('keeps an optional cover and heading in the introduction beside review content', () => {
  const { container } = render(
    <SlidePage
      title="People in my life"
      cover={{ src: '/cover.webp', alt: 'Family cover' }}
      layout="split"
    >
      <button>Review a word</button>
    </SlidePage>,
  )
  const intro = container.querySelector('[data-slide-introduction]')
  expect(intro).toContainElement(
    screen.getByRole('img', { name: 'Family cover' }),
  )
  expect(intro).toContainElement(
    screen.getByRole('heading', { name: 'People in my life' }),
  )
  expect(intro).not.toContainElement(
    screen.getByRole('button', { name: 'Review a word' }),
  )
  expect(container.firstChild).not.toHaveAttribute('cover')
  expect(
    screen
      .getByRole('img')
      .compareDocumentPosition(
        screen.getByRole('heading', { name: 'People in my life' }),
      ) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy()
})

it.each(['stacked', 'split'] as const)(
  'places the heading before the cover in visual reading order for %s',
  (layout) => {
    render(
      <SlidePage
        data-testid="ordered-cover"
        title="Your lesson is complete"
        instruction="Keep learning"
        cover={{ src: '/cover.webp', alt: 'Lesson cover' }}
        coverPlacement="after-heading"
        layout={layout}
      >
        <p>Next step</p>
      </SlidePage>,
    )
    expect(
      screen
        .getByRole('heading', { name: 'Your lesson is complete' })
        .compareDocumentPosition(
          screen.getByRole('img', { name: 'Lesson cover' }),
        ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      screen
        .getByText('Keep learning')
        .compareDocumentPosition(
          screen.getByRole('img', { name: 'Lesson cover' }),
        ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(screen.getByTestId('ordered-cover')).not.toHaveAttribute(
      'coverPlacement',
    )
  },
)

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

it('fits one common header/body column to presentation media geometry', () => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(
      sheet.collectStyles(
        <SlidePage
          title="Name the scene"
          width={{ mediaAspectRatio: 2 }}
          instruction="Try, then check."
        >
          <img src="/scene.png" alt="Scene" />
        </SlidePage>,
      ),
    )
    const css = sheet.getStyleTags().replace(/\s+/g, '')
    expect(css).toContain(
      `max-width:min(70rem,calc(${presentationMedia.viewportHeight}*2),calc(${presentationMedia.maximumHeight}*2))`,
    )
    expect(html).not.toContain('mediaAspectRatio=')
    expect(html).toContain('Name the scene')
    expect(html).toContain('Try, then check.')
  } finally {
    sheet.seal()
  }
})

it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
  'falls back safely for invalid media ratio %s',
  (ratio) => {
    const sheet = new ServerStyleSheet()
    try {
      renderToString(
        sheet.collectStyles(
          <SlidePage title="Scene" width={{ mediaAspectRatio: ratio }}>
            Body
          </SlidePage>,
        ),
      )
      const css = sheet.getStyleTags()
      expect(css).toContain('max-width:65rem')
      expect(css).not.toMatch(/NaN|Infinity/)
    } finally {
      sheet.seal()
    }
  },
)

it.each(['split', 'questions'] as const)(
  'keeps the whole composition width for %s layouts',
  (kind) => {
    const sheet = new ServerStyleSheet()
    try {
      renderToString(
        sheet.collectStyles(
          <SlidePage
            title="Two columns"
            width={{ mediaAspectRatio: 2 }}
            layout={kind === 'split' ? 'split' : 'stacked'}
            questions={kind === 'questions' ? <p>Question</p> : undefined}
          >
            Body
          </SlidePage>,
        ),
      )
      const css = sheet.getStyleTags().replace(/\s+/g, '')
      expect(css).toContain('max-width:70rem')
      expect(css).not.toContain(`calc(${presentationMedia.viewportHeight}*2)`)
    } finally {
      sheet.seal()
    }
  },
)

it.each([
  ['focused', '37.5rem'],
  ['standard', '47.5rem'],
  ['wide', '65rem'],
  ['reading', '56.25rem'],
  ['exercise', '55rem'],
  ['conversation', '60rem'],
  ['expanded', '70rem'],
] as const)('preserves the existing %s width preset', (width, expected) => {
  const sheet = new ServerStyleSheet()
  try {
    renderToString(
      sheet.collectStyles(
        <SlidePage title="Existing layout" width={width}>
          Body
        </SlidePage>,
      ),
    )
    const css = sheet.getStyleTags().replace(/\s+/g, '')
    expect(css).toContain(`max-width:${expected}`)
    expect(css).not.toContain(`calc(${presentationMedia.viewportHeight}*`)
  } finally {
    sheet.seal()
  }
})
