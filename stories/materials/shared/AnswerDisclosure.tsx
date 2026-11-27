import { useState } from 'react'
import type { ReactNode } from 'react'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'

export function AnswerDisclosure({
  answer,
  question,
  marker,
  answerMinLines,
}: {
  answer: ReactNode
  question: string
  marker?: ReactNode
  answerMinLines?: number
}) {
  const [open, setOpen] = useState(false)
  return (
    <RevealCard
      presentation="prompt"
      answerMinLines={answerMinLines}
      answer={answer}
      marker={marker}
      revealed={open}
      aria-label={question}
      onClick={() => setOpen(!open)}
    >
      {question}
    </RevealCard>
  )
}
