# Revisão de granularidade e oportunidades de consolidação

Data: 2026-10-18. Baseline da UI: `914164b` (2.2.0).
Impacto desta entrega: `none`; somente discovery e documentação.

## Conclusão

A consolidação de Button resolveu uma família. Ainda há partes de composições
exportadas como componentes independentes, presets com margens de uma tela e
arquivos que apenas reexportam outra implementação.

As oportunidades mais claras são internalizar as peças de ScheduleCalendar,
deixar StatCard e MetricSummary renderizarem seus valores/legendas e concentrar o
resultado de exercícios em PracticeResultPanel. Essas mudanças reduzem decisões
e imports nos consumidores, além de simplificarem a manutenção da biblioteca.

Há **20 nomes candidatos a deixar de ter uma unidade canônica própria** no
primeiro recorte abaixo. Isso não significa remover 20 exports numa minor:
compatibilidade, estrutura de arquivos e API recomendada são medidas diferentes.
Dois desses nomes já são aliases; sua consolidação é organizacional.

## Evidência e limites

| Observação                                                            | Resultado                                            | Interpretação                                                                                           |
| --------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Componentes exportados no entrypoint                                  | 173, incluindo aliases; exclui tokens e tipos        | Tamanho da API disponível, não 173 responsabilidades diferentes.                                        |
| Entrypoints de componentes com até 12 linhas                          | 95                                                   | Sinal para investigação; Checkbox também é pequeno e tem contrato próprio. Tamanho não decide extração. |
| Família Auth                                                          | 29 exports                                           | Muitos detalhes de uma composição precisam ser conhecidos separadamente pelo consumidor.                |
| Família Flashcard                                                     | 20 exports                                           | Mistura unidades de interação com wrappers de estrutura e detalhes decorativos.                         |
| Peças de calendário sem imports/reexports nomeados nos cinco produtos | 7                                                    | São usadas internamente por ScheduleCalendar; não são código morto.                                     |
| Arquivos dessas sete pastas                                           | 35, dos quais 21 de runtime/tipos                    | Há espaço para agrupar responsabilidades sem descartar testes e stories.                                |
| Arquivos de produto que só reexportam a UI                            | 36: Teacher 17, Student 15, Admin 3, Site 1, Cupom 0 | Acrescentam navegação; retirá-los não equivale a remover componentes React.                             |

O inventário percorreu imports e reexports nomeados em `src` dos cinco produtos e
da UI, excluindo testes, stories, mocks e fixtures. Também procurou imports de
namespace/dinâmicos de `@langyspace/ui`; não encontrou esses acessos nos produtos.
Imports estáticos e reexports não provam que uma rota esteja montada. As propostas
prioritárias foram complementadas pela leitura das composições e rotas reais.
Não foi feita uma nova revisão visual de todas as telas nesta análise.

| Checkout inspecionado | Commit local                               |
| --------------------- | ------------------------------------------ |
| UI                    | `914164b30767de42b5e32c11dfdbbcc4c2e176bd` |
| Teacher               | `cf17ea8eeb7486302077c5185c25632437560ef6` |
| Student               | `305059a91906fd430bc3855dbf98167630c45ea5` |
| Admin                 | `d8d8ad1500017fe7d8f1021585c605fdf6a3144d` |
| Site                  | `a20fa5285d59e501c187f9602d28f3057f253eed` |
| Cupom                 | `a884d5829f877224ee174a80b107079f45e367d1` |

Esses SHAs identificam o código analisado, não uma nova verificação de deploy.

## Primeiro recorte: propostas com destino definido

