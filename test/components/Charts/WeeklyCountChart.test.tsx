import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { WeeklyCountChart } from '../../../src/components/Charts/WeeklyCountChart'

it('exposes zero and populated counts', () => {
  render(<WeeklyCountChart items={[{ id: 'a', label: 'Segunda', value: 0 }]} />)

  expect(screen.getByRole('img', { name: 'Segunda: 0' })).toBeInTheDocument()
})
