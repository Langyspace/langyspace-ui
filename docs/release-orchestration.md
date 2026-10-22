# Publicação verificável do pacote

Parte da entrega coordenada descrita no Teacher em `docs/epics/release-orchestration/`.
Impacto `none`: nenhuma alteração de componente, API pública ou pacote distribuído nesta mudança.

O workflow de release mantém os gates existentes e serializa publicações da mesma tag. O executor
`scripts/publish-release.mjs <tag> <arquivo.tgz>` confere versão, commit local/remoto da tag e
ancestralidade em main. A release GitHub é única por tag; uma corrida de criação é relida. Assets
existentes nunca são sobrescritos: baixar e conferir SHA256 é obrigatório. Uma publicação parcial
retoma apenas os uploads ausentes; erro de leitura/permissão não é tratado como release inexistente.

Checks focados: `node --test scripts/publish-release.node-test.mjs`. CI conserva validação completa,
bundle/package smoke e revisão humana dos componentes quando houver mudanças visuais. Não criar
tag nem publicar nova versão da biblioteca como efeito de uma mudança só no executor.

Visual gate review: not applicable — somente ferramentas e workflow de publicação.
