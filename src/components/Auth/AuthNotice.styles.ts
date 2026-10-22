import { css, styled } from 'styled-components'
import type { AuthNoticeTone } from './AuthNotice.types'
import { theme } from '../../foundations/theme/theme'

const toneStyles = {
  error: css`
    color: ${theme.colors.feedback.danger};
    background-color: ${theme.colors.feedback.dangerSubtle};
  `,
  info: css`
    color: ${theme.colors.feedback.info};
    background-color: ${theme.colors.feedback.infoSubtle};
  `,
} satisfies Record<AuthNoticeTone, ReturnType<typeof css>>

export const Notice = styled.p.withConfig({
  componentId: 'lsui-sc-auth-notice',
})<{ $tone: AuthNoticeTone }>`
  margin: 0;
  border-radius: ${theme.radius.xl};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.sm};

  ${({ $tone }) => toneStyles[$tone]}

  code {
    font-family:
      ui-monospace, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
      monospace;
  }

  a {
    color: inherit;
    font-weight: ${theme.typography.fontWeight.semibold};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em;
  }

  a:hover,
  a:focus-visible {
    text-decoration-thickness: 2px;
  }
`
