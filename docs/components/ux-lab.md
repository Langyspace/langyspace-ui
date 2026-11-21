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

`RevealSequenceCard` remains available for a genuine progressive-disclosure task. B1.01 now uses visible contextual media, three compact facts and a guided six-turn dialogue; its former hidden cards, editable summary and checklist were removed in feedback43. Free notes and learner-specific state stay outside package exports.

`GrammarTable hiddenAnswers` presents unrevealed rows as one disclosure cell across the answer columns, with a visible question action. Revealed rows return to the normal table columns. The strong table header and plain subject labels keep the longer B1 meaning descriptions readable; standard tables retain their tagged presentation.

`RolePlayExercise density="compact"` reduces step spacing and bounds its scene image to the presentation height. `KeyValueList density="compact"` keeps three facts with smaller gaps and a body-sized value. Both default densities remain unchanged. See B1.01 RolePlay and Details/KeyValueList CompactFacts source stories.

## Reviewed lesson compositions — A1.05

Reviewed library components take precedence over imported Claude versions. `RevealCard` supports
`presentation="prompt"` for click-to-reveal hints beneath a question. `SlidePage.titleAudio` places
the native recorded-playback action beside the final title word. `LearningDialogue` supports
controlled `parts`, `revealedGapIds` and `onRevealGap` for stable inline answers. `VocabularyGrid`
supports built-in `controls`, `surface="plain"` for transparent objects and `interaction="static"`
for noninteractive role-play cards. Its regular isolated images use the available card height.
`RolePlayExercise` supports `presentation="instructions"` for teacher-led oral tasks without
checklist counters or required clicks. Existing lesson adapters delegate to these canonical owners.

A1.05 demonstrates the combinations in Materials/A1.05, including transparent fruits, static fruit
cards, oral role-play, native ElevenLabs playback and third-listen transcript disclosure. Those
stories are examples for human review; no visual acceptance is implied.

## Contact and symbol exercises — A1.02

`VocabularyGrid` items may use native `symbol` text instead of `imageUrl`. This keeps numbers and
letters selectable, readable and audible with the approved reveal controls, without SVG/image
substitutes. `CallSimulation` supports `density="compact"` using the existing phone-layout theme.
`KeyValueList` supports `tone="material"` so contact-card labels and values resolve against the
slide theme. Existing defaults remain intact. Examples are in Materials/A1.02,
Exercise/Components/NativeSymbols, Exercise/UX Lab/CompactContactCall and
Details/KeyValueList/MaterialContact. Human review remains pending.

## Stable reveals and guided role-play — A1.05 feedback32

`RevealCard` prompt answers retain an inert, invisible footprint before reveal; short support cannot
move the page. Compact `LearningDialogue` uses the native small control height with equal vertical
padding. Its optional controlled `guidance` selects cue, hint or full model, using the same centered
bulb/eye controls as vocabulary; guidance layers reserve the longest text footprint. Inline gaps
size to their real answer rather than a64px minimum. GrammarTable resolves semantic tone colors
from the active theme, including the reviewed dark green text token.

Paginated SlideDeck disables native snap/anchoring and native wheel scrolling; the gesture controller
owns movement, while programmatic scrolling still exposes genuinely tall content. Continuous mode
keeps native scrolling. Content planning rules are centralized in docs/materials/content-planning-guidelines.md.

### Contact-flow refinements

`CallSimulation` accepts `direction="incoming"`, `active` and an optional prepared `ringtoneSrc`. Incoming idle/ringing uses the answer action; ringtone playback stops when connected, inactive, hidden or unmounted. A trusted-click retry is available if native autoplay is refused. `playback` composes the compact `AudioSequenceControls` beside the caption, with optional previous navigation. No camera, microphone or real telephone call is requested.

`AudioSequenceControls density="compact"` omits the outer panel and progress dots, using replay/next icons for embedded devices. Its existing regular presentation is preserved. `ExercisePanel variant="workstation"` composes a contextual media slot and a native monitor/form surface. `FieldRoot` resolves labels and assistance colors from the active theme, matching native inputs. See the A1.02 Contact flow stories for the incoming, registration, outgoing and independent-message compositions.

### Contextual scenes and named dialogue (feedback37)

