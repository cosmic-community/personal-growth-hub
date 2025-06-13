import { UserDatabase, UserAccount } from './database';

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

// Convert UserAccount to User (public interface without password)
function toPublicUser(userAccount: UserAccount): User {
  return {
    id: userAccount.id,
    firstName: userAccount.firstName,
    lastName: userAccount.lastName,
    email: userAccount.email,
    bio: userAccount.bio,
    joinedDate: userAccount.joinedDate
  };
}

export class AuthService {
  private static STORAGE_KEY = 'auth_user';
  private static CREDENTIALS_KEY = 'stored_credentials';

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

  static async login(email: string, password: string, rememberCredentials: boolean = false): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Authenticate user through database
      const userAccount = UserDatabase.authenticateUser(email, password);
      
      // Create session
      UserDatabase.createSession(userAccount.id, rememberCredentials);
      
      // Convert to public user object
      const user = toPublicUser(userAccount);
      
      // Store user in auth service
      this.setStoredUser(user);
      
      // Handle credential storage
      if (rememberCredentials) {
        this.setStoredCredentials({ email, password });
      } else {
        this.clearStoredCredentials();
      }
      
      return user;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Invalid email or password');
    }
  }

  static async signup(data: SignupData): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Create user in database
      const userAccount = UserDatabase.createUser(data);
      
      // Create session
      UserDatabase.createSession(userAccount.id, true);
      
      // Convert to public user object
      const user = toPublicUser(userAccount);
      
      // Store user in auth service
      this.setStoredUser(user);
      
      // Store credentials for convenience
      this.setStoredCredentials({ email: data.email, password: data.password });

      return user;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred during signup');
    }
  }

  static async updateProfile(data: UpdateProfileData): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const currentUser = this.getStoredUser();
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    try {
      // Update user in database
      const updatedUserAccount = UserDatabase.updateUser(currentUser.id, data);
      
      // Convert to public user object
      const updatedUser = toPublicUser(updatedUserAccount);
      
      // Update stored user
      this.setStoredUser(updatedUser);
      
      return updatedUser;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update profile');
    }
  }

  static logout(): void {
    // Clear session from database
    UserDatabase.clearSession();
    
    // Clear stored user
    this.clearStoredUser();
    
    // Don't clear credentials on logout, only when explicitly requested
  }

  static clearAllData(): void {
    this.clearStoredUser();
    this.clearStoredCredentials();
    UserDatabase.clearAllData();
  }

  // Check if current session is valid
  static isSessionValid(): boolean {
    if (typeof window === 'undefined') return false;
    
    const session = UserDatabase.getSession();
    const storedUser = this.getStoredUser();
    
    return !!(session && storedUser && session.userId === storedUser.id);
  }

  // Restore session if valid
  static restoreSession(): User | null {
    if (!this.isSessionValid()) return null;
    
    const session = UserDatabase.getSession();
    if (!session) return null;
    
    const userAccount = UserDatabase.findUserById(session.userId);
    if (!userAccount) return null;
    
    const user = toPublicUser(userAccount);
    this.setStoredUser(user);
    
    return user;
  }

  // Get user activity
  static getUserActivity(limit: number = 20): Array<{
    id: string;
    action: string;
    timestamp: string;
    details?: Record<string, any>;
  }> {
    const currentUser = this.getStoredUser();
    if (!currentUser) return [];
    
    return UserDatabase.getUserActivity(currentUser.id, limit);
  }
}