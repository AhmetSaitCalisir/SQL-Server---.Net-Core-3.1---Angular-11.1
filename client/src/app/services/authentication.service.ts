import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/Kullanici';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly authUrl: string = 'https://localhost:5001/api/auth';

  constructor(private http: HttpClient) {}

  girisYap(kullanici: Kullanici): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, kullanici);
  }
}
