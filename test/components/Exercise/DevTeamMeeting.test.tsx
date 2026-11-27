import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  DevGuidedCall,
  DevDailyConversation,
  DevOralReply,
  DevTeamMeeting,
} from '../../../stories/materials/DevFirstDay/DevGuidedCall'
const media = vi.hoisted(() => ({
  play: vi.fn(),
  stop: vi.fn(),
  togglePause: vi.fn(),
  playingId: undefined,
  paused: false,
  error: '',
}))
vi.mock('../../../stories/materials/shared/usePracticePlayback', () => ({
  usePracticePlayback: () => media,
}))
const finish = () => act(() => media.play.mock.calls.at(-1)![3]())
beforeEach(() => vi.clearAllMocks())
describe('team meeting authoring contract', () => {
  it('replaces a live reply instruction with its hint and complete model using one support button', () => {
    render(
      <DevOralReply
        opening="Can you open the project?"
        cue="Ask for help"
        hint="Could you…?"
        example="Could you activate the test account?"
      />,
    )
    expect(screen.getByText('Teacher', { exact: true })).toBeVisible()
    expect(
      screen.getByRole('group', { name: 'Conversation support' }).parentElement,
    ).toContainElement(screen.getByText('Ask for help'))
    expect(screen.queryByText('Your teacher', { exact: true })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    expect(screen.queryByText('Ask for help')).toBeNull()
    expect(screen.getByText('Can you open the project?')).toBeVisible()
    expect(screen.getByText('Could you…?')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(screen.queryByText('Could you…?')).toBeNull()
    expect(
      screen.getByText('Could you activate the test account?'),
    ).toBeVisible()
    expect(screen.getByText('Can you open the project?')).toBeVisible()
    fireEvent.click(
      screen.getByRole('button', { name: 'Hide speaking support' }),
    )
    expect(screen.getByText('Ask for help')).toBeVisible()
    expect(
      screen.queryByText('Could you activate the test account?'),
    ).toBeNull()
    expect(media.play).not.toHaveBeenCalled()
  })
  it('shows a complete daily-update answer on each second support click, then moves to the next response', () => {
    render(<DevDailyConversation />)
    expect(
      screen.getByRole('group', { name: 'Conversation support' }).parentElement,
    ).toContainElement(
      screen.getByText(
        'Agree on useful work you can do before connecting the API',
      ),
    )
    expect(
      screen.getByText(
        'Use the board to explain what is ready and what is still missing',
      ),
    ).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    expect(screen.getByText('The layout is… / I still need…')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(screen.queryByText('The layout is… / I still need…')).toBeNull()
    expect(
      screen.getByText(
        'The Login layout is ready, but I’m still waiting for the test API address',
      ),
    ).toBeVisible()
    expect(
      screen.getByText('Explain the blocker and ask for the help you need'),
    ).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(
      screen.getByText(
        'I’m waiting for the test API address — could you send it to me?',
      ),
    ).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(
      screen.getByText(
        'While I wait, I can test the layout and error message, and I’ll connect the API after lunch',
      ),
    ).toBeVisible()
    fireEvent.click(
      screen.getByRole('button', { name: 'Hide speaking support' }),
    )
    expect(
      screen.getByText(
        'Use the board to explain what is ready and what is still missing',
      ),
    ).toBeVisible()
    expect(
      screen.queryByText(
        'The Login layout is ready, but I’m still waiting for the test API address',
      ),
    ).toBeNull()
    expect(media.play).not.toHaveBeenCalled()
  })
  it('waits for completion before showing a silent learner turn and never advances automatically', () => {
    const { rerender } = render(<DevGuidedCall active />)
    expect(screen.queryByText('Confirm that you can hear Kim')).toBeNull()
    expect(
      screen.getByRole('button', { name: 'Show speaking hint' }),
    ).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Play current part' }))
    expect(media.play.mock.calls[0]![0]).toBe('CALL.1')
    expect(
      screen.getByText(
        'Hi, welcome to the team! I’m Kim. Can you hear me clearly?',
      ),
    ).toBeVisible()
    expect(screen.queryByText('Confirm that you can hear Kim')).toBeNull()
    finish()
    expect(screen.getByText('Confirm that you can hear Kim')).toBeVisible()
    expect(
      screen.getByRole('figure', { name: 'First team call' }),
    ).toContainElement(screen.getByText('Confirm that you can hear Kim'))
    expect(
      screen.getByText(
        'Hi, welcome to the team! I’m Kim. Can you hear me clearly?',
      ),
    ).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    expect(screen.getByText('Yes, I can hear you…')).toBeVisible()
    expect(screen.queryByText('Confirm that you can hear Kim')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(screen.getByText('Yes, I can hear you clearly')).toBeVisible()
    expect(screen.queryByText('Yes, I can hear you…')).toBeNull()
    expect(screen.queryByText('Confirm that you can hear Kim')).toBeNull()
    fireEvent.click(
      screen.getByRole('button', { name: 'Hide speaking support' }),
    )
    expect(screen.queryByText('Yes, I can hear you…')).toBeNull()
    expect(screen.queryByText('Yes, I can hear you clearly')).toBeNull()
    expect(screen.getByText('Confirm that you can hear Kim')).toBeVisible()

    expect(
      screen.getByRole('button', { name: 'Show speaking hint' }),
    ).toBeVisible()
    expect(media.play).toHaveBeenCalledOnce()
    fireEvent.click(screen.getByRole('button', { name: 'Next part' }))
    expect(media.play.mock.calls.at(-1)![0]).toBe('CALL.2')
    rerender(<DevGuidedCall active={false} />)
    rerender(<DevGuidedCall active />)
    expect(
      screen.queryByText('Introduce yourself and what you work with'),
    ).toBeNull()
    expect(screen.getByRole('button', { name: 'Previous part' })).toBeDisabled()
    expect(media.play).toHaveBeenCalledTimes(2)
  })
  it('keeps five teammates plus the learner visible during a planning disagreement', () => {
    const { container } = render(<DevTeamMeeting active mode="planning" />)
    expect(screen.queryByLabelText('Shared screen')).toBeNull()
    expect(container.querySelectorAll('[data-participant-id]')).toHaveLength(6)
    for (const name of ['Kim', 'Owen', 'Priya', 'Niamh', 'Ruby', 'You'])
      expect(screen.getByText(name)).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Next part' }))
    expect(media.play.mock.calls.at(-1)![0]).toBe('ACCOUNT.PLAN.2')
    expect(screen.getByText(/I’d add Google login first/)).toBeVisible()
    finish()
    expect(
      screen.getByText(
        'Discuss Owen’s suggestion and explain your choice for the first version',
      ),
    ).toBeVisible()
    expect(
      container.querySelector('[data-participant-id="learner"]'),
    ).toHaveAttribute('data-speaking', 'true')
    expect(
      screen.getByRole('figure', { name: 'Team planning' }),
    ).toContainElement(
      screen.getByText(
        'Discuss Owen’s suggestion and explain your choice for the first version',
      ),
    )
    expect(media.play).toHaveBeenCalledOnce()
  })
  it('shows concrete account screens before the learner presents a read-only login prototype', () => {
    render(<DevTeamMeeting active mode="review" />)
    expect(screen.getByText('Owen is presenting · Registration')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Play current part' }))
    finish()
    expect(
      screen.getByRole('button', { name: 'Show speaking hint' }),
    ).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Next part' }))
    expect(
      screen.getByText('Ruby is presenting · Password reset'),
    ).toBeVisible()
    finish()
    fireEvent.click(screen.getByRole('button', { name: 'Next part' }))
    expect(screen.getByText('Priya is presenting · Backend')).toBeVisible()
    finish()
    fireEvent.click(screen.getByRole('button', { name: 'Next part' }))
    finish()
    expect(screen.getByText('You are presenting · Login')).toBeVisible()
    expect(
      screen.getByText(
        'Present the Login screen: signing in, a wrong password and password recovery',
      ),
    ).toBeVisible()
    expect(screen.getByLabelText('Shared screen')).toContainElement(
      screen.getByText(
        'Present the Login screen: signing in, a wrong password and password recovery',
      ),
    )
    expect(
      screen.getByRole('group', { name: 'Presented application' }),
    ).toContainElement(screen.getByLabelText('Email'))
    expect(screen.getByLabelText('Email')).toHaveAttribute('readonly')
    expect(screen.getByLabelText('Password')).toHaveAttribute('readonly')
    fireEvent.click(screen.getByRole('button', { name: 'Show speaking hint' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show example answer' }))
    expect(screen.getByLabelText('Shared screen')).toContainElement(
      screen.getByText(
        'Customers sign in with an email and password, see an error if either is wrong, and use Forgot password to reset it',
      ),
    )
    expect(
      screen.queryByText('The customer enters… / If… / They can…'),
    ).toBeNull()
    fireEvent.click(screen.getByText('Wrong password', { exact: true }))
    expect(screen.getByText('Email or password is incorrect')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Forgot password?' }))
    fireEvent.click(screen.getByRole('button', { name: 'Send reset link' }))
    expect(screen.getByText('Check your inbox')).toBeVisible()
    expect(media.play.mock.calls.map((call) => call[0])).toEqual([
      'ACCOUNT.REVIEW.1',
      'ACCOUNT.REVIEW.2',
      'ACCOUNT.REVIEW.3',
      'ACCOUNT.REVIEW.4',
    ])
  })
})
