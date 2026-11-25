import type { Meta, StoryObj } from '@storybook/react-vite'
import { CountryFeelingRoleplay } from './CountryFeelingRoleplay'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'

const meta = {
  title: 'Materials/A1.01/Visual roleplay',
  component: CountryFeelingRoleplay,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <SlidePage
          title="Who are you today?"
          eyebrow="Roleplay"
          instruction="Choose a person in your mind. Teacher asks and guesses. Then swap roles"
          columns={2}
        >
          <Story />
        </SlidePage>
      </MaterialTheme>
    ),
  ],
} satisfies Meta<typeof CountryFeelingRoleplay>
export default meta
type Story = StoryObj<typeof meta>
export const GuessThePerson: Story = {}
export const IntroduceFriends: Story = { args: { challenge: true } }
