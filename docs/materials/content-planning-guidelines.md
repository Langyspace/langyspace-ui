# Planejamento dos materiais Langy

Fonte central de regras de conteúdo e apresentação. Ler antes de criar ou replanejar uma aula.
Atualizada em21/11/2026 a partir dos feedbacks de A1.01, A2.01, A1.05 e A1.02. A revisão final de uso, áudio e visual pertence à dona do curso.

## Planejamento pedagógico

1. **Uma aula resolve uma situação de comunicação.** Definir a ação que a aluna conseguirá realizar, o nível e uma sequência de50minutos conduzida pela professora por compartilhamento de tela. Toda página tem um objetivo identificável e contribui para essa ação.
2. **Conversas completas têm no mínimo seis falas.** Distribuir a participação entre as duas pessoas, normalmente três turnos para cada. Cada turno deve avançar a troca; não completar a contagem com falas vazias. A regra vale para conversação guiada, fill in the blanks e modelos completos de role-play em planos novos ou sendo replanejados. Um microexemplo de gramática tem outra função e não deve ser inflado artificialmente.
3. **Progressão oral:** compreensão → prática guiada → respostas pessoais → interação com mais autonomia. Diálogo completo, outro diálogo com lacunas e conversa pessoal têm funções distintas. Apresentar diálogo à esquerda e perguntas de compreensão à direita na mesma página; em telas estreitas, empilhar sem criar uma barra interna.
4. **Evitar repetição sem nova finalidade.** Depois de reconhecer uma imagem no vocabulary, usar o conteúdo para escolher, perguntar, comparar ou realizar uma tarefa. Pronúncia precisa resolver uma dificuldade perceptível naquele uso. Letras/números podem ser consulta, sem exigir memorizar uma lista inteira.
5. **Conteúdo e enunciados adequados ao nível.** Instruções curtas, naturais e em inglês. Pedir respostas completas e pequenas trocas com a professora, com pistas sob demanda. Não misturar ações diferentes em um enunciado extenso.

## Imagens e identidade

6. **Objetos isolados no vocabulário têm fundo transparente.** Frutas, vegetais e objetos ficam grandes, inteiros, centralizados e com margem segura, preservando a proporção. Gerar novos assets do zero por texto, com transparência solicitada no gerador e preservada no WebP. Não adicionar cenários, caixas, pratos, brilhos ou sombras externas sem função pedagógica.
7. **Ações podem precisar de contexto.** Usar apenas elementos de fundo necessários para compreender a ação. Não transformar uma cena útil em recorte sem contexto. Preservar o branco oficial das bandeiras. Letras e números são texto nativo, sem imagens ou SVG que imitem tipografia.
8. **Estilo Langy:** ilustração suave, levemente flat com volume, cores pastéis, leitura clara e pouco detalhe de fundo. Usar o prompt de estilo vigente por texto; reaproveitar mídia válida e retratos aprovados. Um canal alpha não é declaração de recorte visual perfeito: registrar limitações observadas para revisão humana.

O prompt vigente está preservado literalmente em [prompts/langy-illustration-v1.8.txt](prompts/langy-illustration-v1.8.txt), com origem/hash no README da pasta. Não o reformular ao receber feedback sobre cabelo ou rosto; usar exatamente o texto salvo e acrescentar somente a cena e a identidade solicitadas.

## Componentes e layout

