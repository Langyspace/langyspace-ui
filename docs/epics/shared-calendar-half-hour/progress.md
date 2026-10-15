# Progresso

2026-10-15: ScheduleCalendar preparado e adotado em worktrees isolados de Teacher e Admin. Apresentação única de semana, mês e agenda compacta; domínio e serviços ficam nos produtos. Layout baseado no Teacher. API aditiva, candidato 1.22.0 sem release/tag.

12 testes focados de componente/SSR/manifesto, build e API passaram. Browser nos dois consumidores em 390/1440px: abertura de meia hora, erro/sucesso e expansão mobile; teclado/arraste/link do aluno no Teacher. Estado vazio/loading do Teacher capturado. Evidência em `.github/evidence/shared-calendar-half-hour/`.

Nomes mensais respeitam a célula, meia hora mantém legibilidade sem dobrar altura, foco/seleção usam contorno de marca. Contrastes em `contrast.json`. Sem erros de runtime nos percursos sintéticos concluídos; rede externa bloqueada. Capturas do Admin cujo output não mudou foram reutilizadas depois da última alteração exclusiva do estado selecionado do Teacher.

Candidato preparado para revisão, com SHA-256 ao lado do tarball. Ambos os consumidores fixam o mesmo arquivo imutável depois do push desta branch. O pacote não foi publicado oficialmente. Sem merge, tag, release ou deploy. Testes globais/Storybook completo continuam em CI; não acompanhar runs após o push.

Dependência aberta do rollout: tipos das Functions do Teacher têm erros em arquivos da base fora do calendário. O detalhe e o plano coordenador estão em `langyspace-teacher/docs/epics/shared-calendar-half-hour/verification.md`. Revisar UI, backend/Teacher e depois Admin; resolver gates globais antes de promoção.

Integração aprovada e concluída no PR #28; veja o registro final ao fim deste documento e o coordenador Teacher para a publicação dos produtos.

Revisão mínima de UX de 2026-10-15 concluída: quatro correções centralizadas na UI (mês mobile, expansão de aulas, clique após arraste e prioridade/contador da agenda). Layout preservado, sem nova API; acessibilidade fora do escopo por pedido do produto. 13 testes únicos de componente, build/API e browser sintético Chromium 390/1440 nos dois produtos + WebKit 390 Teacher passaram. Novo candidato e evidências descritos em verification.md. Consumidores adotam o mesmo tarball imutável; nenhum backend alterado nesta revisão. Atualização dos mesmos PRs draft, sem merge, release ou deploy.

Visual gate review: accepted by human.

Entrega aprovada pelo produto em 15/10/2026: publicação e sincronização solicitadas explicitamente. Reparos mínimos dos gates: Week/Month viraram módulos internos no diretório do calendário, sem imports privados entre componentes; fixture NavigationLink recebeu href; fixtures responsivas do catálogo ganharam contexto visível; três cores de texto existentes foram normalizadas para passar o gate existente, sem alterações de layout. Relatórios JSON formatados. Concorrência unitária limitada a dois workers para evitar timeout por disputa de CPU.

Validação atual: arquitetura, lint, formato, tipos, build/API, bundle e smoke de pacote passaram; 316 testes unitários passaram com cobertura 97.31% statements, 91.10% branches, 98.69% functions, 98.42% lines. Seis casos Storybook dos componentes corrigidos passaram; demais casos sem alteração reutilizam a execução do CI anterior. Auditoria visual focada passou em 78 cenários de 11 stories. A execução local do catálogo completo foi interrompida para respeitar o escopo; não é apresentada como aprovada. Antes das cores reproduz o CSS do commit 62728dd sobre a mesma fixture; depois usa o bundle atual, em 390/1440px.

Candidato final 1.22.0: tarball SHA-256 a3a2f59f684e186d55ee28d1723294bcd54c179bafd73adb95206e93340a69a4; bundle 04dcf68941d841c4f61ae8df1703166ef74775ef3c45314a203909f941475848. Adoções apontarão para este mesmo arquivo imutável. Não houve publicação oficial de versão até este registro.

O CI completo de 9055369 passou arquitetura, pacote e todos os testes; o catálogo encontrou a story Obscured de FlashcardGhost isolada, intencionalmente invisível, e aguardou por visibilidade até o timeout. A fixture agora fornece o contêiner posicionado exigido pelo ghost e verifica explicitamente visível/oculto em play. Dois testes Storybook e 12 cenários de layout passaram. Não muda o componente ou o pacote publicado aos consumidores.

A matriz completa de 370 stories foi particionada em quatro grupos disjuntos (93/93/92/92) para caber no orçamento de cada job. A união e a ausência de duplicações são verificadas antes de cada execução; larguras, motion, regras, artefatos e gate agregado permanecem os mesmos. Não houve redução da matriz nem dos requisitos. O candidato 9055369 continua byte a byte igual.

A execução 38770987431 confirmou testes, arquitetura, pacote e duas partições visuais. As outras encontraram três fixtures antigas sem o contexto de composição exigido: CalendarMonthGrid/CalendarWeekGrid agora são demonstrados dentro de CalendarScroller; FlashcardProgressSegment recebe o host flex usado pelo produto. Nenhum componente de runtime, export ou tarball mudou. Três casos Storybook e 18 cenários visuais passaram; evidência pareada 390/1440px em ci-repairs. O pacote imutável 9055369 continua intacto.

O catálogo completo de 4edf3a4 passou 369 stories; somente WeeklyCountChart teve overflow vertical de 8px. A correção de runtime se limita a min-height: 0 no item da grade, permitindo que a barra respeite os 120px já definidos. Seis cenários focados passaram, sem mudança da API, altura do gráfico ou layout da página. Evidências 390/1440px em ci-repairs. O novo pacote substitui o candidato anterior nos consumidores; SHA-256 tarball 083c5f62f05afea131ca00c0364e13294f57e812a8b4d9e2dd4dbcd4104fab6c, bundle bc77e4a8cd8986c613b7fcf119badbdca9cc4e5787daff36c3d68a2f87d07525. Builds/backend previamente aprovados continuam válidos; os frontends serão reconstruídos e relidos em staging.

## Integração concluída — 2026-10-15

PR #28 integrado em main no commit adcbc31ffa8860075730cdd8bf1fdeada6ecf0b3, após aprovação do produto e CI completo do runtime 70e23a7916084e81d8d01feaa8b26cc89f8c17e2: arquitetura, pacote, testes/coverage e as quatro partições visuais passaram. Os 370 stories foram preservados na matriz; gate agregado também passou. Run: https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38775221089.

Teacher #48/#50 e Admin #17/#19 adotaram o mesmo candidato final 1.22.0, tarball 083c5f62f05afea131ca00c0364e13294f57e812a8b4d9e2dd4dbcd4104fab6c e bundle bc77e4a8cd8986c613b7fcf119badbdca9cc4e5787daff36c3d68a2f87d07525. A fonte de runtime do merge é idêntica à revisão testada. Não houve release/tag oficial do pacote.

Staging dos dois produtos foi publicado e relido em ambos os domínios de cada portal, incluindo login noop Teacher, abertura de 14:30, consulta da agenda Admin e persistência/cleanup de 30 minutos em fixture isolada. A publicação de produção e a sincronização final dos produtos são coordenadas no Teacher, em docs/epics/shared-calendar-half-hour/tasks/08-delivery.md e no recibo manual do mesmo epic. Não ficam tarefas de componente pendentes nesta biblioteca.
