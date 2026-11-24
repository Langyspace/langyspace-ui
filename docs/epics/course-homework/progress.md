# Progresso — execução85

Implementação e conteúdo preparados; ativação em staging pendente de acesso e qualificação de publicação. Nenhuma atividade nova foi escrita. Produção82 permanece intacta

## Pronto

- UI: PracticePair público usa MobileFrame existente, densidade compacta opt-in, grade 1:2 e seleção acessível em tela estreita. Identidade de Shadowing usa Avatar existente. QuizQuestion recebe contexto, FlashcardImagePanel recebe imagem/região
- Sessenta encerramentos preparados: 29 Flashcards com 195 cards, 31 Quizzes com 186 questões, 60 Shadowings com 555 turnos. Duas atividades por aula, sem alterar experimentais ou extras
- 42 conjuntos US e 18 de outras variedades: GB 5, IE 4, AU 4, IN 3, ZA 2. Duração falada: US 1498.745s e outras 573.208s; 70/30 é a proporção de atividades, não de segundos
- 752 vínculos de áudio anterior preservados (385 de Shadowing e 367 de Flashcards); 193 chamadas TTS novas (170 S e 23 F). Os 23 F incluem dois pares de input idêntico gerados separadamente; recibos e bytes preservados, sem fingir reuso. O gerador agora reconhece fingerprints já prontos entre IDs
- Dez retratos novos com o prefixo v1.8 literal, quatro anteriores preservados. Nenhuma mudança no prompt canônico ou em LIMA/A.A de A102
- Student: C1, decks dinâmicos, personagem por frase, contexto de Quiz, links diretos pelos serviços autenticados e limpeza das queries ao sair. Resumos de decks não iniciam sessão antes de chegar o conteúdo real dos cards. Repetições 3, velocidade e progresso existentes preservados
- Backend: C1 só no contrato das atividades, preservando os níveis atuais de perfis/matrícula; campos opcionais; speaker IDs e fotos em prefixo restrito, áudio de curso assinado sem TTS padrão, contexto e regiões de imagem
- Publicador staging idempotente preparado, exige contratos vivos verificados, hashes de mídia, IDs próprios, readback e ambos os destinos antes de habilitar links por ambiente. Sem fallback de escrita direta no Firestore

## Evidências e limites

- Dois testes UI, 28 testes de validação/áudio backend e 29 testes de mapeamento Student passaram. Corpus 120 validado. Typechecks UI/Student e lint TypeScript dos dois codebases backend passaram
- Build da biblioteca/API/candidato4.5.0 preparado; build Student com configuração staging passou. O ambiente offline omitiu dependências nativas: links locais para os mesmos binários já existentes corrigiram a execução; o lockfile preserva todas as plataformas anteriores
- Quatro pilotos renderizados em 1280×720 e 390×844, frente/verso e exemplo de Quiz. Todos cabem no viewport aferido sem largura excedente. Componentes reais Student capturados com fixture, incluindo reprodução de áudio e avanço para 1/3 escutas; isso não prova login ou progresso em backend
- Quizzes são conjuntos contextuais autorados/adaptados; não alegar que os 16 candidatos antigos foram reutilizados integralmente. Atividades e históricos anteriores não foram sobrescritos
- Pausa pedagógica e tempos são metadados técnicos, sem alegação de revisão perceptiva de todos os clipes. Revisão humana visual e de sotaque/pronúncia pendente

## Bloqueio externo e retomada

Storage de staging retorna 403 storage.objects.get nas duas identidades locais disponíveis. A identidade de deploy não permite impersonação (iam.serviceAccounts.getAccessToken). Não houve upload ou escrita de atividades; não alterar IAM por conta própria e não reaproveitar a autorização Hosting82, que está presa à fonte82

Após acesso e backend qualificado: publicar oito tarefas dos pilotos com scripts/course-practice/publish-staging.mjs --project=langyspace-staging --only=a1-05,a1-08,a2-01,c1-08 --ui-root=<UI>; verificar Student autenticado; ampliar ao mapa 120 sem --only; usar scripts/enable-practice-destinations.mjs da UI com o recibo real; reconstruir neutral e adotar/publicar pelo coordenador. Um ambiente não habilita links do outro. Não gerar mídia de novo

A matriz ampliada aferiu 298 estados de encerramento em duas larguras. O único excesso foi 12px na tradução de C1.12 em 390×844. Padding/gap da variação compacta de MobileFrame foram reduzidos com os mesmos tokens; a repetição desse caso resultou em 844px de conteúdo, sem excesso. As propriedades padrão do frame regular foram preservadas. Metadados de todos os atlas usados nos cards conferem com as proporções declaradas

Revisão86 substitui os31 quizzes de interpretação por186 itens de gramática. Cada alvo aponta para uma linha da tabela realmente renderizada na aula. A regra, correção e justificativa aparecem após a tentativa. Ver ../quiz-grammar-revision/plan86.md. Os89 outros objetos de atividade e todas as mídias permanecem iguais. A revisão exige nova avaliação humana dos quizzes; não é aprovação da revisão85

Visual gate review: pending human