- `LearningDialogue.speakerLabels` controls names independently of density and defaults to visible. Compact mode retains both name and avatar. Known product identities are supplied by the material adapter, never hard-coded into the generic component.
- `SceneExplorer.connections` joins hotspot IDs using the same measured source-image geometry as the markers. `SceneHotspot.example` renders a short usage example in its callout; consumer-owned playback can use a prepared label + pause + example recording. `imageSizing="presentation"` fits the entire scene into the lesson viewport without cropping the hotspot targets.
- `RolePlayExercise.imageFit` defaults to contain; instructions mode omits empty role rows and empty step lists. Its existing children/tracker slots compose an interactive scene with guided oral prompts without cloning a new exercise layout.
- `SlidePage.questions` owns the responsive conversation/comprehension split. The maintained materials and UX Lab Storybook use the same component.

### Device context and listening identity (feedback38)

`CallSimulation.messages` renders consumer-authored prompts inside the phone, reusing its caption bubbles. External children remain exercise support; omit the empty side slot. `ringtoneVolume` defaults to0.18 and controls only the SFX, not speech. The existing lifecycle stops the tone on answer/end/inactivity/visibility/unmount.

`ExercisePanel` workstation accepts `workstationMeta.appLabel` and `.clock`. It uses a landscape monitor with window/task bars, chin and stand; native fields are arranged compactly, and the contextual image retains its proportions. Decorative OS chrome has no fake system actions.

`VoiceMessageExercise` uses one contact identity for header and voice-note portrait; contextual introductory text stays in the existing greeting prop. `SceneExplorer` short label/example callouts use natural height and visible overflow rather than inner scrollbars.

Feedback40 adds the optional shared-photo attachment to the same WhatsApp owner.
The A103 listening composition demonstrates photo + voice note; A102 demonstrates
the monitor's colored chrome/date and the focused my/your grammar practice.
Family introductions keep the action above a three-fact record, with stable model
space through RevealCard.answerMinLines. All are source compositions of the UI Library.

Feedback42 adds source variants in Exercise/Components: reusable monitor flow/form and RevealCard guidance cycling Hint → Answer → Hide. A104 DaysAndTimes and TimesOfDay use the canonical compact calendar and existing scene vocabulary; A103 Introductions resets progressive guidance per selected person. Existing originals consume the same owners. No remote Lab publication or new visual approval is implied.

Feedback44 consolidates lesson scenario composition and statement review in shared data adapters using the reviewed RolePlayExercise, KeyValueList, LearningDialogue, ExercisePanel and QuizOption owners. B1/B2/C1 share the same responsive phone preset. Source stories include reference navigation, descriptive stacked facts, revealed expression tables, role-play choices and advanced feedback decisions. No remote Lab update or browser validation is implied.

The supplied A102 mobile-soft file is already attenuated to approximately−30.46LUFS, so that exercise explicitly uses volume0.7; the generic0.18 default protects unattenuated assets. Do not stack both reductions blindly. Playback/perceptual acceptance remains with the product owner.

### Named speakers and fact-based introductions (feedback39)

LearningDialogue and VoiceMessage contacts use Avatar.name/namePosition/description for a single portrait/name contract. Compact dialogues retain foreground semibold names with a spacing token. Native scrollbar tracks are hidden within the material surface, without changing overflow or gesture ownership. The A103 introduction exercise exposes the selected person’s actual family/job/city facts and an optional model, without a secret selection.

### Answer feedback sounds (feedback41)

QuizOption and graded native listening/gap/pair choices accept feedbackOutcome.
The consumer supplies correctness; the shared sound engine plays a short cue on
the accepted click. SlideDeck exposes the opt-in sound toggle, independent of
recorded speech. Materials adopt it consistently; preferences and exploratory
prosody samples stay silent. The AnswerFeedbackSounds story demonstrates both
results, mute, keyboard activation and disabled choices for human review.

### Feedback45 — compact decisions and clear role swap

The maintained B1/B2/C1 statement adapter shows multiple prompts with canonical inline QuizOption choices and compact material QuizQuestion text. One explanation opens at a time while answer states remain visible. GuidedScenario choices are centered. B1 contextual MCQs use the same warm-up column and put the scenario in the heading; the no-image Leo dialogue is outside the two-image count. The role-swap controls live in SlidePage tools and update the stage heading. Source stories expose these variations; no remote Lab publication or browser/visual review was performed.

### Feedback46 — learner identity

The existing LearningDialogue receives optional learnerIdentity and semantic learner lines. Missing/unavailable photos retain You; authored fictional speakers remain unchanged. All maintained material adapters bind the product context, and TrialA1 greeting reuses six native bubbles with teacher identity and optional bulb/model support. Source examples include LearnerWithPhoto and LearnerWithoutPhoto. No remote Lab write or runtime visual approval is implied.
