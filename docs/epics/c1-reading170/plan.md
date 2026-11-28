# C1: referências claras e respostas verificáveis

Pedido: revisar globalmente os exercícios C1 de referência + perguntas. Impacto direto em conteúdo e composição, sem nova aparência de componente.

Base: b6b56163b589fcbeb1fcec0b0a89c55c58acaeb2. Entrega na feature `feat/medium158`, PR70 em draft. Nenhum merge ou deploy autorizado nesta rodada.

## Entrega

- [x] Reescrever 22 referências iniciais C1.02–12 como parágrafos coesos, sem comentários de autoria.
- [x] Revisar os 22 blocos `s_mission`/`s_reply`: referência completa na mesma tela, três perguntas factuais e respectivas respostas/hints.
- [x] C1.01: reunir o email de Laura e quatro perguntas, removendo as duas páginas fragmentadas. Manter palavras do email; explicitar Ana como destinatária.
- [x] C1.01: tornar a conversa aberta com Raj um roleplay explícito com falas reais, eliminando “that message” sem referente e gabaritos fictícios.
- [x] Reutilizar ExercisePanel reading + QuestionList. O campo interno referenceParagraphs evita outra pele ou componente público. Outros níveis continuam na receita existente.
- [x] Preservar o gráfico C1.09, a foto da C1.05, conversas pessoais, welcome-session C1.11, gramática169, vídeos e gravações.
- [x] Registrar 70 gabaritos com trechos de evidência em answer-evidence.json.
- [x] Checagem dirigida de evidência e preservação + revisão local representativa.
- [x] Capturas representativas salvas; commit/push único e atualização do PR preparados para entrega.

## Critérios e limites

Cada gabarito possui apoio literal ou cálculo explícito; não há proposta hipotética disfarçada de compreensão. Paráfrases são válidas, mas não respostas contraditórias. As propostas permanecem nas conversas/roleplays, sem gabarito único. A linguagem C1 continua no texto, nos contrastes e na discussão posterior. Nenhuma mídia, biografia, curso fora do C1 ou contrato público deve mudar. O número de páginas de C1.01 diminui em duas para unir o email à compreensão.

Checagens locais: uma análise autoral focada e uma revisão de UI representativa. Sem build, suíte ampla, escuta, publicação ou polling de CI. A revisão da professora não é substituída por check automatizado.

## Verificação final

- `check-authoring.py`: 70 respostas com apoio literal/cálculo sobre dados explícitos; preservação das páginas fora do recorte e das atividades pessoais. Recibo `authoring-check.json`.
- UI local 1280×720: C1.11 com as três respostas abertas, C1.05 com foto + parágrafos, C1.01 com email + quatro perguntas, C1.09 com gráfico + texto. Capturas em evidence/. Não é validação de todas as resoluções ou aulas completas.
- Encontrado durante a revisão: GroupedBarChart usava tinta escura fixa e não exibia valores. Correção canônica: barras e rótulos herdam o contraste do contexto; valores numéricos visíveis e incluídos na descrição acessível. Story DailyTrips adicionada, teste focado existente ampliado e aprovado (1/1). Nenhuma prop pública alterada. Esse achado justificou uma terceira checagem focada, sem rodar suíte ampla.
- Evidências comparáveis no PR: C1.11 antes/depois; C1.09 estado intermediário com texto novo e gráfico ilegível versus gráfico corrigido. Capturas C1.01/C1.05 são adicionais de resultado, sem alegar matriz visual completa. O PR permanece draft, com pendências visuais anteriores preservadas.
- Sem build, package, alteração nos produtos, escuta, merge ou deploy.
