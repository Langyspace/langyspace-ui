import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'

it('groups pattern and example without leaking a concealed answer or changing the legacy columns', () => {
  const onReveal = vi.fn()
  const rows = [
    {
      id: 'view',
      subject: 'A view',
      verb: 'seem + adjective',
      example: 'The second half seemed rushed',
    },
  ]
  const props = {
    title: 'Evidence and wording',
    rows,
    columns: {
      subject: 'Purpose',
      verb: 'Pattern',
      example: 'Pattern and example',
    },
    hiddenAnswers: true,
    revealedIds: [] as string[],
    onReveal,
  }
  const view = render(<GrammarTable {...props} layout="patterns" />)
  expect(screen.getAllByRole('columnheader')).toHaveLength(2)
  expect(
    screen.getByText('seem + adjective').closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'true')
  expect(
    screen.getByText('The second half seemed rushed').closest('[inert]'),
  ).not.toBeNull()
  fireEvent.click(
    screen.getByRole('button', { name: 'Mostrar resposta: view' }),
  )
  expect(onReveal).toHaveBeenCalledWith('view')
  view.rerender(
    <GrammarTable {...props} layout="patterns" revealedIds={['view']} />,
  )
  expect(screen.getByText('seem + adjective')).toBeVisible()
  expect(
    screen.getByText('The second half seemed rushed').closest('[inert]'),
  ).toBeNull()
  view.rerender(<GrammarTable {...props} hiddenAnswers={false} />)
  expect(screen.getAllByRole('columnheader')).toHaveLength(3)
  expect(view.container.firstChild).not.toHaveAttribute('layout')
})
