import { createRef } from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { FileInput } from '.'
afterEach(cleanup)
it('preserves native file selection and ref without uploading or storing a file', () => {
  const change = vi.fn(),
    ref = createRef<HTMLInputElement>()
  render(
    <FileInput
      ref={ref}
      aria-label="Anexo"
      accept=".pdf,.xml"
      onChange={change}
    />,
  )
  const input = screen.getByLabelText('Anexo')
  expect(ref.current).toBe(input)
  expect(input.getAttribute('type')).toBe('file')
  expect(input.getAttribute('accept')).toBe('.pdf,.xml')
  fireEvent.change(input, {
    target: {
      files: [
        new File(['fixture'], 'fixture.pdf', { type: 'application/pdf' }),
      ],
    },
  })
  expect(change).toHaveBeenCalledOnce()
})
