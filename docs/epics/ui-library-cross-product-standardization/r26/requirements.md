# Requisitos R26

- title renderiza h2; description é ReactNode dentro de p e mantém strong/idioma fornecidos pelo produto. children fornece métricas e mensagens locais de salvamento/erro. actions recebe os controles locais, sem callbacks de domínio na biblioteca.
- Preservar min-height min(70svh,34rem), centragem, gap16px, título24px, texto14px/1.5 com max22rem, ícone84px/SVG36px, ações em coluna com gap8px/margem4px/largura100%. Sem prop de skin, produto, tamanho ou heading arbitrário.
- O check marca conclusão, independentemente de acertos; UI não calcula score/accuracy ou decide se resposta está certa.
- Student tem animação do ícone de320ms/y30px; Teacher estático. Concessão proposta: usar a entrada existente do Student nos dois, com prefers-reduced-motion reduce suprimindo animação. Não acrescentar prop animate.
- Métricas distintas ficam locais: Student grid intrínseco, gap menor no mobile e tiles sem borda; Teacher grid100%, gaps/bordas e typography próprios. Compartilhar o resultado não exige alterar esses layouts.
- Retornar/refazer mantêm mesmos targets/callbacks/ordem/foco e não submetem forms. Nenhuma persistência no preview Teacher; Student success/pending/error preservados.
- Evidência original para 0/1/2 acertos, refazer, retorno, salvar pending/erro, foco, texto longo, motion e larguras390/640/641/1440. Alturas568/1100 exercitam70svh. Cada PR usa tabela Antes/Depois, imagens públicas sanitizadas e SHA imutável.
