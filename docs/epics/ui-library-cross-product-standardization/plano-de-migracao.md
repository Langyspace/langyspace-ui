# Plano de migração da UI Library entre os cinco produtos

Data: 2026-10-10. Estado: R01/R02/R03/R07/R11 preparados para review; demais unidades permanecem propostas.

Este plano depende do [mapeamento detalhado e custo-benefício](mapeamento-detalhado.md), que cobre
os 38 grupos, suas variações, concessões e riscos. O [inventário](discovery.md) registra fontes,
baseline e rotas. Aprovar a direção do planejamento não equivale a aprovar toda concessão visual, um
rollout nos cinco produtos ou a publicação do pacote.

## Objetivo e invariantes

Construir owners compartilhados para apresentação/interação repetida, simplificando os consumidores
e preservando a experiência atual. O resultado esperado não é migrar todos os 38 grupos nem publicar
26 novos componentes.

- Preservar grids de página, hierarquia, conteúdo, densidade, CTA, ordem e responsividade, salvo uma
  concessão explícita avaliada pela product owner.
- Preservar contratos de negócio e serviço: auth/OTP, identidade, acesso, cobrança, recorrência,
  presença, Calendar/Meet, SRS, conclusão pedagógica, PWA e realtime não migram para a biblioteca.
- Não criar flags de papel/produto, props livres de geometria ou um modelo de dados enorme que
  apenas esconda muitos knobs. Preferir uma responsabilidade semântica e composição curta.
- Não migrar produtos sem correspondente útil; estado vazio, demo ou cópia morta não prova um
  segundo consumidor funcional do bloco inteiro.
- Não alterar visual e regra de negócio na mesma task. Melhorias de UX independentes, como novo alvo
  de click de uma row ou nova escala de gráfico, precisam de decisão própria.
- Não usar `styled(SharedComponent)` com dezenas de overrides para declarar sucesso de migração:
  isso conserva dois owners e torna a biblioteca difícil de manter. Um wrapper de layout externo ou
  adapter de domínio curto é aceitável e deve entrar no custo-benefício.

## Fluxo de execução e PRs definido pela product owner

Direção registrada em 2026-10-10: fazer a implementação compartilhada no UI e, depois, abrir os PRs
nos projetos principais para adoção. Esse fluxo vale para cada unidade abaixo; a shortlist e as
concessões continuam sujeitas à avaliação antes da implementação.

1. Registrar as telas, estados e larguras afetados e capturar o Antes na baseline de cada produto.
2. Implementar o contrato no `langyspace-ui`, com stories dos casos reais, API simples e cobertura
   focada. Provar os casos de consumo em ambiente isolado, preservando os checkouts ativos.
3. Abrir o PR visual da biblioteca e obter aprovação humana da revisão atual antes do merge.
   Preparar artefato compatível no escopo autorizado; publicação não é automática por este plano.
4. Só depois abrir PRs separados nos produtos aplicáveis para adotar o contrato preparado: versão,
   imports, composição, remoção da duplicação e adaptações pequenas. Páginas, rotas, serviços,
   domínio e orquestração permanecem nos produtos.
5. Capturar o Depois do diff final de cada produto e incluir as imagens de todas as telas afetadas
   no PR. A product owner revisa e aprova cada PR antes do merge; aceite da UI ou de outro produto
   não cobre este PR. Não habilitar auto-merge.

O corpo de todo PR visual usa somente este modelo, preenchido com imagens:

```markdown
# Evidências

## Antes

## Depois
```

Em ambas as seções, apresentar as mesmas telas na mesma ordem, com rótulos curtos de rota, estado e
largura. Usar dados sanitizados, viewport, zoom e tema iguais. Cobrir mobile e desktop quando a tela
for responsiva, os breakpoints atingidos e os estados afetados, incluindo overlays. Storybook serve
como evidência do UI; não substitui screenshots das telas nos PRs dos produtos. Mesmo um piloto V0
exige a comparação das telas afetadas.

Notas técnicas, SHAs, matriz de telas, concessões e checks ficam nos documentos e no CI, sem novas
seções no corpo do PR. Imagens precisam ser acessíveis na página do PR; caminhos locais não são
evidência para review. Se faltar captura, manter em draft e registrar o bloqueio. Se houver mudança
visual após o aceite, atualizar o Depois e pedir nova revisão do PR.

O [padrão permanente](/Users/margaridamartins/langyspace-ui/docs/visual-pr-review.md), os
`AGENTS.md` e os templates dos seis repositórios registram o mesmo procedimento para futuras
alterações visuais. Preparar a UI primeiro é uma dependência por lote, não uma obrigação de
implementar todas as famílias em um único PR. Este ajuste de fluxo não inicia R01–R24.

