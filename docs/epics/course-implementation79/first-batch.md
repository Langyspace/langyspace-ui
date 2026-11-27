# Primeiro lote implementado · A1.04 e C1.01

23/11/2026. Duas aulas completas, de 50 minutos, sobre os planos revisados 78. As outras 58 aulas continuam no planejamento. Esta entrega é uma prévia local, sem adoção no portal, deploy, merge ou publicação de pacote.

As composições reutilizam os componentes canônicos: capa/revisão, vocabulário, balões com intenção e lâmpada em sequência, gramática no meio, celular com mensagem anterior ao áudio, conversa temática livre penúltima e prática última. A professora e a aluna recebem identidade pelo contrato existente; sem contexto, os fallbacks continuam Your teacher/You.

## A1.04 · My day and our time

| Página                         | O que a aluna faz                                                           |
| ------------------------------ | --------------------------------------------------------------------------- |
| Capa + People in your life     | Retoma uma apresentação da família, conteúdo anterior                       |
| What do you do every day?      | Nomeia seis ações em cenas novas; clique revela palavra e exemplo com áudio |
| Morning, afternoon or evening? | Relaciona três cenas aos períodos do dia                                    |
| Listen for a time to meet      | Acompanha seis falas de Ana/Kim e identifica dia/horário                    |
| Tell me about your routine     | Fala da própria rotina e pergunta de volta, com dicas opcionais             |
| Talk about what you do         | Distingue ação e estado em uma tabela curta                                 |
| Say when it happens            | Organiza at/on/in com exemplos, sem quiz acoplado                           |
| Find a time to meet            | Consulta dois dias de uma agenda de exemplo e combina um horário            |
| Kim needs to change the plan   | Ouve uma mudança de horário e localiza a proposta                           |
| Reply to Kim                   | Aceita ou oferece alternativa, sem resposta pessoal obrigatória             |
| Free conversation              | Conversa sobre rotina/tempo livre e combina algo com a professora           |
| Before next class              | Consulta duas práticas independentes, no celular final                      |

## C1.01 · It tends to come across as…

| Página                                                                        | O que a aluna faz                                                                          |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Capa + A proposal and a concern                                               | Retoma proposta e reação a uma preocupação                                                 |
| Read the situation, not just the words                                        | Explora seis expressões em cenas; clique toca expressão + exemplo                          |
| What went well? / What still needs attention?                                 | Lê duas partes de uma mensagem atribuída a Laura                                           |
| Explain Laura’s message                                                       | Separa observação, interpretação e próximo passo                                           |
| Ana’s first attempt / Make the concern specific / Agree on a useful next step | Acompanha 14 falas preservadas, distribuídas em 5+5+4, com compreensão curta em cada parte |
| How would you raise the issue?                                                | Formula uma abertura e escolhe a linguagem para a relação                                  |
| Separate a pattern from an impression                                         | Distingue tend to/seem/might come across as; não generaliza uma apresentação isolada       |
| Invite a response without losing the point                                    | Mantém o pedido específico e negociável                                                    |
| Make the feedback useful                                                      | Usa três fatos visíveis para iniciar uma conversa de feedback                              |
| Raj responds to the feedback                                                  | Ouve a reação e identifica o acordo e a preocupação restante                               |
| Keep the reply constructive                                                   | Responde ao conflito entre o pedido de Laura e a preferência de Raj                        |
| Free conversation                                                             | Discute experiências de feedback, relações e interpretações diferentes                     |
| Before next class                                                             | Prepara duas versões de feedback e uma resposta a objeção                                  |

Os textos finais estão nos arquivos `stories/materials/A104/A104.review.json` e `stories/materials/C101/C101.review.json`. Atividades específicas usam `AvailabilityActivity` e `FeedbackActivity`, compostas com elementos existentes, sem CSS exclusivo por aula.

## Biblioteca e mídia

- `LearningDialogue`: modelo opcional na ajuda sequencial; o balão existente continua dono do visual, identidades, áudio ativo, tradução e lacunas.
- `SlidePage` e `VocabularyGrid`: receita única para alinhar o título à grade, preservando as colunas responsivas internas.
- `GrammarTable`: variante semântica `patterns`, com uso e padrão/exemplo; o layout anterior permanece como padrão.
- 12 imagens novas e 28 MP3s novos: 16 respostas originais de síntese e 12 compostos de palavra+exemplo. Labels/gravações válidas foram reutilizados; nenhum asset anteriormente versionado foi alterado.
- Cada composto registra fontes, hashes e silêncio de separação; não recebe request-id fictício de síntese. O texto de gravação continua exato, separado do texto de exibição quando necessário.
- O prompt 1.8 permanece literal, SHA256 `fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489`. Os 12 prompts completos estão em [course-pilots79](../../materials/prompts/course-pilots79/). Proveniência de imagem/áudio está em cada pasta do material.

## O que foi conferido

- 28 páginas reais das duas aulas em 1280×620 e 390×844: 56 casos de apresentação e 92 estados capturados. Sem erro de execução, imagem ausente ou rolagem excedente nos casos finais; cabeçalho e grade de vocabulário alinhados.
- Clique/revelação, dicas sequenciais e reset por teclado; seleção da agenda; controle de áudio ativo e sequência de falas; transcrição automática após terceira escuta.
- Reprodução nativa no navegador, sem substituir `play`. A conclusão foi acelerada por seek para verificar os estados; isso não equivale a escuta humana da pronúncia ou da naturalidade.
- Testes focados de ajuda/identidade, áudio/lacunas, layout e ocultação da gramática passaram. Build do pacote e contrato de API passaram; API aditiva, sem versão npm nova.
- O typecheck global continua com 30 erros anteriores, contra 31 na base, sem erro novo. O lint global não foi declarado limpo; há débitos anteriores nos arquivos compartilhados. Não há alegação de CI integral aprovado.

Não foram verificados runtime autenticado do portal, foto/nome reais da sessão ou deploy. A base de autoria inclui histórico anterior ainda separado do `main`; este lote não foi apresentado como PR pequeno ou promoção pronta de todo esse histórico. Sem push/CI/deploy nesta entrega.

Evidências locais: `outputs/course-implementation79-20261123/verification.final79.json`, `audio-review79.json`, `typecheck-comparison.final79.json` e `captures/`, no chat de implementação. As primeiras capturas detectaram excesso nas composições de escuta/missão; foram reduzidas/divididas e só os casos afetados foram conferidos novamente.

Visual gate review: pending human
