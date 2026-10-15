# 07 — Navegação, overlays e mensagens

Responsabilidade: Revisar controlado/não controlado, eventos, foco/teclado/portais, nomes e slots; manter helpers internos coesos.

- [x] Entender fontes e consumidores exatos; refinar impacto/superfícies.
- [x] Registrar decisão e implementar somente o necessário.
- [x] Validar com evidência focada e revisar diff/aceite.
- [x] Atualizar inventário, tasks.md e progress.md antes da próxima tarefa.

Concluída quando: Todos os contratos dessa família revisados; sem botões aninhados, eventos duplicados ou regras de domínio na UI.

Validação: Testes focados de teclado/foco/eventos afetados; comparação pertinente de portal/scroll lock.

Review visual: se houver impacto direct/indirect, preparar evidência da revisão atual e manter o aceite humano antes de merge.

Resultado: 22 contratos revisados individualmente. ActionMenu mostra JSX explicito e delega a interacao a hook privado. O defeito de cleanup React 19 em SearchInput/ActionMenu foi reproduzido (2 falhas) e corrigido por useMergedRef. 17 testes e typecheck passaram. MessageComposer manteve a semantica intencional de isSubmitting; ModalLayer revisado e preservado. Guia especifico criado. Capturas/API/pacote e aceite atual continuam em 10/11.
