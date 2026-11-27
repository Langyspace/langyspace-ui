import { render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { FriendPhotoChallenge } from '../../../stories/materials/A101/FriendPhotoChallenge'
import { CountryFeelingRoleplay } from '../../../stories/materials/A101/CountryFeelingRoleplay'
afterEach(() => vi.restoreAllMocks())
it('draws on entry, keeps the same friend through rerenders and draws again only after re-entry', () => {
  const random = vi.spyOn(Math, 'random').mockReturnValue(0)
  const view = render(<FriendPhotoChallenge active={false} />)
  expect(random).not.toHaveBeenCalled()
  view.rerender(<FriendPhotoChallenge active />)
  expect(screen.getByText('Ana')).toBeVisible()
  expect(screen.getByRole('img', { name: 'Brazil' })).toBeVisible()
  expect(random).toHaveBeenCalledTimes(1)
  random.mockReturnValue(0.99)
  view.rerender(<FriendPhotoChallenge active />)
  expect(screen.getByText('Ana')).toBeVisible()
  expect(random).toHaveBeenCalledTimes(1)
  view.rerender(<FriendPhotoChallenge active={false} />)
  view.rerender(<FriendPhotoChallenge active />)
  expect(screen.getByText('Jake')).toBeVisible()
  expect(random).toHaveBeenCalledTimes(2)
  expect(
    view.container.querySelectorAll('[data-friend-photo] img'),
  ).toHaveLength(2)
})
it('keeps all six reference cards in Guess who and supports a stable photo fixture separately', () => {
  const view = render(<CountryFeelingRoleplay />)
  expect(screen.getAllByRole('figure')).toHaveLength(6)
  view.rerender(<CountryFeelingRoleplay challenge personId="jiwoo" />)
  expect(screen.getByText('Jiwoo')).toBeVisible()
  expect(screen.getByRole('img', { name: 'South Korea' })).toBeVisible()
  expect(screen.queryByText('Ana')).toBeNull()
})
