import { ResultMark } from './PracticeResultPanel'
import * as Styled from './PracticeResultPanel.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export type PracticeResultMarkProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>

/** @deprecated Prefer PracticeResultPanel; retained for existing consumers. */
export function PracticeResultMark(props: PracticeResultMarkProps) {
  return <ResultMark {...props} />
}

export interface PracticeResultTitleProps extends ComponentPropsWithRef<'h2'> {
  children: ReactNode
}

/** @deprecated Prefer PracticeResultPanel; retained for existing consumers. */
export function PracticeResultTitle({
  children,
  ...props
}: PracticeResultTitleProps) {
  return <Styled.Title {...props}>{children}</Styled.Title>
}

export interface PracticeResultDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
}

/** @deprecated Prefer PracticeResultPanel; retained for existing consumers. */
export function PracticeResultDescription({
  children,
  ...props
}: PracticeResultDescriptionProps) {
  return <Styled.Description {...props}>{children}</Styled.Description>
}

export interface PracticeResultActionsProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer PracticeResultPanel; retained for existing consumers. */
export function PracticeResultActions({
  children,
  ...props
}: PracticeResultActionsProps) {
  return <Styled.Actions {...props}>{children}</Styled.Actions>
}
