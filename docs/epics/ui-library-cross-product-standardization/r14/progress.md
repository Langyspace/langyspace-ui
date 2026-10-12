# Progresso R14

2026-10-12: UI preparada primeiro em #12. PracticeProgressBar decorativa de 6px,
value 0–1, ref/atributos nativos; sem props de cor/altura/velocidade. Nove casos unit e
typecheck passam; API 43 valores/103 tipos/144 declarations, hashes anteriores preservados
salvo barrel. Bundle final 106860 raw/22586 gzip (+857/+199 contra 1.11.2), entry progress
3658/1468; famílias anteriores dentro dos budgets. 48 PNGs de stories incluem atualização
de valor e reduced motion. Candidato 1.12.0 imutável em bfd3616, SHA256
`e6ebcbecdf88d4b85de6cf0003f1aa62a7a264f2e8e9cb538e96cc3f82acc989`, exclusivo de preview.

R12 aprovada pela owner e integrada em UI #11, Student #8 e Teacher #33, com 1.11.2 oficial.
A CI exigiu classificação do shimmer e economia de CSS redundante; sem elevar budgets.
24 PNGs R12 byte idênticos aos aprovados e declarações públicas preservadas. Staging/deploy
iniciados pelos pipelines, sem acompanhamento nem afirmação de produção concluída.

Adoções R14: três branches de cards por produto, -5 linhas runtime por produto contando import.
Before atualizado para Student staging 9b189c0 e Teacher staging 7a34da4, ambos com 1.11.2
oficial; After usa o candidato 1.12.0. Capturas originais do browser, fixture sintética 0/4/8,
fontes/clock/driver idênticos e rede externa bloqueada. Aguarda-se o carregamento das mensagens
do shell e a conclusão do count-up antes da captura; sem alterar código de produção ou PNGs.
40 cenas por produto, 80 pares Student + 76 Teacher, incluindo scroll; 360 PNGs com stories.
Geometria de cards/corpos/trilhas/fills, textos/controles/cores/raios preservados.
Teacher normal ganha transição de 520ms; reduced continua none. Student motion igual.
Dos 156 pares, 140 são byte idênticos; 16 apresentam resíduo de rasterização de até 89 pixels,
delta máximo de 1 por canal, sem mudança das matrizes ou edição das imagens.
Testes focados de nomes/keyboard/callback único/disabled, typechecks e locks congelados passam.

Próxima subtarefa única: D06 — review própria dos três drafts R14. Após aceite, publicar a
release oficial R14, comparar o artefato com o candidato e adotar via staging. Aceite R12 não
autoriza R14. R13 adiado por custo-benefício; demais componentes permanecem em discovery.

Visual gate review: pending human — R14.
