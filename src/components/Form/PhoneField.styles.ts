import { Pressable } from '../Pressable'
import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-phone-field',
})``

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Group = styled.div`
  position: relative;
  display: flex;
  min-width: 0;
  gap: ${theme.spacing[2]};
`

export const CountryButton = styled(Pressable)<{
  $invalid?: boolean
  $open: boolean
}>`
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding-right: ${theme.spacing[4]};
  padding-left: ${theme.spacing[4]};
  border: 2px solid
    ${({ $invalid, $open }) =>
      $invalid
        ? theme.colors.feedback.danger
        : $open
          ? theme.semantic.border.strong
          : theme.colors.palette.neutral[400]};
  border-radius: ${theme.radius.card};
  background-color: ${theme.colors.palette.white};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1);
  white-space: nowrap;

  &:hover {
    border-color: ${({ $invalid }) =>
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.strong};
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    gap: ${theme.spacing[1]};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
  }
`

export const InputWrap = styled.div<{ $invalid?: boolean }>`
  display: flex;
  min-width: 0;
  min-height: 3.5rem;
  flex: 1;
  align-items: center;
  border: 2px solid
    ${({ $invalid }) =>
      $invalid
        ? theme.colors.feedback.danger
        : theme.colors.palette.neutral[400]};
  border-radius: ${theme.radius.card};
  background-color: ${theme.colors.palette.white};
  padding-right: ${theme.spacing[5]};
  padding-left: ${theme.spacing[5]};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1);

  &:focus-within {
    border-color: ${({ $invalid }) =>
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.strong};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding-right: ${theme.spacing[4]};
    padding-left: ${theme.spacing[4]};
  }
`

export const Input = styled.input`
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};

  &::placeholder {
    color: ${theme.semantic.foreground.placeholder};
    font-weight: 400;
  }
`

export const ErrorText = styled.p`
  margin: ${theme.spacing[2]} 0 0;
  color: ${theme.colors.feedback.danger};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const CountryPopover = styled.div`
  position: absolute;
  z-index: 3;
  top: calc(100% + ${theme.spacing[2]});
  left: 0;
  width: min(20rem, calc(100vw - 3rem));
  overflow: hidden;
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background-color: ${theme.colors.palette.white};
  box-shadow:
    0 10px 30px ${alpha(theme.colors.palette.neutral[900], 0.1)},
    0 2px 6px ${alpha(theme.colors.palette.neutral[900], 0.06)};
`

export const CountrySearch = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${theme.colors.border.subtle};
  outline: 0;
  padding: ${theme.spacing[4]};
  color: ${theme.colors.text.primary};

  &:focus-visible {
    box-shadow: inset 0 -2px 0 ${theme.colors.text.primary};
  }
`

export const CountryList = styled.div`
  max-height: 16rem;
  overflow-y: auto;
`

export const CountryRow = styled(Pressable)<{ $active: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: ${theme.spacing[3]};
  border: 0;
  background-color: ${({ $active }) =>
    $active ? theme.colors.accent.primaryTint : theme.colors.palette.white};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  text-align: left;

  &:hover {
    background-color: ${theme.colors.palette.neutral[100]};
  }
`

export const CountryName = styled.span`
  flex: 1;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`

export const CountryDial = styled.span`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  font-variant-numeric: tabular-nums;
`
