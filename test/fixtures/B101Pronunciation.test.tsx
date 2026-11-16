import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { PronunciationSection } from '../../stories/materials/B101/B101.practice'
it('keeps the last eight pronunciation results stable after repeated listening attempts', async () => {
  let heard = ''
  const user = userEvent.setup(),
    warnings = vi.spyOn(console, 'error').mockImplementation(() => {})
  try {
    render(
      <PronunciationSection
        index={0}
        speech={{
          speak: (lines) => {
            heard = lines[0]?.text ?? ''
          },
          stop() {},
          paused: false,
          togglePause() {},
          error: '',
        }}
      />,
    )
    for (let i = 0; i < 12; i++) {
      await user.click(screen.getByRole('button', { name: 'Listen' }))
      await user.click(
        screen.getByRole('button', { name: new RegExp('^' + heard) }),
      )
    }
    expect(
      screen.getByRole('img', { name: 'Score: 8 / 8' }),
    ).toBeInTheDocument()
    expect(warnings).not.toHaveBeenCalled()
  } finally {
    warnings.mockRestore()
  }
})
