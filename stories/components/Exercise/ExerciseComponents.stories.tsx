import { ana as learnerPortrait } from '../../materials/shared/characterPortraits'
import { letters as alphabetLetters } from '../../materials/A102/A102.data'
import { useLessonSpeech as useAlphabetSpeech } from '../../materials/A102/useLessonSpeech'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import type { RevealGuidanceLevel } from '../../../src/components/Exercise/RevealCard.types'
import { FieldRoot } from '../../../src/components/Form/FieldRoot'
import { TextInput } from '../../../src/components/Form/TextInput'
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
function FooterSupportPreview() {
  const [shown, setShown] = useState(false)
  return (
    <LearningDialogue
      density="compact"
      footerAction={
        <VocabularyControls
          density="compact"
          showInitial={shown}
          onToggleInitial={() => setShown(!shown)}
          labels={{ hint: shown ? 'Hide hint' : 'Show hint' }}
        />
      }
      lines={[
        {
          id: 'teacher',
          speaker: 'Teacher',
          side: 'start',
          content: 'Can you open the project?',
        },
        {
          id: 'you',
          speaker: 'You',
          participant: 'learner',
          side: 'end',
          content: shown
            ? 'I can’t open it — could you give me access?'
            : 'Explain the error and ask for help',
        },
      ]}
    />
  )
}
export const FooterReplySupport: Story = {
  render: () => (
    <Styled.Preview>
      <FooterSupportPreview />
    </Styled.Preview>
  ),
  tags: ['layout-boundary', 'visual-review'],
}
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
function SequencedReference() {
  const [index, setIndex] = useState(0)
  const examples = [
    'Before the phone died: I’d been using it as a map.',
    'At four: my phone died.',
    'Afterwards: I asked a doorman for help.',
  ]
  return (
    <Styled.Preview>
      <ExercisePanel
        title="One story, three time points"
        navigation={{ index, count: examples.length, onChange: setIndex }}
      >
        <p>{examples[index]}</p>
      </ExercisePanel>
    </Styled.Preview>
  )
}
export const ControlledSequence: Story = {
  render: () => <SequencedReference />,
}
function ProgressiveSupport({
  initial = 'cue',
}: {
  initial?: RevealGuidanceLevel
}) {
  const [level, setLevel] = useState(initial)
  return (
    <Styled.Preview>
      <RevealCard
        presentation="prompt"
        revealed={level === 'full'}
        answer="This is Bia, my sister. She’s a cook from Recife."
        answerMinLines={3}
        guidance={{
          level,
          hint: 'Start with “This is my sister…”. Add her job or city.',
          onChange: setLevel,
        }}
      >
        Introduce them. Add a job or a city.
      </RevealCard>
    </Styled.Preview>
  )
}
export const ProgressiveGuidance: Story = {
  render: () => <ProgressiveSupport />,
}
export const ProgressiveHint: Story = {
  render: () => <ProgressiveSupport initial="hint" />,
}
export const ProgressiveAnswer: Story = {
  render: () => <ProgressiveSupport initial="full" />,
}
export const MonitorContent: Story = {
  render: () => (
    <Styled.Preview>
      <ExercisePanel
        variant="monitor"
        title="Contact card"
        workstationMeta={{ clock: '09:41', date: '20 Nov' }}
      >
        <h3>Ana Souza</h3>
        <p>First name: Ana</p>
        <p>Last name: Souza</p>
      </ExercisePanel>
    </Styled.Preview>
  ),
}
export const MonitorForm: Story = {
  render: () => (
    <Styled.Preview>
      <ExercisePanel
        variant="monitor"
        monitorLayout="form"
        title="New student"
        workstationMeta={{ clock: '09:41', date: '20 Nov' }}
      >
        <FieldRoot label="First name">
          <TextInput defaultValue="Ana" />
        </FieldRoot>
        <FieldRoot label="Last name">
          <TextInput defaultValue="Souza" />
        </FieldRoot>
        <FieldRoot label="Phone number">
          <TextInput type="tel" autoComplete="off" />
        </FieldRoot>
      </ExercisePanel>
    </Styled.Preview>
  ),
}
export const StandardLightMonitor: Story = {
  render: () => (
    <ThemeProvider theme={createTheme()}>
      <Styled.Preview>
        <ExercisePanel
          variant="monitor"
          screenAspectRatio={4 / 3}
          title="customer-portal"
          workstationMeta={{ clock: '09:20', date: 'Mon' }}
        >
          <h3>You need access to this project</h3>
          <p>The repository is private</p>
          <p>Your work email: dev@example.com</p>
        </ExercisePanel>
      </Styled.Preview>
    </ThemeProvider>
  ),
  tags: ['visual-review'],
}
export const StandardLightMonitorNarrow: Story = {
  ...StandardLightMonitor,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
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
function ScenesPreview({ regular = false }: { regular?: boolean }) {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Styled.Preview>
      <VocabularyGrid
        items={feelings}
        imageVariant="scene"
        density={regular ? 'regular' : 'compact'}
        revealedIds={revealed}
        onReveal={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
    </Styled.Preview>
  )
}
export const ContextualScenes: Story = { render: () => <ScenesPreview /> }
export const RegularScenes: Story = { render: () => <ScenesPreview regular /> }
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
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
    </Styled.Preview>
  )
}
export const FixedColumnsWithTooltips: Story = {
  render: () => <TooltipVocabularyPreview />,
}

