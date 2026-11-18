export default {
  DAYV: [
    ['d_getup', 'get up', 'levantar'],
    ['d_eat', 'eat', 'comer'],
    ['d_work', 'work', 'trabalhar'],
    ['d_study', 'study', 'estudar'],
    ['d_gym', 'gym', 'academia'],
    ['d_sleep', 'sleep', 'dormir'],
  ],
  DTR: [
    {
      l: 'on',
      c: [
        ['segunda', 'Monday'],
        ['terça', 'Tuesday'],
        ['quarta', 'Wednesday'],
        ['quinta', 'Thursday'],
        ['sexta', 'Friday'],
        ['sábado', 'Saturday'],
        ['domingo', 'Sunday'],
      ],
    },
    {
      l: 'in the',
      c: [
        ['manhã', 'morning'],
        ['noite', 'evening'],
      ],
    },
    {
      l: 'at',
      n: true,
      c: [
        ['10', 'ten'],
        ['11', 'eleven'],
        ['12', 'twelve'],
      ],
    },
  ],
  WU4: [
    {
      t: 'What time do you get up?',
      tr: 'What time do you … = A que horas você …',
      im: 'd_getup',
      clk: '6:00',
      id: 'WU.1',
      o: ['I get up at five.', 'I get up at six.', 'I get up at nine.'],
      a: 1,
      np: ['Responda sobre você:', 'What time do you get up?'],
      why: {
        '0': 'Five é 5. O relógio marca 6.',
        '2': 'Nine é 9. O relógio marca 6.',
      },
    },
    {
      t: 'What time do you eat?',
      im: 'd_eat',
      clk: '7:00',
      id: 'WU.2',
      hide: true,
      o: ['I sleep at seven.', 'I study at seven.', 'I eat at seven.'],
      a: 2,
      np: ['Pergunte à professora:', 'What time do you eat?'],
      why: {
        '0': 'Sleep é dormir. Na imagem ela está comendo: eat.',
        '1': 'Study é estudar. Na imagem ela está comendo: eat.',
      },
    },
    {
      t: 'Are you free on Saturday?',
      tr: 'Are you free = Você está livre · No, I’m not. = Não estou.',
      im: 'd_gym',
      agd: true,
      id: 'WU.3',
      o: ['Yes, I am.', 'No, I’m not.', 'I’m free on Sunday.'],
      a: 0,
      np: [
        'Responda sobre você e depois pergunte à professora:',
        'Are you free on Saturday?',
      ],
      why: {
        '1': 'No, I’m not é “não estou”. A agenda diz free: no sábado ela está livre.',
        '2': 'Sunday é domingo. A Kim pergunta do sábado, e a agenda diz Saturday: free.',
      },
    },
  ],
  PRW: [
    {
      t: 'Tuesday or Thursday?',
      c: [
        ['Tuesday', 'terça'],
        ['Thursday', 'quinta'],
      ],
      tip: 'Tuesday começa com T e tem som de u: “TUZ-dei”. Thursday começa com a língua entre os dentes e tem som de â: “THÂRZ-dei”.',
    },
    {
      t: 'seven or eleven?',
      c: [
        ['seven', '7'],
        ['eleven', '11'],
      ],
      tip: 'seven tem duas sílabas e começa com s: “SÉ-vân”. eleven tem três e começa com i: “i-LÉ-vân”, com a força no meio.',
    },
  ],
  DL: [
    {
      id: 'D.1',
      who: 'kim',
      en: 'What time do you get up?',
      g: 'A que horas você levanta?',
    },
    {
      id: 'D.2',
      who: 'ana',
      en: 'I always get up early, at six. I work in the morning.',
      g: 'Eu sempre levanto cedo, às seis. Eu trabalho de manhã.',
    },
    {
      id: 'D.3',
      who: 'kim',
      en: 'And in the evening?',
      g: 'E à noite?',
    },
    {
      id: 'D.4',
      who: 'ana',
      en: 'I study on Monday and Wednesday, after work.',
      g: 'Eu estudo na segunda e na quarta, depois do trabalho.',
    },
    {
      id: 'D.5',
      who: 'kim',
      en: 'I go to the gym on Tuesday. Are you free? Come with me!',
      g: 'Eu vou à academia na terça. Você está livre? Vem comigo!',
    },
    {
      id: 'D.6',
      who: 'ana',
      en: 'Yes, I am. What time?',
      g: 'Sim, estou. A que horas?',
    },
    {
      id: 'D.7',
      who: 'kim',
      en: 'At seven, in the evening. Don’t be late!',
      g: 'Às sete, à noite. Não se atrase!',
    },
    {
      id: 'D.8',
      who: 'ana',
      en: 'Great! See you on Tuesday.',
      g: 'Ótimo! Até terça.',
    },
  ],
  DQ6: [
    {
      q: 'Is Ana free on Monday?',
      a: 'No, she isn’t.',
    },
    {
      q: 'Is Ana free on Tuesday?',
      a: 'Yes, she is.',
    },
    {
      q: 'The gym: at six or at seven?',
      a: 'At seven.',
    },
  ],
  GROWS: [
    ['hora', 'at', 'I get up at six.', 'às seis', 'WU.1'],
    ['dia', 'on', 'I study on Monday.', 'na segunda', 'G.2'],
    ['parte do dia', 'in the', 'I work in the morning.', 'de manhã', 'G.3'],
  ],
  T8A: [
    {
      who: 'kim',
      id: 'D.1',
    },
    {
      you: 'diga a sua hora e o que você faz de manhã',
      h: 'I get up at … I … in the morning.',
    },
    {
      who: 'kim',
      id: 'D.3',
    },
    {
      you: 'diga o que você faz à noite, e em que dia',
      h: 'I … on … · I … after work. · I’m free in the evening.',
    },
    {
      who: 'kim',
      id: 'Y.5',
    },
    {
      you: 'responda a verdade; se puder, pergunte a hora',
      h: 'Yes, I am. What time? · No, I’m not. I’m free on …',
    },
    {
      who: 'kim',
      id: 'Y.7',
    },
    {
      you: 'combine e se despeça',
      h: 'Great! See you on …',
    },
  ],
  T8B: [
    {
      you: 'pergunte a que horas ela levanta',
      h: 'What time do you get up?',
    },
    {
      who: 'teacher',
      id: 'Z.2',
    },
    {
      you: 'pergunte da noite',
      h: 'And in the evening?',
    },
    {
      who: 'teacher',
      id: 'Z.4',
    },
    {
      you: 'convide para a academia num dia',
      h: 'I go to the gym on … Are you free?',
    },
    {
      who: 'teacher',
      id: 'Z.6',
    },
    {
      you: 'proponha outro dia',
      h: 'What about …?',
    },
    {
      who: 'teacher',
      id: 'Z.8',
    },
    {
      you: 'diga a hora e se despeça',
      h: 'At … See you on …!',
    },
  ],
  FIX: [
    {
      s: 'I’m work in the morning.',
      a: 'I work in the morning.',
      why: 'Sem am: I work.',
    },
    {
      s: 'I get up in six.',
      a: 'I get up at six.',
      why: 'Hora: at.',
    },
    {
      s: 'Kim: I often go to the gym on Thursday.',
      ok: true,
      say: 'I often go to the gym on Thursday.',
      why: 'Dia: on. Often (muitas vezes) vem antes do verbo. A Kim vai toda quinta: ela disse no áudio.',
    },
    {
      s: 'I study in evening.',
      a: 'I study in the evening.',
      why: 'Faltou o the: in the evening.',
    },
    {
      s: 'Are you free? Yes, I’m.',
      a: 'Yes, I am.',
      why: 'Na resposta curta, não junta: Yes, I am.',
    },
  ],
  AGD: ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'],
  HW: [
    {
      e: '⏰',
      t: 'Flashcards · My day',
      d: '18 cartões e 7 de apoio · 6 min · Hoje, daqui a 2 dias e daqui a 6 dias.',
      url: 'https://student.langy.space/licoes?tab=flashcards&deck=deck-a1-04',
      line: '1. Flashcards (6 min)',
    },
    {
      e: '💬',
      t: 'Shadowing · Are you free?',
      d: 'Fale junto com a Ana: falas 2, 4, 6 e 8 · 5 min.',
      url: 'https://student.langy.space/licoes?tab=shadowing&item=a1-04',
      line: '2. Shadowing (5 min)',
    },
    {
      e: '💡',
      t: 'Quiz · at, on, in the',
      d: '10 perguntas · 3 min.',
      url: 'https://student.langy.space/licoes?tab=quiz&item=a1-04',
      line: '3. Quiz (3 min)',
    },
  ],
  ORDER: [1, 2, 3, 41, 42, 43, 51, 52, 6, 61, 7, 8, 9, 10, 11, 12],
  LISTENING_QUESTIONS: [
    {
      q: '“I work on Monday.”',
      o: ['Yes', 'No'],
      a: 0,
    },
    {
      q: '“I work on Tuesday.”',
      o: ['Yes', 'No'],
      a: 1,
    },
    {
      q: '“I go to the gym on Thursday.”',
      o: ['Yes', 'No'],
      a: 0,
    },
    {
      q: '“I go to the gym in the morning.”',
      o: ['Yes', 'No'],
      a: 1,
    },
  ],
  LISTENING_TEXT:
    'Hi! I work on Monday and Wednesday. I go to the gym every Tuesday and Thursday, in the evening. I never go in the morning. Sometimes I also go on Saturday. And you?',
  PROVENANCE: {
    artifact: '33b1889e-2d12-46ae-bc25-3719c83633f0',
    url: 'https://claude.ai/code/artifact/33b1889e-2d12-46ae-bc25-3719c83633f0',
    path: 'index.html',
    bytes: 835410,
    download_sha256:
      'ff75f5737058386dc5c2074cf72838405ea19399d58e83cc14940a82da1ec105',
    mode: 'single-page-read-compatibility',
    version: '1794857826-7de6',
    title: 'Langy A1.04 My day and our time',
    role: 'owner',
    contract: '0.0.0',
    manifest_verified: false,
    pinned_read_repeat_identical: true,
    frame_runtime_removed: true,
    served_sha256:
      '70e5833e1d0ea4e31c5d59f0d763fe7eb89329d372ad0bf3f0ee6b9bf58e9868',
    source_note:
      'No remote manifest exists; SHA-256 identifies downloaded bytes only.',
  },
} as const
