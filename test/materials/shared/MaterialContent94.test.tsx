import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ReviewedLesson } from '../../../stories/materials/shared/ReviewedLesson'
import type { ReviewedPage } from '../../../stories/materials/shared/ReviewedLesson.types'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import { PromptExercise } from '../../../stories/materials/shared/LessonExercises'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import source from '../../../stories/materials/A101/A101.review.json'
import { createBrowserStorage } from '../../helpers/browserStorage'

let storage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  Object.defineProperty(Element.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
  storage = createBrowserStorage()
  vi.stubGlobal('localStorage', storage.storage)
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: true })),
  )
})
afterEach(() => {
  vi.unstubAllGlobals()
  storage.dispose()
})

describe('authored material question purpose', () => {
  it('keeps comprehension as a numbered answer disclosure beside the recorded conversation', () => {
    const page = source.pages.find((x) => x.id === 's6') as ReviewedPage
    const { container } = render(
      <ReviewedLesson
        code="A1.01"
        title={source.title}
        pages={[page]}
        recordings={[]}
        initialPageId="s6"
      />,
    )
    const slide = within(
      container.querySelector('[data-slide-id="s6"]') as HTMLElement,
    )
    const question = slide.getByRole('button', {
      name: page.kind === 'dialogue' ? page.questions![0]!.prompt : '',
    })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(within(question).getByText('1')).toBeInTheDocument()
    expect(slide.queryByText('You')).not.toBeInTheDocument()
    fireEvent.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    if (page.kind === 'dialogue')
      expect(slide.getByText(page.questions![0]!.answer)).toBeVisible()
    fireEvent.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })
  it('keeps the personal introduction as three teacher/learner pairs', () => {
    const page = source.pages.find((x) => x.id === 's15') as ReviewedPage
    const { container } = render(
      <ReviewedLesson
        code="A1.01"
        title={source.title}
        pages={[page]}
        recordings={[]}
        initialPageId="s15"
      />,
    )
    const slide = within(
      container.querySelector('[data-slide-id="s15"]') as HTMLElement,
    )
    expect(slide.getAllByText('You')).toHaveLength(3)
    expect(slide.getByText('What’s your name?')).toBeVisible()
    expect(slide.getByText('Where are you from?')).toBeVisible()
    expect(slide.getByText('How are you today?')).toBeVisible()
  })
  it('reveals hints in order without opening the answer, then allows independent answer checks', () => {
    render(
      <MaterialTheme>
        <PromptExercise
          items={[
            {
              id: 'one',
              prompt: 'Who is speaking?',
              hint: 'Listen to the greeting',
              answer: 'Kim',
            },
            {
              id: 'two',
              prompt: 'Where is she?',
              hint: 'Listen for a place',
              answer: 'At the café',
            },
          ]}
        />
      </MaterialTheme>,
    )
    const first = screen.getByRole('button', { name: 'Who is speaking?' })
    fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
    expect(screen.getByText('Listen to the greeting')).toBeVisible()
    expect(screen.queryByText('Listen for a place')).not.toBeInTheDocument()
    expect(first).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
    expect(screen.getByText('Listen for a place')).toBeVisible()
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Hide hints' }))
    expect(screen.queryByText('Listen to the greeting')).not.toBeInTheDocument()
    expect(first).toHaveAttribute('aria-expanded', 'true')
  })
  it('keeps an open mission actionable without presenting its placeholder as an answer', () => {
    render(
      <MaterialTheme>
        <CourseActivity
          activity={{
            type: 'facts',
            title: 'Arrival card',
            facts: [{ id: 'stay', label: 'Stay', value: 'Five days' }],
            questionPurpose: 'response',
            questions: [
              {
                id: 'arrival',
                prompt: 'Where are you staying, and for how long?',
                cue: 'Answer using your travel card',
                hint: 'I’m staying at … for … days',
                answer: 'One possible response',
              },
            ],
          }}
        />
      </MaterialTheme>,
    )
    expect(screen.getByText('Answer using your travel card')).toBeVisible()
    expect(
      screen.queryByRole('button', {
        name: 'Where are you staying, and for how long?',
      }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText('One possible response')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
    expect(screen.getByText('I’m staying at … for … days')).toBeVisible()
  })
})
