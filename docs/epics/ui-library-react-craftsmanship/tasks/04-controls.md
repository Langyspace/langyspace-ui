# 04 — Ações, campos e formulários

Responsabilidade: Ler e decidir cada contrato de ação/campo/formulário, preservar attrs/ref/labels/submit e melhorar apenas complexidade demonstrada.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Todos os componentes da família revisados; API/JSX recomendados simples e cobertura de interação pertinente.

Validação: Testes focados dos contratos alterados; check:api se tipos públicos mudarem.

Pré-requisito descoberto no typecheck: NavigationLink.test.tsx já usava o componente sem seu href obrigatório na baseline. Corrigir somente a fixture e a asserção do atributo nativo nesta tarefa; o componente/contrato de navegação continua na tarefa 07. Não afrouxar o tipo href para esconder o erro.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

Código/contratos dos 23 componentes revisados. Decisões em decisions.md; orientações em docs/components/controls.md. Validação: 21 testes focados e typecheck passaram. Publicação/indexação/capturas cumulativas continuam explicitamente pendentes em 10, sem marcação global falsa de conclusão.
