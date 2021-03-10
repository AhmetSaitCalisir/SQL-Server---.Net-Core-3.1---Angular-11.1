import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musteri } from '../models/Musteri';

@Injectable({
  providedIn: 'root',
})
export class MusteriService {
  private readonly musteriUrl: string = 'https://localhost:5001/api/musteri';

  constructor(private http: HttpClient) {}

  musterileriGetir(): Observable<Musteri[]> {
    return this.http.get<Musteri[]>(this.musteriUrl);
  }
}
