# Requisitos — R01

- Manter h2 para título, p para descrição e span para o destaque; preservar children ricos e copy.
- API sem variantes, flags de produto, props livres de geometria ou hooks de domínio. Atributos
  HTML nativos, className e ref seguem o contrato React existente da biblioteca.
- Usar tokens compartilhados e constantes privadas para a geometria específica da família.
- Preservar título 1.75rem abaixo de 768px e 2.375rem a partir de 768px, peso 700, tracking 0,
  line-height 1.1; descrição limitada a 25rem, fonte 0.875rem, line-height 1.55 e margem fluida
  clamp(0.5rem, 1.5svh, 0.75rem); destaque #ff1f5c. Sem alteração de fonte/foco/grid/scroll.
- Título/descrição independem de ThemeProvider do produto; nenhum novo stylesheet global.
- Provar duas composições reais, Student e Teacher, além de texto longo, em stories e coverage.
- PRs visuais contêm somente Evidências / Antes / Depois com imagens acessíveis.
- Capturar /login em telefone, telefone inválido e OTP, em 390, 768, 900, 901 e 1440px, altura 1100px.
  Mesmos fixtures sintéticos, fonte local, tema, relógio e viewport nas duas revisões.
- Não usar produção para capturar, não enviar OTP nem autenticar pessoa real.
- Review humana por PR antes do merge. Adoção pode ser preparada em draft contra candidato imutável;
  sua entrega final aguarda UI aprovada/artefato oficial, sem auto-merge.
