import * as Styled from './styles'
import type { PracticeResultPanelProps } from './types'

export function PracticeResultPanel({
  children,
  ...props
}: PracticeResultPanelProps) {
  return (
    <Styled.Panel {...props} data-ui-practice-result-panel="true">
      {children}
    </Styled.Panel>
  )
}

export type { PracticeResultPanelProps } from './types'
