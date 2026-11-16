import * as Styled from './SlidePage.styles'
import type { SlidePageProps } from './SlidePage.types'

export function SlidePage({
  title,
  eyebrow,
  instruction,
  tools,
  lead,
  layout = 'stacked',
  density = 'regular',
  width = 'wide',
  tone = 'default',
  children,
  ...props
}: SlidePageProps) {
  const introduction = (
    <>
      {lead ? <Styled.Lead>{lead}</Styled.Lead> : null}
      <Styled.Header
        $lead={Boolean(lead)}
        $compact={density !== 'regular' || width === 'focused'}
      >
        <Styled.Heading>
          {eyebrow ? (
            <Styled.Eyebrow $tone={tone}>{eyebrow}</Styled.Eyebrow>
          ) : null}
          <Styled.Title>{title}</Styled.Title>
          {instruction ? (
            <Styled.Instruction $tone={tone}>{instruction}</Styled.Instruction>
          ) : null}
        </Styled.Heading>
        {tools ? <Styled.Tools>{tools}</Styled.Tools> : null}
      </Styled.Header>
    </>
  )
  return (
    <Styled.Root {...props} $tone={tone} $dense={density === 'dense'}>
      <Styled.Content $width={width} $layout={layout}>
        {layout === 'split' ? (
          <div data-slide-introduction="true">{introduction}</div>
        ) : (
          introduction
        )}
        <Styled.Body>{children}</Styled.Body>
      </Styled.Content>
    </Styled.Root>
  )
}
