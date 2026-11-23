import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  OutgoingCall as OptionalOutgoingCall,
  VoiceMessageChallenge,
} from './A102.sections'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { A102Lesson } from './A102Lesson'

const meta = {
  title: 'Materials/A1.02 Contact flow',
  component: A102Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's8', learnerName: '' },
} satisfies Meta<typeof A102Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CoherentDialogueTitle: Story = {
  args: { initialPageId: 's8' },
  tags: ['visual-review'],
}
export const SpellingRecognition: Story = { args: { initialPageId: 's7' } }
export const IncomingCall: Story = {
  args: { initialPageId: 's14' },
  tags: ['visual-review'],
}
export const ReceptionWorkstation: Story = {
  args: { initialPageId: 's13' },
  tags: ['visual-review'],
}
export const OutgoingCall: Story = {
  render: () => (
    <MaterialTheme>
      <SlidePage
        eyebrow="Optional reference"
        title="Your turn to ask"
        instruction="Ask your teacher for a name and number"
      >
        <OptionalOutgoingCall active />
      </SlidePage>
    </MaterialTheme>
  ),
  tags: ['visual-review'],
}
export const VoiceMessage: Story = {
  render: () => (
    <MaterialTheme>
      <SlidePage
        eyebrow="Optional reference"
        title="Leave a message"
        instruction="Introduce yourself and give a made-up number"
      >
        <VoiceMessageChallenge active />
      </SlidePage>
    </MaterialTheme>
  ),
  tags: ['visual-review'],
}

export const OutgoingTeacherFallback: Story = {
  render: () => (
    <MaterialTheme>
      <SlidePage
        eyebrow="Optional reference"
        title="Your turn to ask"
        instruction="Ask your teacher for a name and number"
      >
        <OptionalOutgoingCall active />
      </SlidePage>
    </MaterialTheme>
  ),
  tags: ['visual-review', 'layout-boundary'],
}

export const AlphabetWithPortugueseTips: Story = {
  args: { initialPageId: 's6' },
  tags: ['visual-review'],
}

export const MyAndYourGrammar: Story = {
  args: { initialPageId: 's10' },
  tags: ['visual-review'],
}

export const NarrowWorkstation: Story = {
  args: { initialPageId: 's13' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
