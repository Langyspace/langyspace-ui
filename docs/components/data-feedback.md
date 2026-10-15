# Estados, superfícies, dados e métricas

Escolha pela responsabilidade: Card contém, CardLink navega; InlineNotice informa; NoticeBanner contextualiza com ações; StatePanel descreve o estado de uma área. MetricSummary é uma métrica compacta de prática; StatCard é uma estatística operacional com outra hierarquia.

## Composição de métricas

```tsx
import {
  Button,
  MetricLabel,
  MetricSummary,
  MetricValue,
  StatAction,
  StatCard,
  StatLabel,
  StatValue,
} from '@langyspace/ui'

interface SummaryProps {
  correctAnswers: number
  revenueLabel: string
  onRefresh: () => void
}

export function Summary({
  correctAnswers,
  revenueLabel,
  onRefresh,
}: SummaryProps) {
  return (
    <>
      <MetricSummary>
        <MetricValue>{correctAnswers}</MetricValue>
        <MetricLabel>Acertos</MetricLabel>
      </MetricSummary>
      <StatCard>
        <StatAction>
          <Button onClick={onRefresh}>Atualizar</Button>
        </StatAction>
        <StatValue>{revenueLabel}</StatValue>
        <StatLabel>Receita</StatLabel>
      </StatCard>
    </>
  )
}
```

MetricSummary define o ritmo dos filhos públicos por marcadores internos; não é necessário escrever classes value/label. StatAction é opcional e aparece imediatamente antes de StatValue para reservar espaço. São contratos de composição explícitos, cobertos por testes de uso conjunto. A grade externa e os cálculos/formatos continuam no produto.

## Comando e ações de uma aula

```tsx
import { Button, ScheduleRow } from '@langyspace/ui'

interface LessonRowProps {
  participant: string
  timeLabel: string
  onOpen: () => void
  onMark: () => void
}

export function LessonRow({
  participant,
  timeLabel,
  onOpen,
  onMark,
}: LessonRowProps) {
  return (
    <ScheduleRow
      time={timeLabel}
      participant={<span>{participant}</span>}
      openLabel={`Abrir aula de ${participant}`}
      onOpen={onOpen}
      actions={<Button onClick={onMark}>Marcar presença</Button>}
    />
  )
}
```

O exemplo corresponde ao candidato 2.0.0 ainda não publicado. O comando principal e a ação têm semântica/foco de buttons nativos; Enter/Espaço não dependem de um handler genérico no container. O produto preserva suas regras e fornece as ações.

## Dados repetidos e composição

OperationalList/KeyValueList/gráficos recebem coleções de dados por sua própria natureza; isso evita duplicar renderização de linhas/barras. A função de célula de uma tabela continua retornando ReactNode e a apresentação do componente permanece JSX direto. Essa configuração de coleção não é um padrão para gerar formulários/telas arbitrárias ou substituir children de conteúdo aberto.

## Card

Superfície não interativa com espaçamento, borda, raio e sombra compartilhados.

Contrato: Atributos/ref/children de div.

Cuidados: Conteúdo e grid da página são externos. Para navegação, escolher CardLink em vez de adicionar click/role de botão ao card.

## CardLink

Âncora com a mesma receita de superfície de Card e foco/hover de navegação.

Contrato: Atributos/ref/children de a.

Cuidados: O produto fornece href/bridge de Router; não substituir o owner por as={Link} se isso pular a receita.

## DefinitionItem

Bloco de leitura com identificação e valor destacados, usado em dados de perfil.

Contrato: label, value, valueTitle e atributos/ref de div.

Cuidados: O produto formata o valor. Não unificar com DetailRow por flags para ícone/ação/densidade: as anatomias têm funções diferentes.

## DetailRow

Linha compacta de detalhe com ícone opcional, identificação, valor e ação independente.

Contrato: label, value, icon, action e atributos/ref de div.

Cuidados: Ícone é decorativo; botões/links em action têm seus próprios nomes e callbacks. O container não deve se tornar outro comando envolvendo a ação.

## EmptyState

Estado vazio como preset semântico de StatePanel.

Contrato: Props de StatePanel exceto state.

Cuidados: Conteúdo/ação vêm do produto. Não duplicar a receita de StatePanel nem confundir vazio com carregamento.

## GroupedBarChart

Grupos de barras por item, com descrição acessível e navegação Home/End na região rolável.

Contrato: items com id/label/description/values e atributos/ref de div.

Cuidados: Fornecer aria-label/aria-labelledby à região; description explica as séries além da cor. A UI escala a geometria, não calcula métricas de negócio.

## InlineNotice

Aviso simples inline, com conteúdo React aberto e aparência neutra.

Contrato: children e atributos/ref de div.

Cuidados: Não anuncia todo conteúdo automaticamente. O consumidor atribui role/status quando a atualização realmente exigir anúncio.

## KeyValueList

Lista curta de pares label/value para leitura de resultados e ranking.

Contrato: items com id, label/value ReactNode e atributos/ref de div.

Cuidados: Os estilos pertencem aos wrappers de label/value; conteúdo rico mantém sua própria apresentação. Não importar sorting/permissões de uma tabela operacional para essa lista.

## LoadingState

Estado de espera com Spinner decorativo e semântica de status/busy fornecida por StatePanel.

Contrato: Props de StatePanel exceto icon/state.

Cuidados: Não anunciar o Spinner separadamente nem fornecer porcentagem fictícia; o produto determina quando a espera termina.

## MetricLabel

Identificação de uma métrica compacta de prática.