9. **UI Library revisada tem prioridade sobre o Claude.** Reutilizar o componente existente. Se necessário, acrescentar uma variação semântica ao dono canônico em src/components antes de adotar no material. Um padrão realmente novo nasce na biblioteca; não criar CSS de exercício exclusivo por aula.
10. **Cabeçalho:** um título branco, um único subtítulo cinza e o tipo da atividade em vermelho. Space Grotesk apenas nos títulos; Montserrat no texto, perguntas, vocabulário e controles. Usar tokens do tema; o verde de conteúdo no tema escuro é o success foreground aprovado, #8FE2BB, sem mistura com o verde escuro do tema claro.
11. **Planejar o estado aberto.** A página deve acomodar respostas, dicas e traduções, com espaços equilibrados, sem criar rolagem interna pequena ao revelar. Usar medidas proporcionais à área de apresentação, incluindo alturas de620–720px. Remover reservas e margens sem função. Se o conteúdo realmente não couber, reduzir ou separar a atividade; não cortar respostas, esconder o excesso ou reduzir a fonte a um tamanho ilegível.
12. **Revelação estável.** Perguntas revelam apoio abaixo no próprio clique. Reservar o espaço de apoios curtos quando isso evita deslocamento da página, sem cartões vazios grandes. Vocabulário permanece estático após revelar. Lacunas reservam a largura da própria resposta, inclusive para palavras curtas como do; não impor o mesmo espaço largo a todas.
13. **Balões de conversação:** espaçamento vertical equilibrado, texto centralizado no balão, áudio junto ao inglês e tradução abaixo sem mover o botão. Em desafios, mostrar a intenção da fala primeiro; lâmpada oferece uma pista e olho revela o modelo completo. Esses controles ficam centralizados e preservam nomes acessíveis e estados pressed. Nas pistas de um role-play aberto, usar a categoria (por exemplo, “a fruit”) para deixar a escolha com a aluna; itens específicos podem aparecer como exemplos no modelo opcional.
14. **Um dono da navegação por páginas.** Quando o JavaScript controla os passos, não competir com snap ou ancoragem automáticos do navegador. Um impulso não deve avançar uma página extra pela inércia. Novas passadas devem responder sem obrigar uma pausa longa. Preservar teclado, toque, editores e acesso a conteúdo realmente alto. Modo contínuo permanece uma opção própria.
15. **Escolha de formatos pelo objetivo.** Usar imagens e balões em role-play quando ajudam a entender a situação. Remover rótulos redundantes de papéis, campos, contadores, checklists e botões sem função. Feedback de escolhas fica nas próprias alternativas, sem Correct!/Try again extras.

## Áudio, dados e homework

16. **ElevenLabs real e reaproveitado.** Congelar texto/IDs/vozes cedo. Comparar com a proveniência e gerar apenas trechos novos, alterados ou inadequados. Pré-carregar e reutilizar gravações; clique em vocabulário revela e toca. Não usar voz do navegador como substituto. Em diálogos, play preenchido fica ao lado do título.
17. **Escuta no celular:** usar o controle nativo; transcrição automática na terceira escuta nas atividades de voice message, sem botões duplicados. Proporções devem caber na apresentação. Contar reproduções reais, sem tratar pause/resume como nova escuta.
18. **Dados coerentes:** preços, moeda, quantidades, texto, imagem e gabarito precisam concordar. A1.05 usa dólares por pedido da dona do curso; modelos e totais derivam dos mesmos preços exibidos. Em outras aulas, escolher a moeda pelo contexto.
19. **Destinos reais:** só oferecer links de homework para atividades existentes. Uma URL proposta no planejamento não é atividade publicada. Se a atividade do portal não existir, usar tarefa independente adequada sem inventar disponibilidade ou salvar dados em outro produto.
20. **Notas e revisão:** orientações adicionais da professora ficam no Notes protegido ou no plano. Não ocupar a apresentação com roteiro docente. Não executar rodadas extensas de testes ou QA por causa deste guia; a usuária conduz os testes finais conforme a política atual de entrega.

## Como manter este guia

A cada revisão, incorporar automaticamente as novas regras gerais aprendidas com feedback da usuária e correções de causa identificada. Atualizar este arquivo e o dono canônico do componente na mesma entrega. Registrar data, origem e alcance; distinguir regra geral de escolha específica da aula. Preservar decisões anteriores compatíveis e documentar uma exceção quando houver motivo pedagógico. A atualização do guia não dispara revisões de materiais fora do lote, novas gerações de mídia, publicação em produção ou automações.

## Histórico

- **20/11/2026 — feedback32 A1.05:** objetos de vocabulary transparentes; mínimo de seis falas; respostas abertas sem rolagem desnecessária; verde do tema; lacunas proporcionais; role-play visual com dólares e controles de dicas/modelo; prevenção de avanço por inércia. Consolida também os padrões já aprovados de A1.01/A2.01/A1.05/A1.02.

- **20/11/2026 — feedback33 A1.05:** pistas de Kim’s list passaram a “a fruit”, sem predeterminar maçã ou manga; o modelo opcional continua sendo um exemplo.

## Refinamentos da revisão 34

