# Tema claro para materiais

Adicionar um controle de sol/lua imediatamente à esquerda do som no header compartilhado. O tema atual continua padrão em cada apresentação; a escolha dura durante a apresentação e é preservada ao navegar entre páginas. Usar os tokens claros existentes da UI Library, sem reescrever cores nem trocar imagens.

A UI Library oferece o controle opcional e controlado no SlideDeck. O adaptador comum de materiais possui o estado e o ThemeProvider; wrappers aninhados herdam a mesma escolha. Cobrir também o LessonShell das experimentais. Sem localStorage, nova preferência do sistema, reinício de exercícios ou modificação no áudio/scroll.

Verificação proporcional: teste focado de alternância/ordem/navegação/estado, TypeScript e contrato de API atualizado para a prop opcional. Comparação local escuro/claro e viewport compacto, usando exemplos existentes de vocabulário, conversa e homework. Sem deploy implícito nesta tarefa.


## Entrega e validação

- O controle opcional `SlideDeck.themeToggle` usa o mesmo IconButton do som, com título da próxima ação e estado aria-pressed. Nada aparece no SlideDeck genérico quando a prop não é fornecida
- O provider compartilhado inicia em dark, aplica o tema claro canônico e mantém o estado em wrappers aninhados; MaterialSlideDeck e LessonShell consomem a mesma escolha
- Três casos dirigidos passaram: herança/ordem/estado da atividade e independência do som; shell experimental e default de uma nova apresentação; opt-in genérico e SSR. TypeScript passou; declarações recompiladas e API conferida (somente a prop opcional e declarações do SlideDeck, sem novos exports)
- Comparação local: homework claro em 829×775; diálogo dark/light em 1280×720. A dica permaneceu aberta e a ida/volta de página manteve o tema. O autocentramento do driver ao clicar em uma dica deslocou o viewport durante a coleta; realinhei pela navegação normal e registrei a troca de tema com clique no header, sem esse deslocamento. Não alterei os hooks de navegação
- As duas alterações locais preexistentes em A101.stories e no README107 foram preservadas fora da entrega
- Prévia e PR de revisão. Sem build de produção, deploy, registry ou merge nesta tarefa
