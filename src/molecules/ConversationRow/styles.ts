import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-conversation-row',
})<{ $selected: boolean }>`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: ${token.spacing3};
  padding: 0.75rem 1rem;
  border: 0;
  background: ${({ $selected }) => ($selected ? '#FAFAF9' : 'transparent')};
  cursor: pointer;
  text-align: left;
  transition: background 150ms ease;

  &:hover {
    background: ${token.colorNeutral50};
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: -2px;
  }
`
export const Body = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-body',
})`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${token.spacing1};
`
export const Top = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-top',
})`
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: ${token.spacing2};
`
export const Title = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-title',
})`
  overflow: hidden;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const Meta = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-meta',
})`
  flex: 0 0 auto;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  white-space: nowrap;
`
export const Bottom = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-bottom',
})`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: ${token.spacing2};
`
export const Preview = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-preview',
})<{ $unread: boolean }>`
  overflow: hidden;
  flex: 1 1 auto;
  color: ${({ $unread }) => ($unread ? '#0A0A0A' : '#6B6B6B')};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${({ $unread }) => ($unread ? 500 : 400)};
  text-overflow: ellipsis;
  white-space: nowrap;
`
