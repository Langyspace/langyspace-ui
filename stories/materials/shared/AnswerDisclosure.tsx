import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../../../src/components/Button/Button'
import * as S from './Lesson.styles'

export function AnswerDisclosure({
  answer,
  question,
}: {
  answer: ReactNode
  question: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const label = open ? 'Hide answer' : 'Answer'
  return (
    <S.Answer>
      <Button
        variant="secondary"
        size="sm"
        aria-label={`${label}: ${question}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
      </Button>
      <div id={id} hidden={!open}>
        {open ? <S.Hint as="div">{answer}</S.Hint> : null}
      </div>
    </S.Answer>
  )
}
