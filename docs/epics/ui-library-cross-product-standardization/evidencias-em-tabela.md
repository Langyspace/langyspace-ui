# Evidências em tabela — atualização do padrão de PR

Data: 2026-10-11. Escopo: formatação dos PRs existentes, modelos e documentação nos seis
repositórios. Impacto renderizado no produto: `none`; nenhum componente, rota, dependência,
fixture, pacote candidato ou arquivo de imagem foi alterado. A revisão humana das implementações
visuais continua pendente em cada PR.

## Formato

O corpo de PRs visuais contém somente `# Evidências` e uma tabela com duas colunas: `Antes`
à esquerda, `Depois` à direita. Cada linha compara a mesma tela/rota, estado e viewport;
rótulos curtos identificam o par. Imagens exibidas com a mesma largura (`width="400"`), sem
corte nem distorção; os arquivos mantêm resolução e proporção originais. Decisões técnicas e
checks continuam nos documentos e no CI. O formato anterior de seções separadas foi substituído.

Uma story realmente nova na biblioteca pode indicar “Story nova — sem versão anterior” na
célula Antes. Isso não substitui pares de telas existentes nem a comparação de produto em uma
migração. Captura faltante de uma superfície existente mantém o PR incompleto e em draft.

## PRs atualizados

Os nove PRs visuais preservam 874 imagens: 414 pares comparáveis e 46 stories novas da UI.
Os três PRs exclusivamente documentais também explicam o novo modelo, sem capturas artificiais.

