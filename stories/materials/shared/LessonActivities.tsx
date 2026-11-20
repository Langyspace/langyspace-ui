import { bindStudentDestinations } from './studentDestinations'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { PromptExercise } from './LessonExercises'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { useMaterialSpeech } from './useMaterialSpeech'
import * as Styled from './LessonActivities.styles'
import type {
  GrammarActivityProps,
  HomeworkActivityProps,
  PronunciationActivityProps,
  ReviewActivityProps,
} from './LessonActivities.types'
export { ListeningActivity } from './ListeningActivity'

export function PronunciationActivity({
  choices,
  translations,
  tip,
}: PronunciationActivityProps) {
  const [target, setTarget] = useState<0 | 1>()
  const [result, setResult] = useState<boolean>()
  const [score, setScore] = useState<readonly boolean[]>([])
  const speech = useMaterialSpeech()
  return (
    <Common.Surface>
      <Button
        variant="brand"
        onClick={() => {
          const next = Math.random() < 0.5 ? 0 : 1
          setTarget(next)
          setResult(undefined)
          speech.speak(choices[next])
        }}
      >
        Listen
      </Button>
      <Common.Row role="group" aria-label="Qual você ouviu?">
        {choices.map((choice, index) => (
          <Button
            key={choice}
            variant="secondary"
            onClick={() => {
              if (target === undefined) {
                speech.speak(choice)
                return
              }
              const correct = target === index
              setResult(correct)
              setScore((old) => [...old.slice(-7), correct])
              setTarget(undefined)
            }}
          >
            {choice} · {translations[index]}
          </Button>
        ))}
      </Common.Row>
      <Common.Hint role="status">
        {result === undefined
          ? 'Listen and choose what you hear.'
          : result
            ? 'Correct! Listen again.'
            : tip}
      </Common.Hint>
      {score.length ? (
        <Common.Row>
          <Common.Hint aria-label="Placar">
            {score.filter(Boolean).length} acertos em {score.length} tentativas
          </Common.Hint>
          <Button
            variant="text"
            onClick={() => {
              setScore([])
              setTarget(undefined)
              setResult(undefined)
            }}
          >
            Recomeçar
          </Button>
        </Common.Row>
      ) : null}
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Surface>
  )
}

export function GrammarActivity({
  rows,
  explanation,
  columns = { label: 'Who', word: 'Form', example: 'Example' },
}: GrammarActivityProps) {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  return (
    <Common.Stack>
      <GrammarTable
        title="Grammar"
        captionVisibility="screen-reader"
        hiddenAnswers
        revealedIds={revealed}
        columns={{
          subject: columns.label,
          verb: columns.word,
          example: columns.example,
        }}
        rows={rows.map((row) => ({
          id: row.id,
          subject: row.label,
          verb: row.word,
          example: row.example,
          translation: row.translation,
        }))}
        onReveal={(id) =>
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }
      />
      {explanation}
    </Common.Stack>
  )
}

export function ReviewActivity({ items }: ReviewActivityProps) {
  return (
    <PromptExercise
      items={items.map((item, index) => ({
        id: String(index),
        prompt: item.sentence,
        answer: item.answer,
      }))}
    />
  )
}

export function HomeworkActivity({
  items,
  message: authoredMessage,
  studentPortalOrigin,
}: HomeworkActivityProps) {
  const message = bindStudentDestinations(authoredMessage, studentPortalOrigin)
  const [copied, setCopied] = useState(false)
  const [fallback, setFallback] = useState(false)
  return (
    <Common.Stack>
      {items.map((item) => (
        <Common.Surface key={item.title}>
          <Common.Heading>{item.title}</Common.Heading>
          <p>{item.description}</p>
        </Common.Surface>
      ))}
      <Button
        variant="brand"
        onClick={() => {
          void (async () => {
            try {
              await navigator.clipboard.writeText(message)
              setCopied(true)
              setFallback(false)
            } catch {
              setFallback(true)
              setCopied(false)
            }
          })()
        }}
      >
        {copied ? 'Copied ✓' : 'Copy links'}
      </Button>
      {copied ? <Common.Hint role="status">Links copiados.</Common.Hint> : null}
      {fallback ? (
        <label>
          O navegador não deixou copiar. Copie os links abaixo.
          <Styled.CopyText
            readOnly
            value={message}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      ) : null}
    </Common.Stack>
  )
}
