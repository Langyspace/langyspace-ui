# Plano técnico — R01

Baselines: UI 03c4159d2edc663e6dba54174707641f41ff4fc9; Student
9f1057fb414f68eb919a01edb2bfdee106a70d31; Teacher c6c056bc347bda67720624d055039c1a4da9395b.
Worktrees isoladas em /Users/margaridamartins/.local/langyspace-ui-library-r01.

Criar cada componente em src/atoms/<nome>/{index.tsx,styles.ts,types.ts}, com marker explícito,
props HTML nativas e children. Não agrupar a copy num AuthStepHeader. Exportar raiz e registrar
manifest, README, API snapshot, stories, unit contract e browser/SSR smoke. Versão aditiva 1.8.0.

Adotar só PhoneStep/TokenStep no Login dos dois pilotos, preservando páginas/fluxos e os owners
locais ainda usados em outras rotas. Medir esse limite; a remoção das cópias completas requer
migração posterior dos demais callsites e suas evidências. Nenhuma mudança em Admin/Site/Cupom é
necessária neste piloto. A diferença entre UI 1.6.2 e 1.7.0 na fonte é a adição de
AvailabilityCalendar, sem mudanças nos componentes previamente usados.

Capturas usam Vite local com design mock, fixture de PublicSettings no servidor de teste e
bloqueio de rede externa no browser. A fixture apenas controla dados; renderiza as páginas reais
sem alterar markup/estilos. Arquivos de captura não entram no pacote publicado.

Preparar primeiro o código e as evidências do UI. Os PRs dos produtos podem ficar em draft com
candidato imutável para permitir review das telas antes do release; merge/publicação continuam
bloqueados por revisão humana. O candidato não é release oficial e o URL deverá ser substituído
pelo artefato aprovado antes da integração final. Registrar hash e dependência nos documentos.

Checks locais: UI contratos novos/manifest e check:api sobre o build candidato; cada piloto Login
unit/integration existente. CI possui suites, Storybook/a11y, budgets e package smokes completos.
Build/pack para materializar o candidato e coleta de screenshots são preparação da entrega.

Rollback: reverter a adoção e restaurar imports/versão 1.6.2. API aditiva pode permanecer sem uso.
Revisão crítica: escopo pequeno, sem nova variante e V0; principal risco é margem/fonte reset e
breakpoint. Não considerar igualdade de screenshots aprovação humana ou prova de auth produtivo.

Orçamento de bundle, exceção proposta para revisão: a baseline 1.7.0 medida com o mesmo build possui
92.026 bytes raw / 19.964 gzip. R01 possui 93.488 / 20.224, acréscimo de 1.462 / 260 bytes para três
exports novos. O limite agregado gzip passa de 20.000 para 20.500; raw permanece 94.000. Essa é uma
mudança explícita de capacidade da biblioteca, condicionada à revisão do PR, sem afrouxar limites de
actions/fields/identity/molecules. Um novo entry auth mede 4.251 raw / 1.524 gzip, incluindo as
foundations necessárias quando importado sozinho; seu limite inicial é 5.000 raw / 1.800 gzip.
Ele monitora separadamente a família e sua tree-shaking. O primeiro limite estimado de 3.000/1.000
não incluía o custo integral das foundations e foi corrigido com essa medição; esse entry ainda não
existia na baseline. Não inserir exceções para esconder regressões.