- Conte turnos completos de comunicação, não apenas arquivos de áudio ou linhas visíveis. Diálogos completos e conversas com lacunas têm no mínimo seis falas significativas. Uma entrevista com quatro perguntas gravadas e quatro respostas orais da aluna tem oito turnos. Um exemplo curto não é um diálogo completo: identifique sua função, sem acrescentar falas artificiais.
- Cada pergunta deve ser respondível a partir daquela conversa ou imagem. No role-play, a pista indica uma intenção ou categoria; a lâmpada oferece apoio parcial e o olho mostra um modelo. Detalhes opcionais e orientações de condução ficam nas Notes.
- Planeje a aula regular para cerca de 50 minutos, protegendo a conversação final. Não preencha o tempo com identificação repetida após o vocabulary ou pares de pronúncia sem função comunicativa. Preserve o ritmo mais curto previsto nos experimentais. Ao dividir uma conversa, mantenha uma troca coerente em cada parte; não termine com uma pergunta sem resposta só para atingir uma contagem.
- Preserve os pedidos de conteúdo já aprovados. Quando um banco de perguntas estiver denso, distribua-o entre páginas e ofereça modelos no clique; não elimine perguntas pessoais úteis apenas para reduzir o painel. A professora pode escolher duas ou três por bloco sem aumentar a duração da aula.
- O padrão de vocabulary é revelar por clique, mantendo a palavra estática após a revelação. O hover é uma variação explícita. O clique também toca a gravação preparada da palavra; não deixe vocabulários silenciosos por faltar ligação entre dados e componente.
- O celular revela a transcrição automaticamente na terceira escuta, com o próprio controle de play. Modos anteriores ou manuais são variações explícitas da biblioteca. Não acrescente outro botão de replay ou de transcrição ao material.
- Diálogo e perguntas ficam lado a lado na mesma página, conforme o feedback37 que substitui a regra anterior de páginas consecutivas. No modo de modelo dos experimentais, mostrar as perguntas ao lado; nos modos de ensaio e transferência, preservar a função própria do estágio. A tradução aparece ao clicar na fala original, sem botão extra.
- Reutilize o mesmo objeto aprovado e sua proveniência entre aulas. Preserve o fundo quando ele explica uma ação, posição ou relação: um gato isolado serve ao vocabulary de animais; um gato sob a cama precisa do gato e da cama.
- Diferencie o preview nativo do gerador do arquivo final com alpha: o preview não prova a presença de fundo no WebP salvo. Registre limitações reais dos contornos sem declarar recorte perfeito apenas pelos metadados.
- Um link de homework só representa uma atividade quando essa atividade existe no destino. Caso contrário, ofereça prática independente, sem botão de portal nem promessa de copiar links.
- Migrações de aulas antigas compõem a UI Library revisada. ReviewedLesson é um adaptador de dados, não uma biblioteca visual paralela. Áudios preparados correspondem ao texto e à voz exatos; helpers de compatibilidade não usam síntese do navegador como alternativa.

## Alfabeto como referência — feedback35

- Apresente todas as 26 letras na mesma página de consulta, sem abas de grupos nem seleção fixa que pareça usar o nome da aluna. Use a variação reference do VocabularyGrid, com símbolos nativos e medidas compactas legíveis.
- Nesse formato, a letra já está visível: o clique apenas toca sua gravação existente. A única lâmpada mostra ou oculta o apoio completo de pronúncia, sem primeira letra da dica nem botão de olho redundante. Reserve a área das pronúncias para não deslocar a grade ao alternar.
- Essa é uma variação semântica da biblioteca: os demais vocabulários mantêm os controles de dica e de revelação quando ambos têm função. Não remover o olho globalmente nem gerar áudio ou imagem novos para letras já gravadas.

## Contato, pronúncia e ligações — feedback36

- Um título com áudio continua sendo um único bloco de texto. O play fica em um slot alinhado ao lado, sem destacar a última palavra em outro flex que mude sua linha de base.
- Nome próprio é pronunciado conforme sua língua no contexto: uma apresentação em inglês pode terminar com um sobrenome brasileiro. Ao soletrar, usar os nomes ingleses das letras. Reaproveitar clipes isolados válidos para soletrações quando isso evita ambiguidades; registrar a voz e a proveniência dos arquivos montados, sem atribuir request-id fictício a um derivado.
- Formulários de prática têm um contexto comunicativo concreto, campos nativos e contraste resolvido pelo tema. No atendimento, mostrar uma cena simples e uma estação de trabalho funcional; a professora digita o que a aluna dita. Não simular salvamento em backend nem depender de placeholders como rótulos.
- Alternar o papel da aluna: primeiro atender e confirmar/corrigir, depois dar os próprios dados, depois fazer perguntas. O fechamento transfere para outra tarefa, como uma mensagem oral curta, em vez de repetir a mesma lista de perguntas ou pedir outra troca de papéis.
- O toque de chamada pertence ao estado de entrada e à página ativa. Parar ao atender, desligar, trocar de página, ocultar a janela ou desmontar. Controles de replay/próximo são os ícones canônicos dentro do telefone, perto da fala, e apoios recorrentes podem permanecer em dois chips fixos.

