# Instruções no cabeçalho e homework completo

Base UI: `36ed798648392f08b36c35ae88e36e036f1111e3`. Regras solicitadas: instruções globais no título/subtítulo; preservar dados e rótulos do exercício; três celulares do homework com o mesmo tamanho; todos os flashcards ativos com pelo menos vinte cards pertinentes.

## Instruções

- Inspeção das 140 referências de atividade do adaptador Course, nos 53 materiais que o usam, e dos helpers ativos dos sete materiais dedicados, experimentais e extras
- 31 casos de autoria consolidados no cabeçalho. O contexto acessível da referência passou a ser nominal; `referenceLabel` explicita um rótulo de referência opcional. O renderer não reaproveita `activity.title` como uma instrução no corpo
- As condições necessárias para responder foram preservadas, incluindo T-shirt azul/tamanho M e orçamento de apartamento abaixo de $1,000. Preços, tamanhos, Before/Now, itens de menu e nomes continuam junto da referência
- Instruções de ordenar imagens ficam no subtítulo. `ImageSortBoard instructions=""` deixa de criar um parágrafo vazio e não cria um ID ARIA inexistente; o comportamento padrão de outros consumidores é preservado
- A103: a orientação de introduzir alguém/acrescentar cidade ou profissão vai para o cabeçalho, mantendo a ajuda progressiva
- Aberturas com review trazem a orientação no subtítulo; encerramentos experimentais mantêm a mensagem do WhatsApp como conteúdo, com um rótulo curto acima do telefone
- Frontend: tradução por clique, correção e contexto da entrevista ficam nos respectivos subtítulos. Perguntas, falas, apoios por turno, explicações gramaticais e mensagens que são o conteúdo do exercício não foram tratados como instruções soltas
- Guideline central atualizada com essa distinção, sem filtro de palavras em runtime

## Tamanho dos celulares

Causa: a carcaça de mensagens tinha um override `height:auto` dentro do ajuste de slides; o conteúdo natural forçava o terceiro aparelho a crescer. `MessagePhoneFrame.contentSizing='fit'` mantém a altura configurada e encaixa apenas a conversa estática. O comportamento natural continua padrão nas escutas. Um recipe privado de dimensões é compartilhado com `MobileFrame` application.

Conferência real local do homework A1.11 em 829×775: os três frames mediram 497.332px de altura; larguras aproximadamente 221.35px. Texto e compositor do terceiro aparelho permaneceram visíveis. Sem scroll interno ou corte.

## Flashcards

Inventário inicial do agente: 31 homeworks com flashcards; A1.01 Countries48 e Influencer24 já estavam corretos. Os outros 29 pacotes e respectivas prévias tinham 6–13 cards; portanto era um problema dos dados, não apenas do contador. A correção foi concluída: 29 conjuntos ampliados para 601 cards (405 acréscimos). A1.02 tem 36; Frontend tem 25; os outros 27 alterados têm 20. Countries48, Influencer24 e Dev20 foram preservados. Todos os 32 homeworks de flashcards atribuídos agora cumprem o mínimo na fonte local e nos pacotes Student preparados. O antigo A1.01 de seis cards não atribuído foi preservado e está documentado no handoff, sem alegar mudança em sua publicação.

71 conceitos novos usam 142 MP3s ativos; o lote gerou 160 arquivos, com 18 de termos de casamento descartados na curadoria e preservados somente como histórico privado. Nenhuma mídia foi inventada ou publicada automaticamente. As 29 prévias e pacotes Student coincidem em texto, ordem e mídia.

## Verificação proporcional

- Instruções: três testes específicos passaram após corrigir apenas um seletor do teste; seis testes existentes de ImageSortBoard passaram
- Celular: nove testes focados passaram, cobrindo ajuste de conteúdo e identidade da professora
- Prévia do gift: instrução única no subtítulo, ficha e metadados preservados
- TypeScript UI passou e a API opcional do frame foi compilada/conferida: 184 valores, 307 tipos, 651 declarações; sem novos exports. Dois testes de contagem mínima/preservação dos flashcards passaram na frente de autoria
- Sem nova publicação em staging/produção ou merge nesta tarefa. Os dois arquivos A101 preexistentes seguem fora da entrega

## Pendências da entrega

- [x] Regra e correções de instrução na fonte
- [x] Ajuste compartilhado do frame + medida real
- [x] Completar e conectar todos os 29 conjuntos pequenos de flashcards
- [x] Conferência agregada de tipos/API
- [x] Entrega em PR de revisão (sem merge)
- [ ] Revisão visual humana

Visual gate review: pending human

Conferência final local: A1.11 mostra 1/20 na prévia nativa; as alturas externas dos três aparelhos continuam 497.332px após carregar os dados novos. Evidências em `evidence/`.
