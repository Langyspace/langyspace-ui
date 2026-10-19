import type { ComponentPropsWithRef, ReactNode } from 'react'
import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Actions = styled.div.withConfig({ componentId: 'lsui-sc-auth-actions' })`
  display: contents;

  > button {
    margin-top: clamp(${token.spacing4}, 3svh, ${token.spacing6});

    @media (max-width: 900px) {
      margin-top: clamp(${token.spacing3}, 2.5svh, ${token.spacing5});
    }
  }
`

export interface AuthActionsProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function AuthActions({ children, ...props }: AuthActionsProps) {
  return <Actions {...props}>{children}</Actions>
}
