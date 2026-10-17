import { AuthFeature } from '../AuthFeature'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFeatureList } from '.'

const meta = {
  title: 'Molecules/AuthFeatureList',
  component: AuthFeatureList,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: <AuthFeature>Benefício da escola</AuthFeature> },
} satisfies Meta<typeof AuthFeatureList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
