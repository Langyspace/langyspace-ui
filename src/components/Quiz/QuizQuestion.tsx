import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-question',
})`
  margin: 0;
  padding: 4px 2px 2px;
  flex: 1;
  min-width: 0;
  color: var(--quiz-ink, #0a0a0a);
  font-size: 23px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1.4;
  text-wrap: pretty;
  [data-ui-skeleton] + [data-ui-skeleton] {
    margin-top: 8px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`

export interface QuizQuestionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function QuizQuestion({ children, ...props }: QuizQuestionProps) {
  return <Root {...props}>{children}</Root>
}
