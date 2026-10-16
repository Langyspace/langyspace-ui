import { styled } from 'styled-components'
import { compactPracticeLayout } from '../../internal/compactPracticeLayout'
import * as token from '../../foundations/tokenValues'
export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-flashcard-frame',
})`
  --fc-ink: ${token.colorContentDefault};
  --fc-ink-2: ${token.colorContentSecondary};
  --fc-muted: ${token.colorContentMuted};
  --fc-muted-2: ${token.colorContentMuted};
  --fc-line: ${token.colorSurfaceBorderSubtle};
  --fc-line-strong: ${token.colorNeutral300};
  --fc-pink: ${token.colorAccentDefault};
  --fc-pink-soft: ${token.colorStatusBrandBackground};
  --fc-pink-tint: ${token.colorAccentTint};
  --fc-bg-soft: ${token.colorNeutral50};
  --fc-paper: #fffdfb;
  --fc-green: ${token.colorStatusSuccessIndicator};
  --fc-green-soft: ${token.colorStatusSuccessBackground};
  --fc-amber: #d97706;
  --fc-amber-soft: #fff3e0;
  --fc-red: #e11d48;
  --fc-red-soft: #fef0f2;

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

  ${compactPracticeLayout}

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    width: min(100%, 44rem);
    --fc-footer-min-height: 0;
    --fc-front-padding: ${token.spacing3};
    --fc-back-padding: ${token.spacing3};
    --fc-image-panel-height: clamp(4rem, 20svh, 7rem);
    --fc-word-font-size: ${token.typographyFontSize2xl};

    > footer {
      min-height: 0;
      grid-column: 2;
      grid-row: 2;
      justify-content: center;
    }
  }
`
