import { lessonCanvas } from '../shared/storyViewport'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { A201Lesson } from './A201Lesson'
const meta = {
  title: 'Materials/A2.01',
  component: A201Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A2.01 · This week I’m working in Porto. 12 páginas em 17 telas, a partir da exportação local de 16/11. Cenas com ambientação e áudio da Kim sintetizado localmente. Conteúdo, respostas, notas, fala e timer pertencem à prévia. Integração nos portais e tarefas dependem dos consumidores.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A201Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = {
  args: { initialPageId: 's2' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's2')
    await userEvent.click(c.getByRole('button', { name: 'Show all' }))
    await expect(c.getByText('a laptop', { exact: true })).toBeVisible()
  },
}
export const WarmUpOne: Story = {
  args: { initialPageId: 's31' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's31')
    await userEvent.click(c.getByRole('button', { name: /I’m in the river/ }))
    await expect(c.getByText(/dentro da água/)).toBeVisible()
    await userEvent.click(
      c.getByRole('button', { name: /I’m next to the river/ }),
    )
    await expect(c.getByText('Now you', { exact: true })).toBeVisible()
  },
}
export const WarmUpHiddenOptions: Story = {
  args: { initialPageId: 's32' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's32')
    await userEvent.click(c.getByRole('button', { name: 'Show options' }))
    await expect(
      c.getByRole('button', { name: /I’m in a meeting/ }),
    ).toBeVisible()
  },
}
export const WarmUpHome: Story = { args: { initialPageId: 's33' } }
export const Actions: Story = { args: { initialPageId: 's4' } }
export const PronunciationOne: Story = { args: { initialPageId: 's51' } }
export const PronunciationTwo: Story = { args: { initialPageId: 's52' } }
export const DialogueOne: Story = { args: { initialPageId: 's6' } }
export const DialogueTwo: Story = { args: { initialPageId: 's62' } }
export const Comprehension: Story = { args: { initialPageId: 's61' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RightOrWrong: Story = { args: { initialPageId: 's10' } }
export const RolePlay: Story = {
  args: { initialPageId: 's11' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's11')
    await userEvent.click(c.getByRole('button', { name: 'Bad signal' }))
    await expect(c.getByRole('button', { name: 'Signal OK' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await userEvent.click(c.getByRole('button', { name: 'End call' }))
    await expect(c.getByRole('button', { name: 'Call again' })).toBeVisible()
  },
}
export const Homework: Story = { args: { initialPageId: 's12' } }
