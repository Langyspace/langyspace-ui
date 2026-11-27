import atlas09_services from './assets/homework131/09-services.webp'
import atlas08_health from './assets/homework131/08-health.webp'
import atlas07_weather from './assets/homework131/07-weather.webp'
import atlas06_adapting from './assets/homework131/06-adapting.webp'
import atlas05_city from './assets/homework131/05-city.webp'
import atlas04_development_city from './assets/homework131/04-development-city.webp'
import atlas03_development from './assets/homework131/03-development.webp'
import atlas02_relations from './assets/homework131/02-relations.webp'
import atlas01_family from './assets/homework131/01-family.webp'
import image0 from './assets/homework131/raster-e541b4b0ebdac55bb8ffb68e34974c8180257a205f6ea3eaa56999d4b4e4efd1.webp'
import image1 from '../A104/assets/scene-afternoon42.webp'
import image2 from '../A104/assets/scene-evening42.webp'
import image3 from '../Course/assets/a2-06-vocabulary81.webp'
import image4 from '../Course/assets/b1-02-neighbourhood123.webp'
import image5 from '../Course/assets/a2-11-vocabulary81.webp'
import image6 from '../Course/assets/b1-08-vocabulary81.webp'
import image7 from '../Course/assets/b1-09-bicycle123.webp'
import image9 from './assets/homework131/raster-d7416cb56c11c21cb2014c068aa48a01a3e1d6b5b89ee33002417b131c955854.webp'
import image10 from './assets/homework131/raster-3a62c77f0ee27bd0d498f368336793d5fbc8a1233a757e0de3b73481b907ad1e.webp'
import image11 from './assets/homework131/raster-715fe82af950f60415fb3fcab14fa6f5dc8c08f65a37243244e8bfdd7cb22aa3.webp'
import image12 from '../Frontend/assets/v_bt.webp'
import image13 from './assets/homework131/reschedule.webp'
import image14 from './assets/homework131/drink-water.webp'
import image15 from './assets/homework131/call.webp'
import type { PracticeCard } from './Practice.types'
import bindings from './homework-media131.json'

const images: Readonly<Record<string, string>> = {
  '/flashcards-transparent/course-practice/homework-media131/bde0052ca2e0cd8db0ebce577e6e7a5eb31ee3c17d1f56561cbd45100fc16a96/image.webp':
    atlas09_services,
  '/flashcards-transparent/course-practice/homework-media131/35eae98e87a6c0dc19d9fc38265ce6e6d0ed26ae490c78b56f0130afec7ff026/image.webp':
    atlas08_health,
  '/flashcards-transparent/course-practice/homework-media131/b38abc575e86d7207e9637ef976363ecfcc8a1504b96c1ce9bae012f4ce04208/image.webp':
    atlas07_weather,
  '/flashcards-transparent/course-practice/homework-media131/ef1422e687c167ac87c9bd0cb8b008ff9f8bf423185e6e4dc33ecf2833d1cffe/image.webp':
    atlas06_adapting,
  '/flashcards-transparent/course-practice/homework-media131/409e13b05c101f0362f6b2b0fc8fa951b42bbdef105d6ea32b5492c0695ade71/image.webp':
    atlas05_city,
  '/flashcards-transparent/course-practice/homework-media131/20fd7898cacd20f717e5fa9dd86c869d13e0c74e0d8dccd7640593e82a0fe99d/image.webp':
    atlas04_development_city,
  '/flashcards-transparent/course-practice/homework-media131/0a3feb5e4f780f008152e316297c896201896285ad688330e53320faaa08387f/image.webp':
    atlas03_development,
  '/flashcards-transparent/course-practice/homework-media131/820daba6d5707c4e9992b3162235b93c397369840c1d0943b4fa1671e0dff296/image.webp':
    atlas02_relations,
  '/flashcards-transparent/course-practice/homework-media131/4e70033adda7bc3bba6c2c3574765243aa2229aa87ed9edc1b102c2c2a080bdd/image.webp':
    atlas01_family,
  '/flashcards-transparent/course-practice/homework-media131/8e3a0a4f6a0eb9a8fc2fb097ba1dd0f3a8905fc181e3a4f9efdc172a44b0a705/image.webp':
    image0,
  '/flashcards-transparent/course-practice/homework-media131/6b0d1ecb9497b50b510fd2b24a61212546de7e82b7da7a919a8e61f2ac8f5f15/image.webp':
    image1,
  '/flashcards-transparent/course-practice/homework-media131/2399bfa682d8b665ba57203d4c293b2a21f6b4b82a3ef01b343fd6ca6fd12102/image.webp':
    image2,
  '/flashcards-transparent/course-practice/homework-media131/f646113a119a25f70735ec059555a41749f87df586c82aba1e4d468f1c666137/image.webp':
    image3,
  '/flashcards-transparent/course-practice/homework-media131/aab7a0ab5ee7b08d74de67236ba5c627f565e28e45604a1cef795560db95abea/image.webp':
    image4,
  '/flashcards-transparent/course-practice/homework-media131/80081312d320aa4209466a8619a3303a5c709133048f04f5ad85447687c8edd9/image.webp':
    image5,
  '/flashcards-transparent/course-practice/homework-media131/9b9aceb3d484aa083558642a9dc7b6fb29a52572ff574c9d37551ea735ef4fa6/image.webp':
    image6,
  '/flashcards-transparent/course-practice/homework-media131/2cb100ad85fe3ad58e26b227bd34313d64e8ee3fab87369fdade4817e2a6317a/image.webp':
    image7,
  '/flashcards-transparent/course-practice/homework-media131/089bd96ccb244cbeecf15251767760315a1201bc224076411c521e3c8c844d9f/image.webp':
    image9,
  '/flashcards-transparent/course-practice/homework-media131/e482baeb6853332459574a975008557cd6d4c9278f9b49b5f475688f3735f028/image.webp':
    image10,
  '/flashcards-transparent/course-practice/homework-media131/5d5300dab993c74871618ff662b74f988a8cbae98fd312ab7f93ebffb5a2e931/image.webp':
    image11,
  '/flashcards-transparent/course-practice/homework-media131/22d4ad9635452551662e6c97932980e492fa8f7a3b73a42aa0952118aa369e20/image.webp':
    image12,
  '/flashcards-transparent/course-practice/homework-media131/65c80284cb7b22c96f901bad950cc928f406b8d161dea34118798aef8cc0f966/image.webp':
    image13,
  '/flashcards-transparent/course-practice/homework-media131/8c8360a3ab14425d8d026789ae1d1f72aad591bde7f2d621bbe605af9f16660b/image.webp':
    image14,
  '/flashcards-transparent/course-practice/homework-media131/ea4b036d606526b6946a0f4916b3dc85b54719971f59320a9ca08d57be9a7fbb/image.webp':
    image15,
}

/** Authored media only. Unknown terms stay missing for explicit owner selection. */
export function homeworkCardMedia(
  lesson: string,
  word: string,
): Pick<PracticeCard, 'imageSrc' | 'imageRegion'> {
  const binding = bindings.find(
    (item) => item.lesson === lesson && item.word === word,
  )
  return binding
    ? {
        imageSrc: binding.imageSrc,
        imageRegion: 'imageRegion' in binding ? binding.imageRegion : undefined,
      }
    : {}
}

export function homeworkMediaImages(
  lesson: string,
): Readonly<Record<string, string>> {
  return Object.fromEntries(
    bindings
      .filter((item) => item.lesson === lesson)
      .map((item) => [item.imageSrc, images[item.imageSrc]!]),
  )
}
