export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  joinedDate: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateProfileData {
  firstName: string;
  lastName: string;
  bio: string;
}

// Mock user data for demo
const DEMO_USER: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  bio: 'Focused on personal growth and mindfulness. Currently working on building better habits and achieving work-life balance.',
  joinedDate: '2024-01-01'
};

export class AuthService {
  private static STORAGE_KEY = 'auth_user';

  static getStoredUser(): User | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error getting stored user:', error);
      return null;
    }
  }

  static setStoredUser(user: User): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error storing user:', error);
    }
  }

  static clearStoredUser(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing stored user:', error);
    }
  }

  static async login(email: string, password: string): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock authentication - in real app, this would call your API
    if (email === DEMO_USER.email && password === 'password123') {
      this.setStoredUser(DEMO_USER);
      return DEMO_USER;
    }

    throw new Error('Invalid email or password');
  }

  static async signup(data: SignupData): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock user creation - in real app, this would call your API
    const newUser: User = {
      id: Date.now().toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      joinedDate: new Date().toISOString()
    };

    this.setStoredUser(newUser);
    return newUser;
  }

  static async updateProfile(data: UpdateProfileData): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const currentUser = this.getStoredUser();
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    const updatedUser: User = {
      ...currentUser,
      ...data
    };

    this.setStoredUser(updatedUser);
    return updatedUser;
  }

  static logout(): void {
    this.clearStoredUser();
  }
}