# Revisão geral B2.01 / C1.01 — feedback44

Base UI da76efa9 / Teacher8950ab6a. Impacto direto de conteúdo e UI. Rever todas as16 páginas B201 e17 C101, sem alterar IDs nem capas, preservando histórias e gravações válidas. Uma direção baseada na biblioteca revisada: texto Montserrat, títulos Space Grotesk, tema escuro, controles e espaçamento existentes. Usuária mantém a revisão final; sem suíte, browser, render, screenshots ou escuta ampla.

## Inventário e decisões

- B201: review ligado à viagem; vocabulary sem CSS local nem altura natural ilimitada; warm-ups com pergunta no título, contador e sem tarefa extra; expressions divididas em dois grupos com áudio no clique; gramática com ponto de referência no passado e exemplos visíveis. Dois contrastes artificiais de pronunciation viram cronologia e pergunta por informação ausente. Diálogos12falas preservados em6+6 com compreensão ao lado. Your version ganha6turnos claros; listening perde footer e usa celular adaptável; review usa uma sentença por vez; role-play ganha dois cenários visuais com fatos e6turnos; homework independente mantido.
- C101: review de experiências com feedback; expressões/definições mais precisas, áudios existentes; warm-ups com alternativas plausíveis ao nível C1. Email e compreensão ficam sozinhos, sem tarefa extra. Manter uma comparação de entonação com mesmas palavras e voz, sem gabarito sonoro universal; substituir a segunda por decisão de resposta a Raj após o listening. Diálogo14falas e gravações preservados em7+7. Gramática em dois focos de explicação, sem quiz; Your version e role-play com6turnos, perspectiva e objetivo explícitos, sem formulários/checklists. Listening sem footer, transcrição3ªescuta e horários coerentes. Review contextual, uma frase por vez; homework independente mantido.

## Donos e execução

ExercisePanel recebe navegação controlada; KeyValueList recebe layout descritivo empilhado. Um adaptador shared StatementReview aplica componentes canônicos nas três aulas B1/B2/C1; não cria biblioteca visual paralela. Celular usa preset compartilhado das aulas revisadas. Nenhuma nova imagem. Congelar7labels E.* B201, pesquisar reuso e gerar só faltantes via ElevenLabs, sem alterar outros áudios. Role-plays são simulações temporárias, não biografia nova.

Build package/API/export uma vez na fonte final, um commit/push e adoção/build Teacher/Hosting staging com ACK. Preservar mesmas14chaves/capas, bridge38/Notes/foco/gestos/sons41; sem produção, Claude/Lab remoto, npm, merge, backend ou automações. Stories de estados/limites ficam preparadas para a usuária; sem executar QA extensa.

Visual gate review: pending human
