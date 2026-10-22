import { execFileSync } from 'node:child_process'
import {
  copyFile,
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const externalPackageSpec = process.argv
  .slice(2)
  .find((argument) => argument !== '--')
const smokeRoot = await mkdtemp(join(tmpdir(), 'langyspace-ui-smoke-'))
const packageDirectory = join(smokeRoot, 'package')
const consumerDirectory = join(smokeRoot, 'consumer')

function run(command, args, cwd) {
  execFileSync(command, args, {
    cwd,
    env: { ...process.env, CI: '1' },
    stdio: 'inherit',
  })
}

async function createLocalPackageSpec() {
  await mkdir(packageDirectory, { recursive: true })
  run('pnpm', ['pack', '--pack-destination', packageDirectory], root)

  const tarballs = (await readdir(packageDirectory)).filter((file) =>
    file.endsWith('.tgz'),
  )

  if (tarballs.length !== 1) {
    throw new Error(`expected_one_package_tarball_received_${tarballs.length}`)
  }

  return pathToFileURL(join(packageDirectory, tarballs[0])).href
}

async function writeConsumer(packageSpec) {
  await mkdir(join(consumerDirectory, 'src'), { recursive: true })
  await writeFile(
    join(consumerDirectory, 'package.json'),
    `${JSON.stringify(
      {
        name: 'langyspace-ui-smoke-consumer',
        private: true,
        type: 'module',
        scripts: { build: 'tsc -b && vite build' },
        dependencies: {
          '@langyspace/ui': packageSpec,
          react: '19.2.5',
          'react-dom': '19.2.5',
          'react-hook-form': '^7.73.1',
          'styled-components': '^6.4.0',
        },
        devDependencies: {
          '@types/react': '19.2.14',
          '@types/react-dom': '19.2.3',
          '@vitejs/plugin-react': '6.0.1',
          typescript: '6.0.2',
          vite: '8.0.9',
        },
      },
      null,
      2,
    )}\n`,
  )
  await writeFile(
    join(consumerDirectory, 'index.html'),
    '<!doctype html><html><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>\n',
  )
  await writeFile(
    join(consumerDirectory, 'src', 'main.tsx'),
    `import { ScheduleCalendar, AuthBrandContent, AuthFooter, AuthHeader, AuthActions, FlashcardProgress, BrandLogo, DocumentHeader, DocumentHeaderContent, DocumentNavigation, BrandLink, DocumentNavigationLink, FormStack, FieldLabelRow, FieldCounter, FormError, FormActions, FilterSelect, FileInput, InlineNotice, StatCard, DefinitionItem, DetailRow, MetricSummary, SidebarFrame, SidebarNavigation, NavigationLink, NavigationButton, NotificationItem, ConversationRow, BottomNavigation, BottomNavigationLink, CalendarScroller, FlashcardAudioButton, FlashcardFlipButton, FlashcardWordSkeleton, FlashcardFrame, FlashcardStage, FlashcardDeck, FlashcardFront, FlashcardImagePanel, FlashcardWord, FlashcardBack, FlashcardFlipHint, FlashcardFace, FlashcardGhost, FlashcardFlip, FlashcardSwiper, FlashcardFeedback, KeyValueList, GroupedBarChart, WeeklyCountChart, Checkbox, RadioButton, ToggleButton, ChoiceCard, Skeleton, ShadowingPanel, ShadowingReader, ShadowingPhraseStack, ShadowingContextPhrase, ShadowingActivePhrase, ShadowingTranslation, ShadowingControlDock, ShadowingControlCluster, ShadowingRepetitions, AuthChannelHint, AuthChannelIcon, AuthTokenLabel, AuthLegalText, PageTitle, PageDescription, SessionProgress, ScheduleRow, PracticeCard, PracticeCardCover, PracticeLevelBadge, QuizQuestion, QuizBlank, QuizPromptHeader, QuizMetadata, QuizBadge, ConnectionNotice, CardLink, ShadowingWord, AuthEyebrow, AuthForm, AuthResendAction, AuthProgress, AuthTopLink, AuthSuccessState, PracticeResultPanel, QuizSessionHeader, ActionLink, ActionMenu, PracticePlaybackControls, FlashcardRatingButton, QuizOption, QuizFeedback, PracticeCardBody, CalendarControls, AuthFrame, AuthNotice, AuthTokenDigits, AvailabilityCalendar, Avatar, Button, Card, CompoundControl, Dialog, DocumentLayout, NoticeBanner, Drawer, FieldRoot, FilterPills, FilterToolbar, IconButton, MessageBubble, MessageComposer, MessageThread, MessageThreadHeader, OperationalList, Pressable, PhoneField, PracticeCardSkeletonBody, PracticeProgressBar, SearchInput, SectionHeader, SegmentedControl, SelectInput, Spinner, StatePanel, StatusChip, TextareaInput, TextInput, CardDetailsFields, ToastItem, ToastProvider, Toaster, ToastViewport } from '@langyspace/ui'
import { ControlledField } from '@langyspace/ui/form'
import type { AuditConfig } from '@langyspace/ui/audit'
import { createRoot } from 'react-dom/client'
import { FormProvider, useForm } from 'react-hook-form'

const auditTypeContract: AuditConfig = { root: '.' }
void auditTypeContract

function PackageForm() {
  const form = useForm({ defaultValues: { email: 'maria@example.com' } })
  return <FormProvider {...form}><ControlledField label="Email" name="email" /></FormProvider>
}

const packageCalendar = {
  days: [{ id: 'day-15', dateKey: '2026-10-15', label: 'Quinta, 15 de outubro', shortLabel: 'Qui', dayNumber: 15 }],
  events: [{ id: 'class-1', dateKey: '2026-10-15', startMinute: 540, durationMinutes: 60, timeLabel: '09:00', title: 'Aula', label: 'Abrir aula' }],
  slots: [{ id: 'slot-1', dateKey: '2026-10-15', startMinute: 600, endMinute: 630, label: 'Quinta 10:00', state: 'available' as const, interactive: true }],
  navigation: { label: 'Outubro', previousLabel: 'Anterior', nextLabel: 'Próximo', onPrevious: () => {}, onNext: () => {}, onToday: () => {} },
  timeRange: { startMinute: 540, endMinute: 660 },
  onOpenEvent: () => {},
  onSlotClick: () => {},
}

const queueItems = [{ id: 'person-1', name: 'Maria', status: 'Ativa' }]

createRoot(document.getElementById('root')!).render(
  <>
    <AuthBrandContent logo={<span>Brand</span>} title="Package " highlight="auth" description="Package composition" features={['Feature']} />
    <AuthFooter placement="mobile" links={[]}>Mobile legal</AuthFooter>
    <AuthFooter links={[{ href: '/terms', label: 'Terms' }]}>Copyright</AuthFooter>
    <AuthHeader title="Header " highlight="highlight" paragraphs={['Description']} />
    <AuthActions><Button>Continue</Button></AuthActions>
    <ScheduleCalendar view="week" {...packageCalendar} /><ScheduleCalendar view="month" {...packageCalendar} />
    <FlashcardProgress current={1} total={4} label="Progress" />
    <Button iconEnd={<span aria-hidden="true">→</span>} variant="brand">
      Package smoke passed
    </Button>
    <ActionLink href="/next" iconEnd={<span aria-hidden="true">→</span>}>
      ActionLink smoke passed
    </ActionLink>
    <IconButton aria-label="Open menu">
      <span aria-hidden="true">+</span>
    </IconButton>
    <Pressable aria-pressed="false">Pressable smoke passed</Pressable>
    <Spinner size="md" />
    <Avatar initials="LS" tone="brand" />
    <StatusChip indicator tone="success">Package status passed</StatusChip>
    <StatePanel state="empty" title="Package empty state passed" />
    <StatePanel state="loading" title="Package loading state passed" />
    <StatePanel state="error" title="Package error state passed" />
    <AvailabilityCalendar label="Package calendar passed" days={[{ id: 'monday', label: 'Monday', dateLabel: '14/09/2026', slots: [{ id: '09', label: '09:00', available: true }] }]} selectedSlotIds={['09']} onToggleSlot={() => undefined} />
    <MessageBubble side="outgoing" status="sent" statusLabel="Sent" timestamp="10:30">Package message passed</MessageBubble>
    <MessageComposer onSubmit={() => undefined} onValueChange={() => undefined} submitIcon={<span aria-hidden="true">+</span>} submitLabel="Send message" textareaLabel="Message" value="Package composer passed" />
    <MessageThread aria-label="Package thread" footer={<span>Package footer passed</span>} header={<MessageThreadHeader initials="LS" title="Package participant passed" />} viewportLabel="Package message history"><span>Package thread passed</span></MessageThread>
    <FieldRoot label="Name"><TextInput defaultValue="Maria" /></FieldRoot>
    <PackageForm />
    <FieldRoot label="Level"><SelectInput defaultValue="B1"><option>B1</option></SelectInput></FieldRoot>
    <FieldRoot label="Notes"><TextareaInput defaultValue="Package textarea passed" /></FieldRoot>
    <CompoundControl leading={<span>$</span>}><TextInput aria-label="Amount" defaultValue="48" /></CompoundControl>
    <SearchInput aria-label="Search" defaultValue="Maria" />
    <PracticeCardSkeletonBody data-testid="package-practice-skeleton" />
    <PracticeProgressBar value={0.375} />
    <FlashcardRatingButton grade="good" interval="4 days" selected>Good</FlashcardRatingButton>
    <PracticePlaybackControls playing={false} playLabel="Play" onPlay={()=>{}} speed="1x" speedOptions={["1x"]} onSpeedChange={()=>{}} translationVisible={false} onTranslationToggle={()=>{}} />
    <BrandLogo width={144}/><ul></ul><DocumentHeader>Package DocumentHeader</DocumentHeader><DocumentHeaderContent>Package DocumentHeaderContent</DocumentHeaderContent><DocumentNavigation>Package DocumentNavigation</DocumentNavigation><BrandLink href="/termos">Termos</BrandLink><DocumentNavigationLink href="/termos">Termos</DocumentNavigationLink>
    <CardDetailsFields value={{holderName:"",number:"",expiry:"",securityCode:"",documentNumber:"",email:"",postalCode:"",addressNumber:"",phone:""}} onChange={() => {}} /><FormStack>Package FormStack</FormStack><FieldLabelRow>Package FieldLabelRow</FieldLabelRow><FieldCounter>Package FieldCounter</FieldCounter><FormError>Package FormError</FormError><FormActions>Package FormActions</FormActions>
    <FilterSelect aria-label="Package filter"><option>Todos</option></FilterSelect><FileInput aria-label="Package file"/>
    <InlineNotice>Package InlineNotice</InlineNotice>
    <StatCard value={0} label="Package StatCard" action={<Button>Update</Button>} /><DefinitionItem label="Identificador" value="Valor completo"/><DetailRow label="Contato" value="Valor"/>
    <MetricSummary value={0} label="Package MetricSummary" />
    <SidebarFrame>Package SidebarFrame</SidebarFrame><SidebarNavigation>Package SidebarNavigation</SidebarNavigation><NavigationLink href="#nav">Navegação</NavigationLink><NavigationButton>Package NavigationButton</NavigationButton><NotificationItem avatar="LS" title="Aviso" description="Texto" meta="Agora"/><ConversationRow avatar="LS" title="Conversa" preview="Mensagem"/>
    <BottomNavigation>Package BottomNavigation</BottomNavigation><BottomNavigationLink href="#home">Início</BottomNavigationLink>
    <CalendarScroller>Package CalendarScroller</CalendarScroller>
    <FlashcardFrame>Package FlashcardFrame<FlashcardFront style={{ height: '24rem' }}><FlashcardFlipButton label="Package flip"/><FlashcardAudioButton label="Package pronunciation"/><FlashcardWordSkeleton/></FlashcardFront></FlashcardFrame><FlashcardStage>Package FlashcardStage</FlashcardStage><FlashcardDeck>Package FlashcardDeck</FlashcardDeck><FlashcardFront>Package FlashcardFront</FlashcardFront><FlashcardImagePanel>Package FlashcardImagePanel</FlashcardImagePanel><FlashcardWord>Package FlashcardWord</FlashcardWord><FlashcardBack term="bird" translation="passaro"/><FlashcardFlipHint>Package FlashcardFlipHint</FlashcardFlipHint><FlashcardFace>Package FlashcardFace</FlashcardFace><FlashcardGhost layer={1}/><FlashcardFlip>Package FlashcardFlip</FlashcardFlip><FlashcardSwiper>Package FlashcardSwiper</FlashcardSwiper><FlashcardFeedback grade="good" mark="OK">Package FlashcardFeedback</FlashcardFeedback>
    <KeyValueList items={[{id:"a",label:"Origem",value:"123"}]}/><GroupedBarChart aria-label="Evolução" items={[{id:"a",label:"Seg",description:"12 cliques",values:[12,2]}]}/><WeeklyCountChart items={[{id:"a",label:"S",value:2}]}/>
    <Checkbox aria-label="Selecionar checkbox"/><RadioButton aria-label="Selecionar radio"/><ToggleButton>Package ToggleButton</ToggleButton><ChoiceCard>Package ChoiceCard</ChoiceCard><Skeleton style={{width:120,height:16}}/>
    <ShadowingPanel>Package ShadowingPanel</ShadowingPanel><ShadowingReader>Package ShadowingReader</ShadowingReader><ShadowingPhraseStack>Package ShadowingPhraseStack</ShadowingPhraseStack><ShadowingContextPhrase>Package ShadowingContextPhrase</ShadowingContextPhrase><ShadowingActivePhrase>Package ShadowingActivePhrase</ShadowingActivePhrase><ShadowingTranslation>Package ShadowingTranslation</ShadowingTranslation><ShadowingControlDock>Package ShadowingControlDock</ShadowingControlDock><ShadowingControlCluster>Package ShadowingControlCluster</ShadowingControlCluster><ShadowingRepetitions total={3} value={1}>1/3 escutas</ShadowingRepetitions>
    <AuthChannelHint>Package AuthChannelHint</AuthChannelHint><AuthChannelIcon>Package AuthChannelIcon</AuthChannelIcon><AuthTokenLabel>Package AuthTokenLabel</AuthTokenLabel><AuthLegalText>Package AuthLegalText</AuthLegalText><PageTitle>Package PageTitle</PageTitle><PageDescription>Package PageDescription</PageDescription><SessionProgress name="Atividade" counter="1/3" value={.3}/>

    <ScheduleRow time="10:00" participant="Pessoa" onOpen={() => undefined} openLabel="Abrir aula de Pessoa"/>
    <PracticeCard>Package PracticeCard</PracticeCard><PracticeCardCover value={0} label="cards">Package PracticeCardCover</PracticeCardCover><PracticeLevelBadge>Package PracticeLevelBadge</PracticeLevelBadge>
    <QuizQuestion>Package QuizQuestion</QuizQuestion><QuizBlank/>
    <QuizPromptHeader>Package QuizPromptHeader</QuizPromptHeader><QuizMetadata>Package QuizMetadata</QuizMetadata><QuizBadge>Package QuizBadge</QuizBadge><ConnectionNotice>Package ConnectionNotice</ConnectionNotice>
    <CardLink href="/details">Detalhes</CardLink>
    <ShadowingWord state="current">practice</ShadowingWord>
    <AuthEyebrow>Área de acesso</AuthEyebrow><AuthTopLink href="/cadastro" highlight="Entrar">Cadastro </AuthTopLink><AuthForm aria-label="Package auth form"><AuthActions><Button type="submit">Continuar</Button></AuthActions></AuthForm><AuthResendAction onResend={() => {}} resendLabel="Resend">Não recebeu o código?</AuthResendAction><AuthSuccessState><AuthProgress/></AuthSuccessState>
    <PracticeResultPanel heading="Package result" description="Done" actions={<Button type="button">Return</Button>}><p>Consumer metrics</p></PracticeResultPanel>
    <QuizSessionHeader name="Package quiz" counter="1 de 8" progress={0.125} backLabel="Back to list" onBack={() => undefined} />
    <QuizOption letter="A" state="correct" disabled>Yes</QuizOption>
    <QuizFeedback tone="wrong">Review</QuizFeedback>
    <PracticeCardBody title="Practice" leadingMeta="4/8" trailingMeta="50%" value={0.5} />
    <CalendarControls label="Period" previousLabel="Previous" nextLabel="Next" onPrevious={() => {}} onNext={() => {}} onToday={() => {}} />
    <AuthFrame brand={<span>Package brand</span>} brandLabel="Brand" mobileLogo={<span>Logo</span>} formAriaLabel="Auth" topAction={null}><span>Package auth frame passed</span></AuthFrame>
    <PhoneField countries={[{code:"BR",name:"Brasil",dialCode:"+55",flag:"BR",placeholder:"00 00000 0000"}]} country={{code:"BR",name:"Brasil",dialCode:"+55",flag:"BR",placeholder:"00 00000 0000"}} label="Celular" onCountryChange={() => {}} />
    <Card>Package card passed</Card>
    <FilterToolbar aria-label="Package filters"><Button>Filter toolbar passed</Button></FilterToolbar>
    <SectionHeader meta="4 items" title="Package section header passed" />
    <FilterPills aria-label="Filters" options={[{ label: 'All', value: 'all' }]} value="all" onValueChange={() => undefined} />
    <SegmentedControl aria-label="Range" options={[{ label: '30 days', value: '30' }]} value="30" onValueChange={() => undefined} />
    <AuthTokenDigits aria-label="Code" autoFocus={false} digitLabel="Digit" idPrefix="code" length={4} onValueChange={() => undefined} />

    <ToastViewport><ToastItem message="Package toast passed" /></ToastViewport>
    <Toaster toasts={[{ id: 'package', message: 'Package toaster passed' }]} onDismiss={() => undefined} />
    <ToastProvider>Package toast provider</ToastProvider>
    <DocumentLayout title="Package document passed" sections={[{title:"Section",body:["Text"]}]} />
    <NoticeBanner title="Package notice passed" icon={<span aria-hidden="true">!</span>}>Notice text</NoticeBanner>

    <AuthNotice tone="info">Package auth notice passed</AuthNotice>
    <Dialog closeLabel="Close dialog" onClose={() => undefined} open={false} title="Package dialog passed">Dialog</Dialog>
    <Drawer closeLabel="Close drawer" onClose={() => undefined} open={false} title="Package drawer passed">Drawer</Drawer>
    <ActionMenu items={[{ id: 'open', label: 'Open person', onSelect: () => undefined }]} triggerLabel="More actions" />
    <OperationalList
      aria-label="Package operational queue"
      columns={[{ id: 'status', label: 'Status', render: (item) => item.status }]}
      getActions={(item) => [{ id: 'message', icon: <span aria-hidden="true">+</span>, label: \`Message \${item.name}\`, onSelect: () => undefined, placement: 'quick' }]}
      getItemKey={(item) => item.id}
      items={queueItems}
      primaryColumn={{ label: 'Person', render: (item) => ({ navigation: { label: \`Open \${item.name}\`, onNavigate: () => undefined }, title: item.name }) }}
    />
  </>,
)
`,
  )
  await writeFile(
    join(consumerDirectory, 'tsconfig.json'),
    `${JSON.stringify(
      {
        compilerOptions: {
          isolatedModules: true,
          jsx: 'react-jsx',
          lib: ['ES2024', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          moduleResolution: 'Bundler',
          noEmit: true,
          skipLibCheck: true,
          strict: true,
          target: 'ES2022',
        },
        include: ['src', 'vite.config.ts'],
      },
      null,
      2,
    )}\n`,
  )
  await writeFile(
    join(consumerDirectory, 'vite.config.ts'),
    `import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({ plugins: [react()] })
`,
  )
  await writeFile(
    join(consumerDirectory, 'audit.config.mjs'),
    `import { defineAuditConfig } from '@langyspace/ui/audit'

export default defineAuditConfig({
  root: import.meta.dirname,
  requireExceptionExpiry: true,
  allowedDirectButtonImports: [
    {
      owner: 'Smoke consumer',
      path: 'src/main.tsx',
      reason: 'direct package contract smoke',
      expiresAt: '2027-08-25',
    },
  ],
})
`,
  )
}

try {
  const packageSpec = externalPackageSpec ?? (await createLocalPackageSpec())

  await writeConsumer(packageSpec)
  await copyFile(
    join(root, 'scripts', 'ssr-smoke-consumer.mjs'),
    join(consumerDirectory, 'ssr-smoke.mjs'),
  )
  run(
    'pnpm',
    ['install', '--ignore-scripts', '--no-frozen-lockfile'],
    consumerDirectory,
  )

  const installedPackage = join(
    consumerDirectory,
    'node_modules',
    '@langyspace',
    'ui',
  )
  const installedPackageJson = JSON.parse(
    await readFile(join(installedPackage, 'package.json'), 'utf8'),
  )
  const topLevelFiles = (await readdir(installedPackage))
    .filter((file) => file !== 'node_modules')
    .sort()
  const packagedFiles = (
    await readdir(installedPackage, { recursive: true })
  ).filter((file) => !file.startsWith('node_modules/'))

  if (
    JSON.stringify(topLevelFiles) !==
    JSON.stringify([
      'LICENSE',
      'README.md',
      'THIRD_PARTY_NOTICES.md',
      'audit',
      'dist',
      'docs',
      'eslint',
      'package.json',
    ])
  ) {
    throw new Error(`unexpected_package_surface_${topLevelFiles.join(',')}`)
  }

  if (
    packagedFiles.some((file) =>
      /(?:^|\/)(?:\.storybook|quality|src|fixtures|scripts)(?:\/|$)|\.(?:stories|test|spec)\.[cm]?[jt]sx?$/.test(
        file,
      ),
    )
  ) {
    throw new Error('development_tooling_leaked_into_package')
  }

  if (
    installedPackageJson.sideEffects !== false ||
    JSON.stringify(Object.keys(installedPackageJson.exports).sort()) !==
      JSON.stringify(['.', './audit', './eslint', './form']) ||
    installedPackageJson.bin?.['langyspace-ui-audit'] !== './audit/cli.mjs' ||
    installedPackageJson.peerDependencies?.react !== '>=19 <20' ||
    installedPackageJson.peerDependencies?.['react-dom'] !== '>=19 <20' ||
    installedPackageJson.peerDependencies?.['react-hook-form'] !== '>=7 <8' ||
    installedPackageJson.peerDependenciesMeta?.['react-hook-form']?.optional !==
      true ||
    installedPackageJson.peerDependencies?.['styled-components'] !== '>=6 <7'
  ) {
    throw new Error('installed_package_contract_mismatch')
  }

  run(
    'node',
    ['--input-type=module', '--eval', "await import('@langyspace/ui/form')"],
    consumerDirectory,
  )
  run(
    'node',
    [
      '--input-type=module',
      '--eval',
      "const { productConfig } = await import('@langyspace/ui/eslint'); if (!productConfig.plugins.langyspace.rules['no-raw-colors']) throw new Error('eslint_plugin_missing')",
    ],
    consumerDirectory,
  )
  run(
    'node',
    ['--input-type=module', '--eval', "await import('@langyspace/ui')"],
    consumerDirectory,
  )
  run(
    'node',
    ['--input-type=module', '--eval', "await import('@langyspace/ui/audit')"],
    consumerDirectory,
  )
  run(
    'pnpm',
    ['exec', 'langyspace-ui-audit', 'audit.config.mjs'],
    consumerDirectory,
  )
  run('node', ['ssr-smoke.mjs'], consumerDirectory)
  run('pnpm', ['run', 'build'], consumerDirectory)

  const assetDirectory = join(consumerDirectory, 'dist', 'assets')
  const assets = await readdir(assetDirectory)
  const cssFiles = assets.filter((file) => file.endsWith('.css'))
  const javascriptFiles = assets.filter((file) => file.endsWith('.js'))
  const javascript = (
    await Promise.all(
      javascriptFiles.map((file) =>
        readFile(join(assetDirectory, file), 'utf8'),
      ),
    )
  ).join('\n')

  if (cssFiles.length > 0) {
    throw new Error('unexpected_css_asset_in_styled_components_consumer')
  }

  if (!javascript.includes('lsui-sc-practice-progress-bar')) {
    throw new Error(
      'shared_practice_progress_runtime_missing_from_consumer_build',
    )
  }

  if (!javascript.includes('lsui-sc-button')) {
    throw new Error('shared_button_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-action-link')) {
    throw new Error('shared_action_link_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-icon-button')) {
    throw new Error('shared_icon_button_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-pressable')) {
    throw new Error('shared_pressable_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-spinner')) {
    throw new Error('shared_spinner_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-status-chip')) {
    throw new Error('shared_status_chip_runtime_missing_from_consumer_build')
  }

  if (!javascript.includes('lsui-sc-state-panel')) {
    throw new Error('shared_state_panel_runtime_missing_from_consumer_build')
  }

  for (const componentId of [
    'lsui-sc-practice-result-panel',
    'lsui-sc-shadowing-word',
    'lsui-sc-card-link',
    'lsui-sc-flashcard-progress-segment',
    'lsui-sc-connection-notice',
    'lsui-sc-quiz-badge',
    'lsui-sc-quiz-metadata',
    'lsui-sc-quiz-prompt-header',
    'lsui-sc-flashcard-counter',
    'lsui-sc-flashcard-progress-track',
    'lsui-sc-quiz-blank',
    'lsui-sc-quiz-question',
    'lsui-sc-practice-cover-label',
    'lsui-sc-practice-cover-value',
    'lsui-sc-practice-level-badge',
    'lsui-sc-practice-card-cover',
    'lsui-sc-practice-card',
    'lsui-sc-schedule-row',
    'lsui-sc-calendar-time-slot',
    'lsui-sc-session-progress',
    'lsui-sc-page-description',
    'lsui-sc-page-title',
    'lsui-sc-auth-legal-text',
    'lsui-sc-auth-token-label',
    'lsui-sc-auth-channel-icon',
    'lsui-sc-auth-channel-hint',
    'lsui-sc-shadowing-repetitions',
    'lsui-sc-shadowing-control-cluster',
    'lsui-sc-shadowing-control-dock',
    'lsui-sc-shadowing-translation',
    'lsui-sc-shadowing-active-phrase',
    'lsui-sc-shadowing-context-phrase',
    'lsui-sc-shadowing-phrase-stack',
    'lsui-sc-shadowing-reader',
    'lsui-sc-skeleton',
    'lsui-sc-choice-card',
    'lsui-sc-toggle-button',
    'lsui-sc-radio-button',
    'lsui-sc-checkbox',
    'lsui-sc-weekly-count-chart',
    'lsui-sc-grouped-bar-chart',
    'lsui-sc-key-value-list',
    'lsui-sc-flashcard-feedback',
    'lsui-sc-flashcard-swiper',
    'lsui-sc-flashcard-flip',
    'lsui-sc-flashcard-ghost',
    'lsui-sc-flashcard-face',
    'lsui-sc-flashcard-flip-hint',
    'lsui-sc-flashcard-back',
    'lsui-sc-flashcard-word',
    'lsui-sc-flashcard-image-panel',
    'lsui-sc-flashcard-front',
    'lsui-sc-flashcard-deck',
    'lsui-sc-flashcard-stage',
    'lsui-sc-flashcard-frame',
    'lsui-sc-flashcard-flip-button',
    'lsui-sc-flashcard-audio-button',
    'lsui-sc-flashcard-word-skeleton',
    'lsui-sc-timeline-event',
    'lsui-sc-calendar-event',
    'lsui-sc-calendar-day-number',
    'lsui-sc-calendar-day',
    'lsui-sc-calendar-week-grid',
    'lsui-sc-calendar-month-grid',
    'lsui-sc-calendar-scroller',
    'lsui-sc-bottom-navigation-link',
    'lsui-sc-bottom-navigation',
    'lsui-sc-conversation-row',
    'lsui-sc-notification-item',
    'lsui-sc-navigation-button',
    'lsui-sc-navigation-link',
    'lsui-sc-sidebar-navigation',
    'lsui-sc-sidebar-frame',
    'lsui-sc-metric-label',
    'lsui-sc-metric-value',
    'lsui-sc-metric-summary',
    'lsui-sc-detail-row',
    'lsui-sc-definition-item',
    'lsui-sc-stat-action',
    'lsui-sc-stat-label',
    'lsui-sc-stat-value',
    'lsui-sc-stat-card',
    'lsui-sc-inline-notice',
    'lsui-sc-file-input',
    'lsui-sc-filter-select',
    'lsui-sc-form-actions',
    'lsui-sc-form-error',
    'lsui-sc-field-counter',
    'lsui-sc-field-label-row',
    'lsui-sc-form-stack',
    'lsui-sc-document-navigation-link',
    'lsui-sc-brand-link',
    'lsui-sc-document-navigation',
    'lsui-sc-document-header-content',
    'lsui-sc-document-header',
    'lsui-sc-auth-feature',
    'lsui-sc-auth-footer-link',
    'lsui-sc-auth-mobile-footer',
    'lsui-sc-auth-brand-footer',
    'lsui-sc-auth-feature-list',
    'lsui-sc-auth-brand-description',
    'lsui-sc-auth-brand-accent',
    'lsui-sc-auth-brand-title',
    'lsui-sc-brand-logo',
    'lsui-sc-practice-result-actions',
    'lsui-sc-practice-result-description',
    'lsui-sc-practice-result-title',
    'lsui-sc-practice-result-mark',
    'lsui-sc-auth-success-state',
    'lsui-sc-auth-top-link',
    'lsui-sc-auth-progress',
    'lsui-sc-auth-success-icon',
    'lsui-sc-auth-resend-button',
    'lsui-sc-auth-resend-action',
    'lsui-sc-auth-form',
    'lsui-sc-auth-top-link-highlight',
    'lsui-sc-auth-eyebrow',
    'lsui-sc-quiz-session-header',
    'lsui-sc-schedule-calendar',
    'lsui-sc-auth-actions',
    'lsui-sc-calendar-controls',
    'lsui-sc-practice-card-skeleton-body',
    'lsui-sc-toast-item',
    'lsui-sc-toast-viewport',
    'lsui-sc-document-layout',
    'lsui-sc-notice-banner',
    'lsui-sc-action-menu',
    'lsui-sc-auth-accent',
    'lsui-sc-auth-description',
    'lsui-sc-auth-title',
    'lsui-sc-auth-notice',
    'lsui-sc-auth-token-digits',
    'lsui-sc-availability-calendar',
    'lsui-sc-field-root',
    'lsui-sc-filter-pills',
    'lsui-sc-filter-toolbar',
    'lsui-sc-compound-control',
    'lsui-sc-modal-panel',
    'lsui-sc-message-bubble',
    'lsui-sc-message-composer',
    'lsui-sc-operational-list',
    'lsui-sc-search-input',
    'lsui-sc-section-header',
    'lsui-sc-select-input',
    'lsui-sc-segmented-control',
    'lsui-sc-textarea-input',
    'lsui-sc-text-input',
    'lsui-sc-card-details-fields',
  ]) {
    if (!javascript.includes(componentId)) {
      throw new Error(`shared_component_runtime_missing_${componentId}`)
    }
  }

  console.log(
    `Package smoke passed for ${externalPackageSpec ? 'external package' : 'local tarball'}.`,
  )
} finally {
  await rm(smokeRoot, { force: true, recursive: true })
}
