import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { IconButton } from '../../src/components/IconButton/IconButton'
import { VocabularyControls } from '../../src/components/Exercise/VocabularyControls'
import { OralReview } from '../../src/components/InteractiveMaterial/OralReview'
import { VoiceMessageExercise } from '../../src/components/VoiceMessage/VoiceMessageExercise'
import { QuestionList } from '../../src/components/Exercise/QuestionList'
import { RevealCard } from '../../src/components/Exercise/RevealCard'
import { AudioSequenceControls } from '../../src/components/InteractiveMaterial/AudioSequenceControls'
import {
  observeFeedbackMedia,
  playFeedbackSound,
  setFeedbackSoundsEnabled,
  setFeedbackSoundsEnabledFromControl,
  feedbackSoundsEnabled,
  stopFeedbackSounds,
} from '../../src/internal/feedbackSounds'
import { feedbackSoundDesign as design } from '../../src/foundations/audio/feedbackSoundDesign'

const createGainFixture = () => ({
  gain: {
    value: 0,
    cancelScheduledValues: vi.fn(),
    setTargetAtTime: vi.fn(),
    setValueAtTime: vi.fn(),
    linearRampToValueAtTime: vi.fn(),
    exponentialRampToValueAtTime: vi.fn(),
  },
  connect: vi.fn(),
  disconnect: vi.fn(),
})
const createOscillatorFixture = () => ({
  type: '',
  frequency: { value: 0 },
  connect: vi.fn(),
  disconnect: vi.fn(),
  start: vi.fn(),
  stop: vi.fn(),
  onended: null as (() => void) | null,
})
const createBufferSourceFixture = () => ({
  buffer: null as AudioBuffer | null,
  connect: vi.fn(),
  disconnect: vi.fn(),
  start: vi.fn(),
  stop: vi.fn(),
  onended: null as (() => void) | null,
})

class AudioContextFixture {
  static all: AudioContextFixture[] = []
  state = 'running'
  currentTime = 10
  sampleRate = 48000
  destination = {}
  gains: ReturnType<typeof createGainFixture>[] = []
  oscillators: ReturnType<typeof createOscillatorFixture>[] = []
  sources: ReturnType<typeof createBufferSourceFixture>[] = []
  resume = vi.fn(() => {
    this.state = 'running'
    return Promise.resolve()
  })
  createGain() {
    const node = createGainFixture()
    this.gains.push(node)
    return node
  }
  createOscillator() {
    const node = createOscillatorFixture()
    this.oscillators.push(node)
    return node
  }
  createBuffer(_channels: number, length: number, sampleRate: number) {
    const samples = new Float32Array(length)
    return { duration: length / sampleRate, getChannelData: () => samples }
  }
  createBufferSource() {
    const source = createBufferSourceFixture()
    this.sources.push(source)
    return source
  }
  constructor() {
    AudioContextFixture.all.push(this)
  }
}

beforeEach(() => {
  AudioContextFixture.all = []
  vi.stubGlobal('AudioContext', AudioContextFixture)
  setFeedbackSoundsEnabled(true)
})
afterEach(() => {
  stopFeedbackSounds()
  for (const context of AudioContextFixture.all) context.state = 'closed'
  vi.unstubAllGlobals()
})
const latest = () => AudioContextFixture.all.at(-1)!

