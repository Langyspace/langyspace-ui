import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-back',
})`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: var(--fc-back-padding);
  text-align: center;

  .en {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--fc-ink);
    font-size: 0.9375rem;
    font-weight: 700;
  }

  .phonetic {
    margin-top: -0.375rem;
    color: var(--fc-muted-2);
    font-family:
      'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.75rem;
  }

  .divider {
    width: 2.125rem;
    height: 0.125rem;
    border-radius: 999px;
    background: rgba(255, 31, 92, 0.25);
  }

  .translation {
    color: var(--fc-ink);
    font-size: var(--fc-back-translation-size);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.25;
  }

  .example {
    max-width: 15rem;
    color: var(--fc-muted);
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.55;

    b {
      color: var(--fc-pink);
      font-style: normal;
      font-weight: 600;
    }
  }
`
