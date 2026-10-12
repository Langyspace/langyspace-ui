# Progresso R09

D01–D05 concluídas: Card foi preparado primeiro na UI, com uma receita e props HTML/ref, e as adoções isoladas usam o staging integrado dos lotes anteriores. UI #9, Admin #12 e Teacher #29 estão em drafts para review própria.

55 pares Antes/Depois nos produtos, 16 capturas de stories novas e 126 imagens no total. URLs públicos por SHA, formato em tabela e bytes das amostras foram conferidos. Concessões de padding/borda/sombra e custo-benefício estão no plano técnico. Checks focados de contrato, API, pacote/budgets, tipos/arquitetura e composição passaram; CI possui os gates amplos.

Correção UI de CI preparada em 2026-10-12: matrizes JSON formatadas com valores idênticos, check
de formatação completo aprovado e candidato existente incluído no Git com exceção de caminho
exata. SHA-256 e 277 membros do pacote conferidos. Os consumidores precisam apontar ao commit que
contém o `.tgz`, em vez do commit antigo com somente checksum; essa entrega é registrada nos
documentos de cada produto e no handoff local. Diagnóstico em [ci-correction.md](ci-correction.md).

Próxima tarefa da UI: D06 — avaliação humana dos três PRs atuais, após a correção dos consumidores.
Depois do aceite, release oficial e substituição do candidato 1.9.0 antes da integração. Não
aproveitar o aceite dos lotes anteriores nem habilitar auto-merge.

Visual gate review: pending human.
