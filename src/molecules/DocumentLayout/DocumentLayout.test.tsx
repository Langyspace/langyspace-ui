import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DocumentLayout } from '.'

describe('DocumentLayout', () => {
  it('preserves document hierarchy, repeated paragraphs and native ref without a theme', () => {
    const ref = createRef<HTMLDivElement>()

    render(
      <DocumentLayout
        ref={ref}
        data-document="example"
        title="Guia"
        eyebrow="documento"
        meta="Maio de 2026"
        summary={['Resumo', 'Resumo']}
        intro={['Introdução']}
        sections={[
          { title: 'Primeira seção', body: ['Parágrafo', 'Parágrafo'] },
          { title: 'Segunda seção', body: ['Texto final'] },
        ]}
      />,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Guia' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(2)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getAllByText('Parágrafo')).toHaveLength(2)
    expect(screen.getByRole('article')).toHaveTextContent('Texto final')
    expect(ref.current).toHaveAttribute('data-document', 'example')
    expect(ref.current).toHaveClass('lsui-sc-document-layout')
  })

  it('omits optional content without adding empty grid rows', () => {
    render(
      <DocumentLayout
        title="Documento breve"
        sections={[{ title: 'Conteúdo', body: ['Texto'] }]}
      />,
    )

    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    expect(screen.getByRole('article').children).toHaveLength(1)
    expect(screen.getByRole('complementary').children).toHaveLength(1)
  })
})
