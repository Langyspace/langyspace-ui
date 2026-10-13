import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Body = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-body',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
  padding: ${tokens.spacing[4]};
`

export const Title = styled.h3<{ $completed: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? tokens.color.content.secondary : tokens.color.content.default)};
  font-size: ${tokens.typography.fontSize.md};
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: ${tokens.typography.lineHeight.snug};
`

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${tokens.spacing[2]};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  line-height: ${tokens.typography.lineHeight.snug};

  > span {
    min-width: 0;
  }
  > span:last-child {
    text-align: right;
  }
`
