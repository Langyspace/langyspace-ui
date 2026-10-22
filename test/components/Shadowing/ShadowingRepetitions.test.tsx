import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ShadowingRepetitions } from '../../../src/components/Shadowing/ShadowingRepetitions'

it('renders the supplied count without advancing the product state', () => {
  const { container } = render(
    <ShadowingRepetitions total={3} value={2} playing>
      2/3 escutas
    </ShadowingRepetitions>,
  )

  expect(container.querySelectorAll('[data-ui-shadowing-dot]')).toHaveLength(3)
  expect(container.querySelectorAll('[data-active]')).toHaveLength(2)
  expect(container.querySelectorAll('[data-live]')).toHaveLength(1)
  expect(screen.getByText('2/3 escutas')).toBeInTheDocument()
})
