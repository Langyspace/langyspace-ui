# Entrega157 — A1.11

Prévia local da página `s_personal`: nova cena de loja com Ana/Kim e sete produtos. `SceneExplorer.hotspotInteraction="area"` seleciona o objeto inteiro e usa a ficha flutuante descrita na revisão158 abaixo (substitui a versão inicial abaixo da imagem). Dica → exemplo completo → esconder; trocar ou fechar a peça reinicia o apoio. Nenhuma digitação ou áudio novo. Modelo, vocabulário, gramática, missão do presente, mensagem, vídeo e dever preservados. Story `ClothesShopScene` usa os mesmos dados/componentes da aula.

Imagem PNG 1536×1024, cópia byte-idêntica do built-in image_gen; uma chamada e zero referências. Prompt canônico1.8 literal, SHA fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489. Prompt/recibo nesta pasta; original preservado no caminho do recibo. As imagens ilustram uma situação pedagógica, sem novo emprego ou biografia para Ana/Kim.

Validação: novo teste ShopScene157 passou; typecheck passou; API185/312/659 passou. Snapshot revisado: SceneExplorer.types e styles para a variação aditiva; RouteMap.styles atualiza a declaração interna Origin da entrega156 já comprometida, sem nova prop pública do mapa. Prévia589×630: sete áreas projetadas sobre os produtos, clique fora do centro da camiseta funcionou, ficha inteira dentro do viewport, ajuda substitui o texto e reinicia ao trocar o produto; temas claro/escuro observados. Evidências em outputs/shop157.

Limite de testes: a suíte SceneExplorer retornou8 passagens e3 falhas. As mesmas3 falhas foram reproduzidas com a implementação HEAD anterior: duas expectativas antigas do posicionamento/gutter em SceneExplorer.geometry e uma expectativa de áudio não acionado no clique. Esses caminhos não foram alterados nesta entrega; não apresentamos a suíte como totalmente verde. Nenhuma publicação/package/build Teacher/push/CI/deploy foi acionada.

## Revisão158 — ancoragem acima do produto

A ficha sai do fluxo, flutua acima dos limites da peça e mantém a mesma base/largura ao revelar apoio. O conteúdo cresce para cima, sem recalcular a posição com base na altura da ficha. Uma reserva superior estável evita colisão com o título desde o estado inicial. Nome, metadados, dica e fechar ficam no cabeçalho compacto. `SceneHotspot.summary/actions` são slots opcionais, sem alterar dados ou áudio da aula.

Evidência local589×630 em `outputs/shop158/geometry.json`: imagem510.299×340.195px, x39.434/y263.835 idênticos antes de selecionar, na ficha inicial, na dica e no modelo. A ficha mantém x47.435, largura351.999 e base313.073; altura58.496→105.684px, crescendo para cima. Distância da peça≈11.99px nos três estados. Novo teste da compra passou; snapshot/tipagem registrados no recibo de entrega158. Sem imagem/áudio novos ou publicação.

Visual gate review: pending human
