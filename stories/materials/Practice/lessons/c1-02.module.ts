import type { PreparedPractice } from '../Practice.types'
import data from './c1-02.json'
import asset0 from '../assets/audio/a4c9176d856adf49bb44885ac5a3de324e5078ccb7749e8f4f2b3c30d877f880.mp3'
import asset1 from '../assets/audio/aa19eb06e13dac815a0cf8513ad65513467de7172820b4b18382fcb27f7e9b71.mp3'
import asset2 from '../assets/audio/4dd51e15032988d6a0d1415956ce06a06ab470a9b42103a6a4477b2f3f68c214.mp3'
import asset3 from '../assets/audio/3e6c212ffb595fac7c6367d7f801b04058c8ed5211aa083b545b682034113237.mp3'
import asset4 from '../assets/audio/08583006d26807459be740d715e7ffca144435751955d64e14c316ec99ea0fe4.mp3'
import asset5 from '../assets/audio/3c5846cceb3e53f79dcbabc4d8070d6056d2bf22097ddba62b21d06dbebd6c51.mp3'
import asset6 from '../assets/audio/cb1c0c094c3816ce670eee4ad398fc4b6a342a5296a05d3d887cc63ad5a55779.mp3'
import asset7 from '../assets/audio/37d1b9748c1098ace693bdef1ef56047a090e3e64b8e71f00179af32c2d943bc.mp3'
import asset8 from '../assets/audio/715f9c75e6b52343865c761554c07b0c3492da37ff48549cbee288e68632dc26.mp3'
import asset9 from '../assets/audio/0e82ee937985f63fbfe19932b0d77a87b7ce596f4ff7a984d3f5fca7855470cc.mp3'
import asset10 from '../assets/audio/f3582be3e2faa74c6ad5feabe534d35769ae62ce3850bbad5baaffe0ab83b980.mp3'
import asset11 from '../assets/audio/885531da09fd91e9ed1f680b608fe31f9fa233aa3ed357ff849b2b55bb928c61.mp3'
import asset12 from '../assets/characters/evelyn-carter.webp'
import asset13 from '../assets/characters/owen-harris.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-02.shadowing.01',
      text: 'Looking back, what was the first warning sign?',
      src: asset0,
    },
    {
      id: 'c1-02.shadowing.02',
      text: 'The delivery dates kept moving, but we assumed the supplier would catch up',
      src: asset1,
    },
    {
      id: 'c1-02.shadowing.03',
      text: 'Had we checked their capacity earlier, we might have chosen a different partner',
      src: asset2,
    },
    {
      id: 'c1-02.shadowing.04',
      text: 'Perhaps, though I’m not sure that would have prevented every delay',
      src: asset3,
    },
    {
      id: 'c1-02.shadowing.05',
      text: 'No. We also had no realistic contingency plan',
      src: asset4,
    },
    {
      id: 'c1-02.shadowing.06',
      text: 'That was the more serious oversight, in my view',
      src: asset5,
    },
    {
      id: 'c1-02.shadowing.07',
      text: 'Would you call it the root cause?',
      src: asset6,
    },
    {
      id: 'c1-02.shadowing.08',
      text: 'One of them. The other was that no one owned the final decision',
      src: asset7,
    },
    {
      id: 'c1-02.shadowing.09',
      text: 'So the lesson isn’t simply to choose a better supplier',
      src: asset8,
    },
    {
      id: 'c1-02.shadowing.10',
      text: 'Exactly. We need clearer responsibility and an alternative we can actually use',
      src: asset9,
    },
    {
      id: 'c1-02.shadowing.11',
      text: 'Had I realised how much depended on that one delivery, I would have raised it sooner',
      src: asset10,
    },
    {
      id: 'c1-02.shadowing.12',
      text: 'Then let’s make that dependency visible next time',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/evelyn-carter/image.webp': asset12,
    '/flashcards/course-characters/owen-harris/image.webp': asset13,
  },
}
export default prepared
