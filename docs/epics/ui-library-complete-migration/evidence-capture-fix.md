# Sombra parcial no print do checkout

Relato de2026-10-15: o fundo escurecido do modal Finalizar contratação parecia terminar antes do fim da tela.

## Causa confirmada

A captura usava viewport1440×844 e fullPage, gerando PNG1440×1173. O backdrop usa position:fixed e inset:0, dentro de portal, e cobre os844px reais da janela. O restante do documento exportado não pertence à janela visível. A mesma situação ocorreu no checkout390/768 e nos prints mobile do descarte de lead Admin.

No navegador, antes/depois do checkout em390/768/1440, o retângulo do backdrop cobre exatamente o viewport, o hit test dos quatro cantos permanece na camada modal e body overflow é hidden. Portanto, a correção pertence à captura, sem mudar o componente ou estender a sombra pelo documento.

## Correção

scripts/capture-visual-evidence.mjs escolhe viewport quando há aria-modal=true visível e fullPage nos demais casos. Foi adotado pelo audit Storybook e pelo harness desta entrega. Preserva opções nativas de screenshot, viewport, dados, tema e fontes; nenhuma imagem foi recortada, editada ou composta. A regra também consta em docs/visual-pr-review.md.

| Superfície                  | Largura      | Antes e Depois recapturados                                      |
| --------------------------- | ------------ | ---------------------------------------------------------------- |
| Student checkout            | 390,768,1440 | PNG original da janela com altura844; seis arquivos substituídos |
| Admin descarte de lead      | 390          | início e fim do modal, quatro arquivos substituídos              |
| Admin descarte de lead, fim | 1440         | controle já correto; imagens permaneceram idênticas              |

São6 pares verificados,10 PNGs substituídos e443 pares restantes inalterados. Total da matriz continua449 pares/898 imagens. Os hashes e modos estão em .github/evidence/complete-current/provenance.json. Atualizar as URLs desses pares nos PRs UI27/Student20/Admin16; os outros PRs não contêm imagens afetadas.

## Validação e escopo

Uma verificação focada no navegador confirmou posição, cobertura nos quatro cantos e dimensões das capturas nos dois produtos e nas duas fontes. O caso sem modal escolher plano1440 preservou fullPage1440×1173. A sintaxe dos scripts foi conferida; nenhum gate amplo ou CI foi monitorado.

Impacto none no runtime: nenhuma mudança em src, contratos, estilos, estado, pagamentos, dependências ou pacote. O candidato imutável20990081 e os cinco locks permanecem válidos. A revisão dessas capturas foi aprovada pela product owner; a integração e a publicação subsequentes estão registradas em [entrega.md](entrega.md). A correção de captura não alterou o runtime.
