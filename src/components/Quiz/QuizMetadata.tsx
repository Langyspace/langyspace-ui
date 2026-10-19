import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-metadata',
})`
  display: flex;
  flex-direction: column;
  gap: ${token.spacing1};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
`

export interface QuizMetadataProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function QuizMetadata({ children, ...props }: QuizMetadataProps) {
  return <Root {...props}>{children}</Root>
}