describe('Shared hint earcon', () => {
  it('plays once for the canonical hint action, never hover or a disabled hint, and acknowledges the model eye too', () => {
    const onHint = vi.fn()
    const onModel = vi.fn()
    const { rerender } = render(
      <VocabularyControls
        showInitial={false}
        onToggleInitial={onHint}
        onToggleAll={onModel}
      />,
    )
    const hint = screen.getByRole('button', { name: 'Hint: first letter' })
    fireEvent.mouseOver(hint)
    expect(AudioContextFixture.all).toHaveLength(0)
    fireEvent.click(hint)
    expect(onHint).toHaveBeenCalledOnce()
    expect(latest().oscillators).toHaveLength(2)
    fireEvent.click(screen.getByRole('button', { name: 'Show all words' }))
    expect(onModel).toHaveBeenCalledOnce()
    expect(latest().oscillators).toHaveLength(4)
    rerender(
      <VocabularyControls
        showInitial={false}
        hintDisabled
        onToggleInitial={onHint}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Hint: first letter' }))
    expect(onHint).toHaveBeenCalledOnce()
  })

  it('respects the existing mute preference and caller cancellation without blocking the hint', () => {
    const onHint = vi.fn()
    render(
      <>
        <VocabularyControls showInitial={false} onToggleInitial={onHint} />
        <IconButton
          aria-label="Cancelled hint"
          feedbackSound="hint"
          onClick={(event) => event.preventDefault()}
        >
          <svg />
        </IconButton>
        <IconButton aria-label="Loading hint" feedbackSound="hint" loading>
          <svg />
        </IconButton>
      </>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Cancelled hint' }))
    fireEvent.click(screen.getByRole('button', { name: 'Loading hint' }))
    expect(AudioContextFixture.all).toHaveLength(0)
    setFeedbackSoundsEnabled(false)
    fireEvent.click(screen.getByRole('button', { name: 'Hint: first letter' }))
    expect(onHint).toHaveBeenCalledOnce()
    expect(AudioContextFixture.all).toHaveLength(0)
    expect(
      screen.getByRole('button', { name: 'Cancelled hint' }),
    ).not.toHaveAttribute('feedbackSound')
  })

  it('keeps the hint brief and quieter, replaces repeated earcons and cancels immediately on mute', () => {
    playFeedbackSound('hint')
    const context = latest()
    expect(context.gains[0]?.gain.value).toBe(design.volume * design.hintGain)
    expect(context.oscillators[0]?.frequency.value).toBe(587.33)
    expect(context.oscillators[0]?.stop).toHaveBeenCalledWith(10.15)
    playFeedbackSound('hint')
    expect(context.oscillators[0]?.stop).toHaveBeenLastCalledWith(10.008)
    expect(context.oscillators).toHaveLength(4)
    setFeedbackSoundsEnabled(false)
    expect(context.oscillators[2]?.stop).toHaveBeenLastCalledWith(10.008)
    playFeedbackSound('hint')
    expect(context.oscillators).toHaveLength(4)
  })

  it('does not play a hint over detached lesson recordings and resumes after they pause', () => {
    const media = document.createElement('audio')
    let paused = false
    Object.defineProperty(media, 'paused', { get: () => paused })
    observeFeedbackMedia(media)
    observeFeedbackMedia(media)
    media.dispatchEvent(new Event('play'))
    playFeedbackSound('hint')
    expect(AudioContextFixture.all).toHaveLength(0)
    paused = true
    media.dispatchEvent(new Event('pause'))
    playFeedbackSound('hint')
    const context = latest()
    expect(context.oscillators).toHaveLength(2)
    paused = false
    media.dispatchEvent(new Event('play'))
    expect(context.oscillators[0]?.stop).toHaveBeenLastCalledWith(10.008)
    paused = true
    media.dispatchEvent(new Event('ended'))
  })

  it('covers inline guidance and meeting support while preserving answer and replay actions', () => {
    const onChange = vi.fn()
    const onReplay = vi.fn()
    const support = vi.fn()
    const { rerender } = render(
      <RevealCard
        revealed={false}
        answer="Full answer"
        guidance={{ level: 'cue', hint: 'A tip', onChange }}
      >
        Question
      </RevealCard>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Hint' }))
    expect(onChange).toHaveBeenCalledWith('hint')
    expect(latest().oscillators).toHaveLength(2)
    rerender(
      <RevealCard
        revealed={false}
        answer="Full answer"
        guidance={{ level: 'hint', hint: 'A tip', onChange }}
      >
        Question
      </RevealCard>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Answer' }))
    expect(onChange).toHaveBeenLastCalledWith('full')
    expect(latest().oscillators).toHaveLength(2)
    expect(latest().sources).toHaveLength(1)
    rerender(
      <AudioSequenceControls
        index={0}
        count={2}
        onNext={vi.fn()}
        onReplay={onReplay}
        supportAction={{
          label: 'Speaking tip',
          icon: <svg />,
          onClick: support,
          feedbackSound: 'hint',
        }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Speaking tip' }))
    expect(support).toHaveBeenCalledOnce()
    expect(latest().oscillators).toHaveLength(4)
    fireEvent.click(screen.getByRole('button', { name: 'Tocar de novo' }))
    expect(onReplay).toHaveBeenCalledOnce()
    expect(latest().oscillators).toHaveLength(4)
  })

  it('discards an awaited AudioContext resume if sound is muted before it finishes', async () => {
    playFeedbackSound('hint')
    const context = latest()
    context.state = 'suspended'
    let resume!: () => void
    context.resume.mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          resume = resolve
        }),
    )
    playFeedbackSound('hint')
    setFeedbackSoundsEnabled(false)
    context.state = 'running'
    resume()
    await Promise.resolve()
    expect(context.oscillators).toHaveLength(2)
  })

  it('preserves the existing correctness sound design', () => {
    playFeedbackSound('correct')
    const context = latest()
    expect(context.gains[0]?.gain.value).toBe(design.volume)
    expect(context.oscillators).toHaveLength(4)
    expect(context.oscillators[0]?.frequency.value).toBe(
      design.correct[0].frequency,
    )
    expect(context.oscillators[2]?.frequency.value).toBe(
      design.correct[1].frequency,
    )
  })
})

it('acknowledges each question click once and keeps answer interaction working while muted', () => {
  render(
    <QuestionList
      items={[
        { id: 'q', prompt: 'Where is Kim from?', answer: 'She’s from Korea' },
      ]}
    />,
  )
  const question = screen.getByRole('button', { name: 'Where is Kim from?' })
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'true')
  expect(latest().oscillators).toHaveLength(0)
  expect(latest().sources).toHaveLength(1)
  expect(latest().gains[0]?.gain.value).toBe(
    design.volume * design.questionGain,
  )
  expect(design.questionGain).toBeLessThan(design.hintGain / 2)
  expect(latest().sources[0]?.stop).toHaveBeenCalledWith(10.18)
  const samples = latest().sources[0]!.buffer!.getChannelData(0)
  const rms = (part: Float32Array) =>
    Math.sqrt(part.reduce((sum, value) => sum + value * value, 0) / part.length)
  const middle = rms(samples.slice(3000, 5600))
  expect(middle).toBeGreaterThan(0.01)
  expect(rms(samples.slice(0, 480))).toBeLessThan(middle / 5)
  expect(rms(samples.slice(-480))).toBeLessThan(middle / 5)
  expect(Math.abs(samples[0]!)).toBeLessThan(0.000001)
  expect(Math.abs(samples[samples.length - 1]!)).toBeLessThan(0.000001)
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'false')
  expect(latest().sources).toHaveLength(2)
  expect(latest().sources[0]?.stop).toHaveBeenLastCalledWith(10.008)
  setFeedbackSoundsEnabled(false)
  expect(latest().sources[1]?.stop).toHaveBeenLastCalledWith(10.008)
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'true')
  expect(latest().sources).toHaveLength(2)
})

