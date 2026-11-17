import { useState } from 'react'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { sceneImage } from '../../materials/shared/sceneAssets'
import kim from '../../materials/UXLab/assets/bust_kim.png'
export function VideoCallDemo() {
  const [poor, setPoor] = useState(false),
    [ended, setEnded] = useState(false)
  return (
    <CallSimulation
      presentation="video"
      contactName="Kim"
      initials="K"
      avatarUrl={kim}
      state={ended ? 'ended' : 'connected'}
      elapsedLabel="00:12"
      signalPoor={poor}
      onSignalToggle={() => setPoor(!poor)}
      onCall={() => {
        setPoor(false)
        setEnded(false)
      }}
      onHangUp={() => {
        setPoor(false)
        setEnded(true)
      }}
    >
      <p>Peça para repetir quando o sinal cair.</p>
    </CallSimulation>
  )
}
export function LabeledSceneDemo() {
  const [ids, setIds] = useState<string[]>([])
  const labels = [
    ['music', 13, 61],
    ['soccer', 38, 80],
    ['a book', 77, 52],
    ['a dog', 59, 84],
    ['a bike', 86, 88],
    ['a picnic', 37, 45],
  ] as const
  return (
    <SceneExplorer
      presentation="labels"
      imageUrl={sceneImage('park')}
      imageAlt="Parque com seis objetos"
      hotspots={labels.map(([label, xPercent, yPercent]) => ({
        id: label,
        label,
        xPercent,
        yPercent,
        prompt: null,
      }))}
      visitedIds={ids}
      onSelect={(id) =>
        setIds((old) => (old.includes(id) ? old : [...old, id]))
      }
    />
  )
}
export function GuidedRolePlayDemo() {
  const [ids, setIds] = useState<string[]>([]),
    [support, setSupport] = useState(false)
  return (
    <RolePlayExercise
      presentation="tracker"
      density="compact"
      situation="Uma ligação entre amigos."
      image={{ src: sceneImage('video-call'), alt: 'Uma videochamada' }}
      steps={[
        'Pergunte onde ela está.',
        'Peça para repetir.',
        'Troquem os papéis.',
      ].map((label, i) => ({ id: String(i), label }))}
      completedIds={ids}
      onStepToggle={(id) =>
        setIds((old) =>
          old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
        )
      }
      support={['Where are you?', 'Can you say that again?']}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      labels={{
        show: 'Dica',
        hide: 'Esconder dica',
        joiner: 'de',
        progress: '',
      }}
    />
  )
}
