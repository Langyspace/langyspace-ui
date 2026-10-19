import * as token from '../../foundations/tokenValues'
import { styled, keyframes, css } from 'styled-components'
import { quizRecipe } from '../../foundations/quizRecipe'

const descriptionStyle = css`
  max-width: 22rem;
  margin: 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-panel',
})`
  display: flex;
  min-height: min(70svh, 34rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${token.spacing4};
  text-align: center;

  > p {
    ${descriptionStyle}
  }
`

const rise = keyframes`
  from { opacity: 0; transform: translateY(1.875rem); }
  to { opacity: 1; transform: translateY(0); }
`

export const Mark = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-mark',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5.25rem;
  height: 5.25rem;
  border-radius: ${quizRecipe.radius.circle};
  color: ${token.colorNeutral0};
  background: ${token.colorAccentDefault};
  animation: ${rise} 0.32s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-practice-result-title',
})`
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSize2xl};
  font-weight: ${token.typographyFontWeightBold};
`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-practice-result-description',
})`
  ${descriptionStyle}
`

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-actions',
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${token.spacing2};
  margin-top: ${token.spacing1};

  > button {
    width: 100%;
    align-self: stretch;
  }
`
