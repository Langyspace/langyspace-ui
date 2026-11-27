import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { ReviewedLesson } from '../../../stories/materials/shared/ReviewedLesson'
import type { ReviewedPage } from '../../../stories/materials/shared/ReviewedLesson.types'
import prepared from '../../../stories/materials/Course/lessons/b1-01.module'

const page = prepared.data.pages.find(
  (p) => p.id === 's_source0',
) as ReviewedPage
const scrollDescriptor = Object.getOwnPropertyDescriptor(
  Element.prototype,
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
  vi.stubGlobal('matchMedia', () => ({ matches: false }))
  Object.defineProperty(Element.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {})
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    Object.defineProperty(this, 'paused', { configurable: true, value: true })
  })
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    Object.defineProperty(this, 'paused', { configurable: true, value: false })
    this.dispatchEvent(new Event('playing'))
    return Promise.resolve()
  })
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  if (scrollDescriptor)
    Object.defineProperty(Element.prototype, 'scrollTo', scrollDescriptor)
  else Reflect.deleteProperty(Element.prototype, 'scrollTo')
})

it('renders readable title-and-paragraph content on the server without email metadata', () => {
  const html = renderToString(
    <ExercisePanel variant="reading" title="A busy week">
      <p>I’ve been painting all week.</p>
      <p>The kitchen is finished.</p>
    </ExercisePanel>,
  )
  expect(html).toContain('A busy week')
  expect(html).toContain('I’ve been painting all week.')
  expect(html).not.toContain('Subject')
  expect(html).not.toContain('From')
})

it('places three interpretation questions beside the B1 reading and binds the whole narrated text for play/pause/resume', async () => {
  const view = render(
    <ReviewedLesson
      code="B1.01"
      title="A lesson"
      pages={[prepared.data.pages[0]!, page]}
      recordings={prepared.recordings}
      initialPageId={page.id}
    />,
  )
  const slide = within(
    view.container.querySelector('[data-slide-id="s_source0"]') as HTMLElement,
  )
  const article = slide.getByRole('article', { name: 'A busy week at home' })
  expect(article.querySelectorAll('p')).toHaveLength(3)
  expect(slide.queryByText('From')).toBeNull()
  expect(slide.queryByText('Subject')).toBeNull()
  expect(slide.getByRole('heading', { name: /Questions/i })).toBeVisible()
  expect(
    view.container
      .querySelector('[data-question-list]')
      ?.querySelectorAll('li'),
  ).toHaveLength(3)
  const play = slide.getByRole('button', { name: `Play audio: ${page.title}` })
  expect(play).toBeEnabled()
  await act(async () => fireEvent.click(play))
  expect(
    slide.getByRole('button', { name: `Pause audio: ${page.title}` }),
  ).toHaveAttribute('aria-pressed', 'true')
  const media = vi
    .mocked(HTMLMediaElement.prototype.play)
    .mock.instances.at(-1) as HTMLAudioElement
  expect(media.src).toContain('B101-R145.1.mp3')
  fireEvent.click(
    slide.getByRole('button', { name: `Pause audio: ${page.title}` }),
  )
  await act(async () =>
    fireEvent.click(
      slide.getByRole('button', { name: `Continue audio: ${page.title}` }),
    ),
  )
  expect(
    slide.getByRole('button', { name: `Pause audio: ${page.title}` }),
  ).toBeInTheDocument()
  fireEvent.click(
    slide.getByRole('button', { name: /Which rooms has Ana finished/ }),
  )
  expect(
    slide.getByText(
      'She has finished the living room and the kitchen. The bedroom is next.',
    ),
  ).toBeVisible()
  fireEvent.click(slide.getByRole('button', { name: 'Show next hint' }))
  expect(
    slide.getByText('Two rooms are finished; one room is still waiting'),
  ).toBeVisible()
})

it('preserves From/Subject for actual authored message sources', () => {
  const message: ReviewedPage = {
    id: 'letter',
    kind: 'source',
    title: 'Read the email',
    eyebrow: 'Reading',
    instruction: 'Read the email',
    minutes: 2,
    author: 'Laura',
    subject: 'The meeting',
    paragraphs: ['Thanks for the update.'],
  }
  render(
    <ReviewedLesson
      code="C1.01"
      title="A lesson"
      pages={[message]}
      recordings={[]}
      initialPageId="letter"
    />,
  )
  expect(screen.getByText('From')).toBeVisible()
  expect(screen.getByText('Subject')).toBeVisible()
  expect(screen.getByText('Laura')).toBeVisible()
})
