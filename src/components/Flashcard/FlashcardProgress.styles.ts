import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Skeleton } from '../Skeleton/Skeleton'

export const Track = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-progress-track',
})`
  min-width: 0;
  flex: 1;
  display: flex;
  gap: ${token.spacing1};
`

export const Segment = styled.span.withConfig({
  componentId: 'lsui-sc-flashcard-progress-segment',
  shouldForwardProp: (prop) => prop !== 'state',
})<{ state: 'pending' | 'current' | 'done' }>`
  position: relative;
  height: 0.3125rem;
  flex: 1;
  overflow: hidden;
  border-radius: ${token.radiusPill};
  background: #eeece8;

  &::after {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ state }) => (state === 'current' ? 'var(--fc-pink, #f10f4d)' : 'var(--fc-ink, #0a0a0a)')};
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
  color: var(--fc-muted-2, #6b6b6b);
  font-size: ${token.typographyFontSizeXs};
  font-variant-numeric: tabular-nums;
  font-weight: ${token.typographyFontWeightMedium};

  b {
    color: var(--fc-ink, #0a0a0a);
    font-weight: ${token.typographyFontWeightBold};
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
