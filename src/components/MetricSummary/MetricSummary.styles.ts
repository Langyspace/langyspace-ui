import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import type { MetricSummaryVariant } from './MetricSummary.types'

const tile = css`
  border: 1px solid ${theme.colors.border.subtle};
  text-align: left;

  [data-ui-metric-value] {
    line-height: 1.1;
  }

  [data-ui-metric-label] {
    font-size: ${theme.typography.fontSize.xs};
    text-transform: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[3]};

    [data-ui-metric-value] {
      font-size: ${theme.typography.fontSize.xl};
    }

    [data-ui-metric-label] {
      font-size: ${theme.typography.fontSize.xs};
      white-space: normal;
    }
  }
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-metric-summary',
})<{ $variant: MetricSummaryVariant }>`
  padding: ${theme.spacing[3]};
  border-radius: ${theme.radius.card};
  background: ${theme.colors.palette.neutral[100]};
  text-align: center;

  [data-ui-metric-value] {
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  [data-ui-metric-label] {
    margin-top: 0.125rem;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize['2xs']};
    font-weight: ${theme.typography.fontWeight.semibold};
    text-transform: uppercase;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 0;
    padding: ${theme.spacing[2]} ${theme.spacing[1]};

    [data-ui-metric-value] {
      font-size: ${theme.typography.fontSize.md};
      line-height: 1.1;
    }

    [data-ui-metric-label] {
      margin-top: 0.0625rem;
      font-size: 0.5625rem;
      line-height: 1.1;
      white-space: nowrap;
    }
  }

  ${({ $variant }) => $variant === 'tile' && tile}
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-metric-value',
})`
  min-width: 0;
  overflow-wrap: anywhere;
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-metric-label',
})`
  min-width: 0;
  overflow-wrap: anywhere;
`
