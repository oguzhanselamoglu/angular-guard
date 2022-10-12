import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated: boolean = false;

  constructor() { }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  login(): Observable<any> {
    this._authenticated = true;
    return of(this._authenticated);
  }

  check(): Observable<boolean> {
    return of(this._authenticated);
  }
}
