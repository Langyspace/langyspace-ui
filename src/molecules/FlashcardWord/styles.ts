import { flashcardWordLayout } from '../../internal/flashcardWordLayout'
import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-word',
})`
  ${flashcardWordLayout}
`

export const Word = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardword-word',
})`
  color: var(--fc-ink);
  font-size: var(--fc-word-font-size);
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0;
  line-height: 1.05;
`

export const Rule = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardword-rule',
})`
  width: 1.875rem;
  height: 0.1875rem;
  border-radius: ${token.radiusPill};
  background: var(--fc-pink);
`

export const Phonetic = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardword-phonetic',
})`
  color: var(--fc-muted);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: ${token.typographyFontSizeSm};
`

export const Example = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardword-example',
})`
  max-width: 16rem;
  color: var(--fc-muted);
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightMedium};
  line-height: 1.45;
`
