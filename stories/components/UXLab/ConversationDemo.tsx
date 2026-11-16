import { useState } from 'react'
import { BranchingConversation } from '../../../src/components/Simulation/BranchingConversation'
import type { ConversationMessage } from '../../../src/components/Simulation/BranchingConversation.types'
import data from '../../materials/UXLab/lab-data.json'
import kim from '../../materials/UXLab/assets/bust_kim.png'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import type { LabDemoProps } from './UXLab.demo.types'
export function ConversationDemo({ level = 'a1' }: LabDemoProps) {
  const graph = data.BR[level]
  const nodes = graph.n as Record<
    string,
    { them?: string; r?: string[][]; end?: string }
  >
  const [path, setPath] = useState([graph.start]),
    [answers, setAnswers] = useState<string[]>([]),
    [draft, setDraft] = useState(''),
    [pending, setPending] = useState<string>()
  const current = nodes[path[path.length - 1] ?? graph.start]!
  const messages: ConversationMessage[] = path.flatMap((id, i) => {
    const node = nodes[id]
    return [
      ...(node?.them
        ? [{ id: `them-${i}`, side: 'incoming' as const, content: node.them }]
        : []),
      ...(answers[i]
        ? [{ id: `me-${i}`, side: 'outgoing' as const, content: answers[i] }]
        : []),
    ]
  })
  if (pending)
    messages.push({ id: 'pending', side: 'outgoing', content: pending })
  const next = (id: string) => {
    const row = current.r?.[Number(id)]
    if (!row?.[2]) return
    setAnswers((old) => [...old, pending ?? row[0] ?? ''])
    setPath((old) => [...old, row[2]!])
    setPending(undefined)
    setDraft('')
  }
  return (
    <BranchingConversation
      contact={{ name: 'Kim', imageUrl: kim, status: 'online' }}
      messages={messages}
      mode={level === 'a1' || pending ? 'choices' : 'free'}
      choices={(level === 'a1' || pending ? (current.r ?? []) : []).map(
        (row, i) => ({ id: String(i), label: pending ? row[1] : row[0] }),
      )}
      onChoice={next}
      draft={draft}
      onDraftChange={setDraft}
      onSend={() => {
        if (draft.trim()) setPending(draft.trim())
      }}
      disabled={false}
      ended={!!current.end}
      status={
        current.end ??
        (pending
          ? 'Como essa mensagem soou? Decidam juntas: a Kim vai reagir a esse tom.'
          : undefined)
      }
      onRestart={() => {
        setPath([graph.start])
        setAnswers([])
        setPending(undefined)
        setDraft('')
      }}
    >
      <Common.Hint>
        {level === 'c2'
          ? 'Sem opções prontas no C2.'
          : 'Choose a reply to Kim.'}
      </Common.Hint>
    </BranchingConversation>
  )
}
