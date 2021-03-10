import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dukkan, DukkanIslem, DukkanKart } from '../models/Dukkan';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DukkanService {
  readonly dukkanUrl: string = 'https://localhost:5001/api/dukkan';
  constructor(private http: HttpClient, private router: Router) {}

  dukkanlariGetir(): Observable<DukkanKart[]> {
    return this.http.get<DukkanKart[]>(this.dukkanUrl);
  }

  dukkanGetir(id: number): Observable<Dukkan[]> {
    return this.http.get<Dukkan[]>(`${this.dukkanUrl}/${id}`);
  }

  dukkanOlustur(dukkan: DukkanIslem): Observable<any> {
    return this.http.post(this.dukkanUrl, dukkan);
  }

  dukkanSil(id: number): Observable<any> {
    return this.http.delete(`${this.dukkanUrl}/${id}`);
  }

  dukkanGuncelle(id: number, dukkan: DukkanIslem): Observable<any> {
    return this.http.put(`${this.dukkanUrl}/${id}`, dukkan);
  }
}
