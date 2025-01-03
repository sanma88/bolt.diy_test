import type { Transcription } from '../types';

export const getSampleTranscriptions = (userId: string): Transcription[] => [
  {
    id: '1',
    userId,
    name: 'Interview-Jean-Dupont.mp3',
    createdAt: new Date('2024-03-10T14:30:00'),
    status: 'completed',
    versions: [
      {
        id: '1-original',
        type: 'original',
        text: `Bonjour, je m'appelle Jean Dupont. Je suis ravi d'être ici aujourd'hui pour parler de mon parcours professionnel. J'ai commencé ma carrière il y a 15 ans dans le domaine de l'informatique. Au fil des années, j'ai eu l'opportunité de travailler sur des projets passionnants qui m'ont permis de développer mes compétences.`,
        createdAt: new Date('2024-03-10T14:31:00'),
        status: 'completed'
      },
      {
        id: '1-enhanced',
        type: 'enhanced',
        text: `Bonjour, je suis Jean Dupont. Je suis enchanté d'être présent aujourd'hui pour partager mon parcours professionnel avec vous. Mon aventure dans le secteur informatique a débuté il y a 15 ans. Au cours de cette période, j'ai eu le privilège de contribuer à des projets stimulants qui ont significativement enrichi mon expertise professionnelle.`,
        createdAt: new Date('2024-03-10T14:32:00'),
        status: 'completed'
      }
    ],
    tags: ['entretien', 'professionnel']
  },
  {
    id: '2',
    userId,
    name: 'Conference-IA-2024.mp3',
    createdAt: new Date('2024-03-09T10:00:00'),
    status: 'completed',
    versions: [
      {
        id: '2-original',
        type: 'original',
        text: `L'intelligence artificielle transforme rapidement notre façon de travailler. Les modèles de langage comme GPT peuvent maintenant comprendre et générer du texte de manière très naturelle. Cependant, il est important de considérer les implications éthiques de ces avancées.`,
        createdAt: new Date('2024-03-09T10:01:00'),
        status: 'completed'
      },
      {
        id: '2-enhanced',
        type: 'enhanced',
        text: `L'intelligence artificielle révolutionne profondément nos méthodes de travail. Les modèles de langage avancés, tels que GPT, démontrent désormais une capacité remarquable à comprendre et à produire du texte d'une manière extraordinairement naturelle. Néanmoins, il est crucial d'examiner attentivement les considérations éthiques liées à ces innovations technologiques.`,
        createdAt: new Date('2024-03-09T10:02:00'),
        status: 'completed'
      }
    ],
    tags: ['conférence', 'IA', 'technologie']
  }
];
