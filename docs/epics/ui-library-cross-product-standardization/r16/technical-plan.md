# Plano técnico R16

UI molecules/PhoneField importa Pressable, styled-components e React; SVG nativo decorativo para
chevron. CSS copiado da receita Student, que é igual à Teacher salvo erro. Não importar formatter,
country arrays, Firebase, router ou store. API nativa input + country/countries/label/errorMessage/
onCountryChange; value já formatado. Ref aponta para input. Products retêm wrappers de edição,
normalizadores e tipos locais, trocando somente JSX/styles pelo componente compartilhado.

R14 UI 1.12.0 oficial antes de integração R16 nos produtos; R15 adiado não bloqueia. Preparar UI
1.13.0 em PR, depois pacote imutável de preview e PRs dos adapters; release oficial comparada ao
preview antes de integrar staging. Atualizar exports, manifest, README, API e package smokes.

Antes de código, capacidade planejada para esta unidade: library máximo 116000 raw/25200 gzip,
entry phone exclusivo 12500/3800. Base R14 106860/22586; incremento permitido cobre seletor/campo
composto, não novas dependências. Limites das famílias antigas permanecem iguais. Medir e rever
escopo se não couber, sem elevar teto após falha. API anterior e d.ts devem permanecer compatíveis.

Dois checks UI: teste focado e API; build/bundle/package são evidência da nova capacidade pública.
Produtos: teste de edição local e typecheck, lock congelado restrito necessário por artefato novo.
CI owns validate:ui/full suites/E2E. Não repetir check passado com entradas iguais nem monitorar CI.

Capturar Before a partir de staging oficial e After com preview; quatro larguras 360/361/390/1440.
Renderizar os apps/sections reais com fixtures de captura ignoradas, sem backdoor de produção.
Listar todos os owners PhoneField: quatro telas Student e duas Teacher. Verificar seleção/caret/
paste/ref, bounds, popover e formulário. Caso não seja possível provar uma superfície, não declarar
migração pronta. Notas e matrizes nos docs; PR body só pares Antes/Depois, width400.

Revisão crítica: reutilização de duas apresentações exatas justifica extrair campo, não regras de
identidade. Modelo de país mínimo tem lookup nos adapters para preservar máscaras. Erro/disabled
são estados nativos, não variantes estéticas. A11y da seleção melhora sem mudar telefone/submit.
Risco principal é ref/caret/paste; testes locais e matriz de página são condições de saída.

Receita usa tokens sem ThemeProvider obrigatório; xs verificado em 360px. Placeholder passa de
#9a9a9a a content.placeholder #737373 para contraste padrão da UI; sem alterar geometria.

A revisão local acrescentou proteção de Enter na busca contra submit do owner, nomes de opção
por país/DDI e indicação de foco da busca, sem alteração de geometria. Estes estados entram nas
evidências; não interpretar isso como nova normalização de telefone.
