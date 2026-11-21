import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import {
  LessonOpening,
  LessonPracticePlan,
  TrialNextSteps,
} from '../../../stories/materials/shared/LessonBookends'
import catalog from '../../../stories/materials/Standalone/catalog.json'

afterEach(cleanup)

it.each(catalog)(
  'resolves the approved cover and catalog title for $key without losing review content',
  (entry) => {
    render(
      <LessonOpening materialKey={entry.key} reviewTitle="Review">
        <button>Reveal my answer</button>
      </LessonOpening>,
    )
    expect(
      screen.getByRole('heading', { name: entry.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      expect.stringContaining('catalog-cover40.webp'),
    )
    expect(
      screen.getByRole('button', { name: 'Reveal my answer' }),
    ).toBeInTheDocument()
  },
)

it('keeps a cover-only opening free of empty review controls', () => {
  render(<LessonOpening materialKey="a1-01" />)
  expect(
    screen.queryByRole('heading', { name: 'Review' }),
  ).not.toBeInTheDocument()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('presents genuine tasks and the optional example without inventing practice destinations', () => {
  render(
    <LessonPracticePlan
      tasks={[{ title: 'Speaking', description: 'Introduce two people' }]}
      example="This is my sister"
    />,
  )
  const phone = screen.getByRole('region', {
    name: 'Your practice before the next class',
  })
  expect(phone).toHaveAttribute('data-device-frame', 'mobile')
  expect(phone).toContainElement(screen.getByText('Introduce two people'))
  expect(phone).toContainElement(screen.getByText('This is my sister'))
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it.each(['trial-a1-a2', 'trial-b1', 'trial-b2'])(
  'directs %s to the school team without invented enrolment offers or links',
  (materialKey) => {
    render(<TrialNextSteps materialKey={materialKey} />)
    expect(
      screen.getByRole('heading', { name: 'Talk to the school team' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/join the course/)).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  },
)
