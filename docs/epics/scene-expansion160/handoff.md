# Pilotos visuais160 — entrega local

Três situações distintas usam o mesmo `SceneExplorer` por meio de `CourseActivity`: descrever pessoas (B1.11), comparar pistas (B2.04) e negociar acesso a pagamentos (C1.12). A aluna observa e fala; a professora seleciona uma área e pode revelar dica → modelo → esconder. Os fatos continuam visíveis, a imagem não se desloca e a ficha mantém a base fixa enquanto cresce para cima.

| Aula  | Página      | Conteúdo                                                                                                                    |
| ----- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| B1.11 | `s_mission` | Festa com seis adultos; identificar, descrever e apresentar alguém sem interromper o discurso                               |
| B2.04 | `s_mission` | Apartamento existente, com janela, planta e recibo; diferenciar observações, registros e hipóteses                          |
| C1.12 | `s_reply`   | Caixa com necessidades diferentes; propor uma alternativa de pagamento e verificar condições de acesso, taxas e privacidade |

A cena de C1 vem depois da mensagem de áudio para não revelar sua experiência antes da escuta. As fontes de leitura, a missão anterior e todas as gravações foram preservadas. Não há uma resposta única imposta às hipóteses ou à política de pagamentos.

## Mídia e biblioteca

Duas chamadas built-in `image_gen`, uma para cada imagem nova, sem referências visuais, repetição ou edição. Os PNGs foram copiados integralmente, sem recorte. A imagem B2.04 já existente foi reutilizada. O prompt canônico1.8 permaneceu literal, com SHA256 `fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489`; só identidades e composição foram anexadas. Prompts completos e hashes estão nesta pasta e em `manifest.json`.

As stories `CelebrationScene`, `EvidenceScene` e `PaymentAccessScene` usam os dados reais dessas aulas. A guideline registra evidências persistentes e a ordem em relação ao áudio; a documentação de personagens distingue papéis pedagógicos de biografia permanente. Nenhuma API pública de componente foi alterada.

## Verificação realizada

- Quatro testes focados passaram em dois arquivos: os três novos pilotos e a loja157. Cobrem seleção, fatos persistentes, troca de dica/modelo e reset ao mudar/fechar o alvo.
- TypeScript `tsc --noEmit -p tsconfig.json` terminou com exit0.
- Comparação com a base: IDs/ordem das páginas preservados; nenhuma outra página ou atividade dos três materiais mudou. Nenhum arquivo de áudio foi modificado.
- Prévia local em tema escuro, 1280×720: abertura, seleção e ajuda verificadas nos três pilotos. Imagem com a mesma geometria antes/depois; largura/base da ficha constantes, crescimento para cima e espaço de aproximadamente12px até o alvo selecionado. Evidências PNG e JSON em `outputs/scene-expansion160` do chat.

O encaixe foi observado nessa resolução, sem alegação de validação universal em telas estreitas. A inspeção das novas ilustrações não mostrou membro extra evidente; algumas mãos do caixa ficam naturalmente atrás do balcão. Não houve uma nova rodada de QA ampla, playback, build de pacote, adoção no Teacher, push, CI ou publicação. Os demais seis pilotos prioritários159 continuam planejados.

## Prévia para revisão

- [B1.11](http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_mission#b1-11)
- [B2.04](http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_mission#b2-04)
- [C1.12](http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_reply#c1-12)

Visual gate review: pending human
