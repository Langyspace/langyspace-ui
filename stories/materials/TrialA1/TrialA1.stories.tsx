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
          'Experimental A1 · What do you like? Oito páginas, 30 minutos de conversa com apoio progressivamente menor. Cena e objetos ilustrados; diálogo lido ao vivo, sem áudio artificial. Preferências pessoais sem gabarito. Notes e scroll contínuo.',
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
    await userEvent.click(c.getByRole('button', { name: 'music' }))
    await expect(c.getByRole('region', { name: 'music' })).toBeVisible()
  },
}
export const ListenAndTalk: Story = { args: { initialPageId: 's3' } }
export const MoviesOrMusic: Story = {
  args: { initialPageId: 's41' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's41'),
      a = c.getByRole('button', { name: 'movies' }),
      b = c.getByRole('button', { name: 'music' })
    await userEvent.click(a)
    await expect(a).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(b)
    await expect(a).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(b)
    await expect(b).toHaveAttribute('aria-pressed', 'false')
  },
}
export const DogsOrCats: Story = { args: { initialPageId: 's42' } }
export const PizzaOrSalad: Story = { args: { initialPageId: 's43' } }
export const Conversation: Story = {
  args: { initialPageId: 's5' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's5'),
      q = c.getByRole('button', { name: 'Do you like music?' })
    await userEvent.click(q)
    await expect(q).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(q)
    await expect(q).toHaveAttribute('aria-pressed', 'false')
  },
}
export const TodayYouSaid: Story = { args: { initialPageId: 's6' } }

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
      c.getByText('Diga seu primeiro nome.', { exact: true }),
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
