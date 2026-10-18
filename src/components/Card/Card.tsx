import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import { cardRecipe } from '../../foundations/surfaces/cardRecipe'

const Container = styled.div.withConfig({ componentId: 'lsui-sc-card' })`
  ${cardRecipe}
`

export type CardProps = ComponentPropsWithRef<'div'>

export function Card(props: CardProps) {
  return <Container {...props} data-ui-card="true" />
}
