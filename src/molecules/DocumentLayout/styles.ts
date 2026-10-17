import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Layout = styled.div.withConfig({
  componentId: 'lsui-sc-document-layout',
})`
  box-sizing: border-box;
  display: grid;
  width: min(100%, 86rem);
  gap: ${token.spacing8};
  margin: 0 auto;
  padding: clamp(1.5rem, 4svh, 2.5rem) ${token.spacing5} clamp(3rem, 8svh, 5rem);
  @media (min-width: 768px) {
    padding-right: ${token.spacing8};
    padding-left: ${token.spacing8};
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(13rem, 0.32fr) minmax(0, 1fr);
    align-items: start;
    gap: 3rem;
  }
`

export const Aside = styled.aside.withConfig({
  componentId: 'lsui-sc-document-aside',
})`
  display: grid;
  gap: ${token.spacing5};
  @media (min-width: 1024px) {
    position: sticky;
    top: ${token.spacing6};
  }
`

export const Eyebrow = styled.p.withConfig({
  componentId: 'lsui-sc-document-eyebrow',
})`
  margin: 0;
  color: ${token.colorBrandDefault};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightBold};
  text-transform: uppercase;
`

export const Title = styled.h1.withConfig({
  componentId: 'lsui-sc-document-title',
})`
  max-width: 13ch;
  margin: ${token.spacing2} 0 0;
  font-size: clamp(${token.typographyFontSize3xl}, 7vw, 3.5rem);
  letter-spacing: 0;
  line-height: 1.1;
  @media (min-width: 1024px) {
    font-size: clamp(${token.typographyFontSize3xl}, 3vw, 2.5rem);
  }
`

export const Meta = styled.p.withConfig({
  componentId: 'lsui-sc-document-meta',
})`
  margin: ${token.spacing3} 0 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export const Summary = styled.ul.withConfig({
  componentId: 'lsui-sc-document-summary',
})`
  display: grid;
  gap: ${token.spacing3};
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SummaryItem = styled.li.withConfig({
  componentId: 'lsui-sc-document-summary-item',
})`
  border-left: 1px solid ${token.colorAccentDefault};
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  padding-left: ${token.spacing3};
`

export const Article = styled.article.withConfig({
  componentId: 'lsui-sc-document-article',
})`
  display: grid;
  gap: ${token.spacing8};
  max-width: 48rem;
`

export const Intro = styled.div.withConfig({
  componentId: 'lsui-sc-document-intro',
})`
  display: grid;
  gap: ${token.spacing4};
`

export const Paragraph = styled.p.withConfig({
  componentId: 'lsui-sc-document-paragraph',
})`
  margin: 0;
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeMd};
  line-height: 1.7;
`

export const Section = styled.section.withConfig({
  componentId: 'lsui-sc-document-section',
})`
  display: grid;
  gap: ${token.spacing4};
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  padding-top: ${token.spacing6};
`

export const SectionTitle = styled.h2.withConfig({
  componentId: 'lsui-sc-document-section-title',
})`
  margin: 0;
  font-size: ${token.typographyFontSizeXl};
  letter-spacing: 0;
  line-height: ${token.typographyLineHeightSnug};
`

export const SectionBody = styled.div.withConfig({
  componentId: 'lsui-sc-document-section-body',
})`
  display: grid;
  gap: ${token.spacing4};
`
