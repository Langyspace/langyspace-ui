import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { expect, userEvent, within } from 'storybook/test'
import { SlideNotes } from '../../../src/components/Slide/SlideNotes'
import type { SlideNotesProps } from '../../../src/components/Slide/SlideNotes.types'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { Button } from '../../../src/components/Button/Button'
import { NotesStage } from './Slide.stories.styles'
function NotesExample(props: SlideNotesProps) {
  const [open, setOpen] = useState(props.open),
    [value, setValue] = useState(props.value)
  return (
    <NotesStage>
      <Button variant="secondary" onClick={() => setOpen(!open)}>
        Notes
      </Button>
      <SlideNotes
        {...props}
        open={open}
        value={value}
        onChange={setValue}
        onClose={() => setOpen(false)}
      />
    </NotesStage>
  )
}
const meta = {
  component: SlideNotes,
  title: 'Slide/SlideNotes',
  parameters: { layout: 'fullscreen' },
  args: { open: true, value: '', onChange: () => {}, onClose: () => {} },
  render: (args) => <NotesExample {...args} />,
} satisfies Meta<typeof SlideNotes>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Dark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={materialDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement),
      editor = canvas.getByRole('textbox', { name: 'Notes' })
    await expect(editor).toHaveFocus()
    await userEvent.type(editor, 'I’d been waiting for two hours.')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
    await expect(editor).toHaveValue('')
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Notes' }))
  },
}
export const LongDraft: Story = {
  args: { value: 'I’d been walking when my phone died.\n'.repeat(30) },
}
