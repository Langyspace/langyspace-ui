# Handoff — execução contínua da UI Library

Atualizado em 2026-10-10. R01, R02, R03, R06, R07 e R11 estão implementados e preparados para
avaliação; nenhuma adoção foi mesclada. A autorização para execução contínua permite preparar
outros lotes enquanto os anteriores aguardam review. Cada PR visual exige aprovação humana
própria da revisão atual antes do merge. Nenhum auto-merge, tag, release oficial ou deploy foi feito.

## Resultado e concessões

| Lote | Contrato compartilhado e adoção                                                         | Concessão medida / limite                                                                                                                      |
| ---- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| R01  | AuthTitle, AuthDescription, AuthAccent; Login PhoneStep/TokenStep Student/Teacher       | Sem diferença de geometria/CSS nesses componentes. Os outros callsites auth continuam locais.                                                  |
| R03  | DocumentLayout; termos e privacidade Student/Teacher                                    | Rótulo pequeno muda de #ff1f5c para #cc0f45. Grade, texto, navegação, sticky e responsividade preservados.                                     |
| R02  | NoticeBanner; avisos dos AppShells Student/Teacher                                      | Ações Teacher à direita até 768px, seguindo Student. PWA, prioridades, lifecycle e ações permanecem nos produtos.                              |
| R07  | SearchInput existente, com foco ao clicar no ícone/superfície; Materiais/Alunos Teacher | Campo 41 → 40px, pill → raio 10px, padding/borda/foco canônicos. Barra conserva posição e largura, sem quebra adicional.                       |
| R06  | ActionMenu existente na barra de views salvas Admin                                     | Barra/chip/trigger iguais; popup 196 → 208px e 142,75 → 143px. Portal corrige o recorte do popup antigo. UI oficial 1.7.0 e locks preservados. |
| R11  | ToastItem e ToastViewport; Student/Teacher                                              | CTA Teacher #cc0f45 e borda warning Student #a85505. Geometria igual; timers, store, live region e navegação locais.                           |

São sete novos componentes públicos e uma adoção de SearchInput existente, sem flags de produto.
DocumentLayout/NoticeBanner usam contratos de conteúdo/composição; ToastItem tem apenas os cinco
tones que correspondem aos estados atuais. Não generalizar calendário, auth, PWA ou domínio no UI.

Site, Admin e Cupom têm PRs de documentação para o padrão permanente de evidências e revisão humana.
Esses três PRs não mudam runtime nem apresentam capturas artificiais. As adoções dos demais produtos
não são obrigatórias quando falta um correspondente elegível ou a mudança de layout supera o ganho.

## PRs, commits e CI/CD

Os nove PRs visuais foram lidos de volta: somente `# Evidências`, `## Antes`, `## Depois`, com
874 imagens nos corpos (incluindo as imagens do UI). Os oito PRs de produto permanecem em draft.
O UI está aberto para review. As 340 comparações de telas dos produtos têm pares em larguras reais:
30 auth, 28 documentos, 110 avisos, 40 busca, 62 toasts e 70 menus Admin.

A tabela registra os commits de implementação/dependência verificados. O commit UI é o que gerou
o candidato e suas evidências; uma atualização posterior exclusivamente documental não muda esse
runtime. Após cada push houve no máximo uma consulta de URLs filtrada pelo SHA. Nenhuma execução
foi visível nas consultas dos commits atuais; os links de checks são o fallback, sem alegação de CI
verde. Status, conclusões e logs não foram consultados. Staging, publicação e deploy não foram
acionados por esta entrega em feature branches.

