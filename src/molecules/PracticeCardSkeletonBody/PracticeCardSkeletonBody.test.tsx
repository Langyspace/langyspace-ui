import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PracticeCardSkeletonBody } from '.'

describe('PracticeCardSkeletonBody', () => {
  it('keeps loading announcements and keyboard actions in the owner while forwarding native ref', async () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <>
        <section aria-busy="true" aria-label="Carregando lições">
          <PracticeCardSkeletonBody ref={ref} data-testid="placeholder" />
        </section>
        <button>Voltar para lições</button>
      </>,
    )
    expect(ref.current).toBe(screen.getByTestId('placeholder'))
    expect(ref.current).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByRole('region', { name: 'Carregando lições' }),
    ).toHaveAttribute('aria-busy', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    await userEvent.setup().tab()
    expect(
      screen.getByRole('button', { name: 'Voltar para lições' }),
    ).toHaveFocus()
  })
})
