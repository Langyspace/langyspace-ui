import { useState } from 'react'
import { InterviewSimulation } from '../../../src/components/Simulation/InterviewSimulation'
import data from '../../materials/UXLab/lab-data.json'
import jun from '../../materials/UXLab/assets/jun.png'
import { useLabSpeech } from './useLabSpeech'
import type { LabDemoProps } from './UXLab.demo.types'
export function InterviewDemo({ level = 'a1' }: LabDemoProps) {
  const d = data.IVD[level],
    turns = d.q.flat()
  const [index, setIndex] = useState(-1),
    [cc, setCc] = useState(d.cc),
    [mic, setMic] = useState(true),
    [camera, setCamera] = useState(true),
    [hand, setHand] = useState(false),
    [ended, setEnded] = useState(false)
  const speech = useLabSpeech()
  const play = (i: number) => {
    const line = turns[i]
    if (line) {
      setIndex(i)
      speech.play(line, level === 'c2' ? 1 : 0.85)
    }
  }
  return (
    <InterviewSimulation
      title={d.job}
      interviewer={{ name: 'Jun', imageUrl: jun }}
      learnerName="Maria"
      caption={index >= 0 ? turns[index] : undefined}
      captionsEnabled={cc}
      onCaptionsChange={setCc}
      microphoneEnabled={mic}
      onMicrophoneChange={setMic}
      cameraEnabled={camera}
      onCameraChange={setCamera}
      handRaised={hand}
      onHandChange={setHand}
      turnIndex={index}
      turnCount={turns.length}
      onNext={() => play(index + 1)}
      onPrevious={() => play(index - 1)}
      onReplay={() => play(index)}
      onEnd={() => {
        speech.stop()
        setEnded(true)
      }}
      ended={ended}
      playing={speech.playing}
      status={speech.status}
    />
  )
}