## Contexto, personagens e compreensão — feedback37

- **Conversa e perguntas juntas:** usar `SlidePage.questions` com conversa à esquerda e compreensão à direita. Preservar perguntas válidas; em conversas longas, distribuir as perguntas entre as partes que contêm a informação necessária. Não mostrar uma pergunta antes da fala que permite respondê-la. Não criar rolagem interna por coluna. Em largura estreita, empilhar mantendo fontes legíveis e acesso ao conteúdo.
- **Identificação é independente da densidade:** nomes e retratos permanecem visíveis em conversas compactas. Reutilizar a identidade já aprovada do personagem. Se uma pessoa ainda não tem retrato próprio, não assumir que uma imagem genérica de profissão é ela. Iniciais para “You” são legítimas porque não há foto da aluna.
- **Palavras de relação precisam de contexto:** família, amizade e relações de trabalho não são reconhecidas só pela aparência de um retrato. Explicitar quem está apresentando, usar uma cena e copy coerentes e conectar visualmente um grupo quando a palavra o representa (ex.: pai+mãe→parents). Texto, hotspots e conectores são nativos e acompanham a geometria da imagem, sem UI embutida no bitmap.
- **Exemplos variados e áudio completo:** cada exemplo acrescenta significado (profissão, origem, relação ou nome), em vez de repetir seis vezes a mesma estrutura sem informação nova. No clique, a palavra pode ser seguida do exemplo com pausa-alvo curta de350ms, incluindo bordas silenciosas já presentes. Não somar silêncios longos nem cortar fonemas para forçar uma emenda. Registrar fontes/request-ids reais de cada segmento e não apresentar metadata como aprovação perceptiva por escuta.
- **Gramática com estrutura completa:** separar sujeito e verbo, mantendo o pronome demonstrativo/pessoal e be explícitos na tabela. Não apresentar `a / an` no lugar do verbo; tratar artigos como apoio à profissão no exemplo.
- **Títulos identificam a ação:** preferir Introduce someone, Your week ou Introduce a pet a um Your reply sem contexto. Perguntas devem buscar informação desconhecida e relevante; evitar tautologias como perguntar a profissão da professora da aula para obter “She’s a teacher”.
- **Prática produtiva com propósito:** no início do A1, não expor frases incorretas como treino automático sem necessidade. Uma tarefa de escolher uma pessoa e apresentá-la a partir de fatos visíveis trabalha seleção e produção oral; a informação necessária precisa estar na tela. Correção de erros em níveis/contextos adequados permanece uma escolha pedagógica explícita, não um molde obrigatório.
- **Facilitar a condução:** em role-plays, perguntas recorrentes da professora ficam prontas; pistas e modelos graduais ficam para a produção da aluna. Remover etapas numeradas que apenas repetem o diálogo. Quando a tarefa pede mostrar uma foto, a ilustração deve mostrar essa ação de forma concreta (por exemplo, alguém mostrando a foto no celular).
- **História dos personagens:** ler `docs/characters/characters.md` antes de acrescentar dados. Atualizar fatos estabelecidos e fontes na mesma entrega; idades/profissões/hobbies ausentes ficam a definir. Separar fato, atividade pontual, exemplo, hipótese e homônimo. Um retrato reaproveitado num cenário não prova que duas pessoas com nomes diferentes são a mesma identidade.

Regra atual de compreensão substitui expressamente os trechos anteriores de páginas consecutivas; registrada em20/11/2026. Não implica publicar outros ambientes nem executar QA automático.

## Áudio, identidade e dispositivos — feedback38

