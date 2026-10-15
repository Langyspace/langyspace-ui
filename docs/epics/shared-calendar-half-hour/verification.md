# Verificação da entrega

Impacto direto. Superfícies: Teacher `/calendario` e links da agenda do aluno; Admin `/agenda?tab=calendario&prof=p1` (também acessível pela ação Agenda da professora). Preview de agendamento experimental no Admin recebe horários :30 do backend.

## Fontes e artefato

- Teacher baseline: `c60567839ea5c7230044c92e52465023b38aad74`.
- Admin baseline: `00693113c2a5c8bce5df2246a0b8a95eefaa676d`.
- UI baseline: `8cdd415562db7f9aa060218ff00727aec7289dcb`.
- Fonte atual: commit deste documento e branch `feat/shared-calendar-half-hour` em cada repositório.
- UI 1.22.0 é um candidato de review imutável. Não há release/tag oficial nesta entrega. Ambos os consumidores fixam o mesmo tarball/checksum.

## Evidência local

- UI: 12 testes focados de componente, SSR e manifesto. Build e declarações passaram, API deliberadamente aditiva (1 componente e 4 tipos), sem mudar primitives existentes. Bundle abaixo dos budgets existentes (aproximadamente 294KB raw / 62KB gzip).
- Teacher: 28 testes de slots/eventos/otimismo passaram. Tipos do frontend passaram.
- Functions: 59 testes focados passaram, incluindo persistência transacional real simulada, recorte de blocos legados e preview 30/50. Depois dos ajustes de tipagem da fixture, os 22 testes dos arquivos alterados novamente passaram.
- Admin: 5 testes focados passaram: navegação, disponibilidade/indisponibilidade, 14:30 no Brasil com payload UTC e duração 30, pending e busca de aula. Tipos do frontend passaram.
- Browser Chromium: 390/1440px, semana/mês, abertura de meia hora, sucesso, falha mantendo drawer, expansão mobile; Teacher também evento experimental, link do aluno, teclado e arraste retangular. Estado vazio e carregamento do Teacher capturados. Sem overflow horizontal do documento. Eventos mensais medidos dentro das células.
- Dados e respostas de mutação são sintéticos; toda requisição para fora do servidor local foi abortada. Isso não prova Firestore, Calendar/Meet, integração ou produção. Avisos de rede Firestore são esperados nessa fronteira isolada. Nenhum erro de execução da página nos percursos concluídos.
- O browser força novo cache Vite para verificar o tarball atual. Baselines adicionais usam arquivos extraídos dos SHAs acima com os mesmos dados, fontes, viewport e tema claro. No Admin antigo, a agenda mobile não oferecia os mesmos horários acionáveis; a comparação desse percurso usa a grade anterior.

## Limitação de tipos das Functions

`tsc --noEmit` de learning e identity-enrollment-core não passa no baseline atual: erros em commerce-core (Asaas), activities, lessonRecurrences, attendance, projection e testes fora do calendário. Os arquivos com erros restantes em learning foram comparados por diff e são idênticos à base. Nenhum diagnóstico restante em scheduleBlocks. Os erros fora do escopo não foram modificados nem mascarados; impedem considerar a validação global aprovada. CI/gates completos ficam responsáveis por essa fronteira antes de promoção.

## Revisão técnica e visual local

Contrato único de semana/mês/agenda compacta em `@langyspace/ui`; adapters só normalizam dados/callbacks. Removidos grids, cartões mobile, seleção e estilos duplicados. Datas/instantes, permissões, side effects e domínio continuam nos produtos. Legado de 50 minutos preservado por recorte, incluindo lote e estado otimista. Sem alteração de Rules, autenticação ou nomes públicos de Functions.

Nomes completos permanecem acessíveis e em tooltip; ellipsis fica dentro da célula. Alvos de meia hora têm 28px e eventos de 30min, 26px; mobile usa controles maiores. Foco e seleção têm contorno de marca. Contrastes medidos no tema claro: marca/branco 5.64, muted/branco 5.33, success 6.49, texto/evento 17.51. Não houve mudança de tema escuro (produtos auditados em tema claro); dispositivos físicos, Safari, gates completos e integração real não foram executados localmente.

Revisão local pronta para apresentação, zero bloqueadores de interação e zero problemas visuais conhecidos no escopo verificado; julgamento de layout pertence ao produto. A limitação de tipos das Functions continua aberta.

## Continuação

1. Revisar o PR UI para main e os PRs Teacher/Admin para staging na revisão atual; imagens em `.github/evidence/shared-calendar-half-hour/`.
2. Resolver a limitação de tipos/global gates antes de promover. Rollout: biblioteca revisada, backend/Teacher e depois Admin, para não enviar 30 minutos a um backend antigo.
3. Sem merge automático, release, dispatch ou deploy nesta entrega. Após push, consultar somente uma vez os URLs dos workflows do SHA exato, sem acompanhar status/logs.

Visual gate review: pending human.
