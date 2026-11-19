import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { expect, userEvent, within } from 'storybook/test'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import type { SlideNotesWindowProps } from '../../../src/components/Slide/SlideNotesWindow.types'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'

function ControlledNotes(props: SlideNotesWindowProps) {
  const [value, setValue] = useState(props.value)
  const [status, setStatus] = useState(props.statusLabel)
  return (
    <SlideNotesWindow
      {...props}
      value={value}
      onChange={setValue}
      statusLabel={status}
      onSave={() => setStatus('Salvo na aula selecionada')}
      onReload={() => setValue(props.value)}
    />
  )
}

const meta = {
  component: SlideNotesWindow,
  title: 'Slide/SlideNotesWindow',
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <ThemeProvider theme={materialDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    value: '',
    contextLabel: 'Aula de demonstração · 19/11, 17:00',
    statusLabel: 'Sem alterações',
    onChange: () => {},
    onClose: () => {},
    canSave: true,
  },
  render: (args) => <ControlledNotes {...args} />,
} satisfies Meta<typeof SlideNotesWindow>
export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const editor = canvas.getByRole('textbox', { name: 'Anotação da aula' })
    await expect(editor).toHaveFocus()
    await userEvent.type(editor, 'Praticar perguntas no próximo encontro.')
    await userEvent.click(canvas.getByRole('button', { name: 'Salvar' }))
    await expect(canvas.getByRole('status')).toHaveTextContent(
      'Salvo na aula selecionada',
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Limpar' }))
    await expect(editor).toHaveValue('')
    await expect(editor).toHaveFocus()
  },
}
export const ReadOnly: Story = {
  args: {
    value: 'Carregando a anotação…',
    readOnly: true,
    statusLabel: 'Carregando',
  },
}
export const Saving: Story = {
  args: { value: 'Rascunho em envio.', saving: true, statusLabel: 'Salvando…' },
}
export const Error: Story = {
  args: {
    value: 'Rascunho preservado para nova tentativa.',
    error: 'Não foi possível salvar. Confira a conexão e tente novamente.',
  },
}
export const NarrowLongContext: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  args: {
    value:
      'Vocabulário e pronúncia: revisar a conversa na próxima aula.\n'.repeat(
        20,
      ),
    contextLabel:
      'Aula de demonstração com contexto extenso · quinta-feira, 19 de novembro, das 17:00 às 17:50 · America/Sao_Paulo',
    choices: Array.from({ length: 6 }, (_, index) => ({
      id: `example-${index}`,
      label: `Aula de demonstração ${index + 1} · contexto extenso para conferir quebra de texto`,
    })),
    onChoose: () => {},
  },
}