## Recomendações de prioridade

| Prioridade                            | Escopo                                                                                                                                         | Potencial / benefício                                                             | Risco e condição                                                                                                                    |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1 — shortlist com pouca concessão     | N09 partes auth exatas; N08 Notice Student/Teacher; N23 DocumentLayout Student/Teacher                                                         | Duplicação literal ou layout quase igual, com dois consumidores atuais.           | V0/V1; não mover lifecycle, router ou hooks. Escolher um piloto por vez.                                                            |
| 2 — adoção existente seletiva         | A06 estados Cupom; A07 header de seção; A08 menu Admin; A02 busca/campo; A03 filtro simples                                                    | Aproveita contratos já mantidos e testados pela UI, com ganho de a11y/manutenção. | Recipe pode alterar dimensões/foco; não assumir que existir na library prova equivalência.                                          |
| 3 — base visual em pilotos limitados  | N01 Card neutro Admin/Teacher; N04 toolbar row; N07 Toast Student/Teacher; N17 placeholders; N03 label/value; N16 progresso linear; N26 copiar | Reuse útil sem migrar páginas completas.                                          | Cada piloto precisa demonstrar que o layout externo e as informações permanecem. Cupom não é piloto obrigatório de Card/MetricTile. |
| 4 — interação de maior custo          | N06 PhoneInput; N09 frame; N12 inbox; N14 controls; N15 PracticeCard; N18–N20 partes de exercício                                              | Duplicação maior, mas adapters e interação também maiores.                        | Validar estados funcionais antes de decidir pelo componente inteiro; V1 nas partes, V2 frequente no bloco.                          |
| 5 — adiadas/condicionais              | A09 tabelas complexas; N02 métricas completas; N05 header completo; N10 shell; N13 row completa; N14 grid; players inteiros                    | Alto ganho bruto pode ser consumido por adaptações e mudança de UX.               | Não entrar no primeiro rollout. Aceitar permanecer local quando custo superar benefício.                                            |
| 6 — sem urgência / reuse insuficiente | N11 notificações; N21 logo; N22 chart; N24 multisseleção; N25 checkbox/switch; A12 nova adoção                                                 | Ganho atual baixo, assimetria de consumidores ou interação distinta.              | Não criar catálogo por antecipação. N21 pode ser oportunista após prova de assets iguais.                                           |

A01/A04/A05 são adoções pontuais junto de um consumidor compatível, sem campanha de remoção de
wrappers. A10 já centraliza overlays; A11 já centraliza parte das mensagens. A12 mantém sua adoção
Admin. Não exigir mudanças nesses grupos só para contar uma entrega.

## Ordem sugerida e dependências

As unidades abaixo são uma ordem de planejamento, não tarefas em andamento. Depois de avaliação,
decompor cada unidade em subtasks pequenas e manter apenas uma em execução. Uma unidade sem piloto
compatível volta para discovery, em vez de ampliar a API para forçar sua execução.

