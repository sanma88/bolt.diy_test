export interface User {
  id: string;
  email: string;
}

export interface Transcription {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  audioFile?: File;
  status: 'pending' | 'processing' | 'completed' | 'error';
  versions: TranscriptionVersion[];
  tags: string[];
  template?: string;
}

export interface TranscriptionVersion {
  id: string;
  type: 'original' | 'enhanced';
  text: string;
  createdAt: Date;
  status: 'pending' | 'processing' | 'completed' | 'error';
}
