import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { QuestionRoulette } from '../../../src/components/Exercise/QuestionRoulette'
import {
  rouletteAngle,
  rouletteBank,
  rouletteSegments,
  rouletteSpinDuration,
  rouletteTickTimes,
} from '../../../src/components/Exercise/QuestionRoulette.logic'
import type { QuestionRouletteTopic } from '../../../src/components/Exercise/QuestionRoulette.types'
import * as feedback from '../../../src/internal/feedbackSounds'

const topics: readonly QuestionRouletteTopic[] = [
  {
    id: 'work',
    label: 'Work',
    questions: [
      {
        id: 'a',
        prompt: 'What makes a team work well?',
        hint: 'Give one real example.',
      },
      {
        id: 'b',
        prompt: 'What would you change about work?',
        hint: 'Explain your reason.',
      },
      { id: 'c', prompt: 'Which skill would you like to improve?' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel',
    questions: [{ id: 'd', prompt: 'Tell me about an unexpected trip.' }],
  },
]

beforeEach(() => {
  vi.useFakeTimers()
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  )
  vi.spyOn(Math, 'random').mockReturnValue(0)
  vi.spyOn(feedback, 'playFeedbackSound').mockImplementation(() => undefined)
  vi.spyOn(feedback, 'playRouletteSpinSound').mockReturnValue(vi.fn())
})
afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})
function finishSpin() {
  act(() => vi.advanceTimersByTime(rouletteSpinDuration))
}
function spin() {
  fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
  finishSpin()
}

