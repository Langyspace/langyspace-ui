import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { lessonCanvas } from '../shared/storyViewport'
import { B201Lesson } from './B201Lesson'
const meta = {
  title: 'Materials/B2.01',
  component: B201Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'B2.01 · Dead phone, no charger, plano novo com Ana, Kim e Raj.12 páginas em17 telas. Ilustrações preservadas, escuta ElevenLabs, leitura e conversa com a professora. Prática de casa oral sem destinos inventados.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof B201Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = {
  args: { initialPageId: 's2' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's2')
    await userEvent.click(c.getByRole('button', { name: 'Show all' }))
    await expect(
      c.getByRole('button', { name: 'a charging cable: cabo de carregar' }),
    ).toBeVisible()
  },
}
export const WarmUpOne: Story = { args: { initialPageId: 's31' } }
export const WarmUpHiddenOptions: Story = {
  args: { initialPageId: 's32' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's32')
    await userEvent.click(c.getByRole('button', { name: 'Show options' }))
    await expect(
      c.getByRole('button', { name: /I’d been walking for two hours/ }),
    ).toBeVisible()
  },
}
export const WarmUpBorrow: Story = { args: { initialPageId: 's33' } }
export const Expressions: Story = { args: { initialPageId: 's4' } }
export const PronunciationOne: Story = { args: { initialPageId: 's51' } }
export const PronunciationTwo: Story = { args: { initialPageId: 's52' } }
export const DialogueOne: Story = { args: { initialPageId: 's6' } }
export const DialogueTwo: Story = { args: { initialPageId: 's62' } }
export const Comprehension: Story = { args: { initialPageId: 's63' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RightOrWrong: Story = { args: { initialPageId: 's10' } }
export const RolePlay: Story = {
  args: { initialPageId: 's11' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's11')
    await userEvent.type(
      c.getByRole('textbox', { name: 'When? Where?' }),
      'Monday, New York',
    )
    await userEvent.click(c.getByRole('button', { name: 'Clear' }))
    await expect(c.getByRole('textbox', { name: 'When? Where?' })).toHaveValue(
      '',
    )
  },
}
export const Homework: Story = { args: { initialPageId: 's12' } }
