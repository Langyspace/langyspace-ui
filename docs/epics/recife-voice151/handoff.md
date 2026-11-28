# Recife — continuidade de voz151

Relato: a fala em Meet Bia não soa como a mesma pessoa nas partes em inglês e português. A fonte136 realmente usava duas requisições/modelos: Jessica Multilingualv2 no prefixo inglês e Jessica Flashv2.5/pt no nome da cidade, unidas localmente. Isso confirma a montagem; atribuir a impressão perceptiva exclusivamente ao modelo continua sendo uma inferência.

Quatro bindings foram substituídos: D.4/G.6/FS.1/FS.2. Agora cada arquivo contém uma geração contínua da frase completa, mesma voz Jessica cgSgspJ2msm6clMCkdW9, modelo eleven_v4. Somente Recife recebe IPA /ʁeˈsifi/ no input, conforme documentação atual do provider. Textos de exibição e IDs permanecem literais. Quatro chamadas, zero retry; nenhuma união de trechos, trim, crossfade, ganho ou time-stretch. Preservados33bindings e a proveniência histórica136. Style/speaker_boost não são suportados pelo modelo e não foram enviados.

Verificações focadas:37IDs únicos e hashes ativos conferidos; os quatro MP3 são byte-idênticos às respostas originais do provider; os outros33registros e gravações não mudaram. Na prévia local8851, Meet Bia foi recarregada e o clique na última fala de Ana entrou em reprodução sem mensagem de indisponibilidade. Isso verifica o player, não aprovação de sotaque, timbre ou naturalidade.

Fonte atualiza a guideline para distinguir voiceId de continuidade perceptiva entre modelos. Não altera interface, layout, texto de aula, respostas, letras ou Souza já validados pela usuária. A correção fica local para escuta; staging e produção ainda conservam a versão150.

Proveniência ativa: stories/materials/A103/recife151-provenance.json. Requisições exatas, respostas, hashes e receipt do check em outputs/recife151 no workspace da tarefa.

Referência: https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices#ipa-with-eleven-v4 . Disponibilidade do modelo e voz consultada na API antes das gerações. A troca de modelo pode afetar a interpretação da voz e requer escuta; não há promessa de qualidade perceptiva sem essa revisão.

Sem pacote, exportação neutral, build Teacher, Hosting, Student/backend/dados, registry ou publicação. CI/deploy não acionados durante a preparação local.

Visual gate review: not applicable — somente gravações/proveniência e documentação; a interface renderizada permanece igual. Revisão acústica: pending human.
