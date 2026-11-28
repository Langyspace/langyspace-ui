import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import shop from '../../../stories/materials/Course/lessons/a1-11.json'

it('supports an oral shopping choice with optional help that resets for a new item', () => {
  render(
    <CourseActivity
      activity={{ ...shop.activities.s_personal, type: 'scene-choice' }}
      image="/shop.png"
    />,
  )
  expect(screen.getByRole('img')).toHaveAttribute('src', '/shop.png')
  expect(screen.getAllByRole('button')).toHaveLength(7)
  expect(screen.queryByRole('textbox')).toBeNull()
  expect(screen.queryByRole('region')).toBeNull()
  const blue = screen.getByRole('button', { name: 'Blue T-shirt' })
  fireEvent.click(blue)
  const card = screen.getByRole('region', { name: 'Blue T-shirt' })
  expect(blue).toHaveAttribute('aria-expanded', 'true')
  expect(within(card).getByText('L · $12')).toBeVisible()
  fireEvent.click(within(card).getByRole('button', { name: 'Show a hint' }))
  expect(within(card).getByText(/I’d like this …/)).toBeVisible()
  fireEvent.click(within(card).getByRole('button', { name: 'Show an example' }))
  expect(
    within(card).getByText(
      'I’d like this blue T-shirt, please. Do you have it in large? How much is it?',
    ),
  ).toBeVisible()
  expect(within(card).queryByText(/I’d like this …/)).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: 'Green T-shirt' }))
  const green = screen.getByRole('region', { name: 'Green T-shirt' })
  expect(within(green).getByText('M · $12')).toBeVisible()
  expect(
    within(green).getByRole('button', { name: 'Show a hint' }),
  ).toBeVisible()
  expect(screen.queryByText(/I’d like this blue T-shirt, please/)).toBeNull()
  fireEvent.click(
    within(green).getByRole('button', { name: 'Close: Green T-shirt' }),
  )
  expect(screen.queryByRole('region')).toBeNull()
})
