# Progresso

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
