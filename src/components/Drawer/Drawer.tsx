import { ModalLayer } from '../../internal/ModalLayer/ModalLayer'
import { OverlayCloseButton } from '../IconButton/OverlayCloseButton'
import type { DrawerProps } from './Drawer.types'

export function Drawer(props: DrawerProps) {
  return (
    <ModalLayer
      {...props}
      closeControl={
        <OverlayCloseButton
          disabled={props.dismissal === 'blocked'}
          label={props.closeLabel}
          onClick={props.onClose}
        />
      }
      kind="drawer"
    />
  )
}
