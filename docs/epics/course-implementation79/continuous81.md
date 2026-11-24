# Continuação81 — A1 a C1

Implementação das 60 aulas regulares, mantendo 12 por nível. As cinco aulas extras/experimentais anteriores continuam no catálogo, totalizando 65 entradas. Esta entrega é local e aguarda revisão humana; publicação, npm e merge não estão incluídos neste registro.

## Composição

Cada aula tem planejamento de 50 minutos, vocabulário inicial de pelo menos seis itens, conversa-modelo completa com perguntas ao lado, prática oral com intenção e uma lâmpada sequencial, gramática depois do primeiro uso, uma missão e uma atualização por áudio. A conversa livre temática é penúltima; a prática de casa é última.

Os modelos longos foram divididos em partes identificadas. Nas discussões factuais, a referência fica disponível na própria página; não existe gabarito inventado para preferências pessoais. O caso com vários públicos/opções mantém uma ficha por vez com os mesmos campos, evitando repetir todos os nomes dentro de cada linha.

Mapas nativos, sequência com seleção/teclado, imagens com legendas e comparação lado a lado são componentes reutilizáveis. Os recortes de um atlas são viewports de apresentação: os PNG/WebP originais não foram cortados ou sobrescritos. O carregamento é por aula; recibos de provider não integram o payload de runtime.

## Verificação e limites

- Contrato das 60 aulas/65 entradas sem erros; 811 arquivos de mídia anteriores preservados byte a byte, incluindo o S.1 corrigido de A1.02.
- 877 bindings ativos nos 53 módulos Course; 1.515 registros de proveniência incluem labels, exemplos, compostos e 31 arquivos legados reutilizados. Esses números não representam 1.515 gravações novas.
- 95 recibos na fila de imagens81 conferidos contra os bytes selecionados. Os assets iniciais de A1 e versões descartadas têm proveniência própria; não interpretar 95 como total de chamadas ou recortes aprovados. Prefixo1.8 literal preservado.
- Reprodução nativa com pausa/retomada e terceira escuta conferida em desktop/celular. Seek próximo ao fim acelerou a verificação de estado; não houve aprovação perceptiva de todas as gravações.
- Conferências de layout reutilizam as evidências dos lotes79/80, os 168 casos A1, os 150 casos da primeira composição A2–C1 e as conferências direcionadas posteriores. Os relatórios registram os casos que falharam e os rechecks que os substituem; não há alegação de inspeção visual de cada página em cada largura.
- Typecheck global, 19 testes focados, quatro casos de SSR do pacote compilado e build do pacote passaram nesta continuação. API aditiva: PictureStrip/RouteMap, tipos correspondentes e props opcionais, sem remover exports. Versão npm inalterada.
- A base contém histórico anterior de materiais ainda não reconciliado com main. A entrega não é apresentada como PR pequeno pronto para merge; o histórico e a evidência visual humana continuam necessários antes de promoção.

O export neutro usa a fonte commitada e terá seu SHA/manifesto no recibo `source-final81.json`. O draft visual continua sem evidência completa dos estados antigos: as capturas selecionadas são exemplos reais dos novos padrões, não uma matriz integral de todos os consumidores. Nenhuma publicação é inferida da autoria concluída.

Recibos e capturas locais: `outputs/course-continuous81-20261123/`, no chat de implementação. O arquivo `course-contract81.json` identifica composição, tempos, mínimo de vocabulário e turnos por código; os demais registros diferenciam o que foi medido de revisão perceptiva.

## Aulas

