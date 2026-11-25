import type { Meta, StoryObj } from '@storybook/react-vite'
import fluentLicense from './assets/FLUENT-EMOJI-LICENSE.txt?raw'
import flagsLicense from './assets/FLAG-ICONS-LICENSE.txt?raw'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { WarmUpSection } from './A101.sections'
import { warmUps } from './A101.data'
import { A101Lesson } from './A101Lesson'
const meta = {
  title: 'Materials/A1.01',
  component: A101Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A1.01: Greetings, seis sentimentos com prática visual, seis países com bandeiras e prática visual, conversa, gramática, escuta, vídeo e apresentação pessoal.\n\n' +
          fluentLicense +
          '\n\nBandeiras: flag-icons 7.5.0\n\n' +
          flagsLicense,
      },
    },
  },
  args: { initialPageId: 'cover', learnerName: '' },
} satisfies Meta<typeof A101Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Greetings: Story = {
  args: { initialPageId: 's_greetings' },
  tags: ['visual-review', 'audio-review'],
}
export const Countries: Story = { args: { initialPageId: 's1' } }
export const Feelings: Story = { args: { initialPageId: 's4' } }
export const FeelingsWarmup: Story = {
  args: { initialPageId: 's_visual1' },
  tags: ['visual-review'],
}
export const CountriesWarmup: Story = {
  args: { initialPageId: 's_country107_1' },
  tags: ['visual-review'],
}
export const GreetingsNarrow: Story = {
  ...Greetings,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
export const WarmUpWithAnswerSounds: Story = {
  render: () => (
    <MaterialSlideDeck
      label="Optional warm-up reference"
      pageId="warm-up"
      pages={[
        {
          id: 'warm-up',
          label: 'Optional warm-up',
          content: (
            <SlidePage
              columns={1}
              eyebrow="Optional reference"
              title={warmUps[0]!.t}
              instruction="Choose the correct answer"
            >
              <WarmUpSection item={warmUps[0]!} />
            </SlidePage>
          ),
        },
      ]}
    />
  ),
  tags: ['visual-review', 'audio-review'],
}
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's71' } }
export const MeetSomeone: Story = { args: { initialPageId: 's10' } }
export const Listening: Story = {
  args: { initialPageId: 's9', learnerName: 'Carla' },
}
export const Conversation: Story = { args: { initialPageId: 's15' } }
export const Homework: Story = { args: { initialPageId: 's13' } }
