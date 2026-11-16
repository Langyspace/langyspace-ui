import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { MatchPairs } from '../../../src/components/Exercise/MatchPairs'
import { feelings, image } from '../../materials/A101/A101.data'
import * as Styled from './ExerciseComponents.stories.styles'
const isolatedFeelings = feelings.slice(0, 3).map((item, index) => ({
  ...item,
  imageUrl: image(
    ['f_beaming_face_with_smiling_eyes', 'f_crying_face', 'f_yawning_face'][
      index
    ]!,
  ),
}))
function ComponentsPreview() {
  const [revealed, setRevealed] = useState<string[]>([])
  const [answer, setAnswer] = useState(false)
  const [translated, setTranslated] = useState<string[]>([])
  const [selected, setSelected] = useState<string>()
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [incorrect, setIncorrect] = useState<string>()
  return (
    <Styled.Preview>
      <ExercisePanel title="Vocabulary" counter="1 / 2">
        <VocabularyGrid
          items={isolatedFeelings}
          revealedIds={revealed}
          onReveal={(id) => setRevealed((old) => [...old, id])}
        />
      </ExercisePanel>
      <LearningDialogue
        lines={[
          {
            id: 'hello',
            speaker: 'Kim',
            side: 'start',
            content: 'Hi! I’m Kim.',
            translation: 'Oi! Eu sou a Kim.',
          },
        ]}
        translatedIds={translated}
        onTranslate={(id) =>
          setTranslated((old) => (old.includes(id) ? [] : [id]))
        }
      />
      <RevealCard
        marker="1"
        revealed={answer}
        answer="Are you tired?"
        onClick={() => setAnswer(!answer)}
      >
        You are tired.
      </RevealCard>
      <MatchPairs
        questionLabel="Perguntas"
        answerLabel="Respostas"
        questions={[{ id: 'name', label: 'What’s your name?', marker: 1 }]}
        answers={[
          { id: 'from', label: 'I’m from Brazil.', marker: 'A' },
          { id: 'ana', label: 'I’m Ana.', marker: 'B' },
        ]}
        selectedQuestionId={selected}
        matches={matches}
        incorrectAnswerId={incorrect}
        onQuestionSelect={setSelected}
        onAnswerSelect={(id) => {
          if (!selected) return
          if (id === 'ana') {
            setMatches({ name: id })
            setSelected(undefined)
            setIncorrect(undefined)
          } else setIncorrect(id)
        }}
        status={
          matches.name ? 'Correto!' : incorrect ? 'Tente outra resposta.' : ''
        }
      />
    </Styled.Preview>
  )
}
const meta = {
  title: 'Exercise/Components',
  component: ExercisePanel,
  subcomponents: { VocabularyGrid, LearningDialogue, RevealCard, MatchPairs },
  render: () => <ComponentsPreview />,
  tags: ['visual-review'],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const NarrowLongContent: Story = {
  render: () => (
    <Styled.Narrow>
      <ComponentsPreview />
    </Styled.Narrow>
  ),
}
export const Dark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          slides: {
            canvas: '#0A0A0A',
            surface: '#161616',
            foreground: '#F7F7F7',
            muted: '#A3A3A3',
            border: '#555555',
            accent: '#FF7A9E',
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
}
function ScenesPreview() {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Styled.Preview>
      <VocabularyGrid
        items={feelings}
        imageVariant="scene"
        revealedIds={revealed}
        onReveal={(id) =>
          setRevealed((old) =>
            old.includes(id)
              ? old.filter((value) => value !== id)
              : [...old, id],
          )
        }
      />
    </Styled.Preview>
  )
}
export const ContextualScenes: Story = { render: () => <ScenesPreview /> }
export const DarkScenes: Story = {
  ...Dark,
  render: () => <ScenesPreview />,
}
export const NarrowScenes: Story = {
  render: () => (
    <Styled.Narrow>
      <ScenesPreview />
    </Styled.Narrow>
  ),
}
function TooltipVocabularyPreview() {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Styled.Preview>
      <VocabularyGrid
        items={feelings}
        imageVariant="scene"
        columns={3}
        revealVariant="tooltip"
        revealedIds={revealed}
        onReveal={(id) =>
          setRevealed((old) =>
            old.includes(id)
              ? old.filter((value) => value !== id)
              : [...old, id],
          )
        }
      />
    </Styled.Preview>
  )
}
export const FixedColumnsWithTooltips: Story = {
  render: () => <TooltipVocabularyPreview />,
}