Contrato: children e atributos/ref de div.

Cuidados: Usar em MetricSummary, que determina tipografia/ritmo da família. Não depende de uma classe value/label escrita manualmente pelo produto.

## MetricSummary

Unidade compacta de métrica com MetricValue e MetricLabel compostos como JSX.

Contrato: children e atributos/ref de div.

Cuidados: A família define estilo por marcadores internos dos componentes públicos; usar Value/Label, sem fabricar esses data attributes. A grade entre métricas permanece no produto.

## MetricValue

Conteúdo principal de uma métrica compacta de prática.

Contrato: children e atributos/ref de div.

Cuidados: Valor já calculado/formatado é fornecido pelo produto; o estilo de contexto vem de MetricSummary. Não mover cálculo de score ou progresso para a UI.

## NoticeBanner

Aviso de contexto com ícone, título, corpo e grupo de ações, em aside responsivo.

Contrato: icon, title, actions opcional, children e atributos/ref de aside.

Cuidados: Não confundir com alerta de erro de formulário ou estado vazio. O consumidor fornece o nome acessível dos controles e esconde glyph decorativo quando necessário.

## OperationalList

Tabela operacional com coluna principal, colunas de dados, sorting controlado e ações normalizadas por linha.

Contrato: items/getItemKey, primaryColumn/columns, getActions, density, emptyState/footer e nome acessível.

Cuidados: Dados/colunas são configuração de uma coleção tipada, não schema de página. Sorting, navegação e permissões são callbacks externos. Header/Row/RowActions privados revelam a anatomia React sem ampliar a API.

## PageDescription

Descrição textual da página abaixo do título principal.

Contrato: children e atributos/ref de p.

Cuidados: Conteúdo e limites da página são externos. Não usar a descrição para substituir uma mensagem de erro/estado.

## PageTitle

Heading principal h1 da página, com espaço para conteúdo inline e glyph.

Contrato: children e atributos/ref de h1.

Cuidados: Usar SectionHeader para subdivisões. Não criar uma prop de tipo de página para escolher aparência por produto.

## ScheduleRow

Linha com comando principal nativo para tempo/participante e ações secundárias irmãs.

Contrato: time, participant, actions, muted, onOpen, openLabel e atributos/ref não interativos do container.

Cuidados: Candidato 2.0.0: onOpen/openLabel substituem role/tabIndex/onClick/onKeyDown no wrapper. time/participant usam conteúdo phrasing, sem controles; ações recebem buttons/links independentes. O domínio decide abrir/Meet/presença.

## SectionHeader

Título de seção com nível semântico e regiões estáveis de metadados/ações.

Contrato: title, headingLevel 2/3/4, meta, actions, spacing default/flush e attrs de div.

Cuidados: A grade quebra conforme o espaço; manter a ordem dos comandos e a hierarquia. Não substituir PageTitle h1 com mais uma flag.

## Skeleton

Placeholder decorativo em linha ou círculo, com movimento reduzido respeitado.

Contrato: shape e atributos/ref de span, sem children/aria-hidden configurável.

Cuidados: A geometria contextual pode vir por style nativo. O anúncio de carregamento fica no estado/área externa, não em cada placeholder.

## Spinner

Indicador decorativo de espera que herda cor e pode acompanhar o tamanho do texto.

Contrato: size inherit/sm/md/lg e attrs/ref de span sem papel/nome/children acessíveis próprios.

Cuidados: O label e o estado busy pertencem ao comando ou ao status externo. Não criar múltiplos anúncios da mesma espera.

## StatAction

Posição da ação opcional no card estatístico.

Contrato: children e atributos/ref de div.

Cuidados: Compor antes de StatValue dentro de StatCard para reservar o espaço do valor; o container não executa a ação por si.

## StatCard

Card de estatística operacional/financeira com faixa e tom neutral/brand.

Contrato: tone e atributos/ref/children de div.

Cuidados: Compor Action opcional, Value e Label. Não unificar com MetricSummary por flags: as hierarquias/tipografias são diferentes e já aprovadas.

## StatLabel

Identificação em caixa alta da estatística operacional.

Contrato: children e atributos/ref de div.

Cuidados: A cor acompanha o tom do StatCard ancestral. Não usar como rótulo genérico fora dessa composição.

## StatValue

Valor principal da estatística operacional, com hierarquia tipográfica maior.

Contrato: children e atributos/ref de div.

Cuidados: O produto formata números/currency. Se houver StatAction, colocá-lo imediatamente antes de Value para preservar a reserva de espaço prevista na anatomia.

## StatePanel

Estado de conteúdo empty/error/loading/partial com anatomia fixa de ícone, título, descrição e ação.

Contrato: state, title, description, icon, action, density, surface, fill e attrs de div.

Cuidados: Estado determina alert/status/busy; não traduzir enums de negócio dentro da UI. Usar EmptyState/LoadingState quando o preset comunica melhor a intenção.

## StatusChip

Identificação compacta de estado por texto e tom semântico, com ícone/indicador opcionais.

Contrato: tone, size, iconStart, indicator, title, children e attrs de span.

Cuidados: O produto traduz seu enum para tom/texto. Cor não substitui o rótulo; fornecer title explícito para conteúdo rico quando houver truncamento.

## WeeklyCountChart

Apresentação de sete contagens com destaque do item ativo e descrição acessível por dia.

Contrato: items com id/label/value/active e atributos/ref de div.

Cuidados: A UI calcula apenas a escala visual; data atual, agregação e regra de presença continuam no produto. Não consultar calendário nem inferir negócio no gráfico.
