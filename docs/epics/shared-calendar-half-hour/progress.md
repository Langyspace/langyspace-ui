# Progresso

2026-10-15: ScheduleCalendar preparado e adotado em worktrees isolados de Teacher e Admin. Apresentação única de semana, mês e agenda compacta; domínio e serviços ficam nos produtos. Layout baseado no Teacher. API aditiva, candidato 1.22.0 sem release/tag.

12 testes focados de componente/SSR/manifesto, build e API passaram. Browser nos dois consumidores em 390/1440px: abertura de meia hora, erro/sucesso e expansão mobile; teclado/arraste/link do aluno no Teacher. Estado vazio/loading do Teacher capturado. Evidência em `.github/evidence/shared-calendar-half-hour/`.

Nomes mensais respeitam a célula, meia hora mantém legibilidade sem dobrar altura, foco/seleção usam contorno de marca. Contrastes em `contrast.json`. Sem erros de runtime nos percursos sintéticos concluídos; rede externa bloqueada. Capturas do Admin cujo output não mudou foram reutilizadas depois da última alteração exclusiva do estado selecionado do Teacher.

Candidato preparado para revisão, com SHA-256 ao lado do tarball. Ambos os consumidores fixam o mesmo arquivo imutável depois do push desta branch. O pacote não foi publicado oficialmente. Sem merge, tag, release ou deploy. Testes globais/Storybook completo continuam em CI; não acompanhar runs após o push.

Dependência aberta do rollout: tipos das Functions do Teacher têm erros em arquivos da base fora do calendário. O detalhe e o plano coordenador estão em `langyspace-teacher/docs/epics/shared-calendar-half-hour/verification.md`. Revisar UI, backend/Teacher e depois Admin; resolver gates globais antes de promoção.

Próxima ação: revisão humana do PR de `feat/shared-calendar-half-hour` para main e dos PRs de adoção para staging. Preservar esta feature/worktree enquanto aguarda.

Revisão mínima de UX de 2026-10-15 concluída: quatro correções centralizadas na UI (mês mobile, expansão de aulas, clique após arraste e prioridade/contador da agenda). Layout preservado, sem nova API; acessibilidade fora do escopo por pedido do produto. 13 testes únicos de componente, build/API e browser sintético Chromium 390/1440 nos dois produtos + WebKit 390 Teacher passaram. Novo candidato e evidências descritos em verification.md. Consumidores adotam o mesmo tarball imutável; nenhum backend alterado nesta revisão. Atualização dos mesmos PRs draft, sem merge, release ou deploy.

Visual gate review: accepted by human.

Entrega aprovada pelo produto em 15/10/2026: publicação e sincronização solicitadas explicitamente. Reparos mínimos dos gates: Week/Month viraram módulos internos no diretório do calendário, sem imports privados entre componentes; fixture NavigationLink recebeu href; fixtures responsivas do catálogo ganharam contexto visível; três cores de texto existentes foram normalizadas para passar o gate existente, sem alterações de layout. Relatórios JSON formatados. Concorrência unitária limitada a dois workers para evitar timeout por disputa de CPU.

Validação atual: arquitetura, lint, formato, tipos, build/API, bundle e smoke de pacote passaram; 316 testes unitários passaram com cobertura 97.31% statements, 91.10% branches, 98.69% functions, 98.42% lines. Seis casos Storybook dos componentes corrigidos passaram; demais casos sem alteração reutilizam a execução do CI anterior. Auditoria visual focada passou em 78 cenários de 11 stories. A execução local do catálogo completo foi interrompida para respeitar o escopo; não é apresentada como aprovada. Antes das cores reproduz o CSS do commit 62728dd sobre a mesma fixture; depois usa o bundle atual, em 390/1440px.

Candidato final 1.22.0: tarball SHA-256 a3a2f59f684e186d55ee28d1723294bcd54c179bafd73adb95206e93340a69a4; bundle 04dcf68941d841c4f61ae8df1703166ef74775ef3c45314a203909f941475848. Adoções apontarão para este mesmo arquivo imutável. Não houve publicação oficial de versão até este registro.
