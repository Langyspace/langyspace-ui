import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-prompt-header',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${token.spacing3};

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${token.spacing2};
  }
`

export interface QuizPromptHeaderProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function QuizPromptHeader({
  children,
  ...props
}: QuizPromptHeaderProps) {
  return <Root {...props}>{children}</Root>
}
