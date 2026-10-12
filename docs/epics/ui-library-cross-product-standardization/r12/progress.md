# Progresso R12

2026-10-12: D01–D05 preparados. UI PracticeCardSkeletonBody primeiro, receita fixa/ref/atributos
nativos; sem children ou props visuais. Stories default/narrow/reserved-space, normal/reduced,
24 imagens. Teste de decoração sem anúncio/progressbar/foco passou. API deliberada aditiva:
42 valores, 102 tipos, 141 declarações; nenhum hash anterior mudou salvo barrel. Bundle
106019 raw/22387 gzip (+1504/+315 vs 1.10.0); entry skeletons 4393/1697 dentro da capacidade
proposta antes da implementação, sem alterar limites das famílias existentes.

A medição detectou limite novo excedido durante o ajuste de geometria. Otimizamos a composição
interna e removemos display/max-width redundantes em spans vazios que já são flex items; não
ampliamos o orçamento depois das falhas. A última medição passou. Geometria final e stories
foram recapturadas; candidato é o pacote da implementação final.

80 pares nos produtos e 24 imagens UI = 184 PNG originais. Student antes a72011a, Teacher antes
aa263e23. Caixas card/body e conteúdo/controles idênticos; Teacher segunda meta +1px. Motion
normal preservado, reduced estático. Typechecks passaram; três testes Student de carregamento
existentes e um teste Teacher de cold load/navegação pelas cinco abas sem writes passaram.
Cada consumidor remove 12 linhas runtime; o pacote UI cresce, então não declarar redução global.

Candidato 1.11.0 é exclusivo dos drafts, com checksum registrado. Próxima tarefa: D06 — review
humana própria dos três PRs; após aceite, release oficial e integração por staging. R10 já foi
aprovado e integrado; nenhum aceite R10 é herdado por R12.

Visual gate review: pending human.
