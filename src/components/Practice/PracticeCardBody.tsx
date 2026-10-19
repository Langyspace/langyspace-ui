import { PracticeProgressBar } from './PracticeProgressBar'

import type { ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Body = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-body',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${token.spacing2};
  padding: ${token.spacing4};
`

const Title = styled.h3<{ $completed: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? token.colorContentSecondary : token.colorContentDefault)};
  font-size: ${token.typographyFontSizeMd};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${token.spacing2};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};

  > span {
    min-width: 0;
  }
  > span:last-child {
    text-align: right;
  }
`

export interface PracticeCardBodyProps {
  title: ReactNode
  leadingMeta: ReactNode
  trailingMeta: ReactNode
  value: number
  completed?: boolean
}

export function PracticeCardBody({
  title,
  leadingMeta,
  trailingMeta,
  value,
  completed = false,
}: PracticeCardBodyProps) {
  return (
    <Body data-ui-practice-card-body="true">
      <Title $completed={completed}>{title}</Title>
      <Meta>
        <span>{leadingMeta}</span>
        <span>{trailingMeta}</span>
      </Meta>
      <PracticeProgressBar value={value} />
    </Body>
  )
}
