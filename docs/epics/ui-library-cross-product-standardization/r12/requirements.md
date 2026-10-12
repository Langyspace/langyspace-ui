# Requisitos R12

- PracticeCardSkeletonBody recebe apenas atributos/ref nativos de div, sem children nem configuração visual. Decoração aria-hidden fixa, sem live region ou controles; nome/busy/ação pertencem ao contêiner local.
- Receita: flex 1, coluna, gap 8px e padding 16px; título 72% × 18px + margem 2px, metadados 92px e 76px × 12px, barra de progresso 100% × 6px; linha meta reserva 14px, body 88px; raio pill. Respeitar min-width nas barras e contenção estreita.
- Gradiente #fafaf9 / #f1f1ef / #fafaf9 0/48/100%, tamanho 200% × 100%, movimento 1.35s ease-in-out. Com prefers-reduced-motion: reduce, estático; concessão explícita de acessibilidade, sem alterar geometria.
- Manter cards e shells locais, inclusive reservas de espaço, regras de cold load/dados anteriores, teclados, abas e erros.
- Evidências antes/depois de todas as abas afetadas, larguras 390/900/901/1440, movimento normal/reduzido; mesma fixture sanitizada e fontes. Imagens originais públicas por SHA, PR apenas Evidências + tabela Antes/Depois.
- Candidate 1.11.0 somente drafts. Integrar produtos após novo aceite e artefato oficial idêntico ao candidato revisado.
