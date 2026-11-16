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
          'B1.01 · What have you been doing? · 12 páginas pedagógicas em 17 telas. Composição dos componentes compartilhados a partir da exportação local de 16/11/2026. Cenas com ambientação geradas pelo image_gen; vocabulário e diálogo usam voz do navegador, áudio do Leo é demonstração sintetizada localmente. Adoção nos portais e disponibilização das tarefas dependem do produto consumidor. Notas e respostas ficam apenas na memória desta prévia.',
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
    await expect(c.getByText('the mall', { exact: true })).toBeVisible()
  },
}
export const WarmUpOne: Story = { args: { initialPageId: 's31' } }
export const WarmUpHiddenOptions: Story = {
  args: { initialPageId: 's32' },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: 'Show options' }))
    await expect(
      c.getByRole('button', { name: /He’s going to swim/ }),
    ).toBeVisible()
  },
}
export const WarmUpLeo: Story = { args: { initialPageId: 's33' } }
export const NowYou: Story = { args: { initialPageId: 's4' } }
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
    const c = within(canvasElement)
    await userEvent.click(
      c.getByRole('button', { name: 'Saturday: show clue' }),
    )
    await expect(
      c.getByRole('img', { name: 'Camiseta molhada ao chegar em casa' }),
    ).toBeVisible()
    await userEvent.click(
      c.getByRole('button', { name: 'Saturday: show answer' }),
    )
    await expect(
      c.getByRole('button', { name: 'Saturday: show answer' }),
    ).toHaveAttribute('aria-disabled', 'true')
  },
}
export const Homework: Story = { args: { initialPageId: 's12' } }