- **Localização não é binding:** `file` em proveniência publicada é um caminho relativo POSIX do asset. Caminho local/original fica em outro campo de proveniência. O adaptador normaliza o sufixo de asset antes de resolver o glob; manter correspondência exata de ID/texto, sem voz do navegador ou busca permissiva por texto. Um bug de caminho não autoriza regenerar gravações válidas.
- **Alfabeto para brasileiras:** a dica visual pode usar um som aproximado em português (E→í, I→ái, A→êi). Identificá-la como apoio aproximado, sem prometer transcrição fonética exata. O áudio continua com o nome inglês da letra, e texto da dica não substitui o texto/ID do clipe. Soletração reconhecível pode ser uma fala contínua quando junções de clipes ficaram artificiais.
- **WhatsApp precisa de contexto mínimo:** contato com seu retrato canônico e uma mensagem curta pertinente antes do áudio. A foto no áudio deriva do mesmo contato, sem inventar outra pessoa. Preservar mensagens existentes válidas e transcrição na terceira escuta. Componentes genéricos recebem a copy da aula, sem fabricar uma mensagem universal sem contexto.
- **Toques são discretos:** notificação suave com pausas, em volume independente e menor que a fala. Limitar tanto o ganho do arquivo quanto o volume do player; manter parada ao atender/desligar/sair/ocultar. Não confundir SFX com voz ou gerar sons metálicos agressivos por padrão.
- **Dispositivos como contexto visual:** cena e monitor têm escala comparável. A moldura pode ter barra de janela, horário e taskbar discretos, nativos e sem simular salvamento ou ações de sistema reais. Perguntas de uma ligação ficam dentro do telefone no padrão dos balões do próprio aparelho; apoios externos são um slot separado.
- **Quem pergunta fica explícito:** título e instrução indicam a vez da aluna. Ao falar com a professora real, usar nome/foto da sessão autenticada enviados pelo produto; nunca atribuir uma personagem fictícia ou a professora agendada como se fosse a pessoa logada. Perfil só em memória por bridge de origem/frame/revisão/material verificados; fora do portal usar Your teacher.
- **Um subtítulo funcional:** integrar contexto e ação numa única frase, sem um segundo texto cinza que repita o contexto. Balões curtos de vocabulário crescem com palavra+exemplo, sem rolagem interna ou altura fixa que comprima uma ou duas linhas.

## Leitura, identidade e fonte da resposta — feedback39

- A barra horizontal do deck já comunica progresso. Ocultar a aparência das barras nativas na superfície dos materiais, sem remover overflow funcional, teclado, gestos, navegação por páginas ou acesso a conteúdo realmente alto. Não alterar estilos globais de outros produtos nem o popup de Notes por esse motivo.
- Usar o Avatar nomeado da UI Library para foto+nome, com contraste de texto principal, peso semibold e espaçamento próprio. Nome não é legenda secundária cinza colada na imagem; densidade compacta não elimina identificação. Posição abaixo ou ao lado é uma variação do mesmo dono, sem CSS copiado por aula.
- Uma tarefa factual precisa mostrar de onde vem a resposta. Nome, relação, profissão e origem relevantes ficam visíveis na imagem ou em fatos junto dela. Instrução explicita quem a aluna representa e o que deve produzir. Modelo opcional usa exatamente esses fatos, sem introduzir informação nova.
- Evitar jogos baseados em uma escolha secreta ou regra que a tela não explica. Uma lacuna de informação só faz sentido quando papéis, objetivo e informação disponível de cada participante estão claros. Para A1, preferir apresentação baseada em dados visíveis a um jogo de adivinhação mal contextualizado. Em perguntas pessoais, declarar que a resposta vem da vida da aluna, sem fingir um gabarito único.

## Tema, dados e gramática — feedback40

- **Capa é uma síntese própria da aula:** tema, personagens participantes e ambiente relevante, com leitura em miniatura e margens seguras. Gerar do zero por texto no estilo vigente, sem reaproveitar o bitmap de um exercício como capa. Quando não houver ambiente útil, preferir fundo sólido limpo. Não acrescentar personagens ou fatos biográficos só para preencher a composição.
- **Referências visuais concretas:** se a mensagem diz “look at this photo”, fornecer uma foto coerente como anexo na conversa. Texto alternativo descreve a imagem de modo útil, sem substituir a informação que o áudio trabalha.
- **Seleções estáveis:** colocar a ação antes da ficha de dados. Registros equivalentes mantêm a mesma quantidade de informações e espaço para o modelo, sem inventar um dado desconhecido para completar uma linha. Escolher fatos já confirmados; três linhas podem combinar nome, relação, profissão ou origem conforme o que se sabe.
- **Uma gramática por objetivo:** explicar significado, forma e contraste com exemplos do contexto. A página de explicação não contém múltipla escolha, lacunas avaliadas ou perguntas intercaladas sob a tabela; a prática fica em página própria. Não anexar uma contração ou pergunta solta que não seja ensinada nessa página. Para possessivos: my/your vêm antes de um nome; a pessoa de referência determina qual usar.
- **Pronúncia explícita quando necessário:** um respelling ambíguo não é garantia de um fonema. Ao corrigir letras confundidas, usar o recurso de pronúncia documentado do modelo compatível e registrar o input e a versão reais; A /eɪ/, I /aɪ/ e E /iː/ são sons diferentes. Dicas PT-BR são aproximações legíveis como W→dábliu, sem espaços indevidos. Não regenerar mídia válida por um problema apenas visual.
- **Monitor não corta a interface:** barras e moldura são componentes nativos, com tokens e contraste próprio; impedir compressão do rodapé e deixar os campos determinarem a altura mínima. Hora/data ilustrativas ficam visíveis no chrome. Nome da professora em interlocução usa o primeiro nome da identidade autenticada, mantendo foto e contrato de segurança.