| PR                                                                                      | Pares Antes/Depois | Stories sem anterior | Imagens preservadas |
| --------------------------------------------------------------------------------------- | ------------------ | -------------------- | ------------------- |
| [langyspace-ui #8](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8)             | 74                 | 46                   | 194                 |
| [langyspace-student #3](https://github.com/MarcosLaboriosi/langyspace-student/pull/3)   | 15                 | 0                    | 30                  |
| [langyspace-teacher #21](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21) | 15                 | 0                    | 30                  |
| [langyspace-student #4](https://github.com/MarcosLaboriosi/langyspace-student/pull/4)   | 82                 | 0                    | 164                 |
| [langyspace-teacher #22](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22) | 56                 | 0                    | 112                 |
| [langyspace-teacher #24](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24) | 40                 | 0                    | 80                  |
| [langyspace-teacher #25](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25) | 21                 | 0                    | 42                  |
| [langyspace-student #5](https://github.com/MarcosLaboriosi/langyspace-student/pull/5)   | 41                 | 0                    | 82                  |
| [langyspace #1](https://github.com/MarcosLaboriosi/langyspace/pull/1)                   | 0                  | 0                    | 0                   |
| [langyspace-admin #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10)     | 0                  | 0                    | 0                   |
| [langyspace-cupom #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1)       | 0                  | 0                    | 0                   |
| [langyspace-admin #11](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11)     | 70                 | 0                    | 140                 |

## Onde o padrão foi atualizado

- `.github/pull_request_template.md` e `AGENTS.md` na UI Library e nos cinco produtos.
- UI: `CONTRIBUTING.md`, `docs/visual-pr-review.md`, referência de qualidade e documentos ativos deste épico.
- Teacher: `docs/agent-validation.md` e referências de execução e qualidade visual.
- Student, Admin e Cupom: referências nativas de execução e revisão visual.
- Site: referências de execução e qualidade visual.
- Branches dos PRs abertos e cópias locais dos corpos de PR, para evitar reutilizar o modelo antigo.

## Verificação

Corpos lidos de volta pela API do GitHub, conferindo todos os URLs de imagem contra a versão
anterior, rótulos, fase Antes/Depois, total de imagens, pares por estado/viewport e o limite de
tamanho do corpo. Nenhuma imagem anterior foi substituída pelo Depois. Draft, base, estado aberto
e ausência de auto-merge foram preservados. Markdown e diffs documentais conferidos; não foi
necessário repetir os testes de runtime porque seus insumos não mudaram.

Cada PR visual continua exigindo aprovação humana explícita da revisão atual antes do merge.
A mudança de apresentação das evidências não autoriza merge, release, publicação do pacote ou deploy.

## Entrega documental

Modelos e guias publicados nas branches dos PRs existentes, sem push para main/staging.
Após cada push, uma única consulta pelo SHA obtém URLs de workflow; nenhum status, conclusão
ou log é monitorado. Se a execução não aparece, a página de checks é o fallback e não prova
CI verde. Publicação do pacote e deploy não foram acionados.

| PR                                                                                      | Commit documental                                                                                                 | CI de testes                                                                                                             | Publicação / deploy                                                                                                        |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| [UI #8](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8)                        | [Revisão atual](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8/commits)                                  | [Checks](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8/checks) — consulta única após o push                    | [Release](https://github.com/MarcosLaboriosi/langyspace-ui/actions/workflows/release.yml) — não acionado                   |
| [langyspace-student #3](https://github.com/MarcosLaboriosi/langyspace-student/pull/3)   | [980d2284](https://github.com/MarcosLaboriosi/langyspace-student/commit/980d228446a800dc2c171a230bce9efcc8301378) | [Checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/3/checks) — execução indisponível na consulta única  | [Workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-teacher #21](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21) | [8e4acfa8](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/8e4acfa88ed905f453fefad749bd6a51af55c649) | [Checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21/checks) — execução indisponível na consulta única | [Workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-student #4](https://github.com/MarcosLaboriosi/langyspace-student/pull/4)   | [f5a6c78c](https://github.com/MarcosLaboriosi/langyspace-student/commit/f5a6c78cc7a6f8722e86804ac3ef15534e424364) | [Checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/4/checks) — execução indisponível na consulta única  | [Workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-teacher #22](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22) | [9648b362](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/9648b362406cce5cbe9b7ec9ecd305b6e244d706) | [Checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22/checks) — execução indisponível na consulta única | [Workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-teacher #24](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24) | [a635f3ae](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/a635f3aedb03294d664d4b1e982396cab089dea9) | [Checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24/checks) — execução indisponível na consulta única | [Workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-teacher #25](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25) | [7efe5384](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/7efe53840ba7167dbb657c6a3cb8a5b4eb9d7851) | [Checks](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25/checks) — execução indisponível na consulta única | [Workflow](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace-student #5](https://github.com/MarcosLaboriosi/langyspace-student/pull/5)   | [f9c5e882](https://github.com/MarcosLaboriosi/langyspace-student/commit/f9c5e882d7a2ea145c7d1ea6dec5804d43de8446) | [Checks](https://github.com/MarcosLaboriosi/langyspace-student/pull/5/checks) — execução indisponível na consulta única  | [Workflow](https://github.com/MarcosLaboriosi/langyspace-student/actions/workflows/firebase-staging.yml) — não acionado    |
| [langyspace #1](https://github.com/MarcosLaboriosi/langyspace/pull/1)                   | [1fb47606](https://github.com/MarcosLaboriosi/langyspace/commit/1fb47606ce1596aa1c885539ee608a5b03ab11ed)         | [Checks](https://github.com/MarcosLaboriosi/langyspace/pull/1/checks) — execução indisponível na consulta única          | [Workflow](https://github.com/MarcosLaboriosi/langyspace/actions/workflows/firebase-hosting-live.yml) — não acionado       |
| [langyspace-admin #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10)     | [136a25f2](https://github.com/MarcosLaboriosi/langyspace-admin/commit/136a25f282f075943ce9b57d3c6bdd3f614a71ef)   | [Checks](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10/checks) — execução indisponível na consulta única   | [Workflow](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-staging.yml) — não acionado      |
| [langyspace-cupom #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1)       | [635f6b52](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/635f6b525764f243cd3e984904e0afe6cb5644b2)   | [Checks](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1/checks) — execução indisponível na consulta única    | [Workflow](https://github.com/MarcosLaboriosi/langyspace-cupom/actions/workflows/firebase-hosting-live.yml) — não acionado |
| [langyspace-admin #11](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11)     | [418128f5](https://github.com/MarcosLaboriosi/langyspace-admin/commit/418128f528f9199ea00b23176c0bedfcbd658549)   | [Checks](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11/checks) — execução indisponível na consulta única   | [Workflow](https://github.com/MarcosLaboriosi/langyspace-admin/actions/workflows/firebase-staging.yml) — não acionado      |
