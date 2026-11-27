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
