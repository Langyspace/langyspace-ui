import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { B101Lesson } from './B101Lesson'
const meta = {
  title: 'Materials/B1.01',
  component: B101Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'B1.01 · 17 páginas para conversação B1. Componentes do UX Lab, cenas preservadas com enquadramento seguro, áudio ElevenLabs nos trechos de escuta e Notes persistentes. Revisão visual humana pendente',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof B101Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = {
  args: { initialPageId: 's2' },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: 'Show all' }))
    await expect(c.getByText('baking', { exact: true })).toBeVisible()
  },
}
export const WarmUpOne: Story = { args: { initialPageId: 's31' } }
export const WarmUpTwo: Story = { args: { initialPageId: 's32' } }
export const WarmUpLeo: Story = { args: { initialPageId: 's33' } }
export const NowYou: Story = { args: { initialPageId: 's4' } }
export const FollowUpQuestion: Story = { args: { initialPageId: 's51' } }
export const FinishedResult: Story = { args: { initialPageId: 's52' } }
export const DialogueOne: Story = { args: { initialPageId: 's6' } }
export const DialogueTwo: Story = { args: { initialPageId: 's62' } }
export const Comprehension: Story = { args: { initialPageId: 's62' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RightOrWrong: Story = { args: { initialPageId: 's10' } }
export const RolePlay: Story = {
  args: { initialPageId: 's11' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: 'Saturday' }))
    await expect(
      c.getByRole('img', {
        name: 'A wet shirt after being outside in the rain.',
      }),
    ).toBeVisible()
    await expect(
      c.getByText('waiting for the bus', { exact: true }),
    ).toBeVisible()
    await userEvent.click(c.getByRole('button', { name: 'Monday' }))
    await expect(c.getByText('playing soccer', { exact: true })).toBeVisible()
  },
}
export const VocabularyNarrow: Story = {
  args: { initialPageId: 's2' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
export const ListeningNarrow: Story = {
  args: { initialPageId: 's9' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
export const Homework: Story = { args: { initialPageId: 's12' } }
