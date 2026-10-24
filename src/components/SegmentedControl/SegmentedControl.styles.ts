import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import type {
  SegmentedControlShape,
  SegmentedControlSurface,
} from './SegmentedControl.types'
import { theme } from '../../foundations/theme/theme'

const compactTrackInset = '0.1875rem'
const inverseItemMinWidth = '3rem'
const inverseItemInlinePadding = '0.875rem'
const itemMinHeight = '2.25rem'

const groupSurfaces = {
  inverse: css`
    border: 1px solid ${theme.semantic.inverse.border};
    background: transparent;
  `,
  light: css`
    border: 0;
    background: ${theme.semantic.background.muted};
  `,
} satisfies Record<SegmentedControlSurface, ReturnType<typeof css>>

export const Group = styled.div.withConfig({
  componentId: 'lsui-sc-segmented-control',
})<{ $shape: SegmentedControlShape; $surface: SegmentedControlSurface }>`
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  flex-wrap: nowrap;
  gap: ${({ $surface }) => ($surface === 'inverse' ? theme.spacing[2] : compactTrackInset)};
  border-radius: ${({ $shape }) =>
    $shape === 'pill' ? theme.radius.pill : theme.radius.control};
  padding: ${({ $surface }) => ($surface === 'inverse' ? theme.spacing[1] : compactTrackInset)};
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
  border-radius: ${({ $shape }) => ($shape === 'pill' ? theme.radius.pill : theme.radius.lg)};
  color: ${({ $active, $surface }) => {
    if ($surface === 'inverse')
      return $active
        ? theme.colors.palette.neutral[900]
        : theme.semantic.inverse.contentMuted

    return $active ? theme.colors.text.primary : theme.colors.text.muted
  }};
  background: ${({ $active }) => {
    if (!$active) return 'transparent'

    return theme.colors.palette.white
  }};
  box-shadow: ${({ $active, $surface }) =>
    $active && $surface === 'light' ? theme.shadows.xs : 'none'};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${({ $active, $surface }) =>
    $surface === 'inverse' || $active
      ? theme.typography.fontWeight.bold
      : theme.typography.fontWeight.medium};
  padding-right: ${({ $surface }) => ($surface === 'inverse' ? inverseItemInlinePadding : theme.spacing[4])};
  padding-left: ${({ $surface }) => ($surface === 'inverse' ? inverseItemInlinePadding : theme.spacing[4])};
  white-space: nowrap;
  transition:
    color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focusHalo};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`
