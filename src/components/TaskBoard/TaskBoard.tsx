import { useId } from 'react'
import { Avatar } from '../Avatar/Avatar'
import * as S from './TaskBoard.styles'
import type { TaskBoardProps } from './TaskBoard.types'

export function TaskBoard({
  columns,
  'aria-label': label = 'Task board',
  ...props
}: TaskBoardProps) {
  const id = useId()
  return (
    <S.Root aria-label={label} {...props}>
      <S.Columns $count={columns.length}>
        {columns.map((column, index) => (
          <S.Column key={column.id} aria-labelledby={`${id}-${index}`}>
            <S.Heading id={`${id}-${index}`}>{column.title}</S.Heading>
            <S.Cards aria-label={column.title}>
              {column.cards.map((card) => (
                <S.Card key={card.id}>
                  <S.Title>{card.title}</S.Title>
                  {card.assignee ? (
                    <S.Owner>
                      <Avatar
                        size="sm"
                        imageUrl={card.assignee.imageUrl}
                        initials={card.assignee.name.slice(0, 1)}
                        aria-hidden={false}
                        aria-label={card.assignee.name}
                        title={card.assignee.name}
                      />
                    </S.Owner>
                  ) : null}
                </S.Card>
              ))}
            </S.Cards>
          </S.Column>
        ))}
      </S.Columns>
    </S.Root>
  )
}
