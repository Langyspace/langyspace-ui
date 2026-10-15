# Progresso

2026-10-15: ScheduleCalendar preparado e adotado em worktrees isolados de Teacher e Admin. Apresentação única de semana, mês e agenda compacta; domínio e serviços ficam nos produtos. Layout baseado no Teacher. API aditiva, candidato 1.22.0 sem release/tag.

12 testes focados de componente/SSR/manifesto, build e API passaram. Browser nos dois consumidores em 390/1440px: abertura de meia hora, erro/sucesso e expansão mobile; teclado/arraste/link do aluno no Teacher. Estado vazio/loading do Teacher capturado. Evidência em `.github/evidence/shared-calendar-half-hour/`.

Nomes mensais respeitam a célula, meia hora mantém legibilidade sem dobrar altura, foco/seleção usam contorno de marca. Contrastes em `contrast.json`. Sem erros de runtime nos percursos sintéticos concluídos; rede externa bloqueada. Capturas do Admin cujo output não mudou foram reutilizadas depois da última alteração exclusiva do estado selecionado do Teacher.

Candidato preparado para revisão, com SHA-256 ao lado do tarball. Ambos os consumidores fixam o mesmo arquivo imutável depois do push desta branch. O pacote não foi publicado oficialmente. Sem merge, tag, release ou deploy. Testes globais/Storybook completo continuam em CI; não acompanhar runs após o push.

Dependência aberta do rollout: tipos das Functions do Teacher têm erros em arquivos da base fora do calendário. O detalhe e o plano coordenador estão em `langyspace-teacher/docs/epics/shared-calendar-half-hour/verification.md`. Revisar UI, backend/Teacher e depois Admin; resolver gates globais antes de promoção.

Próxima ação: revisão humana do PR de `feat/shared-calendar-half-hour` para main e dos PRs de adoção para staging. Preservar esta feature/worktree enquanto aguarda.

Visual gate review: pending human.
