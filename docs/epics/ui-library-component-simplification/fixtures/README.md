# Fixtures da revisão da UI 3

Dados sintéticos para estados controlados de autenticação e preview de aprendizado.
As views, formulários, converters e clientes reais continuam no produto. Somente
as respostas locais são controladas durante a captura. Nenhuma fixture é importada
pela fonte de produção ou incluída no pacote público.

`auth-fixtures.mjs` gera uma entrada React local para Teacher/Student, com os mesmos
campos e callbacks nos dois lados. `teacher-preview-callables-fixture.mjs` substitui
o módulo de callables somente no servidor Vite de captura, usando os DTOs do JSON.
As rotas/estados do preview estão em `teacher-preview-cases.json`. Rede externa é
bloqueada; áudio usa um WAV silencioso local.

Matrizes e hashes completos: `../evidence.json` e documentos equivalentes dos cinco
produtos. Os controladores locais de captura ficam em
`/Users/margaridamartins/.local/langyspace-ui-complete-20261019`; o handoff ali
registra comandos de continuação. Não executar essas fixtures contra serviços reais.
