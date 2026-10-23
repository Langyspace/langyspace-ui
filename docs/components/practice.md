# Prática, flashcards, quiz e shadowing

Escolha componentes pela anatomia real, mantendo conteúdo e regras no produto. Esses contratos podem compor sessões grandes sem depender de Firebase, Router, áudio ou scheduler na UI.

## Flashcard com composição explícita

```tsx
import { useEffect, useRef, useState } from 'react'
import {
  FlashcardAudioButton,
  FlashcardBack,
  FlashcardDeck,
  FlashcardFace,
  FlashcardFlip,
  FlashcardFlipButton,
  FlashcardFrame,
  FlashcardFront,
  FlashcardImagePanel,
  FlashcardRatingButton,
  FlashcardStage,
  FlashcardSwiper,
  FlashcardWord,
} from '@langyspace/ui'

interface VocabularyExampleProps {
  onPlay: () => void
  onRate: () => void
}

export function VocabularyExample({ onPlay, onRate }: VocabularyExampleProps) {
  const [flipped, setFlipped] = useState(false)
  const ratingRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (flipped) ratingRef.current?.focus()
  }, [flipped])

  return (
    <FlashcardFrame aria-label="Exemplo de vocabulário">
      <FlashcardStage>
        <FlashcardDeck>
          <FlashcardSwiper>
            <FlashcardFlip flipped={flipped}>
              <FlashcardFace side="front">
                <FlashcardFront>
                  <FlashcardFlipButton
                    label="Virar card"
                    onClick={() => setFlipped(true)}
                  />
                  <FlashcardImagePanel emoji="🐦">
                    <FlashcardAudioButton label="Ouvir bird" onClick={onPlay} />
                  </FlashcardImagePanel>
                  <FlashcardWord phonetic="/bɜːrd/">bird</FlashcardWord>
                </FlashcardFront>
              </FlashcardFace>
              <FlashcardFace side="back">
                <FlashcardBack
                  term={
                    <>
                      <FlashcardAudioButton
                        placement="term"
                        label="Ouvir bird"
                        onClick={onPlay}
                      />
                      bird
                    </>
                  }
                  phonetic="/bɜːrd/"
                  translation="pássaro"
                  example={
                    <>
                      A <b>bird</b> sings.
                    </>
                  }
                />
              </FlashcardFace>
            </FlashcardFlip>
          </FlashcardSwiper>
        </FlashcardDeck>
      </FlashcardStage>
      {flipped && (
        <FlashcardRatingButton
          ref={ratingRef}
          grade="good"
          interval="amanhã"
          onClick={onRate}
        >
          Bom
        </FlashcardRatingButton>
      )}
    </FlashcardFrame>
  )
}
```

O exemplo usa a composição atual de vocabulário. O produto decide transições, saída, retorno de foco e persistência. A face inativa fica inert/aria-hidden; os comandos de virar e ouvir são irmãos. FlashcardFrame define o contexto CSS da família; não é necessário um ThemeProvider externo. Imagens e áudio reais têm tratamento de falhas no produto.

FlashcardWord/Back/Feedback possuem sua anatomia: os consumidores não escrevem classes word/en/translation/message. São poucos slots estáveis de conteúdo; não há flags por projeto, componente fabricado por schema nem export público para cada linha tipográfica. FlashcardAudioButton substitui a mesma apresentação de pronúncia nos dois produtos.

## Resultado com JSX aberto

```tsx
import { Button, PracticeResultPanel } from '@langyspace/ui'

export function CompletedPractice({ onExit }: { onExit: () => void }) {
  return (
    <PracticeResultPanel
      heading="Prática concluída"
      description="Seu progresso foi registrado."
      actions={<Button onClick={onExit}>Voltar</Button>}
    />
  )
}
```

A copy de persistência só deve aparecer quando o produto confirmou a gravação. A biblioteca apenas apresenta o conteúdo e as ações recebidas.

## FlashcardBack

Conteúdo do verso: termo, pronúncia, tradução e exemplo.

Contrato: term e translation; phonetic/example opcionais; atributos/ref de div.

Cuidados: O produto entrega texto rico e áudio no slot term. Não montar classes en/divider/translation/example; são elementos privados. Não buscar tradução ou áudio aqui.

## FlashcardDeck

Pilha e altura responsiva do cartão.

Contrato: children e atributos/ref de div.

Cuidados: Depende das variáveis de FlashcardFrame. Compor Ghost e Swiper; não receber lista de cartões ou implementar scheduler.

## FlashcardFace

Face visual de frente ou verso.

Contrato: side e atributos/ref/children de div.

