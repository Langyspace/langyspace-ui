# Plano técnico R10

Baseline UI db4cfe8d63b862270185b2d916003ca218a9fe8b, Card 1.9.0 aprovada; release oficial iniciada.
Antes dos produtos: Teacher staging aac8859637ee44b5baee49a4dc2dbab933683c3a e Admin staging
314c1a303f437069054112b1ebbb45c02c6d177b. Incorporar R09 integrada antes de entregar a próxima adoção.

Fontes conferidas: Teacher components/base/FilterToolbar e páginas Students/Materials;
Admin components/base/FilterBar e AdminPortal/MessagingPage. A linha Admin envolve um único grid,
logo não remover seu grid nem forçar os selects a virarem itens flex. Outro uso row em AdminPage
impede remover a recipe local global neste piloto; registrar esse custo sem ampliar o rollout.

Criar src/molecules/FilterToolbar/{index.tsx,styles.ts,types.ts}, stories, contrato focado, export
raiz, manifest/README/API e browser/SSR smoke. Semântica group fixa, nome requerido via união
aria-label/aria-labelledby; props nativas e ref encaminhadas. ComponentId lsui-sc-filter-toolbar.
Tokens spacing existentes; breakpoint 900px corresponde aos dois portais e não vira prop.

Stories: busca/pills com estados controlados, nomes longos/wrapping, disabled e composição Card
com grid interno. O comportamento dos filtros vem dos filhos; o owner compartilha só a linha.
Teacher adapter mantém somente margens. Admin troca somente o FilterBar Messaging por
Card + FilterToolbar; outros FilterBar não mudam. Concessão: sombra sutil na superfície Admin.

Bundle: 1.9.0 mede 103.997 raw/21.993 gzip e tem só 3/7 bytes livres. R10 adiciona um export real;
registrar capacidade específica antes de implementar: limite agregado proposto 105.000 raw e
22.200 gzip (acréscimo máximo 1.000/200 sobre limites atuais), com medição do delta e revisão no PR.
Nenhum limite de família, cobertura, lint ou arquitetura muda. Adicionar entry layout isolado
Card + FilterToolbar para manter o custo da composição explícito, com limite inicial 2.000/900.
Se o delta exceder a proposta, revisar o desenho; não expandir novamente para ocultar regressão.
Essa capacidade é parte do novo lote pendente, não da release 1.9.0 aprovada.

Checks locais: contrato focado e build/API/bundle para materializar o candidato. CI executa suítes,
a11y, pacote browser/SSR e layout amplo. Produtos usam typecheck e seus testes existentes de filtros
quando úteis; capturas verificam wrap, overflow, ações e foco. Não repetir gates amplos localmente.

Revisão crítica: contrato pequeno, margem e domínio fora da UI, matriz de variantes recusada.
Custos: Admin adiciona um wrapper e não remove ainda FilterBar global; ganho atual está em Teacher
e na manutenção comum da linha. Review humana pode recusar essa concessão e manter Admin local.
Rollback restaura adapters/FilterBar e a dependência anterior, sem tocar dados.

## Medição e correção da estimativa do entry novo

Biblioteca R10: 104.515 raw/22.072 gzip, delta +518/+79 frente à 1.9.0. Os limites agregados
propostos antes da implementação passam; limites existentes de todas as famílias permanecem iguais.

Entry novo layout (Card + FilterToolbar): 3.826 raw/1.457 gzip. Card sozinho, com a mesma recipe
1.9.0, mede 3.312/1.315; o delta isolado é +514/+142. A estimativa inicial 2.000/900 para esse
entry novo não incluía as foundations já necessárias a Card e falhou. Não é uma regressão de
entry existente. Corrigir o limite inicial proposto para 4.000/1.600, documentado nesta revisão
antes da alteração; isso não modifica o limite de nenhuma família já publicada. O custo incremental
é pequeno, mas o benefício no Admin ainda precisa justificar o wrapper extra na review humana.

Validação da UI concluída: contrato de grupo/ref/edição/teclado passou; snapshot de API adiciona
somente FilterToolbar/FilterToolbarProps e três declarations (com maps no pacote), preservando
os hashes de todas as declarations pré-existentes exceto o barrel raiz. 26 imagens novas nos
casos default/long/disabled/Card-grid/foco/seleção. Nenhum overflow; gap 8px até 900px e 12px acima.

Teacher: 56 pares em /alunos e /materiais, sete estados e quatro larguras; conteúdo, labels,
valores, bounding boxes e margens são exatamente iguais antes/depois. Typecheck passou.
Admin: typecheck e quatro testes existentes de MessagingPage passaram; 105 pares em 15 larguras e sete estados. Conteúdo, valores, caixas dos selects, superfície e padding são idênticos. Única diferença medida: sombra none → 0 1px 2px rgba(0,0,0,.05), conforme concessão prevista. Nenhum overflow.

Custo em src dos produtos: Teacher +6/-21, líquido -15 linhas; Admin +37/-28, líquido +9
(inclui indentação/formatação de import). O rollout inicial não promete grande redução global de
linhas; Admin mantém a recipe FilterBar para outro consumidor row e filtros column. As 161
comparações conservaram todos os bounding boxes, labels/valores e texto. A superfície Admin
conserva padding 16px, altura/largura/posição, acrescentando só sombra sutil.

Revisão pós-entrega: smoke gerado continha um button HTML nativo, incompatível com LSUI003 do
consumidor. Foi substituído pelo Button já importado. A auditoria do snippet completo reproduziu
a falha anterior e passou com a correção, sem adicionar exceção. Scripts não entram no pacote;
o candidato e todas as imagens permanecem idênticos.
