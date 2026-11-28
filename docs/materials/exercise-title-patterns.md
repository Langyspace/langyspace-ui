# Títulos que ajudam a reconhecer a tarefa

O título diz **o que fazer**. A repetição intencional da mesma expressão cria uma memória de reconhecimento para professora e aluna. O subtítulo concentra o assunto, os participantes, a fonte da resposta e os limites da tarefa. Não variar sinônimos entre aulas quando a dinâmica for a mesma.

Registro canônico: `stories/materials/shared/exerciseHeadings.json`. Composições manuais importam esse registro; planos e JSON de conteúdo usam seus textos literais. A UI Library continua responsável por título, subtítulo, larguras e tipografia. Não adivinhar a tarefa em tempo de renderização a partir de palavras do título antigo.

| Quando a aluna deve…                                    | Título                    |
| ------------------------------------------------------- | ------------------------- |
| Identificar palavras/expressões em vários cards         | Name the pictures         |
| Identificar itens numa cena com pontos clicáveis        | Name what you see         |
| Consultar/praticar letras                               | Say the letters           |
| Praticar números                                        | Say the numbers           |
| Interpretar os personagens e conversar em dupla         | Practise the conversation |
| Completar lacunas com as palavras do modelo             | Complete the conversation |
| Praticar uma troca apoiada sem respostas fixas          | Practise the conversation |
| Se apresentar                                           | Introduce yourself        |
| Conversar com informações pessoais reais                | Talk about yourself       |
| Apresentar uma terceira pessoa                          | Introduce someone         |
| Ouvir uma mensagem e responder perguntas de compreensão | Listen and answer         |
| Ouvir uma mensagem e formular uma resposta oral         | Listen and respond        |
| Aplicar o que mudou na mensagem recebida                | Respond to the message    |
| Ler um texto e responder perguntas sobre ele            | Read and answer           |
| Consultar fatos de uma situação                         | Read the situation        |
| Comparar significado, forma e exemplos de gramática     | Compare the examples      |
| Assistir a um trecho e responder suas perguntas         | Watch and answer          |
| Retomar a aula anterior                                 | Review the last lesson    |
| Conversar livremente sobre o tema no final              | Have a free conversation  |

## Variantes com finalidade diferente

- **Guided conversation padrão — correção165:** aluna e professora interpretam os personagens, conversam entre si, trocam os papéis e depois respondem às perguntas de compreensão. O modelo escrito e os áudios são apoios; a tarefa principal não é ler em voz alta, ouvir passivamente ou demonstrar apenas compreensão. Para Ana/Kim: “You are Ana and Teacher is Kim. Practise together, swap roles, then answer the questions”. Usar os nomes que realmente aparecem no diálogo; Anna/Ben não viram Ana/Kim. As variantes compartilhadas estão em `stories/materials/shared/guidedConversationInstructions.json`.
- Nas lacunas, completar oralmente durante a prática dos papéis. Pedir as perguntas de compreensão somente quando elas já fizerem parte daquela atividade. Não inventar perguntas na experimental A1/A2 para corrigir um subtítulo, nem transferir personagens fictícios para a conversa pessoal com Teacher/You.
- **Padronizar pelo objetivo, não pelo componente:** `questions`, `facts`, `choices`, `comparison` e IDs como `s91` não determinam a dinâmica. Conferir o que a aluna responde, os apoios disponíveis e a posição na sequência. “Talk about yourself” fica para informações pessoais reais; hotel, pedidos, agendamentos e sintomas recebem a ação pertinente. Uma ficha para consultar regras não vira debate de opinião. Se a instrução específica já estava clara, preservá-la.
- **Finalidade visual:** comparar apartamentos para escolher onde ficar pede “Choose where to stay”; comparar um bairro antes/depois para explicar mudanças pede “Describe what changed”. Olhar um gráfico para formular uma previsão pede “Make a cautious prediction”. Dizer se gosta de cada imagem pede “Say what you like”, sem obrigar escolher uma favorita ou justificar uma preferência.

- Múltipla escolha por imagem mantém o alvo no título, usando um padrão: **Choose how Tom feels** / **Choose how Ana feels**; **Choose where Ana is from** / **Choose where Jiwoo is from**. O subtítulo repete a instrução de olhar e escolher. Não esconder a pergunta numa frase genérica.
- Missões específicas preservam verbos reconhecíveis e a ação necessária: **Guess who**, **Give directions**, **Tell the story**, **Compare the pictures**, **Put the pictures in order**, **Plan…**, **Explain…**, **Ask…**. Reutilizar o título quando o objetivo também se repetir; não transformar tarefas diferentes em “Discuss” apenas porque usam o mesmo componente.
- Uma conversa com lacunas pessoais aceita informações reais. Não chamar essa dinâmica de exercício com gabarito único. Introdução própria e apresentação de outra pessoa são finalidades distintas.
- A capa continua identificando a aula. O encerramento continua sinalizando que a aula terminou e direcionando o dever ou a matrícula. Rótulos como Vocabulary, Questions e Guided conversation identificam a seção; não são novas tarefas nem precisam virar frases.

### Gramática — revisão169

O título nomeia a estrutura e a ação: **Use am, is and are**, **Build past simple statements and questions**, **Compare present perfect simple and continuous**. O registro genérico de comparação só se aplica quando houver um contraste real. A página não é obrigatória: frases de comunicação/registro sem uma explicação de forma ficam nos modelos e nas práticas. Ver a regra de gramática na guideline central.

## Revisão de uma alteração

Manter IDs, ordem, opções, gabaritos, perguntas, fatos, áudios, transcrições, mídias e destinos de dever intactos. Guardar o contexto útil no subtítulo, sem criar instruções soltas no corpo. Conferir o maior subtítulo na composição existente e uma página representativa de cada composição afetada; não reauditar todo o catálogo para uma troca de copy.
