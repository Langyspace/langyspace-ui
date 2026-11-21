import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { expect, it, vi } from 'vitest'
import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import { FreeConversationPage } from '../../../stories/materials/shared/FreeConversationPage'

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

it('shows an illustrated teacher and learner enjoying a free conversation with generic role labels', () => {
  const { container } = render(<FreeConversationPage />)
  expect(
    screen.getByRole('heading', { name: 'Free conversation' }),
  ).toBeVisible()
  expect(screen.getByText(/Choose any topic/)).toBeVisible()
  expect(screen.getByText('Teacher')).toBeVisible()
  expect(screen.getByText('Student')).toBeVisible()
  expect(
    screen.getByRole('img', { name: /illustrated teacher smiling/i }),
  ).toHaveAttribute(
    'src',
    expect.stringContaining('free-conversation-teacher63.webp'),
  )
  expect(
    screen.getByRole('img', { name: /illustrated student smiling/i }),
  ).toHaveAttribute(
    'src',
    expect.stringContaining('free-conversation-learner63.webp'),
  )
  expect(container.querySelectorAll('img')).toHaveLength(2)
  expect(
    screen.getByRole('img', { name: /illustrated teacher smiling/i })
      .parentElement,
  ).toContainElement(
    screen.getByRole('img', { name: /illustrated student smiling/i }),
  )
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('keeps the two video-tile image fallbacks independent in the side-by-side layout', () => {
  const failed = vi.fn()
  render(
    <MeetingFrame
      layout="side-by-side"
      main={{ name: 'Teacher', imageUrl: '/teacher.webp' }}
      inset={{ name: 'Student', imageUrl: '/student.webp' }}
      onParticipantImageError={failed}
    />,
  )
  fireEvent.error(screen.getByRole('img', { name: 'Teacher' }))
  expect(screen.queryByRole('img', { name: 'Teacher' })).not.toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Student' })).toBeVisible()
  fireEvent.error(screen.getByRole('img', { name: 'Student' }))
  expect(screen.queryByRole('img')).not.toBeInTheDocument()
  expect(failed).toHaveBeenNthCalledWith(1, 'main', '/teacher.webp')
  expect(failed).toHaveBeenNthCalledWith(2, 'inset', '/student.webp')
})

it('server renders the static frame without browser media APIs', () => {
  const html = renderToString(
    <MeetingFrame main={{ name: 'Teacher' }} inset={{ name: 'You' }} />,
  )
  expect(html).toContain('lsui-sc-meeting-frame')
  expect(html).toContain('Teacher')
  expect(html).not.toContain('<button')
})

it('server renders both illustrated participants in reading order without browser device APIs', () => {
  const html = renderToString(
    <MeetingFrame
      layout="side-by-side"
      main={{ name: 'Teacher', imageUrl: '/teacher.webp' }}
      inset={{ name: 'Student', imageUrl: '/student.webp' }}
    />,
  )
  expect(html.match(/<img /g)).toHaveLength(2)
  expect(html.indexOf('/teacher.webp')).toBeLessThan(
    html.indexOf('/student.webp'),
  )
  expect(html).not.toContain('<button')
})

it('renders a full scene in the small video inset and keeps its failure separate from the main participant', () => {
  const failed = vi.fn()
  render(
    <MeetingFrame
      insetPresentation="video"
      main={{ name: 'Teacher', imageUrl: '/teacher.webp' }}
      inset={{ name: 'Student', imageUrl: '/student.webp' }}
      onParticipantImageError={failed}
    />,
  )
  const main = screen.getByRole('img', { name: 'Teacher' })
  const inset = screen.getByRole('img', { name: 'Student' })
  expect(main.parentElement).toContainElement(inset)
  fireEvent.error(inset)
  expect(failed).toHaveBeenCalledExactlyOnceWith('inset', '/student.webp')
  expect(main).toBeVisible()
  expect(screen.queryByRole('img', { name: 'Student' })).not.toBeInTheDocument()
  expect(screen.getByText('Student')).toBeVisible()
})
