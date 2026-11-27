import { fireEvent, render, screen, within } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { expect, it } from 'vitest'
import { TaskBoard } from '../../../src/components/TaskBoard/TaskBoard'

it('groups work by status, exposes circular assignee identities and keeps the evidence read-only', () => {
  render(
    <TaskBoard
      columns={[
        {
          id: 'todo',
          title: 'To do',
          cards: [
            {
              id: 'connect',
              title: 'Connect Login to the API',
              assignee: { name: 'You' },
            },
          ],
        },
        {
          id: 'waiting',
          title: 'Waiting',
          cards: [
            {
              id: 'api',
              title: 'Test API address',
              assignee: { name: 'Priya', imageUrl: '/priya.webp' },
            },
          ],
        },
        {
          id: 'done',
          title: 'Done',
          cards: [{ id: 'layout', title: 'Login screen layout' }],
        },
      ]}
    />,
  )
  expect(
    within(screen.getByRole('list', { name: 'Waiting' })).getByText(
      'Test API address',
    ),
  ).toBeVisible()
  const priya = screen.getByLabelText('Priya')
  expect(priya.querySelector('img')).toHaveAttribute('src', '/priya.webp')
  fireEvent.error(priya.querySelector('img')!)
  expect(priya.querySelector('img')).toBeNull()
  expect(priya).toHaveTextContent('P')
  expect(screen.getByLabelText('You')).toHaveTextContent('Y')
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(document.querySelector('[draggable="true"]')).toBeNull()
})

it('server renders task evidence and names without browser or drag APIs', () => {
  const html = renderToString(
    <TaskBoard
      columns={[
        {
          id: 'ready',
          title: 'Ready',
          cards: [
            { id: 'login', title: 'Login screen', assignee: { name: 'You' } },
          ],
        },
      ]}
    />,
  )
  expect(html).toContain('lsui-sc-task-board')
  expect(html).toContain('Login screen')
  expect(html).toContain('aria-label="You"')
  expect(html).not.toContain('<button')
})
