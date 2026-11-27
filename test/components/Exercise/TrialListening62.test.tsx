import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import {
  TrialA1Listening,
  listeningParts,
} from '../../../stories/materials/TrialA1/TrialA1Listening'
import provenance from '../../../stories/materials/TrialA1/listening62-audio-provenance.json'

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(
    () => undefined,
  )
})
afterEach(() => vi.restoreAllMocks())

it.each([0, 1] as const)(
  'binds approved audio %s to the matching transcript and questions',
  async (part) => {
    const message = listeningParts[part]
    const item = provenance.items[part]!
    const bytes = readFileSync(
      resolve(process.cwd(), 'stories/materials/TrialA1', item.file),
    )
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(item.sha256)
    expect(item.text).toBe(message.transcript)
    expect(item.provider).toBe('elevenlabs')
    expect(item.speaker).toBe('Ana')
    expect(message.transcript).not.toMatch(/\bHi[!,]/u)
    const user = userEvent.setup()
    const { container } = render(<TrialA1Listening active />)
    expect(container.querySelectorAll('audio')[part]).toHaveAttribute(
      'src',
      expect.stringContaining(`listening-ana62-${part + 1}.mp3`),
    )
    expect(screen.queryByText('Hi! I’m at the park with Kim 😊') !== null).toBe(
      true,
    )
    for (const question of message.questions) {
      await user.click(screen.getByRole('button', { name: question.prompt }))
      expect(screen.getByText(question.answer)).toBeVisible()
    }
    expect(
      screen.queryByRole('button', { name: 'Show transcript' }),
    ).not.toBeInTheDocument()
  },
)

it.each([0, 1] as const)(
  'reveals transcript %s on its third native playback and pauses when leaving',
  async (part) => {
    const transcript = listeningParts[part].transcript
    const user = userEvent.setup()
    const { container, rerender } = render(<TrialA1Listening active />)
    const audio = container.querySelectorAll('audio')[part]!
    expect(
      screen.queryByText(transcript, { exact: true }),
    ).not.toBeInTheDocument()
    for (let n = 1; n <= 3; n++) {
      await user.click(
        screen.getByRole('button', {
          name: `${n === 1 ? 'Listen to Ana' : 'Listen again'} (${part + 1}/2)`,
        }),
      )
      fireEvent.playing(audio)
      if (n < 3)
        expect(
          screen.queryByText(transcript, { exact: true }),
        ).not.toBeInTheDocument()
      fireEvent.ended(audio)
    }
    expect(
      screen.getByText(
        (content) =>
          content.replace(/\s+/gu, ' ') === transcript.replace(/\s+/gu, ' '),
      ),
    ).toBeVisible()
    rerender(<TrialA1Listening active={false} />)
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled()
  },
)
