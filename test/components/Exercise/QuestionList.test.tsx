import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { expect, it } from 'vitest'
import { QuestionList } from '../../../src/components/Exercise/QuestionList'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import a101 from '../../../stories/materials/A101/A101.review.json'

const items = [
  {
    id: 'kim',
    prompt: 'Where is Kim from?',
    hint: 'Look at the greeting',
    answer: 'She’s from Korea',
  },
  {
    id: 'ana',
    prompt: 'How does Ana feel?',
    hint: 'Look for two feelings',
    answer: 'She’s good and hungry',
  },
  {
    id: 'personal',
    prompt: 'What can you say about yourself?',
    cue: 'Use a name, a country and a feeling',
  },
]

it('renders its semantic list and native controls on the server without a browser', () => {
  const html = renderToString(<QuestionList items={items} />)
  expect(html).toContain('lsui-sc-question-list')
  expect(html).toContain('<ol')
  expect(html).toContain('Show next hint')
  expect(html).toContain('aria-hidden="true"')
})

it('keeps all prompts visible in individual list items with one hint control directly after the list', () => {
  const { container } = render(
    <SlidePage title="Meet Ana" questions={<QuestionList items={items} />}>
      <p>Dialogue</p>
    </SlidePage>,
  )
  const questions = screen.getByRole('complementary', { name: 'Questions' })
  const list = within(questions).getByRole('list')
  expect(within(list).getAllByRole('listitem')).toHaveLength(3)
  for (const item of items)
    expect(within(list).getByText(item.prompt)).toBeVisible()
  const footer = container.querySelector('[data-question-hint-footer]')!
  expect(list).not.toContainElement(footer as HTMLElement)
  expect(
    list.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy()
  expect(
    within(questions).getByRole('button', { name: 'Show next hint' }),
  ).toBeVisible()
  expect(screen.queryByRole('button', { name: items[2]!.prompt })).toBeNull()
})

it('opens answers independently by keyboard while the lower hint control progresses and resets', async () => {
  const user = userEvent.setup()
  render(<QuestionList items={items} />)
  const first = screen.getByRole('button', { name: items[0]!.prompt })
  first.focus()
  await user.keyboard('{Enter}')
  expect(first).toHaveAttribute('aria-expanded', 'true')
  expect(
    document.getElementById(first.getAttribute('aria-controls')!),
  ).not.toHaveAttribute('inert')
  fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
  expect(screen.getByText(items[0]!.hint!)).toBeVisible()
  expect(
    screen.getByText(items[0]!.answer!).closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'true')
  await user.click(first)
  expect(
    screen.getByText(items[0]!.answer!).closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'false')
  expect(
    screen.getByText(items[1]!.hint!).closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'true')
  fireEvent.click(screen.getByRole('button', { name: 'Show next hint' }))
  expect(screen.getByText(items[1]!.hint!)).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Hide hints' }))
  expect(
    screen.getByText(items[0]!.hint!).closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'true')
  expect(first).toHaveAttribute('aria-expanded', 'true')
  await user.click(first)
  expect(
    screen.getByText(items[0]!.answer!).closest('[aria-hidden]'),
  ).toHaveAttribute('inert')
})

it('keeps at least three grounded questions and full-sentence answers in the A101 pilot', () => {
  const groups = a101.pages.filter((page) => 'questions' in page)
  expect(groups).toHaveLength(1)
  for (const page of groups)
    expect(page.questions!.length).toBeGreaterThanOrEqual(3)
  expect(groups[0]!.questions!.map((item) => item.answer)).toEqual([
    'They meet in the morning',
    'Ana is from Brazil',
    'Kim is very happy today',
  ])
})
