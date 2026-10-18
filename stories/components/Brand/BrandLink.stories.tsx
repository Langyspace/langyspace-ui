import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrandLink } from '../../../src/components/Brand/BrandLink'

const meta = {
  title: 'Brand/BrandLink',
  component: BrandLink,
  tags: ['visual-review'],
  args: { href: '/termos', children: 'Termos' },
} satisfies Meta<typeof BrandLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
