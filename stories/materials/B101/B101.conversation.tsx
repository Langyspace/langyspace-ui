import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { GuidedScenario } from '../shared/GuidedScenario'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { content, kim, leo, image } from './B101.data'
import type { YourVersionSectionProps } from './B101.types'
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
export function YourVersionSection({
  swapped,
  support,
}: YourVersionSectionProps) {
  const turns = swapped ? swappedTurns : firstTurns
  const prefix = swapped ? 'swapped' : 'first'
  return (
    <LearningDialogue
      density="compact"
      lines={turns.map((turn, i) => {
        const learner = turn.speaker === 'You'
        return {
          id: `${prefix}-${i}`,
          speaker: turn.speaker,
          avatarUrl: turn.speaker === 'Kim' ? kim : undefined,
          side: learner ? 'end' : 'start',
          content: learner ? (
            <S.LearnerCue>{support ? turn.text : turn.cue}</S.LearnerCue>
          ) : (
            turn.text
          ),
        }
      })}
    />
  )
}
export function ListeningSection({ active }: { active: boolean }) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({})
  return (
    <ThemeProvider theme={lessonVoiceMessageTheme}>
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
          ...voiceMessageTranscriptLabels,
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
  return (
    <GuidedScenario
      selectionLabel="Choose Kim’s day"
      cases={roleplayCases.map((current) => {
        const questionActivity =
          current.id === 'bike' ? 'riding your bike' : current.activity
        return {
          id: current.id,
          label: current.label,
          image: { src: image(current.clue), alt: current.alt },
          facts: [
            { id: 'activity', label: 'Activity', value: current.activity },
            { id: 'duration', label: 'How long', value: current.duration },
            { id: 'partner', label: 'With whom', value: current.partner },
          ],
          lines: [
            {
              id: 'ask-activity',
              speaker: 'You',
              side: 'end' as const,
              cue: 'Ask what Kim has been doing.',
              hint: 'What have you been …?',
              content: 'What have you been doing?',
            },
            {
              id: 'activity',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start' as const,
              content: `I’ve been ${current.activity}.`,
            },
            {
              id: 'ask-duration',
              speaker: 'You',
              side: 'end' as const,
              cue: 'Ask how long.',
              hint: 'How long have you been …?',
              content: `How long have you been ${questionActivity}?`,
            },
            {
              id: 'duration',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start' as const,
              content: `For ${current.duration}.`,
            },
            {
              id: 'ask-partner',
              speaker: 'You',
              side: 'end' as const,
              cue: 'Ask who was with her.',
              hint: 'Who have you been … with?',
              content: `Who have you been ${questionActivity} with?`,
            },
            {
              id: 'partner',
              speaker: 'Kim',
              avatarUrl: kim,
              side: 'start' as const,
              content: `With ${current.partner}.`,
            },
          ],
        }
      })}
    />
  )
}
