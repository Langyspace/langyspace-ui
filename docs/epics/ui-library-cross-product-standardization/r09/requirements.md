# Requisitos R09

- Uma superfície com background branco, borda fina, radius 14px, sombra discreta e padding 16px, em todos os breakpoints.
- Props HTML de div e children; nenhuma matriz de variantes. Não gerenciar navegação, dados, erros, rede ou estado.
- Preservar conteúdo, ordem, ações, foco e labels; textos longos podem quebrar, sem cortar valores.
- Pilotos: dois painéis de Início/Admin e o Card de Hoje/Teacher. Outras superfícies ficam locais.
- Antes/depois nas mesmas fixtures/larguras 390, 900, 901 e 1440. Incluir vazio/dados/longos e estados de loading/erro realmente renderizados pelos pilotos.
- Concessões propostas: Admin 18px→16px de padding; Teacher 20px→16px; pequenas diferenças de borda/sombra. Não considerar as dimensões de Surface isoladamente: .card-pad no Admin sobrepõe padding md.
- Se conteúdo ou layout perder legibilidade, manter o painel local; não acrescentar props para reproduzir receitas antigas.
