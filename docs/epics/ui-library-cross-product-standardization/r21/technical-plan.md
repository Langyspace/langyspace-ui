# Plano técnico R21

UI1.17.0 após1.16.0; QuizOptionProps nativebutton+letter+state(default/correct/wrong/dim),
QuizFeedbackProps nativediv+tone(correct/wrong). Estado calculado nos produtos. Ícones nativos14px,
sem dependência nova nem CSS var obrigatória. Receita interna preserva geometria/paleta existente;
texto escuro Student comum ao Teacher. RadioGroup não seria equivalente: resposta é comando imediato.

Fonte pública + API aditiva + stories/a11y + teste native form/disabled/callback. Capacidades pré-code:
lib130000raw/27200gzip existente preservada; entry quiz18000raw/4600gzip. Pacote/SSR novo contrato.
Não alterar budgets antigos para acomodar regressões de famílias prévias.

Rotas Student /licoes (quiz/personalized), Teacher /alunos/:id/licoes mesmas entradas. Estados:
enunciado, hover/foco, correta, errada, reveal on/off, dim, avanço, resumo, conclusão pendente/erro
Student. Mobile390, limite640 e desktop1440, normal/reduced. Fixtures isoladas, nenhum progresso real.
PRs tabela Antes/Depois com originais; official comparado arquivo a arquivo antes de integrar staging.