| Ordem / unidade | Componente e projetos a adaptar                                                      | Dependências reais                                                                    | Entrega mínima e condição de saída                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| R00             | Revisão da shortlist, concessões e baseline                                          | Mapeamento atual                                                                      | Registrar quais pilotos/concessões podem prosseguir, quais ficam locais e quais precisam de alternativa visual. Sem código antes dessa decisão e do plano técnico da task.                       |
| R01             | N09a apresentação auth — Student/Teacher                                             | R00; conferir estilos/tokens/ref dos callsites                                        | Começar por uma parte exata usada nos dois portais; preservar JSX da copy e OTP/Button existentes. Não aproveitar para refatorar Login/Registration. Ampliar a família só após a primeira prova. |
| R02             | N08 Notice — Student/Teacher                                                         | R00; decisão de alinhamento mobile                                                    | Uma anatomy de notice, wrappers locais para sticky e lógica PWA. Os dois consumidores usam o mesmo owner, sem props de produto. Site fica fora do piloto.                                        |
| R03             | N23 DocumentLayout — Student/Teacher                                                 | R00; contrato por composição, sem Router                                              | Migrar a apresentação exata, mantendo LegalPage e navegação de retorno locais. Somente depois avaliar partes do Site.                                                                            |
| R04             | A06 estados — Cupom                                                                  | Versão da UI que exporte o contrato; fixture do relatório                             | Um estado de erro/vazio compatível primeiro, com caixa/role adequados. Skeleton e splash não mudam junto automaticamente.                                                                        |
| R05             | A07 SectionHeader — Cupom, depois Student compatível                                 | R00; contrato atual h2–h4                                                             | Uma seção com metadata longa e heading correto. Não migrar hero/H1 ou cópia Student fora do grafo.                                                                                               |
| R06             | A08 ActionMenu — Admin                                                               | Fixture do RowMenu/barra de contexto; comportamento de foco revisado                  | Um menu de comandos com ordem/targets existentes, close/keyboard/portal verificados. Popup de filtros com form não entra.                                                                        |
| R07             | A02 SearchInput, depois fields — Teacher primeiro; Admin/Student/Site por formulário | Mapear altura/label/value/ref do callsite; eventual release compatível                | Um campo por task. No SearchField, preservar largura/flex do wrapper; recusar recipe que reflowe o toolbar sem concessão avaliada. Formulários posteriores mantêm estado/validação.              |
| R08             | A03 FilterPills — Teacher; Admin compatível depois                                   | Opções/valor normalizados; fixture do filtro                                          | Um filtro com semântica e overflow preservados. LessonTabBar/PlanToggle ricos são avaliações separadas.                                                                                          |
| R09             | N01 Card neutro — Admin/Teacher                                                      | R00; escolher dois painéis realmente próximos                                         | Compartilhar superfície elegível sem mover grid ou aceitar livre padding/radius. Se exigir grande concessão, manter local. Student/Cupom são expansões opcionais posteriores.                    |
| R10             | N04 FilterToolbar row — Admin Messaging/Teacher                                      | R07/R08 apenas se seus controles forem adotados; não exige trocar todos               | Layout children-first com wrapping consistente. Não absorver filtros column ou criar matriz layout×surface.                                                                                      |
| R11             | N07 ToastItem/viewport compatível — Student/Teacher                                  | Contrato de ação/dismiss e anúncios; state stores mantidos                            | Piloto sem mudar top-right/mobile. Admin/ChoosePlan permanecem locais enquanto posição/forma diferirem. N08 não é dependência técnica obrigatória.                                               |
| R12             | N17 placeholder equivalente — Student/Teacher; Cupom depois                          | Selecionar anatomy e dimensões atuais; quando necessário, owner da família adotada    | Um placeholder com geometria reservada e motion comuns; skeletons maiores continuam co-localizados. Não criar um framework global de páginas skeleton.                                           |
| R13             | N03 pares label/value — dois consumidores compatíveis a escolher                     | R09 somente se o piloto precisar de box; sem dependência para pares simples           | Semântica comum e valor completo acessível; conservar layout externo. Não mudar todos os drawers ou metadados financeiros.                                                                       |
| R14             | N16 progresso linear — Student/Teacher, depois Admin compatível                      | Definir escala e label; dados calculados no produto                                   | Compartilhar uma linha equivalente. Não converter segmentos, CEFR ou StepIndicator em progressbar única.                                                                                         |
| R15             | N26 CopyAction — Admin/Student; Site pontualmente                                    | Contrato de copied/error/reset; ações de clipboard preservadas                        | Ação comum primeiro; panel local se divergir. Valor exato copiado, feedback e callback mantidos, sem lógica de provider.                                                                         |
| R16             | N06 PhoneInput — Student/Teacher; Admin depois                                       | Casos existentes de caret, paste, país e validação; contrato controlado               | Unir capacidades de edição sem mudar identidade/E.164 ou rede. Só promover se adapters ficarem menores e o campo não perder comportamento. Site BR continua opcional.                            |
| R17             | N09b Auth frame — Student/Teacher                                                    | R01; equivalência do CSS e slots do footer/scroll                                     | Retirar integração de store do frame; manter footer por composição e owner de scroll. Não depende de PhoneInput para migrar layout.                                                              |
| R18             | N12 ConversationItem/List — Admin/Teacher                                            | A04/A06/A11 compatíveis; fixtures de inbox/unread/seleção                             | Row/lista comum antes de Chat completo. Queries/transporte/autoscroll/paginação locais. Student não ganha inbox.                                                                                 |
| R19             | N14a CalendarControls, depois Legend — Admin/Teacher                                 | Labels e callbacks atuais projetados; contratos de Button/ActionLink existentes       | Um controle compartilhado preservando cursor/today/next/previous. Grids e regras de slots não migram nesta unidade.                                                                              |
| R20             | N15 PracticeCard — Student/Teacher                                                   | N16/N17 apenas para as partes que forem adotadas; projeção de Activity local          | Uma anatomy equivalente com todo conteúdo e skeleton/busy pertinentes. Cada tipo de atividade é composição, não uma variante de produto.                                                         |
| R21             | N18a QuizQuestion/feedback — Student/Teacher; Site depois                            | Estados projetados; áudio/correção/persistência isolados; R14 se for usado            | Uma view sem mexer no controller. Testar pending/erro de conclusão antes de ampliar para sessão inteira. Site usa só a parte de demo.                                                            |
| R22             | N19a Flashcard/RatingControls — Student/Teacher; Site depois                         | Projeção de carta/rating/pending; scheduler e asset resolver locais                   | Preservar flip/timings e quando avançar. Não migrar SRS ou criar callback por particularidade de cada deck. View completa só após medir adapters.                                                |
| R23             | N20a PhraseView/PlaybackControls — Student/Teacher; Site depois                      | Playback state/cleanup e conclusão isolados; R14 se for usado                         | Preservar palavra ativa, reps, translation, velocidade e música. Se o contrato virar uma cópia dos controllers, compartilhar menos.                                                              |
| R24             | A09 tabela simples restante — Admin, candidato Assinaturas                           | Contrato atual de OperationalList; revisão de colunas/ações/rows em todas as larguras | Uma tabela sem seleção em lote. Testar sorting/navegação/empty e consistência dos targets. Cobranças/bulk e demais tabelas precisam de avaliação própria.                                        |

