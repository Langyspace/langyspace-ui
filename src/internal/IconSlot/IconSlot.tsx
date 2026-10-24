import * as Styled from './IconSlot.styles'
import type { IconSlotProps } from './IconSlot.types'

export function IconSlot({ icon }: IconSlotProps) {
  return icon ? <Styled.IconSlot>{icon}</Styled.IconSlot> : null
}
