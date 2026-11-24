import { LessonPracticePlan } from '../shared/LessonBookends'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialLearningDialogue as LearningDialogue } from '../shared/MaterialLearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { FluencyTimer } from '../../../src/components/InteractiveMaterial/FluencyTimer'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { FieldRoot } from '../../../src/components/Form/FieldRoot'
import { TextInput } from '../../../src/components/Form/TextInput'
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
  call,
} from './A102.data'
import scene from './assets/scene-ana-offering-contact.webp'
import reception from './assets/scene-school-reception.webp'
import ringtone from './assets/classic-phone-ring.mp3'
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
export function NumberReference({ speech }: { speech: A102Speech }) {
  const [all, setAll] = useState(false)
  return (
    <VocabularyGrid
      layout="reference"
      interaction="listen"
      revealOnHover={false}
      revealLabel="Reveal and listen"
      items={numbers.map((item) => ({
        id: item.id,
        symbol: item.symbol,
        word: item.word,
        translation: '',
        imageAlt: item.symbol,
      }))}
      revealedIds={[]}
      showAll={all}
      onPlay={(id) => {
        const line = numbers.find((item) => item.id === id)
        if (line) speech.speak([line])
      }}
      controls={{
        showInitial: all,
        onToggleInitial: () => setAll(!all),
        labels: {
          hint: all ? 'Hide English number words' : 'Show English number words',
        },
      }}
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
          hint: pronunciation
            ? 'Hide Portuguese sound tips'
            : 'Show Portuguese sound tips',
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
          feedbackOutcome={i === item.correctIndex ? 'correct' : 'wrong'}
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
        title="My and your"
        captionVisibility="screen-reader"
        columns={{ subject: 'Who?', verb: 'Word + noun', example: 'Example' }}
        rows={[
          {
            id: 'my',
            subject: 'About me',
            verb: 'my + name',
            example: 'My name is Ana.',
          },
          {
            id: 'your',
            subject: 'About you',
            verb: 'your + name',
            example: 'What’s your name?',
          },
        ]}
      />
    </Common.Stack>
  )
}
export function ContactPractice() {
  const [fields, setFields] = useState({ first: '', last: '', phone: '' })
  return (
    <ExercisePanel
      variant="workstation"
      title="New student"
      workstationMeta={{
        clock: '09:41',
        date: '20 Nov',
      }}
      media={
        <img
          src={reception}
          alt="Kim welcomes Ana at the reception desk of an English school."
        />
      }
    >
      {(
        [
          { id: 'first', label: 'First name' },
          { id: 'last', label: 'Last name' },
          { id: 'phone', label: 'Phone number' },
        ] as const
      ).map((field) => (
        <FieldRoot key={field.id} label={field.label}>
          <TextInput
            size="md"
            type={field.id === 'phone' ? 'tel' : 'text'}
            autoComplete="off"
            spellCheck={false}
            value={fields[field.id]}
            onChange={(event) =>
              setFields((old) => ({ ...old, [field.id]: event.target.value }))
            }
          />
        </FieldRoot>
      ))}
    </ExercisePanel>
  )
}
const callTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth:
    'clamp(11.875rem, min(calc((100dvh - 15.625rem) / 2), 50cqw), 16.875rem)',
  phoneHeight:
    'clamp(23.75rem, min(calc(100dvh - 15.625rem), 100cqw), 33.75rem)',
})
export function CallPractice({
  active,
  speech,
  lines = call,
}: {
  active: boolean
  speech: A102Speech
  lines?: readonly { id: string; text: string; caption?: string }[]
}) {
  const [state, setState] = useState<'idle' | 'connected' | 'ended'>('idle')
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (!active) {
      setState('idle')
      setIndex(0)
    }
  }, [active])
  const line = lines[index]!
  return (
    <ThemeProvider theme={callTheme}>
      <CallSimulation
        density="compact"
        direction="incoming"
        active={active}
        ringtoneSrc={ringtone}
        ringtoneVolume={0.7}
        contactName="Kim"
        initials="K"
        avatarUrl={portraits.Kim}
        state={state}
        elapsedLabel=""
        caption={
          state === 'connected' ? (line.caption ?? line.text) : undefined
        }
        captionLabel="Kim"
        onCall={() => {
          setState('connected')
          setIndex(0)
          speech.speak([lines[0]!])
        }}
        onHangUp={() => {
          speech.stop()
          setState('ended')
        }}
        disabled={!active}
        playback={{
          index,
          count: lines.length,
          disabled: !active,
          onReplay: () => speech.speak([line]),
          onNext: () => {
            const next = lines[index + 1]
            if (next) {
              setIndex(index + 1)
              speech.speak([next])
            }
          },
          labels: {
            replay: 'Replay',
            next: 'Next question',
            progress: 'Call questions',
          },
        }}
        labels={{
          idle: 'Incoming call',
          ringing: 'Incoming call',
          call: 'Answer',
          callAgain: 'Answer again',
          hangUp: 'End call',
          ended: 'Call ended',
        }}
      >
        <Common.Surface>
          <Common.Heading>Ana’s contact</Common.Heading>
          <KeyValueList tone="material" density="compact" items={anaContact} />
        </Common.Surface>
        <Common.Row>
          <Common.Chip>Yes, that’s right</Common.Chip>
          <Common.Chip>No, sorry. It’s …</Common.Chip>
        </Common.Row>
      </CallSimulation>
    </ThemeProvider>
  )
}
export function OutgoingCall({ active }: { active: boolean }) {
  const teacher = useMaterialTeacher()
  const [state, setState] = useState<'idle' | 'connected' | 'ended'>('idle')
  useEffect(() => {
    if (!active) setState('idle')
  }, [active])
  const firstName =
    teacher.name === 'Your teacher' ? '' : teacher.name.split(/\s+/)[0]
  const contactName = firstName || 'Your teacher'
  return (
    <ThemeProvider theme={callTheme}>
      <CallSimulation
        density="compact"
        direction="outgoing"
        active={active}
        contactName={contactName}
        initials={firstName ? firstName.slice(0, 1) : 'T'}
        avatarUrl={teacher.avatarUrl}
        state={state}
        elapsedLabel=""
        messages={[
          firstName ? `Hi, ${firstName}! How are you?` : 'Hi! How are you?',
          'What’s your last name?',
          'How do you spell it?',
          'What’s your phone number?',
        ].map((text, index) => ({ id: String(index), text }))}
        onCall={() => setState('connected')}
        onHangUp={() => setState('ended')}
        disabled={!active}
        labels={{
          idle: 'Your turn to ask',
          call: `Call ${contactName}`,
          callAgain: 'Call again',
          hangUp: 'End call',
          ended: 'Call ended',
        }}
      />
    </ThemeProvider>
  )
}
export function VoiceMessageChallenge({ active }: { active: boolean }) {
  const [remaining, setRemaining] = useState(30)
  const [running, setRunning] = useState(false)
  const deadline = useRef(0)
  useEffect(() => {
    if (!active) setRunning(false)
  }, [active])
  useEffect(() => {
    if (!active || !running) return
    const timer = window.setInterval(() => {
      const left = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      )
      setRemaining(left)
      if (!left) setRunning(false)
    }, 200)
    return () => window.clearInterval(timer)
  }, [active, running])
  return (
    <FluencyTimer
      title="Ready?"
      rounds={[{ id: 'voice-message', seconds: 30 }]}
      roundIndex={remaining === 0 ? 1 : 0}
      remainingSeconds={remaining}
      running={running}
      support={['My name is …', 'My last name is …', 'My number is …']}
      onToggle={() => {
        if (running) setRunning(false)
        else {
          deadline.current = Date.now() + remaining * 1000
          setRunning(true)
        }
      }}
      onReset={() => {
        setRunning(false)
        setRemaining(30)
        deadline.current = 0
      }}
      labels={{
        start: 'Start',
        pause: 'Pause',
        restart: 'Try again',
        finished: 'Time’s up!',
      }}
    />
  )
}
export function Homework() {
  return (
    <LessonPracticePlan
      tasks={[
        {
          title: 'Numbers and letters',
          description:
            'Review the digits and the letters in your name. Say them aloud.',
        },
        {
          title: 'A new contact',
          description:
            'Practise your name, spelling and a made-up phone number. Ask someone to write what they hear.',
        },
      ]}
    />
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
