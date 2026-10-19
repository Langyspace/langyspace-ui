# Leitura e manutenção da UI Library

## Execução contínua — 2026-10-19

O usuário solicitou manter a execução ativa até concluir todo o plano. A entrega
não termina nas etapas 1 e 2. A UI e os cinco consumidores serão preparados em
sequência; nomes substituídos serão retirados numa major deliberada depois da
adoção dos consumidores conhecidos. O aceite da revisão final continua necessário
para integrar. O PR UI #33 fica em draft durante a preparação do conjunto.

A coordenação retomável está em
`/Users/margaridamartins/.local/langyspace-ui-complete-20261019/handoff.md`;
cada produto tem `docs/epics/ui-library-v3/` e uma feature isolada.

- [x] Separar suporte e simplificar Button.
- [x] Preparar marca/rodapé Auth, ações de formulário e progresso Flashcard.
- [x] Preparar adoção de Button, métricas, resultados e StatePanel nos consumidores reais.
- [x] Rever as 40 famílias e Pressable; registrar decisões por responsabilidade.
- [x] Preparar retirada de 40 contratos substituídos na UI 3, sem adaptadores permanentes.
- [ ] Validar pacote candidato e cinco produtos, preparar evidências completas.
- [ ] Concluir revisão humana atual e gates antes de integrar/publicar.

A preparação das etapas não significa validação, revisão humana, publicação ou deploy concluídos. Detalhes da major em [family-review-v3.md](family-review-v3.md).

## Objetivo e baseline

Pedido aprovado em 2026-10-18: continuar o plano de limpeza depois do discovery,
sem alterar comportamento ou layouts. Baseline: `c3299a4abb33fbfbc841c639382bbacdb45fc8b3`.
Trabalho na feature `refactor/react-component-structure`, PR UI #33; não há aceite
humano desta revisão nem autorização implícita para retirar contratos publicados.

O inventário encontrou 173 nomes públicos de componentes, 21 de compatibilidade e
595 arquivos em components: 249 de implementação/tipos, 173 stories e 173 testes.
Button tem 16 arquivos; Auth, 85; Flashcard, 69. Os cinco produtos ainda utilizam
exports antigos. Esses números identificam oportunidades, não metas de remoção.

## Regras de organização

- Components contém implementação, props e estilos; stories e test têm diretórios
  próprios. Uma família não precisa de um arquivo de teste/story por export.
- Arquivo simples não exige outra pasta. Button mantém estilos substanciais em
  arquivo próprio e coloca suas props junto da função React.
- Pressable tem contrato próprio usado em quatro produtos. Não é uma variante de
  Button. Manter seu nome público e separar sua implementação do owner Button.
- Adaptadores transitórios ficam em `src/compatibility`, agrupados pelo owner.
  Código canônico não importa essa camada; contratos antigos delegam aos owners.
- Não remover testes de comportamento, snapshots de API, limites de cobertura,
  anúncios acessíveis, marcadores estáveis ou proteção de arquitetura.
- Remover configuração de cleanup repetida quando o setup global já a fornece.
  Contratos exclusivamente de tipos pertencem a fixtures verificadas pelo tsc.
- Não reduzir componentes com contratos distintos apenas para diminuir contagens.

## Ordem de execução

1. Separar stories/testes de src (346 arquivos em components e seis em outras
   áreas), preservando títulos,
   estados, fixtures e imports. Adaptar manifesto/configuração para caminhos
   explícitos e cobertura compartilhada real, sem prescrever colocalização.
2. Simplificar Button: props locais, estilos privados, Pressable independente e
   adaptadores fora do caminho de leitura. Preservar exports e CSS publicados.
3. Migrar TextButton no Student/Admin e ações de autenticação no Teacher/Student.
   Colocar margens na composição que posiciona as ações; conferir login, cadastro,
   acesso a pagamento e continuação de acesso. Cada produto terá PR e aceite visual.
4. Migrar métricas, estatísticas, resultados e estados de tela; separar peças
   privadas de Calendar dos nomes públicos depreciados. Loading inclui spinner.
5. Consolidar marca/ações de Auth e progresso de Flashcard com APIs pequenas.
   Preservar gestos, animações, headings, teclado, OTP e reduced motion.
6. Revisar as demais famílias por responsabilidade e consumidores reais. Form,
   mensagens, overlays, navegação e controles independentes não são equivalentes
   apenas porque possuem estruturas pequenas.
7. Após migração dos consumidores conhecidos, retirar APIs substituídas numa major
   deliberada. Compatibilidade tem uma condição de saída, não é a estrutura final.

## Entrega organizacional anterior — d4bfece

Etapas 1 e 2 formam um lote organizacional. Impacto `indirect`: caminhos de tipos,
pacote e compilação de stories podem afetar contratos mesmo sem mudanças de CSS.
Não há alteração de produto, tag, publicação ou deploy neste lote.

Verificações locais: contratos focados de Button/compatibilidade/manifesto,
typecheck e build/API frescos. O movimento amplo de caminhos justifica três
checks; CI continua responsável por suítes completas, coverage, pacote, budgets e
auditoria ampla de layout. Não repetir um check aprovado sem mudança relevante.

Capturar os estados de Button, Pressable e adaptadores nas larguras 390 e 1440,
comparando com a baseline exata. Preservar título/ID de cada story movida e
conteúdo dos fixtures. Registrar os limites da evidência; não afirmar nova revisão
visual dos cinco produtos. O PR permanece pendente de revisão humana atual.

## Critérios de aceite do lote organizacional anterior

- Button abre em duas unidades claras: implementação/props e estilos.
- Components não mistura exemplos/testes com código de pacote.
- Nenhum export público é retirado; receitas CSS, componentIds, ref e eventos são
  preservados. O snapshot só é renovado após revisão dos caminhos/declarações.
- O manifesto aceita evidência compartilhada, mas verifica o export coberto e sua
  story concreta. Caminho arbitrário ou rótulo complete não é prova de cobertura.
- A camada canônica não depende de adaptadores; guards negativos preservam isso.
- Nenhuma redução de limites de cobertura, regras de acessibilidade ou auditoria.
- Os demais lotes permanecem explícitos como pendentes até adoção e validação.

Estado e evidências deste lote: [readability-validation.md](readability-validation.md).
