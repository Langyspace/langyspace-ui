import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { RolePlayExercise } from '../../../src/components/Exercise/RolePlayExercise'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import {
  ChoiceExercise,
  DialogueExercise,
  PromptExercise,
} from '../shared/LessonExercises'
import { GrammarActivity } from '../shared/LessonActivities'
import { useMaterialSpeech } from '../shared/useMaterialSpeech'
import kimAvatar from '../A101/assets/bust_kim.webp'
import anaAvatar from '../A101/assets/bust_ana.webp'
import { scene, sceneAlt, source } from './A104.data'
import { YourWeek } from './YourWeek'
import * as Styled from './A104.styles'
import type { RoutineWarmUpProps } from './A104.types'

export function DaysAndTimes() {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  const [noteSeen, setNoteSeen] = useState(false)
  const speech = useMaterialSpeech()
  const total = source.DTR.reduce((sum, row) => sum + row.c.length, 0)
  return (
    <Common.Stack>
      {source.DTR.map((row) => (
        <Common.Surface key={row.l}>
          <Common.Tag>{row.l}</Common.Tag>
          <Common.Row>
            {row.c.map(([clue, word]) => (
              <Button
                key={word}
                variant={revealed.includes(word) ? 'success' : 'secondary'}
                aria-label={
                  revealed.includes(word) ? word : `${clue}: diga em inglês`
                }
                onClick={() => {
                  if (!revealed.includes(word)) {
                    const next = [...revealed, word]
                    setRevealed(next)
                    if (next.length === total) setNoteSeen(true)
                  }
                  speech.speak(word)
                }}
              >
                {clue}
                {revealed.includes(word) ? ` · ${word} ✓` : ''}
              </Button>
            ))}
          </Common.Row>
        </Common.Surface>
      ))}
      <Button variant="secondary" onClick={() => setRevealed([])}>
        Hide all
      </Button>
      {noteSeen ? (
        <Common.Surface>
          <b>Para combinar</b>
          <p>
            <b>free</b> = livre. I’m <b>free</b> on Sunday.
          </p>
        </Common.Surface>
      ) : null}
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function RoutineWarmUp({ index }: RoutineWarmUpProps) {
  const item = source.WU4[index]
  const [open, setOpen] = useState(index !== 1)
  const id =
    index === 0 ? 'scene-getup' : index === 1 ? 'scene-eat' : 'scene-gym'
  const tag = index === 0 ? '6:00' : index === 1 ? '7:00' : 'Saturday: free'
  return (
    <Common.Stack>
      <Styled.TimeTag>{tag}</Styled.TimeTag>
      {'tr' in item ? <Common.Hint>{item.tr}</Common.Hint> : null}
      {open ? (
        <ChoiceExercise
          question={`Kim asks: “${item.t}”`}
          options={item.o}
          correctIndex={item.a}
          image={{ src: scene(id), alt: sceneAlt(id) }}
          explanation={item.np.join(' ')}
        />
      ) : (
        <>
          <Common.Heading>Kim asks: “{item.t}”</Common.Heading>
          <Styled.Scene src={scene(id)} alt={sceneAlt(id)} />
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show options
          </Button>
        </>
      )}
    </Common.Stack>
  )
}

export function RoutineDialogue() {
  const speech = useMaterialSpeech()
  return (
    <Common.Stack>
      <Button
        variant="secondary"
        onClick={() => speech.speak(source.DL.map((line) => line.en).join(' '))}
      >
        Ouvir conversa completa
      </Button>
      <DialogueExercise
        lines={source.DL.map((line) => ({
          id: line.id,
          speaker: line.who === 'kim' ? 'Kim' : 'Ana',
          text: line.en,
          translation: line.g,
          avatarUrl: line.who === 'kim' ? kimAvatar : anaAvatar,
        }))}
      />
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function RoutineGrammar() {
  return (
    <GrammarActivity
      columns={{ label: 'Quando', word: 'Palavra', example: 'Exemplo' }}
      rows={source.GROWS.map(([label, word, example, translation], index) => ({
        id: String(index),
        label,
        word,
        example,
        translation,
      }))}
      explanation={
        <Common.Stack>
          <Common.Heading>I + o que você faz</Common.Heading>
          <p>
            <b>I work. I study. I get up.</b> Sem am.
          </p>
          <p>
            <b>I’m</b> é para como você está e quem você é:{' '}
            <b>I’m tired. I’m a teacher.</b>
          </p>
        </Common.Stack>
      }
      afterReveal={
        <Common.Stack>
          <Common.Surface>
            <Common.Heading>Para perguntar</Common.Heading>
            <p>
              <b>What time</b> do you get up?
            </p>
            <p>
              <b>Are you free</b> on Tuesday? Yes, I am. / No, I’m not.
            </p>
            <p>
              <b>What about</b> Thursday? = E na quinta?
            </p>
          </Common.Surface>
          <PromptExercise
            items={[
              {
                id: 'now',
                prompt:
                  'Agora você: diga três coisas da sua semana, uma com at, uma com on e uma com in the. Depois pergunte à professora.',
                answer: 'I get up at … · I work on … · I’m free in the …',
              },
            ]}
          />
        </Common.Stack>
      }
    />
  )
}

export function YouAndKim() {
  const [swapped, setSwapped] = useState(false)
  const items = swapped
    ? [
        {
          id: 'v1',
          prompt: 'Pergunte a que horas ela levanta.',
          answer: 'What time do you get up?',
        },
        {
          id: 'v2',
          prompt: 'Pergunte da noite.',
          answer: 'And in the evening?',
        },
        {
          id: 'v3',
          prompt: 'Convide para a academia num dia.',
          answer: 'I go to the gym on … Are you free?',
        },
        { id: 'v4', prompt: 'Proponha outro dia.', answer: 'What about …?' },
        {
          id: 'v5',
          prompt: 'Diga a hora e se despeça.',
          answer: 'At … See you on …!',
        },
      ]
    : [
        {
          id: 'v1',
          prompt:
            'Kim: What time do you get up? Diga a sua hora e o que você faz de manhã.',
          answer: 'I get up at … I … in the morning.',
        },
        {
          id: 'v2',
          prompt:
            'Kim: And in the evening? Diga o que você faz à noite, e em que dia.',
          answer: 'I … on … · I … after work. · I’m free in the evening.',
        },
        {
          id: 'v3',
          prompt:
            'Kim: I go to the gym on … Are you free? Come with me! Responda a verdade; se puder, pergunte a hora.',
          answer: 'Yes, I am. What time? · No, I’m not. I’m free on …',
        },
        {
          id: 'v4',
          prompt: 'Kim: At …, in the … Don’t be late! Combine e se despeça.',
          answer: 'Great! See you on …',
        },
      ]
  return (
    <Common.Stack>
      <Common.Row>
        <Common.Chip>
          {swapped ? 'You: Kim' : 'You: about your week'}
        </Common.Chip>
        <Common.Chip>{swapped ? 'Teacher: Ana' : 'Teacher: Kim'}</Common.Chip>
        <Button
          variant="secondary"
          aria-pressed={swapped}
          onClick={() => setSwapped(!swapped)}
        >
          {swapped ? 'Swap back' : 'Swap roles'}
        </Button>
      </Common.Row>
      <PromptExercise key={String(swapped)} items={items} />
    </Common.Stack>
  )
}

export function FindATime() {
  const [completed, setCompleted] = useState<readonly string[]>([])
  const [support, setSupport] = useState(false)
  const steps = [
    'Conte três coisas da sua semana.',
    'Convide a professora: Are you free on …? Se ela não puder, proponha outro dia.',
    'Diga o plano: o dia e a hora.',
    'Troquem: a professora convida você. Responda pela sua semana.',
  ]
  return (
    <Common.Columns>
      <RolePlayExercise
        situation="Uma aula a mais com a sua professora. Que dia? Que horas?"
        support={[
          'I work on …',
          'I’m free on …',
          'Are you free on …?',
          'What about …?',
          'No, I’m not.',
          'See you on …',
          'I always / often / sometimes / never … on …',
          'I … every day.',
          'I … with my husband / my wife / my children.',
        ]}
        supportVisible={support}
        onSupportToggle={() => setSupport(!support)}
        steps={steps.map((label, index) => ({ id: String(index), label }))}
        completedIds={completed}
        onStepToggle={(id) =>
          setCompleted((old) =>
            old.includes(id)
              ? old.filter((value) => value !== id)
              : [...old, id],
          )
        }
      />
      <YourWeek />
    </Common.Columns>
  )
}
