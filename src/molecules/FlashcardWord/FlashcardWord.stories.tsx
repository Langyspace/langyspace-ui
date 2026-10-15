import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardWord } from '.'
import { FlashcardFaceCanvas } from '../../../.storybook/flashcard-fixtures'
const meta = {
  title: 'Molecules/FlashcardWord',
  component: FlashcardWord,
  tags: ['visual-review'],
  args: {
    children: 'bird',
    phonetic: '/bɜːrd/',
    example: (
      <>
        A <b>bird</b> sings.
      </>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardFaceCanvas>
        <Story />
      </FlashcardFaceCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardWord>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithoutPhonetic: Story = { args: { phonetic: undefined } }
export const LongWord: Story = { args: { children: 'misunderstanding' } }
