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

export interface StoredCredentials {
  email: string;
  password: string;
}

// Mock user database for demo
const MOCK_USERS: Array<{ email: string; password: string; user: User }> = [
  {
    email: 'john.doe@example.com',
    password: 'password123',
    user: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      bio: 'Focused on personal growth and mindfulness. Currently working on building better habits and achieving work-life balance.',
      joinedDate: '2024-01-01'
    }
  }
];

export class AuthService {
  private static STORAGE_KEY = 'auth_user';
  private static CREDENTIALS_KEY = 'stored_credentials';
  private static USERS_KEY = 'registered_users';

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

  static getStoredCredentials(): StoredCredentials | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(this.CREDENTIALS_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error getting stored credentials:', error);
      return null;
    }
  }

  static setStoredCredentials(credentials: StoredCredentials): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  }

  static clearStoredCredentials(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.CREDENTIALS_KEY);
    } catch (error) {
      console.error('Error clearing stored credentials:', error);
    }
  }

  static getRegisteredUsers(): Array<{ email: string; password: string; user: User }> {
    if (typeof window === 'undefined') return MOCK_USERS;
    
    try {
      const stored = localStorage.getItem(this.USERS_KEY);
      const users = stored ? JSON.parse(stored) : [];
      return [...MOCK_USERS, ...users];
    } catch (error) {
      console.error('Error getting registered users:', error);
      return MOCK_USERS;
    }
  }

  static setRegisteredUsers(users: Array<{ email: string; password: string; user: User }>): void {
    if (typeof window === 'undefined') return;
    
    try {
      // Only store non-mock users
      const nonMockUsers = users.filter(u => !MOCK_USERS.some(mock => mock.email === u.email));
      localStorage.setItem(this.USERS_KEY, JSON.stringify(nonMockUsers));
    } catch (error) {
      console.error('Error storing registered users:', error);
    }
  }

  static async login(email: string, password: string, rememberCredentials: boolean = false): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = this.getRegisteredUsers();
    const userRecord = users.find(u => u.email === email && u.password === password);

    if (userRecord) {
      this.setStoredUser(userRecord.user);
      
      if (rememberCredentials) {
        this.setStoredCredentials({ email, password });
      } else {
        this.clearStoredCredentials();
      }
      
      return userRecord.user;
    }

    throw new Error('Invalid email or password');
  }

  static async signup(data: SignupData): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = this.getRegisteredUsers();
    
    // Check if user already exists
    if (users.some(u => u.email === data.email)) {
      throw new Error('An account with this email already exists');
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      joinedDate: new Date().toISOString()
    };

    // Add to users database
    const newUserRecord = {
      email: data.email,
      password: data.password,
      user: newUser
    };

    users.push(newUserRecord);
    this.setRegisteredUsers(users);
    this.setStoredUser(newUser);
    
    // Store credentials for convenience
    this.setStoredCredentials({ email: data.email, password: data.password });

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

    // Update in users database
    const users = this.getRegisteredUsers();
    const userIndex = users.findIndex(u => u.user.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex]!.user = updatedUser;
      this.setRegisteredUsers(users);
    }

    this.setStoredUser(updatedUser);
    return updatedUser;
  }

  static logout(): void {
    this.clearStoredUser();
    // Don't clear credentials on logout, only when explicitly requested
  }

  static clearAllData(): void {
    this.clearStoredUser();
    this.clearStoredCredentials();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USERS_KEY);
    }
  }
}