## Sons de resposta — feedback41

- Sons de acerto/erro são breves, suaves e distintos, sempre complementares às cores/ícones. A escolha musical não é promessa de estimular um mecanismo cerebral específico nem de melhorar retenção por si só; ver o estudo em docs/epics/choice-feedback41/sound-study.md.
- Usar feedbackOutcome nos componentes canônicos e fornecer o resultado já conhecido pelo consumidor. Tocar somente no clique da alternativa avaliada; nunca em hover, montagem, revelação de modelo, navegação ou preferência pessoal. Exploração de pronúncia sem alvo escolhido permanece sem gabarito sonoro.
- Um controle de som acessível no deck permite silenciar apenas esses sinais, preservando as gravações. Evitar alarmes, ruídos ásperos, comemorações longas, filas de áudio e volume maior em erros sucessivos. Usar uma única engine local sem atraso de download; indisponibilidade do som não impede responder.

## Clareza de referência e ajuda — feedback42

- **Ajuda progressiva:** quando uma ficha já mostra os fatos, colocar a instrução antes dela e oferecer um único botão Hint → Answer → Hide abaixo da instrução. A dica orienta a estrutura; a resposta usa somente os fatos visíveis. Usar RevealCard.guidance, reservar altura e voltar ao estado inicial ao escolher outra pessoa. As fichas equivalentes mantêm três informações confirmadas.
- **Tempo com apoio visual:** apresentar os dias numa grade semanal de calendário; o clique ouve o nome do dia. Para períodos do dia, mostrar cenas distintas de morning, afternoon e evening. Não misturar números aleatórios com esses períodos. At/on/in continua uma explicação própria, sem quiz na mesma página.
- **Moldura reutilizável:** ExercisePanel variant="monitor" aceita conteúdo livre; workstation mantém cena e formulário. Data/hora ilustrativas ficam juntas na barra superior. A barra inferior só existe quando o consumidor fornece appLabel; não simular ações de sistema.
- **Soletração após falha recorrente:** confirmar ID, texto e hash do arquivo realmente servido antes de alterar mídia. Não repetir geração contínua que já introduziu sons não solicitados. Quando as letras isoladas atuais são válidas, compor a sequência deterministicamente com os clipes completos e pausas breves, sem cortar fonemas. Registrar fontes, hashes, frames e request-ids verdadeiros; derivados não recebem request-id de síntese fictício. ASR é indício auxiliar, não aprovação perceptiva nem prova de cada fonema.
- **Continuidade visual:** parentesco não significa rostos idênticos. Usar características familiares e um corte claramente diferente conforme o pedido, acrescentando identidade e composição ao prompt canônico literal, sem reescrever o estilo. Cenas de exemplo não estabelecem nova rotina ou biografia.

## Uma tarefa legível por página — feedback43 B1.01

- Não anexar Now you ou outra tarefa pessoal ao rodapé de múltipla escolha, diálogo com compreensão, explicação de gramática ou escuta com perguntas. Transferência pessoal tem página própria; instruções docentes adicionais ficam nas Notes, sem competir com a atividade atual.
- Vocabulário usa o layout e os labels do VocabularyGrid canônico. Não sobrescrever a posição/cor do caption por aula nem converter as cenas em imagens com altura natural ilimitada. O estado revelado e o estado Show all fazem parte da composição planejada.
- Contrastes de pronúncia precisam representar uma dificuldade de escuta útil. Não usar a diferença óbvia entre uma palavra e uma frase mais longa como exercício só para preencher a sequência. Substituir por uma decisão comunicativa: pedir informação ainda desconhecida ou escolher a formulação adequada à mensagem.
- Explicar a diferença entre atividade e resultado com uma situação concreta e dois focos visíveis. Não afirmar que o contínuo significa sempre atividade inacabada; pode descrever algo que acabou de parar. Ao avaliar uma escolha contextual, uma alternativa pode ser gramatical e ainda não responder ao objetivo solicitado.
- Em Right or wrong, mostrar os exemplos juntos em linhas compactas, com escolhas por sentença e uma explicação aberta por vez. O gabarito se refere ao contexto declarado; a correção não vira outra tarefa ou banner Try again. Preservar as tentativas por item. A revisão45 substitui a paginação de uma única sentença adotada na43.
- O role-play começa com contexto visual e fatos suficientes para responder. Usar turnos guiados e ajudas opcionais da UI Library, sem formulário de resumo e checklist concorrentes. Quando a tarefa requer troca de papéis, os controles e a instrução de cada etapa ficam no cabeçalho (feedback45). Fatos inventados para uma simulação são exemplos temporários, não biografia canônica.
- Celulares resolvem a cor da identidade pela própria superfície via Avatar.textTone="inherit", sem herdar branco do tema externo sobre cabeçalho claro. O tamanho cresce com a altura disponível; a transcrição longa continua dentro da conversa nativa.

