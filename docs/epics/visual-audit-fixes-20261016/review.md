# Revisão final

Escopo: cinco achados reproduzidos, sem redesign ou alteração de regras de negócio. O painel duplicado foi centralizado; APIs existentes foram preservadas, com adição de ShadowingPanel e seu tipo nativo. Não há flags por produto ou tema paralelo.

O Admin elimina estado derivado e o efeito que entrava em loop. A orquestração da aula continua no produto. A UI Library não recebe dependências de rota, Firebase ou regras de agendamento.

Concessões visuais: duas colunas em telas de 640–900 px e até 500 px de altura, tipografia compacta para palavras, ilustração capaz de encolher, leitura com rolagem e espaçamento menor no aviso de prévia. Retrato e desktop mantêm composição vertical.

Riscos residuais e limites estão em validation.md. Cada PR precisa de aceite da revisão atual; dependentes da UI ficam em draft até integração do pacote oficial.
