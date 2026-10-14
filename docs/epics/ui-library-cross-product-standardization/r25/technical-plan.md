# Plano técnico R25

Baselines: UI 842b891381746d236c3cd5660f8f19fe72ebc3ec; Student 38856359aac5f045a1260b3f6ad23bcef61ed751; Teacher 719a154ceb87fad4d4c1d1adcc4f7fea2cfb885c.

UI: src/molecules/QuizSessionHeader/{index.tsx,styles.ts,types.ts}, teste e stories próprios; root exports, README, API snapshot e component-manifest. Compor Pressable público e PracticeProgressBar público; recipe/tokens independentes de theme/CSS vars do consumidor. Não importar styles privados de outra família.

Student: src/components/features/portal/index.tsx QuizExerciseShell; remover QuizSessionHeader/QuizBackButton/QuizProgressArea de styles.ts. Teacher: QuizPreviewSession e os mesmos três owners de StudentLearningPreview/styles.ts; retirar ChevronLeft somente se sem outro uso. ProgressTrack/Fill usados em outros lugares continuam locais.

Custo-benefício: ~70 linhas CSS + ~17 JSX repetidas por produto contra um owner pequeno, sem wrappers/props de compatibilidade. Completion panel exige separar composição de métricas/persistência/animação; não juntar com o header. Outros projetos não recebem imports ociosos. Cupom remoto indisponível na consulta, sem necessidade de escrita para este recorte.

Checks locais: um comando focado de unit+manifest; um contrato de build/API necessário para preparar o candidato. Stories/package/browser/SSR cobertos no tooling da CI e evidências do contrato. Não executar full-suite/validate:ui local. Nenhum aumento automático dos budgets: preservar limite library143000/30000; adicionar nova entrada somente se necessária e definida antes de medir.

Matriz: UI default/long/completed/focused, 390/640/641/1440 normal e reduced; produtos quiz/personalized, pergunta/foco do retorno/correta/incorreta/questão seguinte/resumo, salvamento pending/erro Student, título longo. Baseline antes de alterar callsites. Screenshots fullPage originais, mesma fixture/data/font/theme; rede externa bloqueada; sem dados reais. Publicar imagens em SHA imutável.

Release proposta 1.20.0 aditiva; candidato em .github/evidence/r25-quiz-header/candidate. Produto draft bloqueado para merge até oficial+checksum/filemap e aprovação humana de cada PR. CI/deploy assíncronos sem polling após push.

Discovery adicional: Teacher QuizPreviewSessionSkeleton reutiliza os mesmos três wrappers, com name=activity.title, counter="Carregando", progress=0.08 e onBack=onClose. Adotar também esse cabeçalho com o contrato existente, preservando aria-busy/frame e placeholders. Acrescentar pares loading/foco/back em ambas as categorias; não acrescentar prop loading.
