import * as Styled from './ShadowingPanel.styles'

import type { ComponentPropsWithRef } from 'react'

export type ShadowingPanelProps = ComponentPropsWithRef<'div'>

export function ShadowingPanel(props: ShadowingPanelProps) {
  return <Styled.Root {...props} />
}
