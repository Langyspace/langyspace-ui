# Validação R26

O conjunto é focado no novo owner e na adoção nas rotas reais. Nenhum full validate:ui ou E2E amplo foi executado nesta preparação. GitHub Actions permanece fora do fluxo por cobrança, com [skip ci]; nenhum status de CI foi fabricado.

| Evidência                                                   | Resultado                                                                                                    |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| UI unit + manifest + cinco stories                          | 11 testes passaram                                                                                           |
| UI arquitetura, lint, formatação, build, declarations e API | Passaram; API somente aditiva                                                                                |
| UI bundle                                                   | 143042/29189 raw/gzip; resultPanel5288/1987; dentro dos limites planejados                                   |
| Tarball real, browser e SSR                                 | Passaram; novo componente importado, renderizado e marker CSS verificado                                     |
| UI stories                                                  | 60 PNGs originais; 390/640/641/1440, alturas568/1100 nas extremidades e normal/reduced                       |
| Student resultado quiz/personalizado                        | 140 pares; 0/50/100%, refazer/voltar por teclado, pending e erro                                             |
| Teacher resultado quiz/personalizado                        | 100 pares; 0/50/100%, refazer/voltar por teclado                                                             |
| Geometria/conteúdo/comportamento dos pares                  | Coincidem; zero overflow horizontal; controllers reais com fixtures e rede externa bloqueada                 |
| TypeScript Student e Teacher                                | Passou                                                                                                       |
| Lint Teacher / formatação dos arquivos alterados            | Passaram                                                                                                     |
| Lint Student                                                | Erro preexistente em shadowing reproduzido no baseline e na adoção, no trecho inalterado; não declarar verde |

O before vem de git show dos SHAs registrados e do pacote oficial1.20.0. O after vem da nova apresentação e do candidato1.21.0. Os produtos privados usam cópias independentes dos PNGs no repo público UI; nenhuma edição, recorte ou composição das imagens. Hashes de fonte, pacote e matrizes identificam a revisão. A remoção de reformatting fora dos blocos alterados preservou o fonte original, sem alterar a renderização capturada.

O Teacher com altura568 já tem ações parcialmente cobertas pelo bottom nav. O recorte preserva esse comportamento e expõe a limitação nos pares; um ajuste do shell deve ter escopo/review próprios. A nova animação do ícone no Teacher e a supressão por reduced motion são concessões explícitas, ainda sem aceite humano R26.
