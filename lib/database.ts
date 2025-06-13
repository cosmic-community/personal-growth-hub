export interface UserAccount {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio?: string;
  joinedDate: string;
  lastLogin?: string;
  preferences?: {
    emailNotifications: boolean;
    darkMode: boolean;
    language: string;
  };
  activityLog?: Array<{
    id: string;
    action: string;
    timestamp: string;
    details?: Record<string, any>;
  }>;
}

export interface UserSession {
  userId: string;
  loginTime: string;
  rememberMe: boolean;
}

export interface ActivityLogEntry {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details?: Record<string, any>;
}

// Database class for managing user accounts with localStorage
export class UserDatabase {
  private static readonly USERS_KEY = 'growth_hub_users';
  private static readonly SESSION_KEY = 'growth_hub_session';
  private static readonly ACTIVITY_KEY = 'growth_hub_activity';

  // Initialize with default demo account
  private static getDefaultUsers(): UserAccount[] {
    return [
      {
        id: 'demo-user-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        bio: 'Focused on personal growth and mindfulness. Currently working on building better habits and achieving work-life balance.',
        joinedDate: '2024-01-01T00:00:00.000Z',
        lastLogin: new Date().toISOString(),
        preferences: {
          emailNotifications: true,
          darkMode: false,
          language: 'en'
        },
        activityLog: [
          {
            id: 'activity-1',
            action: 'account_created',
            timestamp: '2024-01-01T00:00:00.000Z',
            details: { source: 'demo' }
          }
        ]
      }
    ];
  }

  // Get all users from localStorage
  static getAllUsers(): UserAccount[] {
    if (typeof window === 'undefined') {
      return this.getDefaultUsers();
    }

    try {
      const stored = localStorage.getItem(this.USERS_KEY);
      if (!stored) {
        const defaultUsers = this.getDefaultUsers();
        this.saveAllUsers(defaultUsers);
        return defaultUsers;
      }
      return JSON.parse(stored) as UserAccount[];
    } catch (error) {
      console.error('Error loading users from database:', error);
      return this.getDefaultUsers();
    }
  }

