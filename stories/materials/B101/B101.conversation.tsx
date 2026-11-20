import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { Button } from '../../../src/components/Button/Button'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { content, kim, leo, image, toggle } from './B101.data'
import type { SpeechSectionProps } from './B101.types'
import voice from './assets/audio/L.9.mp3'
import * as S from './B101.styles'
const firstTurns = [
  {
    speaker: 'Kim',
    text: 'Hi! I’m back! What have you been doing lately?',
    audio: 'Y8.1',
  },
  {
    speaker: 'You',
    text: 'I’ve been … a lot.',
    cue: 'say what you’ve been doing',
  },
  {
    speaker: 'Kim',
    text: 'Really? You seem busy! How long have you been …ing?',
  },
  { speaker: 'You', text: 'For … · Since …', cue: 'say how long' },
  {
    speaker: 'Kim',
    text: 'Wow! And this week? Have you finished anything?',
    audio: 'Y8.5',
  },
  {
    speaker: 'You',
    text: 'Yes, I’ve finished … · No, I haven’t.',
    cue: 'say yes or no, and what',
  },
  {
    speaker: 'Kim',
    text: 'I’ve been sleeping all day. I have jet lag! I’m still a little tired.',
    audio: 'Y8.7',
  },
  {
    speaker: 'You',
    text: 'Oh no! How was Korea?',
    cue: 'say something, and ask about Korea',
  },
]
const swappedTurns = [
  {
    speaker: 'You',
    text: 'I’m back! What have you been doing lately?',
    cue: 'say you’re back and ask what she’s been doing',
  },
  {
    speaker: 'Teacher',
    text: 'Not much! I’ve been working a lot. And I’ve been playing the guitar.',
  },
  { speaker: 'You', text: 'How long have you been …ing?', cue: 'ask how long' },
  { speaker: 'Teacher', text: 'For three months. Phew, I’m very hot!' },
  {
    speaker: 'You',
    text: 'Have you been …ing?',
    cue: 'look at your teacher and guess one more thing',
  },
  {
    speaker: 'Teacher',
    text: 'Yes, I have! I’ve been running in the park. For an hour!',
  },
  {
    speaker: 'You',
    text: 'I was in … I visited …',
    cue: 'say where you were, and what you did there',
  },
  { speaker: 'Teacher', text: 'Wow! Welcome back! Have some cake.' },
]
export function YourVersionSection({ speech }: SpeechSectionProps) {
  const [swapped, setSwapped] = useState(false),
    [support, setSupport] = useState(false),
    [marked, setMarked] = useState<string[]>([])
  const turns = swapped ? swappedTurns : firstTurns,
    prefix = swapped ? 'swapped' : 'first'
  return (
    <S.Stack>
      <S.Row>
        <b>{swapped ? 'You: back from a trip' : 'You: about your life'}</b>
        <S.Hint>{swapped ? 'Teacher: friend' : 'Teacher: Kim'}</S.Hint>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            speech.stop()
            setSwapped(!swapped)
          }}
        >
          {swapped ? '⇄ Swap back' : '⇄ Swap roles'}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Hide support' : 'Show support'}
        </Button>
      </S.Row>
      {swapped ? (
        <S.Hint>
          Now you are back from a trip. Ask your teacher. Her answers are a
          model: she can change them.
        </S.Hint>
      ) : null}
      <S.Stack>
        <LearningDialogue
          density="compact"
          lines={turns.map((turn, i) => {
            const id = `${prefix}-${i}`,
              learner = turn.speaker === 'You'
            return {
              id,
              speaker: turn.speaker,
              avatarUrl: turn.speaker === 'Kim' ? kim : undefined,
              side: learner ? 'end' : 'start',
              actionLabel: learner ? `Mark response: ${turn.cue}` : undefined,
              content: learner ? (
                <S.LearnerCue>
                  {support ? turn.text : turn.cue}
                  {support ? <S.Hint>{turn.cue}</S.Hint> : null}
                </S.LearnerCue>
              ) : (
                turn.text
              ),
            }
          })}
          completedIds={marked}
          onComplete={(id) => setMarked((old) => toggle(old, id))}
        />
      </S.Stack>
    </S.Stack>
  )
}
const listeningTheme = withVoiceMessageLayout({
  contentWidth: '65rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 15.625rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})

export function ListeningSection({ active }: { active: boolean }) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({})
  return (
    <ThemeProvider theme={listeningTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Leo', avatarUrl: leo, status: 'online' }}
        greeting={{
          text: 'Leo! Kim is back. Where are you??',
          timestamp: '19:02',
        }}
        audio={{
          id: 'b101-leo-message',
          src: voice,
          transcript: content.listening.transcript,
          timestamp: '19:15',
        }}
        active={active}
        transcriptReveal="third-listen"
        labels={{
          play: 'Play Leo’s message',
          pause: 'Pause',
          loading: 'Loading',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden: 'The transcript appears on the third listen.',
          audioUnavailable: 'Audio unavailable',
          audioError: 'Could not play the message. Try again.',
          retry: 'Try again',
          correct: 'Correct',
          incorrect: 'Try again',
          questions: 'Did Leo say this?',
          conversation: 'Conversation',
        }}
        questions={content.listening.questions.map((q, i) => {
          const id = String(i),
            chosen = attempts[id] ?? [],
            done = chosen.includes(String(q.a))
          return {
            id,
            prompt: q.q,
            disabled: done,
            value: chosen.at(-1),
            feedback: done ? q.say : chosen.length ? 'Try again.' : undefined,
            choices: q.o.map((label, j) => ({
              id: String(j),
              label,
              feedbackOutcome:
                j === q.a ? ('correct' as const) : ('wrong' as const),
              feedback: chosen.includes(String(j))
                ? j === q.a
                  ? 'correct'
                  : 'incorrect'
                : undefined,
            })),
          }
        })}
        onAnswer={(id, choice) =>
          setAttempts((old) => ({ ...old, [id]: [...(old[id] ?? []), choice] }))
        }
      />
    </ThemeProvider>
  )
}
const roleplayCases = [
  {
    id: 'soccer',
    label: 'Monday',
    clue: 'muddy-shoes',
    alt: 'Muddy soccer shoes beside the door.',
    activity: 'playing soccer',
    duration: 'an hour',
    partner: 'my friends',
  },
  {
    id: 'bike',
    label: 'Wednesday',
    clue: 'hot',
    alt: 'Someone feeling hot after being outdoors.',
    activity: 'riding my bike',
    duration: 'two hours',
    partner: 'my sister',
  },
  {
    id: 'bus',
    label: 'Saturday',
    clue: 'wet-shirt',
    alt: 'A wet shirt after being outside in the rain.',
    activity: 'waiting for the bus',
    duration: 'twenty minutes',
    partner: 'a friend',
  },
]
export function RolePlaySection() {
  const [index, setIndex] = useState(0)
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  const current = roleplayCases[index]!
  const questionActivity =
    current.id === 'bike' ? 'riding your bike' : current.activity
  return (
    <RolePlayExercise
      presentation="instructions"
      density="compact"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      image={{ src: image(current.clue), alt: current.alt }}
      tracker={
        <LearningDialogue
          density="compact"
          guidance={{ level, onChange: setLevel }}
          lines={[
            {
              id: 'ask-activity',
              speaker: 'You',
              side: 'end',
              cue: 'Ask what Kim has been doing.',
              hint: 'What have you been …?',
              content: 'What have you been doing?',
            },
            {
              id: 'activity',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start',
              content: `I’ve been ${current.activity}.`,
            },
            {
              id: 'ask-duration',
              speaker: 'You',
              side: 'end',
              cue: 'Ask how long.',
              hint: 'How long have you been …?',
              content: `How long have you been ${questionActivity}?`,
            },
            {
              id: 'duration',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start',
              content: `For ${current.duration}.`,
            },
            {
              id: 'ask-partner',
              speaker: 'You',
              side: 'end',
              cue: 'Ask who was with her.',
              hint: 'Who have you been … with?',
              content: `Who have you been ${questionActivity} with?`,
            },
            {
              id: 'partner',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start',
              content: `With ${current.partner}.`,
            },
          ]}
        />
      }
    >
      <Common.Row role="group" aria-label="Choose Kim’s day">
        {roleplayCases.map((item, i) => (
          <ChoiceCard
            key={item.id}
            variant="lesson"
            aria-pressed={index === i}
            onClick={() => {
              setIndex(i)
              setLevel('cue')
            }}
          >
            {item.label}
          </ChoiceCard>
        ))}
      </Common.Row>
      <KeyValueList
        density="compact"
        tone="material"
        items={[
          { id: 'activity', label: 'Activity', value: current.activity },
          { id: 'duration', label: 'How long', value: current.duration },
          { id: 'partner', label: 'With whom', value: current.partner },
        ]}
      />
    </RolePlayExercise>
  )
}
