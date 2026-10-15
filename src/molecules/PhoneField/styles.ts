import { Pressable } from '../../primitives/Pressable'
import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-phone-field',
})``

export const Label = styled.label`
  display: block;
  margin-bottom: ${token.spacing3};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Group = styled.div`
  position: relative;
  display: flex;
  min-width: 0;
  gap: ${token.spacing2};
`

export const CountryButton = styled(Pressable)<{
  $hasError?: boolean
  $isOpen: boolean
}>`
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  gap: ${token.spacing2};
  padding-right: ${token.spacing4};
  padding-left: ${token.spacing4};
  border: 2px solid
    ${({ $hasError, $isOpen }) =>
      $hasError
        ? token.colorFeedbackDanger
        : $isOpen
          ? token.colorSurfaceBorderStrong
          : token.colorNeutral300};
  border-radius: ${token.radiusCard};
  background-color: ${token.colorNeutral0};
  color: ${token.colorContentDefault};
  font-weight: ${token.typographyFontWeightSemibold};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1);
  white-space: nowrap;

  &:hover {
    border-color: ${({ $hasError }) =>
      $hasError ? token.colorFeedbackDanger : token.colorSurfaceBorderStrong};
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 360px) {
    gap: ${token.spacing1};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
  }
`

export const InputWrap = styled.div<{ $hasError?: boolean }>`
  display: flex;
  min-width: 0;
  min-height: 3.5rem;
  flex: 1;
  align-items: center;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? token.colorFeedbackDanger : token.colorNeutral300};
  border-radius: ${token.radiusCard};
  background-color: ${token.colorNeutral0};
  padding-right: ${token.spacing5};
  padding-left: ${token.spacing5};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1);

  &:focus-within {
    border-color: ${({ $hasError }) =>
      $hasError ? token.colorFeedbackDanger : token.colorSurfaceBorderStrong};
  }

  @media (max-width: 360px) {
    padding-right: ${token.spacing4};
    padding-left: ${token.spacing4};
  }
`

export const Input = styled.input`
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeLg};
  font-weight: ${token.typographyFontWeightMedium};

  &::placeholder {
    color: ${token.colorContentPlaceholder};
    font-weight: 400;
  }
`

export const ErrorText = styled.p`
  margin: ${token.spacing2} 0 0;
  color: ${token.colorFeedbackDanger};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export const CountryPopover = styled.div`
  position: absolute;
  z-index: 3;
  top: calc(100% + ${token.spacing2});
  left: 0;
  width: min(20rem, calc(100vw - 3rem));
  overflow: hidden;
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  background-color: ${token.colorNeutral0};
  box-shadow:
    0 10px 30px rgba(10, 10, 10, 0.1),
    0 2px 6px rgba(10, 10, 10, 0.06);
`

export const CountrySearch = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  outline: 0;
  padding: ${token.spacing4};
  color: ${token.colorContentDefault};

  &:focus-visible {
    box-shadow: inset 0 -2px 0 ${token.colorContentDefault};
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
  gap: ${token.spacing3};
  border: 0;
  background-color: ${({ $isActive }) =>
    $isActive ? token.colorAccentTint : token.colorNeutral0};
  padding: ${token.spacing3} ${token.spacing4};
  text-align: left;

  &:hover {
    background-color: ${token.colorNeutral50};
  }
`

export const CountryName = styled.span`
  flex: 1;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightMedium};
`

export const CountryDial = styled.span`
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  font-variant-numeric: tabular-nums;
`
