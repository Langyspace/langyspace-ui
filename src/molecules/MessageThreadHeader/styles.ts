import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-message-thread-header',
})`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: ${token.spacing3};
`

export const Action = styled.div`
  display: inline-flex;
  min-width: 0;
  flex: 0 0 auto;
  align-items: center;
`

export const Identity = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  gap: ${token.spacing3};
`

export const Text = styled.div`
  min-width: 0;
  flex: 1 1 auto;
`

export const Title = styled.h2`
  overflow: hidden;
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeMd};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Subtitle = styled.p`
  overflow: hidden;
  margin: ${token.spacing1} 0 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: ${token.typographyLineHeightSnug};
  text-overflow: ellipsis;
  white-space: nowrap;
`
