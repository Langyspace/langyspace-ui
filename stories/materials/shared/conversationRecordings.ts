import trialA1Clip06 from '../TrialA1/assets/dialogue/06.mp3'
import clip0 from '../TrialA1/assets/dialogue/01.mp3'
import clip1 from '../TrialA1/assets/dialogue/02.mp3'
import clip2 from '../TrialA1/assets/dialogue/03.mp3'
import clip3 from '../TrialA1/assets/dialogue/04.mp3'
import clip4 from '../TrialA1/assets/dialogue/05.mp3'
import clip27 from '../B201/assets/dialogue/01.mp3'
import clip28 from '../B201/assets/dialogue/02.mp3'
import clip29 from '../B201/assets/dialogue/03.mp3'
import clip30 from '../B201/assets/dialogue/04.mp3'
import clip31 from '../B201/assets/dialogue/05.mp3'
import clip32 from '../B201/assets/dialogue/06.mp3'
import clip33 from '../B201/assets/dialogue/07.mp3'
import clip34 from '../B201/assets/dialogue/08.mp3'
import clip35 from '../B201/assets/dialogue/09.mp3'
import clip36 from '../B201/assets/dialogue/10.mp3'
import clip37 from '../B201/assets/dialogue/11.mp3'
import clip38 from '../B201/assets/dialogue/12.mp3'
import trialA1 from '../TrialA1/TrialA1.content.json'
import b201 from '../B201/B201.content.json'
import type {
  RecordedConversationDefinition,
  RecordedConversationId,
  RecordedConversationTurn,
} from './RecordedDialoguePlayback.types'

const define = (
  id: RecordedConversationId,
  title: string,
  source: readonly { text: string; speaker: string }[],
  turns: readonly RecordedConversationTurn[],
): RecordedConversationDefinition | undefined => {
  if (
    source.length !== turns.length ||
    source.some(
      (line, i) =>
        line.text !== turns[i]?.text ||
        line.speaker.toLowerCase() !== turns[i]?.speaker,
    )
  )
    return undefined
  return {
    id,
    title,
    revision:
      id + ':' + turns.map((turn) => turn.id + ':' + turn.sha256).join('|'),
    turns,
  }
}
export const conversationRecordings: Readonly<
  Record<RecordedConversationId, RecordedConversationDefinition | undefined>
