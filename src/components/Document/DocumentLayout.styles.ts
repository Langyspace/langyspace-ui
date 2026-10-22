import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Layout = styled.div.withConfig({
  componentId: 'lsui-sc-document-layout',
})`
  box-sizing: border-box;
  display: grid;
  width: min(100%, 86rem);
  gap: ${theme.spacing[8]};
  margin: 0 auto;
  padding: clamp(1.5rem, 4svh, 2.5rem) ${theme.spacing[5]}
    clamp(3rem, 8svh, 5rem);
  @media (min-width: ${theme.breakpoints.md}) {
    padding-right: ${theme.spacing[8]};
    padding-left: ${theme.spacing[8]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: minmax(13rem, 0.32fr) minmax(0, 1fr);
    align-items: start;
    gap: 3rem;
  }
`

export const Aside = styled.aside.withConfig({
  componentId: 'lsui-sc-document-aside',
})`
  display: grid;
  gap: ${theme.spacing[5]};
  @media (min-width: ${theme.breakpoints.lg}) {
    position: sticky;
    top: ${theme.spacing[6]};
  }
`

export const Eyebrow = styled.p.withConfig({
  componentId: 'lsui-sc-document-eyebrow',
})`
  margin: 0;
  color: ${theme.semantic.foreground.brand};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
`

export const Title = styled.h1.withConfig({
  componentId: 'lsui-sc-document-title',
})`
  max-width: 13ch;
  margin: ${theme.spacing[2]} 0 0;
  font-size: clamp(${theme.typography.fontSize['3xl']}, 7vw, 3.5rem);
  letter-spacing: 0;
  line-height: 1.1;
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: clamp(${theme.typography.fontSize['3xl']}, 3vw, 2.5rem);
  }
`

export const Meta = styled.p.withConfig({
  componentId: 'lsui-sc-document-meta',
})`
  margin: ${theme.spacing[3]} 0 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Summary = styled.ul.withConfig({
  componentId: 'lsui-sc-document-summary',
})`
  display: grid;
  gap: ${theme.spacing[3]};
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SummaryItem = styled.li.withConfig({
  componentId: 'lsui-sc-document-summary-item',
})`
  border-left: 1px solid ${theme.colors.accent.primary};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  padding-left: ${theme.spacing[3]};
`

export const Article = styled.article.withConfig({
  componentId: 'lsui-sc-document-article',
})`
  display: grid;
  gap: ${theme.spacing[8]};
  max-width: 48rem;
`

export const Intro = styled.div.withConfig({
  componentId: 'lsui-sc-document-intro',
})`
  display: grid;
  gap: ${theme.spacing[4]};
`

export const Paragraph = styled.p.withConfig({
  componentId: 'lsui-sc-document-paragraph',
})`
  margin: 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.7;
`

export const Section = styled.section.withConfig({
  componentId: 'lsui-sc-document-section',
})`
  display: grid;
  gap: ${theme.spacing[4]};
  border-top: 1px solid ${theme.colors.border.subtle};
  padding-top: ${theme.spacing[6]};
`

export const SectionTitle = styled.h2.withConfig({
  componentId: 'lsui-sc-document-section-title',
})`
  margin: 0;
  font-size: ${theme.typography.fontSize.xl};
  letter-spacing: 0;
  line-height: ${theme.typography.lineHeight.snug};
`

export const SectionBody = styled.div.withConfig({
  componentId: 'lsui-sc-document-section-body',
})`
  display: grid;
  gap: ${theme.spacing[4]};
`
