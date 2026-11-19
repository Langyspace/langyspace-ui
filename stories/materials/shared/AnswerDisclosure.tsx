import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { Hint } from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { AnswerPanel, QuestionTrigger } from './LessonExercises.styles'

export function AnswerDisclosure({
  answer,
  question,
}: {
  answer: ReactNode
  question: string
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
        {question}
      </QuestionTrigger>
      <Hint id={id} hidden={!open}>
        {answer}
      </Hint>
    </AnswerPanel>
  )
}
