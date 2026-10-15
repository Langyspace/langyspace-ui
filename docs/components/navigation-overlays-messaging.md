# Navegação, camadas e mensagens

A composição é JSX explícito. Links navegam; botões executam comandos. Estado de rota, permissões, fila de mensagens e notificações permanecem nos produtos.

## Menu de ações

```tsx
import { ActionMenu } from '@langyspace/ui'

interface RecordActionsProps {
  onOpen: () => void
  onArchive: () => void
  archiving: boolean
}

export function RecordActions({
  onOpen,
  onArchive,
  archiving,
}: RecordActionsProps) {
  return (
    <ActionMenu
      triggerLabel="Ações do registro"
      items={[
        { id: 'open', label: 'Abrir', onSelect: onOpen },
        {
          id: 'archive',
          label: 'Arquivar',
          tone: 'danger',
          isLoading: archiving,
          onSelect: onArchive,
        },
      ]}
    />
  )
}
```

O componente público mostra a estrutura React do gatilho e do menu. O hook privado useActionMenu contém somente o ciclo da interação: controle de abertura, posição, foco, teclado e listeners. Não interpreta entidades, permissões ou comandos do produto. A coleção de ações não é um schema de página.

## Conteúdo modal

```tsx
import { useState } from 'react'
import { Button, Dialog } from '@langyspace/ui'

export function HelpDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Ajuda</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Precisa de ajuda?"
        closeLabel="Fechar ajuda"
        footer={<Button onClick={() => setOpen(false)}>Entendi</Button>}
      >
        <p>Fale com a equipe pelo canal indicado no seu portal.</p>
      </Dialog>
    </>
  )
}
```

Dialog e Drawer usam o mesmo núcleo privado de modalidade. O backdrop cobre o viewport; uma captura fullPage pode conter conteúdo fora desse viewport. Para validar cobertura, medir a janela visível e testar rolagem, páginas longas e ancestrais com transform no produto. Não alterar a opacidade para corrigir um problema de posicionamento.

## Refs do React 19

SearchInput e ActionMenu precisam de uma ref interna e outra do consumidor. O hook privado useMergedRef preserva a identidade entre renders, executa o cleanup retornado por callback refs e limpa refs de objeto. Nenhuma prop pública foi criada; os outros componentes continuam encaminhando refs diretamente.

## BottomNavigation

Navegação móvel fixa com safe area.

Contrato: children e atributos/ref de nav.

Cuidados: Fornecer nome à região e usar BottomNavigationLink com href e aria-current. Reservar no shell espaço para a barra; visível até 900px.

## BottomNavigationLink

Destino da navegação móvel.

Contrato: children e atributos/ref de a; seleção por aria-current.

Cuidados: Fornecer href real e ícone decorativo. O Router adapta a navegação no produto; a biblioteca preserva a âncora e o foco.

## FilterPills

Escolha única de filtro em botões com contagens opcionais.

Contrato: options/value/onChange tipados; counts, size e overflow.

Cuidados: Não representa abas com painéis. Usar nome de grupo e accessibleLabel para opções com conteúdo não textual; manter filtros e contagens no produto.

## FilterSelect

Filtro nativo compacto composto por CompoundControl e SelectInput.

Contrato: children com options, size e atributos/ref de select.

Cuidados: FieldRoot fornece associação de label/feedback. className pertence à superfície; ref e eventos pertencem ao select. Não implementar lista customizada por aparência.

## FilterToolbar

Agrupa os controles que filtram uma mesma coleção.

Contrato: children, nome acessível e atributos/ref de div.

Cuidados: Não recebe configuração de filtros. O produto compõe campos, busca e seleção; quebra de linha até 900px mantém o fluxo.

## NavigationButton

Comando no contexto da navegação, sem mudança de destino por href.

Contrato: children, type e atributos/ref de button.

Cuidados: Usar NavigationLink para destinos. Estado atual usa aria-current; não duplicar classes privadas de seleção no produto.

## NavigationLink

Destino da navegação lateral.

Contrato: href obrigatório, children e atributos/ref de a.

Cuidados: Manter abrir em nova aba e teclado nativos na integração com Router. A biblioteca não interpreta rotas nem permissões.

## SegmentedControl

Seleção compacta entre opções da mesma configuração.

Contrato: options/value/onChange; shape e surface com receitas finitas existentes.

Cuidados: Não é um tablist e não controla painéis. As duas superfícies têm consumidores reais; não criar um mode por produto.

## SidebarFrame

Superfície lateral persistente da aplicação.

Contrato: children e atributos/ref de aside.

Cuidados: Composição do conteúdo e breakpoint de ocultação pertencem ao shell. Preservar altura 100svh e a borda, sem mover roteamento para a biblioteca.

## SidebarNavigation

