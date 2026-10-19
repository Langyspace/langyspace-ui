import { ModalLayer } from '../../internal/ModalLayer'
import { OverlayCloseButton } from '../IconButton/OverlayCloseButton'

import type { OverlayShellProps } from '../../internal/ModalLayer/types'

export type DialogProps = OverlayShellProps

export function Dialog(props: DialogProps) {
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
      kind="dialog"
    />
  )
}

export type {
  OverlayDismissal as DialogDismissal,
  OverlayPanelProps as DialogPanelProps,
  OverlaySize as DialogSize,
} from '../../internal/ModalLayer/types'
