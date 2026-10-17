import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { PracticeResultPanel } from '.'
import { PracticeResultMark } from '../../atoms/PracticeResultMark'
import { PracticeResultTitle } from '../../atoms/PracticeResultTitle'
import { PracticeResultDescription } from '../../atoms/PracticeResultDescription'
import { PracticeResultActions } from '../PracticeResultActions'

afterEach(cleanup)

it('keeps the result readable in JSX and leaves metrics, status and actions to the caller', () => {
  const reset = vi.fn(),
    close = vi.fn(),
    submit = vi.fn()

  render(
    <form onSubmit={submit}>
      <PracticeResultPanel>
        <PracticeResultMark />
        <PracticeResultTitle>Resultado</PracticeResultTitle>
        <PracticeResultDescription>
          Você acertou <strong>0</strong> de 2 questões.
        </PracticeResultDescription>
        <div data-testid="metrics">0 · 2 · 0%</div>
        <PracticeResultDescription role="status">
          Atualizando progresso...
        </PracticeResultDescription>
        <PracticeResultActions>
          <button type="button" onClick={reset}>
            Refazer
          </button>
          <button type="button" onClick={close}>
            Voltar para lista
          </button>
        </PracticeResultActions>
      </PracticeResultPanel>
    </form>,
  )

  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'Resultado',
  )
  expect(screen.getByTestId('metrics').textContent).toBe('0 · 2 · 0%')
  expect(screen.getByRole('status').textContent).toBe(
    'Atualizando progresso...',
  )
  expect(screen.getAllByRole('button').map((e) => e.textContent)).toEqual([
    'Refazer',
    'Voltar para lista',
  ])

  fireEvent.click(screen.getByRole('button', { name: 'Refazer' }))
  fireEvent.click(screen.getByRole('button', { name: 'Voltar para lista' }))

  expect(reset).toHaveBeenCalledOnce()
  expect(close).toHaveBeenCalledOnce()
  expect(submit).not.toHaveBeenCalled()
})
