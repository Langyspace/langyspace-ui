# Migração completa da apresentação reutilizável

A estratégia passa de rodadas pequenas com parada a cada review para execução contínua de todas as famílias elegíveis do estado atual dos cinco produtos. A unidade de conclusão é o inventário atual inteiro, não um componente ou número de linhas removidas. Impacto direct.

UI primeiro, adoções depois, com componentes React legíveis e composição explícita como a família Auth revisada. Não converter JSX em objetos de configuração, amontoar flags nem mover páginas/controllers para a biblioteca. Componentes podem ser grandes quando têm contrato coeso. Reuso dentro de um produto também é evidência útil; não exigir dois produtos artificialmente.

O escopo inclui os 38 grupos históricos, os componentes ativos do inventário atualizado e a apresentação reutilizável embutida em páginas. Duplicações exatas de estilos são pistas, não novos componentes automáticos. Cada família termina como migrada, já compartilhada ou local por responsabilidade/experiência concreta. Uma exclusão precisa apontar o fonte e explicar o custo; não vale adiar genericamente por tamanho ou para encerrar cedo.

A jornada final mantém conteúdo, navegação, estado, responsividade e ações de cada portal. As concessões pequenas ficam explícitas. Rotas, serviços, SDKs, regras de negócio, áudio/persistência e SEO permanecem nos produtos. Código sem consumidor ativo é classificado separadamente e não infla o resultado.

O pedido atual autoriza implementação contínua e preparação de todos os PRs. Não é aprovação visual de revisões ainda inexistentes: preparar tudo antes da parada final para review, preservando a revisão humana por PR e as tabelas Antes/Depois. Modo manual por cobrança permanece. Sem autoaprovação, merge ou deploy durante a preparação.

Concluído quando não há candidato elegível pendente, as adoções de todos os produtos foram verificadas, os contratos são legíveis, a evidência cobre a revisão completa e os PRs estão preparados para revisão final. Preparar PRs não equivale a publicação em produção.

Estado final em 2026-10-15: inventário elegível concluído, revisões atuais aprovadas, UI 1.21.1 oficial e cinco produtos integrados/publicados, com staging e produção conferidos. [Entrega e limites da validação](entrega.md).
