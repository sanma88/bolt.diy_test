import React from 'react';
import { FileText, Sparkles } from 'lucide-react';
import type { TranscriptionVersion } from '../../types';

interface TranscriptionVersionsProps {
  versions: TranscriptionVersion[];
}

export function TranscriptionVersions({ versions }: TranscriptionVersionsProps) {
  return (
    <div className="space-y-4">
      {versions.map((version) => (
        <div
          key={version.id}
          className="bg-white rounded-lg shadow p-4"
        >
          <div className="flex items-center space-x-2 mb-2">
            {version.type === 'original' ? (
              <FileText className="h-5 w-5 text-gray-500" />
            ) : (
              <Sparkles className="h-5 w-5 text-indigo-500" />
            )}
            <h3 className="text-lg font-medium">
              {version.type === 'original' ? 'Version originale' : 'Version améliorée'}
            </h3>
          </div>
          
          {version.status === 'completed' ? (
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{version.text}</p>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-500" />
              <span>
                {version.status === 'pending' ? 'En attente...' : 'Traitement en cours...'}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
