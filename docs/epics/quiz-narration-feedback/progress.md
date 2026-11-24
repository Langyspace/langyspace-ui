# Progresso87

Implementados31 quizzes com186 explicações em português, em tom de conversa, e372 vínculos de narração: enunciado/contexto antes da escolha e frase correta depois.190 gravações únicas ElevenLabs/Sarah na configuração já usada, sem retry ou edição dos MP3s; quatro enunciados são reutilizados entre186 questões. A busca por texto/voz/provider/configuração exatos nas fontes consultadas não encontrou reuso externo.

O QuizQuestion canônico tem action opcional; sem action, preserva o markup anterior. O player oferece replay de enunciado e frase correta, distingue bloqueio de autoplay de arquivo inválido e limpa áudio/timers ao avançar/sair. O Enter no botão de áudio não avança a pergunta. Lacunas legadas mantêm a regra anterior; a correção após erro é da escolha de frases com completion preparado.

Checks:2 testes do componente/API e build do pacote passaram. Candidato R3 imutável adotado no Student, com SSR real e typecheck passados;30 testes de mapeamento passaram. Corpus186 e372 vínculos validado com texto/voz/MP3/hash, paridadeUI/Student,31 fontes reais de gramática,89 outras atividades e1025 mídias anteriores preservadas. Backend aceitou120 payloads. Publicador dry-run:120 atividades/1397 vínculos. Sem escrita remota.

Player real: três percursos completos A1.09/B1.01/C1.08 com4/6, reproduzindo MP3s reais. Bloqueio inicial de autoplay recuperado por clique, correção também no erro, replay por Enter sem avanço, cancelamento de correção ao passar rápido e no máximo uma fala ativa. Cinco níveis capturados em1280/390px. Encerramentos:72 estados com explicação aberta, sem excesso de altura/largura. Isso não prova login/progresso em backend nem revisão perceptiva de todas as gravações.

Próxima tarefa: concluir export/adoption e atualizar os PRs em rascunho para revisão humana. A publicação segue pendente do acesso/qualificação de staging registrado na85; a autorização82 não se aplica a esta fonte. Não habilitar destinos sem publicação/readback reais.

Visual gate review: pending human
