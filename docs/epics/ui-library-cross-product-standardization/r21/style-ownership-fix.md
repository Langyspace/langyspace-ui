# Correção do owner dos estilos

Release1.17.1 run38396771518 falhou no LSUI010: QuizFeedback importava styles privados de QuizOption.
Mover mark/SVG para primitive interna QuizResponseMark e recipe para foundations; cada componente
usa o owner interno comum, sem import de style privado de outro componente. Não enfraquecer audit.
Contrato público, DOM estrutural, SVG, cores e geometria preservados; só paths privados/classes
geradas podem mudar. Patch1.17.2; tags anteriores preservadas. Validar audit focado, stories dos dois
owners e pacote/API/SSR. Renova-se evidência UI para provar igualdade antes de adotar o oficial.

Audit LSUI010 passou (213 fontes). Dez stories com a11y passaram. API pública idêntica49/111;
165 d.ts (paths privados movidos). Build/bundle/pacote/SSR instalado passaram.56 pares PNG byte
idênticos; medidas variam só<0.14px durante hover transition. Sem alteração da aparência.
