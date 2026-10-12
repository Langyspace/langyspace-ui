# Requisitos R10

- FilterToolbar é um grupo nomeado com children, props nativas de div e ref.
- Exigir aria-label ou aria-labelledby; manter controles e ordem DOM do consumidor.
- Uma recipe: flex-wrap, align-items center, gap 12px; em até 900px, stretch e gap 8px.
- Min-width 0, sem margens externas, borda, background ou padding; superfícies são composição.
- Sem layout, surface, density, size, breakpoint ou flags de produto na API.
- Não aplicar larguras a filhos, alterar labels, selecionar filtros ou disparar rede.
- Teacher conserva margens 20px/16px num adapter pequeno e nomeia os grupos nas duas páginas.
- Admin conserva grid em 1100px, conteúdo, selects e queries; a sombra sutil de Card é a única
  concessão pretendida. FilterBar dos demais fluxos continua local.
- Capturas com fixture segura, mesmo viewport/dados/fonte/clock, rede externa bloqueada e foco
  visível. Cobrir dados, vazio, loading, erro, filtros sem resultados e ação/foco pertinentes.
- Validar 390/900/901/1440 e os limites 960/961 e 1100/1101 de Admin. PRs usam apenas Evidências e
  tabela Antes/Depois; stories novas têm indicação explícita de ausência de versão anterior.
- Nenhum merge/release do novo lote antes do aceite humano próprio.
