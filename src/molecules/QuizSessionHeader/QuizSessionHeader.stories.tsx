import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent, within, fn } from 'storybook/test'
import { QuizSessionHeader } from '.'
import { Button } from '../../atoms/Button'

const meta = {
  title: 'Molecules/QuizSessionHeader',
  component: QuizSessionHeader,
  tags: ['visual-review'],
  args: {
    name: 'Gramática — rotina',
    counter: '1 de 8',
    progress: 0.0625,
    backLabel: 'Voltar',
    onBack: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QuizSessionHeader>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const LongName: Story = {
  args: {
    name: 'Atividade de gramática para conversar sobre viagens e situações de trabalho',
    counter: '12 de 128',
    progress: 0.09375,
  },
}
export const Completed: Story = { args: { counter: '7/8', progress: 1 } }
export const Focused: Story = {
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole('button', { name: 'Voltar' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onBack).toHaveBeenCalledOnce()
  },
}
export const Updating: Story = {
  render: (args) => {
    const [step, setStep] = useState(1)
    return (
      <>
        <QuizSessionHeader
          {...args}
          counter={`${step} de 8`}
          progress={step / 8}
        />
        <Button
          type="button"
          onClick={() => setStep((value) => Math.min(8, value + 1))}
        >
          Próxima questão (fixture)
        </Button>
      </>
    )
  },
}