it('applies mute immediately, acknowledges only the switch itself and enables ordinary feedback again on unmute', () => {
  setFeedbackSoundsEnabledFromControl(false)
  expect(feedbackSoundsEnabled()).toBe(false)
  const context = latest()
  expect(context.oscillators).toHaveLength(2)
  playFeedbackSound('hint')
  playFeedbackSound('correct')
  expect(context.oscillators).toHaveLength(2)
  setFeedbackSoundsEnabledFromControl(true)
  expect(feedbackSoundsEnabled()).toBe(true)
  expect(context.oscillators).toHaveLength(4)
  playFeedbackSound('hint')
  expect(context.oscillators).toHaveLength(6)
})

it('lets a hint-only question reveal optional support on click, without inventing a fixed answer', () => {
  render(
    <QuestionList
      items={[
        {
          id: 'personal',
          prompt: 'What do you usually eat?',
          hint: 'I usually have … for breakfast',
        },
      ]}
    />,
  )
  const question = screen.getByRole('button', {
    name: 'What do you usually eat?',
  })
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'true')
  expect(
    screen.getByText('I usually have … for breakfast', {
      selector: 'p[aria-hidden="false"]',
    }),
  ).toBeVisible()
  expect(latest().sources).toHaveLength(1)
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'false')
  expect(latest().sources).toHaveLength(2)
  fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
  expect(question).toHaveAttribute('aria-expanded', 'true')
  fireEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'false')
})

