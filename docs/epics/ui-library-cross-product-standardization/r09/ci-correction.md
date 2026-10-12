# Correção de CI R09 — 2026-10-12

Impacto desta correção: `none`. A formatação dos metadados não altera seus valores; o pacote a
publicar no branch é exatamente o candidato usado nas capturas, sem reconstruir runtime. Os
componentes, stories, imagens e corpos dos PRs permanecem iguais. R09 continua aguardando review
humana própria.

## Diagnóstico e execução

- UI: o run [38126131732](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38126131732)
  passou arquitetura, lint, testes, pacote e visual, mas `format:check` rejeitou as matrizes JSON
  de Admin e Teacher. O job agregador falhou por essa dependência.
- Teacher: o run
  [38125566260](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38125566260)
  parou na instalação com 404 para o candidato. O commit `7e1292a6` contém somente seu checksum:
  `*.tgz` impediu que o arquivo fosse versionado. A mesma URL está no draft Admin.
- O draft Teacher também conflita com o staging atual em inventário derivado. Incorporar a base
  atual sem alterar o código Calendar já integrado e regenerar apenas o snapshot necessário.

Ordem: formatar os dois JSON; incluir o arquivo existente com uma exceção exata em `.gitignore`;
conferir JSON, checksum e conteúdo do tar; publicar uma vez no branch UI; verificar download
público e hash; atualizar URLs imutáveis e locks dos dois consumidores; resolver o inventário
Teacher; validar instalação congelada/arquitetura afetada e publicar cada branch uma vez.

Critérios: JSON semanticamente idêntico, SHA-256 do candidato
`6a8547248151315189b98c03e6acfd52c11c92c659fd1e96b815515a89747c80`, nenhuma alteração visual,
integrity SHA-512 preservada, nenhum budget/ratchet flexibilizado e evidências existentes
preservadas. CI ampla continua no GitHub; não publicar release 1.9.0 nem integrar os drafts.

Validação UI: `prettier . --check` passou; os dois JSON são semanticamente iguais aos originais.
O arquivo tem 68.118 bytes, o SHA-256 esperado e 277 membros válidos; não contém arquivos env,
node_modules ou links. O diff não altera `src`, stories, pacote gerado ou imagens.

Entrega UI pelo branch de UI #9. Referências dos produtos e instalação congelada são registradas
em `docs/epics/ui-library-card-r09/ci-correction.md` de cada consumidor e no handoff local. Os
workflows completos permanecem assíncronos, sem declaração de CI concluída ou release publicada.
