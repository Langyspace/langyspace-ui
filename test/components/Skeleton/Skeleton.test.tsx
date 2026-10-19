import { render } from '@testing-library/react'
import { it, expect } from 'vitest'
import { Skeleton } from '../../../src/components/Skeleton/Skeleton'

it('is decorative and preserves supplied geometry', () => {
  const { container } = render(
    <Skeleton shape="circle" style={{ width: 40, height: 40 }} />,
  )

  expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
  expect(container.firstChild).toHaveStyle({ width: '40px' })
})
