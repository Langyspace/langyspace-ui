import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-metric-summary',
})`
  padding: 0.75rem;
  border-radius: 0.875rem;
  background: #fafaf9;
  text-align: center;

  [data-ui-metric-value] {
    color: #0a0a0a;
    font-size: 1.25rem;
    font-weight: 700;
  }

  [data-ui-metric-label] {
    margin-top: 0.125rem;
    color: #6b6b6b;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    min-width: 0;
    padding: 0.5rem 0.25rem;

    [data-ui-metric-value] {
      font-size: 1rem;
      line-height: 1.1;
    }

    [data-ui-metric-label] {
      margin-top: 0.0625rem;
      font-size: 0.5625rem;
      line-height: 1.1;
      white-space: nowrap;
    }
  }
`
