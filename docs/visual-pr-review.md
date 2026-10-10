# PRs visuais e revisão humana

Padrão definido pela product owner em 2026-10-10. Aplica-se a toda alteração com impacto renderizado
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

Usar o [template](../.github/pull_request_template.md), somente com estes títulos:

```markdown
# Evidências

## Antes

## Depois
```

Inserir as imagens de todas as telas afetadas nas duas seções, na mesma ordem. Identificar cada
imagem com um rótulo curto de tela/rota, estado e largura, sem acrescentar outras seções, resumos,
checklists ou planos de teste ao corpo. O título do PR descreve a mudança; decisões técnicas e
validação ficam nos documentos do trabalho e nos checks de CI.

## Evidências comparáveis

Antes de alterar o código, registrar a matriz de telas afetadas e capturar o estado anterior na
baseline do PR. Se a baseline avançar e mudar uma dessas telas, atualizar as capturas do Antes.
Capturar o Depois na revisão atual da branch com os mesmos dados de teste, rota, estado, viewport,
zoom e tema. Registrar SHAs e matriz de evidências nos documentos do trabalho.

Para cada tela afetada, incluir os estados e as larguras em que a mudança pode aparecer. Cobrir
mobile e desktop em telas responsivas, além dos breakpoints relevantes para o componente. Incluir
modais, drawers, loading, vazio, erro, conteúdo longo e estados de interação quando afetados. Usar
capturas da tela com contexto suficiente para avaliar layout, conteúdo e ações; um recorte isolado
do componente não cobre as telas que o usam.

Na biblioteca, capturar as stories e os estados afetados. Em cada PR de produto, capturar suas
telas reais; as imagens do Storybook não substituem essas evidências. Alterações de tokens ou
primitivos exigem mapear todos os consumidores afetados, mesmo sem troca de imports. Adicionar
componente sem estado anterior comparável exige registrar a ausência real na baseline, sem
inventar uma implementação antiga.

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
