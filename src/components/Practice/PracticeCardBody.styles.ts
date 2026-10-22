import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Body = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-body',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[4]};
`

export const Title = styled.h3<{ $completed: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? theme.colors.text.secondary : theme.colors.text.primary)};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
`

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};

  > span {
    min-width: 0;
  }
  > span:last-child {
    text-align: right;
  }
`
