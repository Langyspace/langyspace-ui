# Progresso R20

UI preparada: PracticeCardBody com cinco props semânticas, reutiliza PracticeProgressBar;
capas/frame/interação/dados continuam locais. Receita título h3/linha1.25, metadata600/linha1.25,
última à direita. Teacher tipografia base preservada; Student título1.1→1.25/meta herdada→padrão.
Meta concluída #737 substitui #9a para contraste; sem flag de tema/produto.

Teste de título/metadatas/barra decorativa e transição de conteúdo passou. Typecheck/build/API
passaram:47 values/108types/156 declarations. Todos os d.ts anteriores iguais exceto barrel
aditivo. Library122142raw/25415gzip, novo entry5084raw/1865gzip, dentro de capacidade prévia;
famílias e caps antigos preservados. Tarball instalado em consumer distinto; import.meta.resolve
aponta pacote instalado e smokeSSR completo passou incluindo markerPracticeCardBody.
24 PNGs originais das stories default/completed/long-content, quatro larguras e dois motions,
sem overflow ou perda de título/meta. Produto ainda precisa pares reais antes de integrar.

Visual gate review: accepted by human — autorização contínua expressa para este lote.

Adoções concluídas: [Student #14](https://github.com/MarcosLaboriosi/langyspace-student/pull/14) / [Teacher #38](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/38), 166 pares originais. Oficial1.19.1 conferido por checksum/351 arquivos; frozen locks aprovados. Checkouts canônicos limpos em staging, com dependência física oficial. Detalhes e CI em [execução do lote](../execucao-20261013.md). Produção não verificada.
