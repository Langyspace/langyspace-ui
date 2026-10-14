# Requisitos R25

- Contrato: name, counter, progress (0–1), onBack, backLabel; sem flags por produto, cores ou tamanhos configuráveis.
- Retorno é button nativo type=button, com nome acessível vindo do consumidor. Mesmo SVG 18px, stroke 2.4, alvo circular de 38px, foco e feedback de pressão; nenhuma nova navegação.
- Mesmo flex, gap, paddings, truncamento e breakpoint 640px. Responsividade em 390/640/641/1440px; texto longo e contador de resultado.
- Reutilizar PracticeProgressBar existente: progresso inválido/fora dos limites seguro; barra decorativa, estado/counter pertencem ao produto.
- Concessões propostas: contador #9a9a9a → token muted #6b6b6b para contraste AA; track surface.subtle → neutral[100], e Teacher ganha a transição de progresso de 520ms já usada no Student. Reduced motion suprime a transição. Sem mudança de geometria/texto.
- Perguntas, alternativas, resultado/salvamento/erro, refazer, back, áudio e cleanup preservados. Teacher preview não grava progresso.
- Nenhuma mudança em tokens globais ou nos contratos existentes. UI preparada primeiro; produtos draft com candidato imutável, oficial aprovado antes de merge.
- Revisão humana por PR na revisão corrente, sem auto-merge. A autorização antiga R15–R24 não aprova imagens deste R25.

Skeleton Teacher: o mesmo header é usado durante o carregamento do detalhe. Aplicar o owner com contador Carregando e progresso 0.08; preservar busy/placeholder/fechamento. Nenhuma mudança de API é necessária.