| Ordem | Partes atuais                                                                                                           | Destino proposto                                                                                                                                                                        | Projetos e adaptações                                                                                                                             | Benefício e cuidados                                                                                                                                                                                                                          |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | CalendarMonthGrid, CalendarWeekGrid, CalendarDay, CalendarDayNumber, CalendarEvent, TimelineEvent, CalendarTimeSlot (7) | Partes internas junto de ScheduleCalendar, mantendo Month, Week, Agenda e estilos com responsabilidades claras. Exports antigos encaminham para essas partes durante a compatibilidade. | Teacher usa o calendário composto; nenhum produto importa essas sete peças diretamente. Sem concessão visual de produto.                          | Retira sete pastas da estrutura pública canônica. Preservar IDs de styled-components, refs, seleção por ponteiro, cancelamento de arraste, slots desabilitados, eventos e rolagem. Risco baixo de adoção e moderado na reorganização interna. |
| 2     | MetricValue e MetricLabel (2)                                                                                           | Partes privadas de MetricSummary; uso novo com `value` e `label`. Manter children legado durante a adoção.                                                                              | Teacher e Student. Teacher estende o owner com borda, alinhamento e tipografia diferentes; preservar extensão e atributos dos elementos internos. | Troca três imports/composição repetida por um componente. Preservar `data-ui-metric-*`, className, quebra de texto e regras mobile. Não impor o visual Student ao Teacher.                                                                    |
| 3     | StatValue, StatLabel e StatAction (3)                                                                                   | Partes privadas de StatCard; conteúdo em `value`, `label`, `action` e a `tone` existente.                                                                                               | Admin já tem StatTile com essa composição. Apresentação vai para a UI; labels, valores e navegação ficam no produto.                              | Elimina montagem manual de quatro peças e acoplamento à ordem dos filhos. Há valor `small` de 18 px além do padrão de 22 px: inventariar usos antes de decidir contrato. Preservar espaço da ação e tons.                                     |
| 4     | PracticeResultMark, PracticeResultTitle, PracticeResultDescription e PracticeResultActions (4)                          | Partes privadas de PracticeResultPanel; título, descrição e ações como conteúdo semântico. Children para métricas/conteúdo adicional e slot de ícone quando necessário.                 | Teacher e Student, resultado de quiz e exercícios que realmente adotarem a composição. Pontuação, reset, áudio e navegação ficam no produto.      | Resultado completo legível no JSX. Preservar h2/p, ordem dos filhos, min-height, largura das ações e métricas diferentes. Ícone padrão igual ao atual.                                                                                        |
| 5     | AuthSubmitButton e AuthBackButton (2)                                                                                   | Button com props normais; espaçamento contextual na composição de autenticação, sem variantes `auth-*`.                                                                                 | Teacher e Student, login/cadastro; Student também `/acesso`, `/comecar` e aviso de navegador incompatível.                                        | Remove presets da API recomendada. Risco maior: margens dependem de largura/altura; há usos fora de form e type pode ser sobrescrito. Não fazer substituição mecânica.                                                                        |
| 6     | EmptyState e LoadingState (2)                                                                                           | Aliases agrupados com StatePanel, como TextButton junto de Button. Uso canônico com `state`.                                                                                            | Teacher, Student e Admin. Evitar migrar todas as telas apenas para trocar imports.                                                                | Simplifica duas pastas, sem alegar redução de receitas: já delegam para StatePanel. Preservar spinner lg, marcador de loading, role, aria-busy e anúncios. StatePanel loading não injeta spinner hoje.                                        |

As seis linhas cobrem os 20 nomes. Consolidar pastas e orientar usos novos pode
preservar os exports publicados. Sua retirada efetiva da API depende de adoção
confirmada e de uma versão major deliberada.

StatCard e MetricSummary devem continuar como duas composições: um tem destaque
superior/ação e o outro tem apresentação compacta de métrica. Seus layouts atuais
não justificam um componente universal com vários controles de estilo.

## Oportunidades que exigem uma composição preparada

