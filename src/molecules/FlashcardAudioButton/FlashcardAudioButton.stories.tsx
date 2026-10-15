import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardAudioButton } from '.'
import { FlashcardFrame } from '../FlashcardFrame'

const meta = {
  title: 'Molecules/FlashcardAudioButton',
  component: FlashcardAudioButton,
  tags: ['visual-review'],
  args: { label: 'Ouvir pronúncia' },
  decorators: [
    (Story) => (
      <FlashcardFrame>
        <div style={{ position: 'relative', height: '5rem' }}>
          <Story />
        </div>
      </FlashcardFrame>
    ),
  ],
} satisfies Meta<typeof FlashcardAudioButton>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Term: Story = { args: { placement: 'term' } }
export const Playing: Story = { args: { playing: true } }
export const Disabled: Story = { args: { disabled: true } }
