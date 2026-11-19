import { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { ana, raj } from '../shared/characterPortraits'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { toggleId } from '../shared/lessonState'
import { audioUrl } from './C101.audio'
import content from './C101.content.json'
import * as S from './C101.styles'
const prompts = [
  [
    'Hi, Ana. So, you wanted to talk about Tuesday?',
    'Start with a question about the presentation.',
    'How do you think it went?',
  ],
  [
    'Honestly? I didn’t deliver it well, I guess.',
    'Acknowledge a strength, then describe what didn’t work.',
    'You really know the project. Having said that, the second part seemed a little …',
  ],
  [
    'OK. What do you mean, exactly?',
    'Give one specific example: the slides, the ending or Laura’s question.',
    'The slides tend to … · It might come across as …',
  ],
  [
    'OK. So how should I handle it next time?',
    'Request one change and check Raj’s perspective.',
    'You might want to … · I wonder if we could … · Would it be worth …?',
  ],
]
const swappedPrompts = [
  [
    'Hi, Raj. How do you think it went on Tuesday?',
    'Answer, then ask what didn’t work.',
    'Thanks. But …? · What didn’t work?',
  ],
  [
    'You really know the project. Having said that, the second part seemed a little rushed.',
    'Ask for a specific example.',
    'What do you mean? · Could you give me an example?',
  ],
  [
    'Well, Laura asked about the deadline, and she didn’t get an answer.',
    'Ask what you could do next time.',
    'So what should I do next time?',
  ],
  [
    'I wonder if we could prepare the answers together. And Laura wants a new meeting on Thursday. I’ll be there too.',
    'Question the severity, then respond to the feedback.',
    'Was it really that bad? · OK, I’ll take it on board.',
  ],
]
export function YourVersion() {
  const [swapped, setSwapped] = useState(false)
  const [support, setSupport] = useState(false)
  const [done, setDone] = useState<string[]>([])
  const rows = swapped ? swappedPrompts : prompts
  const prefix = swapped ? 'raj' : 'ana'
  return (
    <S.Stack>
      <S.Row>
        <b>You: {swapped ? 'Raj' : 'Ana'}</b>
        <S.Hint>Teacher: {swapped ? 'Ana' : 'Raj'}</S.Hint>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setSwapped(!swapped)}
        >
          Swap roles
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
      <LearningDialogue
        density="compact"
        lines={rows.flatMap(([line, cue, hint], i) => [
          {
            id: `${prefix}-teacher-${i}`,
            speaker: swapped ? 'Teacher: Ana' : 'Teacher: Raj',
            avatarUrl: swapped ? ana : raj,
            side: 'start' as const,
            content: line,
          },
          {
            id: `${prefix}-you-${i}`,
            speaker: 'You',
            side: 'end' as const,
            content: (
              <>
                <b>{cue}</b>
                {support ? <S.Hint>{hint}</S.Hint> : null}
              </>
            ),
            actionLabel: `Mark response: ${cue}`,
          },
        ])}
        completedIds={done}
        onComplete={(id) => setDone((old) => toggleId(old, id))}
      />
    </S.Stack>
  )
}
const listeningTheme = withVoiceMessageLayout({
  contentWidth: '65rem',
  phoneWidth: '12.5rem',
  phoneHeight: '24rem',
})
export function Listening({ active }: { active: boolean }) {
  const [answers, setAnswers] = useState<Record<string, string>>()
  const [support, setSupport] = useState(false)
  const all = content.listeningQuestions.every(
    (q, i) => answers?.[i] === String(q.a),
  )
  return (
    <ThemeProvider theme={listeningTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Raj', avatarUrl: raj, status: 'online' }}
        audio={{
          id: 'c101-raj-message',
          src: audioUrl('c101-raj-message'),
          transcript: content.listening,
          timestamp: '16:20',
        }}
        active={active}
        questions={content.listeningQuestions.map((q, i) => ({
          id: String(i),
          prompt: q.q,
          value: answers?.[i],
          feedback:
            answers?.[i] === String(q.a)
              ? q.say
              : answers?.[i] !== undefined
                ? 'Listen for the detail and try again.'
                : undefined,
          choices: q.o.map((label, j) => ({
            id: String(j),
            label,
            feedback:
              answers?.[i] === String(j)
                ? j === q.a
                  ? ('correct' as const)
                  : ('incorrect' as const)
                : undefined,
          })),
        }))}
        onAnswer={(id, value) => setAnswers((old) => ({ ...old, [id]: value }))}
        replayActionLabel={all ? 'Listen again and check' : undefined}
        transcriptReveal="manual-after-replay"
        labels={{
          play: 'Play Raj’s message',
          pause: 'Pause',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden: 'Listen again before revealing the transcript.',
          questions: 'Did Raj say this?',
          correct: 'Correct',
          incorrect: 'Try again',
        }}
        footer={
          <S.Surface>
            <b>What is Raj accepting, and what is he resisting?</b>
            <p>
              Discuss how he feels. Then answer him: should he meet Laura alone?
              Use the email to support your decision.
            </p>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={support}
              onClick={() => setSupport(!support)}
            >
              {support ? 'Hide support' : 'Show support'}
            </Button>
            {support ? (
              <p>
                He agrees, but … · To be fair, he has a point … · He seems a
                little hurt. · I wonder if we could … · It might be worth …
              </p>
            ) : null}
          </S.Surface>
        }
      />
    </ThemeProvider>
  )
}
export function RolePlay() {
  const [done, setDone] = useState<string[]>([])
  const [notes, setNotes] = useState(['', '', '', ''])
  const first = useRef<HTMLTextAreaElement>(null)
  return (
    <RolePlayExercise
      presentation="tracker"
      density="compact"
      situation="Choose someone in your life: a colleague, relative, student, neighbour or service provider. Something they did didn’t go well. Your teacher is that person."
      steps={content.roleSteps.map((label, i) => ({ id: String(i), label }))}
      completedIds={done}
      onStepToggle={(id) => setDone((old) => toggleId(old, id))}
      labels={{
        steps: 'Your teacher marks each step',
        progress: '',
        joiner: 'of',
      }}
      tracker={
        <S.Surface>
          <S.Row>
            <b>Feedback notes</b>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setNotes(['', '', '', ''])
                first.current?.focus()
              }}
            >
              Clear feedback notes
            </Button>
          </S.Row>
          <S.Forms>
            {[
              'Who and what?',
              'The good part',
              'The change',
              'After the reaction',
            ].map((label, i) => (
              <label key={label}>
                {label}
                <TextareaInput
                  ref={i === 0 ? first : undefined}
                  rows={2}
                  value={notes[i] ?? ''}
                  aria-label={label}
                  onChange={(e) =>
                    setNotes((old) =>
                      old.map((v, j) => (i === j ? e.target.value : v)),
                    )
                  }
                />
              </label>
            ))}
          </S.Forms>
        </S.Surface>
      }
    />
  )
}
