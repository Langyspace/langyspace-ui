import { styled } from 'styled-components'
import { TextareaInput } from '../Form/TextareaInput'
import * as token from '../../foundations/tokenValues'

export const Form = styled.form.withConfig({
  componentId: 'lsui-sc-message-composer',
})`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: ${token.spacing2};
`

export const InputRow = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: flex-end;
  gap: ${token.spacing2};
`

export const Input = styled(TextareaInput)`
  box-sizing: border-box;
  height: ${token.controlHeightLg};
  min-width: 0;
  min-height: ${token.controlHeightLg};
  max-height: 9rem;
  flex: 1 1 auto;
  overflow-y: auto;
  resize: none;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`

export const Support = styled.div`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${token.spacing1} ${token.spacing3};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: ${token.typographyLineHeightNormal};
`

export const Helper = styled.span`
  min-width: 0;
  flex: 1 1 12rem;
  overflow-wrap: anywhere;
`

export const Counter = styled.span<{ $invalid: boolean }>`
  margin-left: auto;
  color: ${({ $invalid }) =>
    $invalid ? token.colorFeedbackDangerStrong : 'inherit'};
  font-weight: ${({ $invalid }) =>
    $invalid
      ? token.typographyFontWeightSemibold
      : token.typographyFontWeightMedium};
  white-space: nowrap;
`

export const Error = styled.p`
  margin: 0;
  color: ${token.colorFeedbackDangerStrong};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  overflow-wrap: anywhere;
`
