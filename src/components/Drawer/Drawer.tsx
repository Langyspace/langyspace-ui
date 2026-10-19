import { ModalLayer } from '../../internal/ModalLayer'
import { OverlayCloseButton } from '../IconButton/OverlayCloseButton'

import type { OverlayShellProps } from '../../internal/ModalLayer/types'

export type DrawerProps = OverlayShellProps

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

export type {
  OverlayDismissal as DrawerDismissal,
  OverlayPanelProps as DrawerPanelProps,
  OverlaySize as DrawerSize,
} from '../../internal/ModalLayer/types'
