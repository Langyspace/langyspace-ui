import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { FieldRoot } from '../../../src/components/Form/FieldRoot'
import { TextInput } from '../../../src/components/Form/TextInput'
import { Button } from '../../../src/components/Button/Button'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { PromptExercise } from '../shared/LessonExercises'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import {
  numbers,
  letters,
  numberChecks,
  dialogue,
  gaps,
  portraits,
  prompts,
  anaContact,
  emmaContact,
  call,
} from './A102.data'
import scene from './assets/scene-ana-offering-contact.webp'
import type { A102Speech, SymbolItem } from './A102.types'

function Symbols({
  items,
  speech,
}: {
  items: readonly SymbolItem[]
  speech: A102Speech
}) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [hint, setHint] = useState(false)
  return (
    <VocabularyGrid
      columns={3}
      revealOnHover={false}
      revealVariant="tooltip"
      items={items.map((item) => ({
        id: item.id,
        symbol: item.symbol,
        word: item.word,
        translation: '',
        imageAlt: item.symbol,
      }))}
      revealedIds={revealed}
      showAll={all}
      showInitial={hint}
      onReveal={(id) =>
        setRevealed((old) => (old.includes(id) ? old : [...old, id]))
      }
      onPlay={(id) => {
        const line = items.find((item) => item.id === id)
        if (line) speech.speak([line])
      }}
      controls={{
        showAll: all,
        showInitial: hint,
        onToggleAll: () => setAll(!all),
        onToggleInitial: () => setHint(!hint),
      }}
    />
  )
}
export function NumberVocabulary({
  second,
  speech,
}: {
  second?: boolean
  speech: A102Speech
}) {
  return (
    <Symbols
      items={numbers.slice(second ? 5 : 0, second ? 10 : 5)}
      speech={speech}
    />
  )
}
export function AlphabetReference({ speech }: { speech: A102Speech }) {
  const [pronunciation, setPronunciation] = useState(false)
  return (
    <VocabularyGrid
      layout="reference"
      interaction="listen"
      revealVariant="tooltip"
      items={letters.map((item) => ({
        id: item.id,
        symbol: item.symbol,
        word: item.word,
        translation: '',
        imageAlt: item.symbol,
      }))}
      revealedIds={[]}
      showAll={pronunciation}
      onPlay={(id) => {
        const line = letters.find((item) => item.id === id)
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
  )
}
export function AudioChoices({ index }: { index: 0 | 1 | 2 }) {
  const [selected, setSelected] = useState<number>()
  const item = numberChecks[index]
  return (
    <Common.Stack role="group" aria-label={item.title}>
      {item.options.map((option, i) => (
        <QuizOption
          key={option}
          letter={String.fromCharCode(65 + i)}
          aria-pressed={selected === i}
          state={
            selected === undefined
              ? 'default'
              : selected === i
                ? i === item.correctIndex
                  ? 'correct'
                  : 'wrong'
                : 'default'
          }
          onClick={() => setSelected(i)}
        >
          {option}
        </QuizOption>
      ))}
    </Common.Stack>
  )
}
export function Dialogue({
  speech,
  fillGaps = false,
}: {
  speech: A102Speech
  fillGaps?: boolean
}) {
  const [translated, setTranslated] = useState<string[]>([])
  const [revealed, setRevealed] = useState<string[]>([])
  const lines = fillGaps ? gaps : dialogue
  return (
    <LearningDialogue
      density="compact"
      lines={lines.map((line) => ({
        id: line.id,
        speaker: line.speaker,
        avatarUrl: portraits[line.speaker],
        side: line.speaker === 'Kim' ? 'start' : 'end',
        content: line.text,
        translation: line.translation,
        parts: 'parts' in line ? line.parts : undefined,
        audioLabel: `Listen to ${line.speaker}`,
      }))}
      playingId={speech.playingId}
      onPlay={(id) => {
        const line = lines.find((line) => line.id === id)
        if (line) speech.speak([line])
      }}
      translatedIds={translated}
      onTranslate={(id) =>
        setTranslated((old) =>
          old.includes(id) ? old.filter((value) => value !== id) : [...old, id],
        )
      }
      revealedGapIds={revealed}
      onRevealGap={(id, lineId) => {
        setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        const line = lines.find((line) => line.id === lineId)
        if (line) speech.speak([line])
      }}
    />
  )
}
export function Grammar() {
  return (
    <Common.Stack>
      <GrammarTable
        title="Names and numbers"
        captionVisibility="screen-reader"
        columns={{ subject: 'Use', verb: 'Form', example: 'Example' }}
        rows={[
          {
            id: 'my',
            subject: 'About me',
            verb: 'my',
            example: 'My last name is Souza.',
          },
          {
            id: 'your',
            subject: 'About you',
            verb: 'your',
            example: 'What’s your phone number?',
          },
          {
            id: 'it',
            subject: 'A name or number',
            verb: 'It’s',
            example: 'It’s 984 221 507.',
          },
        ]}
      />
      <Common.Hint>What is = What’s. It is = It’s.</Common.Hint>
      <PromptExercise
        numbered={false}
        items={[
          {
            id: 'check',
            prompt: 'Is that right?',
            answer: 'Yes, that’s right. / No, sorry. It’s …',
          },
        ]}
      />
    </Common.Stack>
  )
}
export function ContactPractice({ learnerName }: { learnerName: string }) {
  const [fields, setFields] = useState({
    first: learnerName,
    last: '',
    phone: '',
  })
  return (
    <Common.Columns>
      <PromptExercise items={prompts.contact} />
      <Common.Surface>
        <Common.Heading>New contact</Common.Heading>
        {(
          [
            { id: 'first', label: 'First name' },
            { id: 'last', label: 'Last name' },
            { id: 'phone', label: 'Phone number' },
          ] as const
        ).map((field) => (
          <FieldRoot key={field.id} label={field.label}>
            <TextInput
              autoComplete="off"
              spellCheck={false}
              value={fields[field.id]}
              onChange={(event) =>
                setFields((old) => ({ ...old, [field.id]: event.target.value }))
              }
            />
          </FieldRoot>
        ))}
        <Common.Hint>
          Your teacher writes what you say. Check the details.
        </Common.Hint>
        <Button
          variant="text"
          size="sm"
          onClick={() => setFields({ first: '', last: '', phone: '' })}
        >
          Clear contact
        </Button>
      </Common.Surface>
    </Common.Columns>
  )
}
const callTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 15.625rem), 33.75rem)',
})
export function CallPractice({
  active,
  speech,
}: {
  active: boolean
  speech: A102Speech
}) {
  const [state, setState] = useState<'idle' | 'connected' | 'ended'>('idle')
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (!active) {
      setState('idle')
      setIndex(0)
    }
  }, [active])
  const line = call[index]!
  return (
    <ThemeProvider theme={callTheme}>
      <CallSimulation
        density="compact"
        contactName="Kim"
        initials="K"
        avatarUrl={portraits.Kim}
        state={state}
        elapsedLabel=""
        caption={state === 'connected' ? line.text : undefined}
        captionLabel="Kim says"
        onCall={() => {
          setState('connected')
          setIndex(0)
          speech.speak([call[0]])
        }}
        onHangUp={() => {
          speech.stop()
          setState('ended')
        }}
        disabled={!active}
        labels={{
          idle: 'Answer Kim’s call',
          call: 'Answer',
          callAgain: 'Call again',
          hangUp: 'End call',
          ended: 'Call ended',
        }}
      >
        <Common.Surface>
          <Common.Heading>Ana’s contact</Common.Heading>
          <KeyValueList tone="material" items={anaContact} />
        </Common.Surface>
        <PromptExercise
          numbered={false}
          items={[
            {
              id: 'call.support',
              prompt: 'Is that right?',
              answer: 'Yes, that’s right. / No, sorry. It’s …',
            },
          ]}
        />
        {state === 'connected' ? (
          <Common.Row>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => speech.speak([line])}
            >
              Replay
            </Button>
            <Button
              size="sm"
              variant="brand"
              onClick={() => {
                if (index < call.length - 1) {
                  setIndex(index + 1)
                  speech.speak([call[index + 1]!])
                } else {
                  speech.stop()
                  setState('ended')
                }
              }}
            >
              {index === call.length - 1 ? 'Finish call' : 'Next question'}
            </Button>
          </Common.Row>
        ) : null}
      </CallSimulation>
    </ThemeProvider>
  )
}
export function SwapRoles() {
  return (
    <RolePlayExercise
      presentation="instructions"
      situation="You are Kim. Call your teacher, who is Emma. Check her contact details."
      roles={['You: Kim', 'Teacher: Emma']}
      steps={[
        { id: 'ask', label: 'Ask for Emma’s first name and last name.' },
        { id: 'spell', label: 'Ask her to spell her last name.' },
        {
          id: 'check',
          label:
            'Read the phone number with one wrong digit. Let Emma correct it.',
        },
      ]}
      completedIds={[]}
      onStepToggle={() => undefined}
      tracker={
        <Common.Surface>
          <Common.Heading>Emma’s contact</Common.Heading>
          <KeyValueList tone="material" items={emmaContact} />
        </Common.Surface>
      }
      support={[
        'What’s your last name?',
        'How do you spell it?',
        'Is that right?',
      ]}
    >
      <Common.Hint>Then swap roles and use new details.</Common.Hint>
    </RolePlayExercise>
  )
}
export function Homework() {
  return (
    <Common.Stack>
      <Common.Surface>
        <Common.Heading>Numbers and letters</Common.Heading>
        <p>Review the digits and the letters in your name. Say them aloud.</p>
      </Common.Surface>
      <Common.Surface>
        <Common.Heading>A new contact</Common.Heading>
        <p>
          Practise your name, spelling and a made-up phone number. Ask someone
          to write what they hear.
        </p>
      </Common.Surface>
    </Common.Stack>
  )
}
export function ContactIntroduction() {
  return (
    <RolePlayExercise
      presentation="instructions"
      situation="Ana and Kim want to save each other’s contact details."
      image={{ src: scene, alt: 'Ana smiles and holds a smartphone.' }}
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      tracker={<PromptExercise items={prompts.review} />}
    />
  )
}
