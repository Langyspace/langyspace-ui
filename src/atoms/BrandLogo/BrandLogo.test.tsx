import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { BrandLogo } from '.'

afterEach(cleanup)

it('selects real brand identity while preserving the native image contract', () => {
  const loaded = vi.fn()
  const { rerender } = render(
    <BrandLogo alt="Identidade da escola" width={144} onLoad={loaded} />,
  )
  const logo = screen.getByRole('img', { name: 'Identidade da escola' })
  const original = logo.getAttribute('src')

  expect(logo.getAttribute('width')).toBe('144')

  fireEvent.load(logo)

  expect(loaded).toHaveBeenCalledOnce()

  rerender(<BrandLogo appearance="inverse" orientation="stacked" />)

  expect(
    screen.getByRole('img', { name: 'Langy.space' }).getAttribute('src'),
  ).not.toBe(original)
})
