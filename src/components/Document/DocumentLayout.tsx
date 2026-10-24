import * as Styled from './DocumentLayout.styles'
import type { DocumentLayoutProps } from './DocumentLayout.types'

const noParagraphs: readonly string[] = []

export function DocumentLayout({
  title,
  eyebrow,
  meta,
  summary = noParagraphs,
  intro = noParagraphs,
  sections,
  ref,
  ...props
}: DocumentLayoutProps) {
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
            {summary.map((item) => (
              <Styled.SummaryItem key={item}>{item}</Styled.SummaryItem>
            ))}
          </Styled.Summary>
        ) : null}
      </Styled.Aside>
      <Styled.Article>
        {intro.length ? (
          <Styled.Intro>
            {intro.map((paragraph) => (
              <Styled.Paragraph key={paragraph}>{paragraph}</Styled.Paragraph>
            ))}
          </Styled.Intro>
        ) : null}
        {sections.map((section) => (
          <Styled.Section key={section.title}>
            <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
            <Styled.SectionBody>
              {section.body.map((paragraph) => (
                <Styled.Paragraph key={paragraph}>{paragraph}</Styled.Paragraph>
              ))}
            </Styled.SectionBody>
          </Styled.Section>
        ))}
      </Styled.Article>
    </Styled.Layout>
  )
}
