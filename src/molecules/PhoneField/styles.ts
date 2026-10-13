import { Pressable } from '../../primitives/Pressable'
import styled from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-phone-field',
})``

export const Label = styled.label`
  display: block;
  margin-bottom: ${tokens.spacing[3]};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Group = styled.div`
  position: relative;
  display: flex;
  min-width: 0;
  gap: ${tokens.spacing[2]};
`

export const CountryButton = styled(Pressable)<{
  $hasError?: boolean
  $isOpen: boolean
}>`
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  gap: ${tokens.spacing[2]};
  padding-right: ${tokens.spacing[4]};
  padding-left: ${tokens.spacing[4]};
  border: ${({ $hasError, $isOpen }) =>
    `${'2px'} ${'solid'} ${
      $hasError
        ? tokens.color.feedback.danger
        : $isOpen
          ? tokens.color.surfaceBorder.strong
          : tokens.color.neutral[300]
    }`};
  border-radius: ${tokens.radius.card};
  background-color: ${tokens.color.neutral[0]};
  color: ${tokens.color.content.default};
  font-weight: ${tokens.typography.fontWeight.semibold};
  transition: ${'color 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms cubic-bezier(0.2, 0, 0, 1), border-color 150ms cubic-bezier(0.2, 0, 0, 1)'};
  white-space: nowrap;

  &:hover {
    border-color: ${({ $hasError }) =>
      $hasError
        ? tokens.color.feedback.danger
        : tokens.color.surfaceBorder.strong};
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 360px) {
    gap: ${tokens.spacing[1]};
    padding-right: ${tokens.spacing[3]};
    padding-left: ${tokens.spacing[3]};
  }
`

export const InputWrap = styled.div<{ $hasError?: boolean }>`
  display: flex;
  min-width: 0;
  min-height: 3.5rem;
  flex: 1;
  align-items: center;
  border: ${({ $hasError }) =>
    `${'2px'} ${'solid'} ${
      $hasError ? tokens.color.feedback.danger : tokens.color.neutral[300]
    }`};
  border-radius: ${tokens.radius.card};
  background-color: ${tokens.color.neutral[0]};
  padding-right: ${tokens.spacing[5]};
  padding-left: ${tokens.spacing[5]};
  transition: ${'color 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms cubic-bezier(0.2, 0, 0, 1), border-color 150ms cubic-bezier(0.2, 0, 0, 1)'};

  &:focus-within {
    border-color: ${({ $hasError }) =>
      $hasError
        ? tokens.color.feedback.danger
        : tokens.color.surfaceBorder.strong};
  }

  @media (max-width: 360px) {
    padding-right: ${tokens.spacing[4]};
    padding-left: ${tokens.spacing[4]};
  }
`

export const Input = styled.input`
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.medium};

  &::placeholder {
    color: ${tokens.color.content.placeholder};
    font-weight: ${400};
  }
`

export const ErrorText = styled.p`
  margin: ${tokens.spacing[2]} 0 0;
  color: ${tokens.color.feedback.danger};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`

export const CountryPopover = styled.div`
  position: absolute;
  z-index: 3;
  top: calc(100% + ${tokens.spacing[2]});
  left: 0;
  width: min(20rem, calc(100vw - 3rem));
  overflow: hidden;
  border: ${`1px solid ${tokens.color.surfaceBorder.subtle}`};
  border-radius: ${tokens.radius.card};
  background-color: ${tokens.color.neutral[0]};
  box-shadow: ${'0 10px 30px rgba(10, 10, 10, 0.1), 0 2px 6px rgba(10, 10, 10, 0.06)'};
`

export const CountrySearch = styled.input`
  width: 100%;
  border: 0;
  border-bottom: ${`1px solid ${tokens.color.surfaceBorder.subtle}`};
  outline: 0;
  padding: ${tokens.spacing[4]};
  color: ${tokens.color.content.default};

  &:focus-visible {
    box-shadow: inset 0 -2px 0 ${tokens.color.content.default};
  }
`

export const CountryList = styled.div`
  max-height: 16rem;
  overflow-y: auto;
`

export const CountryRow = styled(Pressable)<{ $isActive: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: ${tokens.spacing[3]};
  border: 0;
  background-color: ${({ $isActive }) =>
    $isActive ? tokens.color.accent.tint : tokens.color.neutral[0]};
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  text-align: left;

  &:hover {
    background-color: ${tokens.color.neutral[50]};
  }
`

export const CountryName = styled.span`
  flex: 1;
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.medium};
`

export const CountryDial = styled.span`
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
  font-variant-numeric: tabular-nums;
`
