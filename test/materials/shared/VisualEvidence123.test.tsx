import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CourseActivity } from '../../../stories/materials/Course/CourseActivity'
import type { CourseActivity as Activity } from '../../../stories/materials/Course/Course.types'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import neighbourhood from '../../../stories/materials/Course/lessons/b1-02.json'
import gifts from '../../../stories/materials/Course/lessons/a1-11.json'
import cafe from '../../../stories/materials/Course/lessons/a1-10.json'

function show(activity: unknown) {
  render(
    <MaterialTheme>
      <CourseActivity activity={activity as Activity} image="/evidence.webp" />
    </MaterialTheme>,
  )
}

describe('Visual oral practice', () => {
  it('keeps before and now visible together without printing the changes or the later listening reveal', () => {
    show(neighbourhood.activities.s_mission)
    expect(screen.getByRole('img', { name: 'Before' })).toBeVisible()
    expect(screen.getByRole('img', { name: 'Now' })).toBeVisible()
    expect(
      screen.queryByRole('button', { name: 'Now' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('Pharmacy', { exact: true }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/Apartment block/)).not.toBeInTheDocument()
  })
  it('changes the pictured product together with the available size and price', () => {
    show(gifts.activities.s_mission)
    expect(screen.getByRole('img', { name: 'Blue T-shirt' })).toBeVisible()
    expect(screen.getByText('L', { exact: true })).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Blue jacket' }))
    expect(screen.getByRole('img', { name: 'Blue jacket' })).toBeVisible()
    expect(screen.getByText('M', { exact: true })).toBeVisible()
    expect(screen.getByText('$25', { exact: true })).toBeVisible()
    expect(screen.queryByText('$12', { exact: true })).not.toBeInTheDocument()
  })
  it('lets a learner identify a wrong delivery from pictures, then start a fresh order', () => {
    show(cafe.activities.s_mission)
    fireEvent.click(screen.getByRole('button', { name: 'Check the tray' }))
    expect(screen.getByRole('img', { name: 'Coffee' })).toBeVisible()
    expect(screen.getByRole('img', { name: 'Cake' })).toBeVisible()
    expect(
      screen.queryByText('On the tray: coffee and cake'),
    ).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Order again' }))
    fireEvent.click(screen.getByRole('button', { name: 'Coffee' }))
    fireEvent.click(screen.getByRole('button', { name: 'Check the tray' }))
    expect(screen.getByRole('img', { name: 'Tea' })).toBeVisible()
  })
})
