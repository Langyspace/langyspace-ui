import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { expect, it } from 'vitest'
import { ActionMenu } from '../../../src/components/ActionMenu/ActionMenu'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { modalScrollLockAttribute } from '../../../src/internal/ModalLayer/stack'

it('keeps private menu/modal presentation out of the public server-rendering path', () => {
  const sheet = new ServerStyleSheet()
  try {
    const items = [{ id: 'open', label: 'Abrir', onSelect: () => undefined }]
    const html = renderToString(
      sheet.collectStyles(
        <>
          <ActionMenu defaultOpen items={items} triggerLabel="Menu1" />
          <ActionMenu defaultOpen items={items} triggerLabel="Menu2" />
          <Dialog
            open
            closeLabel="Fechar1"
            title="Modal1"
            onClose={() => undefined}
          >
            Conteúdo
          </Dialog>
          <Dialog
            open
            closeLabel="Fechar2"
            title="Modal2"
            onClose={() => undefined}
          >
            Conteúdo
          </Dialog>
        </>,
      ),
    )
    expect(html).toContain('Menu1')
    expect(html).toContain('Menu2')
    expect(html).not.toContain('data-ui-action-menu')
    expect(html).not.toContain('data-ui-modal-layer')
    expect(sheet.getStyleTags()).not.toContain(modalScrollLockAttribute)
  } finally {
    sheet.seal()
  }
})