## Revisão por nível e informação disponível — feedback44 B2.01/C1.01

- Rever a sequência inteira, não só o CSS citado. Identificar a tarefa, a fonte da resposta, o estado aberto e a função de cada página; preservar IDs e mídia válidos. Linguagem simples de instrução não significa reduzir a exigência cognitiva de B2/C1.
- Não copiar o mesmo tipo de exercício para todos os níveis. Uma diferença óbvia entre palavra e frase não justifica pronunciation; comparar a intenção de duas versões das mesmas palavras pode ser útil no C1. Sem escuta validada, não atribuir automaticamente soft/harsh nem tratar entonação como gabarito universal.
- Alternativas avançadas devem ser plausíveis e exigir uma decisão sobre evidência, intenção ou restrição do contexto. Evitar distractors de outro assunto ou elogio tão vago que apague a mensagem. Pedir uma informação ainda não dada, não repetir uma duração que o interlocutor acabou de informar.
- Em feedback interpessoal, autoridade, urgência e relação afetam o que cabe dizer. Avaliar Works here / Needs changing dentro de uma situação explícita; não chamar toda frase direta de erro gramatical. Tend to requer indício de padrão recorrente, não apenas uma apresentação isolada. Um pedido mais suave continua específico e negociável.
- Paginar referências densas dentro da atividade com ExercisePanel.navigation, mantendo tentativas/revelações no consumidor. Navegação não é outra tarefa no rodapé. Explicações de gramática ficam visíveis, sem quiz misturado; exemplos avançados podem ser organizados por função comunicativa.
- Fatos descritivos longos usam KeyValueList.layout="stacked", sem forçar valor extenso numa linha. Guias de cenário usam a mesma composição de biblioteca em B1/B2/C1, com imagem, fatos e seis turnos; resumos editáveis, checklists e troca de papéis não são requisitos da apresentação.
- Se contexto e resposta mostram a mesma expressão, a revelação vira redundante. Ocultar o trecho-alvo no contexto e revelar um modelo possível, preservando áudio correspondente ao texto exato. Formas irregulares pertencem ao exemplo: lend é o label; lent aparece no contexto passado.
- Conferir coerência de cronologia e fontes: mensagem anterior ao áudio, email versus convite, fato versus inferência. Quadros de role-play continuam simulações, sem acrescentar parentescos, emprego ou hábitos à biografia dos personagens.

## Sequência, contexto e troca de papéis — feedback45 B1.01

- O contador sobre a imagem pertence à sequência de perguntas com imagem, não à posição da página no plano. Um diálogo sem imagem não recebe um badge sobre o retrato nem entra no denominador dessa sequência.
- Em múltipla escolha, o título traz a fala ou situação que dá sentido às alternativas; o subtítulo pede a decisão. Não deixar esse contexto solto entre a imagem e as opções. Usar a mesma coluna centralizada do warm-up; limitar a altura de uma ilustração de apoio quando o contexto no cabeçalho for maior.
- O cabeçalho de uma conversa guiada explica quem pergunta, quem responde e o que acontece ao trocar papéis. Título e subtítulo acompanham a etapa atual. Controles de troca e apoio ficam à direita no slot tools, sem rótulos de papéis e instruções duplicadas no corpo.
- Revisões curtas mostram várias sentenças de uma vez, com Right/Wrong por linha. A resposta mantém seu estado e apenas a explicação selecionada se expande. Paginação é para referência realmente densa, não para esconder todos os exemplos por padrão. Seletores de dias ou cenários ficam centralizados acima dos fatos correspondentes.

## Participantes reais e modelo — feedback46

