import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-word',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: var(--fc-word-zone-justify);
  gap: var(--fc-word-zone-gap);
  min-height: 0;
  margin-top: var(--fc-word-zone-margin-top);
  text-align: center;
  transform: translateY(var(--fc-word-zone-offset-y));

  .word {
    color: var(--fc-ink);
    font-size: var(--fc-word-font-size);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.05;
  }

  .rule {
    width: 1.875rem;
    height: 0.1875rem;
    border-radius: 999px;
    background: var(--fc-pink);
  }

  .phonetic {
    color: var(--fc-muted);
    font-family:
      'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.875rem;
  }

  .exampleHint {
    max-width: 16rem;
    color: var(--fc-muted);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.45;
  }
`
