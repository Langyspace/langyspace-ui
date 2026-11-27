import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PictureTalkSection } from '../../../stories/materials/TrialA1/TrialA1.sections'
import { SceneDemo } from '../../../stories/components/UXLab/PracticeDemos'

const audio = vi.hoisted(() => ({
  play: vi.fn(),
  stop: vi.fn(),
  playingId: undefined,
  error: '',
}))
vi.mock('../../../stories/materials/shared/useSceneAudio', () => ({
  useSceneAudio: () => audio,
}))
beforeEach(() => {
  vi.clearAllMocks()
  audio.error = ''
})

describe('Scene vocabulary consumer defaults', () => {
  it('keeps TrialA1 word/replay separate from playback failure feedback', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<PictureTalkSection />)
    await user.click(screen.getByRole('button', { name: 'music' }))
    const callout = screen.getByRole('region', { name: 'music' })
    expect(callout).toHaveTextContent(/^music$/)
    expect(screen.queryByText('Do you like music?')).not.toBeInTheDocument()
    expect(screen.queryByText('What’s this?')).not.toBeInTheDocument()
    expect(audio.play).not.toHaveBeenCalled()
    await user.click(
      within(callout).getByRole('button', { name: 'Ouvir: music' }),
    )
    expect(audio.play).toHaveBeenCalledExactlyOnceWith('0')

    audio.error = 'Não foi possível tocar o áudio. Tente novamente.'
    rerender(<PictureTalkSection />)
    expect(screen.getByRole('status')).toHaveTextContent(audio.error)
    expect(callout).not.toContainElement(screen.getByRole('status'))
    expect(screen.queryByText('What’s this?')).not.toBeInTheDocument()
  })

  it('uses vocabulary in the canonical Lab demo and preserves explicit A1/C2 practice', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<SceneDemo />)
    await user.click(screen.getByRole('button', { name: 'bag' }))
    const callout = screen.getByRole('region', { name: 'bag' })
    expect(callout).toHaveTextContent(/^bag$/)
    expect(screen.queryByText('Where’s the bag?')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /resposta/ }),
    ).not.toBeInTheDocument()
    expect(audio.play).not.toHaveBeenCalled()
    await user.click(
      within(callout).getByRole('button', { name: 'Ouvir: bag' }),
    )
    expect(audio.play).toHaveBeenCalledExactlyOnceWith('bag')

    audio.error = 'Não foi possível tocar o áudio. Tente novamente.'
    rerender(<SceneDemo />)
    expect(screen.getByRole('status')).toHaveTextContent(audio.error)

    audio.error = ''
    rerender(<SceneDemo practice />)
    expect(within(callout).getByText('Where’s the bag?')).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Mostrar resposta' }))
    expect(callout).toHaveTextContent('It’s on the chair.')
    rerender(<SceneDemo practice level="c2" />)
    expect(callout).toHaveTextContent(
      'The bag is still on the chair. Where is the owner now?',
    )
    expect(audio.play).toHaveBeenCalledOnce()
  })
})
