import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LessonHint } from '../../../stories/materials/shared/LessonHint'

describe('optional lesson hints', () => {
  it('associates an explicit keyboard button with concealed support and preserves focus on expansion', async () => {
    const user = userEvent.setup()
    render(
      <LessonHint context="What’s your name?">
        <p>My name is …</p>
      </LessonHint>,
    )
    const button = screen.getByRole('button', {
      name: 'Hint: What’s your name?',
    })
    const panel = document.getElementById(button.getAttribute('aria-controls')!)
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).not.toBeVisible()
    await user.tab()
    await user.keyboard('{Enter}')
    expect(button).toHaveFocus()
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'Hide hint: What’s your name?' }),
    ).toBeVisible()
    await user.keyboard(' ')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).not.toBeVisible()
  })
  it('closes with Escape from revealed content and returns focus to its trigger', async () => {
    const user = userEvent.setup()
    render(
      <LessonHint context="Speaking support">
        <button>Read the example</button>
      </LessonHint>,
    )
    const trigger = screen.getByRole('button', {
      name: 'Hint: Speaking support',
    })
    await user.click(trigger)
    await user.tab()
    expect(
      screen.getByRole('button', { name: 'Read the example' }),
    ).toHaveFocus()
    await user.keyboard('{Escape}')
    expect(trigger).toHaveFocus()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
  it('keeps two hints independent and gives each a unique association', async () => {
    const user = userEvent.setup()
    render(
      <>
        <LessonHint context="Name">
          <p>My name is …</p>
        </LessonHint>
        <LessonHint context="Origin">
          <p>I’m from …</p>
        </LessonHint>
      </>,
    )
    const name = screen.getByRole('button', { name: 'Hint: Name' })
    const origin = screen.getByRole('button', { name: 'Hint: Origin' })
    expect(name.getAttribute('aria-controls')).not.toBe(
      origin.getAttribute('aria-controls'),
    )
    await user.click(name)
    expect(name).toHaveAttribute('aria-expanded', 'true')
    expect(origin).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('I’m from …')).not.toBeVisible()
  })
})