function ReviewedVocabularyPreview() {
  const [revealed, setRevealed] = useState<string[]>([]),
    [active, setActive] = useState('')
  return (
    <Styled.Preview>
      <VocabularyGrid
        items={feelings.slice(0, 3).map((item, i) => ({
          ...item,
          badge: i === 0 ? 'Review' : undefined,
        }))}
        imageVariant="scene"
        imageFit="contain"
        columns={3}
        revealVariant="tooltip"
        revealOnHover={false}
        markRevealed
        activeId={active}
        revealedIds={revealed}
        onReveal={(id) => {
          setActive(id)
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }}
      />
    </Styled.Preview>
  )
}
export const ReviewedVocabulary: Story = {
  render: () => <ReviewedVocabularyPreview />,
}

function PromptSupportPreview() {
  const [open, setOpen] = useState(false)
  return (
    <Styled.Preview>
      <RevealCard
        presentation="prompt"
        marker="1"
        answer="I like mangoes. What about you?"
        revealed={open}
        onClick={() => setOpen(!open)}
      >
        What fruit do you like?
      </RevealCard>
    </Styled.Preview>
  )
}
export const QuestionSupport: Story = { render: () => <PromptSupportPreview /> }
function InlineDialoguePreview() {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Styled.Preview>
      <LearningDialogue
        density="compact"
        lines={[
          {
            id: 'question',
            speaker: 'Kim',
            side: 'start',
            content: 'Do you like apples?',
            parts: ['Do you ', { id: 'like', answer: 'like' }, ' apples?'],
          },
          {
            id: 'reply',
            speaker: 'Ana',
            side: 'end',
            content: 'Yes, I do. I love apples.',
          },
        ]}
        revealedGapIds={revealed}
        onRevealGap={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
    </Styled.Preview>
  )
}
export const InlineDialogueAnswers: Story = {
  render: () => <InlineDialoguePreview />,
}

function NativeSymbolsPreview() {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Styled.Preview>
      <VocabularyGrid
        columns={3}
        revealOnHover={false}
        revealVariant="tooltip"
        items={[
          {
            id: 'zero',
            symbol: '0',
            word: 'zero',
            translation: '',
            imageAlt: '0',
          },
          {
            id: 'one',
            symbol: '1',
            word: 'one',
            translation: '',
            imageAlt: '1',
          },
          { id: 'A', symbol: 'A', word: 'ay', translation: '', imageAlt: 'A' },
        ]}
        revealedIds={revealed}
        onReveal={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
    </Styled.Preview>
  )
}
export const NativeSymbols: Story = { render: () => <NativeSymbolsPreview /> }

