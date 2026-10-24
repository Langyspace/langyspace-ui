import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

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
  gap: ${theme.spacing[3]};
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
  gap: ${theme.spacing[2]};
  color: var(--fc-ink);
  font-size: 0.9375rem;
  font-weight: ${theme.typography.fontWeight.bold};
`

export const Phonetic = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-phonetic',
})`
  margin-top: -0.375rem;
  color: var(--fc-muted-2);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: ${theme.typography.fontSize.xs};
`

export const Divider = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-divider',
})`
  width: 2.125rem;
  height: 0.125rem;
  border-radius: ${theme.radius.pill};
  background: ${alpha(theme.colors.palette.accent.pink, 0.25)};
`

export const Translation = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-translation',
})`
  color: var(--fc-ink);
  font-size: var(--fc-back-translation-size);
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0;
  line-height: ${theme.typography.lineHeight.snug};
`

export const Example = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardback-example',
})`
  max-width: 15rem;
  color: var(--fc-muted);
  font-size: ${theme.typography.fontSize.sm};
  font-style: italic;
  line-height: 1.55;

  b {
    color: var(--fc-pink);
    font-style: normal;
    font-weight: ${theme.typography.fontWeight.semibold};
  }
`
