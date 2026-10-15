# Entrega integrada e publicada — 2026-10-15

O inventário atual de apresentação reutilizável dos cinco produtos foi concluído, integrado e publicado. Os 38 grupos têm decisão explícita no [mapeamento](mapeamento.md); os 49 grupos de CSS residual conservados por contexto ou responsabilidade estão em [residuos.md](residuos.md). Não resta candidato elegível adiado nesse inventário. Páginas, rotas, consultas, regras, estado de domínio, áudio, persistência e coordenação permanecem nos produtos.

## Aprovações e integração

A product owner aprovou os seis PRs da expansão: [UI #27](https://github.com/MarcosLaboriosi/langyspace-ui/pull/27), [Student #20](https://github.com/MarcosLaboriosi/langyspace-student/pull/20), [Teacher #43](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/43), [Site #5](https://github.com/MarcosLaboriosi/langyspace/pull/5), [Admin #16](https://github.com/MarcosLaboriosi/langyspace-admin/pull/16) e [Cupom #2](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/2). Foram integrados após o aceite da revisão atual, incluindo as capturas corrigidas dos modais.

Os guards encontraram uma concessão adicional nos botões laterais Student/Teacher: adotar a variante `neutral` existente de `IconButton`, removendo a borda/hover locais. A revisão visual específica recebeu o aceite “Aprovo os dois ajustes; pode integrar e publicar”. [Student #21](https://github.com/MarcosLaboriosi/langyspace-student/pull/21) e [Teacher #47](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/47) foram integrados com os respectivos heads aprovados. Não houve autoaprovação ou auto-merge.

Os PRs visuais mantêm exclusivamente `# Evidências` e tabela `Antes | Depois`. A matriz original contém 449 pares; os dois ajustes acrescentam 38 pares (22 Student e 16 Teacher), totalizando 487 pares/974 PNGs originais. As imagens usam fixtures; os testes de publicação abaixo usam os ambientes reais e perfis sintéticos isolados.

## Pacote oficial

Os cinco produtos fixam o mesmo [@langyspace/ui 1.21.1](https://github.com/MarcosLaboriosi/langyspace-ui/releases/tag/v1.21.1), com URL oficial e integridade no lock. O `dist`/tipos/runtime é idêntico ao 1.21.0 revisado. O patch corrige apenas o parser do auditor e a versão do pacote distribuído; não acrescenta props nem altera o visual.

- SHA256 do tarball 1.21.1: `ef32ea4e355d0bb830877ae0f94aa028ab93268d6ec6e3878d6251b6a110171d`.
- Integridade: `sha512-BvksuhlXZjo8xUo3QuZzSCqybjyaWVBp9QRHCNtpT6/OCk+y+GgUUbZdXoZthHy5pcO1cM07Xe5AZAhcyHu4qQ==`.
- Código do patch: [4d319bd9](https://github.com/MarcosLaboriosi/langyspace-ui/commit/4d319bd9c42be1a21f629085cc91f329e4c5593c).
- Instalação frozen dos cinco produtos passou, mantendo as políticas de integridade e de idade mínima; apenas a versão privada exata foi admitida.

## Produção e CI/CD

| Projeto | Fonte publicada                                                                                                   | Produção conferida                                 | Test CI                                                                                                                | Deploy CI/CD                                                               |
| ------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Student | [e531045f](https://github.com/MarcosLaboriosi/langyspace-student/commit/e531045fa8e180a165b14801ebedf459a3a1caf2) | [student.langy.space](https://student.langy.space) | [Checks](https://github.com/MarcosLaboriosi/langyspace-student/commit/e531045fa8e180a165b14801ebedf459a3a1caf2/checks) | [Workflows](https://github.com/MarcosLaboriosi/langyspace-student/actions) |
| Teacher | [c6056783](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/c60567839ea5c7230044c92e52465023b38aad74) | [teacher.langy.space](https://teacher.langy.space) | [Checks](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/c60567839ea5c7230044c92e52465023b38aad74/checks) | [Workflows](https://github.com/MarcosLaboriosi/langyspace-teacher/actions) |
| Admin   | [00693113](https://github.com/MarcosLaboriosi/langyspace-admin/commit/00693113c2a5c8bce5df2246a0b8a95eefaa676d)   | [admin.langy.space](https://admin.langy.space)     | [Checks](https://github.com/MarcosLaboriosi/langyspace-admin/commit/00693113c2a5c8bce5df2246a0b8a95eefaa676d/checks)   | [Workflows](https://github.com/MarcosLaboriosi/langyspace-admin/actions)   |
| Site    | [e8d781e3](https://github.com/MarcosLaboriosi/langyspace/commit/e8d781e310feba6a9112b7ac5fe89e5c5c8a8619)         | [langy.space](https://langy.space)                 | [Checks](https://github.com/MarcosLaboriosi/langyspace/commit/e8d781e310feba6a9112b7ac5fe89e5c5c8a8619/checks)         | [Workflows](https://github.com/MarcosLaboriosi/langyspace/actions)         |
| Cupom   | [9179830c](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/9179830cc400fcf67f3055fe3a7d1ab0921e2b79)   | [cupom.langy.space](https://cupom.langy.space)     | [Checks](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/9179830cc400fcf67f3055fe3a7d1ab0921e2b79/checks)   | [Workflows](https://github.com/MarcosLaboriosi/langyspace-cupom/actions)   |

As consultas únicas de workflows foram filtradas pelos SHAs exatos acima e não retornaram execuções; os links de checks/workflows são referências, sem resultado de CI disponível. Os commits usam `[skip ci]`. A entrega foi manual, sob a exceção de cobrança autorizada até 2026-10-31: a recusa de Actions por billing antes da execução foi confirmada. Nenhum status `staging-verified` ou sucesso de CI foi fabricado.

Cada produto passou primeiro por staging e depois por produção. Nos portais Student/Teacher/Admin, a promoção de `main` foi um fast-forward normal, com guard do SHA anterior exato no pre-push e encadeamento do hook existente. `main` e `staging` terminaram na mesma revisão local/remota. UI/Site/Cupom usam `main`; não foram criadas branches de staging artificiais.

Site/Cupom usaram canais de preview isolados no Hosting de staging existente. A publicação dos cinco produtos alterou somente Hosting; Functions, Rules, integrações de provider e configurações de produção não foram implantadas por esta entrega.

## Verificação realizada

| Superfície        | Evidência efetiva                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Todos os produtos | Guard de arquitetura, builds por ambiente e comparação dos bytes reais de HTML/JS/CSS com os snapshots preparados. Sem referências Firebase de produção nos builds de staging.                                            |
| Student           | Staging: 3 testes nativos passaram (auth do perfil isolado, mensagens e entry exato). Produção: 2 testes passaram (auth/entry); envio de mensagem excluído em produção.                                                   |
| Teacher           | Staging e produção: 3 testes nativos passaram por ambiente (auth do perfil isolado, leitura de mensagens e entry exato).                                                                                                  |
| Admin             | Staging: login, 4 rotas, 13 callables, aula experimental em dupla sintética, confirmação Firestore/calendário e limpeza de perfis/vínculos/contatos. Produção: login público em 390/1440, sem erro de página ou overflow. |
| Site/Cupom        | Staging e produção: navegador real em 390/1440, sem erro de página ou overflow; relatório demo Cupom com alternância de período.                                                                                          |
| Auditor 1.21.1    | Regressão de import local seguida por import UI, os 12 contratos de regras e casos positivos/configuração passaram. Nenhuma regra desligada.                                                                              |

O smoke Admin passou a validar a política real do ambiente: Calendar `test`, calendário de grupo isolado e notificações `none`; continua rejeitando produção/live e mantém a proibição de Meet em `disabled`. Após uma tentativa com timeout na criação e limpeza confirmada, a execução com logs de diagnóstico (sem mudar condições, operações ou assertions) passou integralmente, com ambos os callables de criação HTTP 200. A causa do timeout isolado não foi confirmada; os registros anteriores foram preservados.

Tipos, API, Storybook, budgets, pacote Node ESM/SSR/bundle, música e campo de data têm as evidências anteriores em [validation.md](validation.md), reutilizadas onde os inputs não mudaram. As duas falhas anteriores de lint Teacher nas páginas públicas permanecem documentadas; Cupom não possui script de lint. Não há alegação de full suite ou CI verde.

O histórico Teacher foi saneado em paralelo. O ajuste aprovado foi integrado sobre o grafo saneado, preservando os commits de segurança; a ancestry antiga não foi republicada. Os worktrees de preparação e os drafts alheios foram preservados.

Os recibos locais completos estão em `/Users/margaridamartins/.local/langyspace-ui-complete-migration/publication-20261015/`: `complete.json`, `*-build-receipt.json`, `*-{staging,production}-{release,serving,smoke}.json`, `*-promotion.json` e logs sanitizados. Esta documentação de encerramento tem impacto `none`.

Visual gate review: accepted by human
