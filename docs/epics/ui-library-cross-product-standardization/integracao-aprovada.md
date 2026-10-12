# Integração das revisões aprovadas

A product owner aprovou as 12 revisões anteriores e autorizou em 2026-10-11: “esses pode passar direto de stagingpra prod e ir pro próximo”. O aceite inclui R08 #28 (ad1ae363ceb0e6a92fc8a115dbd2b3b90e8be63c). Todos os 13 PRs foram integrados; os três novos drafts R09 têm review própria.

| PR                                                                                      | Merge                                                                                                             | Destino |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| [langyspace #1](https://github.com/MarcosLaboriosi/langyspace/pull/1)                   | [72259b1f](https://github.com/MarcosLaboriosi/langyspace/commit/72259b1fb617ac6e19955cb960ca985684b7db5c)         | main    |
| [langyspace-admin #10](https://github.com/MarcosLaboriosi/langyspace-admin/pull/10)     | [fc6974f1](https://github.com/MarcosLaboriosi/langyspace-admin/commit/fc6974f1806ab836e60a6bb2f96a945e2aa35558)   | staging |
| [langyspace-cupom #1](https://github.com/MarcosLaboriosi/langyspace-cupom/pull/1)       | [8d0f9168](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/8d0f916812394cdccccf33da081be2b2088d9657)   | main    |
| [langyspace-admin #11](https://github.com/MarcosLaboriosi/langyspace-admin/pull/11)     | [314c1a30](https://github.com/MarcosLaboriosi/langyspace-admin/commit/314c1a303f437069054112b1ebbb45c02c6d177b)   | staging |
| [langyspace-student #3](https://github.com/MarcosLaboriosi/langyspace-student/pull/3)   | [d0167e0a](https://github.com/MarcosLaboriosi/langyspace-student/commit/d0167e0a95af1e857f588a678c809556bbcdbe97) | staging |
| [langyspace-student #4](https://github.com/MarcosLaboriosi/langyspace-student/pull/4)   | [9493add0](https://github.com/MarcosLaboriosi/langyspace-student/commit/9493add0fd381738a2ce5c3df9e1f608bf6657fe) | staging |
| [langyspace-student #5](https://github.com/MarcosLaboriosi/langyspace-student/pull/5)   | [17e9da07](https://github.com/MarcosLaboriosi/langyspace-student/commit/17e9da07841a4bdee78d4bc759f01b77953e79a1) | staging |
| [langyspace-teacher #21](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/21) | [9ceaa67b](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/9ceaa67b7b159c9704f9c702481d13d0da6ab62a) | staging |
| [langyspace-teacher #22](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/22) | [bd5bd58e](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/bd5bd58ec9b71b872a7d7967cae0988690ec0f05) | staging |
| [langyspace-teacher #24](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/24) | [ebbb60f3](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/ebbb60f3157e5c48fc35b503b9f29cb70d67dda2) | staging |
| [langyspace-teacher #25](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/25) | [d587b157](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/d587b1578c2fff4e37afb0c4025f8dfeee423152) | staging |
| [langyspace-ui #8](https://github.com/MarcosLaboriosi/langyspace-ui/pull/8)             | [d7066591](https://github.com/MarcosLaboriosi/langyspace-ui/commit/d7066591b096d64fc8dc0d37d11db967a16decc0)      | main    |
| [langyspace-teacher #28](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/28) | [d809b219](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/d809b21984d34dd91becbf0157144d30cc8aa823) | staging |

UI 1.8.0 oficial publicada e checksum conferido. As 133 declarações de arquivos de tipos são idênticas ao candidato aprovado; os únicos ajustes de source são imports de styled-components para corrigir Node/SSR. CSS, markup e recipes aprovados não mudaram. Todos os sete consumidores usam o artefato oficial.

Site/Cupom integraram apenas guias de PR; Admin, Student e Teacher têm as migrações visuais aprovadas. Promoção de produto continua staging → staging-verified → main → produção, sem bypass. Bundles e pipelines verificados estão no handoff atual. Conflitos de integração foram somente nos documentos; nenhum conteúdo ou comportamento de produto foi substituído.

As tabelas originais de aprovação por SHA foram preservadas no histórico deste arquivo e em integration-20261011/human-approval.json.

Visual gate review: accepted by human.
