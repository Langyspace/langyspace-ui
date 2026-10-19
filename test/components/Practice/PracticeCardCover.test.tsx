import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeCardCover } from '../../../src/components/Practice/PracticeCardCover'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeCardCover data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeCardCover>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})

it('owns its value and label while preserving free cover content and a zero value', () => {
  const { container } = render(
    <PracticeCardCover value={0} label="Para revisar">
      <span>Capa</span>
    </PracticeCardCover>,
  )
  expect(screen.getByText('Capa')).toBeInTheDocument()
  expect(
    container.querySelector('[data-ui-practice-cover-value]'),
  ).toHaveTextContent('0')
  expect(
    container.querySelector('[data-ui-practice-cover-label]'),
  ).toHaveTextContent('Para revisar')
})
