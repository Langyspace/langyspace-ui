# Progresso

Handoff ativo: [completion-v3.md](completion-v3.md). A execução atual abrange a UI 3 e os cinco produtos; os registros anteriores abaixo são históricos.

## 2026-10-19 — implementação integral preparada; evidências em andamento

Retirados 40 nomes redundantes e o alias duplicado neutral[400] numa major 3 deliberada; 138 componentes, 139 valores, 207 tipos e 261 declarações. Sem camada de compatibilidade na fonte de produção. Composições Auth, progresso Flashcard, métricas, estatísticas, resultados e capas já adotadas nas features dos produtos.

Os cinco consumidores passaram em typecheck e arquitetura. UI: 67 testes focados únicos resolvidos, incluindo 13 de ScheduleCalendar; o progresso teve rechecagem de três testes ao receber progressbar acessível. Teacher: 4 testes; Student: 3; Admin: 4. Pacote final passou SSR e build de consumidor. Os budgets anteriores passaram; uma entrada dedicada de ScheduleCalendar ficou em 28.773 bytes brutos/7.500 gzip, abaixo dos tetos novos de 40.000/8.000, após verificar igualdade de 91 referências de tokens. Nenhum limite anterior foi ampliado.

Candidato não publicado `langyspace-ui-3.0.0.tgz`, SHA-256: `8534451095b313dccd3d33066f7a5fbeec7ab300e67d115a1f5de531fcbd5111`. As 261 declarações permaneceram idênticas na última otimização; os produtos validam o mesmo artefato em dependências isoladas. Teacher/Student ainda simplificaram 99 fragmentos JSX desnecessários sem trocar o conteúdo. CI/release/deploy não foram acionados nesta execução.

Próxima tarefa única: concluir capturas comparáveis da UI e dos cinco produtos contra baselines fixas. UI #33 segue em draft; novas evidências e aceite humano da revisão final são necessários antes de integrar. Dependências oficiais de produtos serão adotadas depois da publicação válida da UI, sem lockfile fictício.

## Entrega atual: limpeza de leitura — 2026-10-18

O pedido atual autoriza o [plano de leitura](readability-plan.md). A entrega começa
pela separação de suporte e simplificação de Button, agora implementadas. Verificações, revisão atual
e próximos lotes estão em [readability-validation.md](readability-validation.md).
A revisão abaixo é a baseline deste lote e não um aceite de mudanças posteriores.

## Entrega atual: estrutura React e composições — 2026-10-18

Implementada na branch `refactor/react-component-structure`, a partir de `914164b`
mais o diagnóstico `0d0a635`. O [plano de estrutura](structure-plan.md) e a
[validação atual](structure-validation.md) substituem o discovery como próximo
passo: a mudança está preparada para PR e revisão humana.

- Atomic design foi retirado de src e do catálogo. Há 40 famílias em components,
  com nomes de arquivo de componentes; foundations/internal mantêm seus papéis.
- Arquivos em src passam de 915 para 634. Tipos curtos/estilos simples foram
  colocados perto da implementação, sem concentrar tudo num arquivo gigante.
- MetricSummary, StatCard e PracticeResultPanel têm composição por props de
  conteúdo. Vinte nomes foram agrupados como compatibilidade; nenhum export
  anterior foi removido. Os presets de autenticação preservam suas margens junto de Button.
- Arquitetura, 33 testes focados, build e API passaram. Há 822 pares de evidência
  em 187 folhas, incluindo novas APIs e navegação do catálogo. As duas variações
  residuais de pixels têm medidas no documento de validação.

Próxima tarefa única: revisar o PR atual e seus gates. Depois do aceite desta
revisão, preparar publicação da UI e adoções dos produtos; não usar aprovações
históricas como aceite da revisão atual. As demais famílias do diagnóstico
continuam explicitamente pendentes.

## Revisão atual de granularidade — 2026-10-18

A [nova análise](granularity-review.md) identifica 173 componentes exportados,
incluindo aliases, e 20 nomes candidatos à consolidação inicial. Ela separa
implementações canônicas, compatibilidade pública e arquivos de reexport.
O inventário abrange os cinco produtos; imports estáticos não foram tratados
como prova automática de uso em rota montada.

Esta entrega é somente documental. Nenhuma família adicional foi implementada,
nenhum export foi removido e não houve push, CI, release ou deploy.

A próxima implementação sugerida passa a ser internalizar as sete peças de
calendário junto de ScheduleCalendar, mantendo compatibilidade e comportamento.
Depois vêm métricas, resultado e composição de autenticação, conforme a nova
ordem de benefício/risco. Os registros abaixo descrevem o primeiro lote na época
de sua preparação; não substituem o handoff final daquele lote.

## Histórico do lote Button

O primeiro lote foi integrado pelo PR #32 em 2026-10-17, após aceite humano e
todos os gates de arquitetura, pacote, testes e quatro partições de layout.
A revisão geral continua organizada pelas famílias do plano; as famílias restantes
não estão declaradas como migradas.

## Entrega preparada

- Button concentra ações com caixa e ações de texto através de variant.
- A pasta TextButton foi retirada. Seu adaptador público, tipos e marcador legado
  ficam em Button/compatibility.tsx; testes e stories ficam junto do owner.
- Os seis arquivos de implementação anteriores de Button/TextButton passam a
  quatro. Há uma única receita e um único caminho de renderização por aparência.
- Os exports públicos antigos continuam disponíveis. O manifesto distingue uma
  implementação canônica de um nome mantido por compatibilidade, com os mesmos
  requisitos de teste, story, documentação e smoke.
