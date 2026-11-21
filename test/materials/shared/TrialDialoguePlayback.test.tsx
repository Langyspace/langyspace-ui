import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TrialA1DialoguePage } from '../../../stories/materials/TrialA1/TrialA1DialoguePage'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import { conversationRecordings } from '../../../stories/materials/shared/conversationRecordings'

/** Native-event fixture only: no playback or perceptual assertion. */
class Media {
  static all: Media[] = []
  static nextPlay: Promise<void> | undefined
  src: string
  paused = true
  ended = false
  error = null
  currentTime = 0
  playbackRate = 1
  onplaying: (() => void) | null = null
  onwaiting: (() => void) | null = null
  onpause: (() => void) | null = null
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  play = vi.fn(() => {
    this.paused = false
    const p = Media.nextPlay ?? Promise.resolve()
    Media.nextPlay = undefined
    return p
  })
  pause = vi.fn(() => {
    this.paused = true
  })
  load = vi.fn(() => {
    this.ended = false
    this.currentTime = 0
  })
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  constructor(src = '') {
    this.src = src
    Media.all.push(this)
  }
  playing() {
    this.ended = false
    this.paused = false
    this.onplaying?.()
  }
  end() {
    this.ended = true
    this.paused = true
    this.onended?.()
  }
}
beforeEach(() => {
  Media.all = []
  Media.nextPlay = undefined
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
  vi.stubGlobal('Audio', Media)
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('recorded model and canonical bubble state', () => {
  it('tracks each spoken line with one transport and clears on pause, finish and page exit', () => {
    const { container, rerender } = render(
      <MaterialTheme>
        <TrialA1DialoguePage active />
      </MaterialTheme>,
    )
    const turns = conversationRecordings['TrialA1:s3']!.turns
    const currentLine = () => container.querySelector('[aria-current="true"]')
    const control = screen.getByRole('button', {
      name: /Play dialogue: Do you like the park/,
    })
    expect(Media.all).toHaveLength(turns.length)
    fireEvent.click(control)
    expect(currentLine()).toBeNull()
    const first = Media.all.find((media) => media.src === turns[0]!.src)!
    act(() => first.playing())
    expect(currentLine()).toHaveTextContent(turns[0]!.text)
    expect(container.querySelectorAll('[aria-current="true"]')).toHaveLength(1)
    expect(getComputedStyle(currentLine()!).outline).toMatch(/^2px solid /)
    fireEvent.click(screen.getByRole('button', { name: turns[0]!.text }))
    expect(currentLine()).toHaveTextContent(turns[0]!.text)
    fireEvent.click(control)
    expect(currentLine()).toBeNull()
    fireEvent.click(control)
    act(() => first.playing())
    expect(currentLine()).toHaveTextContent(turns[0]!.text)
    for (const turn of turns) {
      const media = Media.all.find((item) => item.src === turn.src)!
      act(() => media.playing())
      expect(currentLine()).toHaveTextContent(turn.text)
      act(() => media.end())
      expect(currentLine()).toBeNull()
    }
    fireEvent.click(control)
    act(() => first.playing())
    rerender(
      <MaterialTheme>
        <TrialA1DialoguePage active={false} />
      </MaterialTheme>,
    )
    expect(currentLine()).toBeNull()
    expect(first.pause).toHaveBeenCalled()
  })

  it('keeps the model page focused on its recording without stage tabs or comprehension', () => {
    render(
      <MaterialTheme>
        <TrialA1DialoguePage active />
      </MaterialTheme>,
    )
    expect(
      screen.queryByRole('group', { name: 'Conversation stages' }),
    ).toBeNull()
    expect(
      screen.queryByRole('button', { name: /Rehearse|Without the script/ }),
    ).toBeNull()
    expect(
      screen.queryByText('Comprehension questions', { exact: true }),
    ).toBeNull()
    expect(screen.queryByRole('complementary')).toBeNull()
    expect(
      screen.getByRole('button', {
        name: /Play dialogue: Do you like the park/,
      }),
    ).toBeEnabled()
  })

  it('keeps gap reveal, translation and playback independent inside the unified bubble', () => {
    const reveal = vi.fn(),
      translate = vi.fn(),
      play = vi.fn()
    const lines = [
      {
        id: 'kim',
        speaker: 'Kim',
        side: 'start' as const,
        content: 'I like music.',
        parts: ['I ', { id: 'verb', answer: 'like' }, ' music.'],
        translation: 'Eu gosto de música.',
        audioLabel: 'Listen to Kim',
      },
    ]
    const { container, rerender } = render(
      <LearningDialogue
        lines={lines}
        playingId="kim"
        onRevealGap={reveal}
        onTranslate={translate}
        onPlay={play}
      />,
    )
    const gap = screen.getByRole('button', { name: 'Reveal answer 2' })
    expect(gap).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(gap)
    expect(reveal).toHaveBeenCalledExactlyOnceWith('verb', 'kim')
    expect(translate).not.toHaveBeenCalled()
    fireEvent.keyDown(gap, { key: 'Enter' })
    expect(translate).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Kim' }))
    expect(play).toHaveBeenCalledExactlyOnceWith('kim')
    expect(reveal).toHaveBeenCalledTimes(1)
    rerender(
      <LearningDialogue
        lines={lines}
        revealedGapIds={['verb']}
        translatedIds={['kim']}
        onRevealGap={reveal}
        onTranslate={translate}
        onPlay={play}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Reveal answer 2' }),
    ).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('like', { exact: true })).toBeVisible()
    expect(screen.getByText('Eu gosto de música.')).toBeVisible()
    expect(container.querySelector('[aria-current="true"]')).toBeNull()
  })
})
