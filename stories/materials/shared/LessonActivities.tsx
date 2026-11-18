import { AnswerDisclosure } from './AnswerDisclosure'
import { useState } from 'react'
import { bindStudentDestinations } from './studentDestinations'
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
          ? 'Ouça e diga qual você ouviu.'
          : result
            ? 'Correto! Ouça mais uma vez.'
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
  afterReveal,
  columns = { label: 'Quem', word: 'Palavra', example: 'Exemplo' },
}: GrammarActivityProps) {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  const speech = useMaterialSpeech()
  const all = rows.length > 0 && rows.every((row) => revealed.includes(row.id))
  const table = (
    <Common.Stack>
      <Styled.TableScroll>
        <Styled.Table>
          <thead>
            <tr>
              <th scope="col">{columns.label}</th>
              <th scope="col">{columns.word}</th>
              <th scope="col">{columns.example}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.label}</td>
                <td>
                  {revealed.includes(row.id) ? (
                    <b>{row.word}</b>
                  ) : (
                    <Button
                      variant="brand"
                      aria-label={`Mostrar: ${row.label}`}
                      onClick={() => {
                        setRevealed((ids) => [...ids, row.id])
                        speech.speak(row.example)
                      }}
                    >
                      ?
                    </Button>
                  )}
                </td>
                <td>
                  {revealed.includes(row.id) ? (
                    <>
                      <Button
                        variant="text"
                        onClick={() => speech.speak(row.example)}
                      >
                        {row.example}
                      </Button>
                      {row.translation ? (
                        <Common.Hint>{row.translation}</Common.Hint>
                      ) : null}
                    </>
                  ) : (
                    '…'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Styled.Table>
      </Styled.TableScroll>
      <Button variant="text" onClick={() => setRevealed([])}>
        Hide all
      </Button>
      {all && afterReveal ? (
        <Common.Surface>{afterReveal}</Common.Surface>
      ) : null}
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
  return explanation ? (
    <Common.Columns>
      {table}
      <Styled.Rule>{explanation}</Styled.Rule>
    </Common.Columns>
  ) : (
    table
  )
}

export function ReviewActivity({
  items,
  ownPrompt = 'A professora diz uma frase sua de hoje.',
}: ReviewActivityProps) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [marked, setMarked] = useState(false)
  return (
    <Common.Stack>
      {items.map((item, index) => (
        <Common.Surface key={item.sentence}>
          <Common.Heading>
            {index + 1}. {item.sentence}
          </Common.Heading>
          <Common.Row>
            {['Right', 'Wrong'].map((choice, option) => (
              <Button
                key={choice}
                variant={
                  answers[item.sentence] === (option === 0)
                    ? 'brand'
                    : 'secondary'
                }
                aria-pressed={answers[item.sentence] === (option === 0)}
                onClick={() =>
                  setAnswers((old) => ({
                    ...old,
                    [item.sentence]: option === 0,
                  }))
                }
              >
                {choice}
              </Button>
            ))}
          </Common.Row>
          <AnswerDisclosure question={item.sentence} answer={item.answer} />
          {answers[item.sentence] !== undefined ? (
            <Common.Hint role="status">
              {answers[item.sentence] === item.correct
                ? `${item.answer} ${item.why ?? ''}`
                : 'Tente novamente.'}
            </Common.Hint>
          ) : null}
        </Common.Surface>
      ))}
      <Common.Surface>
        <Common.Heading>One from today</Common.Heading>
        <p>{ownPrompt}</p>
        <Button
          variant="secondary"
          aria-pressed={marked}
          onClick={() => setMarked(!marked)}
        >
          {marked ? 'Done' : 'Fixed'}
        </Button>
      </Common.Surface>
    </Common.Stack>
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
