import { styled, keyframes, css } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const descriptionStyle = css`
  max-width: 22rem;
  margin: 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-panel',
})`
  display: flex;
  min-height: min(70svh, 34rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};
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
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.palette.white};
  background: ${theme.colors.accent.primary};
  animation: ${rise} 0.32s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-practice-result-title',
})`
  margin: 0;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
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
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[1]};

  > button {
    width: 100%;
    align-self: stretch;
  }
`
