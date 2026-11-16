import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-gap-fill-exercise',
})`
  color: ${(p) => Common.recipe(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
`
export const Line = styled(Common.Surface)<{ $active: boolean }>`
  gap: ${theme.spacing[2]};
  background: ${(p) => (p.$active ? `color-mix(in srgb, ${Common.recipe(p).accent} 12%, ${Common.recipe(p).canvas})` : Common.recipe(p).surface)};
  > p {
    margin: 0;
    font-size: ${theme.typography.fontSize.lg};
    font-weight: 500;
    line-height: 1.5;
  }
`
export const Gap = styled.span<{ $active: boolean }>`
  display: inline-block;
  min-width: ${theme.spacing[12]};
  border-bottom: 2px solid
    ${(p) => (p.$active ? Common.recipe(p).accent : Common.recipe(p).muted)};
  color: ${(p) => Common.recipe(p).accent};
  font-weight: 700;
`