describe('QuestionRoulette', () => {
  it('renders safely on the server without drawing a question or accessing media', () => {
    const html = renderToString(<QuestionRoulette topics={topics} />)
    expect(html).toContain('lsui-sc-question-roulette')
    expect(html).toContain('Spin')
    expect(html).not.toContain(topics[0]!.questions[0]!.prompt)
  })

  it('reveals one final question, announces it and invokes the consumer once', () => {
    const onDraw = vi.fn()
    render(<QuestionRoulette topics={topics} onDraw={onDraw} />)
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    expect(screen.getByRole('button', { name: 'Spinning' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Spinning' })).toHaveTextContent(
      /^Spin$/,
    )
    expect(screen.getByRole('status')).not.toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
    act(() => vi.advanceTimersByTime(rouletteSpinDuration - 1))
    expect(screen.getByRole('status')).not.toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
    expect(onDraw).not.toHaveBeenCalled()
    act(() => vi.advanceTimersByTime(1))
    expect(screen.getByRole('status')).toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('1 / 4')
    expect(onDraw).toHaveBeenCalledExactlyOnceWith({
      topic: topics[0],
      question: topics[0]!.questions[0],
      drawNumber: 1,
    })
  })

  it('keeps the same header and progress mounted while drawing the next question', () => {
    render(<QuestionRoulette topics={topics} />)
    spin()
    const progress = screen.getByLabelText('Questions drawn')
    const header = progress.parentElement
    expect(header).toHaveTextContent('Work')
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    expect(screen.getByLabelText('Questions drawn')).toBe(progress)
    expect(progress.parentElement).toBe(header)
    expect(header).toHaveTextContent('Spinning')
    expect(progress).toHaveTextContent('1 / 4')
    finishSpin()
    expect(progress.parentElement).toBe(header)
    expect(header).toHaveTextContent('Work')
    expect(progress).toHaveTextContent('2 / 4')
  })

  it('times the spin texture to boundary crossings and the same easing as the wheel', () => {
    const bank = rouletteBank(
      Array.from({ length: 8 }, (_, index) => ({
        id: `topic-${index}`,
        label: `Topic ${index}`,
        weight: [6, 5, 4, 3][index % 4]!,
        questions: [{ id: 'one', prompt: 'A question?' }],
      })),
    )
    const segments = rouletteSegments(bank)
    const times = rouletteTickTimes(0, rouletteAngle(0, 0), segments)
    expect(times).toHaveLength(48)
    expect(times[0]).toBeGreaterThan(0)
    expect(times.at(-1)).toBeLessThan(rouletteSpinDuration / 1_000)
    for (let i = 1; i < times.length; i++)
      expect(times[i]).toBeGreaterThan(times[i - 1]!)
    expect(times.at(-1)! - times.at(-5)!).toBeGreaterThan(times[4]! - times[0]!)
  })

  it('keeps the previous question hidden throughout the next suspenseful spin', () => {
    render(<QuestionRoulette topics={topics} />)
    spin()
    expect(screen.getByRole('status')).toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    expect(
      screen.queryByText(topics[0]!.questions[0]!.prompt),
    ).not.toBeInTheDocument()
    act(() => vi.advanceTimersByTime(rouletteSpinDuration - 1))
    expect(screen.getByRole('status')).toHaveTextContent('?')
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('1 / 4')
    act(() => vi.advanceTimersByTime(1))
    expect(screen.getByRole('status')).toHaveTextContent(
      topics[0]!.questions[1]!.prompt,
    )
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('2 / 4')
  })

  it('does not repeat until exhaustion and starts a new round only on explicit activation', () => {
    const onDraw = vi.fn()
    render(<QuestionRoulette topics={topics} onDraw={onDraw} />)
    for (let i = 0; i < 4; i++) spin()
    expect(
      new Set(onDraw.mock.calls.map(([draw]) => draw.question.id)).size,
    ).toBe(4)
    const last = screen.getByRole('status').textContent
    expect(last).toBe(topics[1]!.questions[0]!.prompt)
    expect(
      screen.queryByRole('button', { name: 'Spin' }),
    ).not.toBeInTheDocument()
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('4 / 4')
    fireEvent.click(screen.getByRole('button', { name: 'New round' }))
    finishSpin()
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('1 / 4')
    expect(onDraw.mock.calls[4]![0].drawNumber).toBe(1)
  })

  it('samples remaining questions uniformly rather than favoring small topics', () => {
    vi.mocked(Math.random).mockReturnValue(0.7)
    const onDraw = vi.fn()
    render(<QuestionRoulette topics={topics} onDraw={onDraw} />)
    spin()
    expect(onDraw.mock.calls[0]![0].question.id).toBe('c')
    expect(onDraw.mock.calls[0]![0].topic.id).toBe('work')
  })

  it('locks repeated clicks during motion without losing keyboard focus', async () => {
    const onDraw = vi.fn()
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<QuestionRoulette topics={topics} onDraw={onDraw} />)
    const button = screen.getByRole('button', { name: 'Spin' })
    button.focus()
    await user.keyboard('{Enter}{Enter}')
    fireEvent.click(button)
    await waitFor(() => expect(onDraw).toHaveBeenCalledTimes(1), {
      timeout: rouletteSpinDuration + 1_000,
    })
    expect(button).toHaveFocus()
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('1 / 4')
  })

  it('cancels a pending draw when inactive without consuming a question', () => {
    const onDraw = vi.fn()
    const { rerender } = render(
      <QuestionRoulette topics={topics} onDraw={onDraw} />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    rerender(<QuestionRoulette topics={topics} onDraw={onDraw} disabled />)
    finishSpin()
    expect(onDraw).not.toHaveBeenCalled()
    expect(
      vi.mocked(feedback.playRouletteSpinSound).mock.results[0]!.value,
    ).toHaveBeenCalledOnce()
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('0 / 4')
    rerender(<QuestionRoulette topics={topics} onDraw={onDraw} />)
    spin()
    expect(onDraw).toHaveBeenCalledTimes(1)
    expect(onDraw.mock.calls[0]![0].question.id).toBe('a')
  })

  it('clears a pending timer when removed', () => {
    const onDraw = vi.fn()
    const { unmount } = render(
      <QuestionRoulette topics={topics} onDraw={onDraw} />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    unmount()
    finishSpin()
    expect(onDraw).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('preserves an equivalent bank but resets when the authored content changes', () => {
    const { rerender } = render(<QuestionRoulette topics={topics} />)
    spin()
    rerender(<QuestionRoulette topics={JSON.parse(JSON.stringify(topics))} />)
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('1 / 4')
    rerender(
      <QuestionRoulette
        topics={[
          {
            ...topics[0]!,
            questions: [{ id: 'a', prompt: 'A different question?' }],
          },
        ]}
      />,
    )
    expect(screen.getByLabelText('Questions drawn')).toHaveTextContent('0 / 1')
    expect(
      screen.queryByText(topics[0]!.questions[0]!.prompt),
    ).not.toBeInTheDocument()
  })

  it('shows optional speaking support and clears it on the next question', () => {
    render(<QuestionRoulette topics={topics} />)
    spin()
    fireEvent.click(screen.getByRole('button', { name: 'Show a speaking tip' }))
    expect(screen.getByText('Give one real example.')).toBeVisible()
    spin()
    expect(screen.queryByText('Give one real example.')).not.toBeInTheDocument()
    expect(screen.queryByText('Explain your reason.')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Show a speaking tip' }))
    expect(screen.getByText('Explain your reason.')).toBeVisible()
  })

  it('honors reduced motion without creating an animation timer', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
    } as MediaQueryList)
    render(<QuestionRoulette topics={topics} />)
    fireEvent.click(screen.getByRole('button', { name: 'Spin' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
    expect(vi.getTimerCount()).toBe(0)
    expect(feedback.playRouletteSpinSound).not.toHaveBeenCalled()
  })

  it('handles empty and invalid banks and recovers when valid questions arrive', () => {
    const { rerender } = render(<QuestionRoulette topics={[]} />)
    expect(screen.getByRole('button', { name: 'Spin' })).toBeDisabled()
    expect(screen.getByRole('status')).toHaveTextContent(
      'No questions available',
    )
    rerender(<QuestionRoulette topics={[topics[0]!, topics[0]!]} />)
    expect(screen.getByRole('button', { name: 'Spin' })).toBeDisabled()
    rerender(<QuestionRoulette topics={[{ ...topics[0]!, weight: 0 }]} />)
    expect(screen.getByRole('button', { name: 'Spin' })).toBeDisabled()
    rerender(<QuestionRoulette topics={topics} />)
    expect(screen.getByRole('button', { name: 'Spin' })).toBeEnabled()
    spin()
    expect(screen.getByRole('status')).toHaveTextContent(
      topics[0]!.questions[0]!.prompt,
    )
  })

  it('keeps eight mirrored sectors with four distinct sizes throughout a round', () => {
    const mirrored = Array.from({ length: 8 }, (_, index) => ({
      id: `topic-${index}`,
      label: `Topic ${index}`,
      weight: [6, 5, 4, 3][index % 4]!,
      questions: [{ id: 'one', prompt: `Question ${index}?` }],
    }))
    const segments = rouletteSegments(rouletteBank(mirrored))
    expect(segments).toHaveLength(8)
    expect(
      new Set(
        segments.map((segment) => Math.round(segment.end - segment.start)),
      ).size,
    ).toBe(4)
    for (let index = 0; index < 4; index++) {
      const top = segments[index]!
      const opposite = segments[index + 4]!
      expect(top.end - top.start).toBeCloseTo([60, 50, 40, 30][index]!)
      expect(opposite.end - opposite.start).toBeCloseTo(top.end - top.start)
      expect(opposite.center - top.center).toBeCloseTo(180)
      const stopped = rouletteAngle(0, top.center)
      const delta = (stopped + top.center) % 360
      expect(Math.min(delta, 360 - delta)).toBeCloseTo(0, 6)
    }
    const { container } = render(<QuestionRoulette topics={mirrored} />)
    const sectorPaths = () =>
      [...container.querySelectorAll('svg[viewBox="0 0 320 320"] path')].map(
        (path) => path.getAttribute('d'),
      )
    const initialPaths = sectorPaths()
    expect(initialPaths).toHaveLength(8)
    spin()
    expect(sectorPaths()).toEqual(initialPaths)
    spin()
    expect(sectorPaths()).toEqual(initialPaths)
  })

  it('uses explicit topic weights while excluding previously drawn questions', () => {
    const weighted = [
      { ...topics[0]!, weight: 1 },
      { ...topics[1]!, weight: 3 },
    ]
    vi.mocked(Math.random).mockReturnValue(0.5)
    const onDraw = vi.fn()
    render(<QuestionRoulette topics={weighted} onDraw={onDraw} />)
    spin()
    expect(onDraw.mock.calls[0]![0].topic.id).toBe('travel')
    spin()
    expect(onDraw.mock.calls[1]![0].topic.id).toBe('work')
    expect(
      new Set(onDraw.mock.calls.map(([draw]) => draw.question.id)).size,
    ).toBe(2)
  })

  it('keeps the selected sector center aligned with the top pointer after repeated spins', () => {
    expect(rouletteAngle(0, 60)).toBe(2460)
    expect(rouletteAngle(2460, 180)).toBe(4860)
    for (let count = 1; count <= 8; count++) {
      let rotation = 0
      for (let index = 0; index < count; index++) {
        const next = rouletteAngle(rotation, (index * 360) / count)
        expect(next).toBeGreaterThanOrEqual(rotation + 2160)
        const delta = (next + (index * 360) / count) % 360
        expect(Math.min(delta, 360 - delta)).toBeCloseTo(0, 6)
        rotation = next
      }
    }
  })
})
