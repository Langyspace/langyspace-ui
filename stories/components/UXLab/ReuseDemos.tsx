import { useState } from 'react'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GuessWho, DialogueQuestions } from '../../materials/A101/A101.sections'
import { A101Lesson } from '../../materials/A101/A101Lesson'
import { BranchingConversation } from '../../../src/components/InteractiveMaterial/BranchingConversation'
import { VoiceMessageDemo } from '../VoiceMessage/VoiceMessageDemo'
import data from '../../materials/UXLab/lab-data.json'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'

import apple from '../../materials/UXLab/assets/apple.png'
import banana from '../../materials/UXLab/assets/banana.png'
import grapes from '../../materials/UXLab/assets/grapes.png'
import tired from '../../materials/A101/assets/scene-tired-tom.webp'
import ana from '../../materials/UXLab/assets/bust_ana.png'
import kim from '../../materials/UXLab/assets/bust_kim.png'
import { useLabSpeech } from './useLabSpeech'
export function MultipleChoiceDemo() {
  const [selected, setSelected] = useState<string>(),
    [attempts, setAttempts] = useState<string[]>([])
  const options = ['He’s tired.', 'He’s cold.', 'He’s happy.']
  return (
    <ExercisePanel
      title="How is Tom?"
      counter="1 / 6"
      media={<img src={tired} alt="Tom boceja, sentado no sofá" />}
    >
      <Common.Stack>
        {options.map((label, i) => (
          <QuizOption
            key={label}
            letter={String.fromCharCode(65 + i)}
            density="compact"
            state={
              attempts.includes(String(i))
                ? i === 0
                  ? 'correct'
                  : 'wrong'
                : 'default'
            }
            aria-pressed={selected === String(i)}
            disabled={attempts.includes('0')}
            onClick={() => {
              setSelected(String(i))
              setAttempts((old) => [...old, String(i)])
            }}
          >
            {label}
          </QuizOption>
        ))}
        {selected ? (
          <QuizFeedback tone={selected === '0' ? 'correct' : 'wrong'}>
            {selected === '0'
              ? 'Correto!'
              : 'Olhe a imagem: a pessoa está sem energia.'}
          </QuizFeedback>
        ) : null}
      </Common.Stack>
    </ExercisePanel>
  )
}
export function RevealsDemo({
  kind = 'questions',
}: {
  kind?: 'questions' | 'examples' | 'review' | 'challenge'
}) {
  const [revealed, setRevealed] = useState<string[]>([])
  if (kind === 'questions') return <DialogueQuestions />
  const rows =
    kind === 'challenge'
      ? data.engine.SCRIPT
      : kind === 'review'
        ? [
            'What’s your name? How do you spell it?',
            'What’s your phone number?',
            'What’s your best friend’s name?',
          ]
        : ['I', 'My friend', 'My parents']
  if (kind !== 'examples')
    return (
      <Common.Stack>
        {rows.map((line, i) => (
          <Common.Surface key={line}>
            <Common.Row>
              <Common.Number>{i + 1}</Common.Number>
              {line}
            </Common.Row>
          </Common.Surface>
        ))}
      </Common.Stack>
    )
  return (
    <Common.Stack>
      {rows.map((line, i) => (
        <RevealCard
          key={line}
          marker={i + 1}
          revealed={revealed.includes(String(i))}
          answer={
            [
              'I’m a student.',
              'My friend is a teacher.',
              'My parents are from Brazil.',
            ][i]
          }
          onClick={() =>
            setRevealed((old) =>
              old.includes(String(i))
                ? old.filter((v) => v !== String(i))
                : [...old, String(i)],
            )
          }
        >
          {line}
        </RevealCard>
      ))}
    </Common.Stack>
  )
}
export function VocabularyDemo() {
  const [ids, setIds] = useState<string[]>([]),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  const speech = useLabSpeech()
  return (
    <Common.Stack>
      <VocabularyGrid
        items={data.FR.slice(0, 3).map((row, i) => ({
          id: String(i),
          word: row[1] ?? '',
          translation: row[2] ?? '',
          imageUrl: [apple, banana, grapes][i] ?? apple,
          imageAlt: row[2] ?? '',
        }))}
        revealedIds={ids}
        onReveal={(id) =>
          setIds((old) =>
            old.includes(id) ? old.filter((v) => v !== id) : [...old, id],
          )
        }
        onPlay={(id) => speech.play(data.FR[Number(id)]?.[1] ?? '')}
        showAll={all}
        showInitial={initial}
        revealVariant="tooltip"
      />
      <Common.Row>
        <Common.Action
          type="button"
          variant="secondary"
          aria-pressed={initial}
          onClick={() => setInitial(!initial)}
        >
          Dica
        </Common.Action>
        <Common.Action
          type="button"
          variant="secondary"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          Mostrar todas
        </Common.Action>
      </Common.Row>
    </Common.Stack>
  )
}
export function DialogueDemo({ rolePlay = false }: { rolePlay?: boolean }) {
  const [translated, setTranslated] = useState<string[]>([])
  const speech = useLabSpeech()
  return (
    <LearningDialogue
      lines={[
        {
          id: 'kim',
          speaker: 'Kim',
          avatarUrl: kim,
          side: 'start',
          content: 'Hi! I’m Kim. I’m from Korea.',
          translation: 'Oi! Eu sou a Kim. Sou da Coreia.',
          audioLabel: 'Ouvir Kim',
        },
        {
          id: 'ana',
          speaker: 'Ana',
          avatarUrl: ana,
          side: 'end',
          content: rolePlay
            ? 'Diga o seu nome e de onde você é.'
            : 'Hi, Kim! I’m Ana. I’m from Brazil. Nice to meet you.',
          translation:
            'Oi, Kim! Eu sou a Ana. Sou do Brasil. Prazer em conhecer você.',
          audioLabel: rolePlay ? undefined : 'Ouvir Ana',
        },
      ]}
      translatedIds={translated}
      onTranslate={(id) =>
        setTranslated((old) =>
          old.includes(id) ? old.filter((v) => v !== id) : [...old, id],
        )
      }
      onPlay={(id) =>
        speech.play(
          id === 'kim'
            ? 'Hi! I’m Kim. I’m from Korea.'
            : 'Hi, Kim! I’m Ana. I’m from Brazil. Nice to meet you.',
        )
      }
    />
  )
}
export function GuessWhoDemo() {
  return <GuessWho />
}
export function ListeningDemo() {
  return <VoiceMessageDemo />
}
export function QuestionsAndDialogue() {
  return (
    <Common.Columns>
      <DialogueDemo />
      <RevealsDemo />
    </Common.Columns>
  )
}
export function QuickCheckDemo() {
  const [value, setValue] = useState<string>()
  return (
    <ExercisePanel title="She ___ an engineer.">
      <Common.Row>
        {['am', 'is', 'are'].map((choice) => (
          <QuizOption
            key={choice}
            letter={choice}
            density="compact"
            state={
              value === choice
                ? choice === 'is'
                  ? 'correct'
                  : 'wrong'
                : 'default'
            }
            onClick={() => setValue(choice)}
          >
            {choice}
          </QuizOption>
        ))}
      </Common.Row>
    </ExercisePanel>
  )
}

