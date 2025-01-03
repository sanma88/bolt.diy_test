import React from 'react';
import { FileAudio, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  userEmail: string;
  onLogout: () => void;
}

export function Header({ userEmail, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FileAudio className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Transcribeur IA Local</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{userEmail}</span>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={onLogout}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <LogOut className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