Dependência não é a mesma coisa que prioridade. Card não é prerequisite para reaproveitar AuthTitle;
Notice não é prerequisite para Toast; PhoneInput não é prerequisite para AuthLayout. Não construir
componentes genéricos intermediários apenas para ligar todas as tasks num framework. R24 fica tarde
por risco/layout, apesar de usar um contrato já existente.

## Backlog que não entra automaticamente após a shortlist

| Componente                              | Projetos possíveis                                    | Condição para retomar / alternativa                                                                                                     |
| --------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| A01/A04/A05 adoções pontuais            | Admin, Student, Teacher; Site conforme correspondente | Um callsite compatível; manter wrapper neutro/ring/metadata de domínio quando já simples.                                               |
| A10 conteúdo de overlays                | Admin, Student, Teacher                               | Reutilizar base ao mexer no conteúdo, sem criar fluxo universal. Confirmações financeiras não são piloto cosmético barato.              |
| A11 expansão de primitives de mensagens | Admin/Student                                         | Transporte/permissions/scroll preservados; chat de sala real não é mock promocional.                                                    |
| A12 AvailabilityCalendar fora do Admin  | Teacher condicional                                   | Escolha de slots real; manter grade pública de consulta local se não equivaler.                                                         |
| N02 MetricTile completo                 | Quatro produtos                                       | Prova de que ordem/tamanho/destaque podem convergir; caso contrário, parts/tokens e tiles separados.                                    |
| N05 PageHeader completo                 | Três portais; Cupom parcial                           | Preservar mobile heading/action e hero. Não adicionar flags de produto para resolver as diferenças.                                     |
| N10 PortalShell/Navigation completos    | Três portais                                          | Nav parts reduzem custo; shell só se layout/UX coincidirem de fato. Providers/route guards continuam locais.                            |
| N11 NotificationList                    | Teacher/Student futuro                                | Segundo consumidor funcional ou requisito claro de plataforma. EmptyState Student não basta.                                            |
| N13 ScheduleRow completa                | Três portais                                          | Modelo de click/ações comum aceito, com presença/falta/Meet e timezone preservados.                                                     |
| N14b Calendar grid                      | Admin/Teacher                                         | Prova de geometria e seleção nos dois produtos; começar semana, depois mês/agenda se compatíveis. Grids separados são resultado válido. |
| N18b/N19b/N20b players completos        | Student/Teacher                                       | Views/controller separation diminui APIs/adapters; não basta mover muitas linhas. Site continua consumidor de partes.                   |
| N21 BrandLogo                           | Cinco produtos                                        | Hashes/assets e render equivalentes, normal/inverse suficientes; sem criar vertical morto.                                              |
| N22 BarChart                            | Cupom/Teacher                                         | Modelo pequeno de séries, escala/zeros/legend aceitos; caso contrário, manter gráficos separados.                                       |
| N23 partes de leitura Site              | Site                                                  | SEO/links/back nativos preservados e template útil sem mudança significativa.                                                           |
| N24 ToggleGroup                         | Teacher/outro consumidor a provar                     | Reuse adicional real. Os dois selectors atuais já têm reuse local.                                                                      |
| N25 Checkbox e Switch                   | Admin/outro consumidor a provar                       | Contratos separados, casos de bulk/indeterminate/pending definidos; nenhum coupling com acesso/billing na UI.                           |

## Ritual por unidade de migração futura

