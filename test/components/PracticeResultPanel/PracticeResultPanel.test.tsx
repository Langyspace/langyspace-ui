import { fireEvent, render, screen } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import { PracticeResultPanel } from '../../../src/components/PracticeResultPanel/PracticeResultPanel'

it('omits empty regions supplied by conditional React content', () => {
  const result = render(
    <PracticeResultPanel
      heading="Resultado"
      description={false}
      actions={false}
      icon={null}
    >
      <div>Métricas</div>
    </PracticeResultPanel>,
  )

  expect(result.container.firstElementChild?.children).toHaveLength(2)
  expect(screen.getByRole('heading')).toHaveTextContent('Resultado')
  expect(screen.getByText('Métricas')).toBeVisible()
})

it('composes the same result while preserving the native title attribute', () => {
  const metrics = <div data-testid="metrics">0 · 2 · 0%</div>
  const actions = <button type="button">Refazer</button>
  const description = (
    <>
      Você acertou <strong>0</strong> de 2 questões.
    </>
  )
  const current = render(
    <PracticeResultPanel
      title="Resumo da sessão"
      heading="Resultado"
      description={description}
      actions={actions}
    >
      {metrics}
    </PracticeResultPanel>,
  )

  expect(current.container.firstElementChild?.children).toHaveLength(5)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'Resultado',
  )
  expect(screen.getByTitle('Resumo da sessão')).toBe(
    current.container.firstElementChild,
  )
})

it('allows a caller supplied icon or an intentionally absent completion mark', () => {
  const result = render(
    <PracticeResultPanel
      heading="Resultado"
      icon={<span>Ícone do produto</span>}
    />,
  )
  expect(screen.getByText('Ícone do produto')).toBeVisible()
  expect(result.container.querySelector('svg')).toBeNull()

  result.rerender(<PracticeResultPanel heading="Resultado" icon={null} />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'Resultado',
  )
  expect(result.container.querySelector('svg')).toBeNull()
  expect(screen.queryByText('Ícone do produto')).toBeNull()
})

it('keeps the result readable in JSX and leaves metrics, status and actions to the caller', () => {
  const reset = vi.fn(),
    close = vi.fn(),
    submit = vi.fn()

  render(
    <form onSubmit={submit}>
      <PracticeResultPanel
        heading="Resultado"
        description={
          <>
            Você acertou <strong>0</strong> de 2 questões.
          </>
        }
        actions={
          <>
            <button type="button" onClick={reset}>
              Refazer
            </button>
            <button type="button" onClick={close}>
              Voltar para lista
            </button>
          </>
        }
      >
        <div data-testid="metrics">0 · 2 · 0%</div>
        <p role="status">Atualizando progresso...</p>
      </PracticeResultPanel>
    </form>,
  )

  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
    'Resultado',
  )
  expect(screen.getByTestId('metrics').textContent).toBe('0 · 2 · 0%')
  expect(screen.getByRole('status')).toHaveStyle({
    maxWidth: '22rem',
    margin: '0',
  })
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
