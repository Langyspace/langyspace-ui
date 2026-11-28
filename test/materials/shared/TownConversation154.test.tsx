import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import town from '../../../stories/materials/Course/lessons/a1-09.json'

it('keeps the illustrated reference and three learner questions together, revealing support in place', () => {
  render(
    <CourseActivity
      activity={{
        ...town.activities.s_personal,
        type: 'map',
        questionPurpose: 'conversation',
        map: {
          ...town.activities.s_personal.map,
          image: { ...town.activities.s_personal.map.image, src: '/town.png' },
        },
      }}
    />,
  )
  expect(screen.getByRole('img')).toHaveAttribute('src', '/town.png')
  expect(screen.getByText('Hi! Can I help you?')).toBeVisible()
  expect(screen.getByText('Ask if there’s a café near the hotel')).toBeVisible()
  expect(screen.getByText('Ask how to get there from the hotel')).toBeVisible()
  expect(screen.getByText('Ask me to repeat the direction')).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Show next tip (1/3)' }))
  expect(
    screen
      .getAllByText('Is there a café near the hotel?')
      .filter((node) => node.closest('[aria-hidden="false"]')),
  ).toHaveLength(1)
  expect(
    screen.getByText('Ask if there’s a café near the hotel'),
  ).not.toBeVisible()
  expect(screen.getByText('Ask how to get there from the hotel')).toBeVisible()
})
