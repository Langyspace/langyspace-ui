import { characterPortrait } from './characterPortraits'
import { VocabularyControls } from './VocabularyControls'
import { useState } from 'react'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialLearningDialogue as LearningDialogue } from './MaterialLearningDialogue'
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
        onReveal={(id) =>
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }
        revealOnHover={false}
        imageFit="contain"
        onPlay={(id) => speak(items.find((item) => item.id === id)?.word ?? '')}
        showAll={all}
        showInitial={hint}
        imageVariant="scene"
        revealVariant="tooltip"
        density="compact"
      />
      <VocabularyControls
        showInitial={hint}
        showAll={all}
        onToggleInitial={() => setHint(!hint)}
        onToggleAll={() => setAll(!all)}
      />
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
      <Common.Heading $prompt>{question}</Common.Heading>
      <Common.Stack role="group" aria-label={question}>
        {options.map((option, index) => (
          <QuizOption
            key={`${index}-${option}`}
            letter={String.fromCharCode(65 + index)}
            feedbackOutcome={index === correctIndex ? 'correct' : 'wrong'}
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
        density="compact"
        lines={lines.map((line) => ({
          id: line.id,
          speaker: line.speaker,
          content: line.text,
          translation: line.translation,
          avatarUrl: line.avatarUrl ?? characterPortrait(line.speaker),
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
  answerMinLines,
}: PromptExerciseProps) {
  const [hintCount, setHintCount] = useState(0)
  const hints = items.filter((item) => item.hint)
  return (
    <Common.Stack>
      <Styled.PromptList>
        {items.map((item, index) => {
          const question = item.answer ? (
            <AnswerDisclosure
              question={item.prompt}
              answer={item.answer}
              answerMinLines={answerMinLines}
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
          )
          const hinted = hints.findIndex((x) => x.id === item.id)
          return (
            <Styled.Prompt key={item.id}>
              {item.hint ? (
                <Common.Stack>
                  {question}
                  {hinted >= 0 && hinted < hintCount ? (
                    <Common.Hint role="status">{item.hint}</Common.Hint>
                  ) : null}
                </Common.Stack>
              ) : (
                question
              )}
            </Styled.Prompt>
          )
        })}
      </Styled.PromptList>
      {hints.length ? (
        <VocabularyControls
          density="compact"
          interaction="progressive"
          showInitial={hintCount > 0}
          labels={{
            hint: hintCount === hints.length ? 'Hide hints' : 'Show next hint',
          }}
          onToggleInitial={() =>
            setHintCount((count) => (count === hints.length ? 0 : count + 1))
          }
        />
      ) : null}
    </Common.Stack>
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
        feedbackOutcome: active
          ? active.answer === choice
            ? ('correct' as const)
            : ('wrong' as const)
          : undefined,
      }))}
      onSelect={(id, choice) => {
        if (items.find((item) => item.id === id)?.answer === choice) {
          setAnswers((old) => ({ ...old, [id]: choice }))
          setWrong(undefined)
        } else setWrong(choice)
      }}
    />
  )
}