| Passo                                  | Evidência / cuidado                                                                                                                                                    | Critério de saída                                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Atualizar a baseline                | Rever HEADs, fontes/imports, estilos/types, stories/tests e versões nos pilotos. Registrar telas/estados/larguras e capturar o Antes antes de alterar a implementação. | SHAs e matriz registrados; fontes atuais e trabalho alheio preservado.                                                                 |
| 2. Especificar o contrato mínimo       | Anatomy, responsabilidade, native/ARIA model, conteúdo, estados, tokens e callbacks. Comparar adoção, parte, inteiro ou local.                                         | Contrato reduz complexidade e tem reuse concreto; cada prop nova é justificada.                                                        |
| 3. Registrar concessões                | Proposta por produto, V0/V1/V2, rotas, estados, larguras e conteúdo extremo.                                                                                           | Concessão discutida ou opção preservadora escolhida; V2 fora do acordo volta ao planejamento. Isso não substitui o aceite do PR final. |
| 4. Preparar plano do UI                | Para implementação média/grande, manter epic, requirements, technical-plan, tasks e progress no UI, ligados a estes documentos.                                        | Uma próxima subtask, critérios claros e tarefas de adoção dependentes da biblioteca pronta.                                            |
| 5. Implementar no UI e provar os casos | Código compartilhado, stories e cobertura focada. Provar dois usos reais em composições/ambientes isolados, sem abrir ainda PRs de adoção.                             | Mesma implementação atende aos pilotos, sem flags de produto ou API provada apenas por mock vazio.                                     |
| 6. Revisar API e benefício             | Contrato inteiro, wrappers esperados, fonte duplicada substituível, bundle/SSR e checks focados; check:api quando houver alteração pública.                            | Ganho explicado, API simples e evidência técnica registrada; no-go mantém o componente local.                                          |
| 7. Revisar o PR do UI                  | Antes/Depois das stories, estados e larguras afetados; corpo somente no modelo de evidências.                                                                          | Aprovação humana da revisão atual antes do merge; sem auto-merge. Artefato/release compatível apenas no escopo autorizado.             |
| 8. Preparar a adoção nos produtos      | UI pronta primeiro. Em branches dos pilotos, atualizar versão/imports/composição, adaptar pequenas diferenças e remover apenas o owner comprovadamente substituído.    | Diff pequeno, domínio preservado, rollback conhecido e ganho líquido conferido no código final.                                        |
| 9. Abrir e revisar cada PR de produto  | Capturar o Depois final; imagens de todas as telas afetadas, estados e larguras em pares com o Antes. Usar o modelo e os checks focados do owner.                      | Evidências completas e aprovação humana independente por PR antes do merge; imagens/review renovadas se houver nova alteração visual.  |
| 10. Fechar o lote e expandir           | Registrar versões, aceite, checks e rollback. Produto adicional só com correspondente útil e novo ciclo de evidências/review.                                          | Um owner visual por anatomy migrada; nenhum churn nos produtos que não usam o contrato.                                                |

Um piloto descartado não precisa virar release. A decisão de manter separado, com as razões
documentadas, também é resultado de planejamento bem-sucedido. Nunca remover o owner antigo depois
da captura do Depois ou do aceite sem renovar a evidência e a revisão daquele PR.

## Matriz de validação funcional e visual

Esta é cobertura **planejada**, não evidência de testes executados. Usar fixtures sintéticas e
ambiente local/staging apropriado; não acessar produção para um teste de apresentação.

