import { createBrowserStorage } from '../../helpers/browserStorage'
import { beforeEach, afterEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { useState } from 'react'
import { expect, it, vi } from 'vitest'
import { SlideNotes } from '../../../src/components/Slide/SlideNotes'
import { LessonNotes } from '../../../stories/materials/shared/LessonNotes'
function NotesExample() {
  const [open, setOpen] = useState(false),
    [text, setText] = useState('')
  return (
    <>
      <button onClick={() => setOpen(true)}>Notes</button>
      <SlideNotes
        open={open}
        value={text}
        onChange={setText}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
let browserStorage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  browserStorage = createBrowserStorage()
  vi.stubGlobal('localStorage', browserStorage.storage)
})
afterEach(() => {
  vi.unstubAllGlobals()
  browserStorage.dispose()
})
it('focuses the controlled editor, clears it and returns focus on Escape', () => {
  render(<NotesExample />)
  const trigger = screen.getByRole('button', { name: 'Notes' })
  trigger.focus()
  fireEvent.click(trigger)
  const editor = screen.getByRole('textbox', { name: 'Notes' })
  expect(editor).toHaveFocus()
  fireEvent.change(editor, {
    target: { value: 'I’d been waiting.\nFor two hours.' },
  })
  expect(editor).toHaveValue('I’d been waiting.\nFor two hours.')
  fireEvent.click(screen.getByRole('button', { name: 'Clear' }))
  expect(editor).toHaveValue('')
  expect(editor).toHaveFocus()
  fireEvent.keyDown(editor, { key: 'Escape' })
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  expect(trigger).toHaveFocus()
})
it('keeps private legacy drafts outside the presentation and preserves their storage', () => {
  window.localStorage.setItem('langy-notes:a1', 'Private legacy note')
  const { container } = render(
    <LessonNotes storageKey="langy-notes:a1" open onClose={() => {}} />,
  )
  expect(container).toBeEmptyDOMElement()
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  expect(window.localStorage.getItem('langy-notes:a1')).toBe(
    'Private legacy note',
  )
})
it('reports a blocked popup without loading an inline editor or changing legacy storage', () => {
  window.localStorage.setItem('langy-notes:a1', 'Private legacy note')
  render(
    <LessonNotes
      storageKey="langy-notes:a1"
      open
      onClose={() => {}}
      error="Permita a janela de anotações e tente novamente."
    />,
  )
  expect(screen.getByRole('status')).toHaveTextContent('Permita a janela')
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  expect(window.localStorage.getItem('langy-notes:a1')).toBe(
    'Private legacy note',
  )
})
it('renders controlled notes on the server and omits the closed panel', () => {
  expect(
    renderToString(
      <SlideNotes
        open
        value="Class draft"
        onChange={() => {}}
        onClose={() => {}}
      />,
    ),
  ).toContain('lsui-sc-slide-notes')
  expect(
    renderToString(
      <SlideNotes
        open={false}
        value="Private draft"
        onChange={() => {}}
        onClose={() => {}}
      />,
    ),
  ).toBe('')
})
