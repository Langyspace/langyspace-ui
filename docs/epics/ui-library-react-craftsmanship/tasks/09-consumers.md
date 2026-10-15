# 09 — Simplificação comprovada dos consumidores

Responsabilidade: Criar worktrees a partir dos destinos atuais para cada consumidor afetado; remover aliases/wrappers sem responsabilidade, conservar bridges/geométricos.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Inventário de adaptações por produto e todos os usos afetados atualizados, sem prop por produto ou mudança de domínio.

Validação: Guard/tipos focados de cada consumidor afetado; snapshots/fluxos correspondentes, não full E2E.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

Dependência obrigatória de 06: adaptar Teacher ClassRow à API ScheduleRow onOpen/openLabel e remover role/tabIndex/onKeyDown do wrapper. Converter wrappers de identidade para conteúdo phrasing com display preservado; nenhuma regra onMark/onOpen/Meet muda. Todos os cinco consumidores adotarão o candidato major 2.0.0; não publicar como minor/patch.

Resultado:5 worktrees e planos criados; Teacher/Student adotaram todos os contratos afetados e retiraram markup/CSS duplicado. Teacher:4 testes/3arquivos e tipos; skeleton:1teste selecionado/13skip e tipos. Student:3 testes e tipos;22 variaveis identicas removidas. Source/stores/scheduler e telemetry alheia preservados. Triagem semantica de102reexports encontrou2aliases mortos, ambos confirmados por busca exata. ShadowingContext publico retirado na major, ShadowingContextPhrase mantido;3 novos owners registrados com fixtures e5testes de manifest passaram.

Admin/Site/Cupom nao requerem adaptacao de JSX para estes contratos; adocao de dependencia imutavel de todos os5, validacao final, catalogo/API e capturas pertencem a10. Nenhum commit/push/PR/deploy ainda.
