import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthSuccessState } from '../../../src/components/Auth/AuthSuccessState'

const meta = {
  title: 'Auth/AuthSuccessState',
  component: AuthSuccessState,
  tags: ['visual-review'],
  args: {
    children: (
      <>
        <h2>Bem-vinda</h2>
        <p>Te levando pro seu portal...</p>
      </>
    ),
  },
} satisfies Meta<typeof AuthSuccessState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
