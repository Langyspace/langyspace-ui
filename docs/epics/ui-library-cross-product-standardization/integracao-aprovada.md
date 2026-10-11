# Aprovação humana e integração

Atualizado em 2026-10-11. A product owner revisou as evidências e aprovou explicitamente nesta
conversa: “revisei tudo e tá aprovado pode continuar”. O aceite cobre as revisões abaixo, com
as concessões e os layouts apresentados. Alterações visuais posteriores exigem imagens e nova
review do respectivo PR. O aceite humano não dispensa os checks técnicos.

## Revisões aprovadas

| PR                                                                                      | SHA revisado e aprovado                    | Base    |
| --------------------------------------------------------------------------------------- | ------------------------------------------ | ------- |
| [langyspace-student #3](https://github.com/MarcosLaboriosi/langyspace-student/pull/3)   | `980d228446a800dc2c171a230bce9efcc8301378` | staging |
| [langyspace-teacher #21](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21) | `8e4acfa88ed905f453fefad749bd6a51af55c649` | staging |
| [langyspace-student #4](https://github.com/MarcosLaboriosi/langyspace-student/pull/4)   | `f5a6c78cc7a6f8722e86804ac3ef15534e424364` | staging |
| [langyspace-teacher #22](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22) | `9648b362406cce5cbe9b7ec9ecd305b6e244d706` | staging |
| [langyspace-teacher #24](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24) | `a635f3aedb03294d664d4b1e982396cab089dea9` | staging |
| [langyspace-teacher #25](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25) | `7efe53840ba7167dbb657c6a3cb8a5b4eb9d7851` | staging |
| [langyspace-student #5](https://github.com/MarcosLaboriosi/langyspace-student/pull/5)   | `f9c5e882d7a2ea145c7d1ea6dec5804d43de8446` | staging |
| [langyspace #1](https://github.com/MarcosLaboriosi/langyspace/pull/1)                   | `1fb47606ce1596aa1c885539ee608a5b03ab11ed` | main    |
| [langyspace-admin #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10)     | `136a25f282f075943ce9b57d3c6bdd3f614a71ef` | staging |
| [langyspace-cupom #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1)       | `635f6b525764f243cd3e984904e0afe6cb5644b2` | main    |
| [langyspace-admin #11](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11)     | `418128f528f9199ea00b23176c0bedfcbd658549` | staging |
| [langyspace-ui #8](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8)             | `499f0efc4cef08797d517c8cbc271d1c23fdf6d9` | main    |

## Integrações concluídas

- [langyspace #1](https://github.com/MarcosLaboriosi/langyspace/pull/1): merge `72259b1fb617ac6e19955cb960ca985684b7db5c` em `main`.
- [langyspace-admin #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10): merge `fc6974f1806ab836e60a6bb2f96a945e2aa35558` em `staging`.
- [langyspace-cupom #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1): merge `8d0f916812394cdccccf33da081be2b2088d9657` em `main`.
- [langyspace-admin #11](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11): merge `314c1a303f437069054112b1ebbb45c02c6d177b` em `staging`.

O ActionMenu Admin mantém o pacote oficial 1.7.0. A resolução de sobreposições com os guias de
review não alterou source, dependências ou lockfile do componente aprovado. A entrega em staging
foi iniciada; CI/deploy permanecem assíncronos, sem afirmação de conclusão em produção.

## Correções técnicas para os demais PRs

- UI: imports nomeados de styled-components em DocumentLayout, NoticeBanner, ToastItem e ToastViewport,
  corrigindo a importação do pacote em Node/SSR. CSS, componentIds, markup e APIs não foram alterados.
- UI: animação finita do ToastItem classificada por path, owner Feedback, motivo e validade até
  2027-01-11; o reduced-motion existente permanece. Nenhuma regra geral do audit foi relaxada.
- UI: fixtures de referência agora criam todos os consumidores de SearchInput; antes somente o
  primeiro existia, causando ENOENT quando a consulta verificava os demais exemplos registrados.
- UI: readiness do audit agora aguarda o host anexado e o componente filho visível. Um host sem
  altura pode conter ToastViewport fixo e visível; exigir caixa visível no host causava timeout.
  O filho continua exigido como visível e todas as regras de overflow/layout permanecem.
  Aguardar o fim das animações finitas antes de medir evita acusar o deslocamento temporário
  de entrada como overflow; animações infinitas não são aguardadas nem desativadas.
- Teacher: os quatro PRs receberam o staging atual, preservando as correções recentes de domínio.
  A exclusão exata de UI 1.8.0 no pnpm-workspace fazia o fingerprint do inventário ficar desatualizado.
  O snapshot foi regenerado e comparado: somente o fingerprint muda, todos os dados do grafo,
  linhas, ciclos e budgets permanecem idênticos. Os ratchets não foram ampliados.

## Validação focada

UI: audit de arquitetura, fixtures do audit, sete testes de referência, build, API, budgets e smoke
do tarball com importação Node, SSR e consumidor browser passaram. API: 39 valores, 99 tipos,
132 declarações. O audit focado passou em 30 cenários de ToastViewport e Spinner,
com movimento normal/reduzido; o caso de animação infinita permanece exercitado. Bundle: 103.498 bytes raw / 21.938 gzip, dentro dos budgets aprovados.
Teacher: typecheck passou nos quatro PRs; o check de arquitetura é compartilhado porque source,
workspace e inventário de Functions são idênticos entre essas branches.

As imagens da review foram preservadas: as correções de integração não alteram CSS, markup ou
layouts aprovados. CI continua responsável pelos gates amplos de cobertura, layout e produção.
Não mesclar PR com check falho e não publicar o candidato como se fosse release oficial.

## Próxima dependência

Concluir os checks de UI #8, integrar a biblioteca e gerar o artefato oficial 1.8.0 pelo workflow
normal. Substituir os candidatos nos sete PRs Student/Teacher pelo artefato oficial, resolver
sobreposições de locks/guias e integrar os PRs aprovados pela via de staging. R08 FilterPills é
a próxima unidade de preparação; uma mudança visual desse lote requer nova review própria.

Visual gate review: accepted by human.

R08 já tem PR próprio [https://github.com/MarcosLaboriosi/langyspace-teacher/pull/28](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/28), ainda sem review humana.
Esse lote não altera a aprovação das 12 revisões enumeradas acima.

## Autorização de promoção em 2026-10-11

A product owner autorizou nesta conversa: “esses pode passar direto de stagingpra prod e ir pro próximo”. O aceite inclui R08 #28 na revisão ad1ae363ceb0e6a92fc8a115dbd2b3b90e8be63c. As entregas seguem staging → staging-verified → main → produção, sem bypass e sem push direto a main dos produtos.

UI #8 integrado no merge d7066591b096d64fc8dc0d37d11db967a16decc0, após os cinco jobs verdes; tag v1.8.0 criada nesse merge para o workflow normal de release. R08 integrado no merge d809b21984d34dd91becbf0157144d30cc8aa823 e passou staging/E2E/emuladores/promoção e deploy produtivo. Bundle produtivo mudou e contém o marker de FilterPills compartilhado ausente no anterior.

ActionMenu Admin: staging, promoção e deploy produtivo concluídos; o entry JS servido corresponde byte a byte ao artefato do commit 314c1a303f437069054112b1ebbb45c02c6d177b. R09 possui review própria e não está incluído neste aceite.
