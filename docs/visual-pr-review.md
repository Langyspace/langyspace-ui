# PRs visuais e revisão humana

Padrão definido pela product owner em 2026-10-10; formato atualizado em 2026-10-11. Aplica-se a toda alteração com impacto renderizado
direto ou indireto, na UI Library e nos cinco produtos, incluindo migrações que pretendem preservar
a aparência atual.

## Execução no UI, depois adoção nos produtos

Implementar a apresentação e a interação compartilhadas em `langyspace-ui`, com API simples,
stories e cobertura focada. Preparar e revisar o contrato na biblioteca antes de abrir os PRs de
adoção nos produtos. Cada produto fornece dados e ações; mantém páginas, rotas, serviços, regras de
negócio e estado de domínio.

Os PRs dos produtos adotam o componente pronto: versão compatível do pacote, imports, composição,
remoção da duplicação e adaptações pequenas já discutidas. Quando uma API existente bastar, usar
essa API. Não acrescentar props de produto nem implementar novamente o componente no consumidor.

PRs dependentes podem ser preparados em draft depois de a implementação do UI estar pronta,
com candidato imutável e todas as imagens, para permitir avaliação das telas antes do release.
Isso não libera merge nem substitui o artefato oficial aprovado na integração final.

Cada lote deve ser pequeno e revisável. Preparar a biblioteca primeiro não significa juntar todas
as famílias em um PR gigante nem dispensar a revisão das telas dos produtos.

| Repositório          | Base do PR visual |
| -------------------- | ----------------- |
| `langyspace-ui`      | `main`            |
| `langyspace` / Site  | `main`            |
| `langyspace-cupom`   | `main`            |
| `langyspace-admin`   | `staging`         |
| `langyspace-student` | `staging`         |
| `langyspace-teacher` | `staging`         |

Usar branch de trabalho e PR. Alterações visuais não seguem por push direto para a branch de
destino. Em Admin, Student e Teacher, o merge aprovado em `staging` mantém o pipeline existente de
staging e promoção para produção. Publicação de pacote e deploy continuam sujeitos ao escopo
autorizado; este padrão não inicia releases ou migrações por conta própria.

## Corpo padrão do PR

Usar o [template](../.github/pull_request_template.md), somente com `# Evidências` e uma tabela de comparação:

```markdown
# Evidências

| Antes                                                                             | Depois                                                                              |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Tela / rota · estado · 390px**<br><img src="URL_ANTES" alt="Antes" width="400"> | **Tela / rota · estado · 390px**<br><img src="URL_DEPOIS" alt="Depois" width="400"> |
```

Cada linha contém uma comparação: Antes à esquerda e Depois à direita, para a mesma tela,
estado e viewport. Inserir todas as telas afetadas; não separar as imagens em seções distantes.
Usar duas colunas, com imagens da mesma largura de exibição (`width="400"`) e altura proporcional.
Preservar resolução, proporção e arquivos originais; a largura controla apenas a exibição no PR. Identificar cada
imagem com um rótulo curto de tela/rota, estado e largura, sem acrescentar outras seções, resumos,
checklists ou planos de teste ao corpo. O título do PR descreve a mudança; decisões técnicas e
validação ficam nos documentos do trabalho e nos checks de CI.

## Evidências comparáveis

Antes de alterar o código, registrar a matriz de telas afetadas e capturar o estado anterior na
baseline do PR. Se a baseline avançar e mudar uma dessas telas, atualizar as capturas do Antes.
Capturar o Depois na revisão atual da branch com os mesmos dados de teste, rota, estado, viewport,
zoom e tema. Registrar SHAs e matriz de evidências nos documentos do trabalho.

Com modal ou drawer modal aberto, capturar a janela visível do navegador, sem `fullPage`.
O backdrop fixo cobre o viewport; uma imagem de página inteira inclui conteúdo fora dele e pode
dar a impressão de que a sombra foi cortada. Usar `scripts/capture-visual-evidence.mjs` para
selecionar automaticamente viewport quando houver `aria-modal="true"` visível e página inteira
nos demais casos. Não aumentar o backdrop, redimensionar a janela ou editar a imagem para acomodar
o conteúdo fora da tela. Se o modal tiver rolagem interna, registrar o início e o fim em capturas
separadas, mantendo o mesmo viewport no Antes e no Depois.

Para cada tela afetada, incluir os estados e as larguras em que a mudança pode aparecer. Cobrir
mobile e desktop em telas responsivas, além dos breakpoints relevantes para o componente. Incluir
modais, drawers, loading, vazio, erro, conteúdo longo e estados de interação quando afetados. Usar
capturas da tela com contexto suficiente para avaliar layout, conteúdo e ações; um recorte isolado
do componente não cobre as telas que o usam.

Na biblioteca, capturar as stories e os estados afetados. Em cada PR de produto, capturar suas
telas reais; as imagens do Storybook não substituem essas evidências. Alterações de tokens ou
primitivos exigem mapear todos os consumidores afetados, mesmo sem troca de imports. Adicionar
componente sem estado anterior comparável exige registrar a ausência real na baseline, sem
inventar uma implementação antiga. Para uma story realmente nova, escrever “Story nova — sem
versão anterior” na célula Antes e colocar a captura na célula Depois. A comparação da extração
continua exigindo os pares reais dos produtos; essa indicação não substitui capturas de telas
existentes, nem permite omitir um Antes que deveria existir.

Para uma extração nova, o componente existente nos produtos pode servir como Antes do PR do UI,
com origem identificada e uma story equivalente no Depois. Os PRs de adoção continuam exigindo
Antes/Depois das telas completas do próprio produto.

Usar fixtures sanitizadas e estáveis. As imagens devem aparecer no PR e permanecer acessíveis à
reviewer; caminhos locais não servem como anexos. Não expor dados pessoais ou credenciais. Se uma
tela não puder ser capturada, registrar o bloqueio nos documentos e manter o PR em draft; não
apresentar um PR visual incompleto como pronto para review.

## Uma revisão humana por PR

Cada PR visual aguarda aprovação explícita da product owner sobre sua revisão atual antes do
merge. Não habilitar auto-merge. Aprovação de um PR da biblioteca ou de outro produto não aprova
este PR. Checks, screenshots gerados, release ou deploy também não equivalem a aprovação humana.

Se houver nova alteração visual depois da aprovação, atualizar as imagens do Depois e pedir nova
revisão daquele PR. Manter `Visual gate review: pending human` até o aceite explícito; evidência
faltante é `blocked`, com tela, estado e largura identificados. A preparação pode ser entregue para
review enquanto o merge permanece pendente.

Alterações com impacto `none`, como estes documentos sem consumo pelo runtime, não precisam de
imagens artificiais. Este arquivo e os guias definem o procedimento; regras de proteção de branch
no GitHub não foram alteradas por esta documentação.
