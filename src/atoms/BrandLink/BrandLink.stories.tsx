import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrandLink } from '.'

const meta = {
  title: 'Atoms/BrandLink',
  component: BrandLink,
  tags: ['visual-review'],
  args: { href: '/termos', children: 'Termos' },
} satisfies Meta<typeof BrandLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
