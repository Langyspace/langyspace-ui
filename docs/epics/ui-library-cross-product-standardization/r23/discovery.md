# R23 — controles de reprodução da prática

Student portal/index.tsx ShadowingPlayer e portal/styles.ts ShadowControlCluster/PlaybackControls/
PlayButton/SkipButton/ControlRow/SpeedControl/SpeedButton/TranslationToggle; Teacher equivalentes em
ShadowingPreviewSession e StudentLearningPreview/styles.ts. JSX e CSS são equivalentes: play/pause,
skip opcional, velocidades e tradução. A recipe responde a640/900 e altura761 da mesma forma.

| Parte                                    | Balança / recorte                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| Cluster de controles                     | Compartilhar PracticePlaybackControls por dados/ações, sem engine de áudio     |
| Labels e skip                            | Dados de apresentação (playLabel/skipAction), não prop music ou produto        |
| Velocidade/tradução                      | Valor/opções/callback e toggle; estados continuam nos produtos                 |
| Frase ativa/highlight                    | Não entra: wordIndex/said/normalização, timing e música dependem do controller |
| Progresso/repetição/dock/header/skeleton | Permanecem locais; skeletons ainda usam parte dos styles de layout             |

Benefício: eliminar markup de controles e recipes extensas de botões nos dois; sem flags de estilo.
Trocar engine/reader não compensa nesta unidade. Preservar alvos, responsividade, clique/labels e foco.