- A minor 2.2.0 está em preparação de release. Nenhum deploy de produto foi
  concluído nesta etapa; a adoção do Admin está em sua feature branch.
- AGENTS.md e a referência nativa de qualidade agora explicitam o uso de props
  para variações e a exigência de propósito claro para extrair componentes.

## Validação e revisão

As 42 comparações mobile/desktop são idênticas em pixels e no contrato renderizado
medido. Há quatro capturas adicionais das stories novas de texto com ícones e
loading. Testes focados, tipos, build, API e budgets dos grupos pertinentes estão
registrados em validation.md. A CI ampla permanece a cargo do PR.

## Próxima tarefa única

O usuário autorizou seguir até produção em 2026-10-17 após a apresentação do PR #32
(cc54191). O aceite cobre a revisão apresentada. A correção posterior do auditor
não altera componentes, CSS nem imagens. Depois dos gates, preparar a adoção no Admin: trocar TextButton por Button e mapear
emphasized/subtle/danger para text/text-subtle/text-danger, incluindo MenuAction.
Esse PR de produto deve mostrar suas telas reais em tabelas Antes/Depois.

Em seguida, revisar AuthSubmitButton/AuthBackButton junto da composição dos
formulários Teacher/Student. Retirar as margens contextuais da API de botões exige
preservar o espaçamento responsivo de login/cadastro/acesso a pagamentos, sem
acrescentar variantes auth ao Button.

Visual gate review: accepted by human

## Retomada para publicação

A CI detectou LSUI007 na própria definição canônica de ButtonVariant. O auditor
agora distingue seu arquivo fonte real, resolvido a partir do módulo do pacote, de
cópias em consumidores. Uma fixture de consumidor com o mesmo caminho relativo
continua falhando. Os 12 contratos do auditor e os 731 arquivos de produção passam.
Não houve alteração dos quatro arquivos de renderização; a evidência visual permanece
válida. Publicação e adoções continuam pendentes dos gates remotos.

## Contratos da auditoria de layout

A execução 39072212345 aplicou a altura mínima de botões com caixa aos variants
de texto e exigiu seu wrapper de spinner. Button agora expõe somente um marcador
DOM interno de aparência; não muda CSS, árvore de filhos, props ou interação.
A auditoria distingue a altura de linha dos textos dos mínimos 32/40/48 px das
ações com caixa e aceita spinner direto somente na aparência de texto.

Fixtures negativas continuam rejeitando ação com caixa de 19 px, texto cortado
e spinner direto de ação com caixa. As fixtures e a auditoria focada das 11 stories
(66 cenários) passam. As 42 comparações visuais foram renovadas após o marcador: PNGs, geometria e
37 propriedades computadas continuam idênticos à baseline aprovada. Nenhuma exigência de altura dos botões
com caixa foi reduzida.

## Publicação autorizada

PR #32 integrado em 66f674c8615113e7deba2bad78ca4d5d80b5f24d.
CI da revisão: https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/39072937561
Todos os oito jobs concluídos com sucesso. O README aponta agora para a versão
correspondente do contrato; essa atualização documental não altera renderização.
A próxima tarefa é conferir o asset oficial 2.2.0 após a execução de release e
liberar a adoção no Admin, preservando o gate de revisão desse PR de produto.

## Execução contínua da UI 3 — 2026-10-19

Esta é a entrega ativa. O escopo inclui todas as famílias e os cinco consumidores;
os lotes anteriores acima são históricos. Foram retirados 40 nomes públicos e
seus tipos; restam 138 componentes com responsabilidades documentadas em
[family-review-v3.md](family-review-v3.md). Não há pasta compatibility na fonte,
nem stories/testes dentro de Button ou das demais implementações.

Fonte preparada na UI, adoções completas em features de Teacher/Student/Admin,
e compatibilidade de Site/Cupom conferida contra o mesmo candidato 3.0.0 não
publicado. Os manifests dos novos owners apontam consumidores reais. Nenhum
produto depende de URL inexistente ou file: versionado.

Validação local focada: 68 testes únicos da UI, incluindo o caso de margem após
AuthLegalText, API 139 valores/207 tipos/261 declarações, arquitetura e pacote
SSR/build consumidor. Manifesto conferido novamente após registrar consumidores.
ScheduleCalendar mede 28.773 bytes raw / 7.500 gzip, abaixo do teto dedicado
40.000/8.000; nenhum budget anterior foi ampliado. Os 91 valores de tokens usados
na troca de imports do calendário são equivalentes. Suítes amplas pertencem à CI.

Evidências atuais: UI 114 pares; Teacher 63 de rotas, 60 de previews e 33 de
autenticação controlada; Student 93 de rotas e 60 de autenticação/pagamento;
Site 48; Cupom 15; Admin 132, incluindo o complemento de métricas e cobranças. Todas usam dados sintéticos, mesma largura
390/768/1440 e rede externa bloqueada. Cadastro revelou um desvio real de margem:
o seletor de AuthLegalText passou a cobrir AuthActions; as recapturas preservam a
geometria anterior. Extensões locais de espaçamento também foram adaptadas sem
acrescentar modos cosméticos.

PR #33 permanece draft. Próxima tarefa: concluir evidências e revisão da fonte,
preparar PRs dependentes completos, obter aceite humano da revisão atual e só
então publicar a major e fixar o artefato oficial nos cinco consumidores. Nenhum
merge, release ou deploy novo é provado pelas validações locais.
