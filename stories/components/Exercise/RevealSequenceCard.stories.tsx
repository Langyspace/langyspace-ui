import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ThemeProvider } from 'styled-components'
import { RevealSequenceCard } from '../../../src/components/InteractiveMaterial/RevealSequenceCard'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import type { RevealSequenceCardProps } from '../../../src/components/InteractiveMaterial/RevealSequenceCard.types'
import clue from '../../materials/B101/assets/scene-wet-shirt.webp'
import answer from '../../materials/B101/assets/scene-bus.webp'
import { Stage } from './RevealSequenceCard.stories.styles'
const stages = [
  { id: 'closed', content: '?', revealLabel: 'Closed card' },
  {
    id: 'clue',
    image: { src: clue, alt: 'Kim com a camiseta molhada' },
    revealLabel: 'Show clue',
  },
  {
    id: 'answer',
    content: 'waiting for the bus',
    image: { src: answer, alt: 'Kim esperando o ônibus na chuva' },
    revealLabel: 'Show answer',
  },
]
function Demo(args: RevealSequenceCardProps) {
  const [id, setId] = useState(args.stageId)
  return <RevealSequenceCard {...args} stageId={id} onAdvance={setId} />
}
const meta = {
  title: 'Exercise/RevealSequenceCard',
  component: RevealSequenceCard,
  render: (args) => (
    <Stage>
      <Demo {...args} />
    </Stage>
  ),
  args: { title: 'Saturday', stageId: 'closed', stages, onAdvance: () => {} },
} satisfies Meta<typeof RevealSequenceCard>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: 'Show clue' }))
    await expect(c.getByRole('img')).toHaveAccessibleName(
      'Kim com a camiseta molhada',
    )
    await userEvent.click(c.getByRole('button', { name: 'Show answer' }))
    await expect(c.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    await expect(c.getByText('waiting for the bus')).toBeVisible()
  },
}
export const Clue: Story = { args: { stageId: 'clue' } }
export const Answer: Story = { args: { stageId: 'answer' } }
export const Empty: Story = { args: { stages: [] } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          slides: {
            canvas: '#171717',
            surface: '#232323',
            foreground: '#F7F7F7',
            muted: '#A3A3A3',
            border: '#444444',
            accent: '#FF7A9E',
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
}
