# 06 — Estados, superfícies, dados e métricas

Responsabilidade: Revisar nomes, anatomia e props dos componentes, explicitar pais/filhos e reduzir receitas duplicadas por significado.

Subtarefas refinadas após leitura integral:

- [x] 06.1 Anatomia privada OperationalList e composição MetricSummary/StatCard: 13 testes, typecheck e arquitetura (705 fontes) passaram; risco alto e três checks justificados.
- [x] 06.2 Restringir seletores KeyValueList aos seus elementos de label/value. Teste com StatusChip reproduziu a cor sobrescrita e os dois testes do arquivo passaram após corrigir, sem mudar as assertions.
- [x] 06.3 Corrigir a anatomia de comando/ações de ScheduleRow conforme compatibility.md; validar teclado e planejar candidato major com a adoção Teacher em 09.
- [x] 06.4 Documentar os 27 contratos e concluir fichas de revisão; evidências cumulativas continuam em 10.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Cada componente e contrato Metric/Stat tem decisão; nenhum componente genérico de página ou CSS implícito novo.

Validação: Teste de composição/semântica afetada; check:api quando aplicável.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

06.3: problema de teclado antigo reproduzido (ação interna não era acionada); após anatomia nativa, 2 testes passaram para Enter/Espaço e clicks independentes. Typecheck passou; declarations foram geradas para inspeção, mas o snapshot API final e o pacote ainda dependem de build fresco em 10. Stories de foco acrescentadas; a API exige candidato major 2.0.0.

06.4: docs/components/data-feedback.md e fichas dos 27 componentes concluídas no escopo de código/contrato; etapas de evidência/indexação ainda pendentes em 10. Capturas de foco e adoção do major Teacher dependem da etapa 09.
