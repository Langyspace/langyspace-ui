import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentNavigationLink } from './DocumentNavigationLink'

const meta = {
  title: 'Document/DocumentNavigationLink',
  component: DocumentNavigationLink,
  tags: ['visual-review'],
  args: { href: '/termos', children: 'Termos' },
} satisfies Meta<typeof DocumentNavigationLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
