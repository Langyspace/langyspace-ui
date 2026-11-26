import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import { LessonOpening } from '../../../stories/materials/shared/LessonBookends'
import gifts from '../../../stories/materials/Course/lessons/a1-11.json'
import type { CourseActivity as Activity } from '../../../stories/materials/Course/Course.types'

it('keeps gift instructions in the authored subtitle and preserves product labels and data in the exercise', () => {
  const page = gifts.pages.find((page) => page.id === 's_reply')!
  expect(page.instruction).toContain('Use your friend’s message')
  render(
    <MaterialTheme>
      <CourseActivity
        activity={gifts.activities.s_reply as Activity}
        image="/gifts.webp"
      />
    </MaterialTheme>,
  )
  expect(
    screen.queryByText('Use your friend’s message'),
  ).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Blue T-shirt' })).toBeVisible()
  expect(screen.getByText('Size')).toBeVisible()
  expect(screen.getByText('L')).toBeVisible()
  expect(screen.getByText('$12')).toBeVisible()
})

it('allows a header to own board instructions without empty text or dangling ARIA references', () => {
  render(
    <>
      <p id="page-instruction">Put the pictures in order</p>
      <ImageSortBoard
        aria-label="Story pictures"
        aria-describedby="page-instruction"
        instructions=""
        items={[]}
        categories={[]}
        assignments={{}}
        onSelect={() => undefined}
        onAssign={() => undefined}
      />
    </>,
  )
  const board = screen.getByRole('region', { name: 'Story pictures' })
  expect(board).toHaveAttribute('aria-describedby', 'page-instruction')
  expect(board.querySelector('[id$="-instructions"]')).toBeNull()
  expect(
    screen.queryByText('Drag a picture, or select it and choose a column'),
  ).not.toBeInTheDocument()
})

it('places opening-review instructions in the header while leaving the review content beside the cover', () => {
  render(
    <LessonOpening
      materialKey="a1-11"
      review={{
        title: 'Polite requests',
        instruction: 'Recall a polite request and ask the price',
        content: <div>Earlier conversation</div>,
      }}
    />,
  )
  const subtitle = screen.getByText('Recall a polite request and ask the price')
  expect(document.querySelector('[data-slide-introduction]')).toContainElement(
    subtitle,
  )
  expect(
    screen.getByText('Earlier conversation').parentElement,
  ).not.toContainElement(subtitle)
})
