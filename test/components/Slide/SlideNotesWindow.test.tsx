import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ThemeProvider } from 'styled-components'
import { expect, it, vi } from 'vitest'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'

it('edits controlled text and emits explicit save/reload/close actions', () => {
  const onSave = vi.fn(),
    onReload = vi.fn(),
    onClose = vi.fn(),
    onChoose = vi.fn()
  function Example() {
    const [value, setValue] = useState('Rascunho inicial')
    return (
      <SlideNotesWindow
        value={value}
        onChange={setValue}
        onSave={onSave}
        onReload={onReload}
        onClose={onClose}
        canSave
        statusLabel="Rascunho"
        choices={[{ id: 'choice-a', label: 'Aula A · 17:00' }]}
        onChoose={onChoose}
      />
    )
  }
  render(<Example />)
  const editor = screen.getByRole('textbox', { name: 'Anotação da aula' })
  expect(editor).toHaveFocus()
  fireEvent.change(editor, { target: { value: 'Revisar perguntas' } })
  expect(editor).toHaveValue('Revisar perguntas')
  fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))
  expect(onSave).toHaveBeenCalledOnce()
  fireEvent.click(screen.getByRole('button', { name: 'Aula A · 17:00' }))
  expect(onChoose).toHaveBeenCalledWith('choice-a')
  fireEvent.click(screen.getByRole('button', { name: 'Limpar' }))
  expect(editor).toHaveValue('')
  expect(editor).toHaveFocus()
  fireEvent.click(
    screen.getByRole('button', { name: 'Descartar rascunho e recarregar' }),
  )
  fireEvent.click(screen.getByRole('button', { name: 'Fechar' }))
  expect(onReload).toHaveBeenCalledOnce()
  expect(onClose).toHaveBeenCalledOnce()
})

it('keeps read-only and saving states honest while exposing error text to the editor', () => {
  const props = {
    value: 'Rascunho preservado',
    onChange: vi.fn(),
    onClose: vi.fn(),
    onSave: vi.fn(),
    onReload: vi.fn(),
    canSave: true,
  }
  const { rerender } = render(
    <SlideNotesWindow {...props} readOnly statusLabel="Carregando" />,
  )
  expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  expect(screen.getByRole('button', { name: 'Limpar' })).toBeDisabled()
  expect(screen.getByRole('button', { name: 'Salvar' })).toBeDisabled()
  rerender(<SlideNotesWindow {...props} saving statusLabel="Salvando…" />)
  expect(screen.getByRole('button', { name: 'Salvando…' })).toBeDisabled()
  expect(
    screen.getByRole('button', { name: 'Descartar rascunho e recarregar' }),
  ).toBeDisabled()
  rerender(
    <SlideNotesWindow
      {...props}
      error="Não foi possível salvar. Tente novamente."
    />,
  )
  expect(screen.getByRole('alert')).toHaveTextContent(
    'Não foi possível salvar.',
  )
  expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
    'Não foi possível salvar. Tente novamente.',
  )
  expect(screen.getByRole('textbox')).toHaveValue('Rascunho preservado')
})

it('server-renders a controlled window with the shared dark theme and no browser dependency', () => {
  const html = renderToString(
    <ThemeProvider theme={materialDarkTheme}>
      <SlideNotesWindow
        value="Rascunho SSR"
        onChange={() => {}}
        onClose={() => {}}
        contextLabel="Aula de demonstração"
        statusLabel="Somente leitura"
        readOnly
      />
    </ThemeProvider>,
  )
  expect(html).toContain('lsui-sc-slide-notes-window')
  expect(html).toContain('Rascunho SSR')
  expect(html).toContain('Somente leitura')
  expect(html).toMatch(/readonly=/i)
})

it('uses the contextual placeholder and leaves out an empty status row', () => {
  const props = {
    value: '',
    onChange: vi.fn(),
    onClose: vi.fn(),
    contextLabel: 'Rascunho',
    statusLabel: '',
  }
  const { rerender } = render(
    <SlideNotesWindow
      {...props}
      placeholder="Anote ideias, dúvidas ou lembretes…"
    />,
  )
  expect(
    screen.getByPlaceholderText('Anote ideias, dúvidas ou lembretes…'),
  ).toBe(screen.getByRole('textbox'))
  expect(screen.queryByRole('status')).toBeNull()
  rerender(
    <SlideNotesWindow
      {...props}
      placeholder="Anote o desempenho da aluna e os próximos passos…"
    />,
  )
  expect(screen.getByRole('textbox')).toHaveAttribute(
    'placeholder',
    'Anote o desempenho da aluna e os próximos passos…',
  )
})
