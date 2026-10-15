# Verificação da entrega

Impacto direto. Superfícies: Teacher `/calendario` e links da agenda do aluno; Admin
`/agenda?tab=calendario&prof=p1` (também acessível pela ação Agenda da professora). Preview de
agendamento experimental no Admin recebe horários :30 do backend.

## Fontes e artefato

- Teacher baseline: `c60567839ea5c7230044c92e52465023b38aad74`.
- Admin baseline: `00693113c2a5c8bce5df2246a0b8a95eefaa676d`.
- UI baseline: `8cdd415562db7f9aa060218ff00727aec7289dcb`.
- Fonte atual: commit deste documento e branch `feat/shared-calendar-half-hour` em cada repositório.
- UI 1.22.0 é um candidato de review imutável. Não há release/tag oficial nesta entrega. Ambos os
  consumidores fixam o mesmo tarball/checksum.

## Evidência local

- UI: 12 testes focados de componente, SSR e manifesto. Build e declarações passaram, API
  deliberadamente aditiva (1 componente e 4 tipos), sem mudar primitives existentes. Bundle abaixo
  dos budgets existentes (aproximadamente 294KB raw / 62KB gzip).
- Teacher: 28 testes de slots/eventos/otimismo passaram. Tipos do frontend passaram.
- Functions: 59 testes focados passaram, incluindo persistência transacional real simulada, recorte
  de blocos legados e preview 30/50. Depois dos ajustes de tipagem da fixture, os 22 testes dos
  arquivos alterados novamente passaram.
- Admin: 5 testes focados passaram: navegação, disponibilidade/indisponibilidade, 14:30 no Brasil
  com payload UTC e duração 30, pending e busca de aula. Tipos do frontend passaram.
- Browser Chromium: 390/1440px, semana/mês, abertura de meia hora, sucesso, falha mantendo drawer,
  expansão mobile; Teacher também evento experimental, link do aluno, teclado e arraste retangular.
  Estado vazio e carregamento do Teacher capturados. Sem overflow horizontal do documento. Eventos
  mensais medidos dentro das células.
- Dados e respostas de mutação são sintéticos; toda requisição para fora do servidor local foi
  abortada. Isso não prova Firestore, Calendar/Meet, integração ou produção. Avisos de rede
  Firestore são esperados nessa fronteira isolada. Nenhum erro de execução da página nos percursos
  concluídos.
- O browser força novo cache Vite para verificar o tarball atual. Baselines adicionais usam arquivos
  extraídos dos SHAs acima com os mesmos dados, fontes, viewport e tema claro. No Admin antigo, a
  agenda mobile não oferecia os mesmos horários acionáveis; a comparação desse percurso usa a grade
  anterior.

## Limitação de tipos das Functions

`tsc --noEmit` de learning e identity-enrollment-core não passa no baseline atual: erros em
commerce-core (Asaas), activities, lessonRecurrences, attendance, projection e testes fora do
calendário. Os arquivos com erros restantes em learning foram comparados por diff e são idênticos à
base. Nenhum diagnóstico restante em scheduleBlocks. Os erros fora do escopo não foram modificados
nem mascarados; impedem considerar a validação global aprovada. CI/gates completos ficam
responsáveis por essa fronteira antes de promoção.

## Revisão técnica e visual local

Contrato único de semana/mês/agenda compacta em `@langyspace/ui`; adapters só normalizam
dados/callbacks. Removidos grids, cartões mobile, seleção e estilos duplicados. Datas/instantes,
permissões, side effects e domínio continuam nos produtos. Legado de 50 minutos preservado por
recorte, incluindo lote e estado otimista. Sem alteração de Rules, autenticação ou nomes públicos de
Functions.

Nomes completos permanecem acessíveis e em tooltip; ellipsis fica dentro da célula. Alvos de meia
hora têm 28px e eventos de 30min, 26px; mobile usa controles maiores. Foco e seleção têm contorno de
marca. Contrastes medidos no tema claro: marca/branco 5.64, muted/branco 5.33, success 6.49,
texto/evento 17.51. Não houve mudança de tema escuro (produtos auditados em tema claro);
dispositivos físicos, Safari, gates completos e integração real não foram executados localmente.

