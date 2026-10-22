import { css, keyframes, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`

export const Row = styled.div.withConfig({
  componentId: 'lsui-sc-auth-token-digits',
})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: ${theme.spacing[2]};
  margin: ${theme.spacing[4]} 0 ${theme.spacing[6]};
`

export const Input = styled.input<{ $invalid: boolean; $isFilled: boolean }>`
  width: 100%;
  min-width: 0;
  max-width: 3.25rem;
  flex: 1 1 0;
  aspect-ratio: 1 / 1.1;
  border: 2px solid
    ${({ $invalid, $isFilled }) =>
      $invalid
        ? theme.colors.accent.primary
        : $isFilled
          ? theme.colors.palette.neutral[900]
          : theme.colors.palette.neutral[400]};
  border-radius: ${theme.radius.card};
  outline: 0;
  background-color: ${({ $invalid, $isFilled }) =>
    $invalid
      ? theme.colors.accent.primaryTint
      : $isFilled
        ? theme.colors.palette.neutral[100]
        : theme.colors.palette.white};
  color: ${theme.colors.palette.neutral[900]};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  transition:
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    transform ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  ${({ $invalid }) =>
    $invalid &&
    css`
      animation: ${shake} 350ms ease;
    `}

  &:focus {
    border-color: ${theme.colors.palette.neutral[900]};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 3.75rem;
    font-size: ${theme.typography.fontSize['3xl']};
  }
`
