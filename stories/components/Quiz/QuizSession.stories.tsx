import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { QuizSession } from '../../../src/components/Quiz/QuizSession'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { PracticeResultPanel } from '../../../src/components/PracticeResultPanel/PracticeResultPanel'
import homework from '../../materials/Practice/lessons/a1-12.json'
const meta = {
  component: QuizSession,
  title: 'Quiz/QuizSession',
  args: {
    'aria-label': 'Quiz: Introductions',
    header: {
      name: 'Introductions',
      counter: '1/6',
      progress: 0.08,
      backLabel: 'Voltar',
      onBack: () => {},
    },
    question: {
      level: 'A1',
      counter: 'Questão 1 de 6',
      detail: 'Gramática · 6 min',
      prompt: 'Choose the correct sentence',
      options: [
        { id: 'a', label: 'I’m from Brazil' },
        { id: 'b', label: 'I from Brazil' },
      ],
      onSelect: () => {},
      hint: <p className="hint">Escolha a melhor resposta</p>,
    },
  },
} satisfies Meta<typeof QuizSession>
export default meta
type Story = StoryObj<typeof meta>
export const Initial: Story = { tags: ['visual-review'] }
export const Wrong: Story = {
  args: {
    question: {
      ...meta.args.question,
      options: [
        { id: 'a', label: 'I’m from Brazil', state: 'dim', disabled: true },
        { id: 'b', label: 'I from Brazil', state: 'wrong', disabled: true },
      ],
      feedback: {
        tone: 'wrong',
        content:
          'Para dizer de onde você é, usamos o verbo to be: I’m from Brazil. I’m é a forma curta de I am',
      },
      nextAction: { label: 'Próxima', onClick: () => {} },
    },
  },
  tags: ['visual-review'],
}
export const Narrow: Story = {
  ...Wrong,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
export const Result: Story = {
  args: {
    header: { ...meta.args.header, progress: 1, counter: '4/6' },
    question: undefined,
    children: (
      <PracticeResultPanel
        heading="Resultado"
        description="Você acertou 4 de 6 questões"
      />
    ),
  },
  tags: ['visual-review'],
}

function HomeworkPreview() {
  const [selected, setSelected] = useState<string>()
  const question = homework.first.questions[0]!
  const feedback = selected
    ? selected === question.correctOptionId
      ? question.feedback.correct
      : question.feedback.wrong
    : undefined
  return (
    <MobileFrame screenMode="application-responsive" aria-label="Homework quiz">
      <QuizSession
        presentation="preview"
        header={{
          ...meta.args.header,
          name: homework.title,
          onBack: () => setSelected(undefined),
        }}
        question={{
          level: 'A1',
          counter: 'Questão 1 de 6',
          detail: 'Gramática',
          prompt: question.prompt,
          context: question.context,
          narrationAction: (
            <IconButton
              variant="brand"
              size="sm"
              aria-label="Ouvir o enunciado"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </IconButton>
          ),
          options: question.options.map((option) => ({
            id: option.id,
            label: option.text,
            disabled: Boolean(selected),
            state: !selected
              ? 'default'
              : selected === option.id
                ? option.id === question.correctOptionId
                  ? 'correct'
                  : 'wrong'
                : 'dim',
          })),
          onSelect: setSelected,
          feedback: feedback
            ? {
                tone:
                  selected === question.correctOptionId ? 'correct' : 'wrong',
                content: feedback.title + ' ' + feedback.message,
              }
            : undefined,
          nextAction: selected
            ? { label: 'Próxima', onClick: () => setSelected(undefined) }
            : undefined,
        }}
      />
    </MobileFrame>
  )
}

export const HomeworkPhonePreview: Story = {
  render: () => <HomeworkPreview />,
  tags: ['visual-review'],
}
export const ShortHomeworkPhonePreview: Story = {
  ...HomeworkPhonePreview,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
