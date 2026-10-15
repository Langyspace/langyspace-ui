# @langyspace/ui

Componentes React compartilhados pelos cinco produtos Langy.space. Cada componente tem uma responsabilidade de apresentação ou interação; o produto fornece conteúdo, dados e ações.

Este checkout implementa o contrato **2.0.0**. A publicação está sujeita aos gates e ao aceite da revisão atual; consulte GitHub Releases para o artefato oficial. Os guias deste checkout descrevem sua própria revisão; consulte a [migração para 2.0](docs/components/migration-v2.md) antes de adotar os novos contratos.

## Instalação

Para a versão oficial atual:

```bash
pnpm add styled-components@^6.4.0 '@langyspace/ui@https://github.com/MarcosLaboriosi/langyspace-ui/releases/download/v2.0.0/langyspace-ui-2.0.0.tgz'
```

O candidato deve ser instalado pelo artefato imutável identificado na entrega, com sua integridade registrada. Não usar uma branch móvel ou um link local na dependência entregue.

React/React DOM19, styled-components6 e react-hook-form7 são peers. Não há import obrigatório de CSS nem ThemeProvider externo. A tipografia herda a fonte do produto. Algumas famílias têm composição própria documentada, como FlashcardFrame e seus filhos.

## Como o código deve ser lido

```tsx
import { ActionLink, Button } from '@langyspace/ui'

interface RecordActionsProps {
  listHref: string
  onSave: () => void
  saving: boolean
}

export function RecordActions({
  listHref,
  onSave,
  saving,
}: RecordActionsProps) {
  return (
    <>
      <Button isLoading={saving} onClick={onSave}>
        Salvar
      </Button>
      <ActionLink href={listHref} variant="secondary">
        Voltar
      </ActionLink>
    </>
  )
}
```

Comandos usam Button; navegação usa ActionLink ou um link semântico da família. Props nativas, refs e nomes acessíveis continuam no elemento correspondente. O exemplo não depende de um schema de renderização ou de flags por projeto.

Use children para conteúdo aberto e slots para regiões estáveis. Coleções de opções, ações, linhas e barras continuam como dados quando essa é a responsabilidade do componente. A biblioteca não implementa roteamento, fetching, permissões, billing, calendário de negócio ou persistência.

## Catálogo

O [índice de componentes](docs/components/index.md) liga cada export ao guia, à implementação e aos tipos. Os guias mostram propósito, contrato, composição e cuidados específicos.

| Família                                  | Guia                                                                 |
| ---------------------------------------- | -------------------------------------------------------------------- |
| Ações, campos e formulários              | [Escolha e composição](docs/components/controls.md)                  |
| Autenticação, identidade e documentos    | [Fluxos e anatomia](docs/components/auth-brand-documents.md)         |
| Estados, superfícies, listas e métricas  | [Composição de dados](docs/components/data-feedback.md)              |
| Navegação, menus, modais e mensagens     | [Interação e foco](docs/components/navigation-overlays-messaging.md) |
| Calendário e disponibilidade             | [Datas preparadas pelo produto](docs/components/calendar.md)         |
| Flashcards, quiz, shadowing e resultados | [Composição de prática](docs/components/practice.md)                 |

Não unifique contratos só porque se parecem. MetricSummary e StatCard, por exemplo, têm hierarquias diferentes. Não mantenha um export sem responsabilidade ou uso comprovado; remoções e mudanças incompatíveis têm migração e SemVer explícitos.

## Estilos e contexto

Tokens e receitas existentes concentram valores compartilhados. Geometria contextual pode permanecer local quando padronizá-la mudaria a interface. Não aproximar cores, trocar px por rem ou acrescentar uma prop para cada diferença de layout.

FieldRoot fornece associação de identificação/feedback; CompoundControl possui a superfície composta. FlashcardFrame fornece as variáveis da família e FlashcardFlip controla a face acessível. Dialog/Drawer compartilham ModalLayer privado. Esses contratos estão nos respectivos guias.

O produto adapta seu Router e mantém a geometria de página quando necessário. Ele não importa styles internos da biblioteca, monta classes privadas de anatomia ou depende da ordem de importação de CSS.

## SSR e hidratação

Em Vite, inclua a biblioteca e styled-components na mesma coleta de estilos do servidor:

```ts
export default defineConfig({
  ssr: { noExternal: ['styled-components', '@langyspace/ui'] },
})
```

Mantenha versões únicas dos peers no consumidor. A modalidade de Dialog/Drawer também é ativada quando uma camada inicialmente aberta é hidratada; abrir o portal não basta para provar foco, inércia e bloqueio de rolagem.

## Encontrar um componente no checkout

O manifest em quality/component-manifest.ts liga export, owner, props, guia, story, teste e exemplos de consumidores. O comando é uma ferramenta do repositório:

```bash
node scripts/query-component-reference.mjs ScheduleRow
node scripts/query-component-reference.mjs ScheduleRow --workspace /caminho/dos/checkouts
```

O diretório informado contém os checkouts com os nomes dos repositórios. A verificação segue imports, reexports e composição React/styled até o JSX. Ela verifica uma relação de fonte; não prova que uma rota foi exercitada ou publicada.

## Desenvolvimento e revisão

Use pnpm e o Node definido em package.json. Faça a menor verificação que detecta o risco da alteração e consulte o AGENTS.md antes da entrega. CI mantém os gates amplos.

Toda mudança pública atualiza tipos, exemplos, manifest e snapshot de API. Novos componentes precisam de responsabilidade e reutilização demonstradas, stories de estados pertinentes e cobertura de comportamento. Pacotes têm build, budgets e smoke ESM/SSR/browser reais; nenhum orçamento é relaxado para acomodar uma refatoração.

Mudanças visuais têm PR com imagens Antes/Depois lado a lado e aprovação humana da revisão atual. Os planos e decisões desta evolução ficam em docs/epics/ui-library-react-craftsmanship.
