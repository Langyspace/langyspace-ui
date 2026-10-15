import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-row',
})`
  display: grid;
  grid-template-columns: 5.75rem 1fr auto;
  align-items: center;
  gap: 1.25rem;
  padding-top: 1rem;
  padding-right: 1.25rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  border: 1px solid #ececea;
  border-radius: 0.875rem;
  color: #0a0a0a;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);
  cursor: pointer;

  & + & {
    margin-top: 0.75rem;
  }

  &:hover {
    border-color: #0a0a0a;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
  }

  @media (max-width: 900px) {
    grid-template-areas: 'time student actions';
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    column-gap: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  background: #fff;
  &[data-muted='true'] {
    background: #fafaf9;
    opacity: 0.85;
  }
`
export const Time = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-time',
})`
  color: #0a0a0a;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;

  @media (max-width: 900px) {
    grid-area: time;
  }
`
export const Participant = styled.div.withConfig({
  componentId: 'lsui-sc-schedule-participant',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 0.75rem;

  > div {
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
  gap: 0.5rem;

  @media (max-width: 900px) {
    grid-area: actions;
    align-self: center;
    justify-content: flex-end;
  }
`
