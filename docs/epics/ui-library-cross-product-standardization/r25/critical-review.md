# Revisão crítica do plano R25

PM: dois consumidores atuais comprovados; não inserir Admin/Cupom/Site por obrigação. Ganho pequeno mas mensurável, sem mudar layout externo.
TL: cinco props semânticas, UI não conhece activity/quiz/provider; reusa os componentes públicos sem estilos privados. Nenhuma nova flag para preservar a antiga cor do contador.
SWE: inventariar o export no manifest e atualizar snapshot; usar PNGs novos, nunca sobrescrever hardlinks antigos. Remover apenas estilos comprovadamente sem outros consumidores.
QA: pares full-route com foco via teclado, comprimentos extremos e os dois lados de 640px; outcome/pending/error mantidos. Conferir callback back/refazer e ausência de escrita no preview. Pequenas concessões declaradas; nenhum merge sem revisão atual.

Plano apto à execução do S02. Revisão interna técnica não substitui aceite visual humano.

Revisão da descoberta adicional: loading Teacher usa cinco props já existentes; migrá-lo evita deixar CSS órfão ou duplicado e mantém a apresentação da sessão consistente. Capturar loading nas duas categorias antes de publicar.