Cuidados: Dentro de FlashcardFlip, o lado inativo recebe inert/aria-hidden. Standalone continua disponível para o showcase da landing. Não exigir classes front/back.

## FlashcardFeedback

Confirmação visual da avaliação e próximo passo.

Contrato: grade, mark, children como mensagem; next opcional e atributos/ref de div.

Cuidados: A UI possui cor/glow por grade. Produto fornece copy/intervalo e salva progresso. O próximo passo tem aria-live polite; não adicionar outro anúncio duplicado.

## FlashcardFlip

Rotação controlada e contexto privado do lado ativo.

Contrato: flipped e atributos/ref/children de div.

Cuidados: Não gerencia quando virar ou avaliar. Compor Face por side; contexto contém só o boolean visual, sem dados ou regras de aprendizagem. Reduced motion preservado.

## FlashcardFlipHint

Dica visual de que o cartão pode ser virado.

Contrato: children e atributos/ref de div.

Cuidados: Conteúdo decorativo pode usar aria-hidden; o comando acessível é FlashcardFlipButton. Não transformar a dica em botão genérico com role.

## FlashcardFrame

Escopo de cores e geometria da sessão de flashcards.

Contrato: children e atributos/ref de section.

Cuidados: Define as variáveis --fc-* existentes para os filhos, com proveniência documentada no próprio owner. Não exige tema global; não converter cada variável em prop pública.

Os defaults abaixo pertencem a FlashcardFrame e são herdados pelos filhos. Student e Teacher mantêm apenas os overrides de geometria de página e media queries existentes; não precisam de ThemeProvider para estes valores. As cores continuam vindo dos tokens públicos ou de cores locais de prática já existentes.

| Variável                     | Default exato                                                                          | Origem                        |
| ---------------------------- | -------------------------------------------------------------------------------------- | ----------------------------- |
| `--fc-ink`                   | `#0a0a0a`                                                                              | Token de cor existente        |
| `--fc-ink-2`                 | `#2a2a2a`                                                                              | Token de cor existente        |
| `--fc-muted`                 | `#6b6b6b`                                                                              | Token de cor existente        |
| `--fc-muted-2`               | `#6b6b6b`                                                                              | Token de cor existente        |
| `--fc-line`                  | `#ececea`                                                                              | Token de cor existente        |
| `--fc-line-strong`           | `#d9d9d6`                                                                              | Token de cor existente        |
| `--fc-pink`                  | `#ff1f5c`                                                                              | Token de cor existente        |
| `--fc-pink-soft`             | `#ffe1ec`                                                                              | Token de cor existente        |
| `--fc-pink-tint`             | `#fff4f7`                                                                              | Token de cor existente        |
| `--fc-bg-soft`               | `#fafaf9`                                                                              | Token de cor existente        |
| `--fc-paper`                 | `#fffdfb`                                                                              | Receita de prática preservada |
| `--fc-green`                 | `#16a34a`                                                                              | Token de cor existente        |
| `--fc-green-soft`            | `#dcfce7`                                                                              | Token de cor existente        |
| `--fc-amber`                 | `#d97706`                                                                              | Receita de prática preservada |
| `--fc-amber-soft`            | `#fff3e0`                                                                              | Receita de prática preservada |
| `--fc-red`                   | `#e11d48`                                                                              | Receita de prática preservada |
| `--fc-red-soft`              | `#fef0f2`                                                                              | Receita de prática preservada |
| `--fc-card-min-height`       | `22rem`                                                                                | Receita de prática preservada |
| `--fc-card-fluid-height`     | `52svh`                                                                                | Receita de prática preservada |
| `--fc-card-max-height`       | `27.875rem`                                                                            | Receita de prática preservada |
| `--fc-stage-padding-block`   | `0.25rem 0.375rem`                                                                     | Receita de prática preservada |
| `--fc-stage-padding-inline`  | `1.375rem`                                                                             | Receita de prática preservada |
| `--fc-footer-min-height`     | `9.5rem`                                                                               | Receita de prática preservada |
| `--fc-footer-padding-block`  | `0.75rem calc(var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px)) + 1rem)` | Receita de prática preservada |
| `--fc-footer-padding-inline` | `1.125rem`                                                                             | Receita de prática preservada |
| `--fc-rate-row-gap`          | `0.5625rem`                                                                            | Receita de prática preservada |
| `--fc-rate-question-margin`  | `0.75rem`                                                                              | Receita de prática preservada |
| `--fc-front-padding`         | `1.375rem 1.375rem 1.125rem`                                                           | Receita de prática preservada |
| `--fc-back-padding`          | `1.625rem`                                                                             | Receita de prática preservada |
| `--fc-image-panel-size`      | `clamp(9.5rem, 23svh, 12.25rem)`                                                       | Receita de prática preservada |
| `--fc-image-panel-width`     | `100%`                                                                                 | Receita de prática preservada |
| `--fc-image-panel-height`    | `var(--fc-image-panel-size)`                                                           | Receita de prática preservada |
| `--fc-card-image-size`       | `min(100%, 11.25rem)`                                                                  | Receita de prática preservada |
| `--fc-word-zone-gap`         | `0.5rem`                                                                               | Receita de prática preservada |
| `--fc-word-zone-justify`     | `center`                                                                               | Receita de prática preservada |
| `--fc-word-zone-margin-top`  | `0`                                                                                    | Receita de prática preservada |
| `--fc-word-zone-offset-y`    | `0`                                                                                    | Receita de prática preservada |
| `--fc-word-font-size`        | `2.125rem`                                                                             | Receita de prática preservada |
| `--fc-back-translation-size` | `1.6875rem`                                                                            | Receita de prática preservada |