> = {
  'TrialA1:s3': define(
    'TrialA1:s3',
    'Do you like the park?',
    trialA1.p3.lines.map((line) => ({ text: line.en, speaker: line.who })),
    [
      {
        id: 'trial-a1.s3.dialogue.01',
        text: 'Do you like the park, Ana?',
        speaker: 'kim',
        sha256:
          'edc7a459a0618a5fe613d5a76f83c9c1f07a9d90acc0b29a6ab15d03f6604456',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 1.718277,
        src: clip0,
      },
      {
        id: 'trial-a1.s3.dialogue.02',
        text: 'Yes, I do! I love the park. And you?',
        speaker: 'ana',
        sha256:
          'fa6f473159f4c20314fb6523d23c0e9fb1ed343abc3f77f5496c75ed22a014db',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 2.693515,
        src: clip1,
      },
      {
        id: 'trial-a1.s3.dialogue.03',
        text: 'Me too. I like music and books',
        speaker: 'kim',
        sha256:
          '06d51b75a1665979e0723857a6fa535219b2f128b0aeddfa514a6f4c8e544478',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 3.018594,
        src: clip2,
      },
      {
        id: 'trial-a1.s3.dialogue.04',
        text: 'Books? I don’t like books. I like soccer!',
        speaker: 'ana',
        sha256:
          'bb0dd82adcc0cf892eed65dca29d1841b6e338a02b8c83620ba422ebab1f7798',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 2.693515,
        src: clip3,
      },
      {
        id: 'trial-a1.s3.dialogue.05',
        text: 'Soccer? Cool!',
        speaker: 'kim',
        sha256:
          '26f3a266c163d4f766df544b47b3a7d75a2ad011b2f2236c02218c24db19ed4f',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 1.811156,
        src: clip4,
      },
      {
        id: 'trial-a1.dialogue.06',
        text: 'I play soccer here with my friends',
        speaker: 'ana',
        sha256:
          'e6a975a847d662dfd902e8a70e58da2f772ca6a7924ddf4f29633734239dc16a',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 1.996916,
        src: trialA1Clip06,
      },
    ],
  ),
  // Reserved legacy ID; the rebuilt A201 binds its new recordings directly.
  'A201:s6': undefined,
  // Reserved legacy ID; the reviewed B1/B2 dialogue binds its eight MP3s directly.
  'TrialB1:s3': undefined,
  // Reserved legacy ID; the reviewed C1/C2 dialogue binds its eight MP3s directly.
  'TrialB2:s3': undefined,
  'B201:s6': define(
    'B201:s6',
    'How was New York? (1/2)',
    b201.dialogue
      .slice(0, 6)
      .map((line) => ({ text: line.text, speaker: line.who })),
    [
      {
        id: 'D.1',
        text: 'So, how was New York?',
        speaker: 'kim',
        sha256:
          '93a15011e0cf2561e2a3f0b8848d71a8a02811845bcfa5f7e0262ba46e5a850a',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 2.043356,
        src: clip27,
      },
      {
        id: 'D.2',
        text: 'Pretty good, but on the second day, my phone died at four in the afternoon.',
        speaker: 'ana',
        sha256:
          '737019063aae3148debd1e0a129b5a62b7cd83df100254568fed82120ec1e932',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 4.411791,
        src: clip28,
      },
      {
        id: 'D.3',
        text: 'Oh no! Why?',
        speaker: 'kim',
        sha256:
          '6b678eff73cd89f0306664024e56ca783c1fbe212897bc459bb74034be0456b0',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 1.625397,
        src: clip29,
      },
      {
        id: 'D.4',
        text: 'I’d been using it as a map all day, and I didn’t notice how low the battery was. And I’d left my charger at the hotel.',
        speaker: 'ana',
        sha256:
          'f2120086fd0976cd446c389d5a9c58f3bcf38b096fcdc132773797b639830934',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 7.383946,
        src: clip30,
      },
      {
        id: 'D.5',
        text: 'Why didn’t you go back to the hotel?',
        speaker: 'kim',
        sha256:
          '01f0e08b9b3061eb44cf6978187337003eb3f0febaecd92866fb4b4f286f86e8',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 2.229116,
        src: clip31,
      },
      {
        id: 'D.6',
        text: 'I tried, but I got lost. And the team dinner was at seven. The address was in a message from Raj!',
        speaker: 'ana',
        sha256:
          '0d9b783611d996c1fc4c9b33ba7313992893849a0d1e38764ae1749dc13d45a1',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 6.965986,
        src: clip32,
      },
    ],
  ),
  'B201:s62': define(
    'B201:s62',
    'How was New York? (2/2)',
    b201.dialogue
      .slice(6)
      .map((line) => ({ text: line.text, speaker: line.who })),
    [
      {
        id: 'D.7',
        text: 'So what did you do?',
        speaker: 'kim',
        sha256:
          'a1357fcacb5613c2d9b389232574553c504d545516daef07c5c8327387496309',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 1.346757,
        src: clip33,
      },
      {
        id: 'D.8',
        text: 'I asked a doorman for help, and he told me about a café. But there were no free outlets.',
        speaker: 'ana',
        sha256:
          'daba49b01161ab81b4a5b0b2afa23c9de8a1e4a6618368ad225ab272c15ea124',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 5.24771,
        src: clip34,
      },
      {
        id: 'D.9',
        text: 'Oh no. And then?',
        speaker: 'kim',
        sha256:
          '4ff4119b2b5acba0978defdbc1f99a1c103280c7974ba29802de637423d0b35b',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 1.904036,
        src: clip35,
      },
      {
        id: 'D.10',
        text: 'I’d been waiting there alone for twenty minutes when a woman lent me her power bank. Luckily, I had my cable.',
        speaker: 'ana',
        sha256:
          'f34748a9b643abb6ac5c96816224c02217cd037541d2c8bb0fd8e702b6d9259e',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 6.315828,
        src: clip36,
      },
      {
        id: 'D.11',
        text: 'So did you make it to the dinner?',
        speaker: 'kim',
        sha256:
          'be745a049fa7d457fd4ea3379bde8eb6fefd6d1d6d35d69a34a2d538112ce0cb',
        voiceId: 'Nhs7eitvQWFTQBsf0yiT',
        durationSeconds: 2.321995,
        src: clip37,
      },
      {
        id: 'D.12',
        text: 'Eventually, yes. I caught a taxi and got there at eight. By then, they’d been waiting for an hour!',
        speaker: 'ana',
        sha256:
          '2a4c125031bc138ef7c33a1bc570a15a42c79b8535a0c50f63e1b8d619833290',
        voiceId: 'cgSgspJ2msm6clMCkdW9',
        durationSeconds: 6.873107,
        src: clip38,
      },
    ],
  ),
}
