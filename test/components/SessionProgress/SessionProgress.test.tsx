import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { SessionProgress } from '../../../src/components/SessionProgress/SessionProgress'

it('retains caller names and counters', () => {
  render(<SessionProgress name="Atividade" counter="1/3" value={0.3} />)

  expect(screen.getByText('Atividade')).toBeInTheDocument()
  expect(screen.getByText('1/3')).toBeInTheDocument()
})
