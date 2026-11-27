# WhatsApp: variação entre aulas

Feedback11 (alternar personagens/quantidade de áudio), ligado ao12 (continuidade e personalidade). A dona confirmou variação planejada entre aulas, sem sorteio por abertura.

Impacto direto nas páginas Listening de50 aulas via Course/ReviewedLesson e2 extras DEV; formatos existentes dos originais/experimentais são preservados. O componente público recebe uma prop opcional videoAttachment; o produto controla a navegação ao vídeo existente. Não há alteração de capa, homework, outras falas ou fluxo do Teacher.

Registro central de16 personagens, com16 vínculos de voz e10 prompts originais recuperados. As identidades com arte herdada mantêm a referência aprovada e o estado do prompt original explícito.

52 planos atualizados:15 aulas principais e2 extras mudam a voz;26 gravações novas,26chamadas reais, sem retries. Sete aulas principais passam a duas notas em continuidade; DEV.01/02 preservam seus dois textos. Cinco fotos de contexto reutilizadas; quatro prévias de vídeo apontam aos trechos já existentes com4perguntas. Mensagens de abertura variam pelo contexto.

Ações: ouvir/pausar; segunda nota quando houver; clique na prévia de vídeo leva à sua página normal. Perguntas mantêm a informação original; nenhuma resposta depende de um novo detalhe inferido da imagem. Voz, texto e avatar são conferidos juntos.

| Aula | Contato | Formato |
|---|---|---|
| a1-07 | Kim | photo-and-note |
| a1-08 | Evelyn | single-note |
| a1-09 | Kim | photo-and-note |
| a1-10 | Kim | video-link-and-single-note |
| a1-11 | Ruby | single-note |
| a1-12 | Kim | single-note |
| a2-02 | Niamh | two-notes |
| a2-03 | Kim | single-note |
| a2-04 | Kim | video-link-and-single-note |
| a2-05 | Owen | single-note |
| a2-06 | Evelyn | single-note |
| a2-07 | Kim | single-note |
| a2-08 | Kim | single-note |
| a2-09 | Kim | single-note |
| a2-10 | Kim | photo-and-note |
| a2-11 | Priya | two-notes |
| a2-12 | Kim | single-note |
| b1-02 | Kim | single-note |
| b1-03 | Ruby | two-notes |
| b1-04 | Kim | single-note |
| b1-05 | Owen | single-note |
| b1-06 | Kim | single-note |
| b1-07 | Kim | single-note |
| b1-08 | Niamh | two-notes |
| b1-09 | Kim | photo-and-note |
| b1-10 | Kim | video-link-and-single-note |
| b1-11 | Kim | single-note |
| b1-12 | Kim | single-note |
| b2-02 | Kim | single-note |
| b2-03 | Priya | two-notes |
| b2-04 | Kim | single-note |
| b2-05 | Evelyn | single-note |
| b2-06 | Kim | single-note |
| b2-07 | Kim | single-note |
| b2-08 | Kim | single-note |
| b2-09 | Ruby | single-note |
| b2-10 | Kim | single-note |
| b2-11 | Kim | single-note |
| b2-12 | Kim | single-note |
| c1-02 | Kim | single-note |
| c1-03 | Owen | video-link-and-two-notes |
| c1-04 | Kim | single-note |
| c1-05 | Kim | photo-and-note |
| c1-06 | Kim | single-note |
| c1-07 | Priya | two-notes |
| c1-08 | Kim | single-note |
| c1-09 | Kim | single-note |
| c1-10 | Niamh | single-note |
| c1-11 | Kim | single-note |
| c1-12 | Kim | single-note |
| DevStudy131 | Owen | two-notes |
| DevInterviews131 | Priya | two-notes |

Preservados: Mia no café, foto Jin/Tom, mudança de plano da Kim, pedido de compras, pets, Anna em casa, Leo/casamento, Raj/jantar e feedback, Ana/parque, Kim/boa-noite e feedback do Login. A102 mantém chamadas telefônicas; as experimentais B1/B2 e C1/C2 não ganham novas páginas nesta tarefa.

Mídia: nenhuma geração de imagem. Vozes e retratos aprovados; as gravações anteriores nas aulas alteradas continuam históricos e intactos. O roteiro por nota está no request congelado; os arquivos de proveniência locais registram requests reais, hashes e duração. Sem declaração de escuta/percepção de sotaque ou review de browser. Os dez prompts originais de retratos85 foram recuperados e preservados literalmente, com hash e origem, sem alteração do estilo canônico.

Validação:30testes focados passaram (player, transcript, continuidade de2notas, pausa ao abrir vídeo e vínculos reais de mídia); API pública e tipos passaram. Os testes não substituem escuta nem review de browser. Escopo conferido: contratos de voz/texto/avatar por aula, mínimo3perguntas, links de vídeo válidos e limites originais; regressão do player com2notas e ação de abrir vídeo; API pública/tipos. Revisão física de áudio e layout pertence à dona, com exemplos locais A1.08, A1.10, A2.02 e extras DEV. Sem publicação nem merge nesta etapa.

Visual gate review: pending human
