import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { renderToString } from 'react-dom/server'
import { PracticePair } from '../../../src/components/Practice/PracticePair'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'

const items = [
  { id: 'words', label: 'Flashcards', content: <p>banana</p> },
  { id: 'speech', label: 'Shadowing', content: <p>Do you like mangoes?</p> },
] as const

describe('PracticePair', () => {
  it('keeps both native frames and delegates narrow-screen selection', async () => {
    const change = vi.fn()
    const { container } = render(
      <PracticePair items={items} onActiveIdChange={change} />,
    )
    expect(
      container.querySelectorAll('[data-device-frame="mobile"]'),
    ).toHaveLength(2)
    // Container queries are exercised in the browser; this checks the shared selection state.
    const button = screen.getByText('Shadowing', { selector: 'button' })
    fireEvent.click(button)
    expect(change).toHaveBeenCalledWith('speech')
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('banana')).toBeInTheDocument()
  })
  it('renders without a browser and supports optional speaker identity without changing legacy text', () => {
    expect(renderToString(<PracticePair items={items} />)).toContain(
      'lsui-sc-practice-pair',
    )
    const { rerender } = render(
      <ShadowingActivePhrase>Original phrase</ShadowingActivePhrase>,
    )
    expect(screen.getByText('Original phrase')).toBeInTheDocument()
    rerender(
      <ShadowingActivePhrase
        speaker={{ name: 'Ruby', accentLabel: 'English · Australia' }}
      >
        New phrase
      </ShadowingActivePhrase>,
    )
    expect(screen.getByText('Ruby')).toBeInTheDocument()
    expect(screen.getByText('English · Australia')).toBeInTheDocument()
    expect(screen.getByText('New phrase')).toBeInTheDocument()
  })
})
