import React from 'react';
import { Header } from './components/Header';
import { AudioUploader } from './components/AudioUploader';
import { TranscriptionList } from './components/TranscriptionList';
import { TranscriptionDetail } from './components/transcription/TranscriptionDetail';
import { LoginForm } from './components/auth/LoginForm';
import { useAuth } from './hooks/useAuth';
import { getSampleTranscriptions } from './utils/sampleData';
import type { Transcription } from './types';

function App() {
  const { user, login, logout } = useAuth();
  const [transcriptions, setTranscriptions] = React.useState<Transcription[]>([]);
  const [selectedTranscription, setSelectedTranscription] = React.useState<Transcription | null>(null);

  // Charger les exemples de transcription au login
  React.useEffect(() => {
    if (user) {
      setTranscriptions(getSampleTranscriptions(user.id));
    }
  }, [user]);

  const handleFileSelect = (file: File) => {
    if (!user) return;

    const newTranscription: Transcription = {
      id: crypto.randomUUID(),
      userId: user.id,
      name: file.name,
      createdAt: new Date(),
      audioFile: file,
      status: 'pending',
      versions: [
        {
          id: crypto.randomUUID(),
          type: 'original',
          text: '',
          createdAt: new Date(),
          status: 'pending'
        }
      ],
      tags: [],
    };

    setTranscriptions((prev) => [newTranscription, ...prev]);
    setSelectedTranscription(newTranscription);
    
    // Simuler le processus de transcription
    setTimeout(() => {
      const updatedTranscription = {
        ...newTranscription,
        status: 'completed',
        versions: [
          {
            id: crypto.randomUUID(),
            type: 'original',
            text: 'Ceci est une simulation de transcription...',
            createdAt: new Date(),
            status: 'completed'
          },
          {
            id: crypto.randomUUID(),
            type: 'enhanced',
            text: 'Ceci est une simulation de transcription améliorée...',
            createdAt: new Date(),
            status: 'completed'
          }
        ]
      };

      setTranscriptions((prev) => 
        prev.map(t => t.id === newTranscription.id ? updatedTranscription : t)
      );
      setSelectedTranscription(updatedTranscription);
    }, 3000);
  };

  if (!user) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={logout} userEmail={user.email} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTranscription ? (
          <TranscriptionDetail 
            transcription={selectedTranscription}
            onBack={() => setSelectedTranscription(null)}
          />
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Nouvelle Transcription</h2>
              <AudioUploader onFileSelect={handleFileSelect} />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Historique</h2>
              <TranscriptionList
                transcriptions={transcriptions}
                onSelect={(id) => {
                  const transcription = transcriptions.find(t => t.id === id);
                  if (transcription) setSelectedTranscription(transcription);
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
