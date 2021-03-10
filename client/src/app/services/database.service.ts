import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnaSayfaKart } from '../models/Dukkan';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  readonly databaseUrl: string = 'https://localhost:5001/api/DataBase/';

  constructor(private http: HttpClient) {}

  kartAnasayfa(): Observable<AnaSayfaKart[]> {
    return this.http.get<AnaSayfaKart[]>(`${this.databaseUrl}AnaSayfa`);
  }
}
