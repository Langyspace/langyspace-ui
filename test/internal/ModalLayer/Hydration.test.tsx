import { act, screen } from '@testing-library/react'
import { hydrateRoot, type Root } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { Drawer } from '../../../src/components/Drawer/Drawer'

describe.each([
  ['dialog', Dialog],
  ['drawer', Drawer],
] as const)('%s hydration', (_kind, Overlay) => {
  it('activates an initially open server-rendered layer and restores document state on unmount', async () => {
    const appRoot = document.createElement('div')
    appRoot.id = 'root'
    document.body.append(appRoot)
    const content = (
      <Overlay closeLabel="Fechar" onClose={() => undefined} open title="Ajuda">
        <button type="button">Confirmar</button>
      </Overlay>
    )
    appRoot.innerHTML = renderToString(content)
    let root: Root | undefined

    try {
      await act(async () => {
        root = hydrateRoot(appRoot, content)
      })

      expect(screen.getByRole('dialog', { name: 'Ajuda' })).toBeVisible()
      expect(appRoot.inert).toBe(true)
      expect(document.body.style.overflow).toBe('hidden')
      expect(screen.getByRole('button', { name: 'Fechar' })).toHaveFocus()
    } finally {
      await act(async () => {
        root?.unmount()
      })
      appRoot.remove()
    }

    expect(document.body.style.overflow).not.toBe('hidden')
  })
})
