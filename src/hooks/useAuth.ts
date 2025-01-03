import { useState, useCallback } from 'react';
import type { User } from '../types';
import { getSampleTranscriptions } from '../utils/sampleData';

// Simule une base d'utilisateurs pour le test
const MOCK_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123'
  }
];

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    // Simule une vérification d'authentification
    const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (mockUser) {
      setUser({ id: mockUser.id, email: mockUser.email });
      setError(null);
      return true;
    } else {
      setError('Email ou mot de passe incorrect');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  return { user, error, login, logout };
}
