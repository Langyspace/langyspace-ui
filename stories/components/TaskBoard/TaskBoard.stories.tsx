import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { TaskBoard } from '../../../src/components/TaskBoard/TaskBoard'
import priya from '../../materials/Practice/assets/characters/priya-nair.webp'

const meta = {
  title: 'TaskBoard/TaskBoard',
  component: TaskBoard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    columns: [
      {
        id: 'todo',
        title: 'To do',
        cards: [
          {
            id: 'connect',
            title: 'Connect Login to the API',
            assignee: { name: 'You' },
          },
        ],
      },
      {
        id: 'waiting',
        title: 'Waiting',
        cards: [
          {
            id: 'api',
            title: 'Test API address',
            assignee: { name: 'Priya', imageUrl: priya },
          },
        ],
      },
      {
        id: 'done',
        title: 'Done',
        cards: [
          {
            id: 'layout',
            title: 'Login screen layout',
            assignee: { name: 'You' },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof TaskBoard>
export default meta
type Story = StoryObj<typeof meta>
export const ThreeColumns: Story = { tags: ['visual-review'] }
export const TwoColumns: Story = {
  args: {
    columns: [
      {
        id: 'ready',
        title: 'Ready',
        cards: [
          { id: 'login', title: 'Login screen', assignee: { name: 'You' } },
        ],
      },
      {
        id: 'blocked',
        title: 'Blocked',
        cards: [
          {
            id: 'account',
            title: 'Activate test account',
            assignee: { name: 'Priya', imageUrl: priya },
          },
        ],
      },
    ],
  },
  tags: ['visual-review'],
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