| Código                                                        | Tema                                  | Páginas | Minutos | Vocabulário inicial | Falas do modelo |
| ------------------------------------------------------------- | ------------------------------------- | ------: | ------: | ------------------: | --------------: |
| [A1.01](../../../stories/materials/A101/A101.review.json)     | Introduce yourself                    |      11 |      50 |                   6 |               6 |
| [A1.02](../../../stories/materials/A102/A102.review.json)     | Your name and number                  |      11 |      50 |                  10 |               6 |
| [A1.03](../../../stories/materials/A103/A103.review.json)     | People in my life                     |      12 |      50 |                   9 |              12 |
| [A1.04](../../../stories/materials/A104/A104.review.json)     | My day and our time                   |      12 |      50 |                   9 |               6 |
| [A1.05](../../../stories/materials/A105/A105.review.json)     | At the street market                  |      12 |      50 |                   9 |              12 |
| [A1.06](../../../stories/materials/A106/A106.review.json)     | My home and my pet                    |      12 |      50 |                  13 |               6 |
| [A1.07](../../../stories/materials/Course/lessons/a1-07.json) | At the airport                        |      10 |      50 |                   6 |               6 |
| [A1.08](../../../stories/materials/Course/lessons/a1-08.json) | At the hotel                          |      10 |      50 |                   6 |               6 |
| [A1.09](../../../stories/materials/Course/lessons/a1-09.json) | Around the city                       |      10 |      50 |                   6 |               6 |
| [A1.10](../../../stories/materials/Course/lessons/a1-10.json) | At the café                           |      10 |      50 |                   6 |               6 |
| [A1.11](../../../stories/materials/Course/lessons/a1-11.json) | This one, please                      |      10 |      50 |                   6 |               6 |
| [A1.12](../../../stories/materials/Course/lessons/a1-12.json) | A day trip                            |      10 |      50 |                   6 |               6 |
| [A2.01](../../../stories/materials/Course/lessons/a2-01.json) | What are you doing?                   |      10 |      50 |                   6 |               6 |
| [A2.02](../../../stories/materials/Course/lessons/a2-02.json) | How was your weekend?                 |      11 |      50 |                   6 |               8 |
| [A2.03](../../../stories/materials/Course/lessons/a2-03.json) | Sorry I’m late!                       |      12 |      50 |                   6 |               8 |
| [A2.04](../../../stories/materials/Course/lessons/a2-04.json) | Are you doing anything on Saturday?   |      11 |      50 |                   6 |               8 |
| [A2.05](../../../stories/materials/Course/lessons/a2-05.json) | I’ll carry that!                      |      11 |      50 |                   6 |               8 |
| [A2.06](../../../stories/materials/Course/lessons/a2-06.json) | My back hurts                         |      11 |      50 |                   6 |               8 |
| [A2.07](../../../stories/materials/Course/lessons/a2-07.json) | House rules                           |      11 |      50 |                   6 |               8 |
| [A2.08](../../../stories/materials/Course/lessons/a2-08.json) | Have you ever been to Lisbon?         |      11 |      50 |                   6 |               8 |
| [A2.09](../../../stories/materials/Course/lessons/a2-09.json) | Long time no see!                     |      11 |      50 |                   6 |               8 |
| [A2.10](../../../stories/materials/Course/lessons/a2-10.json) | It’s too far                          |      11 |      50 |                   6 |               8 |
| [A2.11](../../../stories/materials/Course/lessons/a2-11.json) | If it rains, we’ll…                   |      11 |      50 |                   6 |               8 |
| [A2.12](../../../stories/materials/Course/lessons/a2-12.json) | How about Friday?                     |      11 |      50 |                   6 |               8 |
| [B1.01](../../../stories/materials/Course/lessons/b1-01.json) | What have you been doing?             |      13 |      50 |                   6 |              11 |
| [B1.02](../../../stories/materials/Course/lessons/b1-02.json) | There used to be a cinema here        |      12 |      50 |                   6 |               8 |
| [B1.03](../../../stories/materials/Course/lessons/b1-03.json) | The show had already started          |      12 |      50 |                   6 |               8 |
| [B1.04](../../../stories/materials/Course/lessons/b1-04.json) | Whose bag is this?                    |      12 |      50 |                   6 |               8 |
| [B1.05](../../../stories/materials/Course/lessons/b1-05.json) | He said he’d come on Thursday         |      12 |      50 |                   6 |               8 |
| [B1.06](../../../stories/materials/Course/lessons/b1-06.json) | If I took the job                     |      12 |      50 |                   6 |               8 |
| [B1.07](../../../stories/materials/Course/lessons/b1-07.json) | I should have taken the direct flight |      12 |      50 |                   6 |               8 |
| [B1.08](../../../stories/materials/Course/lessons/b1-08.json) | I’m getting used to the cold          |      12 |      50 |                   6 |               8 |
| [B1.09](../../../stories/materials/Course/lessons/b1-09.json) | My bike was stolen!                   |      12 |      50 |                   6 |               8 |
| [B1.10](../../../stories/materials/Course/lessons/b1-10.json) | Could you tell me where it is?        |      12 |      50 |                   6 |               8 |
| [B1.11](../../../stories/materials/Course/lessons/b1-11.json) | The woman who’s dancing with Leo      |      12 |      50 |                   6 |               8 |
| [B1.12](../../../stories/materials/Course/lessons/b1-12.json) | Office or home?                       |      12 |      50 |                   6 |               8 |
| [B2.01](../../../stories/materials/Course/lessons/b2-01.json) | Dead phone, no charger                |      13 |      50 |                   7 |              12 |
| [B2.02](../../../stories/materials/Course/lessons/b2-02.json) | By Friday I’ll have finished it       |      13 |      50 |                   6 |              12 |
| [B2.03](../../../stories/materials/Course/lessons/b2-03.json) | If I hadn’t gone to Toronto           |      13 |      50 |                   6 |              12 |
| [B2.04](../../../stories/materials/Course/lessons/b2-04.json) | Someone must have been here           |      13 |      50 |                   6 |              12 |
| [B2.05](../../../stories/materials/Course/lessons/b2-05.json) | We needn’t have paid in advance       |      13 |      50 |                   6 |              12 |
| [B2.06](../../../stories/materials/Course/lessons/b2-06.json) | I need to get the screen fixed        |      13 |      50 |                   6 |              12 |
| [B2.07](../../../stories/materials/Course/lessons/b2-07.json) | She insisted on paying                |      13 |      50 |                   6 |              12 |
| [B2.08](../../../stories/materials/Course/lessons/b2-08.json) | The apartment, which has a balcony    |      13 |      50 |                   6 |              12 |
| [B2.09](../../../stories/materials/Course/lessons/b2-09.json) | I don’t remember locking the door     |      13 |      50 |                   6 |              12 |
| [B2.10](../../../stories/materials/Course/lessons/b2-10.json) | What I need is a quiet room           |      13 |      50 |                   6 |              12 |
| [B2.11](../../../stories/materials/Course/lessons/b2-11.json) | Having said that                      |      13 |      50 |                   6 |              12 |
| [B2.12](../../../stories/materials/Course/lessons/b2-12.json) | Should phones be banned at school?    |      13 |      50 |                   6 |              12 |
| [C1.01](../../../stories/materials/C101/C101.review.json)     | It tends to come across as…           |      16 |      50 |                   6 |              14 |
| [C1.02](../../../stories/materials/Course/lessons/c1-02.json) | Had we known…                         |      14 |      50 |                   6 |              12 |
| [C1.03](../../../stories/materials/Course/lessons/c1-03.json) | The company is said to be…            |      14 |      50 |                   6 |              12 |
| [C1.04](../../../stories/materials/Course/lessons/c1-04.json) | I’d rather you didn’t                 |      14 |      50 |                   6 |              12 |
| [C1.05](../../../stories/materials/Course/lessons/c1-05.json) | Little did I know…                    |      14 |      50 |                   6 |              12 |
| [C1.06](../../../stories/materials/Course/lessons/c1-06.json) | The more I think about it…            |      14 |      50 |                   6 |              12 |
| [C1.07](../../../stories/materials/Course/lessons/c1-07.json) | Having talked to the team…            |      14 |      50 |                   6 |              12 |
| [C1.08](../../../stories/materials/Course/lessons/c1-08.json) | Much as I’d like to…                  |      14 |      50 |                   6 |              12 |
| [C1.09](../../../stories/materials/Course/lessons/c1-09.json) | It’s bound to get worse               |      14 |      50 |                   6 |              12 |
| [C1.10](../../../stories/materials/Course/lessons/c1-10.json) | I’m writing to let you know…          |      14 |      50 |                   6 |              12 |
| [C1.11](../../../stories/materials/Course/lessons/c1-11.json) | To put it another way…                |      14 |      50 |                   6 |              12 |
| [C1.12](../../../stories/materials/Course/lessons/c1-12.json) | A world without cash                  |      14 |      50 |                   6 |              12 |

Visual gate review: pending human
