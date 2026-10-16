# Correções da revisão visual dos portais

Impacto **direct**: apresentação e interação em flashcards, shadowing, seletor de dias e detalhe de aula. Objetivo: corrigir F01–F05 da auditoria de 16/10 preservando a identidade visual e APIs simples.

Escopo: UI Library primeiro; adoção em Teacher/Student; orquestração de URL do drawer no Admin. Site/Cupom mantêm suas dependências atuais e não recebem mudanças neste lote. Fora: redesign, regras de estudo, API/Firebase, dados de clientes, releases/deploy antes do aceite atual.

Jornada: iniciar prática, virar cartão e avaliar com qualquer uma das quatro ações; ler e reproduzir shadowing com tradução; editar dias com texto legível; abrir e fechar aula sem perder contexto.

Sucesso: ações acessíveis por toque/ponteiro e teclado sem sobreposição; conteúdo longo rolável; retrato/desktop preservados; X/Escape/footer/backdrop fecham o drawer e removem item da URL. PRs com imagens comparáveis lado a lado e gate humano pendente.