| Família                 | Evidência atual                                                                                                                                                           | Proposta a validar                                                                                                                                                                         | Risco ou limite                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marca no AuthFrame      | AuthBrandTitle, AuthBrandAccent, AuthBrandDescription, AuthFeatureList, AuthFeature, AuthBrandFooter e AuthFooterLink são montados juntos em AuthShell dos dois produtos. | Uma composição de marca com título, descrição, benefícios, logo e rodapé; texto/lista viram partes internas. Comparar essa unidade delimitada com o slot brand antes de ampliar AuthFrame. | BrandAccent é sublinhado; AuthAccent é texto colorido. Preservar h1/h2, links, painel desktop e rodapé mobile. Conteúdo/URLs legais ficam no produto.                                             |
| Reenvio de token        | AuthResendAction posiciona AuthResendButton.                                                                                                                              | AuthResendAction pode receber texto/callback/disabled e renderizar o botão internamente.                                                                                                   | Produto mantém timer e operação OTP. Padding nativo e disabled diferem de Button text; não aproximar nem criar variante auth.                                                                     |
| Progresso de flashcards | Track, Segment e Counter são montados nos headers Student/Teacher.                                                                                                        | Uma unidade de progresso segmentado com partes internas; avaliar composição com SessionProgress.                                                                                           | Barra contínua e segmentos diferem. Total alto é limitado visualmente; flipped/done/current têm significado. Receber estado visual calculado no produto, preservar loading/rótulo/reduced-motion. |
| Cabeçalho de pergunta   | QuizPromptHeader, QuizBadge e QuizMetadata aparecem juntos no quiz e skeleton.                                                                                            | Uma composição de cabeçalho de pergunta com badge e metadata; partes sem imports próprios.                                                                                                 | QuizSessionHeader possui voltar/progresso e é outra responsabilidade. QuizQuestion também tem layout próprio; ampliar seu escopo exige comparação.                                                |
| Texto de shadowing      | Reader, PhraseStack, ContextPhrase e ActivePhrase compõem anterior/ativa/próxima em Teacher, Student e demonstração do Site.                                              | Um leitor composto com conteúdo das frases e estados visuais; wrappers tipográficos internos.                                                                                              | Preservar palavra atual, skeleton, animação, espaço de tradução e orientação horizontal. Áudio/tempo/repetição no produto. Adiar se exigir muitas flags para três usos.                           |
| Documentos              | Teacher, Student e Site montam DocumentHeader, HeaderContent e Navigation em LegalPage.                                                                                   | Header pode possuir seu container e receber logo/navegação por slots.                                                                                                                      | DocumentLayout é o corpo e tem outra responsabilidade. Preservar wrapping/larguras e semântica de Link versus a.                                                                                  |
| Capas de atividades     | PracticeCardCover, PracticeCoverValue e PracticeCoverLabel são repetidos em cartões de exercícios/vocabulário.                                                            | Revisar composição de capa no owner PracticeCard, com valor/legenda internos.                                                                                                              | Teacher tem vários tipos de cartão. Evitar schema de telas ou componente por atividade.                                                                                                           |
| Estrutura de flashcards | Frame, Stage, Deck, Front, Ghost e FlipHint incluem wrappers estruturais/decorativos.                                                                                     | Agrupar partes por owner e preparar uma composição estável de deck.                                                                                                                        | Face controla inert/aria-hidden pelo contexto de flip; Back já compõe conteúdo distinto de Front. Não são apenas duas aparências. Preservar controles com contrato próprio.                       |

São hipóteses, não APIs implementadas/aprovadas. Uma unidade clara pode substituir
várias partes sempre montadas juntas. Apenas renomear exports para `Owner.Part`
manteria a mesma quantidade de decisões e não atenderia ao objetivo.

## Como deve ficar o uso

APIs ilustrativas; nenhuma implementação mudou:

```tsx
<MetricSummary value={correctAnswers} label="Acertos" />

<StatCard
  value={activeStudents}
  label="Alunos ativos"
  tone="brand"
  action={
    <Button variant="text" onClick={openStudents}>
      Ver alunos
    </Button>
  }
/>

<PracticeResultPanel
  title="Resultado"
  description={summary}
  actions={
    <>
      <Button onClick={resetQuiz}>Refazer</Button>
      <Button variant="secondary" onClick={onClose}>
        Voltar para lista
      </Button>
    </>
  }
>
  {metrics}
</PracticeResultPanel>
```

Props descrevem conteúdo, estado ou interação. Pequenos detalhes ficam no owner
com JSX explícito. Não precisam de builders, factories, inspeção de tipos dos
filhos ou novos booleanos para cada composição histórica. Os exemplos não fixam
número de props nem substituem a revisão dos usos reais.

## Componentes com responsabilidade independente

| Componentes                                    | Motivo para preservar                                                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Button, IconButton e ActionLink                | Ação, nome acessível obrigatório e navegação nativa têm contratos diferentes.                                   |
| Dialog, Drawer e ActionMenu                    | Foco, dismissal, posicionamento e teclado; compartilhar infraestrutura interna não exige unificar experiências. |
| Campos, Checkbox e RadioButton                 | Semântica nativa, labels, valor, validação e interação.                                                         |
| AuthTokenDigits                                | Entrada composta, foco, paste e teclado.                                                                        |
| ToggleButton, ChoiceCard e navegação           | Estados pressed/selected/current e geometria própria.                                                           |
| FlashcardFace, FlashcardAudioButton e playback | Visibilidade/foco das faces e interação de áudio; inspecionar contrato antes de internalizar.                   |
| Chat, calendário e listas compostas            | Unidades maiores são adequadas quando o produto fornece dados e ações.                                          |

