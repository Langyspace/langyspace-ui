# R08 — FilterPills Teacher

Data: 2026-10-11. Impacto renderizado: `direct`. Escopo: filtros de nível em `/materiais` e
`/alunos`, sem alterar busca, ordenação, domínio, serviços ou seletores ricos.

## Contrato e custo-benefício

FilterPills já existe no pacote oficial UI 1.6.2 usado pelo Teacher. Reutilizar essa API sem nova
versão, componente, prop ou variante na biblioteca. O produto mantém somente o adapter de opções
`id -> value` e um host de layout para manter a composição da toolbar; CSS dos botões pertence ao
owner compartilhado. O host limita o grupo à largura intrínseca no desktop e usa 100% no mobile,
preservando a distribuição entre busca e filtros sem sobrescrever estilos internos da UI.

Usar `size="sm"` e `overflow="wrap"`, opções semânticas já existentes. A altura mínima de 32px e o
wrapping são preservados. Concessões propostas: tipografia canônica pequena em vez de 14px e
larguras intrínsecas dos pills, inclusive no mobile, sem espalhar cada botão para preencher a linha.
O grupo recebe nome acessível e cada botão indica `aria-pressed`.

Não compensar as concessões com overrides CSS, flags mobile ou props de padding/font-size. Se a
redução de texto ou o alinhamento mobile prejudicar a leitura na review, manter o componente local;
a economia de manutenção não justifica comprometer o layout.

## Execução e validação

1. Capturar Antes e Depois na mesma baseline, com fixtures sanitizadas e rede externa bloqueada.
2. Migrar somente a apresentação de FilterPills, conservando o adapter e callbacks existentes.
3. Validar níveis, resultados, reset para Todos, teclado e foco nas duas rotas.
4. Cobrir 390, 900, 901 e 1440px; incluir todas as opções e estado de foco.
5. Abrir PR próprio com somente Evidências e tabela Antes | Depois; nenhuma integração automática.

Este lote não está coberto pela aprovação das revisões anteriores. Não depende da release 1.8.0 nem
altera pacote, lockfile, workspace ou inventário de Functions.

Implementação e validação concluídas: typecheck e filtros/resultados/reset/foco por teclado nas duas
rotas, em quatro larguras. 40 pares de imagens e nenhuma página com overflow. Posições verticais de
busca e pills preservadas; busca mobile conserva a largura, desktop ganha 15,6px pela tipografia
menor. Pacote, locks, workspace, rotas e callbacks intactos.

Source do adapter: 80 → 40 linhas nos três arquivos, 40 linhas removidas.

Próxima tarefa: review humana do PR próprio deste lote.

Visual gate review: pending human.

As imagens deste lote são armazenadas no repositório público UI para permanecerem visíveis no PR
privado do Teacher. São fixtures sanitizadas, com a rede externa bloqueada e versões idênticas
do pacote oficial 1.6.2 nos dois lados. Nenhum componente da biblioteca foi alterado para R08.
