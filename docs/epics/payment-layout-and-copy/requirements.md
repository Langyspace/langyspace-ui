# Requisitos

- Padronizar textos próprios de pagamento: Pix automático, Cartão recorrente e Pix copia e cola. Não mudar nomes de APIs, enums ou dados do cliente.
- Desktop acima de 900px: plano antes da cobrança, valor alinhado ao início e QR/código em composição apropriada à largura. Conferir 901/1024/1280/1440/1920 e zoom de 200%.
- Mobile até 900px: conservar cobrança antes do plano e controles empilhados; revisar 390/768/900.
- Remover título genérico de erro duplicado, conservar mensagem pública e ação Verificar troca. Não ocultar detalhes que orientem uma correção real.
- ToastItem usa espaçamento de tokens entre título, corpo e ação, sem CSS específico do produto nem nova API. Mensagem única sem título continua compacta; texto longo, ação e disabled permanecem acessíveis.
- Sem nova chamada financeira, novo debounce, timer, migração ou cobrança. Reutilizar a qualificação financeira anterior.
- Biblioteca preparada primeiro; adoção do tarball exato no Student. PRs visuais com pares completos e aceite da revisão nova antes da publicação.
