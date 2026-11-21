export default {
  JOBS: [
    ['j_student', 'a student', 'estudante'],
    ['j_teacher', 'a teacher', 'professor, professora'],
    ['j_doctor', 'a doctor', 'médico, médica'],
    ['j_cook', 'a cook', 'cozinheiro, cozinheira'],
    ['j_driver', 'a driver', 'motorista'],
    ['j_engineer', 'an engineer', 'engenheiro, engenheira'],
  ],
  WJ: [
    {
      q: 'Is he a teacher?',
      im: 'j_student',
      id: 'WJ.1',
      o: [
        'Yes, he is.',
        'No, he isn’t. He’s a student.',
        'No, he isn’t. He’s a cook.',
      ],
      a: 1,
      why: {
        '0': 'Olhe a imagem: mochila e caderno. Ele estuda.',
        '2': 'Cook é cozinheiro. Ele é estudante: a student.',
      },
      now: 'Responda sobre você: Are you a teacher?',
    },
    {
      q: 'Is she a doctor?',
      im: 'j_teacher',
      id: 'WJ.2',
      o: [
        'No, she isn’t. She’s a teacher.',
        'Yes, she is.',
        'No, she isn’t. She’s a driver.',
      ],
      a: 0,
      why: {
        '1': 'Olhe a imagem: ela está ao lado de um quadro. Ela dá aula.',
        '2': 'Driver é motorista. Ela é professora: a teacher.',
      },
      now: 'Responda sobre a sua professora: Is your teacher a doctor?',
    },
  ],
  FAM: [
    ['mãe', 'mother', 'This is my mother.'],
    ['pai', 'father', 'This is my father.'],
    ['pai e mãe', 'parents', 'These are my parents.'],
    ['irmão', 'brother', 'This is my brother.'],
    ['irmã', 'sister', 'This is my sister.'],
    ['amigo, amiga', 'friend', 'This is my friend.'],
  ],
  NF: [
    {
      q: 'Who’s in your family?',
      a: 'My mother, my father, my … · husband (marido) · wife (esposa) · son (filho) · daughter (filha) · children (filhos, crianças; uma só: child)',
    },
    {
      q: 'What’s your mother’s or father’s name? How do you spell it?',
      a: 'My mother’s name is …',
    },
    {
      q: 'Is your … a …?',
      s: 'A professora completa com uma pessoa que você citou.',
      a: 'Yes, he is. · No, she isn’t. She’s a …',
    },
  ],
  PRW: [
    {
      t: 'this or these?',
      c: [
        ['this', 'este, esta (uma pessoa)'],
        ['these', 'estes, estas (duas ou mais)'],
      ],
      tip: 'this é curto e termina com som de s. these é comprido (“dhiiz”) e termina com som de z.',
    },
    {
      t: 'he’s or she’s?',
      c: [
        ['he’s', 'ele é'],
        ['she’s', 'ela é'],
      ],
      tip: 'he’s começa como o R de “rio”. she’s começa como o CH de “chá”.',
    },
  ],
  DL: [
    {
      id: 'D.1',
      who: 'kim',
      en: 'Who’s this?',
      g: 'Quem é esse?',
    },
    {
      id: 'D.2',
      who: 'ana',
      en: 'This is my brother, Leo. He’s a student.',
      g: 'Esse é o meu irmão, Leo. Ele é estudante.',
    },
    {
      id: 'D.3',
      who: 'kim',
      en: 'And who are they?',
      g: 'E quem são eles?',
    },
    {
      id: 'D.4',
      who: 'ana',
      en: 'These are my parents. They’re from Recife.',
      g: 'Esses são os meus pais. Eles são de Recife.',
    },
    {
      id: 'D.5',
      who: 'kim',
      en: 'Is your mother a teacher?',
      g: 'A sua mãe é professora?',
    },
    {
      id: 'D.6',
      who: 'ana',
      en: 'No, she isn’t. She’s a doctor.',
      g: 'Não, ela não é. Ela é médica.',
    },
    {
      id: 'D.7',
      who: 'kim',
      en: 'Cool! And who’s he?',
      g: 'Legal! E quem é ele?',
    },
    {
      id: 'D.8',
      who: 'ana',
      en: 'This is my friend Jun. He’s an engineer.',
      g: 'Este é o meu amigo Jun. Ele é engenheiro.',
    },
    {
      id: 'D.9',
      who: 'kim',
      en: 'Is he your husband?',
      g: 'Ele é o seu marido?',
    },
    {
      id: 'D.10',
      who: 'ana',
      en: 'No, he isn’t! He’s just a friend. Really!',
      g: 'Não! Ele é só um amigo. Sério!',
    },
  ],
  DQ: [
    {
      q: 'Is Leo Ana’s friend?',
      a: 'No, he isn’t. He’s Ana’s brother.',
    },
    {
      q: 'Where are Ana’s parents from?',
      a: 'They’re from Recife.',
    },
    {
      q: 'Is Ana’s mother a teacher?',
      a: 'No, she isn’t. She’s a doctor.',
    },
  ],
  GRT: [
    ['1 pessoa', 'This is', 'This is my brother.', 'este é, esta é'],
    ['2 ou mais', 'These are', 'These are my parents.', 'estes são, estas são'],
    ['eles, elas', 'They’re', 'They’re from Recife.', 'they are = they’re'],
    [
      'profissão',
      'a · an',
      'She’s a doctor. He’s an engineer.',
      'a antes de consoante, an antes de vogal',
    ],
  ],
  FIX: [
    {
      s: 'My wife is doctor.',
      a: 'My wife is a doctor.',
      why: 'Em inglês a profissão leva a ou an.',
    },
    {
      s: 'This is my parents.',
      a: 'These are my parents.',
      why: 'Parents são duas pessoas: These are.',
    },
    {
      s: 'He’s an engineer.',
      ok: true,
      why: 'Engineer começa com som de vogal: an.',
    },
    {
      s: 'This boy is my son. She’s a student.',
      a: 'This boy is my son. He’s a student.',
      why: 'Boy (menino) e son (filho) são homem: he.',
    },
    {
      s: 'Is the girl your daughter? No, she not.',
      a: 'Is the girl your daughter? No, she isn’t.',
      why: 'Faltou o verbo: is not = isn’t.',
    },
  ],
  YPF: [
    ['n', 'Nome'],
    ['w', 'Quem é'],
    ['j', 'Profissão ou de onde é'],
  ],
  HW: [
    {
      e: '🗂️',
      t: 'Flashcards · People and jobs',
      d: '12 cartões e 8 de apoio · 5 min · Hoje, daqui a 2 dias e daqui a 6 dias.',
      url: 'https://student.langy.space/licoes?tab=flashcards&deck=deck-a1-03',
      line: '1. Flashcards (5 min)',
    },
    {
      e: '💬',
      t: 'Shadowing · Who’s this?',
      d: 'Fale junto com a Ana: falas 2, 4, 6, 8 e 10 · 5 min.',
      url: 'https://student.langy.space/licoes?tab=shadowing&item=a1-03',
      line: '2. Shadowing (5 min)',
    },
    {
      e: '💡',
      t: 'Quiz · this, these, a, an',
      d: '10 perguntas · 3 min.',
      url: 'https://student.langy.space/licoes?tab=quiz&item=a1-03',
      line: '3. Quiz (3 min)',
    },
  ],
  ORDER: [1, 2, 31, 32, 4, 5, 61, 62, 71, 72, 73, 8, 9, 10, 11, 12, 13],
  LISTENING_QUESTIONS: [
    {
      q: 'Is Jin Kim’s friend?',
      o: ['Yes', 'No'],
      a: 1,
    },
    {
      q: 'Is Jin a doctor?',
      o: ['Yes', 'No'],
      a: 0,
    },
    {
      q: 'Is Jin from Japan?',
      o: ['Yes', 'No'],
      a: 1,
    },
    {
      q: 'Is Tom Kim’s brother?',
      o: ['Yes', 'No'],
      a: 1,
    },
  ],
  LISTENING_TEXT:
    'This is my sister, Jin. She’s a doctor. She’s from Korea. And this is my friend Tom. He’s a young cook.',
  PROVENANCE: {
    artifact: '093a990f-6e49-4341-ad68-f0571a6da917',
    url: 'https://claude.ai/code/artifact/093a990f-6e49-4341-ad68-f0571a6da917',
    path: 'index.html',
    bytes: 838641,
    download_sha256:
      'f05fcdea5d08c0dc011ed87cbc8ae8443912552008b2e54388320b754178e398',
    mode: 'single-page-read-compatibility',
    version: '1794857823-58ab',
    title: 'Langy A1.03 People in my life',
    role: 'owner',
    contract: '0.0.0',
    manifest_verified: false,
    pinned_read_repeat_identical: true,
    frame_runtime_removed: true,
    served_sha256:
      'b617e17537ff42edd5e47deb9739416e3e1b9a262dc593c22dab6ee3679b0324',
    source_note:
      'No remote manifest exists; SHA-256 identifies downloaded bytes only.',
  },
} as const
