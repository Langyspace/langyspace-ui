import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { AuthNoticeTone } from './AuthNotice'

const toneStyles = {
  error: css`
    color: ${token.colorFeedbackDanger};
    background-color: ${token.colorFeedbackDangerSoft};
  `,
  info: css`
    color: ${token.colorFeedbackInfo};
    background-color: ${token.colorFeedbackInfoSoft};
  `,
} satisfies Record<AuthNoticeTone, ReturnType<typeof css>>

export const Notice = styled.p.withConfig({
  componentId: 'lsui-sc-auth-notice',
})<{ $tone: AuthNoticeTone }>`
  margin: 0;
  border-radius: ${token.radiusRounded};
  padding: ${token.spacing3} ${token.spacing4};
  font-size: ${token.typographyFontSizeSm};

  ${({ $tone }) => toneStyles[$tone]}

  code {
    font-family:
      ui-monospace, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
      monospace;
  }

  a {
    color: inherit;
    font-weight: ${token.typographyFontWeightSemibold};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em;
  }

  a:hover,
  a:focus-visible {
    text-decoration-thickness: 2px;
  }
`
