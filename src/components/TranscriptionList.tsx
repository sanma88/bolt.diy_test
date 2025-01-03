import React from 'react';
import { Clock, Tag } from 'lucide-react';
import type { Transcription } from '../types';

interface TranscriptionListProps {
  transcriptions: Transcription[];
  onSelect: (id: string) => void;
}

export function TranscriptionList({ transcriptions, onSelect }: TranscriptionListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y divide-gray-200">
        {transcriptions.map((transcription) => (
          <div
            key={transcription.id}
            className="p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelect(transcription.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{transcription.name}</h3>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(transcription.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                {transcription.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                transcription.status === 'completed' ? 'bg-green-100 text-green-800' :
                transcription.status === 'error' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {transcription.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
