import { lessonCanvas } from '../shared/storyViewport'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { TrialA1Lesson } from './TrialA1Lesson'
const meta = {
  title: 'Materials/A1 Trial',
  component: TrialA1Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Experimental A1 · What do you like? Dez páginas, 30 minutos de conversa com apoio progressivamente menor. Cena e objetos ilustrados; diálogo com gravações ElevenLabs e destaque da fala em reprodução. Preferências pessoais sem gabarito. Notes e scroll contínuo.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof TrialA1Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const GreetingTranslation: Story = {
  args: { initialPageId: 's1' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's1')
    await userEvent.click(c.getByRole('button', { name: 'What’s your name?' }))
    await expect(
      c.getByText('Qual é o seu nome?', { exact: true }),
    ).toBeVisible()
  },
}
export const PictureTalk: Story = {
  args: { initialPageId: 's2' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's2')
    await expect(
      c.getByText('What can you name in the park?', { exact: true }),
    ).toBeVisible()
    await expect(c.queryByText('After exploring', { exact: true })).toBeNull()
    await userEvent.click(c.getByRole('button', { name: 'music' }))
    await expect(c.getByRole('region', { name: 'music' })).toBeVisible()
  },
}
export const ListenAndTalk: Story = { args: { initialPageId: 's3' } }
export const LikesAndDislikes: Story = { args: { initialPageId: 's4' } }
export const Listening: Story = {
  args: { initialPageId: 's5' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's5')
    await expect(c.getByText('A message from Ana (1/2)')).toBeVisible()
    await userEvent.click(
      c.getByRole('button', { name: 'What sport does Ana like?' }),
    )
    await expect(c.getByText('Soccer', { exact: true })).toBeVisible()
  },
}
export const ListeningContinuation: Story = {
  args: { initialPageId: 's5-part-2' },
  tags: ['visual-review'],
}
export const FreeConversation: Story = {
  args: { initialPageId: 'free-conversation' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 'free-conversation')
    await expect(c.getByText('Free conversation')).toBeVisible()
    await expect(
      c.getByRole('figure', { name: 'Your conversation with your teacher' }),
    ).toBeVisible()
  },
}

export const SharedA1A2: Story = { args: { levelLabel: 'A1 · A2' } }

export const GreetingHint: Story = {
  args: { initialPageId: 's1' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's1')
    await userEvent.click(
      c.getByRole('button', { name: 'Show next tip (1/3)' }),
    )
    await expect(
      c.getByText('Diga seu primeiro nome', { exact: true }),
    ).toBeVisible()
  },
}
export const GreetingModel: Story = {
  args: { initialPageId: 's1' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's1')
    await userEvent.click(
      c.getByRole('button', { name: 'Show next model (1/3)' }),
    )
    await userEvent.click(
      c.getByRole('button', { name: 'Show next model (2/3)' }),
    )
    await expect(c.getByText('I’m from …', { exact: true })).toBeVisible()
  },
}
export const GreetingNarrow: Story = {
  args: { initialPageId: 's1' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}

export const PictureTalkNarrow: Story = {
  args: { initialPageId: 's2' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}

export const RehearseWithYourTeacher: Story = {
  args: { initialPageId: 's3-rehearse' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's3-rehearse')
    await userEvent.click(
      c.getByRole('button', { name: 'Show next tip (1/3)' }),
    )
    await expect(
      c.getByText('Diga se gosta de música e pergunte de volta', {
        exact: true,
      }),
    ).toBeVisible()
  },
}
export const StartANewConversation: Story = {
  args: { initialPageId: 's3-independent' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's3-independent')
    await expect(
      c.getByText('Ask about something your teacher likes', { exact: true }),
    ).toBeVisible()
    await userEvent.click(
      c.getByRole('button', { name: 'Show next tip (1/3)' }),
    )
    await expect(
      c.getByText('Escolha um assunto e use Do you like para perguntar', {
        exact: true,
      }),
    ).toBeVisible()
  },
}
export const OpenConversationNarrow: Story = {
  args: { initialPageId: 's3-independent' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
