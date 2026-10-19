import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrandLogo } from '../../../src/components/Brand/BrandLogo'

const meta = {
  title: 'Brand/BrandLogo',
  component: BrandLogo,
  tags: ['visual-review'],
  args: { width: 144 },
} satisfies Meta<typeof BrandLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
