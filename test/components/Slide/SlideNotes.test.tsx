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
it('persists a draft per lesson in the composition and clears the saved value', () => {
  window.localStorage.clear()
  const { rerender } = render(
    <LessonNotes storageKey="langy-notes:a1" open onClose={() => {}} />,
  )
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'My A1 note' },
  })
  rerender(<LessonNotes storageKey="langy-notes:b2" open onClose={() => {}} />)
  expect(screen.getByRole('textbox')).toHaveValue('')
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'My B2 note' },
  })
  rerender(<LessonNotes storageKey="langy-notes:a1" open onClose={() => {}} />)
  expect(screen.getByRole('textbox')).toHaveValue('My A1 note')
  fireEvent.click(screen.getByRole('button', { name: 'Clear' }))
  expect(window.localStorage.getItem('langy-notes:a1')).toBe('')
  expect(window.localStorage.getItem('langy-notes:b2')).toBe('My B2 note')
  window.localStorage.clear()
})
it('keeps editing available when browser storage is unavailable', () => {
  const spy = vi
      .spyOn(Object.getPrototypeOf(window.localStorage) as Storage, 'getItem')
      .mockImplementation(() => {
        throw Error('blocked')
      }),
    write = vi
      .spyOn(Object.getPrototypeOf(window.localStorage) as Storage, 'setItem')
      .mockImplementation(() => {
        throw Error('blocked')
      })
  try {
    render(<LessonNotes storageKey="blocked" open onClose={() => {}} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Still editable' },
    })
    expect(screen.getByRole('textbox')).toHaveValue('Still editable')
  } finally {
    spy.mockRestore()
    write.mockRestore()
  }
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
