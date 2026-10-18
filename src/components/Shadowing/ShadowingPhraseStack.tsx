import type { ComponentPropsWithRef } from 'react'

import { styled, keyframes } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const shadowRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.875rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-phrase-stack',
})<{ $rising?: boolean }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: ${token.spacing3};
  text-align: center;
  animation: ${({ $rising }) => ($rising ? shadowRise : 'none')} 0.45s
    cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: ${token.spacing4};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export interface ShadowingPhraseStackProps extends ComponentPropsWithRef<'div'> {
  rising?: boolean
}

export function ShadowingPhraseStack({
  rising = false,
  ...props
}: ShadowingPhraseStackProps) {
  return <Root {...props} $rising={rising} />
}
