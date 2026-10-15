import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Body = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-body',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${token.spacing2};
  padding: ${token.spacing4};
`

export const Title = styled.h3<{ $completed: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? token.colorContentSecondary : token.colorContentDefault)};
  font-size: ${token.typographyFontSizeMd};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
`

export const Meta = styled.div`
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
