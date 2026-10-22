import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Track = styled.div.withConfig({
  componentId: 'lsui-sc-practice-progress-bar',
})`
  height: 0.375rem;
  overflow: hidden;
  border-radius: ${theme.radius.pill};
  background: ${theme.colors.palette.neutral[200]};
`

// Width changes continuously, so it is an inline style instead of a new class per value.
export const Fill = styled.div.attrs<{ $progress: number }>(
  ({ $progress }) => ({
    style: { width: `${$progress * 100}%` },
  }),
)`
  height: 100%;
  border-radius: inherit;
  background: ${theme.colors.accent.primary};
  transition: width 0.52s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
