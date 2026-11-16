import * as Styled from './SlidePage.styles'
import type { SlidePageProps } from './SlidePage.types'

export function SlidePage({
  title,
  eyebrow,
  instruction,
  tools,
  width = 'wide',
  tone = 'default',
  children,
  ...props
}: SlidePageProps) {
  return (
    <Styled.Root {...props} $tone={tone}>
      <Styled.Content $width={width}>
        <Styled.Header>
          <Styled.Heading>
            {eyebrow ? (
              <Styled.Eyebrow $tone={tone}>{eyebrow}</Styled.Eyebrow>
            ) : null}
            <Styled.Title>{title}</Styled.Title>
            {instruction ? (
              <Styled.Instruction $tone={tone}>
                {instruction}
              </Styled.Instruction>
            ) : null}
          </Styled.Heading>
          {tools ? <Styled.Tools>{tools}</Styled.Tools> : null}
        </Styled.Header>
        <Styled.Body>{children}</Styled.Body>
      </Styled.Content>
    </Styled.Root>
  )
}
