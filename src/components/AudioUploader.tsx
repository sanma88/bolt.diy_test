import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface AudioUploaderProps {
  onFileSelect: (file: File) => void;
}

export function AudioUploader({ onFileSelect }: AudioUploaderProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          <span className="mt-2 block text-sm font-medium text-gray-900">
            Déposez un fichier audio ou cliquez pour sélectionner
          </span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept="audio/*"
            onChange={handleFileInput}
          />
        </label>
        <p className="mt-1 text-xs text-gray-500">
          MP3, WAV, M4A jusqu'à 500MB
        </p>
      </div>
    </div>
  );
}
