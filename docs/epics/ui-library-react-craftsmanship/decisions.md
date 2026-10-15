# Decisões técnicas

## 06 — Revisão em execução: anatomia da lista e contratos de métricas

Os 27 owners/types/styles foram lidos integralmente em 06-review-source.txt (2537 linhas), incluindo a preparação de linhas e a normalização de ações de OperationalList. A implementação atual concentra cabeçalhos, conteúdo/associações de células e três grupos de ações em uma função com vários níveis de JSX.

Decisão a executar: separar somente a anatomia em componentes React privados Header, Row e RowActions no mesmo owner. O componente público mantém tipos, preparo de dados e estado de um menu aberto; nenhuma nova prop pública, schema ou owner de domínio. Preservar DOM, IDs/headers, ordem de ações, sorting e fechamento quando uma linha desaparece. A suíte focada existente da lista cobre esses contratos.

MetricSummary/Value/Label e StatCard/Action/Value/Label têm anatomia contextual válida, hoje pouco documentada. Documentar a composição e acrescentar regressões de estilo reais entre essas partes. MetricSummary passa a referenciar tokens existentes somente onde significado, valor e unidade são idênticos. Não criar Context/cloneElement nem componentes extras apenas para esconder os seletores internos.

## 03 — Foundations existentes e valores de apresentação

Foram lidos tokens.ts, actions/recipe.ts e types.ts, fields/index.ts, surfaces/cardRecipe.ts, authRecipe.ts, quizRecipe.ts, accessibility e selection. A base de ações/campos/superfícies já compartilha receitas tipadas e valores do mesmo significado; manter essas responsabilidades, sem introduzir outra camada de tema ou um catálogo paralelo.

O inventário observou cores literais em estilos: #0a0a0a em 28 componentes, #6b6b6b em 21 e #fafaf9 em 12. São sinais para a leitura de cada família, não autorização para substituição textual em massa. O mesmo literal pode ser texto, borda ou parte de um fallback CSS.

Decisão: reusar os tokens existentes por significado nas tarefas de cada família, após ler seu styles e consumidores. Preservar unidades: 14px não vira automaticamente radius.card (0.875rem). Cores próximas como surface.muted #f8f8f6 e neutral[50] #fafaf9 continuam distintas. authRecipe e quizRecipe preservam suas métricas e pontos de quebra locais; diferenças existentes não justificam novos tokens globais.

FlashcardFrame define variáveis de contexto/tamanho e uma paleta local observada. A tarefa 08 identificará os owners/defaults e distinguirá configuração de layout legítima de dependência implícita. As variáveis não serão convertidas automaticamente em props.

Esta etapa conclui a precedência/proveniência e as regras de consolidação. Não altera fonte, token público ou estilo; nenhuma execução de teste de runtime acrescentaria evidência agora. A aplicação das decisões é feita e validada na família dona, evitando editar estilos ainda não revisados.

## 04 — Controles e formulários

Os 23 owners, tipos e estilos foram lidos, com contratos/testes/callsites pertinentes. Button/ActionLink/IconButton/Pressable conservam os papéis e receitas; ChoiceCard/ToggleButton têm anatomias distintas e continuam separados. FormStack/Actions têm contexto de formulário claro e não evoluem para um layout genérico. Os wrappers simples já leem como componentes React.

TextInput/SelectInput/TextareaInput repetiam resolução de dois contextos, invalid/disabled/size e IDREFs. O hook interno useFieldControl concentra exclusivamente essa precedência; cada componente preserva JSX, attrs/ref e tipos públicos. Três testes parametrizados verificam os três elementos dentro de FieldRoot e CompoundControl, inclusive transição de estado e ref nativo.

PhoneField mantém sua interação coesa; styles elimina strings interpoladas constantes e concatenação de border. Valores, tempos, cores, unidades e breakpoints continuam iguais. SearchInput mantém a compatibilidade tipada existente; novos usos devem fornecer cópia de limpeza explícita.

Validação real: 7 arquivos/21 testes passaram (TextInput, SelectInput, TextareaInput, FieldRoot, CompoundControl, ControlledField, PhoneField). Typecheck inicialmente acusou NavigationLink.test.tsx sem href na baseline; somente a fixture/assertion foram corrigidas, sem afrouxar o contrato, e o check antes falho passou na repetição. Não repetir os 21 testes: suas fontes/inputs relevantes permanecem iguais. Os smokes de pacote e capturas da revisão atual pertencem à etapa 10, não estão declarados concluídos.

