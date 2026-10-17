import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-back',
})`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  gap: ${token.spacing3};
  padding: var(--fc-back-padding);
  text-align: center;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`

export const Term = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-term',
})`
  display: inline-flex;
  align-items: center;
  gap: ${token.spacing2};
  color: var(--fc-ink);
  font-size: 0.9375rem;
  font-weight: ${token.typographyFontWeightBold};
`

export const Phonetic = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-phonetic',
})`
  margin-top: -0.375rem;
  color: var(--fc-muted-2);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: ${token.typographyFontSizeXs};
`

export const Divider = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-divider',
})`
  width: 2.125rem;
  height: 0.125rem;
  border-radius: ${token.radiusPill};
  background: rgba(255, 31, 92, 0.25);
`

export const Translation = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-translation',
})`
  color: var(--fc-ink);
  font-size: var(--fc-back-translation-size);
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0;
  line-height: ${token.typographyLineHeightSnug};
`

export const Example = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-example',
})`
  max-width: 15rem;
  color: var(--fc-muted);
  font-size: ${token.typographyFontSizeSm};
  font-style: italic;
  line-height: 1.55;

  b {
    color: var(--fc-pink);
    font-style: normal;
    font-weight: ${token.typographyFontWeightSemibold};
  }
`
