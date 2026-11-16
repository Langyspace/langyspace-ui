import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Columns).withConfig({
  componentId: 'lsui-sc-role-play-exercise',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Scene = styled(Common.Surface)`
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: ${theme.radius.xl};
  }
  > p {
    font-size: ${theme.typography.fontSize.lg};
    margin: 0;
  }
`
export const Step = styled(Pressable)<{ $done: boolean; $compact: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  border: 1.5px solid
    ${(p) => (p.$done ? theme.semantic.status.success.foreground : Common.recipe(p).border)};
  border-radius: ${theme.radius.xl};
  padding: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])}
    ${theme.spacing[4]};
  background: ${(p) => (p.$done ? theme.semantic.status.success.background : Common.recipe(p).surface)};
  color: ${(p) => (p.$done ? theme.semantic.status.success.foreground : Common.recipe(p).foreground)};
  font: inherit;
  font-size: ${(p) => (p.$compact ? theme.typography.fontSize.sm : 'inherit')};
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  min-height: 48px;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`
