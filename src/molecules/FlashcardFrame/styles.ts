import { styled } from 'styled-components'
export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-flashcard-frame',
})`
  --fc-ink: #0a0a0a;
  --fc-ink-2: #2a2a2a;
  --fc-muted: #6b6b6b;
  --fc-muted-2: #9a9a9a;
  --fc-line: #ececea;
  --fc-line-strong: #d9d9d6;
  --fc-pink: #ff1f5c;
  --fc-pink-soft: #ffe1ec;
  --fc-pink-tint: #fff4f7;
  --fc-bg-soft: #fafaf9;
  --fc-paper: #fffdfb;
  --fc-green: #16a34a;
  --fc-green-soft: #dcfce7;
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
  --fc-footer-padding-block: 0.75rem calc(var(--safe-area-inset-bottom) + 1rem);
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
`
