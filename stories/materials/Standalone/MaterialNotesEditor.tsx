import { useEffect, useRef, useState } from 'react'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import { MaterialTheme } from '../shared/MaterialTheme'
import type {
  MaterialNotesEditorModel,
  MaterialNotesEditorProps,
} from './MaterialNotesEditor.types'
const initial: MaterialNotesEditorModel = {
  contextId: '',
  value: '',
  editRevision: 0,
  contextLabel: 'Anotação da aula',
  statusLabel: 'Carregando…',
  readOnly: true,
  saving: false,
  canSave: false,
  canReload: false,
  choices: [],
}
export function MaterialNotesEditor({ materialKey }: MaterialNotesEditorProps) {
  const [model, setModel] = useState(initial)
  const edits = useRef({ contextId: '', revision: 0 })
  const send = (action: string, fields: Record<string, unknown> = {}) =>
    window.parent.postMessage(
      {
        type: 'langy.material.notes.action',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
        contextId: model.contextId,
        requestId: crypto.randomUUID(),
        action,
        ...fields,
      },
      window.location.origin,
    )
  useEffect(() => {
    document.title = 'Notes · Langy'
    const receive = (event: MessageEvent<unknown>) => {
      if (
        event.source !== window.parent ||
        event.origin !== window.location.origin
      )
        return
      const data = event.data
      if (
        !data ||
        typeof data !== 'object' ||
        !('type' in data) ||
        data.type !== 'langy.material.notes.state' ||
        !('sourceCommit' in data) ||
        data.sourceCommit !== __MATERIAL_SOURCE_COMMIT__ ||
        !('materialKey' in data) ||
        data.materialKey !== materialKey ||
        !('version' in data) ||
        data.version !== 1 ||
        !('model' in data) ||
        !data.model ||
        typeof data.model !== 'object'
      )
        return
      const next = data.model as MaterialNotesEditorModel
      if (
        typeof next.contextId !== 'string' ||
        typeof next.value !== 'string' ||
        typeof next.editRevision !== 'number' ||
        !Number.isSafeInteger(next.editRevision) ||
        next.editRevision < 0 ||
        typeof next.contextLabel !== 'string' ||
        typeof next.statusLabel !== 'string' ||
        typeof next.readOnly !== 'boolean' ||
        typeof next.saving !== 'boolean' ||
        typeof next.canSave !== 'boolean' ||
        typeof next.canReload !== 'boolean' ||
        !Array.isArray(next.choices) ||
        next.choices.some(
          (choice) =>
            !choice ||
            typeof choice.id !== 'string' ||
            typeof choice.label !== 'string',
        )
      )
        return
      if (edits.current.contextId !== next.contextId)
        edits.current = {
          contextId: next.contextId,
          revision: next.editRevision,
        }
      else
        edits.current.revision = Math.max(
          edits.current.revision,
          next.editRevision,
        )
      const localRevision = edits.current.revision
      setModel((previous) =>
        next.editRevision < localRevision &&
        previous.contextId === next.contextId
          ? { ...next, value: previous.value }
          : next,
      )
    }
    window.addEventListener('message', receive)
    window.parent.postMessage(
      {
        type: 'langy.material.notes.ready',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
    return () => window.removeEventListener('message', receive)
  }, [materialKey])
  return (
    <MaterialTheme>
      <SlideNotesWindow
        {...model}
        onChange={(value) => {
          const editRevision = ++edits.current.revision
          setModel((previous) => ({ ...previous, value, editRevision }))
          send('change', { value, editRevision })
        }}
        onSave={() => send('save')}
        onReload={model.canReload ? () => send('reload') : undefined}
        onChoose={(id) => send('choose', { id })}
        onClose={() => send('close')}
      />
    </MaterialTheme>
  )
}
