import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ShadowingPanel } from '../../../src/components/Shadowing/ShadowingPanel'

it('preserves caller semantics, child order and the native ref without a theme', () => {
  const ref = createRef<HTMLDivElement>()

  render(
    <ShadowingPanel aria-label="Prática" ref={ref}>
      <header>Navegação</header>
      <main>Frase</main>
      <footer>Controles</footer>
    </ShadowingPanel>,
  )

  const panel = screen.getByLabelText('Prática')

  expect(ref.current).toBe(panel)
  expect([...panel.children].map((child) => child.tagName)).toEqual([
    'HEADER',
    'MAIN',
    'FOOTER',
  ])
})