| Família / superfícies                                                                             | Estados e conteúdo extremos                                                                                                          | Invariantes a verificar                                                                                                                                             | Cobertura existente para orientar a task                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Auth N09/A02/A03/N06 — Stu `/login`, `/registration`, completar cadastro; T `/login`, `/cadastro` | Erro, busy, OTP, resend cooldown, paste, back, país, número longo, teclado virtual, viewport baixa                                   | Mesmos comandos, token/país/telefone, submit único, ref/foco; footer/copy/scroll mantidos. Sem nova chamada de rede na UI.                                          | [PhoneField Student](/Users/margaridamartins/langyspace-student/src/components/base/PhoneField/PhoneField.test.tsx), [phone Teacher](/Users/margaridamartins/langyspace-teacher/src/utils/formatters/phone.test.ts), [AuthTokenDigits UI](/Users/margaridamartins/langyspace-ui/src/molecules/AuthTokenDigits/AuthTokenDigits.test.tsx). Não presumir que esses testes cobrem layout do frame.                                                                                       |
| N08/N07 notices/toast — shells Student/Teacher; Admin; forms de plano                             | Offline, update/install, busy, erro/sucesso/info, título/ação longos, várias mensagens                                               | Mesma visibilidade/posição, safe area, z-index, dismissal e ação; status/alert coerentes, sem anúncio duplicado nem alteração de service worker.                    | [OfflineNotice Student](/Users/margaridamartins/langyspace-student/src/components/layout/OfflineNotice/OfflineNotice.test.tsx), [UpdateAppNotice Teacher](/Users/margaridamartins/langyspace-teacher/src/components/layout/UpdateAppNotice/UpdateAppNotice.test.tsx), [toastFeedback Admin](/Users/margaridamartins/langyspace-admin/src/pages/AdminPortal/toastFeedback.test.ts). Adicionar owner da nova anatomy, não copiar lógica PWA para testá-la na UI.                       |
| N23 leitura — `/termos`, `/privacidade`                                                           | Documento longo, heading/anchor longos, nav e voltar, leitura mobile/desktop                                                         | Mesmo documento/data/version, sumário/scroll/back state, header/aside e SEO do Site.                                                                                | [LegalPage Student](/Users/margaridamartins/langyspace-student/src/pages/LegalPage/index.tsx) como baseline de fonte; caso de navegação/layout focado precisa ser especificado, não declarado existente.                                                                                                                                                                                                                                                                             |
| A06/A07/N01/N02/N17 — Cupom `/relatorio/:id`; painéis Admin/Teacher/Student                       | Loading/empty/error/partial, valores grandes, label longo, ausência de transferências, privacy threshold                             | Nenhum dado falso em loading, estados parciais preservados, grid/destaque e altura reservada; só agregados no relatório público.                                    | [utils Cupom](/Users/margaridamartins/langyspace-cupom/src/pages/CouponMetricsPage/utils.test.ts), [Surface Admin](/Users/margaridamartins/langyspace-admin/src/components/base/Surface/index.test.tsx), [MetricTile Admin](/Users/margaridamartins/langyspace-admin/src/components/base/MetricTile/index.test.tsx). Fixtures de layout/report existentes a reaproveitar e ampliar apenas quando faltarem casos.                                                                     |
| A08/A09/A10 — Admin listas/financeiro e drawers dos portais                                       | Filtros/sorting, várias ações, menu ao lado da borda, overlay aberto, row longa, busy/erro, zero resultados                          | Foco retorna ao owner, menu/cancel não dispara outra ação, sorting/target/dados/checkbox mantidos, nenhum double submit. Sem alterar operações de pagamento/acesso. | [ActionMenu UI](/Users/margaridamartins/langyspace-ui/src/molecules/ActionMenu/ActionMenu.test.tsx), [OperationalList UI](/Users/margaridamartins/langyspace-ui/src/molecules/OperationalList/OperationalList.test.tsx), [AdminPortal](/Users/margaridamartins/langyspace-admin/src/pages/AdminPortal/index.test.tsx). Bulk ausente na API é bloqueio de escopo, não razão para apagar assert.                                                                                       |
| A03/N04/N05/N10 — filtros/headers/nav dos portais                                                 | Mais opções, hint longo, permissão, active/unread, perfil ausente, upload pending                                                    | Nenhum item/hint/CTA perdido; header mobile sem duplicação; mesmo active route/command, nav e scroll.                                                               | [Sidebar Student](/Users/margaridamartins/langyspace-student/src/components/layout/Sidebar/Sidebar.test.tsx), [BottomNavigation Teacher](/Users/margaridamartins/langyspace-teacher/src/components/layout/TeacherBottomNavigation/TeacherBottomNavigation.test.tsx), [SegmentedControl UI](/Users/margaridamartins/langyspace-ui/src/molecules/SegmentedControl/SegmentedControl.test.tsx).                                                                                          |
| A11/N12 Chat — `/mensagens`, inbox Admin/Teacher, conversa Student                                | Initial/loading more, unread, selected, archived/read-only, offline, envio pending/falha, textos longos                              | Mesmo canal/permissão/paginação/retry, mensagem única, seleção e posição do viewport. UI não assina Firebase.                                                       | [StudentMessages](/Users/margaridamartins/langyspace-student/src/pages/StudentMessages/StudentMessages.test.tsx), [Messages Teacher](/Users/margaridamartins/langyspace-teacher/src/pages/Messages/MessagesPage.test.tsx), [MessagingPage Admin](/Users/margaridamartins/langyspace-admin/src/pages/AdminPortal/MessagingPage/index.test.tsx).                                                                                                                                       |
| N13/N14/A12 — T `/calendario`, A `/agenda` e agendamento; disponibilidade pública separada        | Eventos densos, duração curta/longa, overnight/timezone, empty, bloqueio, seleção, cursor/mês, mobile scroll                         | Mesmo horário/duração/evento/slot; drag/keyboard/today preservados; preview/seleção não cria mutação. Não confundir consulta, escolha e agenda.                     | [WeekCalendar selection](/Users/margaridamartins/langyspace-teacher/src/components/layout/WeekCalendar/selection.test.ts), [calendarEvents Teacher](/Users/margaridamartins/langyspace-teacher/src/pages/Calendar/utils/calendarEvents.test.ts), [EnrollmentSchedule Admin](/Users/margaridamartins/langyspace-admin/src/pages/AdminPortal/EnrollmentSchedulePage/index.test.tsx). Geometria densa precisa de fixture própria.                                                       |
| N15–N20 — Stu `/licoes`/`/vocabulario`; T previews do aluno; demos Site                           | Skeleton, disabled/empty, image/audio failure, resposta correta/errada, rating pending, conclusão/erro, sair/reabrir, reduced motion | Mesma sequência, feedback, progresso e resultado; preview não grava atividade da aluna; controllers/scheduler locais; cleanup sem áudio/timer residual.             | [studentPortal](/Users/margaridamartins/langyspace-student/src/components/features/portal/studentPortal.test.tsx), [flashcard machine](/Users/margaridamartins/langyspace-student/src/pages/StudentLessons/flashcardSessionMachine.test.ts), [scheduler preview Teacher](/Users/margaridamartins/langyspace-teacher/src/pages/StudentLearningPreview/components/StudentFlashcardSession/scheduler.test.ts). Tests de domínio preservados; novo owner testa a view/interação isolada. |
| N26 copiar — Admin/Student/Site                                                                   | Clipboard success/fail, busy, valor longo, feedback/reset e navegação opcional                                                       | Conteúdo exato copiado, contexto correto, sem expor fixtures reais; copiar não abre outro destino nem inicia provider action.                                       | [StudentPaymentAccessActions Admin](/Users/margaridamartins/langyspace-admin/src/pages/AdminPortal/StudentPaymentAccessActions/index.test.tsx) e os callsites de checkout como base; caso de view/copy/reset precisa de owner explícito.                                                                                                                                                                                                                                             |

