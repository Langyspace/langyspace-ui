export interface SlideNotesLabels {
  title?: string
  input?: string
  clear?: string
  close?: string
  placeholder?: string
}

/** Controlled free-form notes; the consumer owns draft persistence and the trigger. */
export interface SlideNotesProps {
  open: boolean
  value: string
  onChange: (value: string) => void
  onClose: () => void
  labels?: SlideNotesLabels
  className?: string
}
