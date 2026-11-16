import { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { describe, it, expect, vi } from 'vitest'
import { RevealSequenceCard } from '../../../src/components/InteractiveMaterial/RevealSequenceCard'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
const stages = [
  { id: 'closed', content: '?', revealLabel: 'Closed' },
  {
    id: 'clue',
    image: { src: '/clue.webp', alt: 'Wet shirt' },
    revealLabel: 'Show clue',
  },
  { id: 'answer', content: 'waiting for the bus', revealLabel: 'Show answer' },
]
function ControlledCard() {
  const [id, setId] = useState('closed')
  return (
    <RevealSequenceCard
      title="Saturday"
      stages={stages}
      stageId={id}
      onAdvance={setId}
    />
  )
}
describe('B1.01 shared presentation contracts', () => {
  it('advances through a clue to its answer by keyboard, then stays on the final stage', async () => {
    const user = userEvent.setup()
    render(<ControlledCard />)
    await user.tab()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('img')).toHaveAccessibleName('Wet shirt')
    await user.keyboard(' ')
    expect(screen.getByText('waiting for the bus')).toBeVisible()
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    await user.keyboard('{Enter}')
    expect(screen.getByText('waiting for the bus')).toBeVisible()
  })
  it('handles missing stages and an unknown selected stage without an invalid callback', () => {
    const next = vi.fn()
    const { rerender } = render(
      <RevealSequenceCard
        title="Card"
        stages={[]}
        stageId="missing"
        onAdvance={next}
      />,
    )
    expect(screen.getByRole('button')).toBeDisabled()
    rerender(
      <RevealSequenceCard
        title="Card"
        stages={stages}
        stageId="missing"
        onAdvance={next}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(next).toHaveBeenCalledWith('clue')
    rerender(
      <RevealSequenceCard
        title="Card"
        stages={[{ id: 'only', revealLabel: 'Only stage' }]}
        stageId="only"
        onAdvance={next}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(next).toHaveBeenCalledTimes(1)
  })
  it('keeps split introductions and media semantic without losing headings or counters', () => {
    render(
      <SlidePage
        layout="split"
        title="Last class"
        lead={<h1>What have you been doing?</h1>}
      >
        <ExercisePanel
          layout="split"
          media={<img src="/scene.webp" alt="Scene" />}
          title="What has she been doing?"
          counter="1 / 3"
        >
          Choices
        </ExercisePanel>
      </SlidePage>,
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'What have you been doing?',
    )
    expect(
      screen.getByRole('heading', { name: 'What has she been doing?' }),
    ).toBeVisible()
    expect(screen.getByText('1 / 3')).toBeVisible()
    expect(screen.getByRole('img')).toHaveAccessibleName('Scene')
  })
  it('marks a learner line without nesting controls or interfering with ordinary translations', async () => {
    const user = userEvent.setup(),
      complete = vi.fn(),
      translate = vi.fn()
    const lines = [
      {
        id: 'you',
        speaker: 'You',
        side: 'end' as const,
        content: 'I’ve been running.',
        actionLabel: 'Mark my response',
      },
      {
        id: 'kim',
        speaker: 'Kim',
        side: 'start' as const,
        content: 'Welcome back!',
        translation: 'Bem-vinda de volta!',
      },
    ]
    const { rerender } = render(
      <LearningDialogue
        lines={lines}
        completedIds={[]}
        onComplete={complete}
        onTranslate={translate}
      />,
    )
    await user.click(screen.getByRole('button', { name: 'Mark my response' }))
    expect(complete).toHaveBeenCalledWith('you')
    rerender(
      <LearningDialogue
        lines={lines}
        completedIds={['you']}
        onComplete={complete}
        onTranslate={translate}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Mark my response' }),
    ).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getByRole('button', { name: 'Welcome back!' }))
    expect(translate).toHaveBeenCalledWith('kim')
  })
  it('reveals a grammar row without announcing an empty verb cell as an answer', async () => {
    const user = userEvent.setup(),
      reveal = vi.fn(),
      rows = [
        {
          id: 'doing',
          subject: 'Activity',
          verb: 'have been',
          example: 'I’ve been painting.',
        },
      ]
    const { rerender } = render(
      <GrammarTable
        title="Doing or done?"
        columns={{ subject: 'Meaning', verb: 'Words', example: 'Example' }}
        rows={rows}
        hiddenAnswers
        revealedIds={[]}
        onReveal={reveal}
      />,
    )
    await user.click(
      screen.getByRole('button', { name: 'Mostrar resposta: doing' }),
    )
    expect(reveal).toHaveBeenCalledWith('doing')
    expect(screen.queryByText('I’ve been painting.')).not.toBeInTheDocument()
    rerender(
      <GrammarTable
        title="Doing or done?"
        columns={{ subject: 'Meaning', verb: 'Words', example: 'Example' }}
        rows={rows}
        hiddenAnswers
        revealedIds={['doing']}
        onReveal={reveal}
      />,
    )
    expect(screen.getByText('have been')).toBeVisible()
    expect(screen.getByText('I’ve been painting.')).toBeVisible()
  })
  it('keeps click-first vocabulary concealed while pointing and shows its supplied phrase hint', async () => {
    const user = userEvent.setup(),
      items = [
        {
          id: 'guitar',
          word: 'playing the guitar',
          translation: 'tocando violão',
          imageUrl: '/guitar.webp',
          imageAlt: 'Mulher com violão',
          initialHint: 'playing the g_____',
        },
      ]
    const { rerender } = render(
      <VocabularyGrid
        items={items}
        revealedIds={[]}
        onReveal={() => {}}
        revealOnHover={false}
        showInitial
        revealVariant="tooltip"
      />,
    )
    await user.hover(screen.getByRole('button'))
    expect(screen.queryByText('playing the guitar')).not.toBeInTheDocument()
    expect(screen.getByText('playing the g_____')).toBeVisible()
    rerender(
      <VocabularyGrid
        items={items}
        revealedIds={['guitar']}
        onReveal={() => {}}
        revealOnHover={false}
        showInitial
        revealVariant="tooltip"
      />,
    )
    expect(
      screen.getByRole('button', {
        name: 'playing the guitar: tocando violão',
      }),
    ).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('tocando violão')).toBeVisible()
  })
  it('server-renders sequence images, a tracker slot and question-specific corrective feedback', () => {
    const html = renderToString(
      <>
        <RevealSequenceCard
          title="Saturday"
          stages={stages}
          stageId="clue"
          onAdvance={() => {}}
        />
        <RolePlayExercise
          situation="Ask and guess"
          steps={[]}
          completedIds={[]}
          onStepToggle={() => {}}
          tracker={
            <label>
              Summary
              <input />
            </label>
          }
        />
        <VoiceMessageExercise
          active={false}
          contact={{ name: 'Leo' }}
          audio={{ id: 'leo', transcript: 'Hi Ana', timestamp: '19:15' }}
          questions={[
            {
              id: 'weeks',
              prompt: 'Three days?',
              choices: [],
              feedback: 'No. For three weeks.',
            },
          ]}
          onAnswer={() => {}}
        />
      </>,
    )
    expect(html).toContain('lsui-sc-reveal-sequence-card')
    expect(html).toContain('Wet shirt')
    expect(html).toContain('Summary')
    expect(html).toContain('No. For three weeks.')
  })
})
