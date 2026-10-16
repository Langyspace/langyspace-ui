# Publicação autorizada — 16/10/2026

O product owner solicitou publicar as quatro revisões apresentadas e alinhar main/staging local/remotamente. O aceite de entrega fica vinculado às imagens registradas; novas diferenças visuais exigem revisão atual.

Próxima tarefa: corrigir CI da UI, confirmar equivalência visual e publicar UI 2.1.0. Depois adotar o artefato oficial, integrar em staging, validar Hosting/E2E e promover a mesma fonte para produção. Recibos locais ignorados: ~/.local/langyspace-ui-visual-fixes-20261016/production-20261016/.

CI da UI executou: testes e quatro shards visuais passaram. Falhas reais: LSUI010 em três imports de estilos privados e limite raw de flashcardPresentation. Correção: marcadores DOM sem props novas e seletores de composição locais; remover apenas comentários de região gerados pelo compilador na distribuição, preservando anotações de tree shaking e licenças. Limites de bundle permanecem inalterados. A fonte dos componentes e o CSS continuam legíveis; sem refatorações cosméticas para perseguir bytes.

Teacher/Student recusaram executar por cobrança: anotação confirmada no GitHub. Aplicar a exceção manual temporária somente aos jobs recusados, com staging real, build/guards/jornadas aplicáveis e read-back de assets. Nenhum status CI será fabricado. Falhas reais continuam bloqueando.
