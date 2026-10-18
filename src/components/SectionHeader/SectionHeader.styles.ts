import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { SectionHeaderSpacing } from './SectionHeader'

const titleFlexBasis = '16rem'

export const Header = styled.div.withConfig({
  componentId: 'lsui-sc-section-header',
})<{ $spacing: SectionHeaderSpacing }>`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${token.spacing3};
  margin-top: ${({ $spacing }) => ($spacing === 'flush' ? 0 : token.spacing8)};
  margin-bottom: ${token.spacing4};
`

export const Title = styled.h2`
  min-width: 0;
  flex: 1 1 ${titleFlexBasis};
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeXl};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
  overflow-wrap: anywhere;
`

export const Aside = styled.div`
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: ${token.spacing2};
  margin-left: auto;
`

export const Meta = styled.span`
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
`
