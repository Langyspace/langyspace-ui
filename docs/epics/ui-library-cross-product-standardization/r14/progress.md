# Progresso R14

2026-10-12: D01 concluído. Student/Teacher têm trilha de 6px e cores/raio equivalentes em cards de prática, três branches por produto. Divergência principal é a transição: Student 520ms e reduced none; Teacher sem transição. Contrato proposto decorativo, valor 0–1 e ref/atributos, sem props visuais. Admin GuidedWorkSession tem altura .42rem, outro fundo/transição; InvoiceBatch é progressbar anunciado em lote financeiro. Site tem demonstrações diferentes; Cupom sem consumidor equivalente.

Custo explicitado: redução inicial de 12 linhas JSX brutas antes de imports, sem apagar styled ainda consumidos. API/capacidade são propostas, nenhum pacote R14 foi publicado. R13 adiado após discovery dos cinco projetos.

D02 concluída; a captura Before D03 e as adoções dependem da integração R12 autorizada pela owner. Preparar a UI não altera os produtos. Aceite R12 não é aceite R14. O planejamento atual não altera runtime.

D02 preparada localmente: PracticeProgressBar com valor 0–1, atributos/ref nativos e decoração forçada; nove casos unit passam (limites/NaN/Infinity e nome/keyboard/callback único). API deliberada: 43 valores, 103 tipos, 144 declarations, preservando todos os hashes anteriores salvo barrel. Bundle 106876 raw / 22586 gzip (+857/+199 vs 1.11.0), entry progress 3658/1468; famílias anteriores byte-métricas iguais. Candidato ainda não publicado. Próxima subtarefa: D03, captura Before após R12 oficial.

UI: typecheck passou; 48 PNGs originais da composição das cinco stories em quatro larguras e normal/reduced, incluindo antes/depois da atualização de valor. CSS computado confirma 6px e transição 520ms/none, sem overflow. Ainda sem imagens de adoção e sem PRs de produtos R14; não declarar D03/D04/D05 completos. A parte UI poderá ser revisada separadamente em draft enquanto R12 publica, sem auto-merge.

Candidato 1.12.0 empacotado somente com audit/dist/LICENSE/README/package.json. Evidências e checks de contratos novos preparados; os smokes de browser/SSR foram ampliados, execução completa pertence à CI. Review visual da UI e dos futuros PRs de produtos permanece própria de R14.

Visual gate review: pending human — R14 UI.
