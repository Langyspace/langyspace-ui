import { styled } from 'styled-components'
import { Button } from '../Button/Button'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { Editor as NotesEditor } from './SlideNotes.styles'
export const Root = styled.main.withConfig({
  componentId: 'lsui-sc-slide-notes-window',
})`
  min-height: 100dvh;
  height: 100dvh;
  box-sizing: border-box;
  overflow-y: auto;
  padding: max(${theme.spacing[4]}, env(safe-area-inset-top, 0px))
    max(${theme.spacing[4]}, env(safe-area-inset-right, 0px))
    max(${theme.spacing[4]}, env(safe-area-inset-bottom, 0px))
    max(${theme.spacing[4]}, env(safe-area-inset-left, 0px));
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).canvas};
  font-family: ${theme.typography.fontFamily.sans};
`
export const Editor = styled(NotesEditor)`
  min-height: ${theme.spacing[24]};
`
export const Context = styled.p`
  margin: 0;
  overflow-wrap: anywhere;
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.5;
  color: ${(p) => resolveSlideTheme(p).muted};
`
export const Status = styled.p`
  min-height: ${theme.spacing[5]};
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.5;
  overflow-wrap: anywhere;
`
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  align-items: center;
`
export const Save = styled(Button)`
  margin-inline-start: auto;
`
export const Choice = styled(Button)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  min-height: 40px;
  white-space: normal;
  text-align: start;
`
export const Choices = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: ${theme.spacing[2]};
  max-height: 40dvh;
  overflow-y: auto;
  min-height: 0;
`
