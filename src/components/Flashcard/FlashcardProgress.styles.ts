import { styled } from 'styled-components'
import { Skeleton } from '../Skeleton/Skeleton'
import { theme } from '../../foundations/theme/theme'

export const Track = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-progress-track',
})`
  min-width: 0;
  flex: 1;
  display: flex;
  gap: ${theme.spacing[1]};
`

export const Segment = styled.span.withConfig({
  componentId: 'lsui-sc-flashcard-progress-segment',
  shouldForwardProp: (prop) => prop !== 'state',
})<{ state: 'pending' | 'current' | 'done' }>`
  position: relative;
  height: 0.3125rem;
  flex: 1;
  overflow: hidden;
  border-radius: ${theme.radius.pill};
  background: ${theme.colors.palette.extended.stone200};

  &::after {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ state }) => (state === 'current' ? `var(--fc-pink, ${theme.colors.palette.extended.pink600})` : `var(--fc-ink, ${theme.colors.palette.neutral[900]})`)};
    content: '';
    transform: scaleX(
      ${({ state }) => (state === 'done' ? 1 : state === 'current' ? 0.5 : 0)}
    );
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`

export const Counter = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-counter',
})`
  flex-shrink: 0;
  color: var(--fc-muted-2, ${theme.colors.palette.neutral[600]});
  font-size: ${theme.typography.fontSize.xs};
  font-variant-numeric: tabular-nums;
  font-weight: ${theme.typography.fontWeight.medium};

  b {
    color: var(--fc-ink, ${theme.colors.palette.neutral[900]});
    font-weight: ${theme.typography.fontWeight.bold};
  }
`

export const LoadingSegment = styled(Skeleton).withConfig({
  componentId: 'lsui-sc-flashcard-loading-segment',
})`
  height: 0.3125rem;
  flex: 1;
  border-radius: 999px;
`

export const LoadingCounter = styled(Skeleton).withConfig({
  componentId: 'lsui-sc-flashcard-loading-counter',
})`
  display: inline-block;
  width: 2.875rem;
  height: 0.75rem;
  border-radius: 999px;
`
