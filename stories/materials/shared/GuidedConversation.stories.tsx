import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { GuidedConversation } from './GuidedConversation'
import { CharacterDialogue } from './CharacterPortraits.styles'
import { MaterialTheme } from './MaterialTheme'
import { guidedConversation as a1 } from '../TrialA1/TrialA1.guided'
import { guidedConversation as b2 } from '../TrialB2/TrialB2.guided'

const meta = {
  title: 'Materials/Shared/Guided conversation',
  component: GuidedConversation,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  args: {
    ...a1,
    children: (
      <CharacterDialogue
        lines={[
          {
            id: 'kim',
            speaker: 'Kim',
            side: 'start',
            content: 'Do you like the park, Ana?',
          },
          {
            id: 'ana',
            speaker: 'Ana',
            side: 'end',
            content: 'Yes, I do! I love the park. And you?',
          },
        ]}
      />
    ),
  },
  tags: ['visual-review'],
} satisfies Meta<typeof GuidedConversation>
export default meta
type Story = StoryObj<typeof meta>

export const Model: Story = {}
export const Rehearsal: Story = { args: { defaultMode: 'rehearse' } }
export const Independent: Story = { args: { defaultMode: 'independent' } }
export const B2Rehearsal: Story = {
  args: { ...b2, defaultMode: 'rehearse' },
}
export const SupportAndTransfer: Story = {
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: '2. Ensaio' }))
    await userEvent.click(c.getByRole('button', { name: /Ver apoio:/ }))
    await expect(
      c.getByText('Yes, I do. / No, I don’t. And you?'),
    ).toBeVisible()
    await userEvent.click(c.getByRole('button', { name: 'Próximo turno' }))
    await expect(c.getByRole('button', { name: /Ver apoio:/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await userEvent.click(c.getByRole('button', { name: '3. Sem roteiro' }))
    await expect(c.getByText(a1.independentInstruction)).toBeVisible()
    await expect(c.queryByRole('button', { name: /Ver apoio:/ })).toBeNull()
  },
}
