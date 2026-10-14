import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { PracticeResultPanel } from '.'

afterEach(cleanup)

it('preserves caller content and action order without interpreting scores or submitting the form', () => {
  const reset = vi.fn(),
    close = vi.fn(),
    submit = vi.fn()
  const actions = (
    <>
      <button type="button" onClick={reset}>
        Refazer
      </button>
      <button type="button" onClick={close}>
        Voltar para lista
      </button>
    </>
  )
  const { container, rerender } = render(
    <form onSubmit={submit}>
      <PracticeResultPanel
        title="Resultado"
        description={
          <>
            Você acertou <strong>0</strong> de 2 questões.
          </>
        }
        actions={actions}
      >
        <div data-testid="local-metrics">0 · 2 · 0%</div>
        <p role="status">Atualizando progresso...</p>
      </PracticeResultPanel>
    </form>,
  )
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'Resultado',
  )
  expect(container.querySelector('strong')?.textContent).toBe('0')
  expect(screen.getByTestId('local-metrics').textContent).toBe('0 · 2 · 0%')
  expect(screen.getByRole('status').textContent).toBe(
    'Atualizando progresso...',
  )
  expect(
    container.querySelector('svg')?.parentElement?.getAttribute('aria-hidden'),
  ).toBe('true')
  expect(
    screen.getAllByRole('button').map((button) => button.textContent),
  ).toEqual(['Refazer', 'Voltar para lista'])
  fireEvent.click(screen.getByRole('button', { name: 'Refazer' }))
  fireEvent.click(screen.getByRole('button', { name: 'Voltar para lista' }))
  expect(reset).toHaveBeenCalledOnce()
  expect(close).toHaveBeenCalledOnce()
  expect(submit).not.toHaveBeenCalled()
  rerender(
    <PracticeResultPanel
      title="Revisão encerrada"
      description="Resumo fornecido pelo produto"
      actions={actions}
    >
      <p role="alert">Não foi possível salvar.</p>
    </PracticeResultPanel>,
  )
  expect(screen.queryByRole('status')).toBeNull()
  expect(screen.getByRole('alert').textContent).toBe('Não foi possível salvar.')
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'Revisão encerrada',
  )
})
