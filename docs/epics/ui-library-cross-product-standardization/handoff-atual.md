# Handoff atual — R09 aceita e R10 preparada

Atualizado em 2026-10-12. Os 13 PRs anteriores continuam integrados; registros de produção da
1.8.0 permanecem em integracao-aprovada.md. R09 foi aceita explicitamente pela pessoa responsável
para UI #9, Admin #12 e Teacher #29, nos heads ee7180cc/05fb53ce/de06f73a.

UI #9 integrada em [db4cfe8d](https://github.com/MarcosLaboriosi/langyspace-ui/commit/db4cfe8d63b862270185b2d916003ca218a9fe8b).
O primeiro job de release 1.9.0 excedeu 20 minutos. Correção técnica em
[46c32e4e](https://github.com/MarcosLaboriosi/langyspace-ui/commit/46c32e4e454c7bf171911f59fe7e094cee1ce9a7):
timeout 45 minutos, dispatch da tag aprovada, HEAD/versão/ancestralidade confirmados e todos os
gates preservados. [Retomada](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38265767122)
iniciada; [diagnóstico](r09/release-recovery.md). Sem mover tag ou publicar candidato manualmente.

Release oficial 1.9.0 disponível: checksum
`01475176421ba1e1605ea8aca0508def769729effbd42f1f82c9ab91905f7edb`; os 277 arquivos são
idênticos ao candidato das capturas. [Release](https://github.com/MarcosLaboriosi/langyspace-ui/releases/tag/v1.9.0).

| Integração R09 | Commit                                                                                                            | Testes/staging                                                                                        | Produção                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Admin #12      | [deea39cd](https://github.com/MarcosLaboriosi/langyspace-admin/commit/deea39cdac691cd3e61593ffa7e1ca569891e861)   | [Pipeline](https://github.com/MarcosLaboriosi/langyspace-admin/actions/runs/38269184341) — iniciado   | [Deploy](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-hosting-live.yml) — run indisponível na consulta única   |
| Teacher #29    | [32073319](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/320733192b66eb81a5654e704f3a42a9c8fd80df) | [Pipeline](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38269218823) — iniciado | [Deploy](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-hosting-live.yml) — run indisponível na consulta única |

Troca de URL/integrity não alterou src, estilos, imagens ou conteúdo do pacote. Fonte visual
aceita preservada. Os 16 PRs aprovados estão integrados; pipelines dos produtos assíncronos.
Checkouts canônicos limpos e alinhados com main/staging/origin.

## Próximo lote — R10

FilterToolbar com nome acessível obrigatório, children/ref/div nativos e uma recipe flex-wrap:
gap 12px, 8px/stretch até 900px. Margens Teacher e grid 1100px Admin continuam locais; superfície
Admin compõe Card e ganha apenas a sombra discreta. Sem props de produto/layout/surface.

26 imagens de stories novas; 56 pares Teacher (/alunos,/materiais, sete estados/quatro larguras),
105 pares Admin (/mensagens, sete estados/15 larguras). Total: 348 imagens. Conteúdo, controles e
geometria iguais antes/depois nos 161 pares; somente a sombra prevista muda em Admin. Imagens
públicas imutáveis, tabela Antes/Depois e width 400 nos novos drafts.

Contrato UI/ref/teclado e API/bundle passaram. UI: 41 valores/101 tipos/138 declarations,
+518 raw/+79 gzip; capacidade específica e estimativa corrigida do entry novo layout estão
no [plano](r10/technical-plan.md). Typechecks dos produtos e quatro testes Messaging passaram.
Teacher remove 15 linhas líquidas de src; Admin acrescenta nove, em parte pela formatação do
import, e não remove ainda FilterBar global. Review deve julgar se a composição Admin compensa.

Candidato 1.10.0 anexado ao branch público da UI para review, com checksum e conteúdo conferidos;
não é release oficial. Fontes/stories/imagens preparadas antes de abrir PRs de adoção. Cada PR
novo exige aceite próprio; o aceite R09 não cobre R10. CI ampla e deploy permanecem assíncronos.
Links/SHAs de entrega e consultas únicas de CI ficam no handoff local da execução contínua.

Drafts atuais: [UI #10](https://github.com/MarcosLaboriosi/langyspace-ui/pull/10),
[Admin #13](https://github.com/MarcosLaboriosi/langyspace-admin/pull/13),
[Teacher #31](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/31). Fonte dos pilotos e
imagens preservadas após conciliar a base R09.

Próxima tarefa: review humana própria desses três drafts. R12–R24 continuam propostas; R04/R05 continuam separados pelo custo.

Visual gate review: pending human — R10.
