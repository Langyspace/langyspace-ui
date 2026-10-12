import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PracticeProgressBar } from '.'

describe('PracticeProgressBar', () => {
  it.each([
    [-0.5, '0%'],
    [0, '0%'],
    [0.375, '37.5%'],
    [1, '100%'],
    [2, '100%'],
    [NaN, '0%'],
    [Infinity, '0%'],
    [-Infinity, '0%'],
  ])('keeps value %s within a finite visual range', (value, width) => {
    const ref = createRef<HTMLDivElement>()
    render(
      <PracticeProgressBar data-testid="progress" ref={ref} value={value} />,
    )
    expect(ref.current).toBe(screen.getByTestId('progress'))
    expect(ref.current?.firstElementChild).toHaveStyle({ width })
  })

  it('preserves the owner button name, keyboard action and text across value updates', async () => {
    const open = vi.fn()
    const card = (value: number) => (
      <button onClick={open}>
        Daily words · 3/4 cards · 75%
        <PracticeProgressBar value={value} />
      </button>
    )
    const view = render(card(0))
    const button = screen.getByRole('button', {
      name: 'Daily words · 3/4 cards · 75%',
    })
    expect(
      button.querySelector('[data-ui-practice-progress-bar]'),
    ).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    await userEvent.setup().tab()
    expect(button).toHaveFocus()
    await userEvent.setup().keyboard('{Enter}')
    expect(open).toHaveBeenCalledTimes(1)
    view.rerender(card(0.75))
    expect(
      screen.getByRole('button', { name: 'Daily words · 3/4 cards · 75%' }),
    ).toBe(button)
  })
})
