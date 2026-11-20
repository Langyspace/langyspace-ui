# B1.01 — fonte final43

## Resultado

- Busy weeks / Time for yourself usam diretamente o VocabularyGrid revisado. Foram removidos a transformação local dos cards em altura natural e o fundo escuro aplicado ao label que mantinha o texto interno preto. Revelação e áudio das oito palavras permanecem no clique; lâmpada/olho são os controles canônicos.
- Os três warm-ups mantêm escolhas e gabaritos, com contador discreto na mídia. Não há tarefa Now you abaixo. Welcome back! e A message from Leo também perderam essa tarefa adicional.
- As duas páginas de pronúncia foram substituídas por Keep the conversation going e What have you finished?. A primeira pede uma pergunta que obtenha informação nova; a segunda pede o resultado concluído, depois da explicação. Não tratar uma frase gramatical como errada fora do contexto: aqui se avalia qual mensagem atende ao objetivo declarado.
- Been doing or done? usa a mesma cena da pintura, perguntas de sentido, duas formas e exemplos visíveis: atividade/tempo e quantidade concluída. Explicações curtas incluem for/since e deixam claro que o contínuo também pode descrever atividade recém-interrompida. Não há quiz ou tarefa pessoal abaixo.
- A message from Leo usa VoiceMessageExercise, a foto canônica e o áudio existente. Seu tamanho cresce com a altura disponível e a transcrição continua automática na terceira escuta. O header agora resolve nome/status pela própria cor de superfície através de Avatar.textTone, corrigindo o mesmo problema em todos os consumidores do celular.
- Right or wrong? preserva os cinco itens, mas apresenta um de cada vez, retém tentativas e mostra uma correção curta. Os contextos dos itens foram explicitados para evitar ambiguidades. Saiu o sexto checklist One from today. O feedback de acerto/erro usa QuizOption e o som já existente do deck.
- What has Kim been doing? abre com uma imagem de pista visível, três fatos e seis turnos guiados. Escolher um dia muda os fatos e restaura as ajudas. A aluna pergunta; a professora usa a ficha. Não há mais formulário, resumo editável, passos marcáveis ou troca de papéis na mesma tela.

## Biblioteca e continuidade

Avatar recebeu textTone opcional, mantendo o padrão anterior fora dos celulares. KeyValueList recebeu density compact opcional; RolePlayExercise compact limita a cena à altura da apresentação. B1.01 usa essas variações sem CSS próprio de exercício. Removedor do snap legado limita-se à composição B101; hooks, SlideDeck, Notes, foco, bridge38 e sons41 não foram reimplementados. O consumidor B101 passa a habilitar o controle de som do deck existente.

Guideline e documentação de personagens registram as regras gerais. Os três cartões são modelos temporários de role-play, não fatos biográficos novos. Novas stories incluem contato em celular claro dentro de tema escuro, fatos compactos, vocabulário revelado, dois exercícios substitutos e role-play com troca de contexto. Stories não foram executadas nesta entrega.

## Evidência e limites

17 páginas B101, mesmos IDs; segunda prática movida para depois da gramática. Catálogo de14 aulas/capas e total210 páginas preservados por composição. Nenhuma imagem ou gravação gerada/alterada; quatro clipes antigos de pronúncia saem do preload/import da aula, com originais e proveniência históricos preservados. O prompt canônico de imagem não foi modificado.

Package build, API write e export são as etapas necessárias de entrega. O primeiro build foi reutilizado até a introdução da variação compacta; o build final inclui essa alteração. Não foram executados suíte, QA, browser, playback ou screenshots. A remoção das reservas/overrides e a composição menor são evidência de fonte, não confirmação visual em um dispositivo. Publicação somente em staging via Integração, com ACK separado; sem produção, Claude/Lab remoto, npm, merge ou backend.

Visual gate review: pending human
