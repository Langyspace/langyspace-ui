import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-metadata',
})`
  display: flex;
  flex-direction: column;
  gap: ${token.spacing1};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
`
