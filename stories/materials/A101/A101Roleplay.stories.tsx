import type { Meta, StoryObj } from '@storybook/react-vite'
import { CountryFeelingRoleplay } from './CountryFeelingRoleplay'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'

const meta = {
  title: 'Materials/A1.01/Visual roleplay',
  component: CountryFeelingRoleplay,
  decorators: [
    (Story, context) => (
      <MaterialTheme>
        <SlidePage
          title={context.args.challenge ? 'Introduce your friend' : 'Guess who'}
          eyebrow="Roleplay"
          instruction={
            context.args.challenge
              ? 'Look at the photo. Tell Teacher your friend’s name, where they’re from and how they feel'
              : 'Choose a person secretly. Teacher asks questions and guesses who you are. Then swap roles'
          }
          columns={context.args.challenge ? 1 : 2}
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
export const IntroduceFriends: Story = {
  args: { challenge: true, personId: 'ana' },
}

export const FriendFromKorea: Story = {
  args: { challenge: true, personId: 'jiwoo' },
}
export const RandomFriend: Story = { args: { challenge: true } }
