import * as Styled from './MobileFrame.styles'
import type { MobileFrameProps } from './MobileFrame.types'

/** A content-sized phone preview: no simulated controls, fixed clipping or inner scrolling. */
export function MobileFrame({ title, children, ...props }: MobileFrameProps) {
  return (
    <Styled.Root {...props} data-device-frame="mobile">
      <Styled.Camera aria-hidden="true" />
      {title ? <Styled.Title>{title}</Styled.Title> : null}
      <Styled.Content>{children}</Styled.Content>
      <Styled.HomeIndicator aria-hidden="true" />
    </Styled.Root>
  )
}
