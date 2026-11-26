# A1.01 — lacunas, bandeiras, instruções e entrada no vídeo

Base UI f6f4332a813514973e5b4c1b2fcf670667f1a237. Impacto direto/indireto. Uma entrega local; sem adoção, merge, deploy ou geração de mídia.

## Escopo e decisões

- Lacunas abertas reutilizam LearningDialogue/TextInput: sublinhado contínuo e margem de 4px em torno do campo. Permanecem editáveis, abertas, sem gabarito e sem áudio inventado.
- Países usam VocabularyGrid/surface=plain: remove borda, fundo, padding e raio sem cortar a proporção da bandeira. Os demais cards mantêm sua variação authored; objetos plain também não recebem uma moldura artificial.
- Professora sem campos a completar: cumprimento por hora em timezone confiável do perfil, com fallback no dispositivo apresentador; sentimento e despedida prontos. País declarado quando disponível, senão país de cadastro do telefone, conforme decisão expressa da dona. O host envia só countryCode/timeZone, não o telefone/DDD. TeacherModel atual possui phone+timezone, sem campo separado de naturalidade. O país do telefone é apoio de leitura, não comprovação de origem. Sem origem no contexto, transição neutra pronta. Cinco campos continuam exclusivos da aluna; respostas não são persistidas.
- Títulos revisados pela ação: Talk about yourself; Introduce someone; Guess who; Introduce your friends; Listen and find out about Mia. Vocabulário e Warm-ups já informam ação no subtítulo; modelo Nice to meet you e Meet Vanya preservados.
- Vídeo pré-carregado somente a partir da página vizinha anterior, com cue do intervalo 59–93 e autoplay=0. Ao entrar, mantém a instância já pronta; ao sair da vizinhança, pausa/libera. Não muda vídeo, perguntas ou intervalo.

## Navegação: causa demonstrável e limites

O detector112 aceitava duas pequenas subidas sobre um vale minúsculo como novo drive, e aceitava pacotes iguais da cauda como notches. A janela de silêncio de120ms também permitia que uma cauda esparsa rearmasse o avanço. Não há evidência de que a falta de vídeo ou sua altura tenha causado o salto relatado: páginas têm altura fixa e o iframe não comanda step.

Agora os dois pacotes crescentes precisam recuperar35% do pico relativo do drive anterior; não há limiar absoluto de força. Notches iguais só são aceitos fora da cauda. Silêncio de240ms inicia uma nova transação, mantendo primeiro pacote imediato; passadas consecutivas sem esse silêncio continuam reconhecidas pela forma da onda. Teclado e mouse mantêm caminho compartilhado, sem handler por aula.

Um envio CDP inicial ainda passou do vídeo antes do ajuste de silêncio (até homework); esse teste era sintético e sua cadência não tinha sido registrada, portanto não equivale à reprodução do dispositivo da usuária. Após o ajuste,17pacotes com repiques e intervalos de23–90ms (873ms no total) avançaram s9→s_video_intro uma vez; o próximo gesto nativo levou a free-conversation. Vídeo estava pronto, sem autoplay. WheelEvent não expõe finger-up/phase portável: isso reduz as vias reproduzíveis, não promete classificação perfeita de qualquer trackpad. Revisão física da dona continua necessária.

## Validação proporcional

50 testes focados iniciais:48 passaram; dois ajustes necessários: helper com nome que colidia por capitalização no macOS foi renomeado, e a asserção antiga de50min foi retirada do teste de vídeo porque a autoria111 já somava57min (duração não alterada nesta revisão). Rerun apenas dos4arquivos afetados:29/29. SlideDeck e identidade originais permanecem com a evidência válida da primeira execução. TypeScript UI passou. API snapshot reavaliado, sem diferença de exports; preload é prop aditiva. Mapper Teacher:3/3 e TypeScript passaram.

Uma invocação de pnpm encaminhou os argumentos de filtro incorretamente e iniciou suíte ampla; interrompida, sem adotar seus resultados como prova da entrega. Comandos seguintes usam o runner local com filtros explícitos. Nenhuma suíte completa foi repetida.

## Evidência visual

Prévia real em507×775: antes/depois de Countries, Introduce someone e Talk about yourself; vídeo pronto ao chegar. Também1280×720 com resposta longa, preservada ao sair/voltar. O wrapper de automação fill centralizou o input e deslocou o viewport; reteste por navegação nativa restaurou a âncora correta, sem mudança de código por esse artefato.

Os dois arquivos preexistentes de stories/epic107 permanecem sem stage. Ponte Teacher preparada em worktree independente teacher-facts114, base93a4c031 (ponte já existente); origin/staging local ainda não contém essa cadeia. Nenhuma publicação foi presumida.


## Experimento115 — Talk about yourself oral

A pedido da dona, somente este diálogo troca os cinco campos da aluna por `...` literais nos textos, sem criar prop, CSS ou lógica de substituição. Subtítulo orienta praticar com informações próprias. Falas prontas da professora preservadas. Introduce someone continua com seus três campos e respostas em memória; a navegação local usou seta, sem recarregar nem descartar os valores que a usuária estava testando nessa outra página. Não virou regra global, pois é um experimento para revisão.

Sete testes focados passaram (reaproveitando a cobertura do diálogo com campos em Introduce someone). Conferência no navegador: Talk about yourself sem inputs, nove falas, cinco pontos de resposta oral; captura personal-oral115-after.jpg. Sem build, API change, Teacher change ou deploy.
