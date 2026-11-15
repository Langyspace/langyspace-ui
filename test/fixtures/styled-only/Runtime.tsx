import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-500.css'
import '@fontsource/montserrat/latin-600.css'
import '@fontsource/montserrat/latin-700.css'
// Local browser contract fixture; no product services, providers or remote requests.
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { ActionMenu } from '../../../src/components/ActionMenu/ActionMenu'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { Drawer } from '../../../src/components/Drawer/Drawer'
import { Button } from '../../../src/components/Button/Button'
import { MessageComposer } from '../../../src/components/Message/MessageComposer'
import * as Styled from './Runtime.styles'

export default function RuntimeFixture() {
  const [parent, setParent] = useState(false)
  const [child, setChild] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [value, setValue] = useState('')
  const [submissions, setSubmissions] = useState(0)
  const [selection, setSelection] = useState('Nenhuma ação')
  const items = [
    {
      id: 'open',
      label: 'Abrir registro',
      onSelect: () => setSelection('Registro aberto'),
    },
    {
      id: 'disabled',
      label: 'Indisponível',
      disabled: true,
      onSelect: () => setSelection('Inválido'),
    },
    {
      id: 'archive',
      label: 'Arquivar registro',
      tone: 'danger' as const,
      onSelect: () => setSelection('Registro arquivado'),
    },
  ]
  return (
    <>
      <GlobalStyles />
      <Styled.Page tabIndex={-1}>
        <h1>Contratos locais de apresentação</h1>
        <Styled.Toolbar>
          <Button onClick={() => setParent(true)}>Abrir modal</Button>
          <Button onClick={() => setDrawer(true)}>Abrir drawer</Button>
          <ActionMenu items={items} triggerLabel="Ações locais" />
        </Styled.Toolbar>
        <output data-selection>{selection}</output>
        <MessageComposer
          onSubmit={() => {
            setSubmissions((count) => count + 1)
            setValue('')
          }}
          onValueChange={setValue}
          submitIcon={<span aria-hidden>↑</span>}
          submitLabel="Enviar mensagem local"
          textareaLabel="Mensagem local"
          value={value}
        />
        <output data-submissions>{submissions} envios locais</output>
        <Styled.LongContent>
          Conteúdo de fundo para verificar trava e retorno da rolagem.
        </Styled.LongContent>
        <Dialog
          open={parent}
          onClose={() => setParent(false)}
          closeLabel="Fechar modal pai"
          title="Modal pai"
        >
          <Styled.Content>
            <Button onClick={() => setChild(true)}>Abrir modal filho</Button>
            <ActionMenu items={items} triggerLabel="Ações do modal" />
            <Button>Última ação do pai</Button>
          </Styled.Content>
          <Dialog
            open={child}
            onClose={() => setChild(false)}
            closeLabel="Fechar modal filho"
            title="Modal filho"
          >
            <Button>Última ação do filho</Button>
          </Dialog>
        </Dialog>
        <Drawer
          open={drawer}
          onClose={() => setDrawer(false)}
          closeLabel="Fechar drawer local"
          title="Drawer local"
        >
          <Styled.LongContent>
            Conteúdo longo para rolagem dentro do painel.
          </Styled.LongContent>
          <Button>Última ação do drawer</Button>
        </Drawer>
      </Styled.Page>
    </>
  )
}
const root = document.getElementById('root')
if (!root) throw new Error('styled_fixture_root_missing')
createRoot(root).render(<RuntimeFixture />)
