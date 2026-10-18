import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../Pressable'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-notification-item',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  gap: ${token.spacing3};
  padding-top: ${token.spacing3};
  padding-right: ${token.spacing3};
  padding-bottom: ${token.spacing3};
  padding-left: ${token.spacing3};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusRounded};
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral0};
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover {
    border-color: ${token.colorSurfaceBorderStrong};
    background: ${token.colorNeutral50};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`

export const Content = styled.span.withConfig({
  componentId: 'lsui-sc-notification-content',
})`
  min-width: 0;
`

export const ItemTitle = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemtitle',
})`
  display: block;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
`

export const ItemBody = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itembody',
})`
  display: block;
  margin-top: ${token.spacing1};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export const ItemMeta = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemmeta',
})`
  display: block;
  margin-top: ${token.spacing1};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: ${token.typographyLineHeightSnug};
`

export const ItemAction = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemaction',
})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${token.spacing1};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  white-space: nowrap;

  @media (max-width: 900px) {
    display: none;
  }
`