function GuidedRoleplayPreview({
  initial = 'cue',
}: {
  initial?: 'cue' | 'hint' | 'full'
}) {
  const [level, setLevel] = useState(initial)
  return (
    <Styled.Preview>
      <LearningDialogue
        density="compact"
        guidance={{ level, onChange: setLevel }}
        lines={[
          {
            id: '1',
            speaker: 'Ana',
            side: 'start',
            cue: 'Ask about a fruit.',
            hint: 'Do you … apples?',
            content: 'Do you like apples?',
          },
          {
            id: '2',
            speaker: 'Kim',
            side: 'end',
            cue: 'Say no. Choose a fruit.',
            hint: 'No. I like …',
            content: 'No. I like mangoes.',
          },
          {
            id: '3',
            speaker: 'Ana',
            side: 'start',
            cue: 'Give the price.',
            hint: 'A mango is … dollars.',
            content: 'A mango is 3 dollars.',
          },
          {
            id: '4',
            speaker: 'Kim',
            side: 'end',
            cue: 'Choose two fruits.',
            hint: 'A mango and …, please.',
            content: 'A mango and a banana, please.',
          },
          {
            id: '5',
            speaker: 'Ana',
            side: 'start',
            cue: 'Give the total.',
            hint: 'That’s … dollars.',
            content: 'That’s 5 dollars.',
          },
          {
            id: '6',
            speaker: 'Kim',
            side: 'end',
            cue: 'Say thank you.',
            hint: 'Thank …!',
            content: 'Thank you!',
          },
        ]}
      />
    </Styled.Preview>
  )
}
export const GuidedRoleplayChallenge: Story = {
  render: () => <GuidedRoleplayPreview />,
}
export const GuidedRoleplayTips: Story = {
  render: () => <GuidedRoleplayPreview initial="hint" />,
}
export const GuidedRoleplayModel: Story = {
  render: () => <GuidedRoleplayPreview initial="full" />,
}
export const ExpandedQuestionSupports: Story = {
  render: () => (
    <Styled.Preview>
      <RevealCard
        presentation="prompt"
        marker="1"
        revealed
        answer="She likes mangoes."
      >
        What fruit does Kim like?
      </RevealCard>
      <RevealCard
        presentation="prompt"
        marker="2"
        revealed
        answer="No, she doesn’t."
      >
        Does Kim like watermelons?
      </RevealCard>
      <RevealCard
        presentation="prompt"
        marker="3"
        revealed
        answer="They’re two dollars."
      >
        How much are the carrots?
      </RevealCard>
    </Styled.Preview>
  ),
}
export const ProportionalDialogueGaps: Story = {
  render: () => (
    <Styled.Preview>
      <LearningDialogue
        density="compact"
        lines={[
          {
            id: 'short',
            speaker: 'Ana',
            side: 'start',
            content: 'Yes, I do.',
            parts: ['Yes, I ', { id: 'do', answer: 'do' }, '.'],
          },
          {
            id: 'long',
            speaker: 'Kim',
            side: 'end',
            content: 'I don’t like onions.',
            parts: ['I ', { id: 'negative', answer: 'don’t like' }, ' onions.'],
          },
        ]}
        revealedGapIds={['do', 'negative']}
      />
    </Styled.Preview>
  ),
}

function CompleteAlphabetPreview() {
  const [pronunciation, setPronunciation] = useState(false)
  const speech = useAlphabetSpeech()
  return (
    <Styled.Preview>
      <VocabularyGrid
        layout="reference"
        interaction="listen"
        revealVariant="tooltip"
        items={alphabetLetters.map((item) => ({
          id: item.id,
          symbol: item.symbol,
          word: item.word,
          translation: '',
          imageAlt: item.symbol,
        }))}
        revealedIds={[]}
        showAll={pronunciation}
        onPlay={(id) => {
          const line = alphabetLetters.find((item) => item.id === id)
          if (line) speech.speak([line])
        }}
        controls={{
          showInitial: pronunciation,
          onToggleInitial: () => setPronunciation(!pronunciation),
          labels: {
            hint: pronunciation ? 'Hide pronunciation' : 'Show pronunciation',
          },
        }}
      />
    </Styled.Preview>
  )
}
export const CompleteAlphabetReference: Story = {
  render: () => <CompleteAlphabetPreview />,
  tags: ['visual-review'],
}

export const LearnerWithPhoto: Story = {
  render: () => (
    <LearningDialogue
      learnerIdentity={{ firstName: 'Marina', avatarUrl: learnerPortrait }}
      lines={[
        {
          id: 'teacher',
          speaker: 'Teacher',
          side: 'start',
          content: 'What’s your name?',
        },
        {
          id: 'learner',
          speaker: 'You',
          participant: 'learner',
          side: 'end',
          content: 'My name is Marina.',
        },
      ]}
    />
  ),
}
export const LearnerWithoutPhoto: Story = {
  render: () => (
    <LearningDialogue
      lines={[
        {
          id: 'teacher',
          speaker: 'Teacher',
          side: 'start',
          content: 'Where are you from?',
        },
        {
          id: 'learner',
          speaker: 'You',
          participant: 'learner',
          side: 'end',
          content: 'I’m from …',
        },
      ]}
    />
  ),
}

