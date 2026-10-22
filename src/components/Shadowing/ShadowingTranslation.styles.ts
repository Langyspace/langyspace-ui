import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-translation',
})`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  min-height: 1.75rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  > [data-ui-shadowing-translation-content] {
    display: flex;
    width: 100%;
    max-width: 22rem;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.normal};

    &::before {
      content: '';
      display: block;
      width: 1.875rem;
      height: 0.1875rem;
      margin: 0 auto 0.5rem;
      border-radius: ${theme.radius.pill};
      background: ${theme.colors.palette.accent.pink};
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    > [data-ui-shadowing-translation-content] {
      max-width: 32rem;
      font-size: ${theme.typography.fontSize.md};

      &::before {
        width: 2.5rem;
        margin-bottom: ${theme.spacing[3]};
      }
    }
  }
`
