import { useState } from 'react'
import { useSceneAudio } from '../../materials/shared/useSceneAudio'
import headphonesLabel from '../../materials/TrialA1/assets/headphones-label.mp3'
import ballLabel from '../../materials/TrialA1/assets/soccer-ball-label.mp3'
import bookLabel from '../../materials/TrialA1/assets/book-label.mp3'
import dogLabel from '../../materials/TrialA1/assets/dog-label.mp3'
import benchLabel from '../../materials/TrialA1/assets/bench-label.mp3'
import sneakersLabel from '../../materials/TrialA1/assets/sneakers-label.mp3'
import bikeLabel from '../../materials/UXLab/assets/bike-label.mp3'
import picnicLabel from '../../materials/UXLab/assets/picnic-label.mp3'
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
const labeledSceneClips: Readonly<Record<string, string>> = {
  headphones: headphonesLabel,
  'a soccer ball': ballLabel,
  'a book': bookLabel,
  'a dog': dogLabel,
  'a bike': bikeLabel,
  'a picnic': picnicLabel,
  'a bench': benchLabel,
  sneakers: sneakersLabel,
}
export function LabeledSceneDemo() {
  const audio = useSceneAudio(true, labeledSceneClips)
  const [ids, setIds] = useState<string[]>([])
  const labels = [
    ['headphones', 8, 33, [6.2, 22, 12, 18]],
    ['a soccer ball', 41, 74, [33.7, 67.8, 9, 14]],
    ['a book', 73, 45, [69.9, 39.6, 12, 7.1]],
    ['a dog', 57, 63, [41.6, 55.5, 27.1, 34.9]],
    ['a bike', 90, 72, [72.5, 48.4, 26.5, 46.1]],
    ['a picnic', 30.5, 42, [19.8, 32.3, 25.9, 19.6]],
    ['a bench', 89, 32, [63.3, 30.6, 28, 26.5]],
    ['sneakers', 25, 83, [9, 74.6, 20.5, 11.7]],
  ] as const
  return (
    <SceneExplorer
      presentation="labels"
      imageUrl={sceneImage('park')}
      imageAlt="Parque com fones de ouvido, bola, livro, cachorro, bicicleta, piquenique, banco e tênis visíveis."
      hotspots={labels.map(([label, xPercent, yPercent, bounds]) => ({
        id: label,
        label,
        xPercent,
        yPercent,
        targetBounds: {
          xPercent: bounds[0],
          yPercent: bounds[1],
          widthPercent: bounds[2],
          heightPercent: bounds[3],
        },
        prompt: null,
      }))}
      visitedIds={ids}
      onPlayHotspot={audio.play}
      playingId={audio.playingId}
      onSelect={(id) => {
        audio.stop()
        setIds((old) => (old.includes(id) ? old : [...old, id]))
      }}
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
