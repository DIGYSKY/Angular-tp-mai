import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private users: User[] = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
  ];

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    const user = this.users.find(
      u => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      const token = 'fake-jwt-token-' + Math.random();
      return of({ token }).pipe(
        tap(() => {
          localStorage.setItem('token', token);
          this.isAuthenticatedSubject.next(true);
        })
      );
    }

    return of({ error: 'Identifiants invalides' });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
} 