# Feedback39 — navegação visual, identificação e prática com base explícita

Impacto direto. Base UI1b1a9ed5 / Teacher8da43c7a. Entrega staging autorizada, mesmas14 aulas; usuária conduz testes/QA/visual. Sem novo áudio/imagem, produção, Claude/Lab remoto, npm, merge ou backend.

## Decisões

- SlideDeck.Viewport já esconde a barra; GlobalStyles pinta barras nativas de branco em outros contêineres. Ocultar trilhas somente na superfície dos materiais e conter o root publicado, preservando overflow funcional, teclado/gestos, conteúdo alto, barra horizontal de progresso e popupNotes. Não alterar hooks de scroll ou GlobalStyles do produto inteiro.
- Foto+nome passam a ser uma variação nomeada do Avatar canônico, com espaço, contraste do tema e nome semibold. LearningDialogue compõe o mesmo dono em todos os diálogos, preservando speakerLabels/densidade e URLs válidas. Sem novo componente público apenas para aparência.
- Who should Kim meet? dependia de uma escolha não explicada e dados não visíveis. Substituir por Introduce Ana’s family: escolher Leo/Bia/pais e produzir apresentação a partir de fatos visíveis. Exibir parentesco/profissão/origem existentes, com modelo opcional. Nenhuma escolha secreta, adivinhação ou informação inventada.
- Atualizar guia/APIs/stories e documento de personagens apenas quanto à regra, sem acrescentar biografias.

## Sequência

Fonte/UI por root; Integração verifica necessidade de correção mínima no host e aguarda SOURCEFINAL39. Uma formatação, package/API/export; um push por repo e um buildTeacher/Hosting staging. Só confirmação do provider, sem testes/QA/browser/screenshots/CI polling. Preservar evidência válida enquanto os inputs não mudarem.

## Implementação concluída

Avatar.nomeado compõe nome/retrato e descrição opcional; LearningDialogue e contato de VoiceMessage adotados. MaterialRoot oculta trilhas nativas sem alterar overflow; root standalone contém vazamentos da apresentação. Introduce Ana’s family seleciona alvo, mostra fatos reais e modelo opcional derivado; Leo já fica selecionado no primeiro acesso, sem painel vazio. Host Teacher inspecionado por fonte: apresentação fora do AppShell e já contida; sem alteração necessária, base Teacher8da43c7a limpa. Nenhuma mídia nova. Seguem formatação/package/API/export e uma publicação staging.

## Preparação

Formatação, package build e API write concluídos com exit0. Sem testes/QA/browser/escuta. Fonte pronta para commit e export neutro; após push, Integração publica staging e confirma provider ACK. CI terá só captura de URL por SHA, sem polling.
