import type { Meta, StoryObj } from '@storybook/react-vite'
import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import teacherScene from '../../materials/shared/assets/free-conversation-teacher63.webp'
import learnerScene from '../../materials/shared/assets/free-conversation-learner63.webp'
import { ana, kim } from '../../materials/shared/characterPortraits'

const meta = {
  component: MeetingFrame,
  title: 'Device/MeetingFrame',
  args: { main: { name: 'Your teacher' }, inset: { name: 'You' } },
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
} satisfies Meta<typeof MeetingFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Initials: Story = { tags: ['visual-review'] }
export const FictionalExample: Story = {
  args: {
    main: { name: 'Kim', imageUrl: kim },
    inset: { name: 'Ana', imageUrl: ana },
  },
  tags: ['visual-review'],
}
export const MissingPictures: Story = {
  args: {
    main: { name: 'Adriana', imageUrl: '/missing-main.webp' },
    inset: { name: 'You', imageUrl: '/missing-guest.webp' },
  },
  tags: ['visual-review'],
}
export const LongNames: Story = {
  args: {
    main: { name: 'A participant with a long name' },
    inset: { name: 'Another participant with a long name' },
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}

export const IllustratedConversation: Story = {
  args: {
    layout: 'side-by-side',
    main: { name: 'Teacher', imageUrl: teacherScene },
    inset: { name: 'Student', imageUrl: learnerScene },
  },
  tags: ['visual-review'],
}
export const IllustratedNarrow: Story = {
  ...IllustratedConversation,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}

export const IllustratedSpotlight: Story = {
  args: {
    layout: 'spotlight',
    insetPresentation: 'video',
    stageTone: 'sky',
    main: { name: 'Teacher', imageUrl: teacherScene },
    inset: { name: 'Student', imageUrl: learnerScene },
  },
  tags: ['visual-review'],
}
export const SpotlightNarrow: Story = {
  ...IllustratedSpotlight,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
