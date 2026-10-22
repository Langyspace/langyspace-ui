import { styled } from 'styled-components'
import { actionRecipe } from '../../foundations/actions/recipe'
import type { ActionRecipeStyleProps } from '../../foundations/actions/types'
import type { ActionLinkVariant } from './ActionLink.types'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

interface ActionLinkStyleProps extends ActionRecipeStyleProps {
  $variant: ActionLinkVariant
}

export const ActionLink = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-action-link',
})<ActionLinkStyleProps>`
  ${actionRecipe}
`
