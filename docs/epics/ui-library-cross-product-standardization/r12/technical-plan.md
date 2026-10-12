# Plano técnico R12

Antes: Student portal/index.tsx PracticeCardSkeleton e styles.ts QuizCardSkeletonBody; Teacher PracticePreviewCardSkeleton e styles.ts ActivityCardSkeletonBody. Título/meta/progresso têm dimensões idênticas; cor/motion duplicados. Student meta align center vs Teacher stretch e tipografia sem texto são diferenças sem efeito geométrico neste placeholder; receita única centrada.

Depois: src/molecules/PracticeCardSkeletonBody, exports/types, manifest, stories, teste semântico/ref e smoke browser/SSR. Produtos substituem somente o corpo e removem o styled exclusivo sem uso. SkeletonLine, skeletonSurface e skeletons maiores continuam locais: também servem outras anatomias. Portanto o benefício imediato é remover JSX de quatro barras e seletores duplicados em dois lugares, não eliminar todos os estilos skeleton.

Custo-benefício: piloto pequeno e compatível, benefício de manutenção médio e redução modesta; evitar uma API genérica de geometria ou um framework de páginas. Há custo aditivo no bundle UI. Orçamento proposto ANTES da implementação: aggregate até 106500 raw/22550 gzip, novo entry skeletons até 5000/1700. Limites existentes por família, cobertura e auditorias permanecem iguais. Medir deltas contra 1.10.0 (104515 raw/22072 gzip) e publicar resultados; não ampliar silenciosamente depois de falha.

Ordem: discovery/plano → UI → Before produtos → candidato imutável → adoções → After/validação → três drafts → review humana → release oficial → staging. CI executa full gates; local somente teste focado/API e medição de pacote necessária. R10 deve integrar antes de criar o branch Teacher. Preservar trabalho paralelo e .local financeiro.

Discovery geométrico: o seletor antigo :first-child aplica margem de 2px também à primeira barra de metadados, reservando linha de 14px e corpo de 88px. Receita usa linha explícita de 14px e primeira barra no topo, preservando caixas Student. Teacher centraliza a segunda barra por 1px como concessão pequena; não muda altura/padding/gap/cards. Cor/motion normais mantidos; reduced motion fica estático. Registrar essa diferença nas comparações, sem tolerância ampla.
