# R26 — Painel de resultado de prática

Student e Teacher repetem o bloco de conclusão do quiz: moldura sem borda, ícone circular, título, texto e agrupamento das ações. Criar PracticeResultPanel na UI com composição simples; manter métricas, pontuação, callbacks, áudio e persistência nos produtos.

Consumidores ativos: /licoes Gramática/personalizadas e /alunos/:studentId/licoes nas mesmas categorias. Admin, Site e Cupom não têm este painel ativo; não migrar por obrigação. Shadowing/flashcards têm resultados próprios e permanecem fora do R26.

Objetivo: um owner e quatro props title/description/children/actions, removendo três definições locais por produto, com layout externo preservado. Impacto direct. A aprovação recente fecha R25 e autoriza preparar o próximo; R26 requer sua própria revisão visual antes de merge.
