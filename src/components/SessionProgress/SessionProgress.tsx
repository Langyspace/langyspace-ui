import { PracticeProgressBar } from '../Practice/PracticeProgressBar'

import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-session-progress',
})`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: ${token.colorContentMuted};
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
`

const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${token.colorContentDefault};
  text-overflow: ellipsis;
  white-space: nowrap;
`

export interface SessionProgressProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  name: ReactNode
  counter: ReactNode
  value: number
}

export function SessionProgress({
  name,
  counter,
  value,
  ...props
}: SessionProgressProps) {
  return (
    <Root {...props}>
      <Label>
        <Name>{name}</Name>
        <span>{counter}</span>
      </Label>
      <PracticeProgressBar value={value} />
    </Root>
  )
}