`--safe-area-inset-bottom` é um override opcional do consumidor. Sem ele, o cálculo usa `env(safe-area-inset-bottom, 0px)`; a receita continua válida sem CSS global. O browser verifica default, override de24px e restauração. Não trocar esses contratos existentes por props de layout individuais.

## FlashcardFront

Layout da frente e contexto de posicionamento do comando e áudio.

Contrato: children e atributos/ref de div.

Cuidados: Compor FlipButton, ImagePanel, Word e FlipHint. O áudio precisa ficar acima do comando de virar; verificar no browser, sem botões aninhados.

## FlashcardGhost

Camada decorativa atrás do cartão.

Contrato: layer1/2, obscured e atributos/ref de div.

Cuidados: Usar aria-hidden no uso decorativo. Camadas desaparecem durante saída/verso para evitar vazamento da pilha; não associar regras de fila ao componente.

## FlashcardImagePanel

Área visual da imagem ou emoji e ação de áudio.

Contrato: emoji opcional, children e atributos/ref de div.

Cuidados: Emoji tem apresentação e ocultação acessível internas. Produto escolhe imagem/fallback e trata falha de mídia; imagem meramente ilustrativa usa alt vazio.

## FlashcardRatingButton

Comando de avaliação com intervalo estimado.

Contrato: grade, interval, selected e atributos/ref/children de button.

Cuidados: Produto calcula intervalos e bloqueia salvamento. As quatro avaliações têm receitas reais; label acessível pode incluir intervalo. Reduced motion e viewport curto são preservados.

## FlashcardStage

Área com perspectiva e espaço para a pilha.

Contrato: children e atributos/ref de div.

Cuidados: Compor dentro de Frame; não conhece cartão ou dados. Breakpoint900px altera distribuição de espaço, sem nova prop de projeto.

## FlashcardSwiper

Camada visual de entrada/saída e gestos do cartão.

Contrato: `exit` (`{ rotate, x, y }`, inicia a animação de saída nessa direção) e atributos/ref/children de div.

Cuidados: Produto fornece vetores de saída/gestos; comando de virar fica no botão nativo irmão do áudio. Retirar role/click/keydown genéricos dos consumidores.

## FlashcardWord

Termo principal com fonética e exemplo opcional.

Contrato: children como termo; phonetic/example e atributos/ref de div.

Cuidados: A UI monta palavra, divisor e slots; remover word/rule/phonetic/exampleHint dos produtos. Skeleton usa conteúdo nos mesmos slots, sem inventar markup privado.

## PracticeCard

Comando que abre uma atividade.

Contrato: completed e atributos/ref/children de button.

Cuidados: Compor Cover e Body, sem comandos internos. Produto fornece destino/ação e estado concluído; não buscar conteúdo no card.

## PracticeCardBody

Título, metadados e progresso de uma atividade.

Contrato: title, leadingMeta/trailingMeta, value e completed.

Cuidados: O produto formata metadados e progresso0–1; usar em PracticeCard. Anatomia fixa evita repetir h3/meta/barra e dispensa flags por atividade.

## PracticeCardCover

Capa visual da atividade.

Contrato: children e atributos/ref de div.

Cuidados: Compor Label/Value/LevelBadge dentro do card; cores/ilustração de conteúdo específicas podem vir do produto. Preservar proporção16:9 mobile.

## PracticeCardSkeletonBody

Placeholder da anatomia Body durante carregamento.

