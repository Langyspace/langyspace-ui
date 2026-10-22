import { styled } from 'styled-components'
import { TextareaInput } from '../Form/TextareaInput'
import { theme } from '../../foundations/theme/theme'

export const Form = styled.form.withConfig({
  componentId: 'lsui-sc-message-composer',
})`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`

export const InputRow = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: flex-end;
  gap: ${theme.spacing[2]};
`

export const Input = styled(TextareaInput)`
  box-sizing: border-box;
  height: ${theme.sizes.control.lg};
  min-width: 0;
  min-height: ${theme.sizes.control.lg};
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
  gap: ${theme.spacing[1]} ${theme.spacing[3]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Helper = styled.span`
  min-width: 0;
  flex: 1 1 12rem;
  overflow-wrap: anywhere;
`

export const Counter = styled.span<{ $invalid: boolean }>`
  margin-left: auto;
  color: ${({ $invalid }) =>
    $invalid ? theme.semantic.status.danger.foreground : 'inherit'};
  font-weight: ${({ $invalid }) =>
    $invalid
      ? theme.typography.fontWeight.semibold
      : theme.typography.fontWeight.medium};
  white-space: nowrap;
`

export const Error = styled.p`
  margin: 0;
  color: ${theme.semantic.status.danger.foreground};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`