Para cada piloto considerar 390px, 768px, limites reais do componente/container, 1280/1281px e
desktop amplo até 2048px. Onde houver transição mobileShell=900px, incluir 899/900/901px. Para
AuthShell incluir altura baixa (o CSS atual tem limite de 760px) e teclado virtual. Onde audits já
tratam 1551/1552px, reutilizar esses casos quando a mudança atingir a transição. Não rodar toda a
matriz local a cada subtask: selecionar os casos atingidos; CI possui a matriz ampla e a product
owner decide a aparência em cada PR. A matriz de screenshots do PR deve cobrir todas as telas
afetadas e as larguras/estados pertinentes; não confundir um check local focado com a cobertura de
evidências para review. Screenshot produzido ou check verde não equivale a aceite humano.

## Critérios de aceite de uma migração

| Dimensão        | Critério mensurável/revisável                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reuse           | Dois callsites reais provados; priorizar dois produtos para esta iniciativa. Sem consumer fictício ou dados vazios para aparentar reuse.                                                                                                     |
| Simplificação   | Implementação visual duplicada removida nos pilotos; adapters/wrappers e nova fonte medidos. Ganho de manutenção explicado mesmo se total de linhas não cair muito.                                                                          |
| API             | Cada prop/slot/callback tem consumidor e significado; sem flags de produto ou coleção de overrides. Um viewModel grande também entra na revisão de complexidade.                                                                             |
| Visual          | V0 preservado ou concessão V1 explicitamente avaliada; V2 não acordada é no-go. Mesmo grid, conteúdo, hierarchy, densidade, scroll e CTA nos estados selecionados.                                                                           |
| Funcional       | Mesmo target/valor/comando, submit/retry/pending/disabled e cleanup; sem alteração de serviço, identidade, cobrança, scheduler, permissão ou persistência.                                                                                   |
| Responsividade  | Conteúdo longo e limites de viewport/container sem overflow, clipping sem acesso ao valor, colisões ou controle fora do owner. Safe area e teclado quando pertinentes.                                                                       |
| Acessibilidade  | Nome/role/associação/foco/teclado corretos, contraste e reduced motion; estado/erro não transmitidos só pela cor.                                                                                                                            |
| Compatibilidade | Exports/types/API snapshot intencionais; SemVer respeitado. Consumers não importam styles privados. Sem stylesheet global novo ou dependência da ordem de import.                                                                            |
| Pacote          | Biblioteca product-agnostic; comportamento browser/SSR/bundle apropriado ao escopo; dados/URLs/credentials reais ausentes de fixtures.                                                                                                       |
| Rollout         | UI preparada primeiro, versão imutável e PRs de adoção por produto. Todas as telas afetadas têm pares Antes/Depois e cada PR tem aprovação humana antes do merge. Rollback registrado; nenhum release apenas porque o documento está pronto. |