Região de links e comandos da barra lateral.

Contrato: children e atributos/ref de nav.

Cuidados: Fornecer nome acessível quando há múltiplas navegações. Separar seções com JSX do produto; sem schema de menus/permissões.

## ActionMenu

Menu contextual de ações com foco e posicionamento próprios.

Contrato: items, triggerLabel; open/onOpenChange ou defaultOpen; align e size.

Cuidados: Dados de ações são uma coleção legítima. IDs estáveis; tom danger fica ao final. Estados disabled/loading não executam ações. Enter, setas, Home/End, Escape e Tab preservam navegação e retorno de foco.

## Dialog

Diálogo modal centrado, com folha inferior no mobile.

Contrato: open/onClose, title/closeLabel, children; description, footer, dismissal, size e refs de foco.

Cuidados: O produto fornece ações e conteúdo. ModalLayer privado concentra portal, bloqueio de scroll, pilha e foco; não criar outro backdrop local ou medir screenshot de página inteira como viewport.

## Drawer

Painel modal lateral que ocupa a tela no mobile.

Contrato: Mesmo contrato semântico de Dialog, com anatomia lateral própria.

Cuidados: Não usar flag drawer em Dialog: os nomes públicos expressam a intenção e compartilham o núcleo privado. Escape/backdrop respeitam dismissal e somente a camada superior.

## ToastItem

Notificação acionável e transitória com conteúdo breve.

Contrato: message, title, actionLabel, icon, tone e atributos/ref de button.

Cuidados: Não aninhar outro comando em icon. O produto controla fila, duração e ação; live region fica no viewport ou no dono da fila. Não disparar anúncio automático duplicado.

## ToastViewport

Posiciona a pilha de notificações sem capturar cliques fora dos itens.

Contrato: children e atributos/ref de div.

Cuidados: O dono escolhe role/status e aria-live conforme prioridade. Não é um provider de notificações; expiração e persistência continuam no produto.

## ConnectionNotice

Aviso de conectividade dentro de uma conversa.

Contrato: children e atributos/ref de div.

Cuidados: O produto decide quando mostrar e se deve anunciar como status/alert. Não observar rede, persistência ou reconexão na biblioteca.

## ConversationRow

Comando de abertura de conversa com avatar, resumo e indicador.

Contrato: avatar, title, preview, meta, badge, unread e atributos/ref de button.

Cuidados: aria-current indica conversa atual; unread é destaque independente. Slots contêm conteúdo de leitura, sem comandos aninhados. Preview e data vêm prontos do produto.

## MessageBubble

Mensagem com remetente visual e entrega opcional.

Contrato: children, timestamp/dateTime, side e união status/statusLabel.

Cuidados: status exige texto de entrega. children é conteúdo React; sanitização de conteúdo externo e política de links são do produto. Preservar quebra de palavras longas e semântica article/time.

## MessageComposer

Formulário controlado de escrita e envio de mensagem.

Contrato: value/onValueChange/onSubmit, textareaLabel/submitLabel/submitIcon; feedback, maxLength, disabled e isSubmitting.

Cuidados: disabled bloqueia edição/envio; isSubmitting comunica atividade e mantém fila/rascunho interativos, como previsto nos dois consumidores. Enter envia, Shift+Enter quebra linha e composição IME não envia. Validação vazia/limite devolve foco.

## MessageThread

Estrutura de conversa com header, viewport rolável e footer.

Contrato: header, children, footer, viewportLabel/ref/onViewportScroll e atributos/ref da section.

Cuidados: viewportRef é o alvo do scroll; ref externo é da section. O produto mantém histórico, paginação, decisão de auto-scroll e assinatura de dados. Não criar um Chat com regras de negócio.

## MessageThreadHeader

Identificação da conversa e ações de navegação.

Contrato: title, subtitle, initials/imageUrl, leadingAction e trailingAction; atributos/ref de header.

Cuidados: Usar botões/links nomeados nos slots de ação. Busca de perfil, bloqueio de acesso e conversas arquivadas continuam no produto.

## NotificationItem

Um único comando para abrir uma notificação.

Contrato: avatar, title, description, meta, action e atributos/ref de button.

Cuidados: action é texto/ícone da chamada, não um segundo botão. Teacher já compõe texto e ChevronRight decorativo; a indicação some até 900px sem remover o nome principal.

## Composição de teclado

Um menu dentro de Dialog/Drawer trata Escape antes da camada: fecha o menu, devolve foco ao gatilho e mantém o painel. Tab escolhido pelo menu não é processado de novo pela armadilha de foco. Atualizar a coleção de ações com os mesmos IDs preserva o item habilitado que já tinha foco e usa o callback novo. Esses comportamentos têm regressões reproduzidas e testes de composição.
