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

D03/D04 concluídas: 128 pares Student (/login, /registration, /concluir-cadastro e /perfil/editar)
e 64 pares Teacher (/login e /cadastro). Quatro larguras 360/361/390/1440, motion normal/reduced,
default/menu aberto/busca/telefone inválido. Aplicações reais com fixtures sintéticas apenas para
captura e bloqueio de rede; nenhuma chamada OTP, Functions ou provider. Antes usa UI oficial 1.12.0;
Depois usa preview imutável 1.13.0, preparado na UI. Não integrar preview em staging.

Todos os 192 pares preservam retângulos de input/grupo/campo/menu, valor, opções e mensagens.
A mudança de placeholder e foco da busca é a concessão de acessibilidade já planejada. Zero
alterações em formatos, country registry, validações e handlers de negócio. Seis testes de adapters
passaram: cursor no meio do número, identidade/máscara/DDD do país, colagem internacional e
seleção, cancelamento de paste pelo owner e ref nativa. Fixtures corrigidas para considerar o
prefixo nacional irlandês; cleanup explícito por caso para ambiente Vitest sem globals.

Release v1.13.0 falhou no smoke do pacote instalado: TypeError em styled.div.withConfig na
importação Node/SSR. Lint, format, typecheck, stories e coverage passaram antes do smoke.
Causa: import default de styled-components no PhoneField, incompatível com consumo ESM/CJS Node.
Correção usa import nomeado já adotado no restante da UI. Não altera contrato/CSS/handlers.
Tag v1.13.0 preservada; patch 1.13.1 será publicado, sem sobrescrever tag/artefato.
R17 foi iniciada independentemente, mas adoptions aguardam solução deste impedimento.

Patch local: API intacta (44 values/105 types/147 d.ts); pacote empacotado e instalado em
consumer isolado importa no Node e renderiza PhoneField com CSS SSR. Medidas raw/gzip
113828/24054 library e 10414/3397 phone, dentro dos limites planejados; famílias antigas intactas.
56 pares UI recapturados; 53/56 PNGs byte idênticos ao anterior e medidas/estados idênticos.
Produtos recapturam After com o patch para verificar reutilização dos originais publicados.

Próxima subtarefa única: D05/D06 — publicar imagens originais, abrir os PRs de adoção; verificar
artefato oficial 1.13.0 antes da integração por staging. Pipelines seguem assíncronos, sem polling.

Visual gate review: accepted by human — integração autorizada no lote contínuo em 2026-10-13;
sem alegar revisão manual dos screenshots futuros. Antes/Depois continua obrigatório.
