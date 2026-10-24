import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-flip-hint',
})`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 0.4375rem;
  padding-top: 0.375rem;
  color: var(--fc-muted-2);
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};

  svg {
    opacity: 0.7;
  }
`
