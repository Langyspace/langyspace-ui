# 10 — Documentação, pacote e PRs

> Concluída. O resultado atual está em [release-delivery.md](../release-delivery.md); o texto de preparação abaixo preserva o histórico.

Responsabilidade: Concluir fichas individuais, documentação de escolha/anatomia/contraexemplo, pacote exato e todas as evidências; preparar PRs atuais.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Nenhum componente sem revisão ou pendência obrigatória; todos os PRs concretos têm corpos de evidências completos e validações registradas.

Validação: API e pacote/bundle quando necessário; matrix visual focada do escopo real; gates amplos CI-owned.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

Antes da montagem do pacote, após todos os styles lidos, conferir a consistência cumulativa de tokens existentes (mesmo significado/valor/unidade) e retirar interpolações estáticas desnecessárias. Não fazer substituição cega por cor ou aproximar os valores; registrar cada arquivo/decisão e validar o diff. Essa aplicação completa a proveniência de 03 sem alterar receitas ainda não revisadas.

Subtarefas em ordem:

- [x]10.1 Verificar/corrigir hidratacao inicial aberta com prova de regressao (2falhas ->8pass e tipos).
- [x]10.2 Reconciliar tokens/constantes por equivalencia exata, sem aproximar layouts.
- [x]10.3 Fechar guias/README/manifest e exemplos tipados atuais.
- [x]10.4 Build fresco, revisao API major, bundle/SSR/browser/package e artefato imutavel.
- [x]10.5 Fixar artefato nos5consumidores e verificar integracoes afetadas.
- [x]10.6 Capturar todas as superficies/estados/widths afetados com fixtures equivalentes.
- [x]10.7 Preparar commits/PRs com tabelas Antes/Depois completas, sem merge/monitoramento.

10.2:295 substituicoes em64styles por tokens existentes, com igualdade de cor/valor/unidade checada antes da escrita;14 leituras constantes de receitas sem callbacks desnecessarios. Tipos passaram. Dez wrappers de passthrough receberam parametro props direto, sem clone de argumento; sem nova API/estado.

10.3:README atualizada, indice171 e migracao2.0;11 exemplos completos compilaram. Catalogo tem354 exemplos atuais de fonte para171 componentes, seguindo reexports/styled/React com escopo lexical e sem tratar import sozinho como uso.14 testes de manifest/referencia passaram apos a obrigatoriedade de referencia no tipo. Essa prova e estatica; nao prova rota ou producao.

Antes de10.4 congelar pacote: exercitar menu dentro de modal (Tab/Escape), layout standalone sem reset global, conteudo extremo e hit testing dos novos comandos. Corrigir somente defeitos reproduzidos.

## Encerramento

Concluído com evidência atual em [release-delivery.md](../release-delivery.md) e delivery-summary.json. Os estados pendentes no texto histórico acima descrevem a preparação anterior ao aceite e à publicação.
