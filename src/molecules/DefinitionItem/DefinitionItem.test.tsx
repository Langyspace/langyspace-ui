import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { DefinitionItem } from '.'

afterEach(cleanup)

it('retains the complete value and title without clipping the DOM', () => {
  render(
    <DefinitionItem label="Nome" value="Valor completo" valueTitle="Detalhe" />,
  )

  expect(screen.getByText('Valor completo').title).toBe('Detalhe')
})
