export interface SlideNotesWindowProps {
  value: string
  onChange: (value: string) => void
  onSave?: () => void
  onReload?: () => void
  onClose: () => void
  contextLabel?: string
  statusLabel?: string
  error?: string
  readOnly?: boolean
  saving?: boolean
  canSave?: boolean
  choices?: readonly { id: string; label: string }[]
  onChoose?: (id: string) => void
}