Revisão local de experiência concluída para os quatro pontos autorizados; detalhes e fronteiras da
revisão atual abaixo. O julgamento de layout pertence ao produto. A limitação de tipos das
Functions continua aberta.

## Continuação

1. Revisar o PR UI para main e os PRs Teacher/Admin para staging na revisão atual; imagens em
   `.github/evidence/shared-calendar-half-hour/`.
2. Resolver a limitação de tipos/global gates antes de promover. Rollout: biblioteca revisada,
   backend/Teacher e depois Admin, para não enviar 30 minutos a um backend antigo.
3. Sem merge automático, release, dispatch ou deploy nesta entrega. Após push, consultar somente uma
   vez os URLs dos workflows do SHA exato, sem acompanhar status/logs.

## Revisão mínima de experiência — 2026-10-15

Quatro correções no componente compartilhado, sem nova API ou redesenho: mês compacto exclui dias de outros meses; `+N mais` expande/recolhe aulas na própria célula; nova interação limpa a supressão do clique do arraste anterior; agenda compacta mostra aulas e até três horários disponíveis, mantendo as demais ações na expansão. Contador informa aulas em vez de somar horários sem aula. Textos e estrutura existentes preservados. Acessibilidade não foi incluída nesta revisão, conforme pedido explícito do produto.

UI: 13 testes únicos de ScheduleCalendar passaram (10 na primeira execução, três após ajustar as consultas da fixture oculta no jsdom); seis casos novos cobrem as quatro correções e suas fronteiras. Build/declarações e check:api passaram. API pública inalterada; snapshot mudou somente pelo `More` interno passar de div para Pressable. Bundle 294.57KB / 61.89KB gzip.

Browser sintético Chromium em Teacher e Admin, 390/1440px: mês compacto contém apenas outubro, previews mostram horários livres, expansão mantém outras ações e documento sem overflow horizontal. Teacher confirmou primeiro clique após arraste em duas tentativas, expansão de cinco aulas e abertura da aula antes escondida. WebKit 390px confirmou o mês e a expansão mobile do Teacher. Sem erros de execução nos percursos concluídos. Rede externa bloqueada; nenhum dado real alterado.

Tarball candidato 1.22.0 desta revisão: SHA-256 `2edcd8a92878b0a8a3488b5cfd19f6f48a9c5f1ac5cfe8c0f45ae40c48c9f028`; bundle `b612bc7d42044d8fe5bb151e470acd9f7c9532753950555714453258c190859d`, idêntico nos dois consumidores. Sem release/tag. Evidência da revisão em `.github/evidence/shared-calendar-half-hour/revision-ux/` nos produtos e nas pastas teacher/admin da UI. Antes da revisão usa os três SHAs indicados na tarefa 7; as comparações originais de antes do componente permanecem preservadas.

Reprodução: `node scripts/capture-shared-calendar-ux.mjs after teacher`, `node scripts/capture-shared-calendar-ux.mjs after admin` e `REVIEW_ENGINE=webkit node scripts/capture-shared-calendar-ux.mjs after teacher`, a partir do worktree Teacher com Admin irmão. O capturador força cache Vite novo e o Admin usa configuração Vite isolada equivalente (React/alias), sem o carregador da configuração raiz. Dispositivos físicos e integrações reais não foram verificados.

PRs draft existentes: UI #28, Teacher #48, Admin #17. Atualizar revisão e imagens, sem merge/deploy; julgamento visual do produto permanece pendente. A limitação global de tipos das Functions descrita acima não foi alterada nesta revisão de UX.

Visual gate review: accepted by human.

Integração final: CI completo 38775221089 aprovado no runtime 70e23a7; merge adcbc31. Aprovação humana registrada no coordenador. Adoções finais #50 Teacher e #19 Admin usam o tarball 083c5f62f05afea131ca00c0364e13294f57e812a8b4d9e2dd4dbcd4104fab6c. Esta atualização é apenas documental, sem alteração no código/configuração de runtime validado.
