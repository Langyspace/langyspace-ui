import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { GuidedScenario } from '../shared/GuidedScenario'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import type { ListeningProps } from './B201.types'
import { content, kim, raj, image } from './B201.data'
import voice from './assets/b201-raj-message.mp3'
import audioProvenance from './audio-provenance.json'
export function YourVersionSection() {
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  return (
    <LearningDialogue
      density="compact"
      guidance={{ level, onChange: setLevel }}
      lines={[
        {
          id: 'kim-1',
          speaker: 'Kim',
          avatarUrl: kim,
          side: 'start',
          content: 'So, how was your day?',
        },
        {
          id: 'you-1',
          speaker: 'You',
          side: 'end',
          cue: 'Say when and where a problem happened.',
          hint: 'My phone died at… / I was… when…',
          content: 'My phone died at four while I was exploring the city.',
        },
        {
          id: 'kim-2',
          speaker: 'Kim',
          avatarUrl: kim,
          side: 'start',
          content: 'What had you been doing before that?',
        },
        {
          id: 'you-2',
          speaker: 'You',
          side: 'end',
          cue: 'Explain the earlier activity and one earlier action.',
          hint: 'I’d been… / I’d left…',
          content:
            'I’d been using it as a map all day, and I’d left my charger at the hotel.',
        },
        {
          id: 'kim-3',
          speaker: 'Kim',
          avatarUrl: kim,
          side: 'start',
          content: 'How did you sort it out in the end?',
        },
        {
          id: 'you-3',
          speaker: 'You',
          side: 'end',
          cue: 'Explain who helped and how the day ended.',
          hint: 'I’d been waiting for… when… / Eventually,…',
          content:
            'I’d been waiting for twenty minutes when someone lent me a power bank. Eventually, I found my friends.',
        },
      ]}
    />
  )
}
export function ListeningSection({ active }: ListeningProps) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({})
  return (
    <ThemeProvider theme={lessonVoiceMessageTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Raj', avatarUrl: raj, status: 'online' }}
        greeting={{
          text: content.listening.textMessage,
          timestamp: content.listening.textTimestamp,
        }}
        audio={{
          id: 'b201-raj-message',
          src: voice,
          transcript: content.listening.transcript,
          duration: audioProvenance.durationSeconds,
          timestamp: content.listening.voiceTimestamp,
        }}
        active={active}
        transcriptReveal="third-listen"
        labels={{
          play: 'Play Raj’s message',
          pause: 'Pause',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          ...voiceMessageTranscriptLabels,
          transcriptHidden: 'The transcript appears on the third listen.',
          audioError: 'Audio unavailable. Try again.',
          retry: 'Try again',
          questions: 'Did Raj say this?',
          correct: 'Correct',
          incorrect: 'Try again',
        }}
        questions={content.listeningStatements.map((q) => {
          const chosen = attempts[q.id] ?? [],
            correct = q.yes ? 'yes' : 'no',
            done = chosen.includes(correct)
          return {
            id: q.id,
            prompt: q.text,
            value: chosen.at(-1),
            disabled: done,
            feedback: done && !q.yes ? q.correction : undefined,
            choices: ['yes', 'no'].map((id) => ({
              id,
              label: id === 'yes' ? 'Yes' : 'No',
              feedbackOutcome:
                id === correct ? ('correct' as const) : ('wrong' as const),
              feedback: chosen.includes(id)
                ? id === correct
                  ? ('correct' as const)
                  : ('incorrect' as const)
                : undefined,
            })),
          }
        })}
        onAnswer={(id, value) =>
          setAttempts((old) => ({ ...old, [id]: [...(old[id] ?? []), value] }))
        }
      />
    </ThemeProvider>
  )
}
const cases = [
  {
    id: 'train',
    label: 'Missed train',
    image: { src: image('departure-board'), alt: 'A station departure board.' },
    facts: [
      {
        id: 'background',
        label: 'Before the problem',
        value: 'Waiting in a ticket queue for forty minutes.',
      },
      {
        id: 'event',
        label: 'The problem',
        value: 'The train left while you were still queuing.',
      },
      {
        id: 'resolution',
        label: 'The resolution',
        value: 'Station staff helped you catch the next train.',
      },
    ],
    lines: [
      {
        id: 'you-1',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Open the story: say what went wrong.',
        hint: 'Yesterday I missed…',
        content: 'Yesterday I missed my train.',
      },
      {
        id: 'kim-1',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'What had been happening before that?',
      },
      {
        id: 'you-2',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Describe the earlier activity and its duration.',
        hint: 'I’d been… for… when…',
        content:
          'I’d been waiting in a queue for forty minutes when I saw the train had left.',
      },
      {
        id: 'kim-2',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'How did you deal with it?',
      },
      {
        id: 'you-3',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Explain the resolution.',
        hint: 'I spoke to… / Eventually,…',
        content: 'I spoke to a member of staff and caught the next train.',
      },
      {
        id: 'kim-3',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'At least you found a way to get there.',
      },
    ],
  },
  {
    id: 'keys',
    label: 'Locked out',
    image: { src: image('key'), alt: 'A key.' },
    facts: [
      {
        id: 'background',
        label: 'Before the problem',
        value: 'Walking home in the rain for half an hour.',
      },
      {
        id: 'event',
        label: 'The problem',
        value: 'At your door, you realised your keys were at the office.',
      },
      {
        id: 'resolution',
        label: 'The resolution',
        value: 'Your housemate came home with a spare key.',
      },
    ],
    lines: [
      {
        id: 'you-1',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Open the story: say what went wrong.',
        hint: 'I got home, but…',
        content: 'I got home yesterday, but I couldn’t get in.',
      },
      {
        id: 'kim-1',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'What had been happening before that?',
      },
      {
        id: 'you-2',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Give the background and earlier mistake.',
        hint: 'I’d been… for… / I realised I’d left…',
        content:
          'I’d been walking in the rain for half an hour when I realised I’d left my keys at the office.',
      },
      {
        id: 'kim-2',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'How did you deal with it?',
      },
      {
        id: 'you-3',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Explain the resolution.',
        hint: 'Luckily,… had…',
        content: 'Luckily, my housemate came home with a spare key.',
      },
      {
        id: 'kim-3',
        speaker: 'Kim',
        avatarUrl: kim,
        side: 'start' as const,
        content: 'What a relief after that walk.',
      },
    ],
  },
]
export function RolePlaySection() {
  return (
    <GuidedScenario
      cases={cases}
      factLayout="stacked"
      selectionLabel="Choose a travel problem"
    />
  )
}
