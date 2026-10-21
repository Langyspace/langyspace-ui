# Plano técnico

U1: Text de ToastItem passa a grid com gap spacing2; Action deixa de acumular margem. Contrato público permanece igual, patch 3.2.1. Cobrir story de mensagem com ação sem título e reaproveitar testes de teclado/disabled, API/build/package smoke.

S1: containers de /pagamento em StudentPayment/styles compõem primitives existentes; ordem desktop plano/cobrança e mobile cobrança/plano sem duplicar banner. Hero desktop passa a resumo seguido do painel; QR/código podem ocupar duas colunas quando houver largura. Nenhum override global de portal ou controle.

S2: corrigir rótulos nos três owners atuais de pagamento e expectativas afetadas. No fallback incerto, title omitido e message preservado; a ação continua a mesma e o backend é autoritativo.

S3: preparar pacote, integrar consumidor isolado, checks focados e browser real com fixture sintética. Capturar antes da revisão aprovada e depois, inclusive erro/retomada/pago concorrente, opções e estados de toast. Medir geometria, foco, ausência de overflow e ação no mesmo fixture.

Revisão PM/TL/SWE/QA: correção trata os três achados, separa composição da página da anatomia compartilhada e evita mexer em protocolo financeiro já testado. Não inventar novos componentes ou CSS global; snapshots/budgets não podem ser relaxados. Publicação anterior permanece interrompida até esta entrega estar revisada.
