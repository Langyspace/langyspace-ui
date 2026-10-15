import { styled } from 'styled-components'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-auth-channel-icon',
})<{ $channel: 'sms' | 'whatsapp' }>`
  display: inline-flex;
  width: 1.625rem;
  height: 1.625rem;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: ${({ $channel }) =>
    $channel === 'sms' ? '#000000' : '#16A34A'};
  color: #ffffff;

  & + & {
    margin-left: -0.625rem;
  }
`
