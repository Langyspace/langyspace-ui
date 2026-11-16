import { render, screen, fireEvent } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, it, expect, vi } from 'vitest'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { MatchPairs } from '../../../src/components/Exercise/MatchPairs'
const items = [
  {
    id: 'happy',
    word: 'happy',
    translation: 'feliz',
    imageUrl: '/happy.png',
    imageAlt: 'Rosto sorrindo',
  },
]
describe('shared exercise contracts', () => {
  it('delegates vocabulary ids and retains product-controlled reveals', () => {
    const onReveal = vi.fn(),
      onPlay = vi.fn()
    const { rerender } = render(
      <VocabularyGrid
        items={items}
        revealedIds={[]}
        onReveal={onReveal}
        onPlay={onPlay}
      />,
    )
    expect(screen.queryByText('feliz')).toBeNull()
    fireEvent.click(screen.getByRole('button'))
    expect(onReveal).toHaveBeenCalledWith('happy')
    expect(onPlay).toHaveBeenCalledWith('happy')
    rerender(
      <VocabularyGrid
        items={items}
        revealedIds={['happy']}
        onReveal={onReveal}
      />,
    )
    expect(screen.getByText('feliz')).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'happy: feliz' }),
    ).toHaveAttribute('aria-expanded', 'true')
  })
  it('exposes translations and playback through independent stable line callbacks', () => {
    const onTranslate = vi.fn(),
      onPlay = vi.fn()
    const lines = [
      {
        id: 'kim',
        speaker: 'Kim',
        side: 'start' as const,
        content: 'Hi!',
        translation: 'Oi!',
        audioLabel: 'Ouvir Kim',
      },
    ]
    const { rerender } = render(
      <LearningDialogue
        lines={lines}
        onTranslate={onTranslate}
        onPlay={onPlay}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Hi!' }))
    expect(onTranslate).toHaveBeenCalledWith('kim')
    fireEvent.click(screen.getByRole('button', { name: 'Ouvir Kim' }))
    expect(onPlay).toHaveBeenCalledWith('kim')
    expect(screen.queryByText('Oi!')).toBeNull()
    rerender(<LearningDialogue lines={lines} translatedIds={['kim']} />)
    expect(screen.getByText('Oi!')).toBeVisible()
  })
  it('keeps a controlled answer hidden until revealed and preserves native disabled semantics', () => {
    const onClick = vi.fn()
    const { rerender } = render(
      <RevealCard
        marker="1"
        revealed={false}
        answer="Are you tired?"
        onClick={onClick}
      >
        You are tired.
      </RevealCard>,
    )
    expect(screen.queryByText('Are you tired?')).toBeNull()
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
    rerender(
      <RevealCard
        marker="1"
        revealed
        answer="Are you tired?"
        disabled
        onClick={onClick}
      >
        You are tired.
      </RevealCard>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  it('never grades a pair inside the library and disables only supplied completed matches', () => {
    const onQuestionSelect = vi.fn(),
      onAnswerSelect = vi.fn()
    const props = {
      questions: [{ id: 'q', label: 'What’s your name?', marker: 1 }],
      answers: [
        { id: 'a', label: 'I’m Ana.', marker: 'A' },
        { id: 'b', label: 'I’m from Brazil.', marker: 'B' },
      ],
      onQuestionSelect,
      onAnswerSelect,
      questionLabel: 'Perguntas',
      answerLabel: 'Respostas',
    }
    const { rerender } = render(<MatchPairs {...props} matches={{}} />)
    fireEvent.click(screen.getByRole('button', { name: /What’s your name/ }))
    expect(onQuestionSelect).toHaveBeenCalledWith('q')
    fireEvent.click(screen.getByRole('button', { name: /I’m from Brazil/ }))
    expect(onAnswerSelect).toHaveBeenCalledWith('b')
    expect(
      screen.getByRole('button', { name: /I’m from Brazil/ }),
    ).not.toBeDisabled()
    rerender(<MatchPairs {...props} matches={{ q: 'a' }} status="Correto!" />)
    expect(
      screen.getByRole('button', { name: /What’s your name/ }),
    ).toBeDisabled()
    expect(screen.getByRole('button', { name: /I’m Ana/ })).toBeDisabled()
    expect(screen.getByRole('status')).toHaveTextContent('Correto!')
  })
  it('renders all five contracts on the server without browser services', () => {
    const html = renderToString(
      <ExercisePanel title="Example">
        <VocabularyGrid items={items} revealedIds={[]} onReveal={() => {}} />
        <LearningDialogue lines={[]} />
        <RevealCard answer="Answer" revealed={false}>
          Prompt
        </RevealCard>
        <MatchPairs
          questions={[]}
          answers={[]}
          matches={{}}
          questionLabel="Q"
          answerLabel="A"
          onQuestionSelect={() => {}}
          onAnswerSelect={() => {}}
        />
      </ExercisePanel>,
    )
    for (const marker of [
      'exercise-panel',
      'vocabulary-grid',
      'learning-dialogue',
      'reveal-card',
      'match-pairs',
    ])
      expect(html).toContain(`lsui-sc-${marker}`)
  })
})