## 05 — Autenticação, marca e documentos

Foram lidos integralmente os 37 owners, tipos e styles (bundle operacional 05-review-source.txt, 2296 linhas), e conferidos consumidores/contratos de testes pertinentes. Funções pequenas com nomes semânticos foram mantidas; AuthTokenDigits/PhoneField preservam as interações coesas sem hooks extraídos por tamanho. AuthFrame conserva seus slots estáveis, próprios da anatomia aprovada.

AuthFrame/styles reutiliza seis valores/clamps/breakpoints já idênticos de authRecipe; as métricas específicas do layout continuam locais. BrandLogo passa a ter todos os imports antes da tabela tipada de assets. AuthProgress usa JSX autocontido, sem mudar a decoração ou a animação. Fontes, assets, tipos e comportamento dos demais componentes permanecem iguais.

DocumentLayout continua adequado ao conteúdo legal atual: arrays são dados textuais repetidos, com anatomia fixa. Não há justificativa para transformar esse caso em um schema de páginas ou acrescentar muitos elementos públicos. Essa decisão não autoriza aplicar a API de dados a componentes de conteúdo aberto como PracticeResult.

AuthTokenDigits mantém o estado de edição/foco e o contrato controlado/não controlado; OTP/validação/timers ficam nos produtos. Avatar mantém fallback e recuperação por URL nova. AuthNotice preserva seu contrato sem ref, documentado sem adicionar capacidade especulativa.

Validação real: 3 testes/3 arquivos (AuthFrame, BrandLogo, AuthProgress) e typecheck passaram. Não repetir o conjunto anterior de 21 testes, cujos inputs relevantes não mudaram. Critérios de indexação e entrega cumulativa permanecem pendentes no inventário.

06, orçamento de validação: três checks locais justificados pelo risco alto da separação da tabela operacional usada no Admin (associações ARIA, estado de menu, ordenação e ações): suíte focada OperationalList/MetricSummary/StatCard, typecheck e guard de arquitetura para os novos módulos privados. Não executar full suite nem matriz ampla.

06 concluída na preparação: KeyValueList teve a cor de um StatusChip sobrescrita reproduzida (esperado rgb22/101/52, observado rgba17/17/17/0.62) e os 2 testes passaram após restringir os seletores aos wrappers. ScheduleRow teve o Enter interno cancelado pelo handler de pseudo-button na linha; contrato/anatomia corrigidos conforme compatibility.md, com 2 testes positivos e typecheck. Stories de foco e snippets foram atualizados; o candidato é 2.0.0 não publicado. Tempo/participante usam spans com display preservado; a adoção Teacher deve fornecer conteúdo phrasing, sem controles aninhados.

Os demais contratos de dados/estados foram mantidos após leitura: slots estáveis em StatePanel/NoticeBanner/SectionHeader, estruturas simples e tipadas em listas/gráficos, e famílias de métricas distintas por hierarquia. Não trocar uma coleção legítima por muitos elementos públicos nem criar um gerador de telas. Indexação, build/API/pacote e capturas permanecem pendentes, sem alegação de revisão humana atual.

## 07 - Navegacao, overlays e mensagens

22 contratos lidos integralmente com tipos/estilos e ModalLayer/stack. ActionMenu separa useActionMenu privado (foco, posicao, listeners, teclado) de sua arvore JSX; nenhuma prop/export publico adicionado. SearchInput e ActionMenu compartilham useMergedRef depois de dois testes reproduzirem descarte do cleanup e reattach indevido entre renders. Os 17 testes desses dois componentes e typecheck passaram apos correcao. Dialog/Drawer mantem ModalLayer coeso; nao extrair efeitos apenas por tamanho. MessageComposer preserva envio interativo durante isSubmitting, conforme testes e fila/rascunho dos dois produtos; disabled e o bloqueio efetivo. NotificationItem.action e rotulo/icone, nao comando aninhado; Teacher confirmado. Tokens/medidas restantes serao reconciliados por valor/unidade e semantica em 10, sem aproximacoes visuais.

