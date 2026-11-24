import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import {
  LessonOpening,
  LessonPracticePlan,
  TrialNextSteps,
} from '../../../stories/materials/shared/LessonBookends'
import catalog from '../../../stories/materials/Standalone/catalog.json'
import { lessonOpeningReviews } from '../../../stories/materials/shared/lessonOpeningPolicy.data'

afterEach(cleanup)

it.each(catalog)(
  'resolves the cover and title for $key without inventing an opening activity',
  (entry) => {
    render(<LessonOpening materialKey={entry.key} />)
    expect(
      screen.getByRole('heading', { name: entry.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      expect.stringContaining('catalog-cover40.webp'),
    )
    expect(
      screen
        .getByRole('heading', { name: entry.title })
        .compareDocumentPosition(screen.getByRole('img')) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText(/^Review:/)).not.toBeInTheDocument()
  },
)

it.each(Object.keys(lessonOpeningReviews))(
  'keeps only the explicit earlier-content review beside %s',
  (materialKey) => {
    render(
      <LessonOpening
        materialKey={materialKey}
        review={{
          title: 'Earlier content',
          instruction: 'Recall the previous topic',
          content: <button>Reveal my answer</button>,
        }}
      />,
    )
    expect(
      screen.getByRole('heading', { name: 'Review: Earlier content' }),
    ).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'Reveal my answer' }),
    ).toBeVisible()
    expect(
      document.querySelector('[data-slide-introduction]'),
    ).not.toContainElement(screen.getByRole('button'))
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
  'closes %s with one outgoing message, the cover split and no fake sending',
  (materialKey) => {
    render(<TrialNextSteps materialKey={materialKey} />)
    expect(
      screen.getByRole('heading', {
        name: 'Sua aula experimental chegou ao fim!',
      }),
    ).toBeInTheDocument()
    const actionHeading = screen.getByRole('heading', {
      name: 'Mande uma mensagem para a Langy',
    })
    expect(actionHeading).toHaveStyle({ textAlign: 'center' })
    const phone = screen.getByRole('region', {
      name: 'Exemplo de mensagem para a Langy',
    })
    expect(actionHeading.parentElement).toContainElement(phone)
    expect(phone).toContainElement(screen.getByText('Langy'))
    const logo = phone.querySelector('img')!
    expect(logo).toHaveAttribute(
      'src',
      expect.stringContaining('/brand/profile.png'),
    )
    expect(logo.parentElement).toHaveClass('lsui-sc-avatar')
    const message = screen.getByText(
      'Oi! Quero fechar o curso de inglês com vocês 😊',
    )
    expect(phone).toContainElement(message)
    expect(message.closest('article')).toHaveAttribute('data-side', 'outgoing')
    expect(message.parentElement).toHaveStyle({
      background: '#D9FDD3',
      color: '#0A0A0A',
    })
    const introduction = document.querySelector('[data-slide-introduction]')!
    expect(introduction).toContainElement(
      screen.getByRole('heading', {
        name: 'Sua aula experimental chegou ao fim!',
      }),
    )
    expect(introduction.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('catalog-cover40.webp'),
    )
    expect(
      screen
        .getByRole('heading', { name: 'Sua aula experimental chegou ao fim!' })
        .compareDocumentPosition(introduction.querySelector('img')!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(introduction).not.toContainElement(phone)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(document.querySelector('input, textarea, audio')).toBeNull()
  },
)
