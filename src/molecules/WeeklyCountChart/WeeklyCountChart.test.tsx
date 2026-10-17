import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { WeeklyCountChart } from '.'

afterEach(cleanup)

it('exposes zero and populated counts', () => {
  render(<WeeklyCountChart items={[{ id: 'a', label: 'Segunda', value: 0 }]} />)

  expect(screen.getByRole('img', { name: 'Segunda: 0' })).toBeInTheDocument()
})
