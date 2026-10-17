import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
import type { SegmentedControlShape, SegmentedControlSurface } from './types'

const compactTrackInset = '0.1875rem'
const inverseItemMinWidth = '3rem'
const inverseItemInlinePadding = '0.875rem'
const itemMinHeight = '2.25rem'

const groupSurfaces = {
  inverse: css`
    border: 1px solid ${token.colorInverseBorderSubtle};
    background: transparent;
  `,
  light: css`
    border: 0;
    background: ${token.colorSurfaceMuted};
  `,
} satisfies Record<SegmentedControlSurface, ReturnType<typeof css>>

export const Group = styled.div.withConfig({
  componentId: 'lsui-sc-segmented-control',
})<{ $shape: SegmentedControlShape; $surface: SegmentedControlSurface }>`
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  flex-wrap: nowrap;
  gap: ${({ $surface }) => ($surface === 'inverse' ? token.spacing2 : compactTrackInset)};
  border-radius: ${({ $shape }) =>
    $shape === 'pill' ? token.radiusPill : token.radiusControl};
  padding: ${({ $surface }) => ($surface === 'inverse' ? token.spacing1 : compactTrackInset)};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ $surface }) => groupSurfaces[$surface]}
`

export const Item = styled(Pressable)<{
  $active: boolean
  $shape: SegmentedControlShape
  $surface: SegmentedControlSurface
}>`
  min-width: ${({ $surface }) => ($surface === 'inverse' ? inverseItemMinWidth : 'auto')};
  min-height: ${itemMinHeight};
  flex: 1 0 auto;
  border: 0;
  border-radius: ${({ $shape }) => ($shape === 'pill' ? token.radiusPill : token.radiusLg)};
  color: ${({ $active, $surface }) => {
    if ($surface === 'inverse')
      return $active ? token.colorNeutral950 : token.colorInverseContentMuted

    return $active ? token.colorContentDefault : token.colorContentMuted
  }};
  background: ${({ $active }) => {
    if (!$active) return 'transparent'

    return token.colorNeutral0
  }};
  box-shadow: ${({ $active, $surface }) =>
    $active && $surface === 'light' ? token.shadowSubtle : 'none'};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${({ $active, $surface }) =>
    $surface === 'inverse' || $active
      ? token.typographyFontWeightBold
      : token.typographyFontWeightMedium};
  padding-right: ${({ $surface }) => ($surface === 'inverse' ? inverseItemInlinePadding : token.spacing4)};
  padding-left: ${({ $surface }) => ($surface === 'inverse' ? inverseItemInlinePadding : token.spacing4)};
  white-space: nowrap;
  transition:
    color ${token.motionDurationInteractive} ${token.motionEasingInteractive},
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

  &:focus-visible {
    outline: none;
    box-shadow: ${token.shadowFocus};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`
