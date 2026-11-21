# Feedback37 — contexto, personagens e conversa guiada

Impacto direto. Base UI c77118481110a428303a38c7ea79477bb9d65b38; Teacher38f68043. Pedido da dona do curso autoriza revisão A103 e padrão global de diálogo/perguntas lado a lado. Publicação somente staging; PR45 continua draft, sem merge/npm/Claude/Lab/produção. Usuária conduz testes/QA/escuta/revisão visual; executar apenas builds/API/export necessários.

## Entrega

- Cena contextual da família de Ana com seis pontos, exemplos variados, palavra+pausa350ms+exemplo em gravações reais. Conector nativo dos pais ao ponto parents. Uma cena nova para mostrar foto no celular.
- This is/These are com sujeito e verbo completos; nomes/retratos preservados em densidade compacta; cadastro resumido dos personagens com fatos, fontes e lacunas explícitas.
- Diálogo à esquerda e compreensão à direita em todas14 aulas existentes, nos pares pertinentes; manter diálogos/áudios/perguntas válidos. Em conversas longas, manter partes coerentes e distribuir perguntas pertinentes entre partes. Colunas empilham em tela estreita, sem barra interna nova nem conteúdo cortado.
- Introduce someone com3 perguntas, tarefa visual produtiva substitui correção de frases erradas; roleplay de fotos com pergunta docente pronta e sem etapas redundantes; pergunta final com informação desconhecida.
- Atualizar guideline e APIs/stories da biblioteca na mesma entrega. Fontes apenas por root; chats existentes de mídia e conteúdo entregam outputs privados, Integração recebe somente SOURCEFINAL37.

## Sequência e progresso

1. Lidos fonte ativa, componentes/props e guia. Regras antigas de perguntas na página seguinte são substituídas expressamente pelo pedido atual.
2. Mídias congeladas e solicitadas cedo:2 cenas;6 exemplos FE e6 montagens FS com labels existentes. Sem regenerar retratos aprovados.
3. Implementação canônica concluída: SlidePage.questions, identificação em LearningDialogue independente da densidade, SceneExplorer com conectores e exemplo no callout, tarefa visual via componente existente.
4. Migração das14 aulas/A103 concluída; documento de personagens e inventário com38 registros incorporados, com fatos e pendências separados. Adaptadores mantêm dados e lógica fora da biblioteca.
5. Uma formatação, package/API/export, commit/push único. Integração faz um buildTeacher/Hosting staging e recibo. Sem testes/QA/browser/playback/render/screenshot/simulação ou CI polling.

## Limites

Foto ausente não foi reproduzida visualmente; compact escondia nomes e o adaptador usava busts antigos. Usar retratos canônicos conhecidos e registrar a correção sem alegar reprodução. Relações são explícitas na copy/cena, não inferidas só por aparência. Não inventar idade/profissão/hobbies para preencher documentação. Novos áudios têm proveniência e revisão final humana.

## Evidência de preparação

Uma formatação da fonte, package build exit0 e API write exit0 concluídos. Ajustes finais dos adaptadores preservam entradas do pacote; não repetir package build. Export neutro e publicação staging seguem após o commit final. Nenhum teste/QA/browser/playback foi executado.
