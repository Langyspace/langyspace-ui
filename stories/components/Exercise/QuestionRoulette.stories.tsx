import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { ThemeProvider } from 'styled-components'
import { QuestionRoulette } from '../../../src/components/Exercise/QuestionRoulette'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { conversationRouletteTopics } from './QuestionRoulette.fixtures'
import * as S from './QuestionRoulette.stories.styles'

const meta = {
  title: 'Exercise/QuestionRoulette',
  component: QuestionRoulette,
  parameters: { layout: 'fullscreen' },
  args: { topics: conversationRouletteTopics },
  decorators: [
    (Story) => (
      <S.Stage>
        <SlidePage
          columns={2}
          title="Think on your feet"
          instruction="Answer the question in English. Give reasons and an example"
        >
          <Story />
        </SlidePage>
      </S.Stage>
    ),
  ],
} satisfies Meta<typeof QuestionRoulette>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { tags: ['visual-review'] }
export const DrawAndSupport: Story = {
  tags: ['visual-review', 'interaction-regression'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Spin' }))
    await waitFor(() =>
      expect(canvas.getByLabelText('Questions drawn')).toHaveTextContent(
        '1 / 12',
      ),
    )
    await userEvent.click(
      canvas.getByRole('button', { name: 'Show a speaking tip' }),
    )
    await expect(
      canvas.getByRole('button', { name: 'Hide the speaking tip' }),
    ).toHaveAttribute('aria-pressed', 'true')
  },
}
export const Dark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={materialDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['visual-review'],
}
export const Narrow: Story = {
  decorators: [
    (Story) => (
      <S.Narrow>
        <Story />
      </S.Narrow>
    ),
  ],
  tags: ['visual-review', 'layout-boundary'],
}
export const Empty: Story = { args: { topics: [] }, tags: ['visual-review'] }
export const Disabled: Story = {
  args: { disabled: true },
  tags: ['visual-review'],
}
export const LongQuestion: Story = {
  args: {
    topics: [
      {
        id: 'choices',
        label: 'Choices',
        questions: [
          {
            id: 'tradeoff',
            prompt:
              'Imagine that a close friend has been offered a much better job in another country, but accepting it would mean leaving their family and starting again. What questions would you ask before giving advice, and which considerations should carry the most weight?',
            hint: 'Compare short-term and long-term consequences and acknowledge uncertainty.',
          },
        ],
      },
    ],
  },
  tags: ['visual-review', 'layout-boundary'],
}
