import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GapFillExercise } from '../../../src/components/InteractiveMaterial/GapFillExercise'
import { AnswerDisclosure } from './AnswerDisclosure'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import * as Styled from './LessonExercises.styles'
import { useMaterialSpeech } from './useMaterialSpeech'
import type {
  ChoiceExerciseProps,
  DialogueExerciseProps,
  GapExerciseProps,
  PromptExerciseProps,
  VocabularyExerciseProps,
} from './LessonExercises.types'

const toggle = (ids: readonly string[], id: string) =>
  ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id]

export function VocabularyExercise({ items, note }: VocabularyExerciseProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [hint, setHint] = useState(false)
  const { speak, error } = useMaterialSpeech()
  return (
    <Common.Stack>
      <VocabularyGrid
        items={items}
        revealedIds={revealed}
        onReveal={(id) => setRevealed((ids) => toggle(ids, id))}
        onPlay={(id) => speak(items.find((item) => item.id === id)?.word ?? '')}
        showAll={all}
        showInitial={hint}
        imageVariant="scene"
        revealVariant="tooltip"
        density="compact"
      />
      <Common.Row>
        <Button
          variant="secondary"
          aria-pressed={hint}
          onClick={() => setHint(!hint)}
        >
          First letter
        </Button>
        <Button
          variant="secondary"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          {all ? 'Hide words' : 'Show words'}
        </Button>
      </Common.Row>
      {note ? <Common.Hint>{note}</Common.Hint> : null}
      {error ? <Common.Hint role="status">{error}</Common.Hint> : null}
    </Common.Stack>
  )
}

export function ChoiceExercise({
  question,
  options,
  correctIndex,
  image,
}: ChoiceExerciseProps) {
  const [selected, setSelected] = useState<number>()
  return (
    <Common.Surface>
      {image ? <Styled.Scene src={image.src} alt={image.alt} /> : null}
      <Common.Heading>{question}</Common.Heading>
      <Common.Stack role="group" aria-label={question}>
        {options.map((option, index) => (
          <QuizOption
            key={`${index}-${option}`}
            letter={String.fromCharCode(65 + index)}
            density="compact"
            aria-pressed={selected === index}
            state={
              selected === undefined
                ? 'default'
                : selected === correctIndex && index === correctIndex
                  ? 'correct'
                  : selected === index
                    ? 'wrong'
                    : 'default'
            }
            onClick={() => setSelected(index)}
          >
            {option}
          </QuizOption>
        ))}
      </Common.Stack>
      {selected !== undefined ? (
        <Button variant="text" onClick={() => setSelected(undefined)}>
          Try again
        </Button>
      ) : null}
    </Common.Surface>
  )
}

export function DialogueExercise({ lines }: DialogueExerciseProps) {
  const [translations, setTranslations] = useState<string[]>([])
  const { speak, error } = useMaterialSpeech()
  const speakers = [...new Set(lines.map((line) => line.speaker))]
  return (
    <Common.Stack>
      <LearningDialogue
        lines={lines.map((line) => ({
          id: line.id,
          speaker: line.speaker,
          content: line.text,
          translation: line.translation,
          avatarUrl: line.avatarUrl,
          side: speakers.indexOf(line.speaker) % 2 ? 'end' : 'start',
          audioLabel: `Listen: ${line.text}`,
        }))}
        translatedIds={translations}
        onTranslate={(id) => setTranslations((ids) => toggle(ids, id))}
        onPlay={(id) => speak(lines.find((line) => line.id === id)?.text ?? '')}
      />
      {error ? <Common.Hint role="status">{error}</Common.Hint> : null}
    </Common.Stack>
  )
}

export function PromptExercise({
  items,
  numbered = true,
}: PromptExerciseProps) {
  return (
    <Styled.PromptList>
      {items.map((item, index) => (
        <Styled.Prompt key={item.id}>
          {item.answer ? (
            <AnswerDisclosure
              question={item.prompt}
              answer={item.answer}
              marker={
                numbered ? (
                  <Common.Number aria-hidden="true">{index + 1}</Common.Number>
                ) : undefined
              }
            />
          ) : (
            <Styled.PromptQuestion>
              {numbered ? (
                <Common.Number aria-hidden="true">{index + 1}</Common.Number>
              ) : null}
              <p>{item.prompt}</p>
            </Styled.PromptQuestion>
          )}
        </Styled.Prompt>
      ))}
    </Styled.PromptList>
  )
}

export function GapExercise({ items, choices }: GapExerciseProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [wrong, setWrong] = useState<string>()
  const active = items.find((item) => !answers[item.id])
  return (
    <GapFillExercise
      items={items.map((item) => ({ ...item, answer: answers[item.id] }))}
      activeId={active?.id}
      choices={choices.map((choice) => ({
        id: choice,
        label: choice,
        state: wrong === choice ? 'wrong' : 'default',
      }))}
      onSelect={(id, choice) => {
        if (items.find((item) => item.id === id)?.answer === choice) {
          setAnswers((old) => ({ ...old, [id]: choice }))
          setWrong(undefined)
        } else setWrong(choice)
      }}
      status={!active ? 'Done!' : wrong ? 'Try again.' : undefined}
    />
  )
}
