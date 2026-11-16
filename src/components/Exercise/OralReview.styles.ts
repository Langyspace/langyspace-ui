import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-oral-review',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Card = styled(Common.Surface)`
  font-size: ${theme.typography.fontSize.lg};
`
export const Star = styled(Pressable)<{ $selected: boolean }>`
  min-width: 40px;
  min-height: 40px;
  border: 1px solid ${(p) => Common.recipe(p).border};
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$selected ? Common.recipe(p).accent : Common.recipe(p).canvas)};
  color: ${(p) => (p.$selected ? Common.recipe(p).canvas : Common.recipe(p).foreground)};
  font-size: 22px;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`
