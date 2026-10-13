import { fireEvent, render, screen } from '@testing-library/react'
import { CalendarControls } from '.'
it('fires only the requested navigation callback without submitting an owning form', () => {
  const previous = vi.fn(),
    next = vi.fn(),
    today = vi.fn(),
    submit = vi.fn((e) => e.preventDefault())
  render(
    <form onSubmit={submit}>
      <CalendarControls
        label="outubro2026"
        previousLabel="Mês anterior"
        nextLabel="Próximo mês"
        onPrevious={previous}
        onNext={next}
        onToday={today}
      >
        <span>Legenda do produto</span>
      </CalendarControls>
    </form>,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Mês anterior' }))
  expect(previous).toHaveBeenCalledOnce()
  expect(next).not.toHaveBeenCalled()
  fireEvent.click(screen.getByRole('button', { name: 'Próximo mês' }))
  expect(next).toHaveBeenCalledOnce()
  fireEvent.click(screen.getByRole('button', { name: 'Hoje' }))
  expect(today).toHaveBeenCalledOnce()
  expect(submit).not.toHaveBeenCalled()
  expect(
    screen.getByRole('group', { name: 'Navegação do calendário' }),
  ).toContainElement(screen.getByText('Legenda do produto'))
})
