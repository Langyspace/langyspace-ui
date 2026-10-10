import { forwardRef } from 'react'
import * as Styled from './styles'
import type { DocumentLayoutProps } from './types'

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

export type { DocumentLayoutProps, DocumentSection } from './types'
