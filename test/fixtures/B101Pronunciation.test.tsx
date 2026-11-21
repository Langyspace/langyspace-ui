import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { PronunciationSection } from '../../stories/materials/B101/B101.practice'
import content from '../../stories/materials/B101/B101.content.json'
it('keeps pronunciation selection and reveal stable across repeated listening attempts', async () => {
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
      const choice = screen.getByRole('button', { name: heard })
      expect(choice).toHaveAttribute('aria-pressed', 'false')
      await user.click(choice)
      expect(choice).toHaveAttribute('aria-pressed', 'true')
      const translation = content.pronunciation[0]!.c.find(
        ([word]) => word === heard,
      )![1]!
      expect(within(choice).getByText(translation)).toBeVisible()
    }
    expect(warnings).not.toHaveBeenCalled()
  } finally {
    warnings.mockRestore()
  }
})
