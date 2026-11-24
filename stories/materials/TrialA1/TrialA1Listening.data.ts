import firstRecording from './assets/listening-ana62-1.mp3'
import secondRecording from './assets/listening-ana62-2.mp3'

export const listeningParts = [
  {
    id: 'trial-a1.listening.62.1',
    title: 'A message from Ana (1/2)',
    recording: firstRecording,
    transcript:
      'I’m happy today! I love playing soccer with my friends. I have my sneakers on and my ball with me.\n\nKim is on a bench with her headphones. We both like music, but I don’t like books',
    durationSeconds: 12.399456,
    greeting: {
      text: 'Hi! I’m at the park with Kim 😊',
      timestamp: '09:40',
    },
    timestamp: '09:41',
    questions: [
      {
        id: 'sport',
        prompt: 'What sport does Ana like?',
        answer: 'Soccer',
      },
      {
        id: 'music',
        prompt: 'What do Ana and Kim both like?',
        answer: 'Music',
      },
      {
        id: 'books',
        prompt: 'Does Ana like books?',
        answer: 'No, she doesn’t',
      },
    ],
  },
  {
    id: 'trial-a1.listening.62.2',
    title: 'A message from Ana (2/2)',
    recording: secondRecording,
    transcript:
      'I also like watching movies at home. I love dogs, and Kim likes cats.\n\nNow I’m hungry! I want pizza, but I don’t like salad.\n\nWhat about you? Tell me what you like!',
    durationSeconds: 11.842177,
    greeting: undefined,
    timestamp: '09:42',
    questions: [
      {
        id: 'movies',
        prompt: 'What does Ana like watching?',
        answer: 'Movies',
      },
      {
        id: 'cats',
        prompt: 'Does Kim like dogs or cats?',
        answer: 'Cats',
      },
      {
        id: 'food',
        prompt: 'What food does Ana want?',
        answer: 'Pizza',
      },
    ],
  },
] as const
