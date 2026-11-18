import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { Hint } from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { AnswerPanel } from './LessonExercises.styles'

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
      <Button
        variant="secondary"
        size="sm"
        aria-label={`${open ? 'Hide answer' : 'Answer'}: ${question}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Hide answer' : 'Answer'}
      </Button>
      <Hint id={id} hidden={!open}>
        {answer}
      </Hint>
    </AnswerPanel>
  )
}
