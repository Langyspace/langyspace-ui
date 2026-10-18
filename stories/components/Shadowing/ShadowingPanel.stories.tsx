import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingPanel } from '../../../src/components/Shadowing/ShadowingPanel'
import {
  BoundedShadowingExample,
  ShadowingCompletionExample,
} from '../../../.storybook/compact-practice-fixtures'

const meta = {
  title: 'Shadowing/ShadowingPanel',
  component: ShadowingPanel,
  tags: ['visual-review'],
  render: () => <BoundedShadowingExample />,
} satisfies Meta<typeof ShadowingPanel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongContent: Story = {
  render: () => <BoundedShadowingExample longContent />,
}

export const Completed: Story = {
  render: () => <ShadowingCompletionExample />,
}
