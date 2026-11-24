import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { MaterialTheme } from './MaterialTheme'
import { LessonHint } from './LessonHint'

const meta = {
  title: 'Materials/Shared/Hint',
  component: LessonHint,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  args: { context: 'What’s your name?', children: <p>My name is …</p> },
} satisfies Meta<typeof LessonHint>
export default meta
type Story = StoryObj<typeof meta>
export const Closed: Story = {}
export const Open: Story = {
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(
      c.getByRole('button', { name: 'Hint: What’s your name?' }),
    )
    await expect(c.getByRole('region')).toBeVisible()
  },
}
export const IndependentHints: Story = {
  render: () => (
    <>
      <LessonHint context="What’s your name?">
        <p>My name is …</p>
      </LessonHint>
      <LessonHint context="Where are you from?">
        <p>I’m from …</p>
      </LessonHint>
    </>
  ),
}
