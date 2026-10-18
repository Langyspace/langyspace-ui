import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../Button/Pressable'
import type { FilterPillsOverflow, FilterPillsSize } from './FilterPills.types'

const sizeStyles = {
  md: css`
    min-height: ${token.controlHeightMd};
    padding-right: ${token.spacing4};
    padding-left: ${token.spacing4};
    font-size: ${token.typographyFontSizeSm};
    font-weight: ${token.typographyFontWeightBold};
  `,
  sm: css`
    min-height: ${token.controlHeightSm};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
    font-size: ${token.typographyFontSizeXs};
    font-weight: ${token.typographyFontWeightMedium};
  `,
} satisfies Record<FilterPillsSize, ReturnType<typeof css>>

export const Group = styled.div.withConfig({
  componentId: 'lsui-sc-filter-pills',
})<{ $overflow: FilterPillsOverflow }>`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-wrap: ${({ $overflow }) => ($overflow === 'wrap' ? 'wrap' : 'nowrap')};
  gap: ${token.spacing2};
  overflow-x: ${({ $overflow }) => ($overflow === 'scroll' ? 'auto' : 'visible')};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled(Pressable)<{
  $active: boolean
  $size: FilterPillsSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  gap: ${token.spacing2};
  border: 1px solid
    ${({ $active }) =>
      $active ? token.colorContentDefault : token.colorSurfaceBorderDefault};
  border-radius: ${token.radiusPill};
  color: ${({ $active }) =>
    $active ? token.colorNeutral0 : token.colorContentSecondary};
  background: ${({ $active }) =>
    $active ? token.colorContentDefault : token.colorNeutral0};
  white-space: nowrap;
  transition:
    color ${token.motionDurationInteractive} ${token.motionEasingInteractive},
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

  ${({ $size }) => sizeStyles[$size]}

  &:hover:not(:disabled) {
    border-color: ${token.colorSurfaceBorderStrong};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${token.shadowFocus};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`

export const Count = styled.span`
  min-width: 1.375rem;
  border-radius: ${token.radiusPill};
  background: ${token.colorInverseSurfaceSubtle};
  color: inherit;
  font-size: ${token.typographyFontSize2xs};
  line-height: 1;
  padding: ${token.spacing1} 0.4375rem;
  text-align: center;
`
