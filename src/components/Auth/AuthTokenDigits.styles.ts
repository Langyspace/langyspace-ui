import { css, keyframes, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

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
  gap: ${token.spacing2};
  margin: ${token.spacing4} 0 ${token.spacing6};
`

export const Input = styled.input<{ $hasError: boolean; $isFilled: boolean }>`
  width: 100%;
  min-width: 0;
  max-width: 3.25rem;
  flex: 1 1 0;
  aspect-ratio: 1 / 1.1;
  border: 2px solid
    ${({ $hasError, $isFilled }) =>
      $hasError
        ? token.colorAccentDefault
        : $isFilled
          ? token.colorNeutral950
          : token.colorNeutral300};
  border-radius: ${token.radiusCard};
  outline: 0;
  background-color: ${({ $hasError, $isFilled }) =>
    $hasError
      ? token.colorAccentTint
      : $isFilled
        ? token.colorNeutral50
        : token.colorNeutral0};
  color: ${token.colorNeutral950};
  font-size: ${token.typographyFontSize2xl};
  font-weight: ${token.typographyFontWeightBold};
  text-align: center;
  transition:
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    transform ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

  ${({ $hasError }) =>
    $hasError &&
    css`
      animation: ${shake} 350ms ease;
    `}

  &:focus {
    border-color: ${token.colorNeutral950};
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

  @media (min-width: 768px) {
    max-width: 3.75rem;
    font-size: ${token.typographyFontSize3xl};
  }
`
