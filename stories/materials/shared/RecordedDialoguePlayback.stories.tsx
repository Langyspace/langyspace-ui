import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialTheme } from './MaterialTheme'
import { DialogueTitle } from './DialogueTitle'
import { conversationRecordings } from './conversationRecordings'
import { RecordedDialoguePlayback } from './RecordedDialoguePlayback'
const meta = {
  title: 'Materials/Recorded dialogue playback',
  component: RecordedDialoguePlayback,
  render: (args) => (
    <MaterialTheme>
      <h2>
        <DialogueTitle
          title={
            conversationRecordings[args.conversationId]?.title ?? 'Diálogo'
          }
          action={<RecordedDialoguePlayback {...args} />}
        />
      </h2>
    </MaterialTheme>
  ),
  args: { conversationId: 'TrialA1:s3', active: true },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof RecordedDialoguePlayback>
export default meta
type Story = StoryObj<typeof meta>
/** Real native recordings drive state; no forced media success. */
export const PriorityDialogue: Story = {}
export const Inactive: Story = { args: { active: false } }
export const LongerDialogue: Story = { args: { conversationId: 'A201:s6' } }
export const CurrentPartOnly: Story = { args: { conversationId: 'B201:s62' } }
