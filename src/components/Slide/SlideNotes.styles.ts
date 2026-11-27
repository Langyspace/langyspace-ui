import { styled } from 'styled-components'
import { Button } from '../Button/Button'
import { TextareaInput } from '../Form/TextareaInput'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-slide-notes',
})`
  position: absolute;
  z-index: 5;
  top: calc(
    ${(p) => resolveSlideTheme(p).headerHeight} +
      env(safe-area-inset-top, 0px) + ${theme.spacing[2]}
  );
  right: max(${theme.spacing[4]}, env(safe-area-inset-right, 0px));
  width: min(
    ${(p) => resolveSlideTheme(p).notesWidth},
    calc(100% - ${theme.spacing[8]})
  );
  height: min(
    ${(p) => resolveSlideTheme(p).notesHeight},
    calc(
      100% - ${(p) => resolveSlideTheme(p).headerHeight} -
        ${theme.spacing[8]} - env(safe-area-inset-top, 0px)
    )
  );
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]};
  border: 1.5px solid ${(p) => resolveSlideTheme(p).notesBorder};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).surface};
  box-shadow: ${(p) => resolveSlideTheme(p).notesShadow};
  box-sizing: border-box;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`
export const Heading = styled.b`
  min-width: 0;
  overflow-wrap: anywhere;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  flex: 1;
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.4;
  span {
    color: ${(p) => resolveSlideTheme(p).accent};
  }
`
export const Action = styled(Button)`
  min-height: 32px;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-width: 1.5px;
  border-color: ${(p) => resolveSlideTheme(p).border};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).surface};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: 0.8125rem;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 20px;
  &&:hover:not(:disabled),
  &&:active:not(:disabled) {
    transform: none;
    background: ${(p) => resolveSlideTheme(p).surface};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => resolveSlideTheme(p).accent};
    outline-offset: 4px;
    box-shadow: none;
  }
`
export const Editor = styled(TextareaInput)`
  flex: 1;
  transition: none;
  resize: none;
  min-height: 0;
  border: 1.5px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  padding: ${theme.spacing[3]};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).canvas};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.5;
  &:focus-visible {
    outline: 2px solid ${(p) => resolveSlideTheme(p).accent};
    outline-offset: 0;
    box-shadow: none;
    border-color: ${(p) => resolveSlideTheme(p).border};
    background: ${(p) => resolveTheme(p).colors?.surface.canvas ?? theme.colors.surface.canvas};
  }
`