Contrato: Atributos/ref de div; sem children/role/tabIndex.

Cuidados: Decorativo aria-hidden. O dono anuncia carregamento uma vez na região, sem transformar cada linha animada em status. Reduced motion desativa shimmer.

## PracticeLevelBadge

Nível de dificuldade na capa.

Contrato: children e atributos/ref de span.

Cuidados: Produto fornece nível já determinado; não calcular proficiência no componente. Contraste assume a capa escura.

## PracticePlaybackControls

Comandos de play, velocidade, tradução e skip opcional.

Contrato: playing/playLabel/onPlay; speed/options/onSpeedChange; translationVisible/onTranslationToggle; skipAction.

Cuidados: Produto controla áudio, tempo, sequência e idiomas. Opções de velocidade são dados, não flags; manter aria-pressed e botões nativos. A receita privada mantém tamanhos/breakpoints exatos.

## PracticeProgressBar

Barra estritamente visual de progresso0–1.

Contrato: value e atributos/ref de div.

Cuidados: Clamp e valores não finitos protegem CSS, sem inferir progresso de negócio. aria-hidden exige texto/contador acessível no dono; não duplicar progressbar anunciado.

## PracticeResultPanel

Resultado de uma sessão: heading, description, icon e actions são regiões estáveis; children recebe métricas e feedback do produto. title continua o atributo HTML nativo. null em icon suprime a marca padrão.

Parágrafos nativos diretamente em children recebem a tipografia de descrição. O produto pode usar `<p role="status">` ou `<p role="alert">` e controla persistência, copy e condições. A biblioteca não interpreta estados de conclusão do domínio.

## QuizBadge

Identificação compacta do quiz.

Contrato: children e atributos/ref de span.

Cuidados: Conteúdo não interativo; não inserir outro comando. Cores têm fallback e podem herdar contexto quiz existente.

## QuizBlank

Lacuna visual na pergunta.

Contrato: Atributos/ref de span; aria-label opcional.

Cuidados: Com aria-label vira imagem nomeada; sem nome é decorativo. Produto deve tornar a pergunta compreensível para leitor de tela sem expor a resposta.

## QuizFeedback

Feedback de resposta correta/incorreta.

Contrato: tone correct/wrong e atributos/ref/children de div.

Cuidados: UI fornece marca visual; produto decide resposta, texto e anúncio. Não misturar com estado de carregamento nem incluir correção de domínio.

## QuizMetadata

Grupo de informações auxiliares do exercício.

Contrato: children e atributos/ref de div.

Cuidados: Conteúdo textual explícito; produto formata e determina nível/categoria. Não receber schema arbitrário de metadados.

## QuizOption

Comando de escolha com letra e estado de correção.

Contrato: letter, state default/correct/wrong/dim e atributos/ref/children de button.

Cuidados: Produto avalia e desabilita escolhas após resposta. dim altera aparência, não bloqueia por si só; isso deve ser explícito. Não aninhar links/botões no texto.

## QuizPromptHeader

Alinha identificação e metadados da pergunta.

Contrato: children e atributos/ref de div.

Cuidados: Compor Badge/Metadata; em640px o fluxo vira coluna. Sem props de alinhamento por tela.

## QuizQuestion

Área de texto e lacunas da pergunta.

Contrato: children e atributos/ref de div.

Cuidados: Produto compõe texto/QuizBlank; largura mínima zero e typography responsiva preservadas. Não inserir regra para ocultar resposta na apresentação.

## QuizSessionHeader

Voltar, identificação, contador e progresso de sessão.

Contrato: name, counter, progress, backLabel/onBack.

Cuidados: Produto controla navegação/índice; UI monta comando nativo e barra decorativa. Não buscar estado da sessão por Context de produto.

## SessionProgress

Nome, contador e progresso textual/visual.

Contrato: name, counter, value e atributos/ref de div.

Cuidados: Pode compor headers que não precisam de voltar. Compartilha PracticeProgressBar sem forçar uma variante com botão.

## ShadowingActivePhrase

Frase de leitura atual e skeleton equivalente.

Contrato: children e atributos/ref de div.

Cuidados: Compor palavras explícitas; produto calcula tempo e estado atual. Tamanhos especiais em viewport médio/alto preservam legibilidade.

## ShadowingContextPhrase

Frase anterior ou seguinte para contexto.

Contrato: children e atributos/ref de div.

Cuidados: Não sabe qual é a próxima frase; produto fornece conteúdo. Preservar altura mínima mesmo no começo/fim da sequência.

## ShadowingControlCluster

Agrupa controles de reprodução na prática.

