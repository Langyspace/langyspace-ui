export interface MaterialNotesEditorProps {
  materialKey: string
}
export interface MaterialNotesEditorModel {
  contextId: string
  value: string
  editRevision: number
  contextLabel: string
  statusLabel: string
  error?: string
  readOnly: boolean
  saving: boolean
  canSave: boolean
  canReload: boolean
  choices: { id: string; label: string }[]
}