function PairedDialoguePreview({
  initial = 'cue',
  modelsEnabled = true,
}: {
  initial?: 'cue' | 'hint' | 'full'
  modelsEnabled?: boolean
}) {
  const [hintedLineIds, setHintedLineIds] = useState<string[]>(
    initial === 'hint' ? ['a1'] : [],
  )
  const [revealedLineIds, setRevealedLineIds] = useState<string[]>(
    initial === 'full' ? ['a1'] : [],
  )
  return (
    <Styled.Preview>
      <LearningDialogue
        presentation="paired"
        sequentialGuidance={{
          hintedLineIds,
          revealedLineIds,
          onRevealHint: (id) =>
            setHintedLineIds((old) => (id ? [...old, id] : [])),
          onRevealModel: modelsEnabled
            ? (id) => setRevealedLineIds((old) => (id ? [...old, id] : []))
            : undefined,
        }}
        lines={[
          {
            id: 'q1',
            speaker: 'Teacher',
            side: 'start',
            content: 'What’s your name?',
          },
          {
            id: 'a1',
            speaker: 'You',
            participant: 'learner',
            side: 'end',
            guidanceLabel: 'Your name',
            cue: 'Say your name.',
            hint: 'Use your first name.',
            content: 'My name is …',
          },
          {
            id: 'q2',
            speaker: 'Teacher',
            side: 'start',
            content: 'Where are you from?',
          },
          {
            id: 'a2',
            speaker: 'You',
            participant: 'learner',
            side: 'end',
            guidanceLabel: 'Your city',
            cue: 'Say your city or country.',
            hint: 'Use a city or a country.',
            content: 'I’m from …',
          },
        ]}
      />
    </Styled.Preview>
  )
}
export const SequentialHintsOnly: Story = {
  render: () => <PairedDialoguePreview modelsEnabled={false} />,
}
export const PairedDialogue: Story = { render: () => <PairedDialoguePreview /> }
export const PairedDialogueHint: Story = {
  render: () => <PairedDialoguePreview initial="hint" />,
}
export const PairedDialogueModel: Story = {
  render: () => <PairedDialoguePreview initial="full" />,
}

function ContextVocabularyExample() {
  const [revealed, setRevealed] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)
  const [showInitial, setShowInitial] = useState(false)
  return (
    <Styled.Preview>
      <VocabularyGrid
        items={[
          {
            id: 'context',
            imageUrl: learnerPortrait,
            imageAlt: 'A person describing a demanding week',
            word: 'be snowed under',
            translation: 'estar sobrecarregada',
            example: 'I’m snowed under with deadlines this week',
          },
        ]}
        revealedIds={revealed}
        activeId="context"
        imageVariant="scene"
        imageAspectRatio={1}
        imageFit="contain"
        density="regular"
        revealVariant="tooltip"
        showAll={showAll}
        showInitial={showInitial}
        controls={{
          showAll,
          showInitial,
          onToggleAll: () => setShowAll(!showAll),
          onToggleInitial: () => setShowInitial(!showInitial),
        }}
        onReveal={(id) => setRevealed([id])}
      />
    </Styled.Preview>
  )
}
export const ContextualVocabulary: Story = {
  render: () => <ContextVocabularyExample />,
}

export const PatternGrammar: Story = {
  render: () => (
    <Styled.Preview>
      <GrammarTable
        title="Evidence and wording"
        layout="patterns"
        columns={{ subject: 'Purpose', example: 'Pattern and example' }}
        rows={[
          {
            id: 'view',
            subject: 'A view',
            verb: 'seem + adjective',
            example: 'The second half seemed a little rushed',
          },
          {
            id: 'request',
            subject: 'A request',
            verb: 'I wonder if we could …',
            example: 'I wonder if we could prepare the answers together',
          },
        ]}
      />
    </Styled.Preview>
  ),
}
