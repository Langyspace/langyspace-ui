import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { Button } from '../../../src/components/Button/Button'
import { lessonPages, longPage } from './Slide.fixtures'
import { NarrowStage, Stage } from './Slide.stories.styles'

const meta = {
  component: SlideDeck,
  title: 'Slide/SlideDeck',
  parameters: { layout: 'fullscreen' },
  args: { label: 'A1.01 · Introduce yourself', pages: lessonPages },
  decorators: [
    (Story) => (
      <Stage>
        <Story />
      </Stage>
    ),
  ],
} satisfies Meta<typeof SlideDeck>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    await canvasElement.ownerDocument.fonts.ready
    const canvas = within(canvasElement)
    const viewport = canvas.getByRole('region', {
      name: 'A1.01 · Introduce yourself',
    })
    viewport.focus()
    await userEvent.keyboard('{PageDown}')
    await waitFor(() =>
      expect(
        canvasElement.querySelector('[data-current="true"]'),
      ).toHaveAttribute('data-slide-id', 'warm-up'),
    )
    await userEvent.click(canvas.getByRole('button', { name: 'A I’m tired.' }))
    await userEvent.click(canvas.getByRole('button', { name: /Voltar/ }))
    await waitFor(() =>
      expect(
        canvasElement.querySelector('[data-current="true"]'),
      ).toHaveAttribute('data-slide-id', 'intro'),
    )
    await userEvent.keyboard('{PageDown}')
    await waitFor(() =>
      expect(
        canvasElement.querySelector('[data-current="true"]'),
      ).toHaveAttribute('data-slide-id', 'warm-up'),
    )
    await expect(
      canvas.getByRole('button', { name: 'A I’m tired.' }),
    ).toHaveAttribute('aria-pressed', 'true')
  },
}

export const WarmUp: Story = {
  args: { pageId: 'warm-up' },
  tags: ['visual-review'],
}

export const AnswerSoundControl: Story = {
  args: { pageId: 'warm-up', feedbackSounds: true },
  tags: ['visual-review', 'audio-review'],
}
export const LongContent: Story = {
  args: {
    pages: [lessonPages[0]!, longPage, lessonPages[2]!],
    pageId: 'long-content',
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const Narrow: Story = {
  decorators: [
    (Story) => (
      <NarrowStage>
        <Story />
      </NarrowStage>
    ),
  ],
  args: { pageId: 'warm-up' },
  tags: ['layout-boundary', 'visual-review'],
}
export const Empty: Story = { args: { pages: [] } }
export const SinglePage: Story = { args: { pages: [lessonPages[1]!] } }

/** Manual hardware regression: repeat same-direction trackpad passes without waiting for momentum. */
export const RepeatedPageGestures: Story = {
  args: {
    label: 'Consecutive page gestures',
    pages: Array.from({ length: 8 }, (_, index) => ({
      ...lessonPages[index % lessonPages.length]!,
      id: `gesture-page-${index + 1}`,
      label: `Gesture page ${index + 1}`,
    })),
  },
  tags: ['interaction-regression'],
}

function ControlledDeck() {
  const [pageId, setPageId] = useState('intro')
  return (
    <SlideDeck
      label="A1.01 · Introduce yourself"
      pages={lessonPages}
      pageId={pageId}
      onPageChange={setPageId}
      actions={
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setPageId('conversation')}
        >
          Let’s talk
        </Button>
      }
    />
  )
}
export const Controlled: Story = {
  render: () => <ControlledDeck />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const viewport = canvas.getByRole('region', {
      name: 'A1.01 · Introduce yourself',
    })
    viewport.focus()
    await userEvent.keyboard('{End}')
    await waitFor(() =>
      expect(canvas.getByRole('progressbar')).toHaveAttribute('value', '100'),
    )
    await userEvent.keyboard('{Home}')
    await waitFor(() =>
      expect(canvas.getByRole('progressbar')).toHaveAttribute('value', '0'),
    )
  },
}

function AppearanceDeck() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')
  return (
    <ThemeProvider theme={mode === 'dark' ? materialDarkTheme : theme}>
      <SlideDeck
        label="Lesson appearance"
        pages={lessonPages}
        feedbackSounds
        themeToggle={{
          mode,
          onToggle: () =>
            setMode((current) => (current === 'dark' ? 'light' : 'dark')),
        }}
      />
    </ThemeProvider>
  )
}
export const ThemeToggle: Story = {
  render: () => <AppearanceDeck />,
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const control = within(canvasElement).getByRole('button', {
      name: 'Tema claro',
    })
    await expect(control).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(control)
    await expect(control).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(control)
    await expect(control).toHaveAttribute('aria-pressed', 'false')
  },
}
