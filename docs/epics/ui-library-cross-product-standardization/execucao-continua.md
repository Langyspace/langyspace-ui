# Execução contínua — R03 e R02

O usuário autorizou continuar os lotes sem aguardar a review dos PRs anteriores. A aprovação
humana continua obrigatória para cada PR antes do merge. Não publicar release nem implantar.

Impacto direto. Próxima tarefa: preparar DocumentLayout (R03), depois NoticeBanner (R02),
validar e abrir uma adoção de apresentação dos portais por produto. R03 antecede R02 porque
é apresentação literalmente igual e não depende de decisões de alinhamento dos avisos.

## Decisões

- Continuar a implementação no PR UI #8 ainda sem aprovação, atualizando suas evidências para
  a revisão atual. Manter AuthTitle/AuthDescription/AuthAccent e a versão candidata 1.8.0.
- Novos drafts Student/Teacher partem de origin/staging atual, independentes dos drafts R01.
  O candidato cumulativo contém APIs aditivas. Todos devem usar o mesmo artefato oficial aprovado
  antes da integração, evitando merges de locks com candidatos diferentes.
- DocumentLayout compartilha apenas grade de leitura, resumo e artigo. Header, logo, links,
  textos/data, volta com state e a rota LegalPage permanecem locais. Sem Router na UI.
- NoticeBanner compartilha a anatomia visual; sticky, margem externa, PWA e ações ficam locais.
  Alinhamento mobile único à direita é a concessão proposta para Teacher; sem prop por produto.
- Provar antes/depois com páginas reais, fixtures locais, rede externa bloqueada e widths reais.
  Capturar todos os documentos e todos os shells afetados; imagens não substituem review humana.
- Preservar os checkouts canônicos e os trabalhos paralelos. Produtos em worktrees persistentes
  .local/langyspace-ui-library-continuous, UI no worktree R01 já existente.

## Tarefas

1. DocumentLayout: contrato, estilos, stories, testes, manifest, API e package smoke.
2. Adoção dos documentos nos dois portais; navegação/scroll e screenshots comparáveis.
3. NoticeBanner: contrato único, stories, testes, geometria externa local e adoção.
4. Evidências completas, inspeção de API/bundle/diff; candidato com hash e lock mínimo.
5. Atualizar PR UI e abrir drafts dos portais com somente Evidências / Antes / Depois.
6. Registrar SHAs, PRs, URLs de workflows com uma consulta por SHA, handoff e próximo lote.

## Aceitação

Documento sem diferença de texto, tamanho, grade, quebra de linha, sticky ou altura;
retorno e alternância entre termos/privacidade preservam state. Avisos não alteram lifecycle,
não disparam reload automático e preservam callbacks, nomes acessíveis e safe areas.
Exceção de bundle precisa medição e justificativa explícita, sem desativar controles existentes.

Revisão humana pendente para cada PR. CI ampla e deploy não serão monitorados.
