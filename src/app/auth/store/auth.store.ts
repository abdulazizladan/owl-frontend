import { Injectable, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'guardian' | 'staff' | 'student';
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  // Private state signals
  private readonly _user = signal<User | null>(null);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _isSuccess = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);
  private readonly _token = signal<string | null>(null);

  // Public computed signals
  readonly user = this._user.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly isSuccess = this._isSuccess.asReadonly();
  readonly error = this._error.asReadonly();
  readonly token = this._token.asReadonly();
  
  // Computed signals
  readonly isAuthenticated = computed(() => !!this._user());
  readonly isLoggedIn = computed(() => !!this._token() && !!this._user());
  readonly userRole = computed(() => this._user()?.role || null);
  readonly userName = computed(() => this._user()?.name || '');
  readonly userEmail = computed(() => this._user()?.email || '');

  // State snapshot
  readonly state = computed(() => ({
    user: this._user(),
    isAuthenticated: this.isAuthenticated(),
    isLoading: this._isLoading(),
    isSuccess: this._isSuccess(),
    error: this._error(),
    token: this._token()
  }));

  constructor() {
    // Initialize from localStorage if available
    this.initializeFromStorage();
  }

  // Actions
  login(credentials: LoginCredentials): void {
    this._setLoading(true);
    this._setError(null);
    this._setSuccess(false);

    // Simulate API call
    setTimeout(() => {
      if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
        const mockUser: User = {
          id: '1',
          email: credentials.email,
          name: 'Test User',
          role: 'admin',
          avatar: 'https://via.placeholder.com/150'
        };
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        this._setUser(mockUser);
        this._setToken(mockToken);
        this._setSuccess(true);
        this._setLoading(false);
        
        // Save to localStorage
        this.saveToStorage(mockUser, mockToken);
      } else {
        this._setError('Invalid email or password');
        this._setLoading(false);
        this._setSuccess(false);
      }
    }, 1500);
  }

  logout(): void {
    this._setUser(null);
    this._setToken(null);
    this._setSuccess(false);
    this._setError(null);
    this._setLoading(false);
    
    // Clear localStorage
    this.clearStorage();
  }

  refreshToken(): void {
    this._setLoading(true);
    
    // Simulate token refresh
    setTimeout(() => {
      const newToken = 'refreshed-jwt-token-' + Date.now();
      this._setToken(newToken);
      this._setLoading(false);
      
      // Update localStorage
      if (this._user()) {
        this.saveToStorage(this._user()!, newToken);
      }
    }, 1000);
  }

  clearError(): void {
    this._setError(null);
  }

  resetSuccess(): void {
    this._setSuccess(false);
  }

  // Private setters
  private _setUser(user: User | null): void {
    this._user.set(user);
  }

  private _setLoading(loading: boolean): void {
    this._isLoading.set(loading);
  }

  private _setSuccess(success: boolean): void {
    this._isSuccess.set(success);
  }

  private _setError(error: string | null): void {
    this._error.set(error);
  }

  private _setToken(token: string | null): void {
    this._token.set(token);
  }

  // Storage methods
  private saveToStorage(user: User, token: string): void {
    try {
      localStorage.setItem('auth_user', JSON.stringify(user));
      localStorage.setItem('auth_token', token);
    } catch (error) {
      console.error('Failed to save auth data to localStorage:', error);
    }
  }

  private clearStorage(): void {
    try {
      localStorage.removeItem('auth_user');
      localStorage.removeItem('auth_token');
    } catch (error) {
      console.error('Failed to clear auth data from localStorage:', error);
    }
  }

  private initializeFromStorage(): void {
    try {
      const storedUser = localStorage.getItem('auth_user');
      const storedToken = localStorage.getItem('auth_token');
      
      if (storedUser && storedToken) {
        const user = JSON.parse(storedUser) as User;
        this._setUser(user);
        this._setToken(storedToken);
      }
    } catch (error) {
      console.error('Failed to initialize auth from localStorage:', error);
      this.clearStorage();
    }
  }

  // Utility methods
  hasRole(role: User['role']): boolean {
    return this.userRole() === role;
  }

  hasAnyRole(roles: User['role'][]): boolean {
    return roles.includes(this.userRole() as User['role']);
  }

  // Selectors for specific state parts
  selectUser() {
    return this.user;
  }

  selectIsLoading() {
    return this.isLoading;
  }

  selectIsSuccess() {
    return this.isSuccess;
  }

  selectError() {
    return this.error;
  }

  selectIsAuthenticated() {
    return this.isAuthenticated;
  }
}
