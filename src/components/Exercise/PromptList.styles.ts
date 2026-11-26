import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { revealContentMotion } from '../../foundations/motion/reveal'
import { resolveButtonsTheme } from '../../foundations/theme/resolveTheme'
import { recipe } from './Exercise.shared.styles'
import {
  PromptTrigger,
  PromptAnswer,
  GuidanceContent,
} from './RevealCard.styles'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-question-list',
})<{ $compact: boolean }>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  min-width: 0;
  gap: ${theme.spacing[2]};
  width: 100%;
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => recipe(p).foreground};
`

export const PromptList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  min-width: 0;
  width: 100%;
  gap: ${theme.spacing[2]};
`

export const Prompt = styled.li<{ $numbered?: boolean; $compact: boolean }>`
  display: grid;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  gap: ${theme.spacing[2]};
  padding: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])}
    ${theme.spacing[4]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).surface};
  p {
    margin: 0;
  }
  ${PromptTrigger} {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  ${PromptAnswer} {
    margin-inline-start: ${(p) => (p.$numbered ? `calc(${theme.spacing[6]} + ${theme.spacing[3]})` : '0')};
    font-size: ${theme.typography.fontSize.md};
    min-block-size: 0;
    &[aria-hidden='true'] {
      display: none;
    }
  }
  ${GuidanceContent}:not(:has([aria-hidden='false'])) {
    display: none;
  }
`

export const Number = styled.span`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => resolveButtonsTheme(p).brand.background};
  color: ${(p) => resolveButtonsTheme(p).brand.color};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
`

export const Guidance = styled.p<{ $numbered: boolean }>`
  padding-inline-start: ${(p) => (p.$numbered ? `calc(${theme.spacing[6]} + ${theme.spacing[3]})` : '0')};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  &[role='status'] {
    ${revealContentMotion}
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`

export const PromptQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-width: 0;
  min-height: ${theme.spacing[8]};
  p {
    flex: 1;
    min-width: 0;
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.lg};
  }
`
