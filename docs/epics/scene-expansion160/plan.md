# Pilotos visuais160 — B1.11, B2.04 e C1.12

Implementação do primeiro lote priorizado na proposta159 e autorizado pela usuária. Impacto direto; prévia local na feature branch existente. Preservar todas as páginas/IDs e gravações que não são o alvo da substituição.

| Aula / página     | Título e subtítulo finais                                                                                                                             | Cena e ação                                                                                                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B1.11 `s_mission` | **Find and introduce someone** — Choose someone for me to meet, describe them clearly and introduce us without interrupting the speech                | Nova cena de seis pessoas: Alex/mesa de bebidas, Kim, Leo e Nina dançando, Ana e pessoa fazendo discurso. A aluna descreve/apresenta; a professora seleciona a pessoa indicada para consultar fatos e ajuda opcional |
| B2.04 `s_mission` | **What might have happened here?** — Compare the clues, suggest two possible explanations and tell me what you would check next                       | Reusar `b2-04-flat-evidence123.webp`: recibo, planta e janela/fecho. Separar dado observado, registro informado e hipótese. Preservar chave às 5, recibo às 5:20 e incertezas anteriores ao áudio                    |
| C1.12 `s_reply`   | **Make this checkout work for everyone** — Use the experience you heard to propose a workable fallback, then test it against another customer’s needs | Nova cena de caixa com atendente, gerente e três circunstâncias de pagamento. A discussão usa as duas fontes e a mensagem existentes; a cena vem depois do áudio para não antecipar a experiência que ele acrescenta |

## Donos e critérios

- `SceneExplorer` e `CourseActivity.scene-choice` mantêm seleção de área, ajuda progressiva, imagem estável e ficha acima do alvo crescendo para cima. Dados factuais ficam visíveis na ficha; a dica/modelo não substitui evidência necessária.
- Retratos/ações de apoio são situações pedagógicas; não criam uma nova profissão permanente para Kim nem biografias para pessoas de fundo. Nina/Alex conservam os fatos já registrados na B1.11. Estilo literal1.8 intacto, sem imagens de referência.
- Uma geração por cena nova; primeiro inspecionar o resultado. Arte B2 já inspecionada e adequada ao contexto. Não regenerar áudio nem reapresentar todos os exercícios na mesma tela.
- Congelar textos e registrar bounds finais após as imagens chegarem. Inserir stories usando os mesmos dados da aula, teste focado de seleção/apoio e comparação da preservação de conteúdo. Conferir abertura e dica/modelo nos três pilotos locais; a revisão visual desta rodada cobre o tema escuro em 1280×720.
- Sem adoção no Teacher, push, CI ou publicação nesta rodada de revisão local.

## Progresso

- [x] Fontes/objetivos, gravações e arte existente conferidos
- [x] Briefs das duas imagens com prompt literal congelados
- [x] Mídias concluídas e bounds registrados
- [x] Conteúdo e composição adotados nos três alvos
- [x] Verificações focadas e prévia local para revisão humana

Entrega, evidências e limites em [handoff.md](handoff.md). Os demais encaixes da proposta159 continuam planejados.

Visual gate review: pending human
