import { keyframes, styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

const shimmer = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`

export const Body = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-skeleton-body',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
  padding: ${tokens.spacing[4]};

  > span:first-child {
    width: 72%;
    height: 1.125rem;
    margin-bottom: 0.125rem;
  }
  > span:last-child {
    width: 100%;
    height: 0.375rem;
  }
`

export const Line = styled.span`
  min-width: 0;
  border-radius: ${tokens.radius.pill};
  background: linear-gradient(
    90deg,
    ${tokens.color.neutral[50]} 0%,
    ${tokens.color.neutral[100]} 48%,
    ${tokens.color.neutral[50]} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Meta = styled.div`
  display: flex;
  min-height: 0.875rem;
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.spacing[2]};

  > span {
    height: 0.75rem;
  }
  > span:first-child {
    align-self: flex-start;
    width: 5.75rem;
  }
  > span:last-child {
    width: 4.75rem;
  }
`
