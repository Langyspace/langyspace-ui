import type { Meta, StoryObj } from '@storybook/react-vite'
import { A106Lesson } from './A106Lesson'

const meta = {
  title: 'Materials/A1.06',
  component: A106Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'My home and my pet: 20 telas do protótipo atual do Claude Design, com animais, móveis, preposições, exploração da sala, pronúncia, diálogo, gramática, conversa com troca de papéis, escuta e Pet notes. Ilustrações e prompt-base em image-scenes.json. Avatares Ana e Kim têm a proveniência de A1.01. Áudio pela voz do navegador.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A106Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const HiddenOptions: Story = { args: { initialPageId: 's32' } }
export const FurnitureAndPositions: Story = { args: { initialPageId: 's4' } }
export const ExploreHome: Story = { args: { initialPageId: 's5' } }
export const Pronunciation: Story = { args: { initialPageId: 's61' } }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const Grammar: Story = { args: { initialPageId: 's81' } }
export const Possessives: Story = { args: { initialPageId: 's82' } }
export const YourVersion: Story = { args: { initialPageId: 's91' } }
export const Listening: Story = {
  args: { initialPageId: 's10', learnerName: 'Carla' },
}
export const RolePlay: Story = { args: { initialPageId: 's12' } }
export const Homework: Story = { args: { initialPageId: 's13' } }