  // Save all users to localStorage
  static saveAllUsers(users: UserAccount[]): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to database:', error);
    }
  }

  // Find user by email
  static findUserByEmail(email: string): UserAccount | null {
    const users = this.getAllUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
  }

  // Find user by ID
  static findUserById(id: string): UserAccount | null {
    const users = this.getAllUsers();
    return users.find(user => user.id === id) || null;
  }

  // Create new user account
  static createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): UserAccount {
    const users = this.getAllUsers();
    
    // Check if user already exists
    if (this.findUserByEmail(userData.email)) {
      throw new Error('An account with this email already exists');
    }

    const newUser: UserAccount = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      joinedDate: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      preferences: {
        emailNotifications: true,
        darkMode: false,
        language: 'en'
      },
      activityLog: [
        {
          id: `activity-${Date.now()}`,
          action: 'account_created',
          timestamp: new Date().toISOString(),
          details: { source: 'signup' }
        }
      ]
    };

    users.push(newUser);
    this.saveAllUsers(users);
    this.logActivity(newUser.id, 'account_created', { source: 'signup' });
    
    return newUser;
  }

  // Update user account
  static updateUser(userId: string, updates: Partial<UserAccount>): UserAccount {
    const users = this.getAllUsers();
    const userIndex = users.findIndex(user => user.id === userId);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const updatedUser = {
      ...users[userIndex]!,
      ...updates,
      id: userId, // Ensure ID doesn't change
      joinedDate: users[userIndex]!.joinedDate // Ensure joined date doesn't change
    };

    users[userIndex] = updatedUser;
    this.saveAllUsers(users);
    this.logActivity(userId, 'profile_updated', { fields: Object.keys(updates) });
    
    return updatedUser;
  }

  // Authenticate user login
  static authenticateUser(email: string, password: string): UserAccount {
    const user = this.findUserByEmail(email);
    
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    // Update last login
    const updatedUser = this.updateUser(user.id, {
      lastLogin: new Date().toISOString()
    });

    this.logActivity(user.id, 'user_login', { timestamp: new Date().toISOString() });
    
    return updatedUser;
  }

  // Session management
  static createSession(userId: string, rememberMe: boolean = false): UserSession {
    if (typeof window === 'undefined') {
      throw new Error('Sessions can only be created in browser environment');
    }

    const session: UserSession = {
      userId,
      loginTime: new Date().toISOString(),
      rememberMe
    };

    try {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      this.logActivity(userId, 'session_created', { rememberMe });
      return session;
    } catch (error) {
      console.error('Error creating session:', error);
      throw new Error('Failed to create session');
    }
  }

  static getSession(): UserSession | null {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem(this.SESSION_KEY);
      return stored ? JSON.parse(stored) as UserSession : null;
    } catch (error) {
      console.error('Error getting session:', error);
      return null;
    }
  }

  static clearSession(): void {
    if (typeof window === 'undefined') return;

    try {
      const session = this.getSession();
      if (session) {
        this.logActivity(session.userId, 'session_ended', { timestamp: new Date().toISOString() });
      }
      localStorage.removeItem(this.SESSION_KEY);
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  }

  // Activity logging
  static logActivity(userId: string, action: string, details?: Record<string, any>): void {
    try {
      const users = this.getAllUsers();
      const userIndex = users.findIndex(user => user.id === userId);
      
      if (userIndex === -1) return;

      const activityEntry: ActivityLogEntry = {
        id: `activity-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        userId,
        action,
        timestamp: new Date().toISOString(),
        details
      };

      if (!users[userIndex]!.activityLog) {
        users[userIndex]!.activityLog = [];
      }

      users[userIndex]!.activityLog!.push(activityEntry);
      
      // Keep only last 100 activities per user
      if (users[userIndex]!.activityLog!.length > 100) {
        users[userIndex]!.activityLog = users[userIndex]!.activityLog!.slice(-100);
      }

      this.saveAllUsers(users);
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }

  // Get user activity log
  static getUserActivity(userId: string, limit: number = 50): ActivityLogEntry[] {
    const user = this.findUserById(userId);
    if (!user || !user.activityLog) return [];
    
    return user.activityLog
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  // Database utilities
  static exportUserData(userId: string): UserAccount | null {
    return this.findUserById(userId);
  }

  static clearAllData(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem(this.USERS_KEY);
      localStorage.removeItem(this.SESSION_KEY);
      localStorage.removeItem(this.ACTIVITY_KEY);
    } catch (error) {
      console.error('Error clearing database:', error);
    }
  }

  // Database statistics
  static getDatabaseStats(): {
    totalUsers: number;
    activeUsers: number;
    totalActivity: number;
  } {
    const users = this.getAllUsers();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activeUsers = users.filter(user => 
      user.lastLogin && new Date(user.lastLogin) > thirtyDaysAgo
    ).length;

    const totalActivity = users.reduce((total, user) => 
      total + (user.activityLog?.length || 0), 0
    );

    return {
      totalUsers: users.length,
      activeUsers,
      totalActivity
    };
  }
}

// Helper functions for common database operations
export const db = {
  users: {
    create: UserDatabase.createUser.bind(UserDatabase),
    findByEmail: UserDatabase.findUserByEmail.bind(UserDatabase),
    findById: UserDatabase.findUserById.bind(UserDatabase),
    update: UserDatabase.updateUser.bind(UserDatabase),
    authenticate: UserDatabase.authenticateUser.bind(UserDatabase),
    getAll: UserDatabase.getAllUsers.bind(UserDatabase)
  },
  sessions: {
    create: UserDatabase.createSession.bind(UserDatabase),
    get: UserDatabase.getSession.bind(UserDatabase),
    clear: UserDatabase.clearSession.bind(UserDatabase)
  },
  activity: {
    log: UserDatabase.logActivity.bind(UserDatabase),
    getUserActivity: UserDatabase.getUserActivity.bind(UserDatabase)
  },
  utils: {
    exportUserData: UserDatabase.exportUserData.bind(UserDatabase),
    clearAll: UserDatabase.clearAllData.bind(UserDatabase),
    getStats: UserDatabase.getDatabaseStats.bind(UserDatabase)
  }
};