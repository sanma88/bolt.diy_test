import React, { useCallback } from 'react';
    import { ArrowLeft, Download } from 'lucide-react';
    import { TranscriptionVersions } from './TranscriptionVersions';
    import type { Transcription } from '../../types';
    import { saveAs } from 'file-saver';

    interface TranscriptionDetailProps {
      transcription: Transcription;
      onBack: () => void;
    }

    export function TranscriptionDetail({ transcription, onBack }: TranscriptionDetailProps) {
      const handleExport = useCallback(() => {
        const json = JSON.stringify({
          name: transcription.name,
          createdAt: transcription.createdAt,
          status: transcription.status,
          versions: transcription.versions,
          tags: transcription.tags,
        }, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        saveAs(blob, `${transcription.name.replace(/\.[^/.]+$/, "")}.json`);
      }, [transcription]);

      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">{transcription.name}</h2>
            </div>
            <button 
              onClick={handleExport}
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              <span>Exporter</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">
                  Créé le {transcription.createdAt.toLocaleDateString()}
                </p>
                <div className="flex items-center space-x-2">
                  {transcription.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                transcription.status === 'completed' 
                  ? 'bg-green-100 text-green-800'
                  : transcription.status === 'error'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {transcription.status}
              </span>
            </div>

            <TranscriptionVersions versions={transcription.versions} />
          </div>
        </div>
      );
    }
