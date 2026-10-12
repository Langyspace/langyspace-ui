# Requisitos R14

## Contrato proposto

Uma barra **decorativa** de 6px, trilha neutra `#F1F1EF`, preenchimento accent `#FF1F5C`, raio pill, overflow hidden. Um valor finito em escala **0–1**, calculado no produto; limitar a faixa visual a 0–1 e tratar NaN/Infinity como zero. Não aceitar total/max nem fazer consultas/conclusão de atividades na UI. Nome proposto `PracticeProgressBar`, para explicitar o recorte em prática, sem prop por atividade/produto.

Atributos/ref nativos de div para integração; sem children, role, tabIndex ou aria-hidden configuráveis. Forçar `aria-hidden=true`: a informação textual de contagem/percentual/status já está nos cards. Não incluir `role=progressbar` dentro dos botões nem alterar seus nomes acessíveis. Um progresso sem texto equivalente fora de um botão exige outro discovery semântico; o indicador financeiro do Admin não é este contrato.

Transição única sugerida: largura 520ms cubic-bezier(.2,.8,.2,1), igual ao Student; `prefers-reduced-motion: reduce` remove a transição. Teacher hoje não anima: adotar a transição é uma concessão de comportamento, sujeita à revisão humana, e não uma nova prop `animated`.

## Aceite

- Preservar caixas de card/corpo/barra, cores, raio e nomes dos botões nas cinco abas, 390/900/901/1440px; normal e reduced motion.
- Capturar zero, parcial, concluído e card sem itens/disabled pertinente com a mesma fixture antes/depois; não omitir estado não contemplado pela fixture padrão.
- Percentual/contagem/status, ordenação, onOpen/refazer, aria-pressed e disabled permanecem do produto.
- Testar limites finitos/NaN/Infinity, ref e ausência de foco/anúncio redundante; testar ativação pelo teclado e callback único nos consumidores.
- Remover estilos somente quando a busca confirmar ausência de outros consumidores; não migrar sessões silenciosamente.
- PRs visuais separados UI/main e produtos/staging, apenas tabela Antes/Depois; evidência incompleta mantém draft.
- Cada nova revisão visual exige aceite humano próprio. O aceite R12 não autoriza merge R14.
