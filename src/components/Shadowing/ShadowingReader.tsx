import type { ShadowingReaderProps } from './ShadowingReader.types'
import * as Styled from './ShadowingReader.styles'

export function ShadowingReader(props: ShadowingReaderProps) {
  return <Styled.Root {...props} data-ui-shadowing-reader="true" />
}
