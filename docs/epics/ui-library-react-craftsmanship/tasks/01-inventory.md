# 01 — Inventário completo e fatos dos consumidores

Responsabilidade: Reconciliar export names, owners e referências; registrar tipos/estilos/stories/testes e imports/reexports nos cinco produtos. Separar fato de uso importado, uso ativo e julgamento de qualidade.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Relação nominal reconciliada sem componente omitido; sinais rastreáveis e itens ainda não revisados claramente pendentes.

Validação: Comparar src/index.ts e component-manifest; verificar paths das referências, sem executar runtime/tests.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

Evidência: inventory.json/review.md e critical-review.md; 169 componentes e 641 imports/reexports observados, sem aprovação automática de qualidade.
