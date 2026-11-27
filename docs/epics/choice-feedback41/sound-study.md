# Feedback sonoro nas aulas Langy

Pesquisa e decisão de produto — 20/11/2026.

## O que a evidência permite concluir

O objetivo é comunicar o resultado rapidamente, com um sinal compreensível e confortável. Reconhecimento de acerto/erro, atenção, motivação e aprendizagem duradoura são resultados diferentes. Estas fontes não demonstram que uma nota específica aumente a retenção de inglês.

- **Feedback depende da tarefa.** A revisão de Shute organiza feedback formativo em torno de apoio, clareza, especificidade e momento adequado. Um som de resultado não substitui conteúdo explicativo nem a mediação da professora. [Shute, ETS, 2007](https://myweb.fsu.edu/vshute/pdf/shute%202007_f.pdf).
- **Mais sinais podem distrair.** No experimento de Appelgren, Penny e Bengtsson com tarefa de memória 2-back, feedback externo em todas as respostas corretas reduziu precisão; o período logo após um erro foi especialmente sensível. É um experimento de memória, não uma avaliação de aulas de inglês. A aplicação aqui é manter sinais breves, sem repetições automáticas, e permitir desligá-los. [Artigo e resumo dos autores, 2014](https://research-portal.uea.ac.uk/en/publications/impact-of-feedback-on-three-phases-of-performance-monitoring/).
- **Melhora durante a interação não garante aprendizagem transferível.** Han e colegas compararam formas de informação auditiva numa tarefa visuomotora. Sons como feedback de resposta não melhoraram a aprendizagem; benefícios de informação sincronizada com o estímulo não se transferiram integralmente quando o som saiu. Isso desaconselha prometer ganho cognitivo geral só por acrescentar áudio. [Han et al., 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11061001/).
- **Urgência é projetável.** Hellier, Edworthy e Dennis estudaram velocidade, frequência fundamental, repetição e inarmonicidade em alertas. Esses parâmetros alteraram a urgência percebida. Para uma resposta errada de aula, adotamos um sinal de baixa intensidade, sem ruído áspero, pulsos insistentes ou estética de alarme. Essa aplicação pedagógica é inferência de design. [Estudo original, 1993](https://journals.sagepub.com/doi/10.1177/001872089303500408).

## Sons escolhidos

| Resultado | Desenho                                                      | Duração | Finalidade                                  |
| --------- | ------------------------------------------------------------ | ------- | ------------------------------------------- |
| Acerto    | Duas notas arredondadas ascendentes, C5→E5 (523,25→659,25Hz) | 280ms   | Confirmação breve e positiva                |
| Erro      | Duas notas suaves descendentes, A4→G4 (440→392Hz)            | 225ms   | Indicar outra tentativa, sem punição sonora |

As frequências e durações acima são escolhas musicais/operacionais, não parâmetros clínicos nem um protocolo validado para inglês. O timbre usa seno e um harmônico discreto; entrada e saída graduais evitam estalos. Ganho digital limitado e igual família de volume; a intensidade física depende do aparelho e do volume da professora. Sem voz, aplausos, moedas, melodias longas ou aumento de volume por erros sucessivos.

## Regras de interação

- Tocar somente no clique de uma alternativa que tenha resultado conhecido. O consumidor fornece o gabarito; a UI Library não avalia preferências ou respostas abertas.
- Manter cores/ícones existentes para que o resultado continue claro com o som desligado. Um botão no cabeçalho permite silenciar os sons de resposta, sem silenciar os diálogos.
- Um canal curto substitui o som anterior em cliques rápidos; não há fila. Não tocar no hover, ao montar, ao revelar uma dica ou ao percorrer páginas. Botões desativados continuam sem ação.
- Síntese local no gesto do usuário, sem baixar MP3. Retomar o contexto de áudio conforme a API do navegador; qualquer bloqueio falha silenciosamente e preserva o feedback visual. [AudioContext.resume](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume).
- A escuta e o ajuste perceptivo ficam com a usuária. O estudo fundamenta uma escolha prudente; não constitui um ensaio de eficácia dos sons na aprendizagem dos alunos Langy.
