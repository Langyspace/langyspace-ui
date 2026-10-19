import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PracticeCardBody } from '../../../src/components/Practice/PracticeCardBody'

it('preserves the title and ordered metadata while keeping the reused bar decorative', () => {
  const props = {
    title: 'Prática',
    leadingMeta: 'LIÇÃO 01',
    trailingMeta: 'Não iniciada',
    value: 0,
  }
  const { container, rerender } = render(<PracticeCardBody {...props} />)

  expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Prática')
  expect(
    [
      ...container.querySelectorAll(
        '[data-ui-practice-card-body] > div > span',
      ),
    ].map((n) => n.textContent),
  ).toEqual(['LIÇÃO 01', 'Não iniciada'])
  expect(
    container
      .querySelector('[data-ui-practice-progress-bar]')
      ?.getAttribute('aria-hidden'),
  ).toBe('true')

  rerender(
    <PracticeCardBody
      {...props}
      completed
      trailingMeta="Refazer para reforçar"
      value={1}
    />,
  )

  expect(screen.getByText('Refazer para reforçar')).toBeTruthy()
  expect(screen.queryByRole('progressbar')).toBeNull()
})
