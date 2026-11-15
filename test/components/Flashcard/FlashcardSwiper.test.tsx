import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardSwiper } from '../../../src/components/Flashcard/FlashcardSwiper'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardSwiper data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardSwiper>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})

it('exposes the exit vector to the throw animation', () => {
  render(
    <FlashcardSwiper
      data-testid="card"
      exit={{ rotate: '12deg', x: '120%', y: '-1rem' }}
    />,
  )

  const card = screen.getByTestId('card')

  expect(getComputedStyle(card).getPropertyValue('--tr')).toBe('12deg')
  expect(getComputedStyle(card).getPropertyValue('--tx')).toBe('120%')
  expect(getComputedStyle(card).getPropertyValue('--ty')).toBe('-1rem')
})

it('keeps blank exit values unset so the animation retains its CSS fallbacks', () => {
  render(
    <FlashcardSwiper
      data-testid="blank-vector"
      exit={{ rotate: '', x: '', y: '' }}
    />,
  )
  const card = screen.getByTestId('blank-vector')
  const rules = [...document.styleSheets]
    .flatMap((sheet) => [...sheet.cssRules])
    .filter(
      (rule) => rule instanceof CSSStyleRule && card.matches(rule.selectorText),
    )
  for (const variable of ['--tr', '--tx', '--ty']) {
    expect(rules.some((rule) => rule.cssText.includes(`${variable}:`))).toBe(
      false,
    )
  }
})
