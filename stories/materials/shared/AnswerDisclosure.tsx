import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { Hint } from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { AnswerPanel, QuestionTrigger } from './LessonExercises.styles'

export function AnswerDisclosure({
  answer,
  question,
  marker,
}: {
  answer: ReactNode
  question: string
  marker?: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <AnswerPanel>
      <QuestionTrigger
        type="button"
        aria-label={question}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {marker}
        <span>{question}</span>
      </QuestionTrigger>
      <Hint id={id} hidden={!open}>
        {answer}
      </Hint>
    </AnswerPanel>
  )
}
