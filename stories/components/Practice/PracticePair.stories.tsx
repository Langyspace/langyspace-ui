import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticePair } from '../../../src/components/Practice/PracticePair'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'
import { Button } from '../../../src/components/Button/Button'

const meta = {
  title: 'Practice/PracticePair',
  component: PracticePair,
  args: {
    items: [
      {
        id: 'words',
        label: 'Flashcards',
        content: (
          <>
            <p>At the street market</p>
            <strong>banana</strong>
            <p>Uma banana</p>
            <Button>Next card</Button>
          </>
        ),
      },
      {
        id: 'speech',
        label: 'Shadowing',
        content: (
          <>
            <ShadowingActivePhrase
              density="compact"
              tone="material"
              speaker={{ name: 'Kim', accentLabel: 'English · US' }}
            >
              This market is great! Do you like mangoes?
            </ShadowingActivePhrase>
            <Button>Listen</Button>
          </>
        ),
      },
    ],
  },
} satisfies Meta<typeof PracticePair>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
export const SecondActivity: Story = { args: { activeId: 'speech' } }
