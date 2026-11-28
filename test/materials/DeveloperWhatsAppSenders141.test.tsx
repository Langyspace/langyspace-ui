import { within } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, it } from 'vitest'
import { DevStudy131Lesson } from '../../stories/materials/DevStudy131/DevStudy131Lesson'
import { DevInterviews131Lesson } from '../../stories/materials/DevInterviews131/DevInterviews131Lesson'

it('uses Owen consistently in the study notes contact, audio controls and questions', () => {
  const element = document.createElement('div')
  element.innerHTML = renderToStaticMarkup(<DevStudy131Lesson />)
  const content = element.querySelector(
    '[data-slide-id="listening"]',
  )!.innerHTML
  expect(content).toContain('Listen to Owen')
  expect(content).toContain('Questions about Owen’s notes')
  expect(content).not.toContain('Questions about Kim’s notes')
  expect(content).not.toContain('Listen to Kim')
})

it('keeps the manager Kim while Priya owns the technical preparation messages', () => {
  const element = document.createElement('div')
  element.innerHTML = renderToStaticMarkup(<DevInterviews131Lesson />)
  const text = element.textContent ?? ''
  expect(text).toContain('A message from Priya')
  expect(text).toContain('Read Priya’s message')
  expect(text).toContain('Priya’s next voice note')
  expect(text).toContain('Listen to Priya’s second note')
  expect(text).toContain('Answer Kim one part at a time')
})

it('lets the learner start all three exchanges with Priya after her voice notes', () => {
  const element = document.createElement('div')
  element.innerHTML = renderToStaticMarkup(<DevInterviews131Lesson />)
  const reply = element.querySelector<HTMLElement>('[data-slide-id="reply"]')!
  expect(reply).toHaveTextContent('Your teacher is Priya')
  const dialogue = reply.querySelector('[class*="lsui-sc-learning-dialogue"]')!
  const expected = [
    ['You', 'Name a project you could bring'],
    ['Teacher', 'Who did you build the project for?'],
    ['You', 'who the project helps'],
    ['Teacher', 'see your part in action'],
    ['You', 'Offer a quick demo'],
    ['Teacher', 'I’ll send you feedback by Friday'],
  ] as const
  const bubbles = dialogue.querySelectorAll<HTMLElement>(
    ':scope > :not([role="group"])',
  )
  expect(bubbles).toHaveLength(expected.length)
  expected.forEach(([speaker, line], index) => {
    const bubble = bubbles[index]!
    expect(bubble).toContainElement(
      within(bubble).getByText(speaker, { exact: true }),
    )
    expect(bubble).toHaveTextContent(line)
  })
})
