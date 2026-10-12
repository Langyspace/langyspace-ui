# R10 — FilterToolbar compartilhado

Preparar primeiro na UI uma linha de filtros com wrapping, sem controlar busca, opções, resultados
ou requests. Teacher possui uma recipe duplicada de flex/gap/alinhamento em duas páginas; Admin
possui a mesma linha dentro de FilterBar, além de uma matriz de layout/superfície que permanece
local para outros usos. Não transportar essa matriz para a biblioteca.

Pilotos: Teacher /alunos e /materiais; Admin /mensagens, somente a linha externa. O grid interno
Admin em 1100px mantém sua composição, e a superfície usa Card por composição. Site/Cupom não
possuem piloto equivalente; cópia Student sem uso não justifica adoção.

Impacto direto: novo componente, acessibilidade do grupo de filtros e pequena concessão de sombra
em Admin. Teacher mantém geometria e espaçamento de seção. Sucesso: uma recipe responsiva, nenhuma
prop visual nova, filtros e foco iguais e PRs próprios com imagens completas.

Fora do escopo: demais FilterBar Admin, menus, filtros em coluna, mudanças de dados/permissões,
Chat, Calendar e migração de cópias mortas. Ganho inicial modesto; manter consumidores separados
quando os adapters custarem mais que a duplicação retirada.
