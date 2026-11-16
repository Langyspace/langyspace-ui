import * as Common from '../Exercise/Material.shared.styles'
import * as Styled from './OralReviewResult.styles'
import type { OralReviewResultProps } from './OralReviewResult.types'
export function OralReviewResult({
  parts,
  result,
  completedQuestions,
  totalQuestions,
  studentName,
  teacherName,
  date,
  notes,
  onFieldChange,
  onExport,
  onClear,
  exporting = false,
  status,
  labels,
  ...props
}: OralReviewResultProps) {
  const text = {
    student: 'Aluna',
    teacher: 'Professora',
    date: 'Data',
    notes: 'Comentários (opcional)',
    download: 'Baixar PDF',
    clear: 'Limpar notas',
    stars: 'estrelas',
    ...labels,
  }
  const total = parts.reduce((sum, p) => sum + p.score, 0),
    maximum = parts.reduce((sum, p) => sum + p.maximum, 0)
  return (
    <Styled.Root as="section" {...props}>
      <Common.Row>
        <Styled.Total>{total}</Styled.Total>
        <span>
          / {maximum} {text.stars}
        </span>
      </Common.Row>
      <Common.Heading>{result}</Common.Heading>
      <Common.Hint>
        {completedQuestions} / {totalQuestions}
      </Common.Hint>
      {parts.map((part) => (
        <Styled.Part key={part.id}>
          <span>{part.label}</span>
          <progress
            aria-label={part.label}
            value={part.score}
            max={Math.max(1, part.maximum)}
          />
          <span>
            {part.score}/{part.maximum}
          </span>
        </Styled.Part>
      ))}
      <Styled.Fields>
        <label>
          {text.student}
          <input
            value={studentName}
            onChange={(e) => {
              onFieldChange('studentName', e.currentTarget.value)
            }}
          />
        </label>
        <label>
          {text.teacher}
          <input
            value={teacherName}
            onChange={(e) => {
              onFieldChange('teacherName', e.currentTarget.value)
            }}
          />
        </label>
        <label>
          {text.date}
          <input
            type="date"
            value={date}
            onChange={(e) => {
              onFieldChange('date', e.currentTarget.value)
            }}
          />
        </label>
        <label>
          {text.notes}
          <textarea
            value={notes}
            rows={3}
            onChange={(e) => {
              onFieldChange('notes', e.currentTarget.value)
            }}
          />
        </label>
      </Styled.Fields>
      <Common.Row>
        <Common.Action
          type="button"
          variant="brand"
          disabled={exporting || completedQuestions < totalQuestions}
          onClick={onExport}
        >
          {text.download}
        </Common.Action>
        <Common.Action type="button" variant="text" onClick={onClear}>
          {text.clear}
        </Common.Action>
      </Common.Row>
      {status ? <Common.Hint role="status">{status}</Common.Hint> : null}
    </Styled.Root>
  )
}
