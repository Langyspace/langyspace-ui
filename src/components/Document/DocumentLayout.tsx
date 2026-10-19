import { forwardRef } from 'react'
import * as Styled from './DocumentLayout.styles'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface DocumentSection {
  title: string
  body: readonly string[]
}

export interface DocumentLayoutProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'title'
> {
  title: string
  eyebrow?: string
  meta?: ReactNode
  summary?: readonly string[]
  intro?: readonly string[]
  sections: readonly DocumentSection[]
}

export const DocumentLayout = forwardRef<HTMLDivElement, DocumentLayoutProps>(
  function DocumentLayout(
    { title, eyebrow, meta, summary = [], intro = [], sections, ...props },
    ref,
  ) {
    return (
      <Styled.Layout ref={ref} {...props}>
        <Styled.Aside>
          <div>
            {eyebrow ? <Styled.Eyebrow>{eyebrow}</Styled.Eyebrow> : null}
            <Styled.Title>{title}</Styled.Title>
            {meta ? <Styled.Meta>{meta}</Styled.Meta> : null}
          </div>
          {summary.length ? (
            <Styled.Summary>
              {summary.map((item, index) => (
                <Styled.SummaryItem key={index}>{item}</Styled.SummaryItem>
              ))}
            </Styled.Summary>
          ) : null}
        </Styled.Aside>
        <Styled.Article>
          {intro.length ? (
            <Styled.Intro>
              {intro.map((paragraph, index) => (
                <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
              ))}
            </Styled.Intro>
          ) : null}
          {sections.map((section, index) => (
            <Styled.Section key={index}>
              <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
              <Styled.SectionBody>
                {section.body.map((paragraph, paragraphIndex) => (
                  <Styled.Paragraph key={paragraphIndex}>
                    {paragraph}
                  </Styled.Paragraph>
                ))}
              </Styled.SectionBody>
            </Styled.Section>
          ))}
        </Styled.Article>
      </Styled.Layout>
    )
  },
)
