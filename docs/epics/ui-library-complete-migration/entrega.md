# Entrega preparada para revisão humana

As12 tarefas de preparação foram concluídas: descoberta, contratos, implementação compartilhada, adoção nos cinco produtos, análise residual, pacote, validações e evidências. Os seis PRs estão prontos para a revisão atual do produto. Não houve merge nem publicação desta expansão.

Os componentes expressam apresentação e interação por JSX e atributos nativos. Páginas, rotas, consultas, regras, estado de domínio e coordenação permanecem nos produtos. Os38 grupos e as concessões estão em mapeamento.md; os resíduos mantidos por contexto ou baixo benefício estão em residuos.md.

## PRs e commits preparados

| Projeto | PR                                                                  | Commit da implementação/pacote                                                                                    | Pares Antes/Depois no PR                   |
| ------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| UI      | [27](https://github.com/MarcosLaboriosi/langyspace-ui/pull/27)      | [20990081](https://github.com/MarcosLaboriosi/langyspace-ui/commit/2099008102484757abbb6b25cbedb9f1fe33c344)      | 110 representativos, incluindo4 standalone |
| Student | [20](https://github.com/MarcosLaboriosi/langyspace-student/pull/20) | [1898c3f5](https://github.com/MarcosLaboriosi/langyspace-student/commit/1898c3f532511163c2377613c503fd8607d25986) | 139                                        |
| Teacher | [43](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/43) | [f08ee70d](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/f08ee70dc507ae25e02875d4ba82f35c2825f88c) | 141                                        |
| Site    | [5](https://github.com/MarcosLaboriosi/langyspace/pull/5)           | [b232c1ad](https://github.com/MarcosLaboriosi/langyspace/commit/b232c1ad4ea266bdb1286835d3d08bd9127f6029)         | 24                                         |
| Admin   | [16](https://github.com/MarcosLaboriosi/langyspace-admin/pull/16)   | [49652f71](https://github.com/MarcosLaboriosi/langyspace-admin/commit/49652f71ffb537e0e9e893dff8b28d282268abc3)   | 129                                        |
| Cupom   | [2](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/2)     | [ac979e94](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/ac979e942724c21d59654d04c8e21d0d804b3d5a)   | 12                                         |

A matriz tem449 pares únicos/898 PNGs originais:445 dos produtos e4 standalone. O PR UI reutiliza evidências representativas dos produtos; seus110 pares não devem ser somados à matriz. Os cinco PRs de adoção incluem todos os pares de seu produto.

Corpos remotos conferidos: somente `# Evidências` e tabela Antes/Depois, imagens imutáveis, todos prontos, nenhum auto-merge. As aprovações antigas não se aplicam às revisões atuais. Capturas usam dados fictícios e rede externa bloqueada; nenhuma operação financeira ou de produção foi executada.

## Pacote e verificações

Todos os consumidores fixam o mesmo tarball do commit20990081, com a integridade de candidate.json. O artefato remoto respondeu HTTP200 e teve os bytes conferidos; os cinco pacotes extraídos têm o mesmo dist. A versão1.21.0 é candidata, sem tag ou release oficial;1.20.0 permanece oficial.

Tipos e bundles dos cinco produtos passaram, incluindo SSR/prerender do Site. UI API, arquitetura701 fontes, budgets, lint, Storybook e smoke do pacote instalado passaram. As mudanças de interação têm testes focados. O campo de data do Site passou48 cenários Chromium/WebKit. Detalhes e limites em validation.md.

Teacher mantém duas falhas anteriores de lint em efeitos das páginas públicas, com blocos idênticos à baseline. Cupom não possui script de lint. Não houve execução completa de E2E ou alegação de resultado verde desses casos.

## CI e publicação

Os commits usam `[skip ci]`, conforme a entrega manual solicitada. Nenhuma execução estava disponível na consulta única por SHA; os links abaixo são páginas de checks/workflows, sem resultado de execução. Não houve monitoramento de CI nem deploy desta expansão.

| Projeto | Test CI                                                                                                                        | Deploy/release CI/CD                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| UI      | [Checks20990081](https://github.com/MarcosLaboriosi/langyspace-ui/commit/2099008102484757abbb6b25cbedb9f1fe33c344/checks)      | [Release](https://github.com/MarcosLaboriosi/langyspace-ui/actions/workflows/release.yml) |
| Student | [Checks1898c3f5](https://github.com/MarcosLaboriosi/langyspace-student/commit/1898c3f532511163c2377613c503fd8607d25986/checks) | [Workflows](https://github.com/MarcosLaboriosi/langyspace-student/actions)                |
| Teacher | [Checksf08ee70d](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/f08ee70dc507ae25e02875d4ba82f35c2825f88c/checks) | [Workflows](https://github.com/MarcosLaboriosi/langyspace-teacher/actions)                |
| Site    | [Checksb232c1ad](https://github.com/MarcosLaboriosi/langyspace/commit/b232c1ad4ea266bdb1286835d3d08bd9127f6029/checks)         | [Workflows](https://github.com/MarcosLaboriosi/langyspace/actions)                        |
| Admin   | [Checks49652f71](https://github.com/MarcosLaboriosi/langyspace-admin/commit/49652f71ffb537e0e9e893dff8b28d282268abc3/checks)   | [Workflows](https://github.com/MarcosLaboriosi/langyspace-admin/actions)                  |
| Cupom   | [Checksac979e94](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/ac979e942724c21d59654d04c8e21d0d804b3d5a/checks)   | [Workflows](https://github.com/MarcosLaboriosi/langyspace-cupom/actions)                  |

## Continuidade

1. Obter a revisão humana explícita da revisão atual de cada PR.
2. Integrar a UI primeiro e os consumidores depois, respeitando os destinos de cada repositório e a passagem por staging onde aplicável.
3. Publicar manualmente somente o estado aprovado, verificar assets/runtime e então registrar a publicação confirmada.
4. Alinhar os checkouts canônicos após a entrega integrada, preservando antes qualquer trabalho paralelo. Enquanto os PRs aguardam revisão, manter os seis worktrees de feature.

Não repetir implementações, gerar novos componentes para CSS contextual ou reconstruir evidências enquanto fontes e artefato permanecerem iguais. Commits posteriores apenas de documentação não alteram os pins ou as imagens imutáveis20990081.