- O papel da aluna usa o mesmo diálogo e Avatar da UI Library. Marcar suas falas como participant=learner e fornecer learnerIdentity por prop. O material pede o contexto uma vez; não faz consulta de aluna por balão nem duplica o componente You em cada aula.
- Exibir foto e primeiro nome apenas quando o portal identificar uma participante única da aula da professora autenticada e houver foto utilizável. Sem foto, com erro de imagem, aula desconhecida/ambígua, grupo ou sessão/contexto alterado, manter You. Não mostrar nome sozinho nesse fallback.
- A origem é a aula explicitamente aberta no portal ou a única ocorrência no horário atual. Contexto explícito inválido não vira outra aula por aproximação. Considerar recorrências e cancelamentos; o contexto expira na troca/fim da aula e não vai para URL, armazenamento ou logs.
- A identidade real não substitui personagens dos diálogos-modelo. Nome/foto de quem participa são dados temporários; não acrescentam fatos ao documento de personagens. Em perguntas pessoais, o olho mostra um modelo de linguagem, não um gabarito pessoal inventado.

## Composição de apresentações pessoais — feedback47

- Conversas de apresentação ficam numa coluna centralizada, com professora e aluna em lados opostos. Separar visualmente cada pergunta/resposta por espaçamento entre as trocas; não adicionar painéis decorativos nem formulários para uma tarefa oral.
- Lâmpada e olho junto à resposta oferecem dica e modelo de linguagem. Uma ajuda por vez, com botão contextual à pergunta, estado pressionado e texto oculto inacessível. Reservar espaço para cue/dica/modelo evita deslocamentos ao abrir a ajuda.
- Usar presentation=paired e guidance.placement=line do LearningDialogue, mantendo os controles globais como padrão nas outras composições. A identidade é o Avatar compartilhado e continua a seguir o contexto de professora/aluna e o fallback You já definidos.

## Um visual de balão e revelação sequencial — feedback48

- Apresentações e conversações guiadas usam o mesmo balão canônico do LearningDialogue: superfície, borda interna, raios, contraste e tipografia compartilhados. Regular/compact ajustam densidade para a quantidade de falas; paired apenas separa as trocas, sem criar outro visual por aula.
- Na apresentação pessoal, uma única lâmpada e um único olho ficam centralizados abaixo da conversa. Cada clique libera a próxima dica ou modelo na ordem do conteúdo e mantém as anteriores. Depois da última, o mesmo controle esconde sua camada de apoio. Modelos já abertos têm precedência; a lâmpada pula respostas já modeladas e fica indisponível se todas exibem modelo.
- Usar sequentialGuidance, com estado no consumidor. Não duplicar os ícones por resposta nesse padrão. Rótulos acessíveis/tooltip informam próxima posição e ação; controles progressivos são comandos, sem aria-pressed de toggle. Reservar espaço para as três camadas e manter as identidades reais separadas dos modelos de linguagem.

## Explorar antes de conferir e acompanhar a escuta — feedback50

- Uma cena de nomeação começa com a tentativa oral de todos os alvos, sem resposta visível. O título e a instrução dizem para nomear primeiro e clicar para conferir. Não acrescentar uma segunda tarefa lateral nem limitar arbitrariamente a duas palavras. Centralizar a cena completa com imageSizing="presentation", preservando proporções e coordenadas dos pontos.
- O player do título e os balões compartilham uma única instância de reprodução. Vincular o playingId ao ID real da fala gravada, sem confundir posição do array com ID. Marcar somente a fala efetivamente em reprodução; pausa, término, erro, troca de modo e saída da página removem o destaque.
- Unificar o visual dos balões não pode eliminar estados: fala ativa, tradução, lacuna oculta/revelada e conclusão continuam independentes. Clicar numa lacuna não alterna a tradução do balão; revelar ou traduzir texto não inicia áudio sem ação explícita do consumidor.

## Progressão de conversa sem sobrecarga — feedback51

- Se modelo, compreensão e modos de prática competirem na mesma tela, distribuir a progressão em páginas próprias. Nesta experimental: diálogo-modelo sem questions → prática pessoal guiada → conversa com assunto novo. Não manter botões de modo, navegação de turno e explicações redundantes nas três páginas.
- A prática pessoal mostra as três trocas completas de uma vez, com seis balões. Usar as identidades reais já fornecidas por prop/contexto, e não anunciar que a professora “é Kim”. Preferências pessoais permanecem perguntas, sem atribuir à professora gostos fictícios. Uma lâmpada e um olho abaixo liberam dicas/modelos em ordem pelo sequentialGuidance canônico.
- Na transferência, quem aprende começa a conversa. Balões mais amplos podem mostrar começos abertos como “Do you like …?”, com o assunto escolhido na hora e espaço para responder/perguntar de volta. Usar bubbleWidth="fill", sem criar outro estilo de balão, painel de suporte ou novo roteiro fechado.
