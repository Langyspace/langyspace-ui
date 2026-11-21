import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { PreferenceSection } from '../../../stories/materials/TrialA1/TrialA1.sections'
const speech = {
  speak: vi.fn(),
  stop: vi.fn(),
  togglePause: vi.fn(),
  paused: false,
  error: '',
  playingId: undefined,
}
afterEach(() => {
  vi.useRealTimers()
  vi.clearAllMocks()
  vi.restoreAllMocks()
})
describe('A2.01 and A1 trial shared contracts', () => {
  it('keeps labeled hotspots honest and keyboard accessible without a playback handler', async () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
      new DOMRect(0, 0, 800, 600),
    )
    const user = userEvent.setup(),
      select = vi.fn()
    const { rerender } = render(
      <SceneExplorer
        presentation="labels"
        imageUrl="/park.webp"
        imageAlt="Park"
        hotspots={[
          {
            id: 'music',
            xPercent: 14,
            yPercent: 30,
            label: 'music',
            prompt: 'A hidden question',
            answer: 'A hidden answer',
          },
        ]}
        visitedIds={[]}
        onSelect={select}
      />,
    )
    await user.tab()
    await user.keyboard('{Enter}')
    expect(select).toHaveBeenCalledExactlyOnceWith('music')
    expect(screen.getByRole('button')).toHaveAccessibleName('music')
    expect(screen.getByRole('button')).toHaveFocus()
    expect(screen.queryByText('A hidden answer')).not.toBeInTheDocument()
    expect(screen.queryByText('A hidden question')).not.toBeInTheDocument()
    rerender(
      <SceneExplorer
        imageUrl="/park.webp"
        imageAlt="Park"
        hotspots={[
          {
            id: 'music',
            xPercent: 14,
            yPercent: 30,
            label: 'music',
            prompt: 'Question',
          },
        ]}
        visitedIds={[]}
        onSelect={select}
      />,
    )
    expect(screen.getByText('Tap a dot to explore')).toBeVisible()
  })
  it('plays labeled targets once after selection for pointer and keyboard activation', async () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
      new DOMRect(0, 0, 800, 600),
    )
    const user = userEvent.setup(),
      order: string[] = [],
      select = vi.fn((id: string) => order.push(`select:${id}`)),
      play = vi.fn((id: string) => order.push(`play:${id}`))
    const props = {
      imageUrl: '/park.webp',
      imageAlt: 'Park',
      hotspots: [
        {
          id: 'music',
          xPercent: 14,
          yPercent: 30,
          label: 'music',
          prompt: 'A hidden question',
        },
      ],
      visitedIds: [],
      onSelect: select,
      onPlayHotspot: play,
    }
    const { rerender } = render(
      <SceneExplorer {...props} presentation="labels" />,
    )
    const button = screen.getByRole('button', { name: 'Ouvir: music' })
    expect(order).toEqual([])
    await user.click(button)
    expect(order).toEqual(['select:music', 'play:music'])
    expect(play).toHaveBeenCalledOnce()
    await user.keyboard('{Enter}')
    expect(order).toEqual([
      'select:music',
      'play:music',
      'select:music',
      'play:music',
    ])
    expect(play).toHaveBeenCalledTimes(2)
    expect(button).toHaveFocus()
    rerender(<SceneExplorer {...props} />)
    await user.click(screen.getByRole('button', { name: 'music' }))
    expect(select).toHaveBeenCalledTimes(3)
    expect(play).toHaveBeenCalledTimes(2)
  })
  it('delegates video signal, hang-up and restart without changing the audio default', async () => {
    const user = userEvent.setup()
    function Call() {
      const [poor, setPoor] = useState(false),
        [ended, setEnded] = useState(false)
      return (
        <CallSimulation
          presentation="video"
          contactName="Kim"
          initials="K"
          avatarUrl="/kim.webp"
          signalPoor={poor}
          onSignalToggle={() => setPoor(!poor)}
          state={ended ? 'ended' : 'connected'}
          onHangUp={() => setEnded(true)}
          onCall={() => setEnded(false)}
        />
      )
    }
    const { unmount } = render(<Call />)
    await user.click(screen.getByRole('button', { name: 'Bad signal' }))
    expect(screen.getByRole('button', { name: 'Signal OK' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Desligar' }))
    expect(
      screen.queryByRole('button', { name: 'Signal OK' }),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Ligar de novo' }))
    expect(screen.getByRole('button', { name: 'Desligar' })).toBeVisible()
    unmount()
    render(
      <CallSimulation
        contactName="Desk"
        initials="D"
        state="idle"
        onCall={vi.fn()}
        onHangUp={vi.fn()}
      />,
    )
    expect(screen.queryByText('Camera off')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Bad signal' }),
    ).not.toBeInTheDocument()
  })
  it('retains native button keyboard and disabled behavior in the lesson choice variant', async () => {
    const user = userEvent.setup(),
      pick = vi.fn()
    const { rerender } = render(
      <ChoiceCard variant="lesson" aria-pressed={false} onClick={pick}>
        music
      </ChoiceCard>,
    )
    await user.tab()
    await user.keyboard(' ')
    expect(pick).toHaveBeenCalledOnce()
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    expect(screen.getByRole('button')).not.toHaveAttribute('variant')
    rerender(
      <ChoiceCard variant="lesson" disabled onClick={pick}>
        music
      </ChoiceCard>,
    )
    await user.click(screen.getByRole('button'))
    expect(pick).toHaveBeenCalledOnce()
  })
  it('server renders new presentations without browser or media APIs', () => {
    expect(
      renderToString(
        <CallSimulation
          presentation="video"
          contactName="Kim"
          initials="K"
          state="connected"
          onCall={() => {}}
          onHangUp={() => {}}
        />,
      ),
    ).toContain('Camera off')
    expect(
      renderToString(
        <SceneExplorer
          presentation="labels"
          imageUrl="/p.webp"
          imageAlt="Park"
          hotspots={[]}
          visitedIds={[]}
          onSelect={() => {}}
        />,
      ),
    ).toContain('Park')
  })
})
describe('guided role-play contract', () => {
  it('marks the next step accessibly, preserves independent checks and localizes support', async () => {
    const user = userEvent.setup()
    function Guided() {
      const [ids, setIds] = useState<string[]>([]),
        [support, setSupport] = useState(false)
      return (
        <RolePlayExercise
          presentation="tracker"
          situation={null}
          steps={[
            { id: 'ask', label: 'Ask' },
            { id: 'repeat', label: 'Repeat' },
          ]}
          completedIds={ids}
          onStepToggle={(id) =>
            setIds((old) =>
              old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
            )
          }
          support={['Can you say that again?']}
          supportVisible={support}
          onSupportToggle={() => setSupport(!support)}
          labels={{
            show: 'Show help',
            hide: 'Hide help',
            joiner: 'of',
            progress: '',
          }}
        />
      )
    }
    render(<Guided />)
    const ask = screen.getByRole('button', { name: /Ask/ }),
      repeat = screen.getByRole('button', { name: /Repeat/ })
    expect(ask).toHaveAttribute('aria-current', 'step')
    await user.click(ask)
    expect(repeat).toHaveAttribute('aria-current', 'step')
    await user.click(ask)
    expect(ask).toHaveAttribute('aria-current', 'step')
    await user.click(screen.getByRole('button', { name: 'Show help' }))
    expect(screen.getByText('Can you say that again?')).toBeVisible()
    expect(screen.getByRole('button', { name: 'Hide help' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
describe('A1 trial preference behavior', () => {
  it('treats preferences as exclusive, reversible and ungraded choices', async () => {
    const user = userEvent.setup()
    render(<PreferenceSection index={0} speech={speech} />)
    const a = screen.getByRole('button', { name: 'movies' }),
      b = screen.getByRole('button', { name: 'music' })
    await user.click(a)
    expect(a).toHaveAttribute('aria-pressed', 'true')
    await user.click(b)
    expect(a).toHaveAttribute('aria-pressed', 'false')
    expect(b).toHaveAttribute('aria-pressed', 'true')
    await user.click(b)
    expect(b).toHaveAttribute('aria-pressed', 'false')
    expect(screen.queryByText(/Correct!|Try again/)).not.toBeInTheDocument()
    expect(speech.speak).not.toHaveBeenCalled()
  })
})
