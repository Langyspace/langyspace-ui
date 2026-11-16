import { useState } from 'react'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import type { VoiceMessageExerciseProps } from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'
import { initial, questions } from './VoiceMessage.fixtures'

export function VoiceMessageDemo(props: Partial<VoiceMessageExerciseProps>) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [attempts, setAttempts] = useState<Record<string, readonly string[]>>(
    {},
  )
  const data = props.questions ?? questions
  const evaluated = data.map((question) => {
    const correct = question.id === 'angry' ? 'no' : 'yes'
    return {
      ...question,
      value: values[question.id],
      disabled: (attempts[question.id] ?? []).includes(correct),
      choices: question.choices.map((choice) => ({
        ...choice,
        feedback: (attempts[question.id] ?? []).includes(choice.id)
          ? choice.id === correct
            ? ('correct' as const)
            : ('incorrect' as const)
          : undefined,
      })),
    }
  })
  return (
    <VoiceMessageExercise
      {...initial}
      {...props}
      questions={evaluated}
      onAnswer={(id, value) => {
        setValues((current) => ({ ...current, [id]: value }))
        setAttempts((current) => ({
          ...current,
          [id]: [...(current[id] ?? []), value],
        }))
      }}
    />
  )
}

export function VoiceMessageDeck() {
  const [pageId, setPageId] = useState('listening')
  return (
    <SlideDeck
      label="A1.01 · Listening"
      pageId={pageId}
      onPageChange={setPageId}
      pages={[
        {
          id: 'intro',
          label: 'Introdução',
          content: (
            <SlidePage
              title="Introduce yourself"
              eyebrow="A1 · Lesson 01"
              tone="inverse"
            >
              <p>Dizer o seu nome, de onde você é e como você está.</p>
            </SlidePage>
          ),
        },
        {
          id: 'listening',
          label: 'Listening Practice',
          content: (
            <SlidePage
              width="standard"
              title="Listening Practice"
              instruction="Ouça o áudio da Kim e responda."
            >
              <VoiceMessageDemo active={pageId === 'listening'} />
            </SlidePage>
          ),
        },
        {
          id: 'next',
          label: 'Próxima página',
          content: (
            <SlidePage
              title="Let’s talk"
              instruction="Responda sobre você e devolva a pergunta: And you?"
            />
          ),
        },
      ]}
    />
  )
}
