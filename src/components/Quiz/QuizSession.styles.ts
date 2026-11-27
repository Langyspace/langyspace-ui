import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'
import { Button } from '../Button/Button'

/** Same session recipes as the Student quiz, now owned once by the UI Library. */
export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-quiz-session',
})`
  --quiz-ink: ${theme.colors.palette.neutral[900]};
  --quiz-muted: ${theme.colors.palette.neutral[600]};
  --quiz-muted-2: ${theme.colors.palette.neutral[500]};
  --quiz-line: ${theme.colors.palette.neutral[300]};
  --quiz-line-strong: ${theme.colors.palette.neutral[400]};
  --quiz-bg-soft: ${theme.colors.surface.muted};
  --quiz-green: ${theme.colors.feedback.success};
  --quiz-green-soft: ${theme.colors.feedback.successSubtle};
  --quiz-red: ${theme.colors.palette.extended.red600};
  --quiz-red-soft: ${theme.colors.palette.extended.red50};
  display: flex;
  width: min(100%, 30rem);
  flex-direction: column;
  gap: ${theme.spacing[3]};
  margin: 0 auto;
  color: var(--quiz-ink);
`
export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[5]} ${theme.spacing[5]} ${theme.spacing[4]};
  border: 1px solid var(--quiz-line);
  border-radius: 1.5rem;
  background: ${theme.colors.surface.canvas};
  box-shadow:
    0 10px 34px ${alpha(theme.colors.palette.neutral[900], 0.07)},
    0 2px 6px ${alpha(theme.colors.palette.neutral[900], 0.04)};
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing[3]};
    padding: ${theme.spacing[4]};
    border-radius: 1.25rem;
  }
`
export const Prompt = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};
`
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`
export const Action = styled.div`
  padding-top: ${theme.spacing[1]};
  text-align: center;
  .hint {
    margin: 0;
    color: var(--quiz-muted-2);
    font-size: ${theme.typography.fontSize.xs};
  }
  .hint kbd {
    margin: 0 0.15rem;
    padding: 0 0.5rem;
    border: 1px solid var(--quiz-line-strong);
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.surface.subtle};
    color: var(--quiz-muted);
    font-size: 0.6875rem;
  }
`
export const Next = styled(Button).attrs({ size: 'sm', variant: 'brand' })`
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    width: 100%;
  }
`
