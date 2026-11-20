# Planejamento dos materiais Langy

Fonte central de regras de conteúdo e apresentação. Ler antes de criar ou replanejar uma aula.
Atualizada em20/11/2026 a partir dos feedbacks de A1.01, A2.01, A1.05 e A1.02. A revisão final de uso, áudio e visual pertence à dona do curso.

## Planejamento pedagógico

1. **Uma aula resolve uma situação de comunicação.** Definir a ação que a aluna conseguirá realizar, o nível e uma sequência de50minutos conduzida pela professora por compartilhamento de tela. Toda página tem um objetivo identificável e contribui para essa ação.
2. **Conversação guiada tem no mínimo seis falas.** Distribuir a participação entre as duas pessoas, normalmente três turnos para cada. Cada turno deve avançar a troca; não completar a contagem com falas vazias. A regra vale para diálogos completos e para fill in the blanks em planos novos ou diálogos sendo replanejados.
3. **Progressão oral:** compreensão → prática guiada → respostas pessoais → interação com mais autonomia. Diálogo completo, outro diálogo com lacunas e conversa pessoal têm funções distintas. Manter perguntas sobre o texto na página seguinte ao diálogo.
4. **Evitar repetição sem nova finalidade.** Depois de reconhecer uma imagem no vocabulary, usar o conteúdo para escolher, perguntar, comparar ou realizar uma tarefa. Pronúncia precisa resolver uma dificuldade perceptível naquele uso. Letras/números podem ser consulta, sem exigir memorizar uma lista inteira.
5. **Conteúdo e enunciados adequados ao nível.** Instruções curtas, naturais e em inglês. Pedir respostas completas e pequenas trocas com a professora, com pistas sob demanda. Não misturar ações diferentes em um enunciado extenso.

## Imagens e identidade

6. **Objetos isolados no vocabulário têm fundo transparente.** Frutas, vegetais e objetos ficam grandes, inteiros, centralizados e com margem segura, preservando a proporção. Gerar novos assets do zero por texto, com transparência solicitada no gerador e preservada no WebP. Não adicionar cenários, caixas, pratos, brilhos ou sombras externas sem função pedagógica.
7. **Ações podem precisar de contexto.** Usar apenas elementos de fundo necessários para compreender a ação. Não transformar uma cena útil em recorte sem contexto. Preservar o branco oficial das bandeiras. Letras e números são texto nativo, sem imagens ou SVG que imitem tipografia.
8. **Estilo Langy:** ilustração suave, levemente flat com volume, cores pastéis, leitura clara e pouco detalhe de fundo. Usar o prompt de estilo vigente por texto; reaproveitar mídia válida e retratos aprovados. Um canal alpha não é declaração de recorte visual perfeito: registrar limitações observadas para revisão humana.

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
- Diálogo e perguntas de compreensão ocupam páginas consecutivas. No modo de modelo dos experimentais, mantenha apenas a conversa; leve as perguntas para a página seguinte. A tradução aparece ao clicar na fala original, sem botão extra.
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
