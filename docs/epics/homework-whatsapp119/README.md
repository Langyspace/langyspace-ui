# Homework para copiar no WhatsApp

Impacto direto: ação de encerramento nas 63 aulas com pacote de prática. As três experimentais mantêm o fechamento de matrícula. Os três celulares continuam usando as sessões canônicas do Student.

Cada pacote define quatro campos autorais em `homeworkCopy`: título, primeira prática, repetição e áudio para a teacher. O botão único **Copy homework** compõe uma mensagem em português com três itens e exatamente dois links. Os links usam os IDs atuais, a origem Student validada e a publicação declarada no ambiente. Nenhuma atividade foi cadastrada, nenhum link foi inventado e nenhuma mensagem foi enviada.

Clipboard: cópia por clique; confirmação discreta em português; se o navegador negar, Dialog canônico com o texto completo selecionável para cópia manual. Mudança de aula ou saída da página invalida resultados assíncronos antigos.

## Conteúdo e evidência

- [Todas as mensagens](messages.md)
- [Antes, 829×775](evidence/before.jpg)
- [Depois, 829×775](evidence/after.jpg)
- Os 62 JSONs mantêm integralmente os dados anteriores, acrescidos somente de `homeworkCopy`; o 63º pacote é o módulo Dev já existente
- Verificação dirigida: contrato das 63 mensagens e seus destinos, sucesso/negação do clipboard e descarte de retorno assíncrono ao sair da página; TypeScript sem emissão
- Prévia local: três celulares preservados, botões Open removidos e uma ação centralizada sem sobrepor o botão fixo de navegação. O clique mostrou “Dever de casa copiado”. A leitura do clipboard pela ferramenta do navegador não devolveu texto; o payload exato está coberto pelo teste dirigido, sem alegar leitura do clipboard real
- Sem suíte ampla, build de pacote, novas mídias, provisionamento ou deploy nesta entrega

Revisão visual final da Margarida pendente. Branch e PR permanecem de revisão.
