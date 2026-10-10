# UI Library — primeiro lote de apresentação auth

Execução autorizada pela product owner em 2026-10-10 após o discovery nos cinco produtos.

Preparar no UI os contratos de AuthTitle, AuthDescription e AuthAccent, equivalentes em Student e
Teacher. O primeiro piloto adota essas partes apenas em PhoneStep e TokenStep de /login nos dois
produtos. As demais etapas e famílias seguem os próximos lotes do plano; não são migrações aprovadas
por esta entrega visual. Custo visual pretendido V0: nenhuma concessão de layout.

A apresentação compartilhada pertence à biblioteca; páginas, copy, OTP, serviços, timers,
resend, navegação, erros, shell e campos permanecem nos produtos. Nenhuma publicação/tag, merge,
deploy direto ou alteração de dados reais será feita antes da revisão correspondente.

Impacto: direct, porque muda o owner de estilos de partes renderizadas. Cada PR aguarda revisão
humana de sua revisão atual. Biblioteca implementada primeiro; PRs de adoção dependem dela.
