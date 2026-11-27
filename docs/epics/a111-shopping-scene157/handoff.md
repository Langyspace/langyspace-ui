# Entrega157 — A1.11

Prévia local da página `s_personal`: nova cena de loja com Ana/Kim e sete produtos. `SceneExplorer.hotspotInteraction="area"` seleciona o objeto inteiro e coloca a ficha abaixo da imagem para preservar personagens/produtos visíveis. Dica → exemplo completo → esconder; trocar ou fechar a peça reinicia o apoio. Nenhuma digitação ou áudio novo. Modelo, vocabulário, gramática, missão do presente, mensagem, vídeo e dever preservados. Story `ClothesShopScene` usa os mesmos dados/componentes da aula.

Imagem PNG 1536×1024, cópia byte-idêntica do built-in image_gen; uma chamada e zero referências. Prompt canônico1.8 literal, SHA fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489. Prompt/recibo nesta pasta; original preservado no caminho do recibo. As imagens ilustram uma situação pedagógica, sem novo emprego ou biografia para Ana/Kim.

Validação: novo teste ShopScene157 passou; typecheck passou; API185/312/659 passou. Snapshot revisado: SceneExplorer.types e styles para a variação aditiva; RouteMap.styles atualiza a declaração interna Origin da entrega156 já comprometida, sem nova prop pública do mapa. Prévia589×630: sete áreas projetadas sobre os produtos, clique fora do centro da camiseta funcionou, ficha inteira dentro do viewport, ajuda substitui o texto e reinicia ao trocar o produto; temas claro/escuro observados. Evidências em outputs/shop157.

Limite de testes: a suíte SceneExplorer retornou8 passagens e3 falhas. As mesmas3 falhas foram reproduzidas com a implementação HEAD anterior: duas expectativas antigas do posicionamento/gutter em SceneExplorer.geometry e uma expectativa de áudio não acionado no clique. Esses caminhos não foram alterados nesta entrega; não apresentamos a suíte como totalmente verde. Nenhuma publicação/package/build Teacher/push/CI/deploy foi acionada.

Visual gate review: pending human
