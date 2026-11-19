import { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { RevealSequenceCard } from '../../../src/components/InteractiveMaterial/RevealSequenceCard'
import { content, kim, image, toggle } from './B101.data'
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
  phoneWidth: '11.875rem',
  phoneHeight: '23.75rem',
})

export function ListeningSection({ active }: { active: boolean }) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({}),
    [support, setSupport] = useState(false)
  return (
    <ThemeProvider theme={listeningTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Leo', status: 'online' }}
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
        labels={{
          play: 'Play Leo’s message',
          pause: 'Pause',
          loading: 'Loading',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden: 'The transcription appears on the second listen.',
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
        footer={
          <S.Dark>
            <strong>Now you</strong>
            <p>Answer Leo: say Congratulations! and what you’ve been doing.</p>
            <S.Row>
              <Button
                variant="inverse"
                size="sm"
                aria-expanded={support}
                onClick={() => setSupport(!support)}
              >
                {support ? 'Hide support' : 'Show support'}
              </Button>
            </S.Row>
            {support ? (
              <p>Congratulations, Leo! · I’ve been … · Of course! · Call me!</p>
            ) : null}
            <S.Hint>I mean = quer dizer</S.Hint>
          </S.Dark>
        }
      />
    </ThemeProvider>
  )
}
export function RolePlaySection() {
  const [stages, setStages] = useState<Record<string, string>>({}),
    [support, setSupport] = useState(false),
    [steps, setSteps] = useState<string[]>([]),
    [summary, setSummary] = useState<Record<string, string>>({})
  const firstField = useRef<HTMLInputElement>(null)
  const answers = ['soccer', 'bike', 'bus'],
    clues = ['muddy-shoes', 'hot', 'wet-shirt']
  return (
    <S.RolePlay
      density="compact"
      situation="Your teacher is Kim. Use each clue to guess what she has been doing."
      support={content.support}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      labels={{
        show: 'Show support',
        hide: 'Hide support',
        steps: 'Steps · your teacher checks',
        progress: 'done',
      }}
      steps={content.steps.map((label, i) => ({ id: String(i), label }))}
      completedIds={steps}
      onStepToggle={(id) => setSteps((old) => toggle(old, id))}
      tracker={
        <S.Summary>
          <S.Row>
            <b>Your three weeks</b>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSummary({})
                firstField.current?.focus()
              }}
            >
              Clear
            </Button>
          </S.Row>
          {content.summary.map((label, i) => (
            <label key={label}>
              {label}
              <TextInput
                ref={i === 0 ? firstField : undefined}
                size="sm"
                value={summary[String(i)] ?? ''}
                onChange={(e) =>
                  setSummary((old) => ({ ...old, [String(i)]: e.target.value }))
                }
                autoComplete="off"
              />
            </label>
          ))}
        </S.Summary>
      }
    >
      <S.Clues>
        {content.clues.map((clue, i) => (
          <RevealSequenceCard
            key={clue.day}
            title={clue.day}
            stageId={stages[clue.day] ?? 'closed'}
            onAdvance={(id) => setStages((old) => ({ ...old, [clue.day]: id }))}
            stages={[
              {
                id: 'closed',
                revealLabel: `${clue.day}: closed card`,
              },
              {
                id: 'clue',
                image: {
                  src: image(clues[i] ?? ''),
                  alt:
                    i === 0
                      ? 'Tênis com lama na entrada da casa'
                      : i === 1
                        ? 'Kim com calor e suor após chegar em casa'
                        : 'Camiseta molhada ao chegar em casa',
                },
                revealLabel: `${clue.day}: show clue`,
              },
              {
                id: 'answer',
                image: { src: image(answers[i] ?? ''), alt: clue.w },
                content: `Possible answer: ${clue.w}`,
                revealLabel: `${clue.day}: show answer`,
              },
            ]}
          />
        ))}
      </S.Clues>
    </S.RolePlay>
  )
}