FormError, InlineNotice, AuthNotice e ConnectionNotice merecem revisão conjunta
futura, mas diferem em semântica, superfície e espaçamento. A semelhança de texto
não sustenta fusão automática num Notice genérico.

## Sequência e critérios de aceite

1. Internalizar as sete peças de calendário; não exigir adoção cosmética do
   produto que já usa ScheduleCalendar.
2. Preparar MetricSummary e StatCard na UI e adotar nos produtos, preservando os
   dois layouts. Inventariar `small` do Admin antes de decidir contrato.
3. Compor PracticeResultPanel aproveitando os owners de métricas; conteúdo
   intermediário continua livre.
4. Revisar a composição de autenticação antes de eliminar presets, comparando
   leitura do JSX e margens responsivas.
5. Agrupar aliases de StatePanel sem migração em massa de baixo benefício.
6. Preparar progresso, perguntas, leitores e demais hipóteses só após essa base.

Contabilizar separadamente componentes canônicos, aliases, pastas, imports do
consumidor e props. Menos pastas com mais CSS copiado nos produtos não representa
sucesso. Os 36 arquivos de reexport só devem sair quando não forem fronteiras
locais deliberadas ou necessárias para adaptação de router/estilos.

Aceitar quando o JSX consumidor ficar mais simples, a receita tiver um owner
claro, as variações tiverem significado e as interfaces atuais forem preservadas.
Evitar um arquivo enorme apenas para reduzir contagem. Tipos curtos podem ficar
junto da implementação; tipos/estilos extensos continuam separados por necessidade.

Preservar refs, atributos nativos, seletores de extensão, eventos, loading,
disabled, foco/teclado e SSR. Cobrir extremos, loading e mobile/desktop; altura
pequena e orientação horizontal onde já há regras. Manter API snapshot, stories e
testes focados proporcionais ao lote. Publicar a UI antes das adoções e apresentar
tabelas Antes/Depois das telas/estados afetados, com aceite humano de cada revisão.

## Fontes para retomar

- [Exports](../../../src/index.ts).
- [ScheduleCalendar/Month](../../../src/molecules/ScheduleCalendar/Month.tsx),
  [Week](../../../src/molecules/ScheduleCalendar/Week.tsx) e
  [estilos](../../../src/molecules/ScheduleCalendar/styles.ts).
- [MetricSummary](../../../src/molecules/MetricSummary/styles.ts),
  [MetricValue](../../../src/atoms/MetricValue/index.tsx) e
  [MetricLabel](../../../src/atoms/MetricLabel/index.tsx).
- [StatCard](../../../src/molecules/StatCard/index.tsx),
  [StatValue](../../../src/atoms/StatValue/styles.ts) e
  [StatAction](../../../src/molecules/StatAction/styles.ts).
- [PracticeResultPanel](../../../src/molecules/PracticeResultPanel/index.tsx).
- [AuthSubmitButton](../../../src/atoms/AuthSubmitButton/styles.ts),
  [AuthBackButton](../../../src/atoms/AuthBackButton/styles.ts) e
  [AuthFrame](../../../src/molecules/AuthFrame/index.tsx).
- [StatePanel](../../../src/molecules/StatePanel/index.tsx),
  [LoadingState](../../../src/molecules/LoadingState/index.tsx) e
  [EmptyState](../../../src/molecules/EmptyState/index.tsx).
- Teacher: `src/components/layout/AuthShell/index.tsx`,
  `src/pages/StudentLearningPreview/styles.ts`,
  `src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx` e
  `src/routes/index.tsx`.
- Student: `src/components/features/portal/{index.tsx,styles.ts,FlashcardsV2.tsx}`,
  `src/components/layout/AuthShell/index.tsx` e `src/routes/index.tsx`.
- Admin: `src/pages/AdminPortal/index.tsx`, função StatTile.
- Site: `src/pages/LegalPage/index.tsx`, FlashcardBirdShowcase e ShadowingCoffeeShowcase.

O critério acompanha a documentação do React: responsabilidade clara, props para
personalização e partes simples que podem ficar no próprio owner. A classificação
acima é uma conclusão sobre este código, não uma regra numérica do framework.
Referências: [Thinking in React](https://react.dev/learn/thinking-in-react) e
[Passing Props](https://react.dev/learn/passing-props-to-a-component).

Nenhum componente, estilo, export, dependência ou comportamento foi alterado.
Não houve push, CI, publicação ou deploy.