export function YourTurnDemo() {
  const [done, setDone] = useState<string[]>([])
  const [hint, setHint] = useState(false)
  const speech = useLabSpeech()
  return (
    <Common.Stack>
      <Common.Heading>How are you today?</Common.Heading>
      <Common.Hint>Answer your teacher. Then ask: And you?</Common.Hint>
      <LearningDialogue
        lines={[
          {
            id: 'teacher',
            speaker: 'Teacher',
            side: 'start',
            content: 'How are you today?',
            audioLabel: 'Ouvir pergunta',
          },
          {
            id: 'answer',
            speaker: 'You',
            side: 'end',
            content: done.includes('answer')
              ? '✓ your answer'
              : hint
                ? 'I’m …'
                : 'your answer',
          },
          {
            id: 'ask',
            speaker: 'You',
            side: 'end',
            content: done.includes('ask')
              ? '✓ ask your teacher'
              : hint
                ? 'And you?'
                : 'ask your teacher',
          },
        ]}
        onPlay={() => speech.play('How are you today?')}
      />
      <Common.Row>
        {['answer', 'ask'].map((id) => (
          <Common.Action
            key={id}
            type="button"
            variant="secondary"
            aria-pressed={done.includes(id)}
            onClick={() =>
              setDone((old) =>
                old.includes(id)
                  ? old.filter((value) => value !== id)
                  : [...old, id],
              )
            }
          >
            {id === 'answer' ? 'Respondeu' : 'Perguntou de volta'}
          </Common.Action>
        ))}
        <Common.Action
          type="button"
          variant="text"
          aria-expanded={hint}
          onClick={() => setHint(!hint)}
        >
          Dica
        </Common.Action>
      </Common.Row>
    </Common.Stack>
  )
}
export function RightOrWrongDemo() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [own, setOwn] = useState(false)
  const speech = useLabSpeech()
  return (
    <Common.Stack>
      {data.a101Corrections.map((row, index) => {
        const correct = 'ok' in row && row.ok === true
        const value = answers[String(index)]
        const solved = value === correct
        const answer = ('a' in row ? row.a : row.s) ?? row.s
        return (
          <Common.Surface key={row.s}>
            <Common.Row>
              <Common.Number>{index + 1}</Common.Number>
              <strong>{row.s}</strong>
            </Common.Row>
            {solved ? (
              <QuizFeedback tone="correct">
                {answer} · {row.why}
              </QuizFeedback>
            ) : (
              <Common.Row>
                {['Right', 'Wrong'].map((label, i) => (
                  <Common.Action
                    key={label}
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      const value = i === 0
                      setAnswers((old) => ({ ...old, [index]: value }))
                      if (value === correct) speech.play(answer)
                    }}
                  >
                    {label}
                  </Common.Action>
                ))}
              </Common.Row>
            )}
            {value !== undefined && !solved ? (
              <QuizFeedback tone="wrong">Tente de novo.</QuizFeedback>
            ) : null}
          </Common.Surface>
        )
      })}
      <Common.Surface>
        <Common.Heading>One from today</Common.Heading>
        <p>
          A professora diz uma frase sua de hoje. Diga de novo, do jeito certo.
        </p>
        <Common.Action
          type="button"
          variant="secondary"
          aria-pressed={own}
          onClick={() => setOwn(!own)}
        >
          {own ? '✓ Corrigiu a frase' : 'Corrigiu?'}
        </Common.Action>
      </Common.Surface>
    </Common.Stack>
  )
}
export function HomeworkDemo() {
  return <A101Lesson initialPageId="s13" />
}
export function LessonIntroDemo() {
  return <A101Lesson initialPageId="s1" />
}
export function ReceivedVideoDemo() {
  const [opened, setOpened] = useState(false)
  const [index, setIndex] = useState(-1)
  const [draft, setDraft] = useState('')
  const [replies, setReplies] = useState<string[]>([])
  const d = data.FV.a1
  return (
    <BranchingConversation
      contact={{ name: 'Leo', status: 'online' }}
      mode="free"
      draft={draft}
      onDraftChange={setDraft}
      onSend={() => {
        setReplies((old) => [...old, draft.trim()])
        setDraft('')
        setIndex(index + 1)
      }}
      ended={index >= d.qs.length}
      disabled={index < 0}
      messages={[
        { id: 'intro', side: 'incoming', content: 'you HAVE to watch this 😂' },
        {
          id: 'video',
          side: 'incoming',
          content: (
            <Common.Stack>
              <strong>{d.title}</strong>
              <Common.Hint>
                {d.ch} · {d.dur}
              </Common.Hint>
              <Common.Action
                type="button"
                variant="secondary"
                onClick={() => setOpened(!opened)}
                aria-expanded={opened}
              >
                Vídeo recebido
              </Common.Action>
            </Common.Stack>
          ),
        },
        ...d.qs.slice(0, Math.max(0, index + 1)).flatMap((row, i) => [
          { id: `q${i}`, side: 'incoming' as const, content: row[0] },
          ...(replies[i]
            ? [
                {
                  id: `r${i}`,
                  side: 'outgoing' as const,
                  content: replies[i],
                },
              ]
            : []),
        ]),
        ...(index >= d.qs.length
          ? [{ id: 'end', side: 'incoming' as const, content: d.end }]
          : []),
      ]}
      onRestart={() => {
        setOpened(false)
        setIndex(-1)
        setReplies([])
        setDraft('')
      }}
    >
      {opened ? (
        <Common.Surface>
          <Common.Heading>{d.title}</Common.Heading>
          <Common.Hint>
            Prévia do cartão de vídeo do Lab. O player usa a mídia escolhida
            para a aula.
          </Common.Hint>
          <Common.Action
            type="button"
            variant="brand"
            onClick={() => {
              setIndex(0)
              setOpened(false)
            }}
          >
            Já assisti · conversar
          </Common.Action>
        </Common.Surface>
      ) : null}
      <Common.Hint>{d.task}</Common.Hint>
      {index >= 0 && index < d.qs.length ? (
        <Common.Surface>
          {Array.isArray(d.qs[index]?.[1])
            ? (d.qs[index]?.[1] as string[]).join(' · ')
            : ''}
        </Common.Surface>
      ) : null}
    </BranchingConversation>
  )
}
