import { useState } from 'react'
import { ComicRolePlay } from '../../../src/components/Exercise/ComicRolePlay'
import { useMaterialLearner } from '../shared/MaterialLearnerContext'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { comicPanels } from './TrialA1Comic.data'

export function TrialA1Comic() {
  const teacher = useMaterialTeacher()
  const learner = useMaterialLearner()
  const [failedLearnerPhoto, setFailedLearnerPhoto] = useState<string>()
  const [hintedTurnIds, setHints] = useState<string[]>([])
  const [revealedTurnIds, setModels] = useState<string[]>([])
  const learnerWithPhoto = learner && learner.avatarUrl !== failedLearnerPhoto
  return (
    <ComicRolePlay
      aria-label="Create a conversation in the park"
      panels={comicPanels}
      participants={[
        {
          id: 'learner',
          name: learnerWithPhoto ? learner.firstName : 'You',
          avatarUrl: learnerWithPhoto ? learner.avatarUrl : undefined,
        },
        { id: 'teacher', name: teacher.name, avatarUrl: teacher.avatarUrl },
      ]}
      onParticipantImageError={(id, url) => {
        if (id === 'learner') setFailedLearnerPhoto(url)
      }}
      guidance={{
        hintedTurnIds,
        revealedTurnIds,
        onRevealHint: (id) =>
          setHints((old) => (id ? [...new Set([...old, id])] : [])),
        onRevealModel: (id) =>
          setModels((old) => (id ? [...new Set([...old, id])] : [])),
      }}
    />
  )
}
