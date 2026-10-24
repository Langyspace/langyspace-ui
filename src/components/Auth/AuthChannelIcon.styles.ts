import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-auth-channel-icon',
})<{ $channel: 'sms' | 'whatsapp' }>`
  display: inline-flex;
  width: 1.625rem;
  height: 1.625rem;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.palette.white};
  border-radius: 50%;
  background-color: ${({ $channel }) =>
    $channel === 'sms'
      ? theme.colors.palette.black
      : theme.colors.palette.feedback.success};
  color: ${theme.colors.palette.white};

  & + & {
    margin-left: -0.625rem;
  }
`
