import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { HomeworkCopyAction } from '../../../stories/materials/shared/HomeworkCopyAction'

const message =
  '*Lição de casa — Apresentações*\n\n1) Estudar os países\nhttps://student.langy.space/licoes?tab=flashcards&deck=deck-a2-countries\n\n2) Ouvir e repetir\nhttps://student.langy.space/licoes?tab=shadowing&activity=course-practice-a1-01-shadowing\n\n3) Mandar um áudio se apresentando'
afterEach(() => vi.unstubAllGlobals())
const clipboard = (writeText: ReturnType<typeof vi.fn>) => {
  vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } })
}
it('copies only on request and keeps the action label stable after success', async () => {
  const write = vi.fn().mockResolvedValue(undefined)
  clipboard(write)
  render(<HomeworkCopyAction message={message} active />)
  const button = screen.getByRole('button', { name: 'Copy homework' })
  const status = screen.getByRole('status')
  expect(status).toHaveStyle({ position: 'absolute', pointerEvents: 'none' })
  expect(status.parentElement).toHaveStyle({ position: 'relative' })
  expect(status).toHaveAttribute('aria-live', 'polite')
  expect(status).toHaveAttribute('aria-atomic', 'true')
  expect(write).not.toHaveBeenCalled()
  fireEvent.click(button)
  await waitFor(() =>
    expect(screen.getByRole('status')).toHaveTextContent(
      'Dever de casa copiado',
    ),
  )
  expect(write).toHaveBeenCalledExactlyOnceWith(message)
  expect(screen.getByRole('button', { name: 'Copy homework' })).toBe(button)
  expect(button).toBeEnabled()
  expect(button).toHaveAttribute('title', 'Dever de casa copiado')
  expect(button.querySelector('svg')).toHaveAttribute('width', '18')
  expect(button.querySelector('svg')).toHaveAttribute('height', '18')
  expect(status).toHaveStyle({ position: 'absolute', pointerEvents: 'none' })
})
it('offers the exact selectable text when browser clipboard access is denied', async () => {
  clipboard(vi.fn().mockRejectedValue(new Error('Denied')))
  render(<HomeworkCopyAction message={message} active />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy homework' }))
  expect(
    await screen.findByRole('dialog', { name: 'Copiar lição de casa' }),
  ).toBeVisible()
  const text = screen.getByRole('textbox', {
    name: 'Texto do dever de casa para WhatsApp',
  }) as HTMLTextAreaElement
  expect(text).toHaveValue(message)
  expect(text).toHaveAttribute('readonly')
  await waitFor(() => expect(text).toHaveFocus())
  expect(text.selectionEnd - text.selectionStart).toBe(message.length)
  expect(screen.getByRole('status')).toBeEmptyDOMElement()
})
it.each(['success', 'denial'] as const)(
  'ignores a pending %s from a page that is no longer active',
  async (result) => {
    let finish!: () => void
    clipboard(
      vi.fn().mockImplementation(
        () =>
          new Promise<void>((yes, no) => {
            finish = () =>
              result === 'success' ? yes() : no(new Error('Delayed denial'))
          }),
      ),
    )
    const { rerender } = render(<HomeworkCopyAction message={message} active />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy homework' }))
    rerender(<HomeworkCopyAction message={message} active={false} />)
    await act(async () => finish())
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    rerender(<HomeworkCopyAction active />)
    expect(screen.getByRole('button', { name: 'Copy homework' })).toBeDisabled()
  },
)
