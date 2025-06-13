'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, SignupData, UpdateProfileData, AuthService } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: UpdateProfileData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = AuthService.getStoredUser();
    setUser(storedUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const user = await AuthService.login(email, password);
    setUser(user);
  };

  const signup = async (data: SignupData): Promise<void> => {
    const user = await AuthService.signup(data);
    setUser(user);
  };

  const logout = async (): Promise<void> => {
    AuthService.logout();
    setUser(null);
  };

  const updateProfile = async (data: UpdateProfileData): Promise<void> => {
    const updatedUser = await AuthService.updateProfile(data);
    setUser(updatedUser);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}