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
