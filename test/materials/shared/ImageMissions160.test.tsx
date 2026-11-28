import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import party from '../../../stories/materials/Course/lessons/b1-11.json'
import clues from '../../../stories/materials/Course/lessons/b2-04.json'
import checkout from '../../../stories/materials/Course/lessons/c1-12.json'

it.each([
  ['party', party.activities.s_mission],
  ['clues', clues.activities.s_mission],
  ['checkout', checkout.activities.s_reply],
] as const)(
  'keeps the evidence available while revealing optional language in the %s scene',
  (_, activity) => {
    render(
      <CourseActivity
        activity={{ ...activity, type: 'scene-choice' }}
        image="/scene.png"
      />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('src', '/scene.png')
    expect(screen.getAllByRole('button')).toHaveLength(
      activity.scene.hotspots.length,
    )
    expect(screen.queryByRole('textbox')).toBeNull()
    const [first, second] = activity.scene.hotspots
    if (!first || !second)
      throw new Error('A scene needs at least two observable targets')
    fireEvent.click(screen.getByRole('button', { name: first.label }))
    const card = screen.getByRole('region', { name: first.label })
    expect(within(card).getByText(first.example)).toBeVisible()
    expect(within(card).queryByText(first.answer)).toBeNull()
    fireEvent.click(within(card).getByRole('button', { name: 'Show a hint' }))
    expect(within(card).getByText(first.example)).toBeVisible()
    expect(within(card).getByText(first.hint)).toBeVisible()
    fireEvent.click(
      within(card).getByRole('button', { name: 'Show an example' }),
    )
    expect(within(card).getByText(first.answer)).toBeVisible()
    expect(within(card).queryByText(first.hint)).toBeNull()
    expect(within(card).getByText(first.example)).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: second.label }))
    const next = screen.getByRole('region', { name: second.label })
    expect(within(next).getByText(second.example)).toBeVisible()
    expect(
      within(next).getByRole('button', { name: 'Show a hint' }),
    ).toBeVisible()
    expect(screen.queryByText(first.answer)).toBeNull()
    fireEvent.click(
      within(next).getByRole('button', { name: `Close: ${second.label}` }),
    )
    expect(screen.queryByRole('region')).toBeNull()
  },
)
