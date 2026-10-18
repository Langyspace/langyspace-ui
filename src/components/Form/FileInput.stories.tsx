import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileInput } from './FileInput'

const meta = {
  title: 'Form/FileInput',
  component: FileInput,
  tags: ['visual-review'],
  args: { 'aria-label': 'Anexo', accept: '.pdf,.xml' },
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = { args: { disabled: true } }
