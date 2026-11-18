import { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { ConnectionSignal } from '../../../src/components/InteractiveMaterial/ConnectionSignal'
import { toggleId } from '../shared/lessonState'
import type { SpeechProps } from '../shared/Lesson.types'
import { content, kim, board, image } from './A201.data'
import { firstTurns, swappedTurns } from './A201.turns'
import voice from './assets/kim-demo.mp3'
import * as S from '../shared/Lesson.styles'
import * as A from './A201.styles'
export function YourVersionSection({ speech }: SpeechProps) {
  const [swapped, setSwapped] = useState(false),
    [support, setSupport] = useState({ first: true, swapped: true }),
    [marked, setMarked] = useState<string[]>([])
  const turns = swapped ? swappedTurns : firstTurns,
    prefix = swapped ? 'swapped' : 'first',
    shown = support[prefix]
  const count = turns.filter(
    (t, i) => t.speaker === 'You' && marked.includes(`${prefix}-${i}`),
  ).length
  return (
    <S.Stack>
      <S.Row>
        <b>{swapped ? 'You: Kim' : 'You: about your life'}</b>
        <S.Hint>{swapped ? 'Teacher: Ana' : 'Teacher: Kim'}</S.Hint>
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
          aria-expanded={shown}
          onClick={() => setSupport((old) => ({ ...old, [prefix]: !shown }))}
        >
          {shown ? 'Hide support' : 'Show support'}
        </Button>
        <S.Counter role="status">{count} of 4</S.Counter>
      </S.Row>
      {swapped ? <S.Hint>Agora você é a Kim e faz as perguntas.</S.Hint> : null}
      <LearningDialogue
        density="compact"
        lines={turns.map((t, i) => {
          const learner = t.speaker === 'You'
          return {
            id: `${prefix}-${i}`,
            speaker: t.speaker,
            avatarUrl: t.speaker === 'Kim' ? kim : undefined,
            side: learner ? 'end' : 'start',
            audioLabel: 'audio' in t ? `Listen: ${t.text}` : undefined,
            actionLabel: learner
              ? `Marcar resposta: ${'cue' in t ? t.cue : ''}`
              : undefined,
            content: learner ? (
              <S.LearnerCue>
                {shown ? t.text : 'cue' in t ? t.cue : ''}
                {shown && 'cue' in t ? <S.Hint>{t.cue}</S.Hint> : null}
              </S.LearnerCue>
            ) : (
              <>
                {'signal' in t && t.signal ? <ConnectionSignal /> : null}
                {t.text}
              </>
            ),
          }
        })}
        completedIds={marked}
        onComplete={(id) => setMarked((old) => toggleId(old, id))}
        playingId={speech.playingId}
        onPlay={(id) => {
          const turn = turns[Number(id.split('-')[1])]
          if (turn) speech.speak([{ id, text: turn.text, speaker: 'kim' }])
        }}
      />
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
        contact={{ name: 'Kim', avatarUrl: kim, status: 'online' }}
        greeting={{ text: 'Sorry, Ana!', timestamp: '09:41' }}
        audio={{
          id: 'a201-kim-elevenlabs-20261118',
          src: voice,
          duration: 15.18585,
          transcript:
            content.listening.transcript +
            '\nNever mind = deixa pra lá · maybe = talvez · travel = viajar · soon = logo',
          timestamp: '09:41',
        }}
        active={active}
        labels={{
          play: 'Play Kim’s message',
          pause: 'Pause',
          loading: 'Loading',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden:
            'A transcrição aparece na segunda vez que você ouve.',
          audioUnavailable: 'Áudio indisponível',
          audioError: 'Não foi possível tocar. Tente novamente.',
          retry: 'Tentar novamente',
          correct: 'Correto',
          incorrect: 'Tente novamente',
          questions: 'A Kim disse isso?',
          conversation: 'Conversa',
        }}
        questions={content.listening.questions.map((q, i) => {
          const id = String(i),
            chosen = attempts[id] ?? [],
            done = chosen.includes(String(q.a))
          return {
            id,
            prompt: q.q,
            value: chosen.at(-1),
            disabled: done,
            feedback: done
              ? q.say
              : chosen.length
                ? 'Tente novamente.'
                : undefined,
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
            <p>
              Responda à Kim: diga o que você faz normalmente e o que você está
              fazendo esta semana.
            </p>
            <S.Row>
              <Button
                variant="inverse"
                size="sm"
                aria-expanded={support}
                onClick={() => setSupport(!support)}
              >
                {support ? 'Esconder dica' : 'Dica: começos de frase'}
              </Button>
            </S.Row>
            {support ? (
              <p>
                Hi, Kim! Never mind! · I usually … · This week I’m … · See you
                soon!
              </p>
            ) : null}
          </S.Dark>
        }
      />
    </ThemeProvider>
  )
}
export function RolePlaySection({ active }: { active: boolean }) {
  const [poor, setPoor] = useState(false),
    [ended, setEnded] = useState(false),
    [elapsed, setElapsed] = useState(0),
    [steps, setSteps] = useState<string[]>([]),
    [support, setSupport] = useState(false),
    [values, setValues] = useState<Record<string, string>>({})
  const field = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!active || ended) return
    let last = Date.now()
    const timer = window.setInterval(() => {
      const now = Date.now(),
        delta = now - last
      last = now
      setElapsed((old) => old + delta)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [active, ended])
  const seconds = Math.floor(elapsed / 1000),
    time = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
  return (
    <ThemeProvider theme={listeningTheme}>
      <CallSimulation
        presentation="video"
        contactName="Kim"
        initials="K"
        avatarUrl={kim}
        state={ended ? 'ended' : 'connected'}
        elapsedLabel={time}
        signalPoor={poor}
        onSignalToggle={() => setPoor(!poor)}
        onCall={() => {
          setElapsed(0)
          setPoor(false)
          setEnded(false)
        }}
        onHangUp={() => {
          setEnded(true)
          setPoor(false)
        }}
        labels={{
          cameraOff: 'câmera desligada',
          hangUp: 'End call',
          callAgain: 'Call again',
        }}
      >
        <RolePlayExercise
          presentation="tracker"
          density="compact"
          situation={null}
          support={content.support}
          supportVisible={support}
          onSupportToggle={() => setSupport(!support)}
          labels={{
            show: 'Dica',
            hide: 'Esconder dica',
            steps: 'Passo a passo · a professora marca',
            progress: '',
            joiner: 'de',
          }}
          steps={content.steps.map((label, i) => ({ id: String(i), label }))}
          completedIds={steps}
          onStepToggle={(id) => setSteps((old) => toggleId(old, id))}
        >
          <A.CallBoard role="group" aria-label="Seis lugares e seis ações">
            {board.map((item) => (
              <img key={item.key} src={image(item.key)} alt={item.label} />
            ))}
          </A.CallBoard>
          <A.CallSummary>
            <S.Row>
              <b>Kim</b>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setValues({})
                  field.current?.focus()
                }}
              >
                Clear
              </Button>
            </S.Row>
            {content.summary.map((label, i) => (
              <label key={label}>
                <span>{label}</span>
                <TextInput
                  ref={i === 0 ? field : undefined}
                  size="sm"
                  value={values[label] ?? ''}
                  autoComplete="off"
                  onChange={(e) =>
                    setValues((old) => ({ ...old, [label]: e.target.value }))
                  }
                />
              </label>
            ))}
          </A.CallSummary>
        </RolePlayExercise>
      </CallSimulation>
    </ThemeProvider>
  )
}
