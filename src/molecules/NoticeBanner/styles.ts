import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Notice = styled.aside.withConfig({
  componentId: 'lsui-sc-notice-banner',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${token.spacing3};
  padding: ${token.spacing3} ${token.spacing4};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusLg};
  background: ${token.colorNeutral50};
  box-shadow:
    0 1px 0 rgba(10, 10, 10, 0.04),
    0 1px 2px rgba(10, 10, 10, 0.04);
  @media (max-width: 768px) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: flex-start;
  }
`
export const Icon = styled.span.withConfig({
  componentId: 'lsui-sc-notice-icon',
})`
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${token.radiusPill};
  background: ${token.colorNeutral100};
  color: ${token.colorContentSecondary};
`
export const Copy = styled.div.withConfig({
  componentId: 'lsui-sc-notice-copy',
})`
  min-width: 0;
`
export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-notice-actions',
})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${token.spacing2};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    justify-self: end;
    margin-top: ${token.spacing3};
  }
`
export const Title = styled.strong.withConfig({
  componentId: 'lsui-sc-notice-title',
})`
  display: block;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
`
export const Text = styled.span.withConfig({
  componentId: 'lsui-sc-notice-text',
})`
  display: block;
  margin-top: ${token.spacing1};
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`
