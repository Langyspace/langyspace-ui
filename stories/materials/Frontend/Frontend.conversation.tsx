import { ana, kim, leo } from '../shared/characterPortraits'
import { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { InterviewSimulation } from '../../../src/components/InteractiveMaterial/InterviewSimulation'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import {
  content,
  image,
  audio,
  text,
  firstTurns,
  swappedTurns,
  toggle,
} from './Frontend.data'
import { MiniVocabulary } from './Frontend.practice'
import type { AudioProps } from './Frontend.types'
import * as S from './Frontend.styles'
export function YourVersion({ media }: AudioProps) {
  const [swapped, setSwapped] = useState(false),
    [support, setSupport] = useState(false),
    [marked, setMarked] = useState<string[]>([])
  const turns = swapped ? swappedTurns : firstTurns,
    prefix = swapped ? 'swapped' : 'first',
    count = turns.filter(
      (turn, i) => turn.speaker === 'You' && marked.includes(`${prefix}-${i}`),
    ).length
  return (
    <S.Stack>
      <S.Row>
        <b>{swapped ? 'You: Ana' : 'You: about your work'}</b>
        <S.Hint>{swapped ? 'Teacher: Kim' : 'Teacher: Ana'}</S.Hint>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            media.stop()
            setSwapped(!swapped)
          }}
        >
          {swapped ? '⇄ Swap back' : '⇄ Swap roles'}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Hide support' : 'Show support'}
        </Button>
        <S.Counter role="status">{count} of 4</S.Counter>
      </S.Row>
      <S.ConversationColumns>
        <LearningDialogue
          density="compact"
          lines={turns.map((turn, j) => {
            const learner = turn.speaker === 'You',
              id = `${prefix}-${j}`
            return {
              id,
              speaker: turn.speaker,
              avatarUrl: learner ? undefined : swapped ? kim : ana,
              side: learner ? 'end' : 'start',
              content: learner ? (
                <S.LearnerCue>
                  {support ? turn.text : turn.cue}
                  {support ? <S.Hint>{turn.cue}</S.Hint> : null}
                </S.LearnerCue>
              ) : (
                turn.text
              ),
              actionLabel: learner ? `Mark response: ${turn.cue}` : undefined,
              audioLabel:
                'id' in turn && turn.id ? `Listen: ${turn.text}` : undefined,
            }
          })}
          completedIds={marked}
          onComplete={(id) => setMarked((old) => toggle(old, id))}
          playingId={
            media.playingId
              ? `${prefix}-${turns.findIndex((turn) => 'id' in turn && turn.id === media.playingId)}`
              : undefined
          }
          onPlay={(id) => {
            const turn = turns[Number(id.split('-')[1])]
            if (turn && 'id' in turn && typeof turn.id === 'string')
              media.play([turn.id])
          }}
        />
        {!swapped ? <MiniVocabulary /> : null}
      </S.ConversationColumns>
    </S.Stack>
  )
}
const phoneTheme = withVoiceMessageLayout({
  contentWidth: '70rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 15.625rem), 33.75rem)',
})
export function Listening({ active }: { active: boolean }) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({}),
    [support, setSupport] = useState(false)
  return (
    <ThemeProvider theme={phoneTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Leo', avatarUrl: leo, status: 'online' }}
        greeting={{
          text: 'Hi! Here’s a quick update before the launch.',
          timestamp: '09:40',
        }}
        audio={{
          id: 'frontend-leo-elevenlabs',
          src: audio('L.9'),
          transcript: text('L.9'),
          duration: 24.938231,
          timestamp: '17:40',
        }}
        active={active}
        transcriptReveal="third-listen"
        questionHeading={<S.Eyebrow>Leo’s message: yes or no?</S.Eyebrow>}
        labels={{
          play: 'Play Leo’s message',
          pause: 'Pause',
          loading: 'Loading',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden: 'The transcript appears on the third listen.',
          audioError: 'Could not play the message. Try again.',
          retry: 'Try again',
          correct: 'Correct',
          incorrect: 'Try again',
          questions: 'Leo’s message: yes or no?',
        }}
        questions={content.listeningQuestions.map((q, i) => {
          const id = String(i),
            chosen = attempts[id] ?? [],
            done = chosen.includes(String(q.a))
          return {
            id,
            prompt: q.q,
            disabled: done,
            value: chosen.at(-1),
            feedback: done ? q.say : chosen.length ? 'Try again.' : q.g,
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
        onAnswer={(id, value) =>
          setAttempts((old) => ({ ...old, [id]: [...(old[id] ?? []), value] }))
        }
        footer={
          <S.Dark>
            <strong>Now you</strong>
            <p>Answer Leo as Kim: say what you’ll do, and when.</p>
            <Button
              size="sm"
              variant="inverse"
              aria-expanded={support}
              onClick={() => setSupport(!support)}
            >
              {support ? 'Hide support' : 'Show support'}
            </Button>
            {support ? (
              <S.Support>
                {[
                  'Hi, Leo!',
                  'Sure, no problem.',
                  'I’ve already …',
                  'I haven’t … yet.',
                  'I’ll …',
                  'See you tomorrow!',
                ].map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </S.Support>
            ) : null}
          </S.Dark>
        }
      />
    </ThemeProvider>
  )
}
export function Interview({ media }: AudioProps) {
  const [index, setIndex] = useState(-1),
    [captions, setCaptions] = useState(true),
    [microphone, setMicrophone] = useState(true),
    [camera, setCamera] = useState(true),
    [hand, setHand] = useState(false),
    [ended, setEnded] = useState(false),
    [steps, setSteps] = useState<string[]>([]),
    [support, setSupport] = useState(false),
    [notes, setNotes] = useState<Record<string, string>>(() => {
      try {
        return JSON.parse(
          localStorage.getItem('langy-frontend-interview-notes') ?? '{}',
        )
      } catch {
        return {}
      }
    })
  const first = useRef<HTMLInputElement>(null)
  const playTurn = (next: number) => {
    media.stop()
    setIndex(next)
    media.play([`J.${next + 1}`])
  }
  const updateNotes = (value: Record<string, string>) => {
    setNotes(value)
    try {
      localStorage.setItem(
        'langy-frontend-interview-notes',
        JSON.stringify(value),
      )
    } catch {
      /* Keep editing available without storage. */
    }
  }
  return (
    <RolePlayExercise
      presentation="tracker"
      density="compact"
      situation="CloudNest is looking for a frontend developer. Talk about your real work. No tech job yet? Talk about a course project, or invent."
      steps={content.steps.map((label, i) => ({ id: String(i), label }))}
      completedIds={steps}
      onStepToggle={(id) => setSteps((old) => toggle(old, id))}
      support={content.support}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      labels={{
        show: 'Show support',
        hide: 'Hide support',
        steps: 'Steps · your teacher checks',
        progress: '',
        joiner: 'of',
      }}
      tracker={
        <S.Summary>
          <S.Row>
            <b>Jun’s notes</b>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                updateNotes({})
                first.current?.focus()
              }}
            >
              Clear
            </Button>
          </S.Row>
          {content.noteFields.map((label, i) => (
            <label key={label}>
              {label}
              <TextInput
                size="sm"
                ref={i === 0 ? first : undefined}
                autoComplete="off"
                value={notes[label] ?? ''}
                onChange={(event) =>
                  updateNotes({ ...notes, [label]: event.target.value })
                }
              />
            </label>
          ))}
        </S.Summary>
      }
    >
      <S.Call>
        <InterviewSimulation
          title="Frontend Developer · CloudNest"
          interviewer={{ name: 'Jun', imageUrl: image('meet_jun') }}
          learnerName="You"
          caption={index >= 0 ? content.interview[index] : undefined}
          captionsEnabled={captions}
          onCaptionsChange={setCaptions}
          microphoneEnabled={microphone}
          onMicrophoneChange={setMicrophone}
          cameraEnabled={camera}
          onCameraChange={setCamera}
          handRaised={hand}
          onHandChange={setHand}
          turnIndex={index}
          turnCount={8}
          onNext={() => playTurn(Math.min(7, index + 1))}
          onPrevious={() => playTurn(Math.max(0, index - 1))}
          onReplay={() => playTurn(Math.max(0, index))}
          onEnd={() => {
            media.stop()
            setEnded(true)
          }}
          ended={ended}
          playing={
            media.playingId?.startsWith('J.') && media.status === 'playing'
          }
          loading={
            media.playingId?.startsWith('J.') && media.status === 'loading'
          }
          status={
            media.playingId?.startsWith('J.')
              ? media.status === 'loading'
                ? 'Loading…'
                : media.status === 'paused'
                  ? 'Paused'
                  : media.status === 'error'
                    ? 'Audio unavailable. Try again.'
                    : undefined
              : undefined
          }
        />
        {ended ? (
          <Button
            variant="secondary"
            onClick={() => {
              setEnded(false)
              setIndex(-1)
            }}
          >
            Restart interview
          </Button>
        ) : null}
        {media.playingId?.startsWith('J.') ? (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => media.play([`J.${index + 1}`])}
          >
            {media.status === 'playing' || media.status === 'loading'
              ? 'Pause'
              : 'Resume'}
          </Button>
        ) : null}
      </S.Call>
    </RolePlayExercise>
  )
}
