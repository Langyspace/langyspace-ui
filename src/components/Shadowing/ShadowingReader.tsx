import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-reader',
})`
  display: flex;
  min-height: 16.5rem;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: safe center;
  gap: ${token.spacing3};
  overflow-y: auto;
  overscroll-behavior-y: contain;
  padding: 0.75rem 1.25rem;

  @media (max-width: 900px) {
    min-height: 0;
  }

  @media (max-width: 640px) {
    padding: 1.25rem 1.25rem;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: ${token.spacing5};
    padding-right: ${token.spacing8};
    padding-left: ${token.spacing8};
  }

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    grid-column: 1;
    grid-row: 2;
    min-height: 0;
  }
`

export type ShadowingReaderProps = ComponentPropsWithRef<'div'>

export function ShadowingReader(props: ShadowingReaderProps) {
  return <Root {...props} data-ui-shadowing-reader="true" />
}