## Checks futuros, publicação e rollback

Na implementação, usar no máximo dois checks locais focados por entrega normal (três apenas quando o
risco justificar), sem reexecutar evidência válida com inputs iguais. Para novo contrato público,
exemplo: teste do owner e `pnpm run check:api`; stories/a11y e integração dos pilotos precisam de
cobertura, com execução ampla em CI. Uma mudança de integração pode justificar selecionar
teste/typecheck do consumidor no lugar de outro check redundante.

`write:api` não é mecanismo para ocultar quebra: revisar o diff e a decisão SemVer antes de
atualizar snapshot. Bundle/package smoke locais só quando houver risco de embalagem/publicação a
resolver; a CI possui build, gates amplos, smokes e budgets. Não rodar Functions tests porque uma
view passou a usar biblioteca se nenhum contrato de Functions foi alterado.

| Repositório / ação futura   | Fluxo e limites                                                                                                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `langyspace-ui`             | Implementar primeiro em branch de trabalho; PR visual para main com evidências e aceite humano antes do merge. Release somente no escopo autorizado, com exports/artefato compatíveis. Não empurrar tags nesta etapa. |
| Admin / Student / Teacher   | Depois da UI preparada, abrir PRs de adoção para staging, com Antes/Depois de todas as telas afetadas e aceite humano próprio. Sem push visual direto para staging ou main. O merge mantém o pipeline existente.      |
| Site / Cupom                | Depois da UI preparada, abrir PRs de adoção para main, com Antes/Depois de todas as telas afetadas e aceite humano próprio. Sem push visual direto para main.                                                         |
| Depois de push autorizado   | CI/CD assíncrono. No máximo um lookup não bloqueante filtrado pelo SHA para URLs, sem polling/logs/status preventivos. Não declarar produção concluída.                                                               |
| Checkout local após entrega | PR pendente preserva branch/worktree; não fazer merge para alinhar checkout. Após merge aprovado, seguir alinhamento do owner. Unrelated work exige recovery snapshot verificado, nunca reset/clean indiscriminado.   |

Rollback por família: preservar referência ao commit/versão anteriores, reverter somente a adoção e
restaurar o owner visual afetado ou versão do pacote compatível. Não fazer reset da worktree,
remover trabalho alheio ou alterar dados/provider. Migração visual não precisa de rollback de
Firestore quando o domínio permanece intacto. Se um piloto só funciona com grande redesign ou com
exceções permanentes de CSS/API, interromper sua expansão e registrar a decisão de mantê-lo local.

## Estado final deste planejamento

Discovery, mapeamento e plano estão prontos para avaliação. R00 é a única próxima ação; R01–R24 e o
backlog são propostas não iniciadas. A recomendação preliminar de começar por Card/MetricTile em
Admin/Cupom foi revista: apresentação auth exata, Notice e leitura de documento têm melhor balança
inicial de reuse e preservação. Card vira piloto Admin/Teacher; MetricTile completo fica
condicional.

Nenhum código de runtime, contrato público, dependência ou teste de aplicação foi alterado.
Documentos, guias e templates de PR foram atualizados para o fluxo definido pela product owner.
Impacto renderizado desta entrega: `none`, porque estes arquivos não são consumidos pela UI.
Formatação/referências são os checks desta fase; CI/release/deploy não foram acionados.

## Atualização de execução — 2026-10-10

R01 (apresentação auth), R03 (DocumentLayout), R02 (NoticeBanner), R07 (SearchInput Teacher) e
R11 (ToastItem/ToastViewport) foram preparados no UI e publicados nos drafts de adoção com
evidências completas. Nenhum foi integrado. [Handoff contínuo](handoff-continuo.md) registra
concessões medidas, PRs, baselines, validação local e dependências para integração. As tabelas
acima são o snapshot do discovery; não representam automaticamente adoção no staging atual.

R04 Cupom foi mantido local neste lote por diferença de alinhamento/densidade; R05 permanece
condicional pelo ganho pequeno frente às mudanças de heading/metadata. R06 foi delimitado à
barra de views salvas Admin; RowMenu não é um menu de exclusão de aluno. Outros menus que usam
CSS compartilhada precisam de inventário próprio. R08–R10/R12–R24 continuam propostos.

Continuar preparando unidades está autorizado; merge e release exigem aprovação humana da
revisão atual de cada PR. Os sete drafts de produto convergem para o mesmo candidato imutável,
a substituir pelo artefato oficial aprovado antes de integrar. Não mesclar locks/guias
sobrepostos sem conferir a base atual e atualizar imagens quando a superfície mudar.
