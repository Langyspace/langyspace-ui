import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { GuidedScenario } from '../shared/GuidedScenario'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { raj } from '../shared/characterPortraits'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { audioUrl } from './C101.audio'
import content from './C101.content.json'
import cover from './assets/catalog-cover40.webp'
export function YourVersion() {
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  return (
    <LearningDialogue
      density="compact"
      guidance={{ level, onChange: setLevel }}
      lines={[
        {
          id: 'you-1',
          speaker: 'You',
          side: 'end',
          cue: 'Open the conversation and acknowledge one strength.',
          hint: 'Could we talk about…? / Your knowledge…',
          content:
            'Could we talk about Tuesday’s presentation? Your knowledge of the project really came through.',
        },
        {
          id: 'raj-1',
          speaker: 'Raj',
          avatarUrl: raj,
          side: 'start',
          content: 'Sure. What stood out to you?',
        },
        {
          id: 'you-2',
          speaker: 'You',
          side: 'end',
          cue: 'State one concern with evidence from Laura’s email.',
          hint: 'The second half seemed… / When Laura asked…',
          content:
            'The second half seemed rushed, and we didn’t answer Laura’s question about the deadline.',
        },
        {
          id: 'raj-2',
          speaker: 'Raj',
          avatarUrl: raj,
          side: 'start',
          content: 'I was trying to cover everything in thirty minutes.',
        },
        {
          id: 'you-3',
          speaker: 'You',
          side: 'end',
          cue: 'Acknowledge the pressure and propose a specific next step.',
          hint: 'I can see… / Would it be worth…?',
          content:
            'I can see the time pressure. Would it be worth preparing the key answers together next time?',
        },
        {
          id: 'raj-3',
          speaker: 'Raj',
          avatarUrl: raj,
          side: 'start',
          content: 'Yes. Let’s agree which questions each of us will handle.',
        },
      ]}
    />
  )
}
export function Listening({ active }: { active: boolean }) {
  const [answers, setAnswers] = useState<Record<string, string>>()
  return (
    <ThemeProvider theme={lessonVoiceMessageTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Raj', avatarUrl: raj, status: 'online' }}
        greeting={{
          text: 'Hi, Ana. Can I ask you about the presentation?',
          timestamp: '16:05',
        }}
        audio={{
          id: 'c101-raj-message',
          src: audioUrl('c101-raj-message'),
          transcript: content.listening,
          timestamp: '16:20',
        }}
        active={active}
        transcriptReveal="third-listen"
        questions={content.listeningQuestions.map((q, i) => ({
          id: String(i),
          prompt: q.q,
          value: answers?.[i],
          disabled: answers?.[i] === String(q.a),
          feedback:
            answers?.[i] === String(q.a) && q.a === 1 ? q.say : undefined,
          choices: q.o.map((label, j) => ({
            id: String(j),
            label,
            feedbackOutcome:
              j === q.a ? ('correct' as const) : ('wrong' as const),
            feedback:
              answers?.[i] === String(j)
                ? j === q.a
                  ? ('correct' as const)
                  : ('incorrect' as const)
                : undefined,
          })),
        }))}
        onAnswer={(id, value) => setAnswers((old) => ({ ...old, [id]: value }))}
        labels={{
          play: 'Play Raj’s message',
          pause: 'Pause',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden: 'The transcript appears on the third listen.',
          questions: 'Did Raj say this?',
          correct: 'Correct',
          incorrect: 'Try again',
        }}
      />
    </ThemeProvider>
  )
}
const scenarios = [
  {
    id: 'updates',
    label: 'Project updates',
    image: {
      src: cover,
      alt: 'Ana and Kim preparing feedback in a workspace.',
    },
    facts: [
      {
        id: 'observation',
        label: 'What you observed',
        value: 'The last two updates arrived after the meetings.',
      },
      {
        id: 'effect',
        label: 'The effect',
        value: 'The team had to reopen decisions.',
      },
      {
        id: 'goal',
        label: 'A workable change',
        value: 'Send confirmed figures early and flag missing ones.',
      },
    ],
    lines: [
      {
        id: 'you-1',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Describe the observation and its effect without blaming.',
        hint: 'The last two… / This meant…',
        content:
          'The last two updates arrived after our meetings, so we had to reopen the decisions.',
      },
      {
        id: 'raj-1',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content: 'I can’t send figures I don’t have yet.',
      },
      {
        id: 'you-2',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Acknowledge his constraint while keeping your concern clear.',
        hint: 'I understand… / We still need…',
        content:
          'I understand the figures may be late. We still need to know what’s missing before we decide.',
      },
      {
        id: 'raj-2',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content: 'What would you suggest?',
      },
      {
        id: 'you-3',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Propose a feasible change.',
        hint: 'Could you… and flag…?',
        content:
          'Could you send the confirmed figures before the meeting and flag anything outstanding?',
      },
      {
        id: 'raj-3',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content:
          'Yes. I’ll mark what’s missing and send the rest before we start.',
      },
    ],
  },
  {
    id: 'meetings',
    label: 'Meeting discussions',
    image: {
      src: cover,
      alt: 'Ana and Kim preparing a difficult conversation.',
    },
    facts: [
      {
        id: 'observation',
        label: 'What you observed',
        value: 'Raj cut in twice before colleagues finished.',
      },
      {
        id: 'effect',
        label: 'The effect',
        value: 'Two colleagues stopped contributing.',
      },
      {
        id: 'goal',
        label: 'A workable change',
        value: 'Let each person finish before inviting responses.',
      },
    ],
    lines: [
      {
        id: 'you-1',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Describe the behaviour and effect specifically.',
        hint: 'When… / I noticed…',
        content:
          'When you cut in twice today, I noticed two colleagues stopped contributing.',
      },
      {
        id: 'raj-1',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content: 'I was trying to keep the discussion moving.',
      },
      {
        id: 'you-2',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Recognise his intention without dismissing the impact.',
        hint: 'I can see… / At the same time,…',
        content:
          'I can see you wanted to save time. At the same time, we missed their input.',
      },
      {
        id: 'raj-2',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content: 'How could we handle that differently?',
      },
      {
        id: 'you-3',
        speaker: 'You',
        side: 'end' as const,
        cue: 'Request a concrete change that leaves room for agreement.',
        hint: 'Would you be open to…?',
        content:
          'Would you be open to letting each person finish, then inviting responses?',
      },
      {
        id: 'raj-3',
        speaker: 'Raj',
        avatarUrl: raj,
        side: 'start' as const,
        content: 'That sounds fair. I’ll wait until they’ve finished.',
      },
    ],
  },
]
export function RolePlay() {
  return (
    <GuidedScenario
      cases={scenarios}
      factLayout="stacked"
      selectionLabel="Choose a feedback situation"
    />
  )
}
