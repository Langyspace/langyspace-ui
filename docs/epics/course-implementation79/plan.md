# Implementação do curso A1–C1 · 79

Autorização de 23/11/2026: implementar os 60 planos revisados, doze por nível, por lotes. Base de conteúdo 231efa228c7397bcc968496ebba90f7b36debe0a; UI de origem db503ea5faf5a1e380e42a2e63f5f40b3aef49f1. Impacto direto em conteúdo/interação e aditivo na API. Branch de trabalho isolada; originais e mídia válidos preservados.

## Ordem de execução

- [x] Variação canônica de LearningDialogue com lâmpada sequencial sem modelo obrigatório
- [x] Adaptador compartilhado de perguntas com identidade recebida e intenção/dica
- [x] A1.04 completa: ações, modelo, prática pessoal, gramática no meio, agenda, escuta e reação, conversa livre e prática
- [x] C1.01 completa: seis expressões com cenas, fontes/diálogo em partes, negociação com evidência, reação, conversa livre e prática
- [x] Verificação focada de estados, binding exato e apresentação em desktop/celular
- [x] Primeiro lote disponível em prévia local, com [relatório e limites](first-batch.md)
- [x] Segundo lote: A1.01, A1.02 e A1.03, com [registro da continuação](batch80.md)
- [ ] A1: 8 códigos restantes
- [ ] A2: 12 códigos
- [ ] B1: 12 códigos
- [ ] B2: 12 códigos
- [ ] C1: 11 códigos restantes

A revisão dos dois pilotos orientou a composição compartilhada. Com a continuação80, há cinco aulas autoradas e 55 ainda planejadas; não há trabalho agendado em segundo plano. A tarefa completa não será apresentada como concluída com esses lotes. Preservar capa, conversa livre penúltima e prática última. Um caso factual depende de fatos visíveis; ajuda não inventa dados pessoais. Cada aula tem seu próprio objetivo e dados.

## Contratos

Omitir onRevealModel em sequentialGuidance deixa apenas a lâmpada; chamadas antigas mantêm o olho. Balão, espaçamento, identidades, áudio ativo, tradução e lacunas continuam no mesmo dono canônico. O adaptador de material injeta contexto, não outra skin.

Texto de exibição e texto de gravação são explícitos quando a única edição é pontuação. Não relaxar o match estrito de ID/texto do áudio. Reutilizar ElevenLabs válido por texto/voz; gerar apenas faltantes. Prompt de imagem1.8 literal, sem reescrita. Mapas/agendas/fontes são dados nativos e não texto pintado na ilustração.

## Verificação e entrega

Checks focados: comportamento de ajuda/identidade e regressões de áudio/lacunas; typecheck e contrato aditivo de API. Lote79 conferido em 1280×620 e 390×844, com ajuda aberta e transcrição após terceira escuta. As capturas78 em 1280×720 continuam apenas como evidência de capacidade inicial, não como conferência final deste lote. Antes/depois e limitações no relatório. Não rodar suítes amplas ou polling de CI. Sem publicação, pacote npm ou merge nesta etapa.

Visual gate review: pending human
