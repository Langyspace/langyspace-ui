# Progresso — execução contínua

Atualizado em 2026-10-10. R01, R02, R03, R06, R07 e R11 implementados e publicados para review:
sete componentes novos no UI, SearchInput existente adotado no Teacher e sete drafts visuais
Student/Teacher. Site/Admin/Cupom têm três PRs do padrão permanente. Total: 12 PRs, com oito drafts visuais de produto.

Todos os corpos visuais foram conferidos com somente Evidências / Antes / Depois;
340 pares de telas nos produtos, em viewports reais. Typechecks, instalações congeladas,
contratos focados, API e bundle passaram nos escopos registrados. CI ampla não foi monitorada.
Nenhum merge, tag, release oficial ou deploy. Cada PR continua sujeito à aprovação humana.

[Handoff atual](handoff-continuo.md): PRs, SHAs, links CI/CD, candidato único, concessões,
limites e próxima unidade R08. Os documentos r02-r03.md, r07-busca.md, r11-toast.md e
handoff-r01.md registram os lotes e suas medições históricas; o candidato cumulativo atual é
b37873be72013e22e7d2fd7b624752b8bb468a52, SHA256
18f80c3a95dfe2c20ee2fdea1a23655b3a88b8bf9890057c0342efcf9568517c.

A autorização de execução contínua permite preparar os próximos pilotos enquanto as reviews
estão pendentes. R04/R05 foram mantidos separados/condicionais pelo custo visual; R06 está preparado na barra de views salvas com UI 1.7.0, sem troca de lock. R08–R10/R12–R24 seguem como propostas, não entregas concluídas.

Visual gate review: pending human.

R06 preparado: ActionMenu existente na barra de views salvas Admin; 70 pares em 12 superfícies,
foco/teclado/fechamento e callbacks locais verificados. Sem props novas, sem troca de dependência;
UI 1.7.0 já contém o contrato. Popup passa a escapar do recorte do container horizontal. Os
outros menus continuam locais; a concessão exige revisão humana própria.
