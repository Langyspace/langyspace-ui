import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-row',
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${theme.spacing[5]};
  padding-top: ${theme.spacing[4]};
  padding-right: ${theme.spacing[5]};
  padding-bottom: ${theme.spacing[4]};
  padding-left: ${theme.spacing[5]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  color: ${theme.colors.text.primary};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  & + & {
    margin-top: ${theme.spacing[3]};
  }

  &:hover {
    border-color: ${theme.semantic.border.strong};
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    align-items: center;
    column-gap: ${theme.spacing[3]};
    padding-right: ${theme.spacing[4]};
    padding-left: ${theme.spacing[4]};
  }

  background: ${theme.colors.palette.white};
  &[data-muted='true'] {
    background: ${theme.colors.palette.neutral[100]};
    opacity: 0.85;
  }
`

export const OpenButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-schedule-open',
})`
  display: grid;
  min-width: 0;
  grid-template-columns: 5.75rem minmax(0, 1fr);
  align-items: center;
  gap: ${theme.spacing[5]};
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  text-align: left;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.focusRing};
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    grid-template-areas: 'time student';
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: ${theme.spacing[3]};
  }
`

export const Time = styled.span.withConfig({
  componentId: 'lsui-sc-schedule-time',
})`
  display: block;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    grid-area: time;
  }
`

export const Participant = styled.span.withConfig({
  componentId: 'lsui-sc-schedule-participant',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: ${theme.spacing[3]};

  > * {
    min-width: 0;
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    grid-area: student;
  }
`

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-actions',
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing[2]};

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    align-self: center;
    justify-content: flex-end;
  }
`
