import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { StorageService } from 'ngx-webstorage-service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token?: string | null;

  constructor(private http: HttpClient, private localStorage: StorageService) {}

  login(userName: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:3000/auth', { userName, password }).pipe(
      tap((response) => {
        this.token = response.token;
        this.localStorage.set(TOKEN_KEY, this.token);
      }),
      mapTo(true),
      catchError((error) => {
        console.error(error);
        return of(false);
      })
    );
  }

  logout(): void {
    this.token = null;
    this.localStorage.remove(TOKEN_KEY);
  }

  public get loggedIn(): boolean {
    return this.token !== null;
  }

  public get authToken(): string | null {
    return this.localStorage.get(TOKEN_KEY);
  }
}
