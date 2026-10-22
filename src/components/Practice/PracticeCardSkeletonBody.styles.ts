import { keyframes, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

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
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[4]};

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
  border-radius: ${theme.radius.pill};
  background: linear-gradient(
    90deg,
    ${theme.colors.palette.neutral[100]} 0%,
    ${theme.colors.palette.neutral[200]} 48%,
    ${theme.colors.palette.neutral[100]} 100%
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
  gap: ${theme.spacing[2]};

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
