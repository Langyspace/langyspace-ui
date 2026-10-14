import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { KeyValueList } from '.'
afterEach(cleanup)
it('retains caller formatted values', () => {
  render(
    <KeyValueList
      items={[{ id: 'a', label: 'Origem', value: <a href="#detail">123</a> }]}
    />,
  )
  expect(screen.getByRole('link').textContent).toBe('123')
})
