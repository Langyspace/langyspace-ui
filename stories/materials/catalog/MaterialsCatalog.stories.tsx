import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialsCatalog } from './MaterialsCatalog'

const meta = {
  title: 'Materials/Overview',
  component: MaterialsCatalog,
  parameters: { layout: 'fullscreen' },
  args: { initialLevel: 'A1', initialQuery: '' },
} satisfies Meta<typeof MaterialsCatalog>
export default meta
type Story = StoryObj<typeof meta>

export const Materials: Story = { tags: ['visual-review'] }
export const Search: Story = { args: { initialQuery: 'People' } }
export const NoResults: Story = { args: { initialQuery: 'sem resultado' } }
export const Extra: Story = { args: { initialLevel: 'EXTRA' } }
export const Narrow: Story = { globals: { viewport: { value: 'mobile1' } } }
