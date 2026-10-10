# R07 — piloto de busca

Impacto direto em /materiais e /alunos. Componente SearchInput já implementado na UI;
UI primeiro está atendido sem nova prop ou variante. Escolher o recipe sm (40px), manter
flex/min-width do container e acessibilidade pelo mesmo placeholder/aria-label.
Concessões a medir: pill -> raio canônico de 10px, border/focus/placeholder canônicos e
altura 40px. Não adotar se reflow amplo ou desorganização das barras superar o ganho.

## Tarefas

1. Capturar baseline real com fixture de busca existente, nas duas rotas e quatro larguras.
2. Trocar owner visual por SearchInput, manter handlers e acrescentar callbacks de limpar
   nos dois callers. Evitar remover o clear nativo sem oferecer a ação equivalente.
3. Verificar busca, combinação com nível, ordenação, limpar/foco e retorno via URL usando
   os helpers focados existentes. Capturar todos os estados das duas rotas.
4. Instalar candidato imutável já preparado, conferir tipos/diff e abrir draft com imagens.

Próxima tarefa: baseline. Sem mudança em queries, caches, controllers, domain ou backend.
Usar apenas fixtures locais, rede externa bloqueada. UI #8 e review humana por PR antes
integrar/release; sem auto-merge, sem deploy/monitoramento de CI.

## Resultado do piloto

40 pares em 390/900/901/1440px, incluindo campo vazio/foco, lista preenchida, combinação
sem resultado, consulta e limpeza. Todos usam Montserrat carregada; nenhuma chamada externa.
O campo passa de 41 para 40px, raio pill para 10px e padding interno canônico. A barra mantém
x/y/largura, com altura -1px em todos os casos; não houve quebra adicional de linha.
Callbacks de busca, combinação com níveis, cinco ordenações e consumo do studentId na URL
passaram: 152 verificações comportamentais por lado. Limpeza via botão acessível e foco no
ícone/superfície também passaram; nenhum shim de evento nem controller migrado ao UI.

UI: foco da superfície corrigido antes da adoção, sem nova prop, com quatro testes de SearchInput.
API pública inalterada frente a R02/R03; bundle atual 99.650 raw / 21.260 gzip, fields 24.334 /
5.564, sem novo aumento de limite. Auth/portal/actions/identity/molecules conservaram medições.
Antes/depois do foco no ícone em 390/1440 capturados na story real do UI.

Concessões são intencionais e aguardam review humana. O clear do browser foi substituído pela
acao existente da biblioteca com callback de produto; filtros e retorno pela URL permanecem.
Próxima tarefa: candidato cumulativo, instalação frozen/typecheck e draft com todas as imagens.
