import { createContext, useContext, useEffect, useState } from 'react'
import { ActionMenu } from '../../../src/components/ActionMenu/ActionMenu'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import type {
  MaterialStudentSelection,
  MaterialStudentSelectionProviderProps,
} from './MaterialStudentSelection.types'

const Context = createContext<MaterialStudentSelection | undefined>(undefined)

export function MaterialStudentSelectionProvider({
  materialKey,
  children,
}: MaterialStudentSelectionProviderProps) {
  const [selection, setSelection] =
    useState<Omit<MaterialStudentSelection, 'select'>>()
  useEffect(() => {
    setSelection(undefined)
    if (window.parent === window) return
    const receive = (event: MessageEvent) => {
      const data = event.data
      if (
        event.source !== window.parent ||
        event.origin !== window.location.origin ||
        data?.type !== 'langy.material.student-selection' ||
        data.version !== 1 ||
        data.materialKey !== materialKey ||
        data.sourceCommit !== __MATERIAL_SOURCE_COMMIT__ ||
        !Array.isArray(data.options) ||
        typeof data.status !== 'string' ||
        !(data.selectedId === null || typeof data.selectedId === 'string')
      )
        return
      const options = data.options.filter((item: unknown) => {
        if (
          !item ||
          typeof item !== 'object' ||
          !('id' in item) ||
          typeof item.id !== 'string' ||
          !('name' in item) ||
          typeof item.name !== 'string' ||
          !item.name.trim() ||
          item.name.length > 160
        )
          return false
        if (!('avatarUrl' in item) || item.avatarUrl === undefined) return true
        try {
          const url = new URL(String(item.avatarUrl))
          return url.protocol === 'https:' && !url.username && !url.password
        } catch {
          return false
        }
      })
      setSelection({
        options,
        selectedId: data.selectedId,
        status: data.status.slice(0, 200),
      })
    }
    window.addEventListener('message', receive)
    window.parent.postMessage(
      {
        type: 'langy.material.request-student-selection',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
    return () => window.removeEventListener('message', receive)
  }, [materialKey])
  const select = (id: string | null) => {
    window.parent.postMessage(
      {
        type: 'langy.material.select-student',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
        id,
      },
      window.location.origin,
    )
  }
  return (
    <Context.Provider value={selection ? { ...selection, select } : undefined}>
      {children}
    </Context.Provider>
  )
}

export function MaterialStudentSelectionMenu() {
  const context = useContext(Context)
  const selected = context?.options.find(
    (option) => option.id === context.selectedId,
  )
  return (
    <ActionMenu
      size="sm"
      triggerLabel={
        selected ? `Aluna: ${selected.name}. Trocar aluna` : 'Selecionar aluna'
      }
      triggerContent={
        <Avatar
          size="sm"
          initials={selected?.name.charAt(0).toUpperCase() ?? 'Yo'}
          imageUrl={selected?.avatarUrl}
          tone={selected ? 'brand' : 'neutral'}
        />
      }
      items={
        context
          ? [
              {
                id: 'none',
                label: 'Sem aluna · rascunho',
                onSelect: () => context.select(null),
              },
              ...context.options.map((option) => ({
                id: option.id,
                label: option.name,
                icon: (
                  <Avatar
                    size="xs"
                    initials={option.name.charAt(0).toUpperCase()}
                    imageUrl={option.avatarUrl}
                  />
                ),
                onSelect: () => context.select(option.id),
              })),
              ...(context.status
                ? [
                    {
                      id: 'status',
                      label: context.status,
                      disabled: true,
                      onSelect: () => {},
                    },
                  ]
                : []),
            ]
          : [
              {
                id: 'preview',
                label: 'Seleção de aluna disponível no portal',
                disabled: true,
                onSelect: () => {},
              },
            ]
      }
    />
  )
}
