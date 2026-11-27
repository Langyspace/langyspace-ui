import type { Meta, StoryObj } from '@storybook/react-vite'
import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import teacherScene from '../../materials/shared/assets/free-conversation-teacher63.webp'
import learnerScene from '../../materials/shared/assets/free-conversation-learner63.webp'
import { ana, kim } from '../../materials/shared/characterPortraits'
import { TextInput } from '../../../src/components/Form/TextInput'
import { FieldRoot } from '../../../src/components/Form/FieldRoot'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

const meta = {
  component: MeetingFrame,
  title: 'Device/MeetingFrame',
  args: { main: { name: 'Teacher' }, inset: { name: 'You' } },
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

export const GroupConversationCaptions: Story = {
  args: {
    layout: 'grid',
    participants: [
      { id: 'kim', name: 'Kim', imageUrl: kim },
      { id: 'ana', name: 'Ana', imageUrl: ana },
      { id: 'learner', name: 'You' },
    ],
    activeParticipantId: 'learner',
    caption: 'What should a customer be able to do in the first version?',
    learnerCaption: 'Explain what the Login screen needs to do',
    stageTone: 'sky',
  },
  tags: ['visual-review'],
}

export const GroupConversationCaptionsNarrow: Story = {
  ...GroupConversationCaptions,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}

export const SharedApplicationCaptions: Story = {
  args: {
    layout: 'grid',
    participants: [
      { id: 'kim', name: 'Kim', imageUrl: kim },
      { id: 'ana', name: 'Ana', imageUrl: ana },
      { id: 'owen', name: 'Owen' },
      { id: 'priya', name: 'Priya' },
      { id: 'ruby', name: 'Ruby' },
      { id: 'learner', name: 'You' },
    ],
    activeParticipantId: 'learner',
    sharedContentLabel: 'You are presenting · Customer portal',
    sharedContent: (
      <ThemeProvider theme={theme}>
        <Common.Stack>
          <Common.Heading>Sign in to your account</Common.Heading>
          <FieldRoot label="Email">
            <TextInput size="sm" value="test@portal.dev" readOnly />
          </FieldRoot>
          <FieldRoot label="Password">
            <TextInput
              size="sm"
              type="password"
              value="example-password"
              readOnly
            />
          </FieldRoot>
          <Button size="sm">Sign in</Button>
        </Common.Stack>
      </ThemeProvider>
    ),
    caption:
      'Show how a customer signs in and what happens when the password is wrong',
    learnerCaption: 'Present your screen to the team',
    stageTone: 'sky',
  },
  tags: ['layout-boundary', 'visual-review'],
}

export const SharedApplicationCaptionsNarrow: Story = {
  ...SharedApplicationCaptions,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
