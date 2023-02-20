import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(userName: string, password: string) {
    return this.http.post('http://localhost:3000/createuser', { userName, password });
  }
}
