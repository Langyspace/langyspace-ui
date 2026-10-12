# Handoff atual — produção aprovada e R09 em review

Atualizado em 2026-10-12. Os 13 PRs aprovados (12 anteriores + R08) foram integrados. UI 1.8.0 foi publicada pelo workflow normal, com checksum e tipos conferidos. Admin, Student e Teacher passaram staging, promoção e deploy produtivo; seus bundles foram conferidos. Não houve bypass, push direto a main de produto, mutação de dados/providers ou auto-merge.

## Produção verificada

| Produto            | Commit produtivo                                                                                                  | CI staging / testes                                                                       | CI produção                                                                              | Read-back                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| langyspace-admin   | [314c1a30](https://github.com/MarcosLaboriosi/langyspace-admin/commit/314c1a303f437069054112b1ebbb45c02c6d177b)   | [Staging](https://github.com/MarcosLaboriosi/langyspace-admin/actions/runs/38118444466)   | [Deploy](https://github.com/MarcosLaboriosi/langyspace-admin/actions/runs/38119047484)   | `/assets/index-B99VOX_i.js` — entry idêntico ao artefato                         |
| langyspace-student | [17e9da07](https://github.com/MarcosLaboriosi/langyspace-student/commit/17e9da07841a4bdee78d4bc759f01b77953e79a1) | [Staging](https://github.com/MarcosLaboriosi/langyspace-student/actions/runs/38124521949) | [Deploy](https://github.com/MarcosLaboriosi/langyspace-student/actions/runs/38124867766) | `/assets/index-BEzfR6mJ.js` — entry mudou e contém os componentes compartilhados |
| langyspace-teacher | [d587b157](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/d587b1578c2fff4e37afb0c4025f8dfeee423152) | [Staging](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38124970027) | [Deploy](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38125667318) | `/assets/index-BeI7jrBQ.js` — entry mudou e contém os componentes compartilhados |

UI: [merge d7066591](https://github.com/MarcosLaboriosi/langyspace-ui/commit/d7066591b096d64fc8dc0d37d11db967a16decc0), [CI da revisão](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38119755276), [release/CI/CD](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38123586487), [artefato 1.8.0](https://github.com/MarcosLaboriosi/langyspace-ui/releases/tag/v1.8.0). SHA-256 do pacote: `5f3b93989f607cff60fb2d3a9b949a7f2ad801121577431ea627e73794ac49c3`.

Site/Cupom: PRs do padrão de review integrados, sem alteração de runtime. Todos os merges estão em [integracao-aprovada.md](integracao-aprovada.md). Os sete consumidores Student/Teacher usam a URL oficial; nenhum candidato 1.8.0 ficou em staging. Checkouts canônicos alinhados com seus destinos e limpos; estados locais anteriores preservados em worktrees/branches de recovery verificadas. Draft Pix ignorado preservado.

## Próximo lote preparado — R09

Card com uma recipe de superfície, children e props HTML/ref de div. Sem variantes de padding/radius/sombra. Somente dois painéis de Início/Admin e o resumo da semana/Teacher. Outros cards, tabelas, Surface, KPIs, alertas e grids continuam locais.

| Novo PR                                                                                 | Evidências                                                          | Commit preparado                                                                                                  | CI de testes                                                                    | Deploy / publicação                                                                                                                 |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [UI #9](https://github.com/MarcosLaboriosi/langyspace-ui/pull/9)                        | 16 imagens de stories novas; Antes identificado sem versão anterior | [fd7ee532](https://github.com/MarcosLaboriosi/langyspace-ui/commit/fd7ee532b4297b663159a524a2ddd2b47c7e51a3)      | [CI](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38125518519) | [Release](https://github.com/MarcosLaboriosi/langyspace-ui/actions/workflows/release.yml) — não acionada para 1.9.0                 |
| [langyspace-admin #12](https://github.com/MarcosLaboriosi/langyspace-admin/pull/12)     | 39 pares / 78 imagens                                               | [e6092849](https://github.com/MarcosLaboriosi/langyspace-admin/commit/e6092849502b58099c5c172314200b27c63eee01)   | [CI](https://github.com/MarcosLaboriosi/langyspace-admin/pull/12/checks)        | [Staging](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-staging.yml) — não acionada para o draft   |
| [langyspace-teacher #29](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/29) | 16 pares / 32 imagens                                               | [49a1b9ae](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/49a1b9ae066cc683ab46154050df9386965eb9d2) | [CI](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/29/checks)      | [Staging](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionada para o draft |

Total R09: 55 pares nos produtos + 16 stories novas = 126 imagens. Os corpos contêm apenas `# Evidências` e tabela Antes/Depois, com URLs públicos imutáveis e `width="400"`. Amostras públicas e bytes originais conferidos.

Concessões: Admin 18px→16px, removendo duas regras de padding legado; altura diminui até 24,28px quando uma linha deixa de quebrar. Teacher 20px→16px, -8px de altura sem alterar conteúdo/posição horizontal/largura; erros sem card são idênticos. Navegação por teclado Admin preservada em 39 pares, nenhum overflow.

Custo-benefício: 15 linhas líquidas removidas dos produtos e 27 adicionadas à UI no runtime, excluindo testes/stories/docs/config. O primeiro piloto acrescenta 12 linhas no total e centraliza a manutenção da superfície em dois consumidores. Não migrar as demais superfícies para amortizar esse custo sem prova de compatibilidade. [Plano R09](r09/technical-plan.md) registra os limites, checks e decisão de manter local se a concessão não compensar.

Checks focados: contrato de grupo/ref/teclado, build/API e budgets UI; typecheck e lock congelado Admin; typecheck/arquitetura Teacher e comparação semântica de inventário (somente fingerprint derivado, sem ratchet ampliado). Preparação de imagens/ações e composição cobriu os pilotos. CI ampla dos drafts não foi monitorada e não foi declarada concluída.

Correção solicitada de CI em 2026-10-12: duas matrizes JSON foram formatadas, com valores
preservados, e o candidato foi incluído explicitamente no Git. O commit antigo `7e1292a6`
continha só o checksum e sua URL retorna 404; os produtos devem apontar ao commit com o arquivo.
O check de formatação completo passou, sem mudanças em runtime ou imagens. Diagnóstico e
validação em [ci-correction.md](r09/ci-correction.md); as entregas dos consumidores ficam em seus
documentos `ui-library-card-r09` e no handoff local da execução contínua.

Após essa correção, a próxima tarefa é review humana própria dos três drafts R09. Após o aceite,
release oficial 1.9.0 e substituição do candidato nos produtos antes de integrar pela staging. As
demais unidades R10/R12–R24 continuam propostas; o épico completo não foi declarado concluído.

Visual gate review: pending human — apenas os três novos PRs R09.
