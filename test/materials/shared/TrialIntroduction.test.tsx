import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { TrialIntroduction } from '../../../stories/materials/shared/TrialIntroduction'
import { GreetingSection } from '../../../stories/materials/TrialA1/TrialA1.sections'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import b1 from '../../../stories/materials/TrialB1/TrialB1.content.json'
import c1 from '../../../stories/materials/TrialB2/TrialB2.content.json'
import a1 from '../../../stories/materials/TrialA1/TrialA1.content.json'

const identity = vi.hoisted(() => ({
  teacher: {
    name: 'Camila Oliveira',
    avatarUrl: 'https://example.org/teacher.jpg',
  } as { name: string; avatarUrl?: string },
  learner: undefined as { firstName: string; avatarUrl: string } | undefined,
}))
vi.mock(
  '../../../stories/materials/shared/MaterialTeacherContext',
  async () => {
    const { resolveMaterialTeacherIdentity } =
      await import('../../../stories/materials/shared/materialTeacherIdentity')
    return {
      useMaterialTeacher: () =>
        resolveMaterialTeacherIdentity(identity.teacher),
    }
  },
)
vi.mock('../../../stories/materials/shared/MaterialLearnerContext', () => ({
  useMaterialLearner: () => identity.learner,
}))
beforeEach(() => {
  identity.teacher = {
    name: 'Camila Oliveira',
    avatarUrl: 'https://example.org/teacher.jpg',
  }
  identity.learner = undefined
})

it.each([
  ['B1/B2', b1.introduction],
  ['C1/C2', c1.introduction],
] as const)(
  '%s introduces real participants and reveals optional tips/models in order below six turns',
  (_, copy) => {
    const { container } = render(
      <MaterialTheme>
        <SlidePage title={copy.title} columns={1}>
          <TrialIntroduction prompts={copy.prompts} />
        </SlidePage>
      </MaterialTheme>,
    )
    const dialogue = container.querySelector<HTMLElement>(
      '[class*="lsui-sc-learning-dialogue"]',
    )!
    expect(dialogue.children).toHaveLength(6)
    expect(screen.getAllByText('Camila', { exact: true })).toHaveLength(3)
    expect(screen.getAllByText('You', { exact: true })).toHaveLength(3)
    expect(
      screen.getByText(`Hi, I’m Camila. ${copy.prompts[0]!.question}`),
    ).toBeVisible()
    expect(screen.queryByText('Camila Oliveira')).toBeNull()
    expect(screen.getAllByRole('button')).toHaveLength(2)
    const tip = screen.getByRole('button', { name: 'Show next tip (1/3)' })
    expect(
      dialogue.compareDocumentPosition(tip) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    for (const prompt of copy.prompts) {
      expect(screen.getByText(prompt.cue)).toBeVisible()
      expect(
        screen.getByText(prompt.model).closest('[aria-hidden]'),
      ).toHaveAttribute('aria-hidden', 'true')
      for (const text of [
        prompt.question,
        prompt.cue,
        prompt.hint,
        prompt.model,
      ])
        expect(text.endsWith('.')).toBe(false)
    }
    fireEvent.click(tip)
    expect(
      screen.getByText(copy.prompts[0]!.hint).closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      screen.getByText(copy.prompts[1]!.hint).closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(
      screen.getByRole('button', { name: 'Show next model (1/3)' }),
    )
    expect(
      screen.getByText(copy.prompts[0]!.model).closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      screen.getByText(copy.prompts[0]!.hint).closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByRole('button', { name: 'Show next tip (2/3)' }),
    ).toBeEnabled()
    expect(
      container.querySelector('[data-slide-columns="1"]'),
    ).toContainElement(dialogue)
  },
)

it('uses the learner photo and first name and falls back to You if the photo fails', () => {
  identity.learner = {
    firstName: 'Bruna',
    avatarUrl: 'https://example.org/student.jpg',
  }
  const { container } = render(
    <TrialIntroduction prompts={b1.introduction.prompts} />,
  )
  expect(screen.getAllByText('Bruna', { exact: true })).toHaveLength(3)
  fireEvent.error(
    container.querySelector('img[src="https://example.org/student.jpg"]')!,
  )
  expect(screen.getAllByText('You', { exact: true })).toHaveLength(3)
  expect(screen.getAllByText('Camila', { exact: true })).toHaveLength(3)
})

it('keeps a neutral teacher fallback without inventing a name or biography', () => {
  identity.teacher = { name: 'Your teacher' }
  render(<TrialIntroduction prompts={c1.introduction.prompts} />)
  expect(screen.getAllByText('Teacher', { exact: true })).toHaveLength(3)
  expect(screen.getByText(c1.introduction.prompts[0]!.question)).toBeVisible()
  expect(screen.queryByText(/I’m (?:Your teacher|Teacher)/)).toBeNull()
})

it('preserves the A1 greeting text, translation and progressive support through the same adapter', () => {
  render(<GreetingSection />)
  fireEvent.click(screen.getByRole('button', { name: a1.p1.cards[0]!.q }))
  expect(screen.getByText(a1.p1.cards[0]!.pt)).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Show next tip (1/3)' }))
  expect(
    screen.getByText('Diga seu primeiro nome').closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'false')
  fireEvent.click(screen.getByRole('button', { name: 'Show next model (1/3)' }))
  expect(
    screen.getByText(a1.p1.cards[0]!.a).closest('[aria-hidden]'),
  ).toHaveAttribute('aria-hidden', 'false')
})
