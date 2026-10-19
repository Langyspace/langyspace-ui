import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: grid;
    flex: 1 1 auto;
    min-height: 0;
    gap: ${token.spacing3};
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }
`

export const Card = styled.section`
  display: grid;
  gap: ${token.spacing3};
  padding: ${token.spacing4};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  background: ${token.colorNeutral0};
`

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${token.spacing3};
  > h2 {
    margin: 0;
    font-size: ${token.typographyFontSizeMd};
    font-weight: ${token.typographyFontWeightBold};
  }
  > span {
    flex-shrink: 0;
    color: ${token.colorContentMuted};
    font-size: ${token.typographyFontSizeXs};
  }
`

export const Stack = styled.div`
  display: grid;
  gap: ${token.spacing2};
`

export const Event = styled(Pressable)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${token.spacing3};
  min-height: 3.25rem;
  padding: ${token.spacing3};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusControl};
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral100};
  text-align: left;
  &:focus-visible {
    outline: 3px solid ${token.colorBrandDefault};
    outline-offset: 2px;
  }
  &[data-tone='success'] {
    background: ${token.colorStatusSuccessBackground};
    color: ${token.colorStatusSuccessForeground};
  }
  &[data-tone='muted'] {
    color: ${token.colorContentMuted};
  }
  > span {
    font-variant-numeric: tabular-nums;
    font-size: ${token.typographyFontSizeXs};
    font-weight: ${token.typographyFontWeightBold};
  }
  strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: ${token.typographyFontSizeSm};
  }
  small {
    color: inherit;
    font-size: ${token.typographyFontSizeXs};
  }
`

export const Slot = styled(Pressable)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${token.spacing2};
  min-height: 2.75rem;
  padding: ${token.spacing2} ${token.spacing3};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusControl};
  background: ${token.colorNeutral0};
  color: ${token.colorContentDefault};
  text-align: left;
  font-size: ${token.typographyFontSizeXs};
  &:focus-visible {
    outline: 3px solid ${token.colorBrandDefault};
    outline-offset: 2px;
  }
  &[data-state='blocked'] {
    color: ${token.colorNeutral0};
    background: ${token.colorContentDefault};
  }
  &[data-state='unavailable'] {
    color: ${token.colorContentMuted};
    background: ${token.colorNeutral50};
  }
`

export const More = styled(Pressable)`
  justify-self: start;
  min-height: 2.75rem;
  border: 0;
  background: transparent;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  &:focus-visible {
    outline: 3px solid ${token.colorBrandDefault};
  }
`

export const Empty = styled.span`
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
`
