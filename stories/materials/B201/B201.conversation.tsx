import { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { toggleId } from '../shared/lessonState'
import type { SpeechProps } from '../shared/Lesson.types'
import type { ListeningProps } from './B201.types'
import { content, kim, image, vocabulary } from './B201.data'
import voice from './assets/raj-demo.mp3'
import * as S from './B201.styles'
export function YourVersionSection({ speech }: SpeechProps) {
  const [swapped, setSwapped] = useState(false),
    [support, setSupport] = useState(false),
    [marked, setMarked] = useState<string[]>([])
  const rows = content.yourVersionSource[swapped ? 1 : 0] ?? [],
    prefix = swapped ? 'swapped' : 'first'
  const count = rows.filter(
    (r, i) => r[1] === 'Aluna' && marked.includes(`${prefix}-${i}`),
  ).length
  let current = 0
  while (
    current < 5 &&
    marked.includes(`${prefix}-${current * 2 + (swapped ? 0 : 1)}`)
  )
    current++
  const offset = Math.max(0, Math.min(4, current) * 2 - 2),
    end = (Math.min(4, current) + 1) * 2
  return (
    <S.Stack>
      <S.Row>
        <b>{swapped ? 'You: Kim' : 'You: Ana'}</b>
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
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Hide support' : 'Show support'}
        </Button>
        <S.Counter role="status">{count} of 5</S.Counter>
      </S.Row>
      <S.Hint>
        {swapped
          ? 'Now you are Kim. Ask the questions; your teacher answers as Ana (she can change the answers).'
          : 'The same talk. Now it’s your day with no battery. True or invented.'}
      </S.Hint>
      <LearningDialogue
        density="compact"
        lines={rows.slice(offset, end).map((r, j) => {
          const i = j + offset,
            learner = r[1] === 'Aluna',
            id = `${prefix}-${i}`
          return {
            id,
            speaker: learner ? 'You' : swapped ? 'Teacher: Ana' : 'Kim',
            avatarUrl: !learner && !swapped ? kim : undefined,
            side: learner ? 'end' : 'start',
            actionLabel: learner ? `Mark response: ${r[2]}` : undefined,
            audioLabel: learner ? undefined : `Listen: ${r[2]}`,
            content: learner ? (
              <S.LearnerCue>
                {support ? r[3] : r[2]}
                {support ? <S.Hint>{r[2]}</S.Hint> : null}
              </S.LearnerCue>
            ) : (
              r[2]
            ),
          }
        })}
        completedIds={marked}
        onComplete={(id) => setMarked((old) => toggleId(old, id))}
        playingId={speech.playingId}
        onPlay={(id) => {
          const row = rows[Number(id.split('-')[1])]
          if (row)
            speech.speak([
              { id, text: row[2] ?? '', speaker: swapped ? 'ana' : 'kim' },
            ])
        }}
      />
      <S.PictureStrip aria-label="The seven pictures from page 2">
        {vocabulary.map((item) => (
          <img key={item.id} src={item.imageUrl} alt={item.imageAlt} />
        ))}
      </S.PictureStrip>
    </S.Stack>
  )
}
const listeningTheme = withVoiceMessageLayout({
  contentWidth: '65rem',
  phoneWidth: '11.875rem',
  phoneHeight: '23.75rem',
})

export function ListeningSection({ active }: ListeningProps) {
  const [attempts, setAttempts] = useState<Record<string, string[]>>({}),
    [support, setSupport] = useState(false)
  const all = content.listeningStatements.every((q) =>
    (attempts[q.id] ?? []).includes(q.yes ? 'yes' : 'no'),
  )
  return (
    <ThemeProvider theme={listeningTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Raj', status: 'online' }}
        greeting={{
          text: content.listening.textMessage,
          timestamp: content.listening.textTimestamp,
        }}
        audio={{
          id: 'b201-raj-demo',
          src: voice,
          transcript: content.listening.transcript,
          duration: 25.98,
          timestamp: content.listening.voiceTimestamp,
        }}
        active={active}
        replayActionLabel={all ? 'Listen again and check' : undefined}
        labels={{
          play: 'Play Raj’s message',
          pause: 'Pause',
          replay: 'Listen again',
          speed: 'Playback speed',
          transcript: 'Transcription',
          transcriptHidden:
            'A transcrição aparece na segunda vez que você ouve.',
          audioError: 'Não foi possível tocar. Tente novamente.',
          retry: 'Tentar novamente',
          questions: 'Did Raj say this?',
          correct: 'Correto',
          incorrect: 'Tente novamente',
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
            feedback: done
              ? q.correction
              : chosen.length
                ? 'Tente novamente.'
                : undefined,
            choices: ['yes', 'no'].map((id) => ({
              id,
              label: id === 'yes' ? 'Yes' : 'No',
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
        footer={
          <S.Dark>
            <strong>Kim asks</strong>
            <p>
              What exactly did Raj say? Was he angry? What did he think happened
              to you? Tell her.
            </p>
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
              <p>
                He said they’d been waiting … · He wasn’t angry, because … ·
                Sarah thought …, but Raj thought …
              </p>
            ) : null}
          </S.Dark>
        }
      />
    </ThemeProvider>
  )
}
const noteLabels = [
  'When? Where?',
  'What had been happening?',
  'What went wrong?',
  'In the end',
]
const steps = [
  {
    id: '1',
    label:
      'Tell Kim about your day, in order. Kim asks: How long had you been …?',
  },
  { id: '2', label: 'Kim says something different! Explain.' },
  { id: '3', label: 'Swap: Kim tells you the end of her day. Ask questions.' },
  { id: '4', label: 'Tell Kim’s day back: You’d been … when …' },
]
const supportLines = [
  'I was …ing when …',
  'I’d been …ing for … when …',
  'I’d left …',
  'I didn’t notice …',
  'By then, …',
  'Eventually, …',
  'How long had you been …?',
  'What happened then?',
  'Where were you going?',
]
export function RolePlaySection() {
  const [marked, setMarked] = useState<string[]>([]),
    [support, setSupport] = useState(false),
    [notes, setNotes] = useState(['', '', '', ''])
  const firstField = useRef<HTMLTextAreaElement>(null)
  const next = steps.find((s) => !marked.includes(s.id))?.id,
    hasSupport = next === '1' || next === '3'
  return (
    <RolePlayExercise
      presentation="tracker"
      density="compact"
      situation="Monday, with Kim. You’re Ana, but the day is yours: true or invented. Choose four moments: from the pictures, or your own."
      support={hasSupport ? supportLines : []}
      supportVisible={hasSupport && support}
      onSupportToggle={hasSupport ? () => setSupport(!support) : undefined}
      steps={steps}
      completedIds={marked}
      onStepToggle={(id) => setMarked((old) => toggleId(old, id))}
      labels={{
        show: 'Show support',
        hide: 'Hide support',
        steps: 'Step by step · your teacher marks',
        progress: '',
        joiner: 'of',
      }}
      tracker={
        <S.Surface>
          <S.Row>
            <b>Kim’s notes</b>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setNotes(['', '', '', ''])
                firstField.current?.focus()
              }}
            >
              Clear
            </Button>
          </S.Row>
          <S.NoteFields>
            {noteLabels.map((label, i) => (
              <label key={label}>
                {label}
                <TextareaInput
                  rows={2}
                  ref={i === 0 ? firstField : undefined}
                  aria-label={label}
                  value={notes[i] ?? ''}
                  onChange={(event) =>
                    setNotes((old) =>
                      old.map((text, j) =>
                        i === j ? event.target.value : text,
                      ),
                    )
                  }
                />
              </label>
            ))}
          </S.NoteFields>
        </S.Surface>
      }
    >
      <S.Board aria-label="Choose four moments">
        {[
          'dead-phone',
          'rain',
          'traffic',
          'line',
          'departure-board',
          'taxi',
          'wallet',
          'key',
        ].map((key) => (
          <img key={key} src={image(key)} alt={key.replaceAll('-', ' ')} />
        ))}
      </S.Board>
    </RolePlayExercise>
  )
}
