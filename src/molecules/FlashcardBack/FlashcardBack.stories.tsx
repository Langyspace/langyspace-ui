import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardBack } from '.'
import { FlashcardBackCanvas } from '../../../.storybook/flashcard-fixtures'
const meta = {
  title: 'Molecules/FlashcardBack',
  component: FlashcardBack,
  tags: ['visual-review'],
  args: {
    term: 'bird',
    translation: 'pássaro',
    phonetic: '/bɜːrd/',
    example: (
      <>
        A <b>bird</b> sings.
      </>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardBackCanvas>
        <Story />
      </FlashcardBackCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardBack>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
