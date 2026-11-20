import { useState } from 'react'
import type { ReactNode } from 'react'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'

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
  return (
    <RevealCard
      presentation="prompt"
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
