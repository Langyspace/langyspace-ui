# Exercícios do UX Lab

Contratos extraídos do [UX Lab publicado](https://claude.ai/artifact/4JSNcRAHm4yHsyN89SXKwN), versão `1794646326-5b98`. As demonstrações estão em **Exercise / UX Lab** no Storybook. O inventário dos 34 padrões, dados de exemplo e hashes das mídias ficam em `stories/materials/UXLab`; os dados não entram no pacote.

Use Montserrat e Space Grotesk pelo carregamento normal do produto. Os componentes usam os tokens de slides, exercícios, WhatsApp e `theme.simulations`. Componha-os dentro de SlidePage/SlideDeck. O consumidor fornece conteúdo, estado e ações e pausa áudio/relógio ao sair da página. Em tema escuro, configure também `colors.text.primary` e `colors.text.muted` para as ações canônicas. Não há dependência de iframe nem importação de fixtures em produção.

## CallSimulation

Frame de telefone com estados `idle`, `ringing`, `menu`, `connected` e `ended`. Recebe `contactName`, `initials`, `state`, `elapsedLabel`, `caption`, `pressedKey` e callbacks `onCall`, `onHangUp`, `onKeyPress`. O teclado só aparece no menu; `children` recebe tarefa, apoio ou resumo. `disabled` bloqueia os controles. Não inicia chamadas externas.

A demonstração A1 usa Bella Pizza; a avançada usa Fibrenet. O consumidor controla a opção correta, os tempos de transição, a sequência de falas e o cancelamento ao desligar.

`presentation="video"` utiliza o frame compacto da receita de voz, aceita `avatarUrl` e mostra câmera desligada. `signalPoor` e `onSignalToggle` controlam a perda simulada de conexão, o desfoque e o botão de recuperação. Os rótulos `cameraOff`, `signalPoor` e `signalGood` são traduzíveis. A duração, a pausa ao sair da página e o reinício pertencem ao consumidor. Os padrões da chamada de áudio permanecem iguais; não há acesso a câmera, microfone ou rede telefônica.

## InterviewSimulation

Videochamada com entrevistadora, aluna, legenda, controles de mic/câmera/mão e sequência de áudios. Recebe `interviewer`, `learnerName`, `caption`, `turnIndex`, `turnCount` e callbacks de navegação. Cada toggle recebe valor e callback; `ended` bloqueia a reprodução e os controles da chamada. `loading` bloqueia o transporte.

Os controles representam estados da simulação. O componente não solicita dispositivos nem transmite vídeo. O portal fornece eventuais permissões, mídia e comportamento real.

## AudioSequenceControls

Transporte compartilhado por entrevista e shadowing: anterior, próximo áudio, repetição e progresso. `index=-1` indica que nenhuma fala começou; `count=0` desabilita reprodução. O último item bloqueia avanço; o primeiro bloqueia retorno. `disabled` e `loading` bloqueiam os três controles. `status` recebe mensagens do player.

## GrammarTable

Tabela semântica com caption, cabeçalhos de linha/coluna e tons `affirmative`, `negative` e `question`. `columns` define os rótulos e a coluna opcional de verbo. Cada linha tem `id`, `subject`, `example` e, opcionalmente, `verb`, `translation`, `audioLabel`.

`hiddenAnswers` remove as respostas do DOM até o consumidor incluir a linha em `revealedIds`. `onReveal(id)` solicita a revelação. `onPlay(id)` atende clique, teclado ou entrada do mouse em um exemplo aberto; o consumidor gerencia reprodução e cancelamento.

## GapFillExercise

Frases com uma lacuna ativa por `activeId`; as opções ficam junto dessa fala. `items` recebe texto antes/depois e apenas as respostas já reveladas. `choices` define rótulos, estado e bloqueio. `optionsVisible`/`onOptionsToggle` controlam “Show options”. `onSelect(itemId, choiceId)` entrega a seleção ao consumidor, que decide gabarito, feedback e avanço.

## RolePlayExercise

Situação com imagem e papéis opcionais, apoio revelável e checklist. `steps` identifica cada passo, `completedIds` controla a seleção e `onStepToggle(id)` comunica a ação. `supportVisible`/`onSupportToggle` controlam os apoios. `children` permite instruções adicionais. Não avalia nem persiste a participação.

A apresentação opcional `tracker` de `RolePlayExercise` mantém a cena sem painel extra, coloca o controle de apoio junto aos passos e identifica o próximo item por `aria-current="step"`. Os passos continuam independentes e controlados. `labels.joiner` permite localizar a contagem (por exemplo, `de`); a apresentação padrão preserva a aparência anterior.

## SceneExplorer

Imagem com hotspots em coordenadas percentuais. Cada hotspot tem `id`, posição, rótulo, pergunta e resposta opcional. `selectedId`, `visitedIds` e `answerVisible` controlam seleção, progresso e apoio. `onSelect(id)` pode também acionar o áudio do objeto no consumidor. Os hotspots são botões com nome acessível e equivalente de teclado.

`presentation="labels"` mostra as palavras sobre a imagem e mantém a marca visual dos itens visitados, sem o painel de respostas do modo exploratório. O rótulo de áudio recebe `labels.play`. Posição, fala e estado continuam fornecidos pelo consumidor; a apresentação padrão permanece `explore`.

## MinimalPairExercise

Dois cartões com palavra, imagem e transcrição fonética. `mode` alterna escuta/fala por `onModeChange`; `onListen`, `onSelect` e `onNext` delegam as ações. `selectedId`, `feedback`, `hint` e `score` exibem o resultado fornecido. No modo de fala, a professora indica o que ouviu; o componente não simula reconhecimento de voz nem atribui acerto automaticamente.

## FluencyTimer

Rodadas, público, apoios, relógio, progresso e controles. `rounds` define a duração de cada rodada; `roundIndex`, `remainingSeconds` e `running` controlam o estado. `onToggle` pausa/inicia e `onReset` reinicia. O componente não mantém um relógio em background. As stories usam segundos reais e removem o intervalo ao sair.

## BranchingConversation

Telefone de chat com histórico, escolhas ou texto livre e painel lateral. `messages` admite conteúdo React, incluindo cartão de vídeo. `choices`/`onChoice` atendem respostas prontas; `draft`, `onDraftChange` e `onSend` atendem texto livre. O envio vazio ou encerrado fica bloqueado; Enter envia o formulário. `ended`, `disabled`, `status` e `onRestart` completam o fluxo.

A árvore e a avaliação de tom pertencem ao consumidor. Na demonstração avançada, a aluna escreve e a professora escolhe como a mensagem soou, seguindo o Lab.

## VideoExercise

Páginas Watch/Talk about it controladas por `page`/`onPageChange`. O slot `media` recebe o player nativo ou oficial do portal. `chapters`, `activeChapterId` e `onSeek(seconds)` controlam trechos. `beforeWatch` recebe a orientação inicial e `children` recebe compreensão/discussão.

O Lab usa uma prévia ilustrada e um cartão de vídeo recebido. As stories preservam essa natureza demonstrativa; arquivos, legendas, YouTube IDs, reprodução e gravação reais são fornecidos pelo consumidor.

## OralReview

Perguntas com nível, exemplo revelável e 1–3 estrelas por resposta. `ratings`/`onRate(id, stars)` controlam a avaliação manual; `revealedIds`/`onReveal(id)` controlam exemplos. `disabled` bloqueia as estrelas. Componha partes da prova no consumidor; não há classificação automática.

## OralReviewResult

Resultado, total, barras por parte e campos de aluna, professora, data e comentários. `parts` recebe pontuação e máximo; `result` recebe a faixa definida pelo produto. `onFieldChange`, `onClear` e `onExport` delegam edição e exportação. O botão de exportar bloqueia enquanto há perguntas pendentes ou `exporting=true`. A geração de PDF pertence ao portal; a story confirma o callback sem baixar um arquivo fictício.

## Reutilização

| Padrões                                       | Contratos existentes                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| Múltipla escolha, Quick check, Right or wrong | ExercisePanel, QuizOption, QuizFeedback                                        |
| Review, exemplos, compreensão                 | RevealCard e composição de texto                                               |
| Vocabulário, fale o nome                      | VocabularyGrid                                                                 |
| Conversa guiada, Your turn, role play em chat | LearningDialogue                                                               |
| WhatsApp e sim/não                            | VoiceMessageExercise                                                           |
| Guess who                                     | ChoiceCard                                                                     |
| Shadowing                                     | ShadowingReader, frases/palavras e controles existentes, AudioSequenceControls |
| Título, cápsula, scroll, casa                 | SlidePage, SlideDeck e composição de ações do produto                          |

Todos os contratos novos são exportados da raiz e aceitam props/ref nativos do elemento correspondente. Use `labels` quando disponível para traduzir os controles. Conteúdo de aula e gabaritos permanecem nas fixtures ou no consumidor.

## RevealSequenceCard

A controlled card for progressive disclosure, for example closed → clue → answer. Pass ordered `stages`, `stageId` and `onAdvance`; the callback receives the next stage id. Each stage supplies its own accessible `revealLabel`, optional image/alt text and content. The component never evaluates an answer or stores lesson progress. The last stage remains focusable with `aria-disabled`; it cannot advance. An empty sequence is disabled. Theme colors and native keyboard activation follow the shared library.

`stories/materials/B101` composes this contract for the three-day role play. It also exercises `RolePlayExercise.tracker`, a slot for a consumer-owned editable summary before the checklist. Free notes and all learner-specific state remain outside package exports.

`GrammarTable hiddenAnswers` presents unrevealed rows as one disclosure cell across the answer columns, with a visible question action. Revealed rows return to the normal table columns. The strong table header and plain subject labels keep the longer B1 meaning descriptions readable; standard tables retain their tagged presentation.

`RolePlayExercise density="compact"` reduces step spacing and text size for short lesson viewports; its default density stays unchanged.
