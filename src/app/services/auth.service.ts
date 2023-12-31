import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://content.props.id/auth';

  isUserLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  userId!: Pick<User, 'id'>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  login(email: Pick<User, 'email'>, password: Pick<User, 'password'>): Observable<{ token: string; userId: Pick<User, 'id'> }> {
    return this.http
      .post<{ token: string; userId: Pick<User, 'id'> }>(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        tap((tokenObject) => {
          this.userId = tokenObject.userId;
          localStorage.setItem('token', tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(['']);
        }),
        catchError(this.errorHandlerService.handleErrorAndThrow<{ token: string; userId: Pick<User, 'id'> }>('login'))
      );
  }
}
