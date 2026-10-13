# Progresso R16

2026-10-13: UI PhoneField preparado. Oito testes significativos passaram (sete originais e novo
caso de Enter da busca não submetendo o formulário); build, API 44 values/105 types/147 d.ts e
bundle aprovados. 143 declarações antigas byte idênticas, exceto barrel aditivo. Todas as famílias
antigas têm medidas e limites preservados. Library 113834 raw/24044 gzip, +6974/+1458 contra 1.12.0;
entry phone 10417/3401, dentro da capacidade planejada antes do código. 56 PNGs originais de
stories, incluindo aberto/busca/vazio/erro/disabled/internacional e normal/reduced nas quatro larguras.

Concessões de acessibilidade: placeholder #737373, foco na busca sem mudança de dimensões,
Escape/arrow/Home/End e foco restaurado ao seletor. Enter da busca não dispara submit/OTP do owner.
Nomes das opções usam país/DDI; máscara, identidade, countries, caret/paste e ref nativos permanecem
nos produtos. Stories e smoke importam o componente sem ThemeProvider obrigatório.

R14 UI 1.12.0 oficial disponível e 295 arquivos idênticos ao preview revisado; adoptions Student/
Teacher atualizadas para o pacote oficial. R15 CopyAction adiado por custo-benefício. Autorização
contínua deste lote documentada em ../autorizacao-execucao-continua.md.

Próxima subtarefa única: D03 — capturar os Before de quatro telas Student e duas Teacher, com
staging oficial; preparar wrappers, casos de edição e After antes de abrir os PRs de adoção.

Visual gate review: accepted by human — integração autorizada no lote contínuo em 2026-10-13;
sem alegar revisão manual dos screenshots futuros. Antes/Depois dos produtos continua obrigatório.