it('acknowledges legacy question cards and oral-review examples with the same texture', () => {
  const reveal = vi.fn()
  const { rerender } = render(
    <RevealCard answer="She’s from Korea" revealed={false} onClick={reveal}>
      Where is Kim from?
    </RevealCard>,
  )
  fireEvent.click(screen.getByRole('button', { name: /Where is Kim from/ }))
  expect(reveal).toHaveBeenCalledOnce()
  expect(latest().sources).toHaveLength(1)
  rerender(
    <OralReview
      questions={[
        {
          id: 'q',
          level: 'A1',
          prompt: 'Introduce yourself',
          example: 'My name is …',
        },
      ]}
      ratings={{}}
      onRate={() => undefined}
      onReveal={reveal}
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Mostrar exemplo' }))
  expect(reveal).toHaveBeenLastCalledWith('q')
  expect(latest().sources).toHaveLength(2)
})

it('acknowledges a listening choice neutrally while preserving explicit correctness sounds', () => {
  const pause = vi
    .spyOn(HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => undefined)
  const load = vi
    .spyOn(HTMLMediaElement.prototype, 'load')
    .mockImplementation(() => undefined)
  const answer = vi.fn()
  const { unmount } = render(
    <VoiceMessageExercise
      contact={{ name: 'Kim' }}
      audio={{ id: 'voice', transcript: 'A message', timestamp: '10:00' }}
      questions={[
        {
          id: 'q',
          prompt: 'What did Kim say?',
          choices: [
            { id: 'neutral', label: 'Check this choice' },
            {
              id: 'right',
              label: 'Correct choice',
              feedbackOutcome: 'correct',
            },
          ],
        },
      ]}
      onAnswer={answer}
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Check this choice' }))
  expect(answer).toHaveBeenCalledWith('q', 'neutral')
  expect(latest().sources).toHaveLength(1)
  fireEvent.click(screen.getByRole('button', { name: 'Correct choice' }))
  expect(answer).toHaveBeenLastCalledWith('q', 'right')
  expect(latest().oscillators).toHaveLength(4)
  unmount()
  pause.mockRestore()
  load.mockRestore()
})

it('acknowledges a deliberate question click during listening without pausing or resetting the recording', () => {
  const media = document.createElement('audio')
  let paused = false
  Object.defineProperty(media, 'paused', { get: () => paused })
  media.currentTime = 3
  const pause = vi.spyOn(media, 'pause')
  observeFeedbackMedia(media)
  media.dispatchEvent(new Event('play'))
  playFeedbackSound('question')
  expect(latest().sources).toHaveLength(1)
  expect(pause).not.toHaveBeenCalled()
  expect(media.currentTime).toBe(3)
  paused = true
  media.dispatchEvent(new Event('ended'))
  pause.mockRestore()
})
