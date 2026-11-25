import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { PromptTrigger, PromptAnswer } from './RevealCard.styles'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-question-list',
})<{ $compact: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  gap: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[4])};
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => recipe(p).foreground};
`

export const PromptList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  min-width: 0;
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
`

export const Prompt = styled.li<{ $numbered?: boolean; $compact: boolean }>`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[2]};
  padding: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])}
    ${theme.spacing[4]};
  &:not(:first-child) {
    border-top: 1px solid ${(p) => recipe(p).border};
  }
  p {
    margin: 0;
  }
  ${PromptTrigger} {
    font-size: ${theme.typography.fontSize.lg};
  }
  ${PromptAnswer} {
    margin-inline-start: ${(p) => (p.$numbered ? `calc(${theme.spacing[8]} + ${theme.spacing[3]})` : '0')};
    font-size: ${theme.typography.fontSize.md};
  }
`

export const Number = styled.span`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${theme.colors.palette.accent.pinkHover};
  color: ${theme.colors.palette.white};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const Guidance = styled.p<{ $numbered: boolean }>`
  padding-inline-start: ${(p) => (p.$numbered ? `calc(${theme.spacing[8]} + ${theme.spacing[3]})` : '0')};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Footer = styled.div`
  margin-block-start: auto;
  display: flex;
  justify-content: center;
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
    font-weight: ${theme.typography.fontWeight.semibold};
    font-size: ${theme.typography.fontSize.lg};
  }
`
