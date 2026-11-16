import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-minimal-pair-exercise',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Choices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
`
export const Choice = styled(Pressable)<{
  $feedback?: 'correct' | 'incorrect'
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: clamp(10px, 2.2cqh, 20px) 12px;
  min-width: 0;
  border: 2px solid
    ${(p) => (p.$feedback === 'correct' ? theme.semantic.status.success.foreground : p.$feedback === 'incorrect' ? Common.recipe(p).accent : Common.recipe(p).border)};
  background: ${(p) => (p.$feedback === 'correct' ? theme.semantic.status.success.background : Common.recipe(p).surface)};
  border-radius: 20px;
  color: ${(p) => (p.$feedback === 'correct' ? theme.semantic.status.success.foreground : Common.recipe(p).foreground)};
  cursor: pointer;
  img {
    width: clamp(52px, 13cqh, 140px);
    height: clamp(52px, 13cqh, 140px);
    object-fit: contain;
  }
  b {
    font-family: ${theme.slides.displayFontFamily};
    font-size: clamp(20px, 3.2cqh, 28px);
    line-height: 1.3;
  }
  span {
    font-size: 13px;
    color: ${(p) => (p.$feedback === 'correct' ? theme.semantic.status.success.foreground : Common.recipe(p).muted)};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
  &:disabled {
    cursor: default;
  }
`
export const Score = styled.span<{ $correct: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$correct ? theme.semantic.status.success.foreground : Common.recipe(p).accent)};
`
