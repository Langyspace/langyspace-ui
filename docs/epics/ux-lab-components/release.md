# Publicação autorizada

A product owner autorizou produção em 16/11/2026 sobre a revisão `1efd0ff255b06a42b77f6acd645cfa184e076e95`, PR #42. Publicar biblioteca e catálogo pelo fluxo normal; a adoção nos portais é uma entrega de consumidor separada. A versão 4.2.0 já existe e não pode ser sobrescrita; esta API aditiva usa 4.3.0.

## Diagnóstico do gate

O run `43933732120` passou nas stories e nas asserções de unidade, mas falhou em quatro famílias: imports de estilos privados entre pastas e overrides de Button; cobertura global de branches 87,1% abaixo de 90%; pacote 385.845 bytes/90.603 gzip acima de 320.000/70.000; layout com controles de 24px e texto longo em marcador circular.

## Correções e critérios

- Agrupar os novos contratos sob InteractiveMaterial, com infraestrutura privada na mesma família. Manter os exports públicos e contratos de consumo.
- Usar Pressable nos controles próprios de telefone/player e Button nos comandos canônicos, sem sobrescrever suas receitas.
- Garantir 32px nos controles pequenos e usar marcador numérico no exemplo de criação de frases.
- Exercitar estados vazios, carregando, bloqueados, temas e ações controladas ausentes da cobertura.
- Compactar JavaScript distribuído com Terser, preservando as anotações de pureza para tree shaking; não aumentar budgets nem reduzir thresholds.
- Atualizar API/evidências, validar os checks afetados, aguardar CI desta revisão, fazer merge e criar a tag v4.3.0. Verificar publicação do tarball/checksum e catálogo; manter o checkout canônico alinhado com main.

## Progresso

Correções preparadas para o PR #42. Arquitetura passou sem exceções; 29 casos de contratos/estados e 34 jornadas de navegador passaram. As 72 stories afetadas passaram, com três reruns direcionados após timeout local/espera de mídia durante compilação concorrente. A cobertura focada de InteractiveMaterial ficou em 96,22% de branches (331/344), 99,2% de statements e 99,58% de linhas. A suíte ampla local teve 433 casos aprovados e nove timeouts em arquivos existentes; os sete arquivos passaram no rerun em 53/53 casos, e o CI da revisão confirma a suíte completa.

A distribuição passou em todos os budgets: raiz com 284 KB e aproximadamente 69,7 KB gzip (limite 320 KB/70 KB), sem elevar limites. Os quatro testes dos transforms passaram. A instalação do tarball em um consumidor separado passou em TypeScript, SSR e build; os quatro logos foram resolvidos como assets do consumidor. Assets SVG e imagens da A1.01 mantêm os bytes originais.

As anotações de pureza dos estilos e alocações no topo do módulo foram mantidas. Somente comentários redundantes de chamadas JSX dentro de funções são omitidos. Os tokens estáticos são dobrados nas strings de estilo sem alterar callbacks de tema. O build usa URLs relativas para que assets publicados sejam resolvidos pelo bundler do consumidor.

Evidências atualizadas: 88 estados iniciais, 54 estados de interação, 121 capturas anteriores afetadas da A1.01/componentes e dez comparações de assets. A janela privada de notas permaneceu igual e usa a evidência anterior. A aprovação de produção da product owner está registrada neste chat; as correções necessárias aos gates mantêm o escopo visual aprovado.

Os 69 cenários de layout que reproduzem as falhas anteriores passaram sem issues. Nenhum merge, tag ou deploy desta revisão foi feito neste ponto. Próximo passo: CI do PR, merge de main, tag v4.3.0 e verificação dos workflows/release/catálogo.
