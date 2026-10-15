# UI Library: clareza React e qualidade sustentável

## Objetivo e problema

Transformar a biblioteca atual em uma referência de clareza para quem lê, usa e mantém seus componentes. A migração anterior terminou; este épico revisa a qualidade de cada contrato e implementação, inclusive os componentes que serão mantidos sem alteração. “Estado da arte” significa satisfazer os critérios verificáveis abaixo no inventário atual, sem alegar superioridade universal ou perseguir novidades de framework.

A jornada alvo: uma pessoa encontra uma família, entende seu propósito por nome/tipos/exemplo, compõe JSX explícito, passa conteúdo e callbacks, e preserva comportamento/responsividade sem investigar wrappers ou reescrever a apresentação no produto.

## Fontes e precedência

1. Instruções atuais do usuário e AGENTS.md de cada repositório.
2. Contratos React e interfaces já revisados pela product owner, especialmente Auth e PracticeResult.
3. UI 1.21.1 publicada, tokens atuais, DOM/estilos e usos ativos dos cinco produtos.
4. Stories, testes, manifest e evidências anteriores com fontes identificadas.
5. Recomendações propostas neste épico; nunca substituir valores existentes por aproximação.

Baseline UI: 8cdd415562db7f9aa060218ff00727aec7289dcb. Baselines dos cinco produtos e worktrees preservados no diretório operacional `LOCAL_EXECUTION_ROOT/`. A contagem e a relação nominal serão verificadas em inventory.json, sem confundir tokens/tipos com componentes.

## Escopo

- Todos os componentes públicos: responsabilidade, nomes, tipos, entrypoint React, estilos, interações, composição, exemplos, uso real e evidência.
- Foundations/receitas e helpers internos usados por esses componentes.
- Simplificação de aliases/adapters sem responsabilidade nos cinco consumidores, somente quando melhora a leitura e preserva contexto.
- Documentação por família, exemplos completos, manutenção do manifest/API e regressões significativas.
- Pacote cumulativo e PRs de biblioteca/adoção com evidências completas das revisões propostas.

Páginas, rotas, controllers, estado de domínio, dados Firebase, autenticação/backend, regras de negócio, áudio/persistência e SEO permanecem nos produtos. Não há redesign, novo tema, atualização de framework, sistema de estilos paralelo ou mudança de provider neste épico.

## Critérios de sucesso

Cada componente deve satisfazer e registrar os dez critérios:

1. Responsabilidade e nome compreensíveis, com razão para ser público.
2. Implementação legível como função React e JSX direto; helpers servem a responsabilidades concretas.
3. Props semânticas mínimas; atributos/ref nativos coerentes; combinações inválidas controladas quando necessário.
4. Composição explícita e contratos entre pais/filhos identificáveis; nenhum markup ou seletor obrigatório não documentado.
5. Estado/efeitos mínimos, imutabilidade e interação local; nenhum estado de negócio importado.
6. Estilos com origem identificada, receitas compartilhadas por significado e valores aprovados preservados.
7. Semântica HTML, nomes acessíveis, teclado/foco, disabled/busy e reduced motion pertinentes.
8. Responsividade, conteúdo extremo e estados relevantes preservados.
9. Exemplo completo, orientação de escolha, contraexemplo e consumidor real verificável.
10. Teste adequado ao contrato, compatibilidade/pacote rastreáveis e nenhum workaround novo nos consumidores.

Não são metas: diminuir artificialmente a quantidade de exports/props/linhas, transformar tudo em compound components com Context, criar um componente por declaração CSS ou trocar JSX por um schema de tela.

## Impacto e conclusão

Impacto global `direct`: possíveis mudanças em estilos, anatomia e interação. Cada tarefa refina seu impacto e lista superfícies antes de editar. A intenção visual padrão é preservar o estado aprovado.

O objetivo termina quando o catálogo inteiro está revisado com justificativas, todas as pendências obrigatórias foram resolvidas, a API e o JSX de uso são coerentes, as validações pertinentes estão registradas e os PRs preparados estão revisados pela product owner e integrados/publicados quando autorizado. Plano escrito, migração histórica ou CI verde isoladamente não concluem o objetivo.

PRs visuais mantêm somente `# Evidências` e tabela Antes/Depois. Aceites históricos não aprovam as novas revisões; integração depende do aceite dos PRs concretos.
