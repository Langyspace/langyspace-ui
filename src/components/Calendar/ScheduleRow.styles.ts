import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../Pressable'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-row',
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${token.spacing5};
  padding-top: ${token.spacing4};
  padding-right: ${token.spacing5};
  padding-bottom: ${token.spacing4};
  padding-left: ${token.spacing5};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  color: ${token.colorContentDefault};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  & + & {
    margin-top: ${token.spacing3};
  }

  &:hover {
    border-color: ${token.colorSurfaceBorderStrong};
  }

  @media (max-width: 900px) {
    align-items: center;
    column-gap: ${token.spacing3};
    padding-right: ${token.spacing4};
    padding-left: ${token.spacing4};
  }

  background: ${token.colorNeutral0};
  &[data-muted='true'] {
    background: ${token.colorNeutral50};
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
  gap: ${token.spacing5};
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  text-align: left;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
  }

  @media (max-width: 900px) {
    grid-template-areas: 'time student';
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: ${token.spacing3};
  }
`

export const Time = styled.span.withConfig({
  componentId: 'lsui-sc-schedule-time',
})`
  display: block;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeLg};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};

  @media (max-width: 900px) {
    grid-area: time;
  }
`

export const Participant = styled.span.withConfig({
  componentId: 'lsui-sc-schedule-participant',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: ${token.spacing3};

  > * {
    min-width: 0;
  }

  @media (max-width: 900px) {
    grid-area: student;
  }
`

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-actions',
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${token.spacing2};

  @media (max-width: 900px) {
    align-self: center;
    justify-content: flex-end;
  }
`
