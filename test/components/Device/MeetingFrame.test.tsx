import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { beforeEach, expect, it, vi } from 'vitest'
import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import { FreeConversationPage } from '../../../stories/materials/shared/FreeConversationPage'

const context = vi.hoisted(() => ({
  learner: undefined as { firstName: string; avatarUrl: string } | undefined,
}))
vi.mock('../../../stories/materials/shared/MaterialTeacherContext', () => ({
  useMaterialTeacher: () => ({
    name: 'Adriana Nogueira',
    avatarUrl: '/teacher.webp',
  }),
}))
vi.mock('../../../stories/materials/shared/MaterialLearnerContext', () => ({
  useMaterialLearner: () => context.learner,
}))
beforeEach(() => {
  context.learner = undefined
})

it('uses the meeting frame with two named participants and no simulated actions or device media', () => {
  render(<MeetingFrame main={{ name: 'Adriana' }} inset={{ name: 'You' }} />)
  expect(screen.getByRole('figure', { name: 'Video meeting' })).toBeVisible()
  expect(screen.getByText('Adriana')).toBeVisible()
  expect(screen.getByText('You')).toBeVisible()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(document.querySelector('video, audio')).toBeNull()
})

it('renders supplied participant photos and falls back safely after either photo fails', () => {
  const failed = vi.fn()
  const { container } = render(
    <MeetingFrame
      main={{ name: 'Adriana', imageUrl: '/main.webp' }}
      inset={{ name: 'Margarida', imageUrl: '/inset.webp' }}
      onParticipantImageError={failed}
    />,
  )
  fireEvent.error(screen.getByRole('img', { name: 'Adriana' }))
  expect(failed).toHaveBeenCalledWith('main', '/main.webp')
  expect(screen.queryByRole('img', { name: 'Adriana' })).not.toBeInTheDocument()
  fireEvent.error(container.querySelector('img[src="/inset.webp"]')!)
  expect(failed).toHaveBeenCalledWith('inset', '/inset.webp')
  expect(container.querySelectorAll('img')).toHaveLength(0)
  expect(screen.getByText('Margarida')).toBeVisible()
})

it('keeps free conversation open, binds first names and returns a failed learner photo to You', () => {
  context.learner = {
    firstName: 'Margarida',
    avatarUrl: 'https://example.com/learner.webp',
  }
  const { container } = render(<FreeConversationPage />)
  expect(
    screen.getByRole('heading', { name: 'Free conversation' }),
  ).toBeVisible()
  expect(screen.getByText(/Choose any topic/)).toBeVisible()
  expect(screen.getByText('Adriana')).toBeVisible()
  expect(screen.getByText('Margarida')).toBeVisible()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  fireEvent.error(
    container.querySelector('img[src="https://example.com/learner.webp"]')!,
  )
  expect(screen.getByText('You')).toBeVisible()
  expect(screen.queryByText('Margarida')).not.toBeInTheDocument()
})

it('server renders the static frame without browser media APIs', () => {
  const html = renderToString(
    <MeetingFrame main={{ name: 'Teacher' }} inset={{ name: 'You' }} />,
  )
  expect(html).toContain('lsui-sc-meeting-frame')
  expect(html).toContain('Teacher')
  expect(html).not.toContain('<button')
})
