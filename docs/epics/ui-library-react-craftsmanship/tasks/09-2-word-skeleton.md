# 09.2 — Skeleton de palavra

A adoção mostrou um segundo uso real do layout de palavra: o estado de carregamento. Student o compunha herdando FlashcardWord e três blocos; Teacher repetia o layout em div. O novo contrato Word gera sua anatomia, por isso manter esses filhos antigos seria incorreto.

Preparar FlashcardWordSkeleton na UI antes da adoção, com três linhas fixas nas dimensões já usadas (68%/2.25rem,1.875rem/0.1875rem,44%/0.875rem), ref/atributos nativos e aria-hidden. Compartilhar somente a receita privada de layout com Word; usar o Skeleton existente e seu reduced motion. O dono anuncia o carregamento, sem status por linha.

Correção após conferir o baseline e as capturas: os blocos do Student já estendiam o Skeleton compartilhado, com as mesmas cores usadas no Teacher; o cinza local#f6f5f1 pertence ao placeholder de imagem, que não foi alterado. Não houve concessão de cor nessa extração. Preservar tamanhos/gaps/contexto e mostrar o skeleton nas comparações. Esse padrão evita uma nova prop loading em Word e remove a anatomia duplicada nos dois produtos. Não mudar dados, pré-carregamento de imagens ou estado de prontidão.
