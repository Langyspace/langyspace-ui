import * as Styled from './MobileFrame.styles'
import type { MobileFrameProps } from './MobileFrame.types'

/** A content-sized phone preview: no simulated controls, fixed clipping or inner scrolling. */
export function MobileFrame({
  title,
  children,
  size = 'regular',
  ...props
}: MobileFrameProps) {
  return (
    <Styled.Root
      {...props}
      $compact={size === 'compact'}
      data-device-frame="mobile"
      data-size={size}
    >
      <Styled.Camera aria-hidden="true" />
      {title ? <Styled.Title>{title}</Styled.Title> : null}
      <Styled.Content>{children}</Styled.Content>
      <Styled.HomeIndicator aria-hidden="true" />
    </Styled.Root>
  )
}
