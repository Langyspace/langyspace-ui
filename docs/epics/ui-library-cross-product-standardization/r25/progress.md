# Progresso R25 — concluído em 2026-10-14

QuizSessionHeader compartilhado com cinco props name/counter/progress/backLabel/onBack. Student /licoes Gramática/personalizadas; Teacher /alunos/:id/licoes, incluindo loading. Questões, áudio, navegação, resultado e persistência permanecem locais. Layouts e dimensões preservados; contador muted e progresso comum com reduced motion.

[UI #26](https://github.com/MarcosLaboriosi/langyspace-ui/pull/26), [Student #19](https://github.com/MarcosLaboriosi/langyspace-student/pull/19) e [Teacher #42](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/42) integrados. 40 PNGs de stories e 308 pares originais preservados. [UI 1.20.0 oficial](https://github.com/MarcosLaboriosi/langyspace-ui/releases/tag/v1.20.0): mesmos 357 arquivos e bytes do candidato; SHA256 0568136d75f51c0830ef2644affc04cfd49dfd649c69d98c788efeb0b95c9367.

A product owner autorizou publicação manual por bloqueio de cobrança GitHub e pediu main/staging local/remota atualizadas. Sequência: UI → staging publicado e E2E real → promoção main por fast-forward → Hosting produção e read-back. Commits desta exceção usam [skip ci]; workflows/proteções intactos, sem fabricar staging-verified do Actions. Testes/recibos locais são identificados como manuais.

Arquitetura, lint, Prettier e TypeScript locais aprovados; cinco stories focadas aprovadas. Tests/package da CI anterior passaram no payload inalterado e foram reutilizados. A story Updating recebeu apenas um nome de função, sem mudar runtime ou imagens. O catálogo GitHub Pages permanece fora desta publicação manual.

S01–S04 concluídas; nenhuma tarefa pendente neste recorte. Outras famílias condicionais/adiadas não foram forçadas. Próximo discovery precisa de recorte próprio e balança de custo/benefício.

Visual gate review: accepted by human — pedido explícito de publicação das revisões apresentadas.

Recibo completo: /Users/margaridamartins/.local/langyspace-ui-library-continuous/manual-publication-20261014. Handoff .local/ui-library-handoff-atual.md no Teacher. Checkouts e refs alinhados ao encerrar; recovery worktrees/drafts CSV, analytics e Pix preservados.
