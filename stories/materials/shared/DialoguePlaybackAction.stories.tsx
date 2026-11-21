import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialTheme } from './MaterialTheme'
import { DialogueTitle } from './DialogueTitle'
import { DialoguePlaybackAction } from './DialoguePlaybackAction'

const meta = {
  title: 'Materials/Dialogue title action',
  component: DialoguePlaybackAction,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <h2>
          <DialogueTitle title="Do you like the park?" action={<Story />} />
        </h2>
      </MaterialTheme>
    ),
  ],
  args: { context: 'Do you like the park?', status: 'idle', onClick: () => {} },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DialoguePlaybackAction>
export default meta
type Story = StoryObj<typeof meta>
/** Controlled presentation fixtures only; no simulated media success. */
export const Ready: Story = {}
export const Playing: Story = { args: { status: 'playing' } }
export const Paused: Story = { args: { status: 'paused' } }
export const LoadingCanCancel: Story = { args: { status: 'loading' } }
export const Retry: Story = { args: { status: 'error' } }
export const Inactive: Story = { args: { disabled: true } }
