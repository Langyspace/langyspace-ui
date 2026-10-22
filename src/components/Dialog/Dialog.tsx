import { ModalLayer } from '../../internal/ModalLayer/ModalLayer'
import { OverlayCloseButton } from '../IconButton/OverlayCloseButton'
import type { DialogProps } from './Dialog.types'

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
