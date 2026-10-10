# Evidências e validação — R01

Cada produto tem 15 pares de telas reais de /login: telefone, telefone inválido e OTP,
em 390, 768, 900, 901 e 1440px, altura 1100px, DPR 1, tema claro e fonte local Montserrat.
Antes usa a fonte da baseline e o pacote 1.6.2; Depois usa o tarball candidato 1.8.0.
As 30 comparações dos três componentes tiveram zero diferenças de geometria/CSS computado.
21 pares também são arquivos PNG idênticos; os demais têm diferenças pontuais de pixels nas
bordas/foco de componentes não alterados. Isso não equivale a aceite humano nem prova de auth real.

Nove stories novas têm 18 capturas em 390/1440px. Mostram títulos/copy equivalentes dos dois
produtos, children ricos e conteúdo longo. AuthAccent é demonstrado dentro de título grande,
preservando o contexto de contraste usado nos produtos.

A rotina inicial ignorava o viewport solicitado. Todas as capturas foram descartadas e refeitas
com setViewportSize explícito, conferência do viewport e da largura no header PNG. Nenhuma imagem
com largura incorreta faz parte da entrega final.

Dados sintéticos de PublicSettings foram injetados só no Vite de captura, com rede externa
bloqueada, relógio fixo e countdown congelado. Não houve leitura/escrita de produção ou envio de OTP.
Screenshots em .github/evidence/r01-auth; relatórios e scripts de captura preservados no ambiente
local das worktrees, fora do pacote publicado.

Checks locais executados:

| Owner   | Comando                                                                                                                                                                                                  | Resultado                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| UI      | pnpm exec vitest run --project unit src/atoms/AuthTitle/AuthTitle.test.tsx src/atoms/AuthDescription/AuthDescription.test.tsx src/atoms/AuthAccent/AuthAccent.test.tsx quality/ComponentManifest.test.ts | 4 arquivos, 8 testes passaram                                                                        |
| UI      | pnpm run build; pnpm run write:api; pnpm run check:api                                                                                                                                                   | Build candidato materializado; API aditiva revisada, 35 values / 93 types / 120 declarations         |
| UI      | pnpm run test:bundle                                                                                                                                                                                     | Passou após definir o orçamento inicial da nova família; 20.224 gzip / 93.488 raw no pacote agregado |
| Student | pnpm exec vitest run src/pages/Login/Login.test.tsx                                                                                                                                                      | 7 testes passaram                                                                                    |
| Teacher | pnpm exec vitest run src/pages/Login/Login.test.tsx                                                                                                                                                      | 1 teste passou                                                                                       |

O terceiro check local do UI cobre o risco concreto de bundle do contrato novo. A exceção de
orçamento está no plano técnico e depende de revisão humana. As suites e gates amplos ficam no CI;
seus resultados não serão monitorados preventivamente. Evidência válida dos componentes/fluxos é
reutilizada enquanto código, bytes do candidato e fixtures permanecerem iguais.

O lockfile Student foi normalizado para preservar todas as entradas da baseline, após pnpm 11 ter
reescrito metadados e removido opcionais de outras plataformas. A entrega altera somente a UI;
nenhuma outra versão de dependência muda.

Candidato para review: .github/evidence/r01-auth/candidate/langyspace-ui-1.8.0.tgz,
63.150 bytes, SHA-256 edcd92aca6637dc2eb06f90c17359ac5590a165a14a089826ba3b53c3b37e725.
Será referenciado por commit imutável nos drafts dos produtos, com integridade no lockfile. Não é
release oficial; substituir pelo URL do artefato aprovado antes de finalizar a integração. Tags,
merge, release e deploy não foram executados nesta etapa.

O piloto ainda não remove os owners locais usados em outras rotas. O ganho desta entrega é provar
um contrato visual comum em quatro callsites reais. A retirada completa dessas cópias exige a
expansão com evidências das outras telas; não foi declarada economia líquida de linhas.

Visual gate review: pending human.
