# Composição React dos contratos

O produto continua legível pelo JSX. A UI oferece os elementos que desenham a interface; o consumidor fornece dados, texto e callbacks. Native attrs/ref continuam disponíveis. Não há prop de produto, configuração de página ou model financeiro dentro da biblioteca.

```tsx
<AuthEyebrow>Área de acesso</AuthEyebrow>
<AuthTitle>
  Entre na <AuthAccent>Langy.space</AuthAccent>
</AuthTitle>
<AuthDescription>Use seu celular para continuar.</AuthDescription>
<AuthForm onSubmit={handleSubmit}>
  <PhoneField {...phoneFieldProps} />
  <AuthSubmitButton disabled={isSubmitting}>Continuar</AuthSubmitButton>
</AuthForm>
```

O exemplo ocorre dentro de AuthFrame, cuja estrutura brand/mobileLogo/topAction/footer já foi revisada anteriormente. Steps, OTP, autenticação, timers e navegação permanecem no produto.

```tsx
<PracticeResultPanel>
  <PracticeResultMark />
  <PracticeResultTitle>Resultado</PracticeResultTitle>
  <PracticeResultDescription>{resultDescription}</PracticeResultDescription>
  <MetricSummary>
    <MetricValue>{correctAnswers}</MetricValue>
    <MetricLabel>Acertos</MetricLabel>
  </MetricSummary>
  <PracticeResultActions>
    <Button type="button" onClick={retry}>
      Refazer
    </Button>
    <Button type="button" variant="secondary" onClick={close}>
      Voltar para lista
    </Button>
  </PracticeResultActions>
</PracticeResultPanel>
```

O resultado não recebe uma árvore de configuração com title/actions/metrics. É uma composição explícita. Cálculo, persistência e tentativas continuam no controlador do produto. A alteração é feita na versão candidata ainda não publicada; a API oficial1.20.0 não tinha PracticeResultPanel.

```tsx
<PracticeCard completed={completed} onClick={openSession}>
  <PracticeCardCover style={{ background: activityGradient }}>
    <PracticeLevelBadge>{level}</PracticeLevelBadge>
    <div>
      <PracticeCoverValue>{dueCount}</PracticeCoverValue>
      <PracticeCoverLabel>Para revisar</PracticeCoverLabel>
    </div>
  </PracticeCardCover>
  <PracticeCardBody
    title={title}
    leadingMeta={description}
    trailingMeta={progressLabel}
    value={progress}
    completed={completed}
  />
</PracticeCard>
```

O gradiente é uma decisão contextual do curso, fornecida por style nativo; não criamos kind/tone/course/product para copiar a política dos portais. FlashcardProgressTrack/Segment/Counter seguem a mesma divisão: o produto calcula a contagem e fornece os estados pending/current/done; a UI desenha os segmentos. Audio, scheduler, drag, índices e regras de repetição ficam locais.

```tsx
<CalendarDay muted={outsideMonth}>
  <CalendarDayNumber>{dayLabel}</CalendarDayNumber>
  <CalendarEvent tone={presentationTone} onClick={openClass}>
    {timeLabel} {studentLabel}
  </CalendarEvent>
</CalendarDay>
```

Fuso, datas, seleção, permissões e callbacks não migram. TimelineEvent recebe top/height por style nativo, calculados pelo calendário do produto. CalendarTimeSlot usa tom/seleção e atributos nativos; não conhece o enum de agendamento.

NotificationItem e ConversationRow têm regiões estáveis pequenas: identidade, conteúdo, metadata e ação. Eles não recebem thread store, collection ou query. ScheduleRow recebe time/participant/actions; a linha preserva a separação entre abrir a aula e os botões de presença.

CardLink fornece uma âncora com a moldura de Card e foco visível. MaterialLink Teacher adapta useHref/useLinkClickHandler; busca de imagem, materialId, ordenação e copy permanecem em MaterialCard. Não usamos `as={Link}` no wrapper da função UI, pois isso pode pular o componente e perder sua receita.

Geometria de página, plano rico, hero editorial, tabelas operacionais, stores de toast e containers de formulário continuam nos produtos pelas decisões do mapeamento. Publicar Row/Stack de poucas linhas não melhora esse contrato.

ShadowingWord expõe apenas state pending/current/spoken e atributos nativos de span. Os três consumidores traduzem seu wordIndex para state; ShadowingActivePhrase não exige classes on/said. O teste musical continua verificando seek, áudio e avanço de palavras com os mesmos tempos, agora pelo marcador semântico de estado.