Contrato: children e atributos/ref de div.

Cuidados: Layout contextual sem dados de áudio; pode envolver conteúdo que não seja o preset PlaybackControls, sem flags de shell.

## ShadowingControlDock

Área fixa no fluxo para repetição e controles.

Contrato: children e atributos/ref de div.

Cuidados: Produto compõe Repetitions/PlaybackControls. Preservar espaço, borda e breakpoints; não implementar overlay/position fixed por prop.

## ShadowingPhraseStack

Agrupa contexto e frase ativa com entrada opcional.

Contrato: rising e atributos/ref/children de div.

Cuidados: Produto sinaliza transição; animação respeita reduced motion. Não temporizar áudio ou progressão internamente.

## ShadowingReader

Área de leitura e tradução da sessão.

Contrato: children e atributos/ref de div.

Cuidados: Compor PhraseStack/Translation. Geometria responsiva pertence ao componente; frase/áudio/progresso permanecem externos.

## ShadowingRepetitions

Marcadores de repetição e legenda.

Contrato: total, value, playing e atributos/ref/children de div.

Cuidados: Quantidade é sanitizada para inteiro não negativo; produto determina repetição e copy. Pontos são decorativos; legenda deve informar contagem real.

## ShadowingTranslation

Reserva visual e conteúdo da tradução.

Contrato: children e atributos/ref de div.

Cuidados: UI monta Content próprio quando há conteúdo; produto fornece texto rico diretamente e decide visibilidade. Nenhum div externo é exigido nem todos os descendentes são estilizados.

## ShadowingWord

Palavra da frase com destaque de reprodução.

Contrato: state pending/current/spoken e atributos/ref/children de span.

Cuidados: Produto calcula alinhamento temporal. Compor espaços/pontuação explicitamente para não colar palavras; reduced motion preservado.

## FlashcardFlipButton

Comando nativo para virar o cartão, independente do áudio.

Contrato: label e atributos/ref de button; type fixo button e sem children.

Cuidados: Inserir dentro de FlashcardFront; áudio posicionado acima. Produto move foco às avaliações ao virar. Não usar role=button no Swiper nem capturar Enter dos controles internos.

## FlashcardAudioButton

Comando de pronúncia compartilhado entre imagem e termo.

Contrato: label, placement image/term, playing e atributos/ref de button.

Cuidados: A UI possui ícone, posição, dimensões, foco e reduced motion. Produto executa/carrega áudio e decide disponibilidade; nenhum fetching, scheduler ou stopPropagation implícito. Acima de FlipButton no contexto de Front.

## FlashcardWordSkeleton

Placeholder da anatomia de palavra/fonetica nos dois produtos.

Contrato: atributos/ref de div; sem children, role ou tabIndex. aria-hidden interno.

Cuidados: inserir no Front durante pre-carregamento. O produto mantem status/saida/erros; UI compartilha apenas o layout privado de Word e o Skeleton existente. Dimensoes preservadas, cinza do Student padronizado conforme tasks/09-2-word-skeleton.md.

## ShadowingPanel

Painel de prática de fala/música, composto com um `header`, `ShadowingReader` e `ShadowingControlDock` como filhos diretos. Recebe somente atributos nativos de `div`; o produto controla dados, reprodução, tradução e progresso. O container fornece a altura disponível no shell mobile. Em viewport largo e baixo (640–900 px e até 500 px de altura), mantém cabeçalho acima, leitor à esquerda e controles à direita. O leitor rola conteúdo longo sem deslocar as ações. Em retrato e desktop mantém composição vertical.

```tsx
<ShadowingPanel>
  <header>{sessionNavigation}</header>
  <ShadowingReader>{phrasesAndTranslation}</ShadowingReader>
  <ShadowingControlDock>{playbackControls}</ShadowingControlDock>
</ShadowingPanel>
```

FlashcardFrame segue a mesma distribuição compacta com `header`, `FlashcardStage` e `footer` diretos. A altura do frame deve vir do espaço disponível; FlashcardDeck limita o cartão a esse espaço. Frente/verso preservam rolagem de conteúdo quando necessário.

## FlashcardProgress

Progresso segmentado e contador são uma unidade com label obrigatório. Current/total vêm do produto; revealed/complete definem a apresentação do passo atual/conclusão. loading usa quatro segmentos skeleton e um contador oculto.

O progresso é exposto como progressbar com limites finitos; loading é indeterminado e busy. Zero/valores não finitos são limitados sem inventar dados da sessão. A UI limita a apresentação a 20 segmentos e não agenda revisões nem persiste progresso.
