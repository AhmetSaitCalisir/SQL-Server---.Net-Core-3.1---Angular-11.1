import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnaSayfaKart } from '../models/Dukkan';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  databaseUrl: string = 'https://localhost:5001/api/DataBase/';

  constructor(private http: HttpClient) {}

  kartAnasayfa(): Observable<AnaSayfaKart[]> {
    return this.http.get<AnaSayfaKart[]>(`${this.databaseUrl}AnaSayfa`);
  }
}
