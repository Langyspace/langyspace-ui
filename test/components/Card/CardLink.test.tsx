import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { createRef } from 'react'
import { CardLink } from '../../../src/components/Card/CardLink'

it('preserves link destination and native anchor ref', () => {
  const ref = createRef<HTMLAnchorElement>()

  render(
    <CardLink href="/detail" ref={ref}>
      Detalhes
    </CardLink>,
  )

  expect(screen.getByRole('link', { name: 'Detalhes' })).toHaveAttribute(
    'href',
    '/detail',
  )
  expect(ref.current).toBe(screen.getByRole('link'))
})
