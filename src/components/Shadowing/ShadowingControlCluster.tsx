import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-cluster',
})`
  display: flex;
  width: min(22rem, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${token.spacing4};

  @media (max-width: 640px) {
    width: 100%;
    gap: ${token.spacing4};
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    width: min(28rem, 100%);
  }
`

export type ShadowingControlClusterProps = ComponentPropsWithRef<'div'>

export function ShadowingControlCluster(props: ShadowingControlClusterProps) {
  return <Root {...props} />
}
