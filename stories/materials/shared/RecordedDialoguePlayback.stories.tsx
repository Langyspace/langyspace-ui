import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialTheme } from './MaterialTheme'
import { RecordedDialoguePlayback } from './RecordedDialoguePlayback'

const meta = {
  title: 'Materials/Recorded dialogue playback',
  component: RecordedDialoguePlayback,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  args: { conversationId: 'TrialA1:s3', active: true },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof RecordedDialoguePlayback>
export default meta

type Story = StoryObj<typeof meta>
/** Native real recordings drive loading/playing/pause/resume/end; no forced UI states. */
export const PriorityDialogue: Story = {}
export const Inactive: Story = { args: { active: false } }
export const LongerDialogue: Story = { args: { conversationId: 'A201:s6' } }
export const CurrentPartOnly: Story = { args: { conversationId: 'B201:s62' } }
