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
          title={
            context.args.challenge ? 'Introduce your friends' : 'Guess who'
          }
          eyebrow="Roleplay"
          instruction={
            context.args.challenge
              ? 'Introduce all six people as your friends. Say their names, where they’re from and how they feel'
              : 'Choose a person secretly. Teacher asks questions and guesses who you are. Then swap roles'
          }
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
