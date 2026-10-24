import * as Styled from './NoticeBanner.styles'
import type { NoticeBannerProps } from './NoticeBanner.types'

export function NoticeBanner({
  actions,
  children,
  icon,
  title,
  ref,
  ...props
}: NoticeBannerProps) {
  return (
    <Styled.Notice ref={ref} {...props}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Copy>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{children}</Styled.Text>
      </Styled.Copy>
      {actions ? <Styled.Actions>{actions}</Styled.Actions> : null}
    </Styled.Notice>
  )
}