## 10.1 - Initial-open hydration

Two regression tests reproduced that Dialog/Drawer initially open after SSR hydration mounted the portal but never registered the modal layer: app inert, body scroll lock and focus were absent. ModalLayer activation effect now depends on canUseDOM. Eight tests across Hydration/Dialog/Drawer and typecheck passed. No layout/API/CSS change. This is a demonstrated lifecycle bug, not an arbitrary hook rewrite.

## 10.4a - Composed keyboard contracts

Three failures reproduced: Escape from ActionMenu dismissed the parent Dialog before the menu could handle it; Tab chosen by the menu was trapped a second time by ModalLayer; an equivalent fresh items array reset the active menu item. ModalLayer now respects defaultPrevented and listens for Escape in bubble phase. useActionMenu preserves the enabled focused item while consuming opening intent.23 tests/5files, typecheck and architecture717sources passed. The third focused check is justified by shared event/focus behavior and the moved finite pronunciation pulse. No public prop or exception was added for a product. The pulse owner is explicit and respects reduced motion.

##10.4b — Distribuição e independência de reset

Tokens internos agora são valores ESM individuais; o contrato público tokens conserva inclusive o hash da declaração. Todos oslimites de bundle passaram sem mudar limites ou omitir os3 novos owners. Medição antes do ajuste do painel: biblioteca256481bytes/58990gzip, flashcards21527/5345, campos17860/4990. O painel recebeu apenas box-sizing:border-box após prova de392px em viewport390 sem reset; prova browser passou6 combinações depois. Package smoke passou instalação real, contratos de arquivos/peers, auditoria, ESM, SSR e build tipado de consumidor. API snapshot major revisado:172 valores (171 componentes+tokens),238 tipos,546 declarações; tokens públicos inalterados. Artefato final e evidências de produto ainda em preparação.

17 stories antigas de flashcard ainda mostravam placeholders sem Frame/Deck, impedindo avaliar a anatomia. Exemplos explícitos React passaram a mostrar frente/verso/flip, notas/feedback, progresso e loading com contexto próprio; helpers são privados do Storybook e não entram no pacote. Nenhuma prop/modo de produto acrescentado. Tipos/build de catálogo em execução.

## 10.4c — Fechamento dos contratos de contexto

O lint focado detectou o objeto de retorno do hook do menu como agregado de refs e estado de render. A entrada ActionMenu passou a desestruturar os retornos, mantendo leituras de refs dentro de callbacks/efeitos e JSX simples. O lint desses arquivos passou sem desabilitar a regra de refs.15 testes de Menu e composição com Modal passaram novamente.

Uma prova de browser mostrou que a receita de padding do footer calculava0px sem a variável global --safe-area-inset-bottom, embora o default superior fosse0.75rem. FlashcardFrame ganhou fallback env(safe-area-inset-bottom,0px), mantendo os overrides existentes dos dois produtos. O browser verifica12px/16px sem global e40px no rodapé com override24px. As6 combinações de viewport/reset passaram; o snapshot API continua idêntico e todos os budgets passam. Guia de prática lista todos os defaults do Frame a partir do código atual.

O Cupom avançou por uma entrega concorrente de diagnóstico (0d9f9b2). A feature e o worktree de baseline avançaram por fast-forward seguro; nenhum trabalho foi removido. Tipos atuais passaram e as imagens são recapturadas contra esse head. As demais cinco bases remotas permanecem nos SHAs registrados.

## 10.5 — Contrato nativo também no Site

O cruzamento final do demo mostrou o mesmo defeito de comandos aninhados: Espaço no áudio era capturado pelo pseudo-button externo e virava o card. O browser reproduziu no baseline0chamadas de áudio ecardvirado; após adotar FlashcardFlip e FlipButton, houve1chamada ecardpermaneceufrente em390/1440. A ida/volta por Enter mantém foco na face ativa.

O Site mantém sua geometria específica e áudio local, usa o contexto do Flip para inert e remove o handler manual e seletores de faces duplicados. Os comandos nativos transparentes existem nos dois lados; áudio permanece acima deles. O foco adota o padrão comum da biblioteca. Tipos e arquitetura passaram, além dos cenários reais de browser. Sem nova API, modo ou prop de produto na UI.
