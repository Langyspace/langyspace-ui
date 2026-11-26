import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { FriendPhotoChallenge } from '../../materials/A101/FriendPhotoChallenge'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'

const meta = {
  component: MobileFrame,
  title: 'Device/MobileFrame',
  args: {
    title: 'Practice',
    'aria-label': 'Practice preview',
    children: (
      <Common.Surface>
        <strong>Speaking</strong>
        <Common.Paragraph>
          Introduce two people in a short voice message
        </Common.Paragraph>
      </Common.Surface>
    ),
  },
} satisfies Meta<typeof MobileFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { tags: ['visual-review'] }
export const LongContent: Story = {
  args: {
    children: [1, 2, 3].map((id) => (
      <Common.Surface key={id}>
        <strong>A short work update</strong>
        <Common.Paragraph>
          Describe what you have finished, what you are working on and what you
          plan to do next
        </Common.Paragraph>
      </Common.Surface>
    )),
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review'],
}
export const Dark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          slides: {
            canvas: '#0B0B0C',
            surface: '#1A1A1C',
            foreground: '#F7F7F7',
            muted: '#A9A4A6',
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['visual-review'],
}

export const Application: Story = {
  args: {
    screenMode: 'application',
    title: 'Student exercise',
    children: (
      <Common.Stack>
        <h3>Listen and repeat</h3>
        <p>I usually wake up around seven</p>
      </Common.Stack>
    ),
  },
  tags: ['visual-review'],
}

/** Native photo/name/flag sit inside the one generated physical frame. */
export const HandheldPhoto: Story = {
  render: () => <FriendPhotoChallenge active personId="ana" />,
  tags: ['visual-review'],
}
