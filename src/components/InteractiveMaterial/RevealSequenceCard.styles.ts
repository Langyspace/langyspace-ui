import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import { recipe } from './Material.shared.styles'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-reveal-sequence-card',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  min-width: 0;
  width: 100%;
  min-height: clamp(8rem, 24cqh, 12rem);
  padding: ${theme.spacing[3]};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.slides.panelRadius};
  background: ${(p) => recipe(p).canvas};
  color: ${(p) => recipe(p).foreground};
  font: inherit;
  text-align: center;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${(p) => recipe(p).accent};
    outline-offset: 3px;
  }
  &[aria-disabled='true'] {
    cursor: default;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  > b {
    font-family: ${theme.typography.fontFamily.sans};
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.md};
  }
  > img {
    min-height: 0;
    width: 100%;
    height: clamp(5rem, 16cqh, 8rem);
    object-fit: cover;
    border-radius: ${theme.radius.sm};
  }
  > span {
    font-weight: ${theme.typography.fontWeight.semibold};
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.35;
  }
`
