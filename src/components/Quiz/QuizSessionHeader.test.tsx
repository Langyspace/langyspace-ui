import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { QuizSessionHeader } from './QuizSessionHeader'

afterEach(cleanup)

it('delegates back without submitting a form or owning question navigation', () => {
  const onBack = vi.fn()
  const onSubmit = vi.fn()
  const props = {
    name: 'Rotina',
    counter: '1 de 3',
    progress: 0.25,
    backLabel: 'Voltar',
    onBack,
  }
  const { container, rerender } = render(
    <form onSubmit={onSubmit}>
      <QuizSessionHeader {...props} />
    </form>,
  )
  const button = screen.getByRole('button', { name: 'Voltar' })

  fireEvent.click(button)

  expect(button.getAttribute('type')).toBe('button')
  expect(onBack).toHaveBeenCalledTimes(1)
  expect(onSubmit).not.toHaveBeenCalled()
  expect(screen.getByText('1 de 3')).toBeTruthy()
  expect(
    container
      .querySelector('[data-ui-practice-progress-bar]')
      ?.getAttribute('aria-hidden'),
  ).toBe('true')
  expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe(
    'true',
  )

  rerender(<QuizSessionHeader {...props} counter="2/3" progress={1} />)

  expect(screen.getByText('2/3')).toBeTruthy()
  expect(screen.queryByText('1 de 3')).toBeNull()

  fireEvent.keyDown(screen.getByRole('button'), { key: '1' })

  expect(onBack).toHaveBeenCalledTimes(1)
})