| Entrega                   | PR / estado                                                                                                               | Commit                                                                                                            | CI de testes                                                                                                                                                   | Publicação/deploy                                                                                                          | Imagens |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| UI — contrato cumulativo  | [PR #8](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8)                                                          | [b37873be](https://github.com/MarcosLaboriosi/langyspace-ui/commit/b37873be72013e22e7d2fd7b624752b8bb468a52)      | [checks](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8/checks) — execução indisponível na consulta única                                             | [workflow](https://github.com/MarcosLaboriosi/langyspace-ui/actions/workflows/release.yml) — não acionado                  | 194     |
| Student — R01 auth        | [PR #3](https://github.com/MarcosLaboriosi/langyspace-student/pull/3) (draft)                                             | [84e33b73](https://github.com/MarcosLaboriosi/langyspace-student/commit/84e33b730dd952c9a525afe9dd4bd2d2b82d3bd7) | [checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/3/checks) — execução indisponível na consulta única                                        | [workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    | 30      |
| Teacher — R01 auth        | [PR #21](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21) (draft)                                           | [4cc46102](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/4cc46102ee70eb99261c2bba3fe939756d5dd288) | [checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21/checks) — execução indisponível na consulta única                                       | [workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    | 30      |
| Student — R02/R03 portais | [PR #4](https://github.com/MarcosLaboriosi/langyspace-student/pull/4) (draft)                                             | [07e38a2c](https://github.com/MarcosLaboriosi/langyspace-student/commit/07e38a2c9505c0841a3b36561156256c57e60ccc) | [checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/4/checks) — execução indisponível na consulta única                                        | [workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    | 164     |
| Teacher — R02/R03 portais | [PR #22](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22) (draft)                                           | [f774382f](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/f774382fb5a47de93f1737d5b2dcbd9ae822a3d7) | [checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22/checks) — execução indisponível na consulta única                                       | [workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    | 112     |
| Teacher — R07 busca       | [PR #24](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24) (draft)                                           | [4798ec4a](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/4798ec4aaa220f33d534e220a3aa9686ff109cff) | [checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24/checks) — execução indisponível na consulta única                                       | [workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    | 80      |
| Teacher — R11 toasts      | [PR #25](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25) (draft)                                           | [5a518893](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/5a51889392f01ef701bac19179b4d88522d1144a) | [checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25/checks) — execução indisponível na consulta única                                       | [workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    | 42      |
| Student — R11 toasts      | [PR #5](https://github.com/MarcosLaboriosi/langyspace-student/pull/5) (draft)                                             | [c6e3d467](https://github.com/MarcosLaboriosi/langyspace-student/commit/c6e3d4672c389ea0446b53fdb5ddac29fed3bb22) | [checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/5/checks) — execução indisponível na consulta única                                        | [workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    | 82      |
| Site — padrão de PR       | [PR #1](https://github.com/MarcosLaboriosi/langyspace/pull/1)                                                             | [c7c020a4](https://github.com/MarcosLaboriosi/langyspace/commit/c7c020a4f2ab33b9805fda5d2fb611245335db73)         | [checks](https://github.com/MarcosLaboriosi/langyspace/pull/1/checks) — execução indisponível na consulta única                                                | [workflow](https://github.com/MarcosLaboriosi/langyspace/actions/workflows/firebase-hosting-live.yml) — não acionado       | 0       |
| Admin — padrão de PR      | [PR #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10)                                                     | [35a7121b](https://github.com/MarcosLaboriosi/langyspace-admin/commit/35a7121b66ebf0aa75483b164fce424574929e98)   | [checks](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10/checks) — execução indisponível na consulta única                                         | [workflow](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-staging.yml) — não acionado      | 0       |
| Cupom — padrão de PR      | [PR #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1)                                                       | [01f092d3](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/01f092d30cb68397aa00304fe83ad2932e3451c4)   | [checks](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1/checks) — execução indisponível na consulta única                                          | [workflow](https://github.com/MarcosLaboriosi/langyspace-cupom/actions/workflows/firebase-hosting-live.yml) — não acionado | 0       |
| Admin — R06 views salvas  | [draft da branch](https://github.com/MarcosLaboriosi/langyspace-admin/pulls?q=is%3Apr%20head%3Afeat%2Fui-action-menu-r06) | [36956a7e](https://github.com/MarcosLaboriosi/langyspace-admin/commit/36956a7ed5177eabf1f179e1c8efeb5672995c67)   | [checks](https://github.com/MarcosLaboriosi/langyspace-admin/commit/36956a7ed5177eabf1f179e1c8efeb5672995c67/checks) — execução indisponível na consulta única | [workflow](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-staging.yml) — não acionado      | 140     |

## Verificação local e seus limites

- R01: oito testes UI, sete testes Student e um Teacher, API/bundle e frozen install passaram.
- R02/R03: nove testes UI/manifest, build/API/bundle, typecheck e frozen install dos dois produtos passaram.
- R07: quatro testes SearchInput, build/API/bundle, typecheck e frozen install Teacher passaram;
  os helpers existentes verificaram busca, níveis, cinco ordenações, limpar/foco e consumo de URL
  em 152 verificações por lado.
- R06: typecheck, frozen install e o teste existente de salvar/renomear/duplicar/excluir/desfazer passaram.
  Teclado/fechamento passaram em 35 cenários de browser, callbacks de view local também.
  Node 26 exigiu `--no-experimental-webstorage` no teste JSDOM; nenhum código de produto foi alterado para contornar isso.
- R11: oito testes UI/manifest, build/API/bundle, typechecks e frozen installs dos dois produtos passaram.
  Remover um toast foi verificado em cada cenário; ações de notificação remota não foram executadas.
- Todos os cinco drafts anteriores passaram frozen install após convergir para o candidato atual.
  Só os blocos UI/importer do lock mudaram; as demais dependências foram conferidas intactas.
- As capturas usam páginas reais e fixtures locais sanitizadas, rede externa bloqueada, fontes
  carregadas e viewports conferidos. Nos toasts, a animação finita terminou antes da medição.
  Loading/fallback do conteúdo de algumas rotas foi preservado nos dois lados; isso não prova
  conteúdo dinâmico, auth, instalação PWA, cobrança ou comunicação em produção.

A API cumulativa tem 39 exports de valor, 99 tipos e 132 declarações; nenhuma declaração antiga
foi removida. Bundle agregado: 103.503 bytes raw / 21.933 gzip; portal: 8.795 / 2.498;
toasts: 7.332 / 2.410. Os novos owners aumentam a biblioteca: não declarar redução do bundle final
dos produtos sem medi-lo. A exceção proposta para o orçamento agregado 104.000 / 22.000 e os novos
entries está documentada nos lotes e depende da review; limites antigos de entries e cobertura
foram preservados. Fields está em 5.564 / 5.600 gzip, portanto novas expansões exigem medir o custo.

A remoção de source local reduz a duplicação, mas a UI acrescenta contratos, cobertura e
documentação. Medição do source final formatado, somente arquivos runtime afetados nesta rodada:

| Escopo                                        | Linhas antes | Linhas depois | Diferença |
| --------------------------------------------- | ------------ | ------------- | --------- |
| R02/R03 Student                               | 365          | 169           | -196      |
| R02/R03 Teacher                               | 364          | 163           | -201      |
| R07 Teacher, incluindo os dois callers        | 425          | 400           | -25       |
| R11 Student                                   | 138          | 33            | -105      |
| R11 Teacher                                   | 166          | 55            | -111      |
| UI de R01 até R11, runtime e exports afetados | 270          | 771           | +501      |
| Total desses arquivos                         | 1.728        | 1.591         | -137      |

Os produtos removem 638 linhas desse recorte e a biblioteca acrescenta 501, com redução líquida
de 137. Isso não inclui R01, testes, stories, configuração ou documentação e não representa o
tamanho total dos projetos. O benefício principal é manter um owner para cada anatomia repetida;
não contar linhas de snapshots/screenshots como redução de runtime. R06 remove mais 37 linhas
de runtime Admin usando uma API existente, sem acrescentar código à UI: redução líquida de 174
linhas nos recortes desta rodada, excluindo R01, testes/stories/documentação e configuração.

## Candidato único e integração futura

Os sete drafts Student/Teacher usam `@langyspace/ui` 1.8.0 pelo mesmo candidato imutável.
Admin R06 conserva a versão oficial 1.7.0 porque ActionMenu já está disponível e inalterado;
não precisa atualizar dependências nem aguardar a publicação de 1.8.0. Este artefato candidato
permite avaliar os layouts Student/Teacher e não é uma release oficial:

- [Candidato 1.8.0](https://raw.githubusercontent.com/MarcosLaboriosi/langyspace-ui/b37873be72013e22e7d2fd7b624752b8bb468a52/.github/evidence/r11-toast/candidate/langyspace-ui-1.8.0.tgz).
- SHA256: `18f80c3a95dfe2c20ee2fdea1a23655b3a88b8bf9890057c0342efcf9568517c`.
- UI runtime: `b37873be72013e22e7d2fd7b624752b8bb468a52`.

O download remoto e as instalações foram conferidos contra os bytes do bundle preparado.
A política de minimumReleaseAge acrescenta somente a versão exata 1.8.0, antes da exclusão antiga;
não foi desativada nem ampliada para wildcard. Antes da integração, usar o artefato oficial
aprovado, resolver os locks e guias sobrepostos, verificar a base atual e atualizar evidências se
houver mudança visual. As branches de adoção são independentes, não uma pilha para merge cego.

As baselines diferem por momento: R01 Teacher c6c056bc; portais/busca Teacher e59d156b;
toasts Teacher f5881546; Student 9f1057fb em todos. O staging canônico Teacher avançou por outro
trabalho durante esta execução. Uma futura atualização de base exige avaliar a superfície real
afetada antes de reutilizar imagens; aprovação destes drafts não aprova mudanças posteriores.

## Custo-benefício dos próximos candidatos

| Unidade                   | Observação de fonte / decisão                                                                                                                                                                                                                                | Próxima prova necessária                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| R04 — StatePanel Cupom    | Estado atual alinhado à esquerda, padding 24px e superfície própria. O StatePanel UI é centrado e tem outra densidade. Compartilhar exigiria concessão maior ou conservar overrides duplicados; manter separado neste lote. Skeleton não deve virar spinner. | Um piloto só se uma anatomy menor demonstrar ganho sem alterar a reserva de espaço. Não houve protótipo nem captura dessa alternativa. |
| R05 — SectionHeader Cupom | Eyebrow separado, heading clamp 20–24px, metadata weight 800 e alinhamento mobile à esquerda versus recipe UI. Código local curto; não ampliar props para reproduzir toda a CSS. Adoção condicional.                                                         | Comparação de uma seção real, metadata longa e larguras intermediárias; não mexer no hero.                                             |
| R06 — ActionMenu Admin    | Piloto concluído somente na barra de views salvas, com renomear/duplicar/excluir/desfazer. Outros menus e sua CSS continuam locais.                                                                                                                          | PR com 70 pares e review humana própria; conservar versão 1.7.0.                                                                       |
| R08–R10 / R12–R24         | Permanecem propostas do mapeamento, com suas dependências e balança visual. Preparar em unidades pequenas; não migrar blocos complexos para aumentar o catálogo.                                                                                             | Escolher dois consumidores compatíveis quando houver owner novo; caso contrário manter local ou compartilhar uma parte menor.          |

Próxima unidade de implementação: R08 FilterPills Teacher, após delimitar um filtro compatível
e capturar seus estados/larguras sem mexer em seletores ricos ou controllers. A review dos lotes preparados é uma ação humana independente e pode
ocorrer em paralelo à preparação; merge/release continuam condicionados a ela.

## Retomada e preservação

Worktrees persistentes limpos e branches publicadas: `.local/langyspace-ui-library-r01/{ui,student,teacher}`
e `.local/langyspace-ui-library-continuous/{student,teacher,teacher-search,student-toast,teacher-toast,admin-menu,site-policy,admin-policy,cupom-policy}`
na home da usuária. Capturas, scripts e metadados de leitura estão em
`/Users/margaridamartins/.local/langyspace-ui-library-continuous`.

O trabalho paralelo no checkout Teacher preservou o planejamento anterior em
`/Users/margaridamartins/.local/langyspace-pre-reconciliation-sync-20261010`. A pasta deste épico
foi restaurada no caminho original da IDE e atualizada sem alterar código/políticas desse trabalho.
Os checkouts canônicos não foram mesclados com features pendentes para forçar alinhamento.

Visual gate review: pending human.
