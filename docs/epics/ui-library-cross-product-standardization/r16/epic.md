# R16 — PhoneField compartilhado

Problema: Student/Teacher duplicam apresentação, seletor e busca de país. Objetivo: compartilhar
uma receita visual e interação de seleção, mantendo máscara, normalização, E.164, caret e paste
nos produtos. UI primeiro; Student /login, /registration, /concluir-cadastro, /perfil/editar;
Teacher /login e /cadastro. Admin/Site/Cupom ficam fora: receitas/modelos diferentes.

Impacto direct. Sucesso: dois consumers reais, estilos/JSX duplicados removidos, mesma geometria
em 360/361/390/1440, rótulos e ref funcionais, sem alteração de serviço/OTP/escrita. Fora: provedores,
países suportados/ordem, regras de telefone, validação de identidade e refatoração de páginas.
Autorização de integração contínua em ../autorizacao-execucao-continua.md.
