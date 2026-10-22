import { styled } from 'styled-components'
import { compactPracticeLayout } from '../../internal/compactPracticeLayout'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-flashcard-frame',
})`
  --fc-ink: ${theme.colors.text.primary};
  --fc-ink-2: ${theme.colors.text.secondary};
  --fc-muted: ${theme.colors.text.muted};
  --fc-muted-2: ${theme.colors.text.muted};
  --fc-line: ${theme.colors.border.subtle};
  --fc-line-strong: ${theme.colors.palette.neutral[400]};
  --fc-pink: ${theme.colors.accent.primary};
  --fc-pink-soft: ${theme.semantic.status.brand.background};
  --fc-pink-tint: ${theme.colors.accent.primaryTint};
  --fc-bg-soft: ${theme.colors.palette.neutral[100]};
  --fc-paper: ${theme.colors.palette.extended.paperWarm};
  --fc-green: ${theme.semantic.status.success.indicator};
  --fc-green-soft: ${theme.semantic.status.success.background};
  --fc-amber: ${theme.colors.palette.feedback.warning};
  --fc-amber-soft: ${theme.colors.palette.extended.orange50};
  --fc-red: ${theme.colors.palette.extended.rose600};
  --fc-red-soft: ${theme.colors.palette.extended.rose50};

  display: flex;
  width: min(100%, 30rem);
  flex-direction: column;
  margin: 0 auto;
  overflow: visible;
  border: 0;
  border-radius: 0;
  color: var(--fc-ink);
  background: transparent;
  box-shadow: none;

  --fc-card-min-height: 22rem;
  --fc-card-fluid-height: 52svh;
  --fc-card-max-height: 27.875rem;
  --fc-stage-padding-block: 0.25rem 0.375rem;
  --fc-stage-padding-inline: 1.375rem;
  --fc-footer-min-height: 9.5rem;
  --fc-footer-padding-block: 0.75rem
    calc(var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px)) + 1rem);
  --fc-footer-padding-inline: 1.125rem;
  --fc-rate-row-gap: 0.5625rem;
  --fc-rate-question-margin: 0.75rem;
  --fc-front-padding: 1.375rem 1.375rem 1.125rem;
  --fc-back-padding: 1.625rem;
  --fc-image-panel-size: clamp(9.5rem, 23svh, 12.25rem);
  --fc-image-panel-width: 100%;
  --fc-image-panel-height: var(--fc-image-panel-size);
  --fc-card-image-size: min(100%, 11.25rem);
  --fc-word-zone-gap: 0.5rem;
  --fc-word-zone-justify: center;
  --fc-word-zone-margin-top: 0;
  --fc-word-zone-offset-y: 0;
  --fc-word-font-size: 2.125rem;
  --fc-back-translation-size: 1.6875rem;

  &:has(> header):has(> [data-ui-flashcard-stage]),
  &:has(> footer):has(> [data-ui-flashcard-stage]) {
    ${compactPracticeLayout}

    @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
      width: min(100%, 44rem);
      --fc-footer-min-height: 0;
      --fc-front-padding: ${theme.spacing[3]};
      --fc-back-padding: ${theme.spacing[3]};
      --fc-image-panel-height: clamp(4rem, 20svh, 7rem);
      --fc-word-font-size: ${theme.typography.fontSize['2xl']};

      > footer {
        min-height: 0;
        grid-column: 2;
        grid-row: 2;
        justify-content: center;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    &:has(> header):not(:has(> [data-ui-flashcard-stage])) {
      overflow: auto;

      > :not(header) {
        flex-shrink: 0;
      }
    }
  }
`